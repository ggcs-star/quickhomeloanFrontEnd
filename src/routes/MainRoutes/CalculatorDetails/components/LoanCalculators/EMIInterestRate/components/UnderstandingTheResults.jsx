import React from "react";

const UnderstandingTheResults = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Understanding the Results
      </h2>

      {/* CONTENT */}
      <div className="space-y-6 text-gray-600 leading-relaxed">
        {/* KEY METRICS */}
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Annual Interest Rate (%):</strong> This is your key
              takeaway. It’s the true rate you pay per year and the best metric
              for comparing different loan offers.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Monthly Interest Rate (%):</strong> The annual rate divided
              by 12, used by banks for EMI calculation.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Total Interest Payable:</strong> The total cost of
              borrowing money over the entire loan tenure. A lower number is
              always better.
            </span>
          </li>
        </ul>

        {/* INTERPRETATION HEADER */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          How to Interpret Your Annual Rate
        </h3>

        {/* LOW RATE */}
        <div>
          <strong>If your rate is low (e.g., below 9%):</strong>
          <p className="mt-1">
            Congratulations! This is a very competitive rate, typical for home
            loans. It indicates a strong credit profile and a good deal from
            your lender. You&apos;re in a great financial position with this
            loan.
          </p>
        </div>

        {/* AVERAGE RATE */}
        <div>
          <strong>If your rate is average (e.g., 9% – 14%):</strong>
          <p className="mt-1">
            This is a standard rate, often seen with car loans or well-structured
            personal loans. While it&apos;s a fair rate, it might be worth
            periodically checking for better offers, especially if your credit
            score has improved since you took the loan.
          </p>
        </div>

        {/* HIGH RATE */}
        <div>
          <strong>If your rate is high (e.g., above 14%):</strong>
          <p className="mt-1">
            This rate is common for unsecured personal loans or consumer
            financing. While it may have been necessary at the time, you should
            actively look for ways to reduce it. Here are your options:
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Balance Transfer:</strong> Move your outstanding loan to a
              new lender offering a lower interest rate. Many banks have special
              offers for this.
            </li>
            <li>
              <strong>Refinancing:</strong> Re-negotiate the terms of your loan
              with your current or a new lender, especially if your financial
              situation has improved.
            </li>
          </ul>

          <p className="mt-3 font-semibold text-gray-800">
            Potential Savings: Even a 2% reduction on a 1,000,000 loan can save
            you over 20,000 per year in interest payments. Use this calculator
            with new loan offers to see the exact savings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingTheResults;
