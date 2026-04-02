import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";

// EMI Calculator
const calculateEmi = (amount, rate, years) => {
  const p = Number(amount);
  const r = Number(rate) / 12 / 100;
  const n = Number(years) * 12;

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  const interest = total - p;

  return { emi: Math.round(emi), total: Math.round(total), interest: Math.round(interest) };
};

// Slider Fill Background
const getSliderBg = (value, min, max) => {
  const percent = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, #000 ${percent}%, #E5E7EB ${percent}%)`;
};

const SalaryEmiAndOffers = () => {
  const { slug } = useParams();
  const pageData =
    homeLoanBySalary.find((item) => item.slug === slug) || homeLoanBySalary[0];

  const { emiAndOffersSection } = pageData;

  const [loanAmount, setLoanAmount] = useState(
    emiAndOffersSection.defaultValues.loanAmount
  );
  const [interestRate, setInterestRate] = useState(
    emiAndOffersSection.defaultValues.interestRate
  );
  const [tenure, setTenure] = useState(
    emiAndOffersSection.defaultValues.tenure
  );

  const [result, setResult] = useState({
    emi: 0,
    total: 0,
    interest: 0,
  });

  useEffect(() => {
    setResult(calculateEmi(loanAmount, interestRate, tenure));
  }, [loanAmount, interestRate, tenure]);

  return (
    <section id="rates">
      <Container className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">

        {/* CARD 1 - EMI Calculator */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {emiAndOffersSection.title}
            </h2>
          </div>

          <div className="p-6 md:p-8 space-y-12">
            {/* SLIDERS */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* LOAN AMOUNT */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Loan Amount (₹)
                </label>

                <input
                  type="number"
                  
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full border border-neutral-300 rounded-md py-2.5 px-3"
                />

                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-3 h-2.5 md:h-3 rounded-lg custom-range-slider"
                  style={{ background: getSliderBg(loanAmount, 100000, 10000000) }}
                />
              </div>

              {/* INTEREST RATE */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Interest Rate (% p.a.)
                </label>

                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full border border-neutral-300 rounded-md py-2.5 px-3"
                />

                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full mt-3 h-2.5 md:h-3 rounded-lg custom-range-slider"
                  style={{ background: getSliderBg(interestRate, 5, 15) }}
                />
              </div>

              {/* TENURE */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Tenure (Years)
                </label>

                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full border border-neutral-300 rounded-md py-2.5 px-3"
                />

                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full mt-3 h-2.5 md:h-3 rounded-lg custom-range-slider"
                  style={{ background: getSliderBg(tenure, 1, 30) }}
                />
              </div>
            </div>

            {/* EMI BREAKDOWN */}
            <div className="border border-neutral-300 bg-[#f4f4f4] rounded-md grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300 text-center">
              <div className="py-4">
                <p className="text-sm text-neutral-600 mb-1">Monthly EMI</p>
                <p className="text-2xl font-bold text-neutral-900">₹{result.emi.toLocaleString("en-IN")}</p>
              </div>

              <div className="py-4">
                <p className="text-sm text-neutral-600 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-neutral-900">₹{result.interest.toLocaleString("en-IN")}</p>
              </div>

              <div className="py-4">
                <p className="text-sm text-neutral-600 mb-1">Total Payable</p>
                <p className="text-2xl font-bold text-neutral-900">₹{result.total.toLocaleString("en-IN")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 - BANK OFFERS */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          <div className="p-6 border-b border-neutral-300">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-800">
              Compare Top Bank Offers
            </h3>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emiAndOffersSection.banks.map((bank, index) => (
              <div
                key={index}
                className="border border-neutral-300 rounded-md p-6 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    {bank.short}
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{bank.name}</h4>
                </div>

                <div className="space-y-2 text-sm flex-grow">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Interest Rate</span>
                    <span className="font-semibold">{bank.interestRate}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-600">Processing Fee</span>
                    <span className="font-semibold">{bank.processingFee}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-600">Max Loan</span>
                    <span className="font-semibold">{bank.maxLoan}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-600">Max Tenure</span>
                    <span className="font-semibold">{bank.tenure}</span>
                  </div>
                </div>

                <button className="mt-6 w-full border border-neutral-300 rounded-md py-2.5 font-semibold hover:bg-neutral-100">
                  Select & Calculate
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* FINAL SLIDER STYLE (MATCHING REFERENCE EXACTLY) */}
  <style>
{`
  /* Remove default track */
  .custom-range-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px; /* slim black bar */
    background: #000; /* FULL BLACK TRACK */
    border-radius: 6px;
    outline: none;
    border: none;
  }

  /* Chrome / Safari Thumb */
  .custom-range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #000;       /* BLACK THUMB */
    border-radius: 50%;
    border: none;           /* NO BORDER */
    cursor: pointer;
  }

  /* Firefox Thumb */
  .custom-range-slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #000;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }

  /* Firefox Track */
  .custom-range-slider::-moz-range-track {
    background: #000 !important;  /* FULL BLACK TRACK */
    height: 6px;
    border: none;
    border-radius: 6px;
  }

  /* Firefox Progress (left fill) */
  .custom-range-slider::-moz-range-progress {
    background: #000 !important; /* SAME BLACK */
    height: 6px;
    border-radius: 6px;
  }
`}
</style>

    </section>
  );
};

export default SalaryEmiAndOffers;
