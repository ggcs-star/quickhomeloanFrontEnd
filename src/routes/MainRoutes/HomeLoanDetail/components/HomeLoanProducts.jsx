import React from "react";
import { CircleCheckBig } from "lucide-react";

const HomeLoanProducts = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300 ">
        <h2 className="text-xl md:text-2xl font-bold text-black">
          {data.title}
        </h2>
      </div>

      {/* Table */}
      <div className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border-neutral-300">
            <thead>
              <tr className="bg-gray-200 text-black text-sm uppercase tracking-wider">
                <th className="p-5 font-bold">Loan Type</th>
                <th className="p-5 font-bold">Interest Rate</th>
                <th className="p-5 font-bold hidden sm:table-cell">Ideal For</th>
                {/* <th className="p-5 font-bold bg-gray-900">Highlights</th> */}
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-300">
              {data.products.map((product, index) => (
                <tr key={index} className="transition-colors duration-300">
                  {/* Loan Type */}
                  <td className="p-5">
                    <div className="font-bold text-black text-lg">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.description}
                    </div>
                  </td>

                  {/* Interest Rate */}
                  <td className="p-5 font-semibold text-lg">
                    {product.rateRange}
                  </td>

                  {/* Ideal For */}
                  <td className="p-5 text-gray-600 hidden sm:table-cell text-sm">
                    <div className="flex items-center">
                      <CircleCheckBig className="w-4 h-4 text-green-600 mr-2" />
                      {product.idealFor}
                    </div>
                  </td>

                  {/* Highlights / EMI Column
                  <td className="p-5 font-bold text-black bg-gray-50">
                    {product.highlight || "N/A"}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanProducts;
