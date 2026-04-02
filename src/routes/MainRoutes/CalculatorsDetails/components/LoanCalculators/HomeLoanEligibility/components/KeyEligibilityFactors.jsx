import React from "react";

const KeyEligibilityFactors = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Key Factors That Affect Your Loan Eligibility
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 list-disc list-inside">
          <li>
            <strong>Net Monthly Income:</strong> Higher income directly increases
            your loan eligibility and is the most critical factor.
          </li>

          <li>
            <strong>FOIR (Fixed Obligation to Income Ratio):</strong> Banks
            typically allow EMIs up to 40–60% of income. This calculator assumes
            50%.
          </li>

          <li>
            <strong>Credit Score:</strong> A score of 750+ improves approval
            chances and helps secure lower interest rates.
          </li>

          <li>
            <strong>Existing Debts:</strong> Ongoing EMIs reduce your remaining
            repayment capacity for a new loan.
          </li>

          <li>
            <strong>Age:</strong> Loan tenure is usually structured to end before
            retirement age.
          </li>

          <li>
            <strong>Employment Stability:</strong> Stable salaried employment is
            preferred over fluctuating income sources.
          </li>

          <li>
            <strong>Co-applicant:</strong> Adding a co-applicant with strong
            income and credit history can significantly boost eligibility.
          </li>

          <li>
            <strong>Bank Policies:</strong> Eligibility varies across lenders
            based on internal risk and approval norms.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default KeyEligibilityFactors;
