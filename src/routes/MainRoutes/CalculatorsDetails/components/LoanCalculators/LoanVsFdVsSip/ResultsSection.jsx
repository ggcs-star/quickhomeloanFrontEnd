import React from "react";

const ResultsSection = ({ results, inputs }) => {
  const formatINR = (v) =>
    `₹${Number(v).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  if (!results) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Calculation Results
        </h2>
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">
            Enter values to see calculation results
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Calculation Results
      </h2>

      <Section title="Loan Details">
        <Row label="EMI" value={formatINR(results.emi)} />
        <Row
          label="Total Interest Paid"
          value={formatINR(results.totalInterest)}
        />
        <Row
          label="Total Amount Paid"
          value={formatINR(results.totalLoanAmount)}
        />
      </Section>

      <Section title="FD/MF (Lumpsum) Details">
        <Row
          label="Invested Amount"
          value={formatINR(inputs.loanAmount)}
        />
        <Row
          label="Maturity Value"
          value={formatINR(results.maturityValue)}
        />
        <Row
          label="Interest Earned"
          value={formatINR(results.interestEarned)}
        />
      </Section>

      <Section title="SIP Investment (EMI as SIP)">
        <Row
          label="Total Invested"
          value={formatINR(results.totalLoanAmount)}
        />
        <Row
          label="Final SIP Value"
          value={formatINR(results.sipValue)}
        />
        <Row
          label="Gain from SIP"
          value={formatINR(results.gainFromSip)}
        />
      </Section>

      {inputs.loanType === "asset" && (
        <Section title="Future Asset Value">
          <Row
            label={`Value After ${inputs.loanTerm} Years`}
            value={formatINR(results.futureAssetValue)}
          />
          <p className="text-sm text-gray-600">
            (Asset Growth: {results.assetGrowthRate}% per year)
          </p>
        </Section>
      )}

      <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
        <p className="font-semibold text-lg">
          {results.recommendation}
        </p>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-gray-50 rounded-xl p-6 mb-6 border-l-4 border-gray-700">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="font-medium text-gray-700">{label}</span>
    <span className="font-bold text-gray-900">{value}</span>
  </div>
);

export default ResultsSection;
