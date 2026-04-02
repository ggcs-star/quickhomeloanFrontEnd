import React from "react";

const ComparisonSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="comparison" className="">
      <div className="max-w-6xl mx-auto">

        {/* Outer Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

              {/* TABLE HEAD */}
              <thead className="bg-neutral-100 border-b border-neutral-300">
                <tr>
                  <th className="p-5 text-xs md:text-sm font-semibold tracking-wide uppercase text-neutral-800">
                    Feature
                  </th>

                  <th className="p-5 text-xs md:text-sm font-semibold tracking-wide uppercase text-neutral-800">
                    {data.columns[0]}
                  </th>

                  <th className="p-5 text-xs md:text-sm font-semibold tracking-wide uppercase text-neutral-800">
                    {data.columns[1]}
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {data.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition"
                  >
                    {/* Feature Title */}
                    <td className="p-5 font-medium text-neutral-900 text-sm md:text-base">
                      {row.feature}
                    </td>

                    {/* Plot Loan */}
                    <td className="p-5 text-neutral-700">
                      {row.plotLoanBold ? (
                        <span className="font-semibold text-neutral-900">
                          {row.plotLoan}
                        </span>
                      ) : (
                        <span className="text-neutral-700">{row.plotLoan}</span>
                      )}
                    </td>

                    {/* Home Loan */}
                    <td className="p-5 text-neutral-700">
                      {row.homeLoanBold ? (
                        <span className="font-semibold text-neutral-900">
                          {row.homeLoan}
                        </span>
                      ) : (
                        <span className="text-neutral-700">{row.homeLoan}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
