import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { homeLoanBySalary } from "../../../db/homeLoanBySalary";
import SalaryHeroSection from "./components/SalaryHeroSection";

import { Container } from "../../../components/Layout";
import SalaryQuickStats from "./components/SalaryQuickStats";
import SalaryEligibilityCriteria from "./components/SalaryEligibilityCriteria";
import SalaryEmiAndOffers from "./components/SalaryEmiAndOffers.JSX";
import SalaryDocumentsSection from "./components/SalaryDocumentsSection";
import SalaryTipsSection from "./components/SalaryTipsSection";
import SalaryFAQSection from "./components/SalaryFAQSection";
import SalaryCTASection from "./components/SalaryCTASection";
import ContactSupport from "./components/ContactSupport";
import CustomerTestimonials from "./components/CustomerTestimonials";

// SEO Helper function to generate structured data
const generateStructuredData = (loan, salaryRange, currentUrl) => {
  if (!loan) return null;

  const formattedSalary = salaryRange.replace(/-/g, " ").toUpperCase();
  const numericSalary = parseInt(salaryRange.replace(/[^\d]/g, '')) || 0;
  const monthlySalary = numericSalary / 12;

  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `Home Loan for ₹${formattedSalary} Salary`,
    "description": loan.heroSection?.description || `Get home loan approval with ₹${formattedSalary} salary. Check eligibility, calculate EMI, and apply online for best home loan offers.`,
    "provider": {
      "@type": "Organization",
      "name": "QuickHomeLoan",
      "url": "https://www.quickhomeloan.in"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0",
        "priceCurrency": "INR"
      },
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@type": "Country",
        "name": "India"
      }
    },
    "incomeRequirement": {
      "@type": "QuantitativeValue",
      "value": numericSalary,
      "unitText": "Annual Salary (INR)",
      "monthlyValue": monthlySalary,
      "unitText2": "Monthly Salary (INR)"
    },
    "category": "Home Loan",
    "audience": {
      "@type": "Audience",
      "name": "Salaried Professionals",
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
const generateBreadcrumbData = (salaryRange, currentUrl) => {
  const formattedSalary = salaryRange.replace(/-/g, " ").toUpperCase();
  
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
        "name": "Home Loans by Salary",
        "item": "https://www.quickhomeloan.in/home-loan-by-salary"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `₹${formattedSalary} Salary Home Loan`,
        "item": currentUrl
      }
    ]
  };
};

// Generate HowTo structured data for application process
const generateHowToStructuredData = (ctaSection) => {
  if (!ctaSection) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Apply for Home Loan Based on Salary",
    "description": ctaSection.description || "Step-by-step guide to get your home loan approved based on your salary",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Check Your Eligibility",
        "text": "Verify your salary meets the minimum requirements"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Calculate Your EMI",
        "text": "Use our EMI calculator to find affordable monthly payments"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Submit Application",
        "text": "Apply online with your salary slips and documents"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Approval",
        "text": "Receive loan approval and disburse funds"
      }
    ]
  };
};

// Helper function to format salary range
const formatSalaryRange = (slug) => {
  return slug?.replace(/-/g, " ").toUpperCase() || "";
};

// Helper function to extract numeric salary
const getNumericSalary = (slug) => {
  const match = slug?.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

// Helper function to determine salary category
const getSalaryCategory = (salary) => {
  if (salary >= 100000) return "Premium";
  if (salary >= 50000) return "High";
  if (salary >= 30000) return "Mid";
  if (salary >= 15000) return "Entry";
  return "Basic";
};

// Helper function to format currency in Indian style
const formatIndianCurrency = (amount) => {
  if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)} Crore`;
  if (amount >= 100000) return `${(amount / 100000).toFixed(1)} Lakh`;
  return `${amount.toLocaleString('en-IN')}`;
};

export default function HomeLoanBySalary() {
    const { slug } = useParams();
    const loan = homeLoanBySalary.find((l) => l.slug === slug);
    const salaryRange = formatSalaryRange(slug);
    const numericSalary = getNumericSalary(slug);
    const salaryCategory = getSalaryCategory(numericSalary);
    const formattedSalaryINR = formatIndianCurrency(numericSalary);
    const currentUrl = `https://www.quickhomeloan.in/home-loan-by-salary/${slug}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Generate structured data
    const structuredData = generateStructuredData(loan, slug, currentUrl);
    const faqStructuredData = generateFAQStructuredData(loan?.faqSection);
    const breadcrumbData = generateBreadcrumbData(slug, currentUrl);
    const howToStructuredData = generateHowToStructuredData(loan?.ctaSection);

    // Generate meta description
    const getMetaDescription = () => {
      if (loan?.heroSection?.description) {
        return loan.heroSection.description;
      }
      
      if (numericSalary) {
        const monthlySalary = numericSalary / 12;
        const eligibleLoanAmount = Math.round(numericSalary * 3); // Rough estimate: 3x annual salary
        
        return `Get home loan with ${formattedSalaryINR} annual salary (₹${monthlySalary.toLocaleString('en-IN')}/month). Check eligibility for up to ₹${eligibleLoanAmount.toLocaleString('en-IN')} home loan. Calculate EMI and apply online.`;
      }
      return `Get home loan based on your salary. Check eligibility criteria, calculate EMI, and apply online for best home loan offers for salaried professionals.`;
    };

    // Generate meta keywords
    const getMetaKeywords = () => {
      const monthlySalary = numericSalary ? Math.round(numericSalary / 12) : 0;
      const keywords = [
        `home loan for ${formattedSalaryINR} salary`,
        `${salaryCategory} salary home loan`,
        `home loan eligibility for ${monthlySalary.toLocaleString('en-IN')} monthly salary`,
        `home loan on ${formattedSalaryINR} salary`,
        "home loan for salaried employees",
        "salary based home loan calculator",
        "home loan EMI for salaried",
        "best home loan for salaried professionals",
        "home loan eligibility calculator by salary",
        "QuickHomeLoan salary home loan"
      ];
      return keywords.join(", ");
    };

    // Generate title
    const getTitle = () => {
      if (numericSalary) {
        const monthlySalary = Math.round(numericSalary / 12);
        return `${formattedSalaryINR} Salary Home Loan - ₹${monthlySalary.toLocaleString('en-IN')}/month Eligibility | QuickHomeLoan.in`;
      }
      return `Home Loan by Salary - Check Eligibility & Calculate EMI | QuickHomeLoan.in`;
    };

    // Generate OG image URL
    const getOGImage = () => {
      if (loan?.heroSection?.image) {
        return loan.heroSection.image;
      }
      return `https://www.quickhomeloan.in/images/salary-home-loan-og.jpg`;
    };

    // Calculate estimated loan amount
    const getEstimatedLoanAmount = () => {
      if (numericSalary) {
        return Math.round(numericSalary * 3).toLocaleString('en-IN');
      }
      return null;
    };

    // Calculate estimated EMI
    const getEstimatedEMI = () => {
      if (numericSalary) {
        const loanAmount = numericSalary * 3;
        const interestRate = 8.5;
        const tenure = 20;
        const monthlyRate = interestRate / 12 / 100;
        const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure * 12) / (Math.pow(1 + monthlyRate, tenure * 12) - 1);
        return Math.round(emi).toLocaleString('en-IN');
      }
      return null;
    };

    if (!loan) {
        return (
            <>
                <Helmet>
                    <title>Home Loan Not Found | QuickHomeLoan.in</title>
                    <meta name="description" content="The requested home loan information based on salary could not be found. Browse our other home loan options by salary range." />
                    <meta name="robots" content="noindex, follow" />
                    <link rel="canonical" href="https://www.quickhomeloan.in/home-loan-by-salary" />
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
                {/* Basic Meta Tags */}
                <title>{getTitle()}</title>
                <meta name="description" content={getMetaDescription()} />
                <meta name="keywords" content={getMetaKeywords()} />
                <meta name="author" content="QuickHomeLoan.in" />
                
                {/* Canonical URL */}
                <link rel="canonical" href={currentUrl} />
                
                {/* Alternate URLs */}
                <link rel="alternate" href={`https://www.quickhomeloan.in/home-loan-by-salary/${slug}`} hreflang="en-IN" />
                
                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="product" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={getTitle()} />
                <meta property="og:description" content={getMetaDescription()} />
                <meta property="og:image" content={getOGImage()} />
                <meta property="og:image:alt" content={`Home Loan for ${formattedSalaryINR} Salary - Check Eligibility`} />
                <meta property="og:site_name" content="QuickHomeLoan.in" />
                <meta property="og:locale" content="en_IN" />
                
                {/* Product-specific OG tags */}
                <meta property="product:price:amount" content={numericSalary.toString()} />
                <meta property="product:price:currency" content="INR" />
                <meta property="product:availability" content="in stock" />
                
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
                <meta name="ICBM" content="20.5937, 78.9629" />
                
                {/* Mobile Optimization */}
                <meta name="apple-mobile-web-app-title" content={`${formattedSalaryINR} Salary Home Loan`} />
                <meta name="application-name" content={`${formattedSalaryINR} Salary Home Loan`} />
                
                {/* Structured Data - Main Financial Product */}
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
                
                {/* Structured Data - HowTo */}
                {howToStructuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(howToStructuredData)}
                    </script>
                )}
                
                {/* Structured Data - EMI Calculator Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": `Salary Based Home Loan EMI Calculator`,
                        "description": `Calculate your home loan EMI based on ${formattedSalaryINR} annual salary`,
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "INR"
                        }
                    })}
                </script>
                
                {/* Structured Data - Salary Range Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "QuantitativeValue",
                        "name": "Annual Salary",
                        "value": numericSalary,
                        "unitText": "INR",
                        "additionalProperty": {
                            "@type": "PropertyValue",
                            "name": "Monthly Salary",
                            "value": numericSalary / 12,
                            "unitText": "INR"
                        }
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gray-50 font-proximaNova">
                
                
                {/* Breadcrumb navigation */}
                <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-600">
                    <ol className="flex flex-wrap gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="https://www.quickhomeloan.in/" className="hover:text-green-600" itemProp="item">
                                <span itemProp="name">Home</span>
                            </a>
                            <span className="mx-2">/</span>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="/home-loan-by-salary" className="hover:text-green-600" itemProp="item">
                                <span itemProp="name">Home Loans by Salary</span>
                            </a>
                            <span className="mx-2">/</span>
                            <meta itemProp="position" content="2" />
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span itemProp="name" className="text-gray-900 font-medium">
                                ₹{formattedSalaryINR} Salary Home Loan
                            </span>
                            <meta itemProp="position" content="3" />
                            <meta itemProp="item" content={currentUrl} />
                        </li>
                    </ol>
                </nav>

                {/* Hero Section */}
                {loan.heroSection && <SalaryHeroSection data={loan.heroSection} />}
                {loan.summaryStats && <SalaryQuickStats data={loan.summaryStats} />}

                <section className="py-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                        <div className="w-full space-y-6">
                            {loan.eligibilityCriteriaSection && <SalaryEligibilityCriteria data={loan.eligibilityCriteriaSection} />}
                            {loan.emiAndOffersSection && <SalaryEmiAndOffers data={loan.emiAndOffersSection} />}
                            {loan.documentsSection && <SalaryDocumentsSection data={loan.documentsSection} />}
                            {loan.tipsSection && <SalaryTipsSection data={loan.tipsSection} />}
                            {loan.ctaSection && <SalaryCTASection data={loan.ctaSection} />}
                        </div>

                        <div className="w-full lg:sticky lg:top-20 self-start space-y-6">
                            {loan.contactSupport && (
                                <ContactSupport data={loan.contactSupport} />
                            )}

                            {loan.customerTestimonials && (
                                <CustomerTestimonials data={loan.customerTestimonials} />
                            )}
                            {loan.faqSection && <SalaryFAQSection data={loan.faqSection} />}
                        </div>
                    </div>
                </section>
                
               
            </div>
        </>
    );
}