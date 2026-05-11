import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { homeLoanByProperty } from "../../../db/homeLoanByProperty";
import { Container } from "../../../components/Layout";

// Component imports
import SixBHKHeroSection from "./components/SixBHKHeroSection";
import AboutSixBHKSection from "./components/AboutSixBHKSection";
import SixBHKFeaturesSection from "./components/SixBHKFeaturesSection";
import SixBHKEligibilitySection from "./components/SixBHkEligibilitySection";
import SixBHKInterestRatesSection from "./components/SixBHKInterestRatesSection";
import SixBHKEligibilityCalculator from "./components/SixBHKEligibilityCalculator";
import SixBHKEMICalculator from "./components/SixBHKEMICalculator";
import SixBHKTaxBenefitsSection from "./components/SixBHKTaxBenefitsSection";
import SixBHKWhyChooseSection from "./components/SixBHKWhyChooseSection";
import SixBHKApplySection from "./components/SixBHKApplySection";
import SixBHKLoanTipsSection from "./components/SixBHKLoanTipsSection";
import SixBHKFAQSection from "./components/SixBHKFAQSection";
import CustomerTestimonials from "../HomeLoanDetail/components/CustomerTestimonials";
import ContactSupport from "./components/ContactSupport";

// SEO Helper function to generate structured data
const generateStructuredData = (propertyData, propertyName, propertyType, currentUrl) => {
    if (!propertyData) return null;

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${propertyName} Home Loan`,
        "description": propertyData.heroSection?.description || `Get home loan for ${propertyName} property. Check eligibility, calculate EMI, and apply online for your dream ${propertyType} home.`,
        "brand": {
            "@type": "Brand",
            "name": "QuickHomeLoan"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "0",
            "highPrice": "0",
            "offerCount": "1",
            "availability": "https://schema.org/InStock",
            "eligibleRegion": {
                "@type": "Country",
                "name": "India"
            }
        },
        "category": "Home Loan",
        "audience": {
            "@type": "Audience",
            "name": "Home Buyers",
            "geographicArea": {
                "@type": "Country",
                "name": "India"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        }
    };
};

// Generate FAQ structured data
const generateFAQStructuredData = (faqData) => {
    if (!faqData || !faqData.items || faqData.items.length === 0) return null;

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.items.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };
};

// Generate Breadcrumb structured data
const generateBreadcrumbData = (propertyName, propertyType, currentUrl) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.quickhomeloan.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Home Loans by Property",
                "item": "https://www.quickhomeloan.in/home-loan-by-property"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${propertyName} ${propertyType} Home Loan`,
                "item": currentUrl
            }
        ]
    };
};

// Generate HowTo structured data for loan application process
const generateHowToStructuredData = (applySection) => {
    if (!applySection || !applySection.steps) return null;

    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Apply for Home Loan",
        "description": "Step-by-step guide to apply for your home loan",
        "step": applySection.steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description,
            "url": `https://www.quickhomeloan.in/how-to-apply#step-${index + 1}`
        }))
    };
};

const HomeLoanByProperty = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [propertyData, setpropertyData] = useState(null);
    const [loading, setLoading] = useState(true);

 const getPropertyInfo = () => {
    if (propertyData?.propertyType) {
        return {
            name: propertyData.propertyType.replace(/-/g, " "),
            type: propertyData.propertyType
        };
    }

    // Take title from heroSection DB
    if (propertyData?.heroSection?.title) {
        return {
            name: propertyData.heroSection.title,
            type: propertyData.heroSection.title
                .toLowerCase()
                .replace(/\s+/g, "-")
        };
    }

    // Parse slug like "2-bhk", "3-bhk", "villa", "penthouse"
    const propertyType =
        slug?.replace(/-/g, " ") || "Property";

    return {
        name: propertyType,
        type: slug || "property"
    };
};

    // ✅ Fetch data based on slug
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);

        const data = homeLoanByProperty.find((property) => property.slug === slug);

        if (!data) {
            navigate("/404", { replace: true });
        } else {
            setpropertyData(data);
        }

        setLoading(false);
    }, [slug, navigate]);

    const propertyInfo = getPropertyInfo();
    const propertyName = propertyInfo.name;
    const propertyType = propertyInfo.type;
    const currentUrl = `https://www.quickhomeloan.in/home-loan-by-property/${slug}`;

    const structuredData = generateStructuredData(propertyData, propertyName, propertyType, currentUrl);
    const faqStructuredData = generateFAQStructuredData(propertyData?.faqSection);
    const breadcrumbData = generateBreadcrumbData(propertyName, propertyType, currentUrl);
    const howToStructuredData = generateHowToStructuredData(propertyData?.applySection);

    // Generate meta description
    const getMetaDescription = () => {
        if (propertyData?.heroSection?.description) {
            return propertyData.heroSection.description;
        }
        return `Get the best home loan for ${propertyName} property. Check eligibility, calculate EMI, compare interest rates, and apply online for your dream ${propertyName} home. Easy approval process.`;
    };

    // Generate meta keywords
    const getMetaKeywords = () => {
        const keywords = [
            `${propertyType} home loan`,
            `${propertyType} loan`,
            `home loan for ${propertyType}`,
            `${propertyType} property loan`,
            `${propertyName} home loan eligibility`,
            `${propertyName} EMI calculator`,
            "home loan India",
            "property loan",
            "real estate loan",
            "home financing"
        ];
        return keywords.join(", ");
    };

    // Generate title
    const getTitle = () => {
        return `Home Loan for ${propertyName} - Eligibility, EMI & Interest Rate (2026)`;
    };

    // Generate OG image URL
    const getOGImage = () => {
        if (propertyData?.heroSection?.image) {
            return propertyData.heroSection.image;
        }
        return `https://www.quickhomeloan.in/images/${propertyType}-home-loan-og.jpg`;
    };

    // 🕐 Loading state
    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Loading... | QuickHomeLoan.in</title>
                    <meta name="robots" content="noindex, follow" />
                </Helmet>
                <div className="text-center py-10">Loading...</div>
            </>
        );
    }

    // ❌ Not Found state
    if (!propertyData) {
        return (
            <>
                <Helmet>
                    <title>Home Loan Not Found | QuickHomeLoan.in</title>
                    <meta name="description" content="The requested home loan information could not be found. Browse our other home loan options by property type." />
                    <meta name="robots" content="noindex, follow" />
                </Helmet>
                <div className="text-center py-10 text-red-500">
                    Loan details not found. Please check the URL or go back.
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>{getTitle()}</title>
                <meta name="description" content={getMetaDescription()} />
                <meta name="keywords" content={getMetaKeywords()} />
                <meta name="author" content="QuickHomeLoan.in" />

                {/* Canonical URL */}
                <link rel="canonical" href={currentUrl} />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="product" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={getTitle()} />
                <meta property="og:description" content={getMetaDescription()} />
                <meta property="og:image" content={getOGImage()} />
                <meta property="og:image:alt" content={`${propertyName} Home Loan - Apply Online`} />
                <meta property="og:site_name" content="QuickHomeLoan.in" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentUrl} />
                <meta name="twitter:title" content={getTitle()} />
                <meta name="twitter:description" content={getMetaDescription()} />
                <meta name="twitter:image" content={getOGImage()} />
                <meta name="twitter:site" content="@QuickHomeLoan" />
                <meta name="twitter:creator" content="@QuickHomeLoan" />

                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />

                {/* Geo Location for India */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="20.5937;78.9629" />

                {/* Mobile Optimization */}
                <meta name="apple-mobile-web-app-title" content={`${propertyName} Home Loan`} />
                <meta name="application-name" content={`${propertyName} Home Loan`} />

                {/* Structured Data - Main Product */}
                {structuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(structuredData)}
                    </script>
                )}

                {/* Structured Data - FAQ */}
                {faqStructuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(faqStructuredData)}
                    </script>
                )}

                {/* Structured Data - Breadcrumb */}
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbData)}
                </script>

                {/* Structured Data - HowTo (Application Process) */}
                {howToStructuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(howToStructuredData)}
                    </script>
                )}

                {/* Structured Data - Property-specific schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": `${propertyName} Home Loan Options`,
                        "description": getMetaDescription(),
                        "url": currentUrl,
                        "address": {
                            "@type": "Country",
                            "addressCountry": "IN"
                        },
                        "propertyType": propertyType.toUpperCase().includes("BHK") ? "Apartment" : "SingleFamily",
                        "numberOfRooms": propertyType.match(/\d+/)?.[0] || null,
                        "loanPaymentFrequency": "Monthly",
                        "category": "FINANCE"
                    })}
                </script>
            </Helmet>

            <div className="bg-gray-50">
                <div className="min-h-screen font-proximaNova text-gray-900">
                    {/* Hidden H1 for SEO */}
                    <h1 className="sr-only">{getTitle()}</h1>
                    {/* 
                    <nav aria-label="Breadcrumb" className="pt-20 max-w-7xl mx-auto px-4 py-3 text-sm text-gray-600">
                        <ol className="flex flex-wrap gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <a href="https://www.quickhomeloan.in/" className="hover:text-blue-600" itemProp="item">
                                    <span itemProp="name">Home</span>
                                </a>
                                <span className="mx-2">/</span>
                                <meta itemProp="position" content="1" />
                            </li>
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <a href="https://www.quickhomeloan.in/home-loan-by-property" className="hover:text-blue-600" itemProp="item">
                                    <span itemProp="name">Home Loans by Property</span>
                                </a>
                                <span className="mx-2">/</span>
                                <meta itemProp="position" content="2" />
                            </li>
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <span itemProp="name" className="text-gray-900 font-medium">{propertyName} Home Loan</span>
                                <meta itemProp="position" content="3" />
                                <meta itemProp="item" content={currentUrl} />
                            </li>
                        </ol>
                    </nav> */}

                    {/* 🏦 Hero Section */}
                    {propertyData.heroSection && <SixBHKHeroSection data={propertyData.heroSection} />}

                    {/* Breadcrumb navigation for users */}


                    <section className="my-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                            {/* 🧾 Left Column — EMI Calculator + Home Loan Products */}
                            <div className="w-full space-y-6">
                                {propertyData.aboutSection && <AboutSixBHKSection data={propertyData.aboutSection} />}
                                {propertyData.featuresSection && (<SixBHKFeaturesSection data={propertyData.featuresSection} />)}
                                {propertyData.eligibilityCalculator && (<SixBHKEligibilityCalculator data={propertyData.eligibilityCalculator} />)}
                                {propertyData.emiCalculator && (<SixBHKEMICalculator data={propertyData.emiCalculator} />)}

                                {propertyData.eligibilitySection && (
                                    <SixBHKEligibilitySection data={propertyData.eligibilitySection} />
                                )}

                                {propertyData.interestRatesSection && (
                                    <SixBHKInterestRatesSection data={propertyData.interestRatesSection} />
                                )}

                                {propertyData.taxBenefitsSection && (
                                    <SixBHKTaxBenefitsSection data={propertyData.taxBenefitsSection} />
                                )}
                                {propertyData.whyChooseSection && (
                                    <SixBHKWhyChooseSection data={propertyData.whyChooseSection} />
                                )}

                                {propertyData.applySection && (
                                    <SixBHKApplySection data={propertyData.applySection} />
                                )}
                                {propertyData.loanTipsSection && (
                                    <SixBHKLoanTipsSection data={propertyData.loanTipsSection} />
                                )}
                            </div>

                            <div className="w-full lg:sticky lg:top-20 self-start space-y-6">
                                {propertyData.contactSupport && (
                                    <ContactSupport data={propertyData.contactSupport} />
                                )}

                                {propertyData.customerTestimonials && (
                                    <CustomerTestimonials data={propertyData.customerTestimonials} />
                                )}
                                {propertyData.faqSection && (
                                    // <SixBHKFAQSection data={propertyData.faqSection} />
                                         <SixBHKFAQSection
                                                data={{
                                                    ...propertyData.faqSection,
                                                    bankName:
                                                        propertyData?.heroSection?.title || "Home Loan",
                                                }}
                                            />
                                )}

                                
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HomeLoanByProperty;