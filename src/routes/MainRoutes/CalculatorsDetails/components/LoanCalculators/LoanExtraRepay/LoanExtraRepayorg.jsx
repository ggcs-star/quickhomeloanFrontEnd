import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LoanExtraRepayorg = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.4);
  const [loanTerm, setLoanTerm] = useState(20);
  const [extraAmount, setExtraAmount] = useState('');
  const [extraStartMonth, setExtraStartMonth] = useState(0);
  const [extraRepayments, setExtraRepayments] = useState([]);

  const [results, setResults] = useState({
    monthlyRepayment: 0,
    principalPaid: 0,
    interestPaid: 0,
    extraRepaymentsTotal: 0,
    totalRepayments: 0,
    termReduced: '0 Years 0 Months',
    interestReduced: 0
  });

  const [chartData, setChartData] = useState(null);

  const addExtraRepayment = () => {
    const amount = parseFloat(extraAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid extra repayment amount');
      return;
    }

    const newRepayment = {
      id: Date.now(),
      amount,
      startMonth: parseInt(extraStartMonth)
    };

    setExtraRepayments([...extraRepayments, newRepayment]);
    setExtraAmount('');
  };

  const removeExtraRepayment = (id) => {
    setExtraRepayments(extraRepayments.filter(r => r.id !== id));
  };

  const resetCalculator = () => {
    setLoanAmount(500000);
    setInterestRate(8.4);
    setLoanTerm(20);
    setExtraAmount('');
    setExtraStartMonth(0);
    setExtraRepayments([]);
  };

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTerm * 12;

    const emi =
      loanAmount *
      monthlyRate *
      (Math.pow(1 + monthlyRate, totalMonths) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1));

    const totalPaymentWithoutExtra = emi * totalMonths;
    const totalInterestWithoutExtra = totalPaymentWithoutExtra - loanAmount;

    let balance = loanAmount;
    let totalInterest = 0;
    let totalExtraRepayments = 0;

    const balancesWithoutExtra = [];
    const balancesWithExtra = [];

    // no extra repayments baseline
    let bWithout = loanAmount;
    for (let m = 1; m <= totalMonths; m++) {
      const interest = bWithout * monthlyRate;
      const principal = emi - interest;
      bWithout -= principal;
      balancesWithoutExtra.push(Math.max(0, bWithout));
    }

    // with extra repayments
    let m = 0;
    while (balance > 0 && m < totalMonths * 2) {
      m++;
      const interest = balance * monthlyRate;
      totalInterest += interest;

      let principal = emi - interest;

      let extraThisMonth = 0;
      extraRepayments.forEach(r => {
        if (m > r.startMonth) extraThisMonth += r.amount;
      });

      if (extraThisMonth > 0) totalExtraRepayments += extraThisMonth;

      balance -= principal + extraThisMonth;
      balancesWithExtra.push(Math.max(0, balance));

      if (balance <= 0) break;
    }

    const monthsSaved = totalMonths - m;
    const interestSaved = totalInterestWithoutExtra - totalInterest;

    const yearsSaved = Math.floor(monthsSaved / 12);
    const monthsRemaining = monthsSaved % 12;

    setResults({
      monthlyRepayment: emi,
      principalPaid: loanAmount,
      interestPaid: totalInterest,
      extraRepaymentsTotal: totalExtraRepayments,
      totalRepayments: loanAmount + totalInterest + totalExtraRepayments,
      termReduced:
        monthsSaved > 0
          ? `${yearsSaved} Years ${monthsRemaining} Months`
          : '0 Years 0 Months',
      interestReduced: interestSaved
    });

    const labels = Array.from(
      {
        length: Math.max(
          balancesWithoutExtra.length,
          balancesWithExtra.length
        )
      },
      (_, i) => `Month ${i + 1}`
    );

    setChartData({
      labels,
      datasets: [
        {
          label: 'Without Extra Repayments',
          data: balancesWithoutExtra,
          borderColor: '#000',
          backgroundColor: 'rgba(0,0,0,0.1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'With Extra Repayments',
          data: balancesWithExtra,
          borderColor: '#555',
          backgroundColor: 'rgba(120,120,120,0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm, extraRepayments]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: true, text: 'Loan Balance Over Time', color: '#000' },
      legend: { labels: { color: '#000' } },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (ctx) =>
            `${ctx.dataset.label}: ₹${ctx.parsed.y.toFixed(2)}`
        }
      }
    },
    scales: {
      x: { ticks: { color: '#000' }, title: { display: true, text: 'Months', color: '#000' } },
      y: { ticks: { color: '#000' }, title: { display: true, text: 'Balance (₹)', color: '#000' }, beginAtZero: true }
    }
  };

  // UI
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Loan Calculator (with Extra Repayments)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT : INPUTS */}
          <div className="bg-white rounded-xl shadow p-8 border border-gray-200">

            <h2 className="text-xl font-semibold text-black mb-6 border-b pb-3">
              Loan Details
            </h2>

            {/* Loan Amount */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(parseFloat(e.target.value) || 0)
                }
                className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none"
              />
            </div>

            {/* Interest */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(parseFloat(e.target.value) || 0)
                }
                className="w-full px-4 py-3 border border-gray-400 rounded"
              />
            </div>

            {/* Term */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                Loan Term (Years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) =>
                  setLoanTerm(parseInt(e.target.value) || 1)
                }
                className="w-full px-4 py-3 border border-gray-400 rounded"
              />
            </div>

            {/* Extra Repayments */}
            <h2 className="text-xl font-semibold text-black mb-6 border-b pb-3">
              Extra Repayments
            </h2>

            <div className="mb-4">
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Extra Amount"
                  value={extraAmount}
                  onChange={(e) => setExtraAmount(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded"
                />
                <select
                  value={extraStartMonth}
                  onChange={(e) => setExtraStartMonth(e.target.value)}
                  className="px-4 py-3 border border-gray-400 rounded"
                >
                  <option value="0">Month 1</option>
                  <option value="12">Year 2</option>
                  <option value="24">Year 3</option>
                  <option value="36">Year 4</option>
                  <option value="48">Year 5</option>
                </select>

                <button
                  onClick={addExtraRepayment}
                  className="px-6 py-3 bg-black text-white rounded"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Extra List */}
            <div className="border border-gray-300 rounded p-4">
              {extraRepayments.length === 0 ? (
                <div className="text-gray-500 text-center">
                  No extra repayments added
                </div>
              ) : (
                extraRepayments.map((r) => (
                  <div
                    key={r.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded mb-2 border border-gray-300"
                  >
                    <span className="text-gray-700">
                      ₹{r.amount.toLocaleString()} from Month {r.startMonth + 1}
                    </span>
                    <button
                      onClick={() => removeExtraRepayment(r.id)}
                      className="text-black hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={calculateLoan}
                className="w-full py-3 bg-black text-white rounded"
              >
                CALCULATE
              </button>
              <button
                onClick={resetCalculator}
                className="w-full py-3 bg-gray-700 text-white rounded"
              >
                RESET
              </button>
            </div>

          </div>

          {/* RIGHT : RESULTS */}
          <div className="bg-white rounded-xl shadow p-8 border border-gray-200">

            <h2 className="text-xl font-semibold text-black mb-6 border-b pb-3">
              Results
            </h2>

            {/* GRID OF RESULTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

              <div className="bg-gray-50 p-5 rounded border border-gray-300 text-center">
                <div className="text-gray-600">Monthly EMI</div>
                <div className="text-2xl font-bold text-black mt-2">
                  ₹{results.monthlyRepayment.toFixed(2)}
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded border border-gray-300 text-center">
                <div className="text-gray-600">Principal</div>
                <div className="text-2xl font-bold text-black mt-2">
                  ₹{results.principalPaid.toFixed(2)}
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded border border-gray-300 text-center">
                <div className="text-gray-600">Interest Paid</div>
                <div className="text-2xl font-bold text-black mt-2">
                  ₹{results.interestPaid.toFixed(2)}
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded border border-gray-300 text-center">
                <div className="text-gray-600">Extra Payments</div>
                <div className="text-2xl font-bold text-black mt-2">
                  ₹{results.extraRepaymentsTotal.toFixed(2)}
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded border border-gray-300 text-center md:col-span-2">
                <div className="text-gray-600">Total Repayments</div>
                <div className="text-2xl font-bold text-black mt-2">
                  ₹{results.totalRepayments.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-8 text-center">
              <h3 className="text-xl font-semibold text-black mb-3">
                Savings
              </h3>
              <div className="text-gray-600">Loan Term Reduced</div>
              <div className="text-3xl font-bold text-black my-2">
                {results.termReduced}
              </div>
              <div className="text-gray-600">Interest Saved</div>
              <div className="text-3xl font-bold text-black my-2">
                ₹{results.interestReduced.toFixed(2)}
              </div>
            </div>

            {/* CHART */}
            <div className="h-80">
              {chartData && <Line data={chartData} options={chartOptions} />}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoanExtraRepayorg;
