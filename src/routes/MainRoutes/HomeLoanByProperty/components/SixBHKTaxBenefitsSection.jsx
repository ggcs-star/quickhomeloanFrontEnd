import React from "react";
import { Container } from "../../../../components/Layout";

const SixBHKTaxBenefitsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="">
      <Container className="max-w-5xl mx-auto">

        {/* Entire Section Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
            <p className="text-neutral-600 text-sm mt-1">{data.subtitle}</p>
          </div>

          {/* Benefit Cards (2 columns) */}
          <div className="p-6 grid md:grid-cols-2 gap-6">
            {data.benefits.map((item, index) => (
              <div
                key={index}
                className="border border-neutral-300 rounded-md p-6 bg-white"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                  {item.heading}
                </h3>

                <p className="text-sm text-neutral-500 mb-3">{item.section}</p>

                <p className="text-4xl font-bold text-black mb-4">
                  {item.amount}
                </p>

                <p className="text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Joint Loan Section */}
          <div className="border-t border-neutral-300 bg-neutral-50 p-6">
            <h4 className="text-lg md:text-xl font-semibold text-black mb-2">
              {data.jointLoan.heading}
            </h4>
            <p className="text-neutral-700 max-w-3xl">
              {data.jointLoan.description}
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default SixBHKTaxBenefitsSection;
