import React from "react";

const TopBanksSection = ({ banks }) => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">
        Top Banks Offering Home Loans
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 text-xs uppercase tracking-wide border-b">
              <th className="pb-2">Bank</th>
              <th className="pb-2">Key Features</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 font-medium text-gray-900">{bank.name}</td>
                <td className="py-3 text-gray-600">{bank.features}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopBanksSection;
