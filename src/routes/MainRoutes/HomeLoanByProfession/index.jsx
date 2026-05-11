import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { homeLoanByProfession } from "../../../db/homeLoanByProfession";

// Component imports
import HeroSection from "./components/HeroSection";
import DoctorBenefitsSection from "./components/DoctorBenefitsSection.JSX";
import DoctorEligibilitySection from "./components/DoctorEligibilitySection";
import DoctorComparisonSection from "./components/DoctorComparisonSection";
import DoctorRatesSection from "./components/DoctorRatesSection";
import DoctorEmiCalculatorSection from "./components/DoctorEmiCalculatorSection";
import DoctorTaxBenefitsSection from "./components/DoctorTaxBenefitsSection";
import DoctorApplicationProcessSection from "./components/DoctorApplicationProcessSection";
import DoctorEligibilitytwoSection from "./components/DoctorEligibilitytwoSection";
import DoctorFaqSection from "./components/DoctorFaqSection";
import DoctorApplySection from "./components/DoctorApplySection";
import DoctorWhyChooseSection from "./components/DoctorWhyChooseSection";

const HomeLoanByProfession = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [professionData, setProfessionData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [slug]);

    // Fetch profession data
    useEffect(() => {
        setLoading(true);

        const data = homeLoanByProfession.find(
            (item) => item.slug === slug
        );

        if (!data) {
            navigate("/404", { replace: true });
        } else {
            setProfessionData(data);
        }

        setLoading(false);
    }, [slug, navigate]);

    // SEO Data
    const seoData = useMemo(() => {
        if (!professionData) return null;

        const profession =
            professionData.profession || "Professionals";

        const currentUrl = `https://www.quickhomeloan.in/home-loan-by-profession/${slug}`;

        return {
            title: `Home Loan for ${profession} - Eligibility, EMI & Interest Rate (2026)`,

            description: `Check Home Loan for ${profession} with latest interest rates, EMI calculator, eligibility, tax benefits, required documents, and application process. Apply online in 2026.`,

            keywords: `
                home loan for ${profession},
                ${profession} home loan,
                ${profession} housing loan,
                home loan eligibility for ${profession},
                ${profession} loan EMI calculator,
                ${profession} home loan interest rates,
                home loan for salaried professionals
            `,

            canonical: currentUrl,

            ogTitle: `Home Loan for ${profession} - EMI & Interest Rate (2026)`,

            ogDescription: `Explore Home Loan options for ${profession}. Check EMI, eligibility, tax benefits, processing fees, and apply online.`,

            twitterTitle: `Home Loan for ${profession} (2026)`,

            twitterDescription: `Check latest Home Loan offers for ${profession} including EMI, eligibility, tax benefits, and documents required.`,

            structuredData: {
                "@context": "https://schema.org",
                "@type": "FinancialProduct",
                name: `Home Loan for ${profession}`,
                description: `Affordable home loan solutions for ${profession}.`,
                provider: {
                    "@type": "Organization",
                    name: "Quick Home Loan",
                    url: "https://www.quickhomeloan.in",
                },
                areaServed: {
                    "@type": "Country",
                    name: "India",
                },
                loanType: "Home Loan",
                url: currentUrl,
            },

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
                        name: "Home Loan By Profession",
                        item: "https://www.quickhomeloan.in/home-loan-by-profession",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: profession,
                        item: currentUrl,
                    },
                ],
            },
        };
    }, [professionData, slug]);

    // Loading state
    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Loading... | QuickHomeLoan.in</title>
                    <meta
                        name="robots"
                        content="noindex, follow"
                    />
                </Helmet>

                <div className="text-center py-10">
                    Loading...
                </div>
            </>
        );
    }

    // Not found
    if (!professionData) {
        return (
            <>
                <Helmet>
                    <title>
                        Profession Not Found | QuickHomeLoan.in
                    </title>

                    <meta
                        name="robots"
                        content="noindex, follow"
                    />
                </Helmet>

                <div className="text-center py-10 text-red-500">
                    Profession not found. Please check the URL or go
                    back.
                </div>
            </>
        );
    }

    return (
        <>
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
                        {JSON.stringify(
                            seoData.structuredData
                        )}
                    </script>
                )}

                {seoData?.breadcrumbData && (
                    <script type="application/ld+json">
                        {JSON.stringify(
                            seoData.breadcrumbData
                        )}
                    </script>
                )}
            </Helmet>

            <div className="text-gray-900 lg:pt-18 min-h-screen">
                {/* SEO H1 */}
                <h1 className="sr-only">
                    {seoData?.title}
                </h1>

                {/* Hero Section */}
                {professionData.heroSection && (
                    <HeroSection
                        data={professionData.heroSection}
                        profession={professionData.profession}
                    />
                )}

                {/* Benefits */}
                {professionData.doctorBenefitsSection && (
                    <DoctorBenefitsSection
                        data={
                            professionData.doctorBenefitsSection
                        }
                    />
                )}

                {/* Eligibility */}
                {professionData.doctorEligibilitySection && (
                    <DoctorEligibilitySection
                        data={
                            professionData.doctorEligibilitySection
                        }
                    />
                )}

                {/* Comparison */}
                {professionData.doctorComparisonSection && (
                    <DoctorComparisonSection
                        data={
                            professionData.doctorComparisonSection
                        }
                    />
                )}

                {/* Rates */}
                {professionData.doctorRatesSection && (
                    <DoctorRatesSection
                        data={
                            professionData.doctorRatesSection
                        }
                    />
                )}

                {/* EMI Calculator */}
                {professionData.doctorEmiCalculatorSection && (
                    <DoctorEmiCalculatorSection
                        data={
                            professionData.doctorEmiCalculatorSection
                        }
                    />
                )}

                {/* Tax Benefits */}
                {professionData.doctorTaxBenefitsSection && (
                    <DoctorTaxBenefitsSection
                        data={
                            professionData.doctorTaxBenefitsSection
                        }
                    />
                )}

                {/* Application Process */}
                {professionData.doctorApplicationProcessSection && (
                    <DoctorApplicationProcessSection
                        data={
                            professionData.doctorApplicationProcessSection
                        }
                    />
                )}

                {/* Additional Eligibility */}
                {professionData.doctorEligibilitytwoSection && (
                    <DoctorEligibilitytwoSection
                        data={
                            professionData.doctorEligibilitytwoSection
                        }
                    />
                )}

                {/* Why Choose */}
                {professionData.doctorWhyChooseSection && (
                    <DoctorWhyChooseSection
                        data={
                            professionData.doctorWhyChooseSection
                        }
                    />
                )}

                {/* FAQs */}
                {professionData.doctorFaqSection && (
                    <DoctorFaqSection
                        data={professionData.doctorFaqSection}
                    />
                )}

                {/* Apply Section */}
                {professionData.doctorApplySection && (
                    <DoctorApplySection
                        data={professionData.doctorApplySection}
                    />
                )}
            </div>
        </>
    );
};

export default HomeLoanByProfession;