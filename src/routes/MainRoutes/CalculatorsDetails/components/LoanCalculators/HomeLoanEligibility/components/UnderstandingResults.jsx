import React from "react";

const UnderstandingResults = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Understanding the Results
      </h2>

      {/* INTRO */}
      <p className="text-gray-600 leading-relaxed mb-4">
        The results from the loan qualification calculator give you a powerful
        snapshot of your borrowing capacity. Here's what they mean:
      </p>

      {/* EXPLANATION LIST */}
      <ul className="space-y-3 text-gray-600 leading-relaxed mb-6">
        <li>
          <strong className="text-gray-800">Maximum Loan Amount:</strong> This is
          the principal amount that the bank is likely to sanction based on your
          calculated repayment capacity. It is the primary output of the
          calculator.
        </li>

        <li>
          <strong className="text-gray-800">Eligible EMI:</strong> This is the
          maximum monthly payment you can afford for the new loan, after
          accounting for your existing financial obligations and the bank's FOIR
          norms.
        </li>

        <li>
          <strong className="text-gray-800">
            FOIR (Fixed Obligation to Income Ratio):
          </strong>{" "}
          The percentage of your income that can go towards EMIs. If your
          calculated FOIR exceeds the bank's limit (e.g., 50%), your loan
          application may be rejected.
        </li>

        <li>
          <strong className="text-gray-800">LTV vs. Eligibility:</strong> Even if
          you are eligible for a large loan, banks also have a Loan-to-Value
          (LTV) ratio limit (e.g., 80% for home loans). You will be sanctioned the
          lower of the two: your eligibility amount or the LTV amount.
        </li>
      </ul>

      {/* TABLE TITLE */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Example Output Table
      </h3>

      <p className="text-gray-600 mb-4">
        Here’s how a bank might view your profile based on the first example:
      </p>

      {/* TABLE */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700">
                Parameter
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700">
                Value
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="px-5 py-3 text-sm text-gray-700">
                Net Monthly Income
              </td>
              <td className="px-5 py-3 text-sm text-gray-700">
                ₹ 80,000
              </td>
            </tr>

            <tr className="border-t bg-gray-50">
              <td className="px-5 py-3 text-sm text-gray-700">
                50% of Income (Max Obligation)
              </td>
              <td className="px-5 py-3 text-sm text-gray-700">
                ₹ 40,000
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-5 py-3 text-sm text-gray-700">
                Existing EMIs
              </td>
              <td className="px-5 py-3 text-sm text-gray-700">
                ₹ 10,000
              </td>
            </tr>

            <tr className="border-t bg-gray-50">
              <td className="px-5 py-3 text-sm text-gray-700">
                Eligible EMI for New Loan
              </td>
              <td className="px-5 py-3 text-sm text-gray-700">
                ₹ 30,000
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-5 py-3 text-sm font-semibold text-gray-800">
                Maximum Loan Amount
              </td>
              <td className="px-5 py-3 text-sm font-semibold text-gray-800">
                ₹ 34,58,700
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UnderstandingResults;
