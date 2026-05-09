import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShieldCheck, Star } from "lucide-react";
import { Container } from "../../../../components/Layout";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";

const SalaryHeroSection = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const found = homeLoanBySalary.find((item) => item.slug === slug);
    setPageData(found || homeLoanBySalary[0]);
  }, [slug]);

  if (!pageData)
    return (
      <p className="text-center py-20 text-neutral-600">
        Loading...
      </p>
    );

  const { heroSection } = pageData;

  const currentYear = new Date().getFullYear();

  // Dynamic SEO Heading
  const heroTitle = `Home Loan for Salary ${heroSection?.salary} - Eligibility, EMI & Loan Amount (${currentYear})`;

  // Dynamic SEO Description
  const heroDescription =
    heroSection?.description ||
    `Check eligibility, EMI calculator, interest rates, and maximum loan amount available for salary ₹${heroSection?.salary}. Compare lenders and apply online in ${currentYear}.`;

  return (
    <section className="bg-white text-black py-20 lg:py-32 mx-auto text-center">
      <Container>

        {/* Badges */}
        {heroSection.badges && (
          <div className="flex justify-center items-center flex-wrap gap-3 mb-6">
            {heroSection.badges.map((badge, index) => (
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
                />
              </div>
            ))}
          </div>
        )}

        {/* Dynamic SEO Heading */}
        <h1 className="text-2xl md:text-6xl font-extrabold text-black tracking-tight leading-tight">
          {heroTitle}
        </h1>

        {/* Dynamic SEO Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          {heroDescription}
        </p>

        {/* Buttons */}
        {heroSection.buttons && (
          <div className="flex flex-row justify-center items-center gap-4 mt-5">

            {/* Button 1 */}
            {heroSection.buttons[0] && (
              <Link to={heroSection.buttons[0].href || "/"}>
                <button
                  className="
                    w-[150px] lg:w-[250px]
                    rounded-md cursor-pointer focus:outline-none
                    transition-all duration-200 ease-in-out
                    inline-flex items-center justify-center
                    px-1 lg:px-8 py-3 text-sm lg:text-lg
                    bg-gray-300 text-black
                    hover:text-white hover:bg-neutral-800
                  "
                >
                  {heroSection.buttons[0].label}
                </button>
              </Link>
            )}

            {/* Button 2 */}
            {heroSection.buttons[1] && (
              <Link to={heroSection.buttons[1].href || "/"}>
                <button
                  className="
                    w-[150px] lg:w-[250px]
                    rounded-md cursor-pointer focus:outline-none
                    transition-all duration-200 ease-in-out
                    inline-flex items-center justify-center
                    px-1 lg:px-8 py-3 text-sm lg:text-lg
                    bg-white text-black border border-neutral-300
                    hover:bg-black hover:text-white
                  "
                >
                  {heroSection.buttons[1].label}
                </button>
              </Link>
            )}

          </div>
        )}

        {/* Eligibility & EMI Info */}
        <div className="mt-10 flex justify-center items-center flex-wrap gap-3">

          {heroSection.eligibleRange && (
            <div className="flex items-center text-xs lg:text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
              Eligible Range:
              <strong className="ml-1">
                {heroSection.eligibleRange}
              </strong>
            </div>
          )}

          {heroSection.emiRange && (
            <div className="flex items-center text-xs lg:text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
              EMI Range:
              <strong className="ml-1">
                {heroSection.emiRange}
              </strong>
            </div>
          )}

        </div>

      </Container>
    </section>
  );
};

export default SalaryHeroSection;