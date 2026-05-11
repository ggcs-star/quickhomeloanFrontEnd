import React from "react";
import { Helmet } from "react-helmet-async";
import FaqPage from "./components/FaqPage";

const Faq = () => {
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
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://www.quickhomeloan.in/faq",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A home loan is money borrowed from a bank or housing finance company to buy, build, renovate, or extend a residential property, repaid in monthly EMIs.",
        },
      },
      {
        "@type": "Question",
        name: "How much home loan can I get?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your home loan eligibility depends on income, age, credit score, existing EMIs, employment type, and property value. Most lenders finance up to 80% to 90% of the property value.",
        },
      },
      {
        "@type": "Question",
        name: "What is EMI in a home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EMI stands for Equated Monthly Installment. It is the fixed monthly payment you make toward your home loan, including both principal and interest.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for a home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You typically need identity proof, address proof, income proof, bank statements, employment details, and property documents to apply for a home loan.",
        },
      },
      {
        "@type": "Question",
        name: "Can I prepay my home loan early?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most lenders allow part-prepayment or full foreclosure of home loans. Charges may vary depending on whether the loan is fixed or floating rate.",
        },
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home Loan FAQs",
    url: "https://www.quickhomeloan.in/faq",
    description:
      "Frequently asked questions about home loans, EMI, eligibility, documents, tax benefits, and processing charges in India.",
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>
          Home Loan FAQs – Interest Rates, EMI, Eligibility &
          Documents (2026)
        </title>

        <meta
          name="description"
          content="Get answers to common home loan questions on interest rates, EMI, eligibility, documents, tax benefits, processing fees, and approval timelines in India."
        />

        <meta
          name="keywords"
          content="home loan faq, home loan questions, home loan emi faq, home loan eligibility faq, home loan documents faq, home loan interest rates faq"
        />

        <link
          rel="canonical"
          href="https://www.quickhomeloan.in/faq"
        />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.quickhomeloan.in/faq"
        />

        <meta
          property="og:title"
          content="Home Loan FAQs – Interest Rates, EMI, Eligibility & Documents (2026)"
        />

        <meta
          property="og:description"
          content="Get answers to common home loan questions on interest rates, EMI, eligibility, documents, tax benefits, processing fees, and approval timelines in India."
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
          content="Home Loan FAQs – Interest Rates, EMI, Eligibility & Documents (2026)"
        />

        <meta
          name="twitter:description"
          content="Get answers to common home loan questions on interest rates, EMI, eligibility, documents, tax benefits, processing fees, and approval timelines in India."
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <div className="font-proximaNova">
        <FaqPage />
      </div>
    </>
  );
};

export default Faq;