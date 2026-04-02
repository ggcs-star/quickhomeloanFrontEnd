import React from "react";

const DoctorRatesSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="rates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {data.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{data.subtitle}</p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      {data.headers.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className={`px-3 py-3.5 text-left text-sm font-bold text-gray-900 ${
                            header.highlight ? "bg-gray-100" : ""
                          } ${header.hidden || ""}`}
                        >
                          {header.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.lenders.map((lender, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {lender.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-extrabold">
                          {lender.interestRate}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                          {lender.processingFee}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden md:table-cell">
                          {lender.tenure}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-600">
                          {lender.benefit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorRatesSection;
