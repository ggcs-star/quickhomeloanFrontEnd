import React from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";

const SalaryDocumentsSection = () => {
  const { slug } = useParams();
  const pageData =
    homeLoanBySalary.find((item) => item.slug === slug) || homeLoanBySalary[0];

  const { documentsSection } = pageData;
  if (!documentsSection) return null;

  return (
    <section id="documents" className="">
      <Container className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">

        {/* CARD WRAPPER — matches your UI system */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {documentsSection.title}
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

              {documentsSection.categories.map((cat, index) => (
                <div key={index} className="space-y-3">

                  <h3 className="text-lg font-semibold text-neutral-900">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>

            {/* Footer Note */}
            {documentsSection.note && (
              <p className="text-center mt-10 text-sm text-neutral-500 italic">
                {documentsSection.note}
              </p>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SalaryDocumentsSection;
