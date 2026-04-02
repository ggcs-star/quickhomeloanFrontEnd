import React from "react";
import { Container } from "../../../../components/Layout";

const SixBHKInterestRatesSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="">
      <Container className="max-w-6xl mx-auto">

        {/* Entire Section Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>

            {data.subtitle && (
              <p className="text-neutral-600 text-sm mt-1">{data.subtitle}</p>
            )}
          </div>

          {/* Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              
              {/* Table Header */}
              <thead className="bg-neutral-100 border-b border-neutral-300">
                <tr>
                  {data.tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className="p-5 text-xs md:text-sm font-semibold text-neutral-800 uppercase tracking-wide"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Rows */}
              <tbody>
                {data.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition"
                  >
                    <td className="p-5 font-medium text-neutral-900">
                      {row.lenderType}
                    </td>
                    <td className="p-5 text-neutral-700">{row.exampleBanks}</td>
                    <td className="p-5 text-neutral-700">{row.interestRate}</td>
                    <td className="p-5 text-neutral-700">{row.processingFee}</td>
                    <td className="p-5 text-neutral-700">{row.maxTenure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          {data.note && (
            <div className="p-5 border-t border-neutral-300">
              <p className="text-sm text-neutral-500 text-center">{data.note}</p>
            </div>
          )}

        </div>

      </Container>
    </section>
  );
};

export default SixBHKInterestRatesSection;
