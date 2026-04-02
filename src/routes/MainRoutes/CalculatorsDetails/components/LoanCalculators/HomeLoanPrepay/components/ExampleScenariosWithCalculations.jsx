import React from "react";

export default function ExampleScenariosWithCalculations() {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 my-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Example Calculations (Full & Detailed)
      </h3>

      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          To help users understand clearly, below are detailed prepayment
          calculations exactly the way banks evaluate them.
        </p>

        <p>
          The calculator uses the reverse EMI formula to calculate the number of
          remaining months:
        </p>

        <pre className="bg-gray-50 p-3 rounded-md text-center text-sm my-2 font-mono border border-gray-200">
          n = log( EMI / (EMI − P×r) ) / log(1 + r)
        </pre>

        {/* ================= EXAMPLE A ================= */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="font-semibold text-gray-800">
            EXAMPLE A — Home Loan with Prepayment
          </h4>

          <div className="mt-3 space-y-1 text-sm">
            <p>Outstanding Loan: ₹35,00,000</p>
            <p>Interest Rate: 8.50%</p>
            <p>EMI: ₹30,000</p>
            <p>Remaining Tenure: 240 months</p>
            <p>Prepayment Amount: ₹2,00,000</p>
            <p>
              Before Prepayment — Total Interest Payable: ≈ ₹36,04,000
            </p>
          </div>

          <div className="mt-3 text-sm">
            <p>
              <strong>After Prepayment:</strong> New Principal = ₹35,00,000 −
              ₹2,00,000 = ₹33,00,000
            </p>
          </div>

          {/* OPTION 1 */}
          <div className="mt-4">
            <h5 className="font-bold text-gray-800">
              OPTION 1 — Reduce Tenure (EMI remains ₹30,000)
            </h5>

            <p className="mt-2 text-sm">
              Using the reverse EMI formula:
            </p>

            <pre className="bg-white p-3 rounded-md text-center text-xs font-mono border border-gray-200 my-2">
              n = log(30000 / (30000 − 3300000×0.085/12)) / log(1+0.085/12)
            </pre>

            <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
              <li>New Tenure ≈ 223 months</li>
              <li>Previous Tenure: 240 months</li>
              <li>Tenure Reduced by: 17 months (1 year 5 months)</li>
              <li>
                <strong>Total Interest Saved: ₹6.23 lakh</strong>
              </li>
            </ul>
          </div>

          {/* OPTION 2 */}
          <div className="mt-4">
            <h5 className="font-bold text-gray-800">
              OPTION 2 — Reduce EMI (Tenure remains 240 months)
            </h5>

            <p className="mt-2 text-sm">
              Using the EMI formula with new principal:
            </p>

            <pre className="bg-white p-3 rounded-md text-center text-xs font-mono border border-gray-200 my-2">
              EMI = P × r × (1+r)^n / ((1+r)^n − 1)
            </pre>

            <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
              <li>New EMI ≈ ₹28,350</li>
              <li>Tenure unchanged (240 months)</li>
              <li>
                <strong>Interest Saved ≈ ₹2.81 lakh</strong>
              </li>
            </ul>
          </div>

          {/* SUMMARY */}
          <div className="mt-4 pt-3 border-t border-gray-200 text-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-800 font-semibold">
                  <th className="py-1">Feature</th>
                  <th className="py-1">Tenure Reduction</th>
                  <th className="py-1">EMI Reduction</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td>EMI</td>
                  <td>₹30,000</td>
                  <td>₹28,350</td>
                </tr>
                <tr>
                  <td>Tenure</td>
                  <td>↓ 17 months</td>
                  <td>Same (240)</td>
                </tr>
                <tr>
                  <td>Interest Saved</td>
                  <td>₹6.23 lakh</td>
                  <td>₹2.81 lakh</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Maximum savings</td>
                  <td>Lower EMI</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3 font-bold text-gray-800 text-center">
              📌 Recommendation: TENURE REDUCTION gives double the savings.
            </p>
          </div>
        </div>

        {/* ================= EXAMPLE B ================= */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="font-semibold text-gray-800">
            EXAMPLE B — Quick Summary
          </h4>

          <p className="mt-2 text-sm">
            Loan: ₹10,00,000 | EMI: ₹15,000 | Rate: 13% | Prepayment: ₹1,00,000
          </p>

          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            <li>Tenure Reduction Savings: ₹89,000</li>
            <li>EMI Reduction Savings: ₹29,000</li>
          </ul>
        </div>

        {/* ================= EXAMPLE C ================= */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="font-semibold text-gray-800">
            EXAMPLE C — Quick Summary
          </h4>

          <p className="mt-2 text-sm">
            Loan: ₹6,50,000 | EMI: ₹20,000 | Rate: 9% | Prepayment: ₹50,000
          </p>

          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            <li>Tenure Reduction Savings: ₹52,000</li>
            <li>EMI Reduction Savings: ₹19,000</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
