import React, { useState } from 'react';
import CalculatorHeader from '../../../../../../components/CalculatorHeader';
import { Container } from '../../../../../../components/Layout';

const HomeLoanPrepayorg = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [prepaymentAmount, setPrepaymentAmount] = useState(500000);
  const [prepaymentMonth, setPrepaymentMonth] = useState(12);
  const [prepaymentEffect, setPrepaymentEffect] = useState('reduceEMI');
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('first12');

  const calculateEMI = (P, r, n) => {
    if (r === 0) return P / n;
    const f = Math.pow(1 + r, n);
    return (P * r * f) / (f - 1);
  };

  const calculateOutstandingPrincipal = (P, r, emi, m) => {
    if (r === 0) return P - emi * m;
    const f = Math.pow(1 + r, m);
    return P * f - (emi * (f - 1)) / r;
  };

  const calculateTenure = (P, r, emi) => {
    if (r === 0) return Math.ceil(P / emi);
    return Math.ceil(Math.log(emi / (emi - P * r)) / Math.log(1 + r));
  };

  const calculateTotalInterest = (P, r, emi, months) => {
    let balance = P;
    let total = 0;

    for (let i = 0; i < months; i++) {
      let interest = balance * r;
      let principalPaid = emi - interest;
      balance -= principalPaid;
      total += interest;
      if (balance <= 0) break;
    }
    return total;
  };

  const generateSchedule = (P, r, emi, months, start, end) => {
    let schedule = [];
    let balance = P;

    for (let m = 1; m <= months; m++) {
      let interest = balance * r;
      let principalPaid = emi - interest;
      balance -= principalPaid;

      if (m >= start && m <= end) {
        schedule.push({
          month: m,
          principalPaid,
          interest,
          balance: Math.max(balance, 0),
        });
      }
      if (balance <= 0) break;
    }
    return schedule;
  };

  const currency = (v) => Math.round(v).toLocaleString('en-IN');

  const calculateLoan = () => {
    if (!loanAmount || !interestRate || !tenure || !prepaymentAmount || !prepaymentMonth) {
      alert("Please fill all fields.");
      return;
    }

    const r = interestRate / 12 / 100;
    const totalMonths = tenure * 12;

    const currentEMI = calculateEMI(loanAmount, r, totalMonths);
    const totalInterestBefore = currentEMI * totalMonths - loanAmount;

    let outstanding = calculateOutstandingPrincipal(loanAmount, r, currentEMI, prepaymentMonth);
    outstanding -= prepaymentAmount;

    let newEMI, newTenure;

    if (prepaymentEffect === "reduceEMI") {
      const remainingMonths = totalMonths - prepaymentMonth;
      newEMI = calculateEMI(outstanding, r, remainingMonths);
      newTenure = totalMonths;
    } else {
      newEMI = currentEMI;
      newTenure = calculateTenure(outstanding, r, currentEMI) + prepaymentMonth;
    }

    const interestBefore = calculateTotalInterest(loanAmount, r, currentEMI, prepaymentMonth);
    const interestAfter = calculateTotalInterest(
      outstanding,
      r,
      newEMI,
      newTenure - prepaymentMonth
    );
    const totalInterestAfter = interestBefore + interestAfter;

    const interestSaved = totalInterestBefore - totalInterestAfter;

    const first12 = generateSchedule(loanAmount, r, currentEMI, totalMonths, 1, 12);
    const last12 = generateSchedule(
      loanAmount,
      r,
      currentEMI,
      totalMonths,
      Math.max(1, totalMonths - 11),
      totalMonths
    );

    setResults({
      currentEMI,
      totalInterestBefore,
      totalMonths,
      newEMI,
      totalInterestAfter,
      newTenureMonths: Math.ceil(newTenure),
      interestSaved,
      prepaymentAmount,
      prepaymentMonth,
      effectText:
        prepaymentEffect === "reduceEMI"
          ? `reduce your EMI by ₹${currency(currentEMI - newEMI)}`
          : `reduce your loan tenure by ${totalMonths - Math.ceil(newTenure)} months`,
      first12,
      last12,
    });
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <Container className="mx-auto bg-white">

        {/* HEADER */}
        <CalculatorHeader
          title="Home Loan Prepayment vs Investment Calculator"
          subtitle="A powerful tool to help you decide whether to prepay your home loan or invest surplus funds for long-term wealth creation."
          description="Compare guaranteed interest savings from prepayment against potential post-tax investment returns to make a rational, risk-adjusted decision."
        />

        <div className="flex flex-col">

          {/* LEFT SECTION */}
       

          {/* RIGHT SECTION */}
          <main className="lg:w-2/3 p-6">

            {/* Loan Inputs */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-300 text-black">
                Loan Details
              </h2>

              <div className="space-y-4">
                {/* Loan Amount */}
                <div>
                  <label className="text-sm font-medium text-black">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(+e.target.value)}
                    className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-gray-600"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="text-sm font-medium text-black">Annual Interest Rate (%)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(+e.target.value)}
                    className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-gray-600"
                  />
                </div>

                {/* Tenure */}
                <div>
                  <label className="text-sm font-medium text-black">Loan Tenure (Years)</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(+e.target.value)}
                    className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              </div>
            </section>

            {/* Prepayment Inputs */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-300 text-black">
                Prepayment Details
              </h2>

              <div className="space-y-4">
                {/* Prepayment Amount */}
                <div>
                  <label className="text-sm font-medium text-black">Prepayment Amount (₹)</label>
                  <input
                    type="number"
                    value={prepaymentAmount}
                    onChange={(e) => setPrepaymentAmount(+e.target.value)}
                    className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-md"
                  />
                </div>

                {/* Prepayment Month */}
                <div>
                  <label className="text-sm font-medium text-black">Prepayment Month</label>
                  <input
                    type="number"
                    value={prepaymentMonth}
                    onChange={(e) => setPrepaymentMonth(+e.target.value)}
                    className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-md"
                  />
                </div>

                {/* Effect */}
                <div>
                  <label className="text-sm font-medium text-black">Prepayment Effect</label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="effect"
                        value="reduceEMI"
                        checked={prepaymentEffect === 'reduceEMI'}
                        onChange={(e) => setPrepaymentEffect(e.target.value)}
                      />
                      <span className="text-black">Reduce EMI</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="effect"
                        value="reduceTenure"
                        checked={prepaymentEffect === 'reduceTenure'}
                        onChange={(e) => setPrepaymentEffect(e.target.value)}
                      />
                      <span className="text-black">Reduce Tenure</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Calculate Button */}
            <button
              onClick={calculateLoan}
              className="w-full py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Calculate Savings
            </button>

            {/* RESULTS */}
            {results && (
              <section className="mt-8">

                {/* Summary */}
                <div className="bg-gray-100 p-6 rounded-md border border-gray-300">
                  <h3 className="text-lg font-semibold text-black mb-4">Summary</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 border border-gray-300 rounded-md">
                      <h4 className="font-semibold text-black mb-2">Before Prepayment</h4>
                      <p>EMI: ₹{currency(results.currentEMI)}</p>
                      <p>Total Interest: ₹{currency(results.totalInterestBefore)}</p>
                      <p>Tenure: {results.totalMonths} months</p>
                    </div>

                    <div className="bg-white p-4 border border-gray-300 rounded-md">
                      <h4 className="font-semibold text-black mb-2">After Prepayment</h4>
                      <p>EMI: ₹{currency(results.newEMI)}</p>
                      <p>Total Interest: ₹{currency(results.totalInterestAfter)}</p>
                      <p>Tenure: {results.newTenureMonths} months</p>
                    </div>
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-black text-white text-center py-6 mt-6 rounded-md">
                  <h3 className="text-xl font-semibold">Total Interest Saved</h3>
                  <p className="text-3xl font-bold mt-2">₹{currency(results.interestSaved)}</p>
                </div>

                {/* Explanation */}
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300 mt-4">
                  <p className="text-gray-800 italic">
                    By prepaying ₹{currency(results.prepaymentAmount)} after {results.prepaymentMonth} months,
                    you save ₹{currency(results.interestSaved)} and {results.effectText}.
                  </p>
                </div>

                {/* TABS */}
                <div className="mt-8">
                  <div className="flex border-b border-gray-300">
                    <button
                      onClick={() => setActiveTab("first12")}
                      className={`px-4 py-2 ${activeTab === "first12"
                          ? "border-b-2 border-black font-semibold"
                          : "text-gray-600"
                        }`}
                    >
                      First 12 Months
                    </button>

                    <button
                      onClick={() => setActiveTab("last12")}
                      className={`px-4 py-2 ${activeTab === "last12"
                          ? "border-b-2 border-black font-semibold"
                          : "text-gray-600"
                        }`}
                    >
                      Last 12 Months
                    </button>
                  </div>

                  {/* TABLE */}
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-200 border-b border-gray-300">
                          <th className="px-4 py-2 text-left">Month</th>
                          <th className="px-4 py-2 text-left">Principal</th>
                          <th className="px-4 py-2 text-left">Interest</th>
                          <th className="px-4 py-2 text-left">Balance</th>
                        </tr>
                      </thead>

                      <tbody>
                        {(activeTab === "first12"
                          ? results.first12
                          : results.last12
                        ).map((row) => (
                          <tr key={row.month} className="border-b border-gray-200">
                            <td className="px-4 py-2">{row.month}</td>
                            <td className="px-4 py-2">₹{currency(row.principalPaid)}</td>
                            <td className="px-4 py-2">₹{currency(row.interest)}</td>
                            <td className="px-4 py-2">₹{currency(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}
          </main>

             <aside className="lg:w-1/3 p-6 border-r border-gray-200">
            <h2 className="text-xl font-semibold mb-6 text-black">How to Use</h2>

            <div className="space-y-5">
              {[
                "Enter your basic loan details.",
                "Add your prepayment amount and month.",
                "Choose whether to reduce EMI or reduce tenure.",
                "Click Calculate to see savings."
              ].map((txt, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                  <h3 className="font-semibold text-black mb-1">Step {i + 1}</h3>
                  <p className="text-gray-700 text-sm">{txt}</p>
                </div>
              ))}

              <div className="bg-gray-100 p-4 rounded border border-gray-300">
                <p className="text-sm text-gray-800">
                  <strong>Tip:</strong> Prepaying earlier saves more interest.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default HomeLoanPrepayorg;
