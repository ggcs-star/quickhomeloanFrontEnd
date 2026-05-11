import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Star } from "lucide-react";
import { Container } from "../../../../components/Layout";

const SixBHKHeroSection = ({ data }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  // Taking title dynamically from DB
  const pageTitle = data?.title || "Home Loan";

  // SEO Optimized Title
  // Example:
  // Home Loan for Apartment / Flat - Eligibility, EMI & Interest Rate (2026)
  const seoTitle = `Home Loan for ${pageTitle} - Eligibility, EMI & Interest Rate (${currentYear})`;

  // SEO Optimized Description
  const seoDescription = `Compare eligibility, EMI calculator, interest rates, loan amount, and required documents for ${pageTitle.toLowerCase()}. Apply online and get the best housing loan offers in ${currentYear}.`;

  return (
    <div className="bg-white">
      <Container>
        <header className="lg:py-20 pt-20 text-black text-center">
          
          {/* Badges */}
          {data.badges && (
            <div className="flex justify-center items-center flex-wrap gap-3 mb-6">
              {data.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center text-xs lg:text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                >
                  {badge.icon === "shield-check" && (
                    <ShieldCheck className="w-4 h-4 mr-2 text-gray-700" />
                  )}

                  {badge.icon === "star" && (
                    <Star
                      className="w-4 h-4 mr-2"
                      style={{ color: "#d4a017" }}
                    />
                  )}

                  <span
                    dangerouslySetInnerHTML={{
                      __html: badge.text,
                    }}
                    className="text-xs lg:text-sm"
                  />
                </div>
              ))}
            </div>
          )}

          {/* SEO Optimized Title */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-tight">
            {seoTitle}
          </h1>

          {/* SEO Optimized Description */}
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600">
            {seoDescription}
          </p>

          {/* Buttons */}
          {data.buttons && (
            <div className="flex flex-row justify-center items-center gap-2 lg:gap-4 mt-5">
              
              {/* Button 1 */}
              {data.buttons[0] && (
                <Link to={data.buttons[0].link || "/"}>
                  <button
                    className="
                      w-[169px] lg:w-[350px]
                      rounded-md cursor-pointer focus:outline-none
                      transition-all duration-200 ease-in-out
                      inline-flex items-center justify-center
                      px-1 lg:px-8 py-3 text-sm lg:text-lg
                      bg-gray-300 text-black
                      hover:text-white hover:bg-neutral-800
                    "
                  >
                    {data.buttons[0].label}
                  </button>
                </Link>
              )}

              {/* Button 2 */}
              {data.buttons[1] && (
                <Link to={data.buttons[1].link || "/"}>
                  <button
                    className="
                      w-[169px] lg:w-[350px]
                      rounded-md cursor-pointer focus:outline-none
                      transition-all duration-200 ease-in-out
                      inline-flex items-center justify-center
                      px-1 lg:px-8 py-3 text-sm lg:text-lg
                      bg-white text-black border border-neutral-300
                      hover:bg-black hover:text-white
                    "
                  >
                    {data.buttons[1].label}
                  </button>
                </Link>
              )}
            </div>
          )}

          {/* Loan Types */}
          {data.loanTypes && (
            <div className="mt-10 flex justify-center items-center flex-wrap gap-3">
              {data.loanTypes.map((loan, index) => (
                <div
                  key={index}
                  className="flex items-center text-xs lg:text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                >
                  {loan}
                </div>
              ))}
            </div>
          )}
        </header>
      </Container>
    </div>
  );
};

export default SixBHKHeroSection;