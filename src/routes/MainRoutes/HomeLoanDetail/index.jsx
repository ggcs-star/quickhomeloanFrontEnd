import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { homeLoanData } from "../../../db/homeLoanData";
import { Container } from "../../../components/Layout";

// Component imports (lazy loaded)
const SBIHeroSection = React.lazy(() => import("./components/SBIHeroSection"));
const SBIHighlightsSection = React.lazy(() => import("./components/SBIHighlightsSection"));
const EMICalculator = React.lazy(() => import("./components/EMICalculator"));
const EligibilityCalculator = React.lazy(() => import("./components/EligibilityCalculator"));
const ContactSupport = React.lazy(() => import("./components/ContactSupport"));
const CustomerTestimonials = React.lazy(() => import("./components/CustomerTestimonials"));
const FAQSection = React.lazy(() => import("./components/FAQSection"));
const HomeLoanProducts = React.lazy(() => import("./components/HomeLoanProducts"));
const InterestRateTrend = React.lazy(() => import("./components/InterestRateTrend"));
const HowToApply = React.lazy(() => import("./components/HowToApply"));
const RequiredDocuments = React.lazy(() => import("./components/RequiredDocuments"));
const FeesAndCharges = React.lazy(() => import("./components/FeesAndCharges"));
const KnowledgeCenter = React.lazy(() => import("./components/KnowledgeCenter"));

// Loading component
const LoadingFallback = () => (
    <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
        </div>
    </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Component Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center py-10 text-red-500">
                    Something went wrong. Please refresh the page.
                </div>
            );
        }
        return this.props.children;
    }
}

// SEO Helper functions (memoized)
const generateStructuredData = (loanData, bankName, currentUrl) => {
    if (!loanData) return null;
    return {
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        "name": `${bankName} Home Loan`,
        "description": loanData.heroSection?.description || `Apply for ${bankName} Home Loan at competitive interest rates.`,
        "provider": {
            "@type": "BankOrCreditUnion",
            "name": bankName,
            "url": currentUrl
        },
        "interestRate": loanData.emiCalculator?.defaultInterestRate || "8.50",
        "loanTerm": { "@type": "QuantitativeValue", "value": "30", "unitText": "years" },
        "loanType": "Home Loan",
        "areaServed": { "@type": "Country", "name": "India" }
    };
};

const HomeLoanDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loanData, setLoanData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentRate, setCurrentRate] = useState(null);
    const [apiError, setApiError] = useState(false);

    // Memoized bank name extraction
    const bankName = useMemo(() => {
        if (loanData?.title) {
            return loanData.title.replace("Home Loan", "").trim();
        }
        return slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Bank";
    }, [loanData, slug]);

    // Fetch dynamic rate with timeout and retry logic
    const fetchDynamicRate = useCallback(async (loanDataCopy) => {
        if (!loanDataCopy?.emiCalculator) return loanDataCopy;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

        try {
            const bankKey = loanDataCopy.title.toLowerCase().replace("home loan", "").trim();
            const res = await fetch(`${process.env.REACT_APP_API_URL || '/api'}/lenders`, {
                signal: controller.signal,
                headers: { 'Cache-Control': 'no-cache' }
            });

            clearTimeout(timeoutId);

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const json = await res.json();

            if (json?.status && json?.data) {
                const lender = json.data.find((item) => {
                    const apiName = item.name.toLowerCase();
                    return apiName.includes(bankKey) || bankKey.includes(apiName.split(" ")[0]);
                });

                const finalLender = lender || json.data.find((item) =>
                    item.name.toLowerCase().includes("state bank of india")
                );

                if (finalLender?.rate && loanDataCopy.emiCalculator) {
                    const numericRate = parseFloat(finalLender.rate);
                    if (!isNaN(numericRate)) {
                        loanDataCopy.emiCalculator.defaultInterestRate = numericRate;
                        setCurrentRate(numericRate);

                        if (loanDataCopy.emiCalculator.interestRange &&
                            numericRate > loanDataCopy.emiCalculator.interestRange.max) {
                            loanDataCopy.emiCalculator.interestRange.max = Math.ceil(numericRate + 5);
                        }
                    }
                }
            }
        } catch (error) {
            console.warn("API error for rate fetch:", error.message);
            setApiError(true);
            // Don't fail the whole page if API fails
        } finally {
            clearTimeout(timeoutId);
        }

        // Ensure max range is set to 100
        if (loanDataCopy.emiCalculator?.interestRange) {
            loanDataCopy.emiCalculator.interestRange.max = 100;
        }

        return loanDataCopy;
    }, []);

    // Main data fetching
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            window.scrollTo(0, 0);

            // Find loan data synchronously first
            const data = homeLoanData.find((loan) => loan.slug === slug);

            if (!data) {
                if (isMounted) {
                    navigate("/404", { replace: true });
                }
                return;
            }

            // Clone data immediately to show UI
            let updatedData = JSON.parse(JSON.stringify(data)); // Faster deep clone

            // Set initial data right away
            if (isMounted) {
                setLoanData(updatedData);
                setLoading(false);
            }

            // Fetch API rate in background (non-blocking)
            fetchDynamicRate(updatedData).then(finalData => {
                if (isMounted && finalData) {
                    setLoanData(finalData);
                }
            }).catch(error => {
                console.error("Background fetch error:", error);
            });
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [slug, navigate, fetchDynamicRate]);

    // Memoized SEO data to prevent recalculation
    // Memoized SEO data to prevent recalculation
    const seoData = useMemo(() => {
        if (!loanData) return null;

        const fullBankName = loanData?.title || "Home Loan";

        const cleanBankName = fullBankName
            .replace("Home Loan", "")
            .trim();

        const currentUrl = `https://www.quickhomeloan.in/home-loan/details/${slug}`;

        return {
            title: `${cleanBankName} Home Loan Interest Rate, EMI, Eligibility & Documents (2026)`,

            description: `Check ${cleanBankName} Home Loan interest rates, EMI calculator, eligibility, processing fees, and required documents. Compare ${cleanBankName} housing loan offers and apply online in 2026.`,

            keywords: `
            ${cleanBankName} home loan,
            ${cleanBankName} home loan interest rate,
            ${cleanBankName} home loan EMI calculator,
            ${cleanBankName} housing loan eligibility,
            ${cleanBankName} home loan documents required,
            ${cleanBankName} home loan processing fee,
            ${cleanBankName} home loan apply online
        `,

            canonical: currentUrl,

            ogTitle: `${cleanBankName} Home Loan Interest Rate, EMI & Eligibility (2026)`,

            ogDescription: `Explore ${cleanBankName} Home Loan interest rates, EMI details, eligibility criteria, processing charges, and required documents. Compare ${cleanBankName} housing loan offers and apply online.`,

            twitterTitle: `${cleanBankName} Home Loan Interest Rate & EMI Calculator (2026)`,

            twitterDescription: `Check ${cleanBankName} Home Loan rates, EMI, eligibility, processing fee, and documents required. Compare ${cleanBankName} housing loan offers and apply with confidence.`,

            structuredData: generateStructuredData(
                loanData,
                cleanBankName,
                currentUrl
            ),

            breadcrumbData: {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.quickhomeloan.in/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Home Loan",
                        item: "https://www.quickhomeloan.in/",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: fullBankName,
                        item: currentUrl,
                    },
                ],
            },
        };
    }, [loanData, slug]);

    // Show loading state
    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Loading... | QuickHomeLoan.in</title>
                    <meta name="robots" content="noindex, follow" />
                </Helmet>
                <LoadingFallback />
            </>
        );
    }

    // Show 404 for missing data
    if (!loanData) {
        return (
            <>
                <Helmet>
                    <title>Home Loan Not Found | QuickHomeLoan.in</title>
                    <meta name="robots" content="noindex, follow" />
                </Helmet>
                <div className="text-center py-10">
                    <h2 className="text-2xl font-bold text-red-500 mb-2">Loan Not Found</h2>
                    <p className="text-gray-600">The requested home loan information could not be found.</p>
                    <button
                        onClick={() => navigate('/home-loans')}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Browse All Loans
                    </button>
                </div>
            </>
        );
    }

    return (
        <ErrorBoundary>
            <Helmet>
                <title>{seoData?.title}</title>

                <meta
                    name="description"
                    content={seoData?.description}
                />

                <meta
                    name="keywords"
                    content={seoData?.keywords}
                />

                <link
                    rel="canonical"
                    href={seoData?.canonical}
                />

                <meta
                    name="robots"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />

                <meta
                    property="og:url"
                    content={seoData?.canonical}
                />

                <meta
                    property="og:title"
                    content={seoData?.ogTitle}
                />

                <meta
                    property="og:description"
                    content={seoData?.ogDescription}
                />

                <meta
                    property="og:site_name"
                    content="Quick Home Loan"
                />

                <meta
                    property="og:locale"
                    content="en_IN"
                />

                <meta
                    property="og:image"
                    content={
                        loanData?.heroSection?.image ||
                        "https://www.quickhomeloan.in/images/home-loan-og.jpg"
                    }
                />

                {/* Twitter */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content={seoData?.twitterTitle}
                />

                <meta
                    name="twitter:description"
                    content={seoData?.twitterDescription}
                />

                {/* Structured Data */}
                {seoData?.structuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(seoData.structuredData)}
                    </script>
                )}

                {seoData?.breadcrumbData && (
                    <script type="application/ld+json">
                        {JSON.stringify(seoData.breadcrumbData)}
                    </script>
                )}
            </Helmet>

            <div className="min-h-screen lg:pt-28 font-proximaNova text-gray-900">
                <h1 className="sr-only">{seoData.title}</h1>

                <React.Suspense fallback={<LoadingFallback />}>
                    {/* Hero Section - Critical */}
                    {loanData.heroSection && <SBIHeroSection data={loanData.heroSection} />}

                    {/* Highlights - Critical */}
                    <SBIHighlightsSection slug={slug} />

                    {/* Main Content Section */}
                    <section className="my-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                            {/* Left Column */}
                            <div className="w-full space-y-6">
                                {loanData.emiCalculator && (
                                    <React.Suspense
                                        fallback={
                                            <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
                                        }
                                    >
                                        <EMICalculator
                                            data={{
                                                ...loanData.emiCalculator,
                                                bankName:
                                                    loanData?.heroSection?.title || "Home Loan",
                                            }}
                                        />
                                    </React.Suspense>
                                )}

                                {loanData.homeLoanProducts && (
                                    <React.Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
                                        <HomeLoanProducts data={loanData.homeLoanProducts} />
                                    </React.Suspense>
                                )}

                                {loanData.interestRateTrend && (
                                    <React.Suspense
                                        fallback={
                                            <div className="h-80 bg-gray-100 animate-pulse rounded-lg"></div>
                                        }
                                    >
                                        <InterestRateTrend
                                            data={{
                                                ...loanData.interestRateTrend,
                                                bankName:
                                                    loanData?.heroSection?.title || "Home Loan",
                                            }}
                                        />
                                    </React.Suspense>
                                )}

                                {loanData.howToApply && (
                                    <React.Suspense
                                        fallback={
                                            <div className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                                        }
                                    >
                                        <HowToApply
                                            data={{
                                                ...loanData.howToApply,
                                                bankName:
                                                    loanData?.heroSection?.title || "Home Loan",
                                            }}
                                        />
                                    </React.Suspense>
                                )}

                                {loanData.requiredDocuments && (
                                    <React.Suspense
                                        fallback={
                                            <div className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                                        }
                                    >
                                        <RequiredDocuments
                                            data={{
                                                ...loanData.requiredDocuments,
                                                bankName:
                                                    loanData?.heroSection?.title || "Home Loan",
                                            }}
                                        />
                                    </React.Suspense>
                                )}

                                {loanData.feesAndCharges && (
                                    <React.Suspense
                                        fallback={
                                            <div className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                                        }
                                    >
                                        <FeesAndCharges
                                            data={{
                                                ...loanData.feesAndCharges,
                                                bankName:
                                                    loanData?.heroSection?.title || "Home Loan",
                                            }}
                                        />
                                    </React.Suspense>
                                )}

                                {loanData.knowledgeCenter && (
                                    <React.Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
                                        <KnowledgeCenter data={loanData.knowledgeCenter} />
                                    </React.Suspense>
                                )}
                            </div>

                            {/* Right Column - Sticky Sidebar */}
                            {loanData.eligibilityCalculator && (
                                <div className="w-full lg:sticky lg:top-20 self-start space-y-6">
                                    <React.Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
                                        <EligibilityCalculator data={loanData.eligibilityCalculator} />
                                    </React.Suspense>

                                    {loanData.contactSupport && (
                                        <React.Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>}>
                                            <ContactSupport data={loanData.contactSupport} />
                                        </React.Suspense>
                                    )}

                                    {loanData.customerTestimonials && (
                                        <React.Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
                                            <CustomerTestimonials data={loanData.customerTestimonials} />
                                        </React.Suspense>
                                    )}

                                    {loanData.faqSection && (
                                        <React.Suspense
                                            fallback={
                                                <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
                                            }
                                        >
                                            <FAQSection
                                                data={{
                                                    ...loanData.faqSection,
                                                    bankName:
                                                        loanData?.heroSection?.title || "Home Loan",
                                                }}
                                            />
                                        </React.Suspense>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                </React.Suspense>
            </div>
        </ErrorBoundary>
    );
};

export default HomeLoanDetail;