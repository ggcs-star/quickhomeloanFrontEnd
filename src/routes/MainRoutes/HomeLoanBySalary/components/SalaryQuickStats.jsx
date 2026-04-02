import React from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";

const SalaryQuickStats = () => {
  const { slug } = useParams();
  const pageData = homeLoanBySalary.find((item) => item.slug === slug) || homeLoanBySalary[0];

  if (!pageData.summaryStats) return null; // safety check
  const { stats, note } = pageData.summaryStats;

  return (
    <section className="bg-white py-4">
      <Container>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-300 rounded-md p-6 md:p-8 shadow-[0_8px_24px_rgba(17,24,39,0.04),_0_2px_6px_rgba(17,24,39,0.02)]"
            >
              <p className="text-base text-[#344054] mb-2">{item.label}</p>
              <p className="text-3xl font-semibold text-[#101828]">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-[#667085]">{note}</p>
      </Container>
    </section>
  );
};

export default SalaryQuickStats;
