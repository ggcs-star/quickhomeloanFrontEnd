import React, { useState, useEffect } from "react";

const CibilEMICalculator = ({ data }) => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(data.defaultRates.default);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = tenure * 12;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPaymentValue = emiValue * numberOfPayments;
    const totalInterestValue = totalPaymentValue - principal;

    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInterestValue));
    setTotalPayment(Math.round(totalPaymentValue));
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="mb-8 text-neutral-900">
      {/* Title & Description */}
      <h2 className="text-3xl font-bold text-neutral-900 mb-6">{data.title}</h2>

      <p className="text-neutral-700 mb-4 text-lg">{data.description}</p>
      <p className="text-neutral-600 mb-6">{data.emiDefinition}</p>

      {/* Interactive Calculator */}
      <div className="bg-white rounded-md p-6 mb-8 border border-neutral-300">
        <h3 className="text-xl font-semibold mb-4 text-neutral-900">
          Interactive EMI Calculator
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="range"
              min="1000000"
              max="20000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mb-2 accent-neutral-900"
            />
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Interest Rate (% p.a.)
            </label>
            <input
              type="range"
              min={data.defaultRates.min}
              max={data.defaultRates.max}
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mb-2 accent-neutral-900"
            />
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
            />
            <div className="text-xs text-neutral-600 mt-1">
              Range: {data.defaultRates.min}% - {data.defaultRates.max}%
            </div>
          </div>

          {/* Tenure */}
          <div>
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Tenure (Years)
            </label>
            <input
              type="range"
              min="5"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full mb-2 accent-neutral-900"
            />
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-neutral-100 rounded-lg p-6 border border-neutral-300">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-neutral-900">
                ₹{emi.toLocaleString()}
              </div>
              <div className="text-sm text-neutral-600">Monthly EMI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">
                ₹{totalInterest.toLocaleString()}
              </div>
              <div className="text-sm text-neutral-600">Total Interest</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">
                ₹{totalPayment.toLocaleString()}
              </div>
              <div className="text-sm text-neutral-600">Total Payment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Formula & Tip Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Formula Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-300">
          <h4 className="text-lg font-semibold mb-4 text-neutral-900">
            EMI Formula
          </h4>
          <div className="bg-neutral-50 p-4 rounded border border-neutral-300">
            <code className="text-sm font-mono text-neutral-800">
              {data.formula.equation}
            </code>
          </div>
          <div className="mt-4 space-y-2">
            {data.formula.variables.map((variable, index) => (
              <div key={index} className="text-sm text-neutral-700">
                • {variable}
              </div>
            ))}
          </div>
        </div>

        {/* Tip Section */}
        <div className="bg-white p-6 rounded-lg border border-neutral-300 border-l-4 border-l-neutral-800">
          <h4 className="text-lg font-semibold mb-3 text-neutral-900">Pro Tip</h4>
          <p className="text-neutral-700 leading-relaxed">{data.proTip}</p>
        </div>
      </div>
    </div>
  );
};

export default CibilEMICalculator;
