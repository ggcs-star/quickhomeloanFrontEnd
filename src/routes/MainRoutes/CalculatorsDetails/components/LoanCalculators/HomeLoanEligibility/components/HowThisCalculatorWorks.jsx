import React from "react";

const HowThisCalculatorWorks = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How This Calculator Works
      </h2>

      <div className="space-y-5 text-gray-600 leading-relaxed">
        <p>
          This loan amount calculator primarily uses the FOIR-based method, which
          is the most common approach used by lenders in India. Here's a
          breakdown of the logic:
        </p>

        {/* FOIR METHOD */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">
            1. FOIR-Based Method (Fixed Obligation to Income Ratio)
          </h3>
          <p className="mt-1">
            Banks cap the total of your EMIs (existing + new) to a certain
            percentage of your net monthly income. This is typically between
            40% and 60%.
          </p>

          <p className="font-mono bg-gray-100 p-3 rounded-md mt-3 text-center text-sm">
            Eligible EMI = (Net Income × FOIR %) − Existing EMIs
          </p>
        </div>

        {/* LOAN AMOUNT CALCULATION */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">
            2. Loan Amount Calculation
          </h3>
          <p className="mt-1">
            Once the eligible EMI is determined, the calculator uses the reverse
            EMI formula to find the principal loan amount you can afford.
          </p>

          <p className="font-mono bg-gray-100 p-3 rounded-md mt-3 text-center text-sm">
            Loan Amount = EMI × [ (1+r)<sup>n</sup> − 1 ] / [ r × (1+r)
            <sup>n</sup> ]
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Where, <strong>r</strong> is the monthly interest rate and{" "}
            <strong>n</strong> is the tenure in months.
          </p>
        </div>

        {/* STEP BY STEP */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">
            Step-by-Step Calculation (Home Loan Example)
          </h3>

          <ul className="list-decimal list-inside space-y-2 mt-2">
            <li>
              <strong>Calculate Max Obligation:</strong> ₹80,000 (Income) × 0.50
              (FOIR) = ₹40,000
            </li>
            <li>
              <strong>Calculate Eligible EMI:</strong> ₹40,000 − ₹10,000
              (Existing EMIs) = ₹30,000
            </li>
            <li>
              <strong>Calculate Loan Amount:</strong> Using the formula with EMI
              = ₹30,000, Rate = 8.5%, Tenure = 20 years, we get{" "}
              <strong>₹34,58,700</strong>.
            </li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">
            Limitations to Consider
          </h3>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              This is an estimation tool. The final amount depends on the bank's
              credit appraisal.
            </li>
            <li>
              Your credit score plays a vital role; a low score can lead to
              rejection or a higher interest rate.
            </li>
            <li>
              Processing fees and other charges are not included in this
              calculation.
            </li>
            <li>
              The maximum tenure is often restricted by the borrower's age.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowThisCalculatorWorks;
