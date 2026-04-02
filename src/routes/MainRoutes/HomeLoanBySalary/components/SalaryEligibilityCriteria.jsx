import React from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";

const SalaryEligibilityCriteria = () => {
  const { slug } = useParams();
  const pageData =
    homeLoanBySalary.find((item) => item.slug === slug) || homeLoanBySalary[0];
  const { eligibilityCriteriaSection } = pageData;

  if (!eligibilityCriteriaSection) return null;

  return (
    <section id="eligibility" className="">
      <Container>
        
        {/* MAIN WRAPPER matches WhatIsPlotLoanSection */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">
          
          {/* CARD – EXACT MATCHED LAYOUT */}
          <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
            
            {/* Header (same as comparison component) */}
            <div className="p-6 border-b border-neutral-300">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800 text-center md:text-left">
                {eligibilityCriteriaSection.title}
              </h2>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {eligibilityCriteriaSection.criteria.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    
                    {/* Icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-neutral-800 shrink-0"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="#f4f4f4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12L11 15L16 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Text */}
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {item.label}
                      </p>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.value}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      

      </Container>
    </section>
  );
};

export default SalaryEligibilityCriteria;
