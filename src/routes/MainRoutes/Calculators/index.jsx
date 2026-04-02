import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <Container>
    <div className="min-h-screen flex flex-col mt-20">
      {/* HEADER */}
      <header>
        <section className="bg-white">
          <div className="container mx-auto lg:px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              All Calculators — Plan smarter, faster.
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              EMIs, loan eligibility, investment planners, and comparison tools —
              all in one place.
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
              className={`px-4 py-2 text-sm rounded-full border transition ${
                activeFilter === filter
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
  );
}
