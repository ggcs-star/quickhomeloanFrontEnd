import React from "react";

const LoanProgramsTaxSection = ({ programs, taxBenefits }) => {
  return (
    <section className="grid md:grid-cols-2 gap-6 mb-8">
      {/* ===== Special Loan Programs ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="font-semibold mb-2 text-gray-900">
          {programs.title || "Special Loan Programs"}
        </h4>
        <ul className="text-sm text-gray-700 space-y-2">
          {programs.items.map((program, index) => (
            <li key={index}>
              <strong className="text-gray-900">{program.name}:</strong>{" "}
              {program.description}
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Tax Benefits Snapshot ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="font-semibold mb-2 text-gray-900">
          {taxBenefits.title || "Tax Benefits Snapshot"}
        </h4>

        <table className="w-full text-sm text-gray-700">
          <tbody>
            {taxBenefits.items.map((benefit, index) => (
              <tr key={index} className="align-top border-t first:border-none">
                <td className="w-36 text-gray-600 font-medium pr-4">
                  {benefit.section}
                </td>
                <td className="bg-gray-50 p-3 rounded-lg">{benefit.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {taxBenefits.tip && (
          <p className="mt-3 text-xs text-gray-500">{taxBenefits.tip}</p>
        )}
      </div>
    </section>
  );
};

export default LoanProgramsTaxSection;
