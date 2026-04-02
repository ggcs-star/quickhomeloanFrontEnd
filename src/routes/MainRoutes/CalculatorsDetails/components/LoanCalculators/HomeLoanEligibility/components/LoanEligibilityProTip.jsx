import React from "react";

const LoanEligibilityProTip = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              Clear small, high-interest loans like credit card debt to instantly
              improve your FOIR.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              Add a working spouse or parent as a co-applicant to maximize your
              eligible loan amount.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              Choose the longest possible tenure to reduce your EMI, which
              increases eligibility.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              Check your credit report for errors and rectify them before
              applying for a loan.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              Provide proof of variable pay like bonuses or incentives, as some
              banks consider a portion of it.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              Approach the bank where you have your salary account, as they may
              offer better terms.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LoanEligibilityProTip;
