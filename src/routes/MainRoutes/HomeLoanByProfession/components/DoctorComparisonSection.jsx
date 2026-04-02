import React from "react";

const DoctorComparisonSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {data.title}
          </h2>
          <p className="mt-2 text-lg text-gray-500">{data.subtitle}</p>
        </div>

        {/* Table */}
        <div className="overflow-hidden border border-neutral-300 rounded-lg">
          <table className="min-w-full divide-y divide-neutral-300 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="text-sm uppercase tracking-wider px-6 py-4 text-left font-bold text-gray-900"
                >
                  {data.headers.parameter}
                </th>
                <th
                  scope="col"
                  className="text-sm uppercase tracking-wider px-6 py-4 text-left font-bold text-gray-900"
                >
                  {data.headers.doctorLoan}
                </th>
                <th
                  scope="col"
                  className="text-sm uppercase tracking-wider px-6 py-4 text-left font-bold text-gray-900"
                >
                  {data.headers.regularLoan}
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-neutral-300">
              {data.rows.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-800">
                    {row.parameter}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800font-extrabold">
                    {row.doctorLoan}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">
                    {row.regularLoan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default DoctorComparisonSection;
