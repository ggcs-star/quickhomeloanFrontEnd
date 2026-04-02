export default function WhatThisCalculatorDoes() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
    

        <p className="font-semibold text-gray-700">
          ✔ It clearly shows:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>How much interest you save</li>
          <li>How many months you reduce (if you keep EMI same)</li>
          <li>How much your EMI reduces (if you keep tenure same)</li>
          <li>New interest payable</li>
          <li>New EMI or new tenure</li>
          <li>Total savings over the entire loan</li>
          <li>Updated repayment schedule</li>
        </ul>

        <p>
          The calculation is based on core amortization principles used by
          Indian banks.
        </p>

        <p className="font-semibold text-gray-700">
          ✔ Calculator supports:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Home loan prepayment analysis</li>
          <li>Loan balance transfer planning</li>
          <li>Part payment vs full payment comparison</li>
          <li>Short-term vs long-term interest saving comparison</li>
        </ul>
      </div>
    </section>
  );
}
