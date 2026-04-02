import React from "react";

const EligibilityDocumentsSection = ({ eligibility, documents }) => {
  return (
    <section className="grid lg:grid-cols-2 gap-6 mb-8">
      {/* ===== Eligibility Criteria Card ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {eligibility.title || "Eligibility Criteria"}
        </h3>

        <table className="w-full text-sm text-gray-700 border-separate" style={{ borderSpacing: "0px 10px" }}>
          <tbody>
            {eligibility.criteria.map((item, index) => (
              <tr key={index} className="align-top">
                <td className="w-36 text-gray-600 font-medium pr-4">{item.label}</td>
                <td className="bg-gray-50 p-3 rounded-lg">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {eligibility.tip && (
          <p className="mt-4 text-xs text-gray-500">{eligibility.tip}</p>
        )}
      </div>

      {/* ===== Documents Required Card ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {documents.title || "Documents Required"}
        </h3>

        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          {documents.items.map((doc, index) => (
            <li key={index} className="p-2 bg-gray-50 rounded">
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EligibilityDocumentsSection;
