import React from "react";

const HowThisCalculatorWorks = () => {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 my-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        How This Calculator Works
      </h3>

      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          This calculator uses a logarithmic transformation of the standard EMI
          formula. While the normal formula calculates the EMI, we reverse-solve
          it for{" "}
          <code className="bg-gray-100 border border-gray-200 rounded px-1 text-sm font-mono">
            n
          </code>{" "}
          (tenure).
        </p>

        <p className="font-semibold mt-2">EMI Formula:</p>

        <pre className="bg-gray-50 p-3 rounded-md text-center text-sm my-2 font-mono border border-gray-200">
          EMI = P × r × (1+r)^n / ((1+r)^n − 1)
        </pre>

        <p className="font-semibold mt-2">Solved for n (tenure):</p>

        <pre className="bg-gray-50 p-3 rounded-md text-center text-sm my-2 font-mono border border-gray-200">
          n = log( EMI / (EMI – P×r) ) / log(1+r)
        </pre>

        <h4 className="font-semibold pt-2 text-gray-800">
          ✔ Factors Considered
        </h4>

        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Interest rate</li>
          <li>EMI affordability</li>
          <li>Loan amount</li>
          <li>Monthly compounding</li>
        </ul>

        <h4 className="font-semibold pt-2 text-gray-800">
          ✔ Limitations
        </h4>

        <p>
          This tool assumes a constant EMI and interest rate. It does not account
          for processing fees, insurance, taxes, floating rates, or prepayments,
          which can all affect the actual tenure.
        </p>
      </div>
    </section>
  );
};

export default HowThisCalculatorWorks;
