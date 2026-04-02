import React from "react";

const LoanVsSWPComparisonTable = ({
  fdAmount = 100000,
  fdBreakRate = "8% (example)",
  swpFdRate = "50.0000%",
  loanRate = "10%",
}) => {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        {/* ================= TABLE HEAD ================= */}
        <thead>
          <tr className="bg-gray-200 text-black text-sm uppercase tracking-wider">
            <th className="p-5 font-bold">Option</th>
            <th className="p-5 font-bold">FD Break</th>
            <th className="p-5 font-bold">Loan + SWP</th>
          </tr>
        </thead>

        {/* ================= TABLE BODY ================= */}
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="p-5">
              <div className="font-bold text-black text-lg">
                Initial FD Amount
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                ₹{fdAmount.toLocaleString("en-IN")}
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                ₹{fdAmount.toLocaleString("en-IN")}
              </div>
            </td>
          </tr>

          <tr>
            <td className="p-5">
              <div className="font-bold text-black text-lg">
                FD Interest Rate
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                {fdBreakRate}
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                {swpFdRate}
              </div>
            </td>
          </tr>

          <tr>
            <td className="p-5">
              <div className="font-bold text-black text-lg">
                Loan Interest Rate
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                N/A
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                {loanRate}
              </div>
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="p-5">
              <div className="font-bold text-black text-lg">
                Net Outcome
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                FD is broken
              </div>
            </td>
            <td className="p-5">
              <div className="text-lg font-semibold text-black">
                FD principal used for SWP
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanVsSWPComparisonTable;
