import React from "react";

const HeroSection = ({ data }) => {
  return (
    <header className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        {/* ========= Left Content ========= */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            {data.title}
            {data.brand && (
              <span className="text-indigo-600"> — {data.brand}</span>
            )}
          </h1>

          <p className="mt-3 text-gray-600">{data.description}</p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {data.ctas?.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 ${
                  btn.type === "primary"
                    ? "bg-indigo-600 text-white hover:shadow-lg"
                    : btn.type === "outline"
                    ? "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* ========= Right Info Card ========= */}
        <div className="w-full lg:w-64 bg-gradient-to-br from-indigo-50 to-white rounded-xl p-4">
          <div className="flex items-center gap-3">
            {/* Icon Box */}
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7h20L12 2z"
                  stroke="#4F46E5"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 10h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8z"
                  stroke="#4F46E5"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8 14v2"
                  stroke="#4F46E5"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 14v2"
                  stroke="#4F46E5"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 14v2"
                  stroke="#4F46E5"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            {/* Text beside icon */}
            <div>
              <p className="text-sm text-gray-500">{data.offerSubtitle}</p>
              <p className="font-semibold text-gray-900">{data.offerTitle}</p>
            </div>
          </div>

          {/* Loan Stats */}
          <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-600">
            {data.details?.map((item, idx) => (
              <div key={idx}>
                <dt className="font-medium">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
