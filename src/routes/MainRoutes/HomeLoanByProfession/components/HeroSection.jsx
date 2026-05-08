import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ data, profession }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  // Convert profession slug/text into proper title
  const formattedProfession =
    profession
      ?.replace(/-/g, " ")
      ?.replace(/\b\w/g, (char) => char.toUpperCase()) || "Professionals";

  // Dynamic SEO Title
  const heroTitle = `Home Loan for ${formattedProfession} - Eligibility, EMI & Interest Rate (${currentYear})`;

  // Dynamic SEO Description
  const heroDescription =
    data?.description ||
    `Check eligibility, EMI calculator, interest rates, maximum loan amount, processing fees, and required documents for home loans for ${formattedProfession.toLowerCase()}. Compare top lenders and apply online in ${currentYear}.`;

  return (
    <section className="bg-gray-50 text-gray-900 pt-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 sm:text-center lg:text-center">

        {/* Tag / Badge */}
        {data.tag && (
          <div className="flex items-center justify-center mb-4">
            <span
              className={`px-3 py-1 text-sm font-semibold flex items-center rounded-full border ${data.tag.style.bg} ${data.tag.style.text} ${data.tag.style.border}`}
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
                aria-hidden="true"
              >
                {data.tag.icon.svgPath?.map((path, i) => (
                  <path key={i} d={path}></path>
                ))}

                {data.tag.icon.circle && (
                  <circle
                    cx={data.tag.icon.circle.cx}
                    cy={data.tag.icon.circle.cy}
                    r={data.tag.icon.circle.r}
                  ></circle>
                )}
              </svg>

              {data.tag.text}
            </span>
          </div>
        )}

        {/* Dynamic SEO Title */}
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          {heroTitle}
        </h1>

        {/* Dynamic SEO Description */}
        <h2 className="mt-3 text-base text-gray-500 sm:mt-5 sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {heroDescription}
        </h2>

        {/* Buttons */}
        {data.buttons && (
          <div className="mx-auto mt-5 sm:mt-8 flex justify-center items-center gap-4">
            {data.buttons.map((btn, index) => (
              <Link key={index} to={btn.href || "/"}>
                <button
                  className={`
                    w-[150px] lg:w-[200px]
                    rounded-md cursor-pointer focus:outline-none
                    transition-all duration-200 ease-in-out
                    inline-flex items-center justify-center
                    px-4 lg:px-8 py-3 text-sm lg:text-lg
                    ${
                      index === 0
                        ? "bg-gray-300 text-black hover:text-white hover:bg-neutral-800"
                        : "bg-white text-black border border-neutral-300 hover:bg-black hover:text-white"
                    }
                  `}
                >
                  {btn.label}
                </button>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default HeroSection;