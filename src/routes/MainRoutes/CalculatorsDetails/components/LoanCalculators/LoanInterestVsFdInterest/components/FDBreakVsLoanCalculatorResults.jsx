const format = (n) =>
  `₹ ${Number(n).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;

const FDBreakVsLoanCalculatorResults = ({ results }) => {
  return (
    <section
      id="results-section"
      aria-live="polite"
      role="status"
      className="mt-10 animate-fade-in"
    >
      {/* ========= CARDS ========= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* -------- LOAN OPTION -------- */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Loan Option</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Monthly EMI</span>
              <span>{format(results.emi)}</span>
            </li>
            <li className="flex justify-between font-bold">
              <span>Total Interest Paid</span>
              <span>{format(results.totalLoanInterest)}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Amount Paid</span>
              <span>{format(results.totalPaid)}</span>
            </li>
          </ul>
        </div>

        {/* -------- FD OPTION -------- */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800">
          <h2 className="text-xl font-semibold mb-4">FD Option</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>FD Maturity Value</span>
              <span>{format(results.fdMaturity)}</span>
            </li>
            <li className="flex justify-between">
              <span>FD Interest Earned</span>
              <span>{format(results.fdInterest)}</span>
            </li>
            <li className="flex justify-between font-bold">
              <span>Opportunity Cost</span>
              <span>{format(results.opportunityCost)}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ========= RECOMMENDATION ========= */}
      <div className="mt-8 bg-gray-100 p-6 rounded-xl border-l-4 border-gray-500">
        <h3 className="font-bold text-lg">
          Recommendation: {results.recommendation}
        </h3>
        <p className="mt-2">
          Net Advantage:{" "}
          <span className="font-bold text-xl">
            {format(results.netAdvantage)}
          </span>
        </p>
      </div>
    </section>
  );
};

export default FDBreakVsLoanCalculatorResults;
