import React from "react";
import { Container } from "../../../../components/Layout";
import low from "../../../../assets/whyChoose/low.png";
import quick from "../../../../assets/whyChoose/quick.png";
import easy from "../../../../assets/whyChoose/easy.png";
import secure from "../../../../assets/whyChoose/secure.png";
import expert from "../../../../assets/whyChoose/expert.png";
import support from "../../../../assets/whyChoose/support.png";

const QuickHomeLoan = () => {
  const cardData = [
    {
      title: "Quick Approval",
      description:
        "Get loan approval within 24-48 hours with minimal documentation.",
      icon: quick,
      accent: "#3B82F6", // blue
    },
    {
      title: "Low Interest Rates",
      description:
        "Competitive interest rates starting from 6.5% per annum.",
      icon: low,
      accent: "#10B981", // green
    },
    {
      title: "100% Secure",
      description:
        "Bank-grade security and complete data privacy guaranteed.",
      icon: secure,
      accent: "#6366F1", // indigo
    },
    {
      title: "Easy Documentation",
      description:
        "Simplified process with minimal paperwork required.",
      icon: easy,
      accent: "#F59E0B", // amber
    },
    {
      title: "Expert Guidance",
      description:
        "Dedicated relationship managers for personalized support.",
      icon: expert,
      accent: "#EC4899", // pink
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer service for all your queries.",
      icon: support,
      accent: "#8B5CF6", // violet
    },
  ];

  return (
    <div className="bg-white  text-black">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-black mb-3">
            Why Choose Quick Home Loan?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine speed, security, and simplicity to make your home buying
            journey smooth and hassle-free.
          </p>
          <div className="" />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative group bg-white border border-neutral-300 rounded-2xl shadow-sm 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${card.accent}22 0%, transparent 70%)`,
                }}
              ></div>

              {/* Card Content */}
              <div className="relative flex flex-col sm:flex-row items-center gap-6 p-2 lg:p-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="object-contain w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default QuickHomeLoan;
