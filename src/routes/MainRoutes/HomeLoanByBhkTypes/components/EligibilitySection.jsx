import React from "react";

const EligibilitySection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="eligibility" className="">
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
                  <th className="p-5 text-xs md:text-sm font-semibold uppercase tracking-wide text-neutral-800">
                    Criteria
                  </th>

                  {data.columns.map((col, index) => (
                    <th
                      key={index}
                      className={`p-5 text-xs md:text-sm font-semibold uppercase tracking-wide ${
                        index === data.columns.length - 1
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-800"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {data.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition"
                  >
                    <td className="p-5 font-medium text-neutral-900 text-sm md:text-base">
                      {row.criteria}
                    </td>

                    <td className="p-5 bg-neutral-50 text-neutral-700 font-medium">
                      {row.salaried}
                    </td>

                    <td className="p-5 bg-neutral-50 text-neutral-700 font-medium">
                      {row.selfEmployed}
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

export default EligibilitySection;
