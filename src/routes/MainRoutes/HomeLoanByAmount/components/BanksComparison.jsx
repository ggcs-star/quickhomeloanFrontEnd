import React from "react";
import { Container } from "../../../../components/Layout";

const BanksComparison = ({ data }) => {
  return (
    <Container>
      <div className="py-12 text-neutral-900">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          {data.title}
        </h2>

        {/* Table Container */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-100 border-b border-neutral-300">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Bank / NBFC
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Interest Rate (p.a.)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Processing Fee
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Key Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Best For
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-neutral-200">
                {data.lenders.map((lender, index) => (
                  <tr
                    key={index}
                    className="hover:bg-neutral-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-neutral-900">
                        {lender.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-neutral-800">
                        {lender.interestRate}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-800">
                      {lender.processingFee}
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-800">
                      {lender.feature}
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-600">
                      {lender.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BanksComparison;
