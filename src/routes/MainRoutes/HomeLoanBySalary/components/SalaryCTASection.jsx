import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";

const SalaryCTASection = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const pageData =
    homeLoanBySalary.find((item) => item.slug === slug) || homeLoanBySalary[0];
  const { ctaSection } = pageData;

  if (!ctaSection) return null;

  return (
    <section className="">
      <Container>
        <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-md border border-neutral-300">
          <h3 className="text-2xl font-semibold text-neutral-900">
            {ctaSection.title}
          </h3>
          <p className="mt-2 mb-6 text-base text-neutral-600">
            {ctaSection.subtitle}
          </p>
          <button
            onClick={() => navigate(ctaSection.link || "/apply-loan")}
            className="font-semibold cursor-pointer rounded-md transition-all duration-200 bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800 disabled:bg-neutral-400 px-8 py-3 text-base md:text-lg"
          >
            {ctaSection.buttonText}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SalaryCTASection;
