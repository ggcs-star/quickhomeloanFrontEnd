import React, { useState } from 'react';
import CalculatorHeader from '../../../../../../components/CalculatorHeader';
import LoanVsFdCalculator from './components/LoanVsFdCalculator';
import { Container } from '../../../../../../components/Layout';
import HowToUseCalculator from './components/HowToUseCalculator';
import ProTipSection from './components/ProTipSection';
import UnderstandingResultsSection from './components/UnderstandingResultsSection';
import CommonScenariosSection from './components/CommonScenariosSection.JSX';

const LoanVsFdorg = () => {
  const [formData, setFormData] = useState({
    principal: '',
    loanInterest: '',
    fdInterest: '',
    inflation: '',
    term: '',
    assetGrowth: ''
  });

  const [results, setResults] = useState({
    monthlyEmi: 0,
    totalLoanInterest: 0,
    totalLoanAmount: 0,
    fdMaturity: 0,
    totalFdInterest: 0,
    opportunityCost: 0,
    recommendation: 'Enter values to see recommendation',
    explanation: 'This calculator compares the net cost/benefit of taking a loan versus breaking your FD to make a purchase.',
    netDifference: 'Net difference will be shown here after calculation',
    recommendationClass: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateComparison = () => {
    const principal = parseFloat(formData.principal) || 0;
    const loanInterest = parseFloat(formData.loanInterest) || 0;
    const fdInterest = parseFloat(formData.fdInterest) || 0;
    const inflation = parseFloat(formData.inflation) || 0;
    const term = parseFloat(formData.term) || 0;
    const assetGrowth = parseFloat(formData.assetGrowth) || 0;

    if (principal <= 0 || term <= 0) {
      alert("Please enter valid values for Principal Amount and Term");
      return;
    }

    // Calculate loan details
    const monthlyInterestRate = loanInterest / 100 / 12;
    const numberOfPayments = term * 12;

    const emi = principal * monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const totalLoanAmount = emi * numberOfPayments;
    const totalLoanInterest = totalLoanAmount - principal;

    // Calculate FD details
    const fdMaturity = principal * Math.pow(1 + fdInterest / 100, term);
    const totalFdInterest = fdMaturity - principal;

    // Calculate asset value after growth
    const assetValue = principal * Math.pow(1 + assetGrowth / 100, term);

    // Calculate real returns considering inflation
    const realFdReturn = fdMaturity / Math.pow(1 + inflation / 100, term);
    const realAssetValue = assetValue / Math.pow(1 + inflation / 100, term);

    // Calculate opportunity cost
    const opportunityCost = fdMaturity;

    // Compare the two options
    const loanOptionNet = realAssetValue + realFdReturn - totalLoanAmount;
    const fdOptionNet = realAssetValue;

    let recommendation, explanation, netDifference, recommendationClass;

    if (loanOptionNet > fdOptionNet) {
      recommendation = "Taking a LOAN is better";
      recommendationClass = "text-black font-bold";
      netDifference = `By taking a loan, you'll be better off by approximately ₹${(loanOptionNet - fdOptionNet).toFixed(2)} in today's money`;
      explanation = "The interest earned on your FD outweighs the cost of the loan interest. Your money continues to grow in the FD while you pay off the loan.";
    } else {
      recommendation = "Breaking your FD is better";
      recommendationClass = "text-black font-bold";
      netDifference = `By breaking your FD, you'll be better off by approximately ₹${(fdOptionNet - loanOptionNet).toFixed(2)} in today's money`;
      explanation = "The cost of the loan interest is higher than the returns from your FD. You save money by avoiding loan interest payments.";
    }

    setResults({
      monthlyEmi: emi.toFixed(2),
      totalLoanInterest: totalLoanInterest.toFixed(2),
      totalLoanAmount: totalLoanAmount.toFixed(2),
      fdMaturity: fdMaturity.toFixed(2),
      totalFdInterest: totalFdInterest.toFixed(2),
      opportunityCost: opportunityCost.toFixed(2),
      recommendation,
      explanation,
      netDifference,
      recommendationClass
    });
  };

  const InfoTooltip = ({ text }) => (
    <div className="relative inline-block group ml-2">
      <div className="w-5 h-5 bg-gray-800 text-white rounded-full text-xs flex items-center justify-center cursor-help">
        i
      </div>
      <div className="absolute left-6 top-0 hidden group-hover:block bg-gray-900 text-white p-2 rounded text-sm w-56 z-10 shadow-lg">
        {text}
      </div>
    </div>
  );

  const StepContainer = ({ number, title, children }) => (
    <div className="mb-6">
      <div className="flex items-start mb-2">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
          {number}
        </div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
      <div className="ml-10">
        {children}
      </div>
    </div>
  );

  const KeyPoint = ({ children }) => (
    <div className="flex items-start mb-3">
      <div className="text-black mr-3 font-bold mt-0.5">✓</div>
      <div className="text-gray-800">{children}</div>
    </div>
  );

  const formatCurrency = (n) => {
    const num = Number(n) || 0;
    return '₹' + num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      {/* Header */}
      <CalculatorHeader
        title="Loan vs. Fixed Deposit Calculator"
        subtitle="Make an informed decision: Should you break your FD or take a loan for your next purchase? Our calculator compares both options with detailed analysis."
        description="Compare loan interest costs against fixed deposit returns to identify the financially smarter option."
      />
      <Container className="">

        <LoanVsFdCalculator />
        <HowToUseCalculator />
        <UnderstandingResultsSection />
        <CommonScenariosSection/>
        <ProTipSection />

        

      </Container>
    </div >
  );
};

export default LoanVsFdorg;
