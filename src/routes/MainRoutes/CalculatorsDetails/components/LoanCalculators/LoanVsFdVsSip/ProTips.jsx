import React from "react";

export default function ProTips() {
  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      {/* Tips List */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <TipItem>
            <strong>Golden Rule:</strong> If the loan interest rate is higher
            than your post-tax investment returns, prepaying the loan is usually
            the smarter choice.
          </TipItem>

          <TipItem>
            <strong>Risk-Adjusted Thinking:</strong> Loan prepayment delivers a
            guaranteed, risk-free return equal to your loan interest rate.
          </TipItem>

          <TipItem>
            <strong>Peace of Mind:</strong> Living debt-free has emotional and
            psychological value beyond pure financial calculations.
          </TipItem>

          <TipItem>
            <strong>Maximize Savings:</strong> When prepaying, reducing loan
            tenure almost always saves more interest than reducing EMI.
          </TipItem>
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   REUSABLE TIP ITEM
--------------------------------------------- */
function TipItem({ children }) {
  return (
    <li className="flex items-start">
      <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
      <span className="text-gray-700">{children}</span>
    </li>
  );
}
