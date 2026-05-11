import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import { ALL_CALCULATORS } from "./calculatorsData";
import { Container } from "../../../components/Layout";

const FILTERS = [
  "All",
  "Loan",
  // "Investment",
  // "Strategy",
  // "Tax",
  "Housing",
  "Property",
  // "Debt",
];

export default function Calculators() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        name: "Calculators",
        item: "https://www.quickhomeloan.in/calculators",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a home loan EMI calculator do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A home loan EMI calculator helps you estimate your monthly EMI, total interest payable, and total repayment amount based on loan amount, interest rate, and tenure.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check home loan eligibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check home loan eligibility by entering your monthly income, existing EMIs, age, and loan tenure to estimate how much loan amount you may qualify for.",
        },
      },
      {
        "@type": "Question",
        name: "Can I calculate home loan prepayment savings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a prepayment calculator helps you estimate how much interest and loan tenure you can save by making part-payments during your loan period.",
        },
      },
    ],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Quick Home Loan Calculators",
    url: "https://www.quickhomeloan.in/calculators",
    description:
      "Free online home loan calculators to check EMI, eligibility, affordability, and interest cost in India.",
    areaServed: "IN",
    serviceType: "Home Loan Calculator Tools",
  };

  const filteredCalculators = ALL_CALCULATORS.filter((item) => {
    const matchesCategory =
      activeFilter === "All" || item.category === activeFilter;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>
          {`Home Loan EMI, Eligibility & Interest Calculators in India (${new Date().getFullYear()})`}
        </title>

        <meta
          name="description"
          content="Use free home loan calculators to check EMI, eligibility, affordability, interest cost, and monthly payments. Calculate instantly and compare home loan options in India."
        />

        <meta
          name="keywords"
          content="home loan calculator, EMI calculator, home loan eligibility calculator, home loan affordability calculator, interest calculator, home loan EMI India"
        />

        <link
          rel="canonical"
          href="https://www.quickhomeloan.in/calculators"
        />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.quickhomeloan.in/calculators"
        />

        <meta
          property="og:title"
          content={`Home Loan EMI, Eligibility & Interest Calculators in India (${new Date().getFullYear()})`}
        />

        <meta
          property="og:description"
          content="Use free home loan calculators to check EMI, eligibility, affordability, interest cost, and monthly payments. Calculate instantly and compare home loan options in India."
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
          content={`Home Loan EMI, Eligibility & Interest Calculators in India (${new Date().getFullYear()})`}
        />

        <meta
          name="twitter:description"
          content="Use free home loan calculators to check EMI, eligibility, affordability, interest cost, and monthly payments. Calculate instantly and compare home loan options in India."
        />

        {/* Schema */}
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

      <Container>
        <div className="min-h-screen flex flex-col mt-20">
          {/* HEADER */}
          <header>
            <section className="bg-white">
              <div className="container mx-auto lg:px-4 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  Home Loan Calculators – EMI, Eligibility &
                  Affordability Tools
                </h1>

                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                  Use free home loan calculators to check EMI,
                  eligibility, affordability, interest cost, and
                  monthly payments. Calculate instantly and compare
                  home loan options in India.
                </p>
              </div>
            </section>
          </header>

          {/* MAIN */}
          <main className="flex-grow container mx-auto lg:px-4 py-10 space-y-8">
            {/* SEARCH */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, tag, or description..."
                className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-1 focus:ring-gray-500"
              />
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm rounded-full border transition ${activeFilter === filter
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalculators.map((calc) => {
                const Icon = calc.icon;

                return (
                  <div
                    key={calc.slug}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col"
                  >
                    <div className="p-6 flex-grow">
                      <div className="flex gap-4">
                        <Icon className="h-8 w-8 text-gray-600" />

                        <div>
                          <div className="uppercase text-sm text-gray-500 font-semibold">
                            {calc.category}
                          </div>

                          <h3 className="text-lg font-bold text-black mt-1">
                            {calc.title}
                          </h3>

                          <p className="mt-2 text-sm text-gray-700">
                            {calc.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-4">
                      <Link
                        to={`/calculators/${calc.slug}`}
                        className="block w-full text-center bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition"
                      >
                        Calculate
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </Container>
    </>
  );
}