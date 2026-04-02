import React, { useState } from "react";
import { Container } from "../../../../components/Layout";

const EMISection = ({ data }) => {
  const [loanAmount, setLoanAmount] = useState(data.baseLoanAmount);
  const [interestRate, setInterestRate] = useState(data.defaultInterestRate);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(emi);
  };

  const currentEMI = calculateEMI(loanAmount, interestRate, tenure);

  return (
    <Container>
      <div className="py-12 text-neutral-900">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          {data.title}
        </h2>

        {/* Interactive Calculator */}
        <div className="bg-white rounded-md border border-neutral-300 p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-neutral-900">
            Interactive EMI Calculator
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Tenure (Years)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
          </div>

          {/* EMI Result */}
          <div className="text-center p-4 bg-neutral-100 rounded-md">
            <div className="text-2xl font-bold text-neutral-900">
              Monthly EMI: ₹{currentEMI.toLocaleString()}
            </div>
          </div>
        </div>

        {/* EMI Table */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          <h3 className="text-xl font-semibold p-6 bg-black text-white border-b border-neutral-300">
            Detailed EMI Breakdown Table (at {data.defaultInterestRate}% p.a.)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Loan Tenure
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Your EMI
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Total Interest
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Total Payment
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 uppercase tracking-wider">
                    Min. Salary Required*
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-300">
                {data.emiTable.map((row, index) => (
                  <tr key={index} className="">
                    <td className="px-6 py-4 text-lg font-medium text-neutral-900">
                      {row.tenure} Years
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-800">
                      ₹{row.emi.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-800">
                      ₹{row.totalInterest.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-800">
                      ₹{row.totalPayment.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-lg text-neutral-800">
                      ₹{row.minSalary.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-neutral-50 text-sm text-neutral-600 border-t border-neutral-200">
            *Assuming EMI is 50% of your monthly income
          </div>
        </div>

        {/* EMI Calculation Explanation */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h4 className="text-lg font-semibold mb-4 text-neutral-900">
              How is EMI Calculated?
            </h4>
            <p className="text-neutral-700 mb-4">
              The Formula:{" "}
              <code className="bg-neutral-100 px-2 py-1 rounded">
                {data.emiFormula}
              </code>
            </p>
            <p className="text-neutral-700">
              Where P = Principal, R = Monthly Interest Rate, N = Number of
              Monthly Installments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h4 className="text-lg font-semibold mb-4 text-neutral-900">
              In Excel
            </h4>
            <p className="text-neutral-700">
              Use:{" "}
              <code className="bg-neutral-100 px-2 py-1 rounded">
                {data.excelFormula}
              </code>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EMISection;
