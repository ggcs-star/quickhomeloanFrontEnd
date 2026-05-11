import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { homeLoanByBhkTypes } from "../../../db/homeLoanByBhkTypes";

import HeroSection from "./components/HeroSection";
import { Container } from "../../../components/Layout";
import IntroSection from "./components/IntroSection";
import InterestRatesSection from "./components/InterestRatesSection";
import EmiCalculatorSection from "./components/EmiCalculatorSection";
import EligibilityCalculatorSection from "./components/EligibilityCalculatorSection";
import WhatIsPlotLoanSection from "./components/WhatIsPlotLoanSection";
import TypesAndBenefitsSection from "./components/TypesAndBenefitsSection";
import EligibilitySection from "./components/EligibilitySection";
import DocumentsSection from "./components/DocumentsSection";
import ComparisonSection from "./components/ComparisonSection";
import TaxBenefitsSection from "./components/TaxBenefitsSection";
import ApplyNowSection from "./components/ApplyNowSection";
import FaqsSection from "./components/FaqsSection";
import ContactSupport from "./components/ContactSupport";
import CustomerTestimonials from "./components/CustomerTestimonials";

const generateStructuredData = (loanData, currentUrl) => {
    if (!loanData) return null;

    return {
        "@context": "https://schema.org",
        "@type": "FinancialProduct",

        name: loanData?.heroSection?.title || "Home Loan",

        description:
            loanData?.heroSection?.metaDescription ||
            "Compare home loan interest rates, EMI, eligibility and documents required.",

        provider: {
            "@type": "Organization",
            name: "Quick Home Loan",
            url: "https://www.quickhomeloan.in",
        },

        loanType: "Home Loan",

        areaServed: {
            "@type": "Country",
            name: "India",
        },

        url: currentUrl,
    };
};

const HomeLoanByBhkTypes = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const bhkLoan = homeLoanByBhkTypes.find(
        (item) => item.slug === slug
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const seoData = useMemo(() => {
        if (!bhkLoan) return null;

        const currentYear = new Date().getFullYear();

        const cleanTitle =
            bhkLoan?.heroSection?.title
                ?.replace(/– Interest Rates, Eligibility & Benefits \(\d{4}\)/, "")
                ?.trim() || "Home Loan";

        const currentUrl = `https://www.quickhomeloan.in/home-loan/types/${slug}`;

        return {
            title: `${cleanTitle} – Interest Rates, Eligibility & Benefits (${currentYear})`,

            description:
                bhkLoan?.heroSection?.metaDescription ||
                `Compare ${cleanTitle.toLowerCase()} interest rates, EMI options, eligibility criteria, processing fees, and required documents in ${currentYear}.`,

            keywords: `
        ${cleanTitle},
        ${cleanTitle} interest rate,
        ${cleanTitle} EMI calculator,
        ${cleanTitle} eligibility,
        ${cleanTitle} documents required,
        ${cleanTitle} processing fee
      `,

            canonical: currentUrl,

            ogTitle: `${cleanTitle} EMI & Eligibility (${currentYear})`,

            ogDescription:
                bhkLoan?.heroSection?.metaDescription ||
                `Explore ${cleanTitle} interest rates, EMI options, eligibility criteria, processing charges and required documents.`,

            twitterTitle: `${cleanTitle} EMI Calculator (${currentYear})`,

            twitterDescription:
                bhkLoan?.heroSection?.metaDescription ||
                `Check ${cleanTitle} EMI calculator, interest rates, eligibility and documents required.`,

            structuredData: generateStructuredData(
                bhkLoan,
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
                        name: cleanTitle,
                        item: currentUrl,
                    },
                ],
            },
        };
    }, [bhkLoan, slug]);

    if (!bhkLoan) {
        return (
            <>
                <Helmet>
                    <title>Loan Details Not Found | QuickHomeLoan.in</title>
                    <meta name="robots" content="noindex, follow" />
                </Helmet>

                <Container>
                    <div className="min-h-screen flex items-center justify-center bg-gray-50">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Loan details not found.
                        </h2>
                    </div>
                </Container>
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
                        {JSON.stringify(seoData.structuredData)}
                    </script>
                )}

                {seoData?.breadcrumbData && (
                    <script type="application/ld+json">
                        {JSON.stringify(seoData.breadcrumbData)}
                    </script>
                )}
            </Helmet>

            <div className="min-h-screen font-proximaNova">
                <Container>

                    {/* Hero Section */}
                    {bhkLoan.heroSection && (
                        <HeroSection data={bhkLoan.heroSection} />
                    )}

                    <section className="my-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">

                            {/* Left Section */}
                            <div className="w-full space-y-6">

                                {bhkLoan.introSection && (
                                    <IntroSection data={bhkLoan.introSection} />
                                )}

                                {bhkLoan.interestRatesSection && (
                                    <InterestRatesSection
                                        data={{
                                            ...bhkLoan.interestRatesSection,

                                            bankName:
                                                bhkLoan?.heroSection?.title || "Home Loan",
                                        }}
                                    />
                                )}

                                {bhkLoan.emiCalculatorSection && (
                                    <EmiCalculatorSection data={bhkLoan.emiCalculatorSection} />
                                )}



                                {bhkLoan.eligibilityCalculatorSection && (
                                    <EligibilityCalculatorSection
                                        data={{
                                            ...bhkLoan.eligibilityCalculatorSection,

                                            bankName:
                                                bhkLoan?.heroSection?.title || "Home Loan",
                                        }}
                                    />
                                )}

                                {bhkLoan.whatIsPlotLoanSection && (
                                    <WhatIsPlotLoanSection
                                        data={bhkLoan.whatIsPlotLoanSection}
                                    />
                                )}

                                {bhkLoan.typesAndBenefitsSection && (
                                    <TypesAndBenefitsSection
                                        data={bhkLoan.typesAndBenefitsSection}
                                    />
                                )}

                                {bhkLoan.eligibilitySection && (
                                    <EligibilitySection data={bhkLoan.eligibilitySection} />
                                )}

                                {bhkLoan.documentsSection && (
                                    <DocumentsSection
                                        data={{
                                            ...bhkLoan.documentsSection,

                                            bankName:
                                                bhkLoan?.heroSection?.title || "Home Loan",
                                        }}
                                    />
                                )}

                                {bhkLoan.comparisonSection && (
                                    <ComparisonSection data={bhkLoan.comparisonSection} />
                                )}

                                {bhkLoan.taxBenefitsSection && (
                                    <TaxBenefitsSection data={bhkLoan.taxBenefitsSection} />
                                )}

                                {bhkLoan.applyNowSection && (
                                    <ApplyNowSection data={bhkLoan.applyNowSection} />
                                )}

                            </div>

                            {/* Right Sidebar */}
                            <div className="w-full lg:sticky lg:top-20 self-start space-y-6">

                                {bhkLoan.contactSupport && (
                                    <ContactSupport data={bhkLoan.contactSupport} />
                                )}

                                {bhkLoan.customerTestimonials && (
                                    <CustomerTestimonials
                                        data={bhkLoan.customerTestimonials}
                                    />
                                )}

                               {bhkLoan.faqsSection && (
  <FaqsSection
    data={{
      ...bhkLoan.faqsSection,

      bankName:
        bhkLoan?.heroSection?.title || "Home Loan",
    }}
  />
)}


                            </div>
                        </div>
                    </section>

                </Container>
            </div>
        </>
    );
};

export default HomeLoanByBhkTypes;