import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { homeLoanByCibil } from "../../../db/homeLoanByCibil";
// import HeroSection from "./components/HeroSection";
import CibilAssessment from "./components/CibilAssessment";
import CibilEMICalculator from "./components/CibilEMICalculator";
import ApplicationSteps from "./components/ApplicationSteps";
// import LendersComparison from "./components/LendersComparison";
import AdditionalFactors from "./components/AdditionalFactors";
import ScoreImprovement from "./components/ScoreImprovement";
import ApprovalTips from "./components/ApprovalTips";
// import FAQSection from "./components/FAQSection";
// import ActionPlan from "./components/ActionPlan";
import { Container } from "../../../components/Layout";

// SEO Helper function to generate structured data
const generateStructuredData = (loan, cibilScore, currentUrl) => {
  if (!loan) return null;

  const scoreRange = cibilScore.replace(/-/g, " ").toUpperCase();
  const minScore = parseInt(cibilScore.split("-")[0]) || 0;
  const maxScore = parseInt(cibilScore.split("-")[1]) || 0;

  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `Home Loan for CIBIL Score ${scoreRange}`,
    "description": loan.cibilAssessment?.description || `Get home loan approval with CIBIL score ${scoreRange}. Check eligibility, improve your credit score, and apply for home loan online.`,
    "provider": {
      "@type": "Organization",
      "name": "QuickHomeLoan",
      "url": "https://quickhomeloan.in"
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
    "creditScoreRequired": {
      "@type": "QuantitativeValue",
      "minValue": minScore,
      "maxValue": maxScore,
      "unitText": "CIBIL Score"
    },
    "category": "Home Loan",
    "audience": {
      "@type": "Audience",
      "name": "Home Buyers with Specific CIBIL Score",
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

// Generate Breadcrumb structured data
const generateBreadcrumbData = (cibilScore, currentUrl) => {
  const formattedScore = cibilScore.replace(/-/g, " ").toUpperCase();
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quickhomeloan.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Home Loans by CIBIL Score",
        "item": "https://quickhomeloan.in/home-loan-by-cibil"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `CIBIL Score ${formattedScore}`,
        "item": currentUrl
      }
    ]
  };
};

// Generate HowTo structured data for score improvement
const generateHowToStructuredData = (scoreImprovement) => {
  if (!scoreImprovement || !scoreImprovement.tips) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Improve Your CIBIL Score for Home Loan",
    "description": "Step-by-step guide to improve your credit score for better loan approval chances",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "step": scoreImprovement.tips.map((tip, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": tip.title,
      "text": tip.description,
      "url": `https://quickhomeloan.in/improve-cibil-score#step-${index + 1}`
    }))
  };
};

// Generate WebApplication schema for EMI Calculator
const generateCalculatorStructuredData = (cibilScore) => {
  const formattedScore = cibilScore.replace(/-/g, " ");
  
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `Home Loan EMI Calculator for CIBIL Score ${formattedScore}`,
    "description": `Calculate your home loan EMI based on CIBIL score ${formattedScore}. Get estimated interest rates and monthly payments.`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "CIBIL Score based interest rates",
      "EMI calculation",
      "Loan amount calculator",
      "Tenure optimization"
    ]
  };
};

// Helper function to format CIBIL score range
const formatCibilScore = (slug) => {
  return slug?.replace(/-/g, " ").toUpperCase() || "";
};

// Helper function to extract min and max scores
const getScoreRange = (slug) => {
  const parts = slug?.split("-") || [];
  return {
    min: parseInt(parts[0]) || 0,
    max: parseInt(parts[1]) || 0
  };
};

// Helper function to determine eligibility status
const getEligibilityStatus = (minScore) => {
  if (minScore >= 750) return "Excellent";
  if (minScore >= 700) return "Good";
  if (minScore >= 650) return "Fair";
  if (minScore >= 550) return "Poor";
  return "Low";
};

export default function HomeLoanByCibil() {
    const { slug } = useParams();
    const loan = homeLoanByCibil.find((l) => l.slug === slug);
    const cibilScore = formatCibilScore(slug);
    const scoreRange = getScoreRange(slug);
    const eligibilityStatus = getEligibilityStatus(scoreRange.min);
    const currentUrl = `https://quickhomeloan.in/home-loan-by-cibil/${slug}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Generate structured data
    const structuredData = generateStructuredData(loan, slug, currentUrl);
    const breadcrumbData = generateBreadcrumbData(slug, currentUrl);
    const howToStructuredData = generateHowToStructuredData(loan?.scoreImprovement);
    const calculatorStructuredData = generateCalculatorStructuredData(slug);

    // Generate meta description
    const getMetaDescription = () => {
      if (loan?.cibilAssessment?.description) {
        return loan.cibilAssessment.description;
      }
      
      const { min, max } = scoreRange;
      if (min && max) {
        if (min >= 750) {
          return `Get instant home loan approval with excellent CIBIL score ${min}-${max}. Enjoy lowest interest rates, higher loan amounts, and quick processing. Check eligibility now.`;
        } else if (min >= 650) {
          return `Home loan options available for CIBIL score ${min}-${max}. Get competitive interest rates, flexible loan amounts, and easy approval. Check your eligibility today.`;
        } else {
          return `Home loan options for CIBIL score ${min}-${max}. Learn how to improve your credit score, get loan approval tips, and apply for home loan with guidance.`;
        }
      }
      return `Get home loan based on your CIBIL score. Check eligibility, calculate EMI, learn score improvement tips, and apply online for best home loan deals.`;
    };

    // Generate meta keywords
    const getMetaKeywords = () => {
      const { min, max } = scoreRange;
      const keywords = [
        `CIBIL score ${min}-${max} home loan`,
        `home loan for CIBIL score ${min}-${max}`,
        `${eligibilityStatus} CIBIL score home loan`,
        "home loan eligibility based on CIBIL",
        "CIBIL score for home loan",
        "home loan credit score requirement",
        "improve CIBIL score for home loan",
        "home loan approval tips",
        "CIBIL score calculator",
        "credit score home loan India"
      ];
      return keywords.join(", ");
    };

    // Generate title
    const getTitle = () => {
      const { min, max } = scoreRange;
      if (min && max) {
        return `CIBIL Score ${min}-${max} Home Loan - ${eligibilityStatus} Eligibility | QuickHomeLoan.in`;
      }
      return `Home Loan by CIBIL Score - Check Eligibility & EMI | QuickHomeLoan.in`;
    };

    // Generate OG image URL
    const getOGImage = () => {
      if (loan?.cibilAssessment?.image) {
        return loan.cibilAssessment.image;
      }
      const { min } = scoreRange;
      if (min >= 750) {
        return "https://quickhomeloan.in/images/excellent-cibil-home-loan-og.jpg";
      } else if (min >= 650) {
        return "https://quickhomeloan.in/images/good-cibil-home-loan-og.jpg";
      }
      return "https://quickhomeloan.in/images/cibil-home-loan-og.jpg";
    };

    if (!loan) {
        return (
            <>
                <Helmet>
                    <title>Home Loan Not Found | QuickHomeLoan.in</title>
                    <meta name="description" content="The requested home loan information based on CIBIL score could not be found. Browse our other home loan options by credit score." />
                    <meta name="robots" content="noindex, follow" />
                    <link rel="canonical" href="https://quickhomeloan.in/home-loan-by-cibil" />
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
                <link rel="alternate" href={`https://quickhomeloan.in/home-loan-by-cibil/${slug}`} hreflang="en-IN" />
                
                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={getTitle()} />
                <meta property="og:description" content={getMetaDescription()} />
                <meta property="og:image" content={getOGImage()} />
                <meta property="og:image:alt" content={`Home Loan for CIBIL Score ${cibilScore} - Check Eligibility`} />
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
                <meta name="ICBM" content="20.5937, 78.9629" />
                
                {/* Mobile Optimization */}
                <meta name="apple-mobile-web-app-title" content={`CIBIL ${cibilScore} Home Loan`} />
                <meta name="application-name" content={`CIBIL ${cibilScore} Home Loan`} />
                
                {/* Structured Data - Main Financial Product */}
                {structuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(structuredData)}
                    </script>
                )}
                
                {/* Structured Data - Breadcrumb */}
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbData)}
                </script>
                
                {/* Structured Data - HowTo (Score Improvement) */}
                {howToStructuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(howToStructuredData)}
                    </script>
                )}
                
                {/* Structured Data - EMI Calculator */}
                <script type="application/ld+json">
                    {JSON.stringify(calculatorStructuredData)}
                </script>
                
                {/* Structured Data - Credit Score Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Thing",
                        "name": "CIBIL Score",
                        "description": "Credit Information Bureau (India) Limited score used for loan eligibility",
                        "additionalType": "https://schema.org/QuantitativeValue",
                        "minValue": scoreRange.min,
                        "maxValue": scoreRange.max,
                        "unitText": "CIBIL Score Range"
                    })}
                </script>
                
                {/* Structured Data - Rating for eligibility */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Rating",
                        "name": `${eligibilityStatus} CIBIL Score Eligibility`,
                        "ratingValue": scoreRange.min >= 750 ? "4.8" : scoreRange.min >= 650 ? "4.0" : "3.0",
                        "bestRating": "5",
                        "worstRating": "1",
                        "ratingExplanation": `CIBIL score ${scoreRange.min}-${scoreRange.max} is considered ${eligibilityStatus} for home loan approval`
                    })}
                </script>
            </Helmet>

            <div className="bg-gray-50 min-h-screen font-proximaNova">
                {/* Hidden H1 for SEO */}
                <h1 className="sr-only">{getTitle()}</h1>
                
         
                
                {/* Breadcrumb navigation */}
                <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-600">
                    <ol className="flex flex-wrap gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="https://quickhomeloan.in/" className="hover:text-blue-600" itemProp="item">
                                <span itemProp="name">Home</span>
                            </a>
                            <span className="mx-2">/</span>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="/home-loan-by-cibil" className="hover:text-blue-600" itemProp="item">
                                <span itemProp="name">Home Loans by CIBIL Score</span>
                            </a>
                            <span className="mx-2">/</span>
                            <meta itemProp="position" content="2" />
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span itemProp="name" className="text-gray-900 font-medium">
                                CIBIL Score {cibilScore}
                            </span>
                            <meta itemProp="position" content="3" />
                            <meta itemProp="item" content={currentUrl} />
                        </li>
                    </ol>
                </nav>

                <Container>
                    {/* Hero Section - Commented but can be enabled */}
                    {/* {loan.heroSection && <HeroSection data={loan.heroSection} />} */}

                    {/* CIBIL Assessment */}
                    {loan.cibilAssessment && <CibilAssessment data={loan.cibilAssessment} />}

                    {/* EMI Calculator */}
                    {loan.emiSection && <CibilEMICalculator data={loan.emiSection} />}

                    {/* Application Steps */}
                    {loan.applicationSteps && <ApplicationSteps data={loan.applicationSteps} />}

                    {/* Lenders Comparison - Commented but can be enabled */}
                    {/* {loan.lendersComparison && <LendersComparison data={loan.lendersComparison} />} */}

                    {/* Additional Factors */}
                    {loan.additionalFactors && <AdditionalFactors data={loan.additionalFactors} />}

                    {/* Score Improvement */}
                    {loan.scoreImprovement && <ScoreImprovement data={loan.scoreImprovement} />}

                    {/* Approval Tips */}
                    {loan.approvalTips && <ApprovalTips data={loan.approvalTips} />}

                    {/* FAQ Section - Commented but can be enabled */}
                    {/* {loan.faqSection && <FAQSection data={loan.faqSection} />} */}

                    {/* Action Plan - Commented but can be enabled */}
                    {/* {loan.actionPlan && <ActionPlan data={loan.actionPlan} />} */}
                </Container>
                
      
            </div>
        </>
    );
}