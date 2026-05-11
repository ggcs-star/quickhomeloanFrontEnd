import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

// import Solutions from "./components/Solutions";
// import Companies from "./components/Companies";
// import Largest from "./components/Largest";
// import Transformation from "./components/Transformation";
// import Customers from "./components/Customers";
// import Collaboration from "./components/Collaboration";
// import WhyChoose from "./components/WhyChoose"
// import BestSuitable from './components/BestSuitable'

import EmiCalculator from "./components/EmiCalculator";
import Compare from "./components/Compare";
import Tools from "./components/Tools";
import FAQ from "./components/FAQ";
import HeroSection2 from "./components/HeroSection2";
import Blogs from "./components/Blogs";
import StatsRow from "./components/StatsRow";
import AppPromoSection from "./components/AppPromoSection";
import TrendingLoans from "./components/TrendingLoans";
import FinancialCalculators from "./components/FinancialCalculators";
import CreditCardSection from "./components/CreditCardSection";
import LoanSteps from "./components/LoanSteps";
import FeaturedBlogs from "./components/FeaturedBlogs";
import LoanCalculators from "./components/LoanCalculators";
import HeroSection from "./components/HeroSection";
import QuickHomeLoan from "./components/QuickHomeLoan";
import HowItWorks from "./components/HowItWorks";
import TrustedPartners from "./components/TrustedPartners";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CallToActionSection from "./components/CallToActionSection";
import HomeLoanCategories from "./components/HomeLoanCategories";
import HomeLoanCalculators from "./components/HomeLoanCalculators";
import HomeLoanCards from "./components/HomeLoanCards";
import HeroSection3 from "./components/Herosection3";
import CategoriesSection from "./components/CategoriesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import LoanProcessSection from "./components/LoanProcessSection";
import ContactSection from "./components/ContactSection";
import RealEstatePosts from "./components/RealEstatePosts";
import HeroSection4 from "./components/HeroSection4";

export default function Home(props) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quick Home Loan",
    url: "https://www.quickhomeloan.in/",
    logo: "https://www.quickhomeloan.in/assets/images/logo.png",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Quick Home Loan",
    url: "https://www.quickhomeloan.in/",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.quickhomeloan.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.quickhomeloan.in/",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the current home loan interest rate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Home loan interest rates in India typically start from around 7% onwards depending on the bank, applicant profile, income, and credit score.",
        },
      },
      {
        "@type": "Question",
        name: "How can I compare home loan offers online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can compare home loan offers online by checking interest rates, EMI, processing fees, eligibility, and loan tenure across multiple banks.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for a home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common documents include identity proof, address proof, income proof, bank statements, property papers, and employment details.",
        },
      },
    ],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Quick Home Loan",
    url: "https://www.quickhomeloan.in/",
    description:
      "Compare home loan interest rates, EMI, eligibility, and apply online from top banks in India.",
    areaServed: "IN",
    serviceType: "Home Loan Comparison",
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const scrolled = (scrollTop / docHeight) * 100;

    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getStrokeDashoffset = () => {
    const circleLength = 2 * Math.PI * 24;

    return (
      circleLength -
      (circleLength * scrollPercentage) / 100
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStrokeColor = () => {
    return scrollPercentage > 0 ? "#22d1b6" : "gray";
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>
          Home Loan in India – Compare Interest Rates, EMI &
          Eligibility (2026)
        </title>

        <meta
          name="description"
          content="Compare home loan interest rates from top banks in India. Check EMI, eligibility, processing fees, and apply online for the best home loan offers in 2026."
        />

        <meta
          name="keywords"
          content="home loan in India, home loan interest rates, compare home loan, best home loan in India, home loan EMI calculator, home loan eligibility, apply home loan online"
        />

        <link
          rel="canonical"
          href="https://www.quickhomeloan.in/"
        />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.quickhomeloan.in/"
        />

        <meta
          property="og:title"
          content="Home Loan in India – Compare Interest Rates, EMI & Eligibility (2026)"
        />

        <meta
          property="og:description"
          content="Compare home loan interest rates from top banks in India. Check EMI, eligibility, and apply online for the best home loan offers in 2026."
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
          content="Home Loan in India – Compare Interest Rates, EMI & Eligibility (2026)"
        />

        <meta
          name="twitter:description"
          content="Compare home loan interest rates from top banks in India. Check EMI, eligibility, and apply online for the best home loan offers in 2026."
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(financialServiceSchema)}
        </script>
      </Helmet>

      <div className="font-proximaNova">
        {/* Suggested Heading Structure */}
        <h1 className="sr-only">
          Compare Home Loan Interest Rates from Top Banks in India
        </h1>

        <h2 className="sr-only">
          Compare Latest Home Loan Interest Rates
        </h2>

        <h3 className="sr-only">
          Lowest Home Loan Interest Rates in 2026
        </h3>

        <h2 className="sr-only">
          Home Loan EMI Calculator
        </h2>

        <h3 className="sr-only">
          Calculate Your Monthly Home Loan EMI
        </h3>

        <h2 className="sr-only">
          Check Home Loan Eligibility Online
        </h2>

        <h3 className="sr-only">
          Check Eligibility in Minutes
        </h3>

        <h2 className="sr-only">
          Best Banks for Home Loan in India
        </h2>

        <h3 className="sr-only">
          Compare Bank-Wise Home Loan Offers
        </h3>

        <h2 className="sr-only">
          Home Loan Process Made Simple
        </h2>

        <h3 className="sr-only">
          Fast Approval with Minimal Documentation
        </h3>

        <h2 className="sr-only">
          Why Choose Quick Home Loan
        </h2>

        <h3 className="sr-only">
          Trusted by Thousands of Home Buyers
        </h3>

        <h2 className="sr-only">
          Frequently Asked Questions
        </h2>

        <h3 className="sr-only">
          Common Questions About Home Loans
        </h3>

        <HeroSection4 {...props} />

        <TrustedPartners />

        <div id="categories-section">
          <CategoriesSection />
        </div>
        <WhyChooseUs />

        {/* <StatsRow/> */}

        {/* <HomeLoanCards/> */}

        {/* <HomeLoanCategories/> */}

        <HomeLoanCalculators />

        <LoanProcessSection />

        <RealEstatePosts />

        <ContactSection />

        {/* <QuickHomeLoan />
      <EmiCalculator />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection/> */}

        {/* <AppPromoSection/>
      <TrendingLoans/>
      <LoanCalculators/> */}

        {/* <FinancialCalculators/> */}

        {/* <CreditCardSection/>
      <LoanSteps/>
      <FeaturedBlogs/> */}

        {/* <LoanVsFd/> */}

        {/* <Compare />
      <Tools />
      <LoanVsFd/> */}

        {/* <Blogs/>
      <FAQ/> */}

        {/* <Solutions />
      <Companies />
      <Largest />
      <Transformation />
      <Customers />
      <WhyChoose/>
      <BestSuitable />
      <Collaboration /> */}

        {/* {scrollPercentage > 0 && (
        <div
          className="back-to-top right-aligned primary-color scroll-position-style active"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span
            className="icon-arrow-up text-primary"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "20px",
              // color: primary,
            }}
          >
            ↑
          </span>

          <svg height="50" width="50" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="23"
              style={{
                fill: "none",
                stroke: getStrokeColor(),
                strokeWidth: "2",
                strokeDasharray: `${2 * Math.PI * 24}`,
                strokeDashoffset: getStrokeDashoffset(),
                transition:
                  "stroke-dashoffset 0.3s ease, stroke 0.3s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            <circle
              cx="25"
              cy="25"
              r="22"
              style={{
                fill: "rgba(0, 0, 0, 0.5)",
                strokeWidth: "2",
              }}
            />
          </svg>
        </div>
      )} */}
      </div>
    </>
  );
}