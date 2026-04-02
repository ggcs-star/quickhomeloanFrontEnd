import React from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";

const SalaryTipsSection = () => {
  const { slug } = useParams();
  const pageData =
    homeLoanBySalary.find((item) => item.slug === slug) ||
    homeLoanBySalary[0];

  const { tipsSection } = pageData;
  if (!tipsSection) return null;

  return (
    <section id="tips" className="">
      <Container className="max-w-5xl mx-auto">

        {/* CARD WRAPPER - clean, standard UI */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* HEADER */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 text-center md:text-left">
              {tipsSection.title}
            </h2>
            {tipsSection.subtitle && (
              <p className="text-neutral-600 text-sm mt-2 text-center md:text-left">
                {tipsSection.subtitle}
              </p>
            )}
          </div>

          {/* BODY */}
          <div className="p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">

              {tipsSection.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">

                  {/* Number Badge */}
                  <div className="h-7 w-7 flex items-center justify-center bg-neutral-900 text-white rounded-full text-sm font-semibold">
                    {index + 1}
                  </div>

                  {/* Text */}
                  <p className="text-neutral-700 leading-relaxed">
                    {tip}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default SalaryTipsSection;
