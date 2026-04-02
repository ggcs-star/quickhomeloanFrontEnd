import React from "react";

const CalculatorConclusion = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Conclusion
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          The decision between an under-construction and a ready-to-move home is
          not just about the price tag; it is a complex trade-off between cost,
          risk, time, and convenience. This calculator is designed to illuminate
          these trade-offs, transforming abstract risks into tangible financial
          figures.
        </p>

        <p>
          <strong className="text-gray-800">UC is best for:</strong>{" "}
          Investors with a long-term horizon, buyers with a limited initial
          budget who can leverage staggered payments, and those who are not in a
          hurry to move and want to capitalize on potential market appreciation.
        </p>

        <p>
          <strong className="text-gray-800">RTM is best for:</strong>{" "}
          End-users who need to move immediately (e.g., job relocation),
          risk-averse buyers who value certainty and peace of mind, and those
          who want to start claiming tax benefits and avoid paying rent right
          away.
        </p>

        <p className="font-medium text-gray-700">
          Ultimately, the{" "}
          <span className="italic font-semibold text-gray-800">“better”</span>{" "}
          option is highly personal. Use these results as a powerful input in
          your decision-making process. Align the financial data with your
          personal circumstances, risk appetite, and life goals to choose the
          home that is truly right for you.
        </p>
      </div>
    </section>
  );
};

export default CalculatorConclusion;
