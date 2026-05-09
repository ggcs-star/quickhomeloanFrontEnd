import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { homeLoanByAmount } from "../../../db/homeLoanByAmount";
import HeroSection from "./components/HeroSection";
import EMISection from "./components/EMISection";
import EligibilitySection from "./components/EligibilitySection";
import BanksComparison from "./components/BanksComparison";
import DocumentsSection from "./components/DocumentsSection";
import ProTipsSection from "./components/ProTipsSection";
import FAQSection from "./components/FAQSection";
import ActionPlan from "./components/ActionPlan";
import { Container } from "../../../components/Layout";

// SEO Helper function to generate structured data
const generateStructuredData = (loan, loanAmount, currentUrl) => {
  if (!loan) return null;

  const amountValue = loanAmount.replace(/-/g, " ").toUpperCase();
  const numericAmount = parseInt(loanAmount.replace(/[^\d]/g, '')) || 0;

  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `₹${numericAmount.toLocaleString('en-IN')} Home Loan`,
    "description": loan.heroSection?.description || `Apply for home loan up to ₹${numericAmount.toLocaleString('en-IN')}. Check eligibility, calculate EMI, compare banks, and get instant approval.`,
    "provider": {
      "@type": "Organization",
      "name": "QuickHomeLoan",
      "url": "https://quickhomeloan.in"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": numericAmount,
      "highPrice": numericAmount,
      "offerCount": "1",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@type": "Country",
        "name": "India"
      }
    },
    "loanAmount": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": numericAmount
    },
    "category": "Home Loan",
    "audience": {
      "@type": "Audience",
      "name": "Home Buyers in India",
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
const generateBreadcrumbData = (loanAmount, currentUrl) => {
  const formattedAmount = loanAmount.replace(/-/g, " ").toUpperCase();
  
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
        "name": "Home Loans by Amount",
        "item": "https://quickhomeloan.in/home-loan-by-amount"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `₹${formattedAmount} Home Loan`,
        "item": currentUrl
      }
    ]
  };
};

// Generate HowTo structured data for loan process
const generateHowToStructuredData = (actionPlan) => {
  if (!actionPlan || !actionPlan.steps) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get a Home Loan",
    "description": actionPlan.description || "Step-by-step guide to get your home loan approved",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "step": actionPlan.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "url": `https://quickhomeloan.in/how-to-apply#step-${index + 1}`
    }))
  };
};

// Generate comparison structured data for banks
const generateComparisonStructuredData = (banksComparison) => {
  if (!banksComparison || !banksComparison.banks) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bank Comparison for Home Loans",
    "description": "Compare home loan interest rates from top banks in India",
    "numberOfItems": banksComparison.banks.length,
    "itemListElement": banksComparison.banks.map((bank, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": bank.name,
      "description": `Interest rate: ${bank.interestRate}%`
    }))
  };
};

// Helper function to format loan amount
const formatLoanAmount = (slug) => {
  const amount = slug?.replace(/-/g, " ").toUpperCase() || "";
  return amount;
};

// Helper function to extract numeric amount
const getNumericAmount = (slug) => {
  const match = slug?.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

export default function HomeLoanByAmount() {
    const { slug } = useParams();
    const loan = homeLoanByAmount.find((l) => l.slug === slug);
    const loanAmount = formatLoanAmount(slug);
    const numericAmount = getNumericAmount(slug);
    const currentUrl = `https://quickhomeloan.in/home-loan-by-amount/${slug}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Generate structured data
    const structuredData = generateStructuredData(loan, slug, currentUrl);
    const faqStructuredData = generateFAQStructuredData(loan?.faqSection);
    const breadcrumbData = generateBreadcrumbData(slug, currentUrl);
    const howToStructuredData = generateHowToStructuredData(loan?.actionPlan);
    const comparisonStructuredData = generateComparisonStructuredData(loan?.banksComparison);

    // Generate meta description
    const getMetaDescription = () => {
      if (loan?.heroSection?.description) {
        return loan.heroSection.description;
      }
      if (numericAmount) {
        return `Apply for home loan up to ₹${numericAmount.toLocaleString('en-IN')}. Check eligibility, calculate EMI at competitive interest rates, compare top banks, and get instant approval online. Best home loan options for ₹${numericAmount.toLocaleString('en-IN')}.`;
      }
      return `Apply for home loan based on your required amount. Check eligibility, calculate EMI, compare banks, and get the best home loan deal. Easy online application process.`;
    };

    // Generate meta keywords
    const getMetaKeywords = () => {
      const keywords = [
        `₹${numericAmount.toLocaleString('en-IN')} home loan`,
        `${loanAmount} home loan`,
        `home loan up to ${loanAmount}`,
        `home loan amount ${loanAmount}`,
        "home loan eligibility calculator",
        "home loan EMI calculator",
        "best home loan rates",
        "home loan comparison",
        "apply home loan online",
        "home loan India"
      ];
      return keywords.join(", ");
    };

    // Generate title
    const getTitle = () => {
      if (numericAmount) {
        return `₹${numericAmount.toLocaleString('en-IN')} Home Loan - Check Eligibility & EMI | QuickHomeLoan.in`;
      }
      return `Home Loan by Amount - Calculate EMI & Check Eligibility | QuickHomeLoan.in`;
    };

    // Generate OG image URL
    const getOGImage = () => {
      if (loan?.heroSection?.image) {
        return loan.heroSection.image;
      }
      return `https://quickhomeloan.in/images/home-loan-by-amount-og.jpg`;
    };

    if (!loan) {
        return (
            <>
                <Helmet>
                    <title>Home Loan Not Found | QuickHomeLoan.in</title>
                    <meta name="description" content="The requested home loan information could not be found. Browse our other home loan options by amount." />
                    <meta name="robots" content="noindex, follow" />
                    <link rel="canonical" href="https://quickhomeloan.in/home-loan-by-amount" />
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
                
                {/* Alternate URLs for amount variations */}
                <link rel="alternate" href={`https://quickhomeloan.in/home-loan-by-amount/${slug}`} hreflang="en-IN" />
                
                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="product" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={getTitle()} />
                <meta property="og:description" content={getMetaDescription()} />
                <meta property="og:image" content={getOGImage()} />
                <meta property="og:image:alt" content={`${loanAmount} Home Loan - Apply Online`} />
                <meta property="og:site_name" content="QuickHomeLoan.in" />
                <meta property="og:locale" content="en_IN" />
                
                {/* Product-specific OG tags */}
                <meta property="product:price:amount" content={numericAmount.toString()} />
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
                <meta name="apple-mobile-web-app-title" content={`${loanAmount} Home Loan`} />
                <meta name="application-name" content={`${loanAmount} Home Loan`} />
                
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
                
                {/* Structured Data - HowTo (Application Process) */}
                {howToStructuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(howToStructuredData)}
                    </script>
                )}
                
                {/* Structured Data - Bank Comparison */}
                {comparisonStructuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(comparisonStructuredData)}
                    </script>
                )}
                
                {/* Structured Data - EMI Calculator Schema */}
                {loan.emiSection && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": `${loanAmount} Home Loan EMI Calculator`,
                            "description": "Calculate your monthly EMI for home loan",
                            "applicationCategory": "FinanceApplication",
                            "operatingSystem": "Web",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "INR"
                            }
                        })}
                    </script>
                )}
            </Helmet>

            <div className="min-h-screen bg-gray-50 !font-proximaNova">
                {/* Hidden H1 for SEO */}
                {/* <h1 className="sr-only">{getTitle()}</h1>
                
                <div className="max-w-7xl mx-auto px-4 pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {numericAmount ? `₹${numericAmount.toLocaleString('en-IN')} Home Loan` : 'Home Loan by Amount'}
                    </h2>
                    <p className="text-gray-600 mt-2">{getMetaDescription()}</p>
                </div>
                 */}
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
                            <a href="/home-loan-by-amount" className="hover:text-blue-600" itemProp="item">
                                <span itemProp="name">Home Loans by Amount</span>
                            </a>
                            <span className="mx-2">/</span>
                            <meta itemProp="position" content="2" />
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span itemProp="name" className="text-gray-900 font-medium">
                                {numericAmount ? `₹${numericAmount.toLocaleString('en-IN')}` : loanAmount}
                            </span>
                            <meta itemProp="position" content="3" />
                            <meta itemProp="item" content={currentUrl} />
                        </li>
                    </ol>
                </nav>

                {/* Hero Section */}
                {loan.heroSection && <HeroSection data={loan.heroSection} />}

                {/* EMI Section */}
                {loan.emiSection && <EMISection data={loan.emiSection} />}

                {/* Eligibility Section */}
                {loan.eligibilitySection && <EligibilitySection data={loan.eligibilitySection} />}

                {/* Banks Comparison */}
                {loan.banksComparison && <BanksComparison data={loan.banksComparison} />}

                {/* Documents Section */}
                {loan.documentsSection && <DocumentsSection data={loan.documentsSection} />}

                {/* Pro Tips Section */}
                {loan.proTipsSection && <ProTipsSection data={loan.proTipsSection} />}

                {/* FAQ Section */}
                {loan.faqSection && <FAQSection data={loan.faqSection} />}

                {/* Action Plan */}
                {loan.actionPlan && <ActionPlan data={loan.actionPlan} />}
                
                
            </div>
        </>
    );
}