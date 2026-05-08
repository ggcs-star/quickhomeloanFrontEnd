import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

const HeroSection = ({ data }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  // Remove common suffix from DB title
  const cleanTitle = data?.title
    ?.replace(/– Interest Rates, Eligibility & Benefits \(\d{4}\)/, "")
    ?.trim();

  // Dynamic SEO Heading
  const heroTitle = `${cleanTitle} – Interest Rates, Eligibility & Benefits (${currentYear})`;

  // Dynamic SEO Description
  const heroDescription =
    data?.metaDescription ||
    `Compare ${cleanTitle.toLowerCase()} interest rates, EMI options, eligibility criteria, processing fees, and required documents. Apply online and get the best loan offers in ${currentYear}.`;

  return (
    <section className="bg-white text-black py-20 lg:py-32 mx-auto text-center">
      <Container>

        {/* Dynamic SEO Heading */}
        <h1 className="text-2xl md:text-6xl font-extrabold text-black tracking-tight leading-tight">
          {heroTitle}
        </h1>

        {/* Dynamic SEO Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          {heroDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-4 mt-5">

          {/* Button 1 */}
          {data.buttons?.[0] && (
            <Link to={data.buttons[0].href || "/"}>
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
                {data.buttons[0].label}
              </button>
            </Link>
          )}

          {/* Button 2 */}
          {data.buttons?.[1] && (
            <Link to={data.buttons[1].href || "/"}>
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
                {data.buttons[1].label}
              </button>
            </Link>
          )}

        </div>

      </Container>
    </section>
  );
};

export default HeroSection;