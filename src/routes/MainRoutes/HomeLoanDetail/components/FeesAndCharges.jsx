import React from "react";

const FeesAndCharges = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <h2 className="text-xl md:text-2xl font-bold text-black">
          {data.title}
        </h2>
      </div>

      {/* Table */}
      <div className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-black text-sm uppercase tracking-wider">
                <th className="p-5 font-bold">Fee Type</th>
                <th className="p-5 font-bold">Charges</th>
                <th className="p-5 font-bold">
                  Industry Average
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.fees.map((fee, index) => (
                <tr key={index} className="transition-colors duration-300">
                  {/* Fee Type */}
                  <td className="p-5">
                    <div className="font-bold text-black text-lg">
                      {fee.type}
                    </div>
                  </td>

                  {/* Charges */}
                  <td className="p-5">
                    <div className="text-lg font-semibold text-black">
                      {fee.charge}
                    </div>

                    {fee.subtext && (
                      <div className="text-xs text-gray-500 mt-1">
                        {fee.subtext}
                      </div>
                    )}
                  </td>

                  {/* Industry Average */}
                  <td className="p-5">
                    <div className="text-sm font-medium text-gray-700">
                      {fee.industryAverage}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeesAndCharges;
