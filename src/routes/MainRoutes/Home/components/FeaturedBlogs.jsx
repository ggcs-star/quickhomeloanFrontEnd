import React, { useState } from "react";
import { Container } from "../../../../components/Layout";

const categories = [
  "All",
  "Business Loan Archive",
  "CIBIL Score Archive",
  "Financial News",
  "Home Loan Archive",
  "LAP Archive",
  "Media Coverage",
  "Mutual Funds Archive",
];

const blogs = [
  {
    id: 1,
    category: "Media Coverage",
    title: "RBI Holds Repo Rate at 5.5%, Keeps GDP Growth Forecast at 6.5%",
    description:
      "The RBI kept the repo rate steady at 5.5 per cent on Wednesday. The decision was taken at the end of the Monetary Policy Committee meeting...",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F09%2Frbi-holds-repo-rate.jpg&w=828&q=75", // replace with real image
    date: "Jun 10, 2025",
    badgeColor: "bg-purple-600",
    featured: true,
  },
  {
    id: 2,
    category: "Financial News",
    title: "Home Loans Get Costlier: SBI Increases Interest Rates by 25 Basis Points",
    description: "",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F08%2Fsbi-increases-home-loan-interest-rates.png&w=828&q=75",
    date: "Jun 10, 2025",
    badgeColor: "bg-blue-600",
    featured: true,
  },
  {
    id: 3,
    category: "Financial News",
    title: "SBI Slashes Lending and...",
    description: "",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F06%2Fsbi-cuts-home-loan-interest-rates.png&w=384&q=75",
    date: "Jun 06, 2025",
    badgeColor: "bg-blue-600",
    featured: true,
  },
  {
    id: 4,
    category: "Home Loan Archive",
    title: "Top 5 Legal Documents You...",
    description: "",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F06%2Flegal-documents-for-home-loan.png&w=384&q=75",
    date: "Jun 06, 2025",
    badgeColor: "bg-orange-600",
    featured: true,
  },
  {
    id: 5,
    category: "Media Coverage",
    title: "RBI's Rate Cut: The Domino Effect of 50 BP...",
    description: "",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F06%2Frbi-repo-rate-cut-effect-on-real-estate.jpeg&w=256&q=75",
    date: "Jun 10, 2025",
    badgeColor: "bg-purple-600",
  },
  {
    id: 6,
    category: "Financial News",
    title: "Repo Rate Slashed by 50 Points: Here’s What It...",
    description: "",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F06%2Frepo-rate-slashed-in-june-25.png&w=256&q=75",
    date: "Jun 06, 2025",
    badgeColor: "bg-blue-600",
  },
  {
    id: 7,
    category: "Media Coverage",
    title: "High-Value Home Loans Make Up 21% of FY25...",
    description: "",
    image:
      "https://www.urbanmoney.com/_next/image?url=https%3A%2F%2Fwww.urbanmoney.com%2Fblog%2Fwp-content%2Fuploads%2F2025%2F06%2Furban-money-home-loan-report.jpeg&w=256&q=75",
    date: "Jun 06, 2025",
    badgeColor: "bg-purple-600",
  },
];

export default function FeaturedBlogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <Container className='py-0 lg:py-4'>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
        Featured Blogs
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg border text-sm ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left side (featured big blogs) */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {filteredBlogs
            .filter((b) => b.featured)
            .map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span
                    className={`inline-block text-xs text-white px-2 py-1 rounded ${blog.badgeColor}`}
                  >
                    {blog.category}
                  </span>
                  <h3 className="mt-2 text-md font-semibold text-gray-800 line-clamp-2">
                    {blog.title}
                  </h3>
                  {blog.description && (
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {blog.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Right side (list style blogs) */}
        <div className="flex flex-col gap-4">
          {filteredBlogs
            .filter((b) => !b.featured)
            .map((blog) => (
              <div
                key={blog.id}
                className="flex items-start gap-3 border-b pb-3 last:border-none"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <span
                    className={`inline-block text-xs text-white px-2 py-1 rounded ${blog.badgeColor}`}
                  >
                    {blog.category}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-500">{blog.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
</Container>
  );
}
