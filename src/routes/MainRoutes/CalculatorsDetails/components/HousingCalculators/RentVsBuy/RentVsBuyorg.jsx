import React, { useState } from 'react';
import HeroSection from './components/Herosection';
import RentBuyForm from './components/RentBuyForm';
import FinancialSnapshot from './components/FinancialSnapshot';
import YearlyTable from './components/YearlyTable';
import FAQ from './components/FAQ';

const currencyFormat = (num) => num != null ? num.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }) : '—';

const calculateEMI = (principal, annualRatePercent, years) => {
  if (!principal || !annualRatePercent || !years) return 0;
  const r = annualRatePercent / 100 / 12;
  const n = years * 12;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return emi;
};

const generateYearlySeries = ({ state, emiPerMonth }) => {
  const rows = [];
  let cumRent = 0;
  let cumBuy = 0;

  const P = state.purchasePrice || 0;
  const down = state.downPayment || 0;
  const maintenanceRate = state.maintenance / 100;
  const transCostsRate = state.transactionCosts / 100;
  const oppCost = state.opportunityCost / 100;

  // One-time transaction costs on purchase year (as % of purchase price)
  const transactionCostsNominal = P * transCostsRate; // nominal

  let outstandingLoanPrincipal = Math.max(0, P - down);

  // We'll approximate buy cost each year as: EMI payments (12*emi), maintenance (maintenanceRate*P), opportunity cost (oppCost*down), transactionCosts (only year 0)
  for (let y = 1; y <= state.analysisPeriod; y++) {
    // Rent for year y
    const annualRent = state.monthlyRent * 12 * Math.pow(1 + state.annualRentIncrease / 100, y - 1);
    cumRent += annualRent;

    // Buy costs for year y
    const emiThisYear = emiPerMonth * 12; // nominal
    const maintenanceThisYear = (maintenanceRate * P);
    const oppCostThisYear = (oppCost * down);
    const transactionThisYear = (y === 1 ? transactionCostsNominal : 0);

    cumBuy += emiThisYear + maintenanceThisYear + oppCostThisYear + transactionThisYear;

    // Store cumulative values formatted
    rows.push({
      year: y,
      cumRent: currencyFormat(Math.round(cumRent)),
      cumBuy: currencyFormat(Math.round(cumBuy)),
    });
  }

  return rows;
};

const computeResults = (state) => {
  // Determine EMI: either provided or compute from purchasePrice-down, interest, tenure
  const analysisYears = state.analysisPeriod || 20;

  let emiPerMonth = state.monthlyEmi;
  if ((!emiPerMonth || emiPerMonth === 0) && state.purchasePrice && state.loanTenure && state.loanInterestRate) {
    const principal = Math.max(0, state.purchasePrice - state.downPayment);
    emiPerMonth = calculateEMI(principal, state.loanInterestRate, state.loanTenure);
  }

  // If still zero, set to 0
  emiPerMonth = emiPerMonth || 0;

  // Generate yearly table rows and cumulative totals
  const rows = generateYearlySeries({ state, emiPerMonth });

  // Totals (nominal)
  const totalRent = rows.length ? rows[rows.length - 1].cumRent : currencyFormat(0);
  const totalBuy = rows.length ? rows[rows.length - 1].cumBuy : currencyFormat(0);

  // Convert to numeric cumulative values by stripping non-digits
  const numericRent = rows.length ? Number(rows[rows.length - 1].cumRent.replace(/[^0-9.-]+/g, '')) : 0;
  const numericBuy = rows.length ? Number(rows[rows.length - 1].cumBuy.replace(/[^0-9.-]+/g, '')) : 0;

  // Property future value with appreciation
  const fv = (state.purchasePrice || 0) * Math.pow(1 + (state.propertyAppreciation || 0) / 100, analysisYears);

  // Net wealth from buying = Property FV - cumulative buy costs + tax benefits (approx)
  // Approx tax benefits: interest deduction up to maxInterestDeduction and 80C principal. This is simplified.
  let totalInterestDeduction = Math.min(state.maxInterestDeduction || 0, (state.maxInterestDeduction || 0));
  // For simplicity, assume full maxInterestDeduction is utilized yearly (approx)
  const taxRate = (state.includeTaxBenefits ? (state.incomeTaxSlab || 0) / 100 : 0);
  const taxSavings = (state.includeTaxBenefits ? ((state.maxInterestDeduction || 0) + (state.section80CBenefit || 0)) * taxRate : 0);

  // For simplicity we'll multiply taxSavings by analysisYears
  const totalTaxSavings = taxSavings * analysisYears;

  const netBuyValue = fv - numericBuy + totalTaxSavings;
  const netRentValue = 0 - numericRent; // renting produces no asset, only costs

  const netDifference = netBuyValue - netRentValue; // positive => buying better

  // Break-even: first year where cumulative buy <= cumulative rent (approx)
  let breakEvenYear = null;
  const rowsNumeric = [];
  let cumRentNum = 0;
  let cumBuyNum = 0;

  for (let y = 1; y <= analysisYears; y++) {
    cumRentNum += state.monthlyRent * 12 * Math.pow(1 + state.annualRentIncrease / 100, y - 1);
    cumBuyNum += emiPerMonth * 12 + (state.maintenance / 100) * (state.purchasePrice || 0) + (state.opportunityCost / 100) * (state.downPayment || 0) + (y === 1 ? (state.purchasePrice || 0) * (state.transactionCosts / 100) : 0);
    rowsNumeric.push({ year: y, cumRent: cumRentNum, cumBuy: cumBuyNum });
    if (breakEvenYear === null && cumBuyNum <= cumRentNum) breakEvenYear = y;
  }

  return {
    rows,
    emiPerMonth,
    totalRent: numericRent,
    totalBuy: numericBuy,
    totalRentFormatted: currencyFormat(numericRent),
    totalBuyFormatted: currencyFormat(numericBuy),
    netBuyFormatted: currencyFormat(Math.round(netBuyValue)),
    netDifference: Math.round(netDifference),
    summary: netDifference > 0 ? `Buying is projected to make you wealthier by ${currencyFormat(Math.round(netDifference))} compared to renting & investing your down payment.` : `Renting is projected to be cheaper by ${currencyFormat(Math.round(-netDifference))}.`,
    recommendation: netDifference > 0 ? 'Buy' : 'Rent',
    breakEvenYear: breakEvenYear || 'N/A',
  };
};

const initialState = {
  monthlyEmi: 30000,
  monthlyRent: 15000,
  purchasePrice: 7500000,
  downPayment: 1500000,
  loanTenure: 20,
  loanInterestRate: 8.5,
  inflationRate: 6,
  annualRentIncrease: 7,
  propertyAppreciation: 4,
  analysisPeriod: 20,
  includeTaxBenefits: true,
  maxInterestDeduction: 200000,
  section80CBenefit: 150000,
  incomeTaxSlab: 30,
  maintenance: 1,
  transactionCosts: 7,
  opportunityCost: 7,
};

const RentBuyCalculator = () => {
  const [state, setState] = useState(initialState);
  const [results, setResults] = useState({ rows: [], summary: '', recommendation: null });

  const onCalculate = () => {
    const res = computeResults(state);
    setResults(res);
  };

  return (
    <main className="max-w-4xl mx-auto py-8">
      <HeroSection />

      <RentBuyForm state={state} setState={setState} onCalculate={onCalculate} />

      <div className="mt-10 pt-8">
        <FinancialSnapshot results={results} />
      </div>

      <div className="mt-8">
        <YearlyTable rows={results.rows || []} />
      </div>

      <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use — Step-by-Step</h2>
        <div className="text-gray-600 space-y-3 leading-relaxed">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Enter your basic numbers:</strong> Input your Monthly EMI (or purchase price + loan details) and current rent.</li>
            <li><strong>Set assumptions:</strong> Adjust inflation, annual rent escalation, property appreciation, and the analysis period.</li>
            <li><strong>Add tax & costs:</strong> Tick tax benefits if you are eligible and add maintenance/transaction costs if relevant.</li>
            <li><strong>Click Calculate:</strong> Review the numeric results, year-by-year table, and snapshot.</li>
            <li><strong>Run sensitivity tests:</strong> Change rent increase, inflation, or appreciation to see how the recommendation changes.</li>
          </ol>
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example Scenarios</h2>
        <div className="text-gray-600 space-y-3 leading-relaxed">
          <p><strong>Example 1 — Rent is much lower than EMI:</strong> With an EMI of ₹30,000, rent at ₹12,000, and a 5% annual rent increase, renting often stays cheaper for a long time unless property appreciation is very high.</p>
          <p><strong>Example 2 — Rent nearly equals EMI:</strong> If the EMI is ₹28,000 and rent is ₹25,000 with a 7% increase, buying typically becomes favorable in 6–8 years, especially with modest property appreciation and tax benefits.</p>
          <p><strong>Example 3 — Short-term stay:</strong> If you plan to stay for less than 5 years, renting is usually better because transaction costs and early interest make buying expensive upfront.</p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding the Results</h2>
        <div className="text-gray-600 space-y-3 leading-relaxed">
          <p><strong>“Buy” recommended:</strong> Buying creates more net wealth or lower real cost over the analysis period, after accounting for all costs and appreciation. Check the break-even year and sensitivity.</p>
          <p><strong>“Rent” recommended:</strong> Renting is cheaper or less risky given your inputs. Consider other non-financial factors (mobility, uncertainty).</p>
          <p><strong>Close call:</strong> If the difference is small (&lt;5% of net housing cost), the outcome can flip with small market changes. Run sensitivity scenarios.</p>
        </div>
      </div>

      <div className="mt-12">
        <FAQ />
      </div>

    </main>
  );
};

export default RentBuyCalculator;
