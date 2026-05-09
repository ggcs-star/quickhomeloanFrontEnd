// import React from "react";
// import LoanVsFd from "./LoanCalculators/LoanVsFd";
// import { useParams } from "react-router-dom";
// import LoanInterestVsFd from "./LoanCalculators/LoanInterestVsFd";
// import LoanInterestVsEmiSwapInterest from "./LoanCalculators/LoanInterestVsEmiSwpInterest";
// import EmiprepaymentVsInvest from "./LoanCalculators/EmiPrepaymentVsInvest(FD";
// import TimeOfValue from "./LoanCalculators/TimeValueOfEmi";
// import LoanBasic from "./LoanCalculators/LoanBasic";
// import LoanAdvance from "./LoanCalculators/LoanAdvance";
// import Emi_Vs_Rent from "./LoanCalculators/EmiVsRent";
// import Debt_Avalanche_Vs_Debt_Snowball from "./LoanCalculators/DebtAvalancheVsDebtSnowball";
// import SIP_Investment_Plan from "./InvestmentCalculators/SIP_Investment_Plan";
// import SWP_Withdrawal_Plan from "./InvestmentCalculators/SWP_Withdrawal_Plan";
// import Your_Time_Value from "./InvestmentCalculators/Your_Time_Value";
// import Future_Value_Item from "./InvestmentCalculators/Future_Value_Item";
// import Future_Value_Bank_balance from "./InvestmentCalculators/Future_Value_Bank_balance";
// import Real_Return_After_Tax from "./InvestmentCalculators/Real_Return_After_Tax";
// import Cost_of_Delay from "./InvestmentCalculators/Cost_of_Delay";
// import Chit_Fund_Mutual_Fund from "./InvestmentCalculators/Chit_Fund_&_Mutual_Fund";
// import Tax_Saving_Vs_investment_Returns from "./InvestmentCalculators/Tax_Saving_Vs_investment_Returns";
// import Dividend_Vs_Growth_Investment from "./InvestmentCalculators/Dividend_Vs_Growth_Investment";
// import Compound_Interest from "./InvestmentCalculators/Compound_Interest";
// import Simple_Interest_Calculator from "./InvestmentCalculators/Simple_Interest_Calculator";
// import Monthly_Income_scheme from "./InvestmentCalculators/Monthly_Income_scheme";
// import Senior_Citizen_Savings_Scheme from "./InvestmentCalculators/Senior_Citizen_Savings_Scheme";
// import Gratuity_Calculator from "./InvestmentCalculators/Gratuity_Calculator";
// import Currency_Depreciation_Investment from "./InvestmentCalculators/Currency_Depreciation_Investment";
// import Relocation_Opportunity_Calculator from "./Housing&Relocation/Relocation_Opportunity_Calculator";
// import LIC_Net_Interest_Rate from "./Insurance&PolicyCalculators/LIC_Net_Interest_Rate";
// import Any_Insurance_Policy_Evaluation from "./Insurance&PolicyCalculators/Any_Insurance_Policy_Evaluation";
// import Car_lease_Vs_buy from "./VehicleCalculators/Car_lease_Vs_buy";
// import Any_Two_Car_Comparison from "./VehicleCalculators/Any_Two_Car_Comparison";
// import Transpaort_Mode from "./VehicleCalculators/Transpaort_Mode";
// import Fuel_Cost_Calculator from "./VehicleCalculators/Fuel_Cost_Calculator";
// import Child_Education_Goal_Planner from "./RetirementLifecycle/Child_Education_Goal_Planner";
// import Marriage_Expenses_Calculator from "./RetirementLifecycle/Marriage_Expenses_Calculator";
// import Career_break_Impact_Calc from "./RetirementLifecycle/Career_break_Impact_Calc";
// import Retirement_Calc from "./RetirementLifecycle/Retirement_Calc";
// import Dual_Vs_Single_Income from "./RetirementLifecycle/Dual_Vs_Single_Income";
// import Monthly_Budget_Planner from "./RetirementLifecycle/Monthly_Budget_Planner";
// import DIY_Vs_Outsourcing_Calculator from "./RetirementLifecycle/DIY_Vs_Outsourcing_Calculator";
// import Price_Per_Use_Calc from "./RetirementLifecycle/Price_Per_Use_Calc";
// import Fire_Calc from "./RetirementLifecycle/Fire_Calc";
// import Social_Media from "./ExperimentalCalculators/Social_Media";
// import Work_From_Home from "./ExperimentalCalculators/Work_From_Home";
// import Job_Switch_Impact from "./ExperimentalCalculators/Job_Switch_Impact";
// import Lifecycle_Health_ROI from "./ExperimentalCalculators/Lifecycle_Health_ROI";
// import Higher_Education from "./ExperimentalCalculators/Higher_Education";

// export default function CalculatorPage() {
//     const { slug } = useParams();

//     switch (slug){

//         // Loan Calculators Sub-Section
//         case "loan-vs-fd": return <LoanVsFd />
//         case "loan-interest-vs-fd-interest" : return <LoanInterestVsFd />
//         case "loan-interest-vs-emi-swp" : return <LoanInterestVsEmiSwapInterest />
//         case "emi-prepayment-vs-invest" : return <EmiprepaymentVsInvest />
//         case "time-value-of-emi" : return <TimeOfValue />
//         case "loan-basic" : return <LoanBasic />
//         case "loan-advance" : return <LoanAdvance />
//         case "emi-vs-rent" : return <Emi_Vs_Rent />
//         case "debt-avalanche-vs-snowball" : return <Debt_Avalanche_Vs_Debt_Snowball />

//         // Investment Calculator Sub-Section
//         case "sip-systematic-investment-plan" : return <SIP_Investment_Plan />
//         case "swp-systematic-withdrawal-plan" : return <SWP_Withdrawal_Plan />
//         case "your-time-value-per-hour" : return <Your_Time_Value />
//         case "future-value-of-an-item" : return <Future_Value_Item />
//         case "future-value-of-bank-balance" : return <Future_Value_Bank_balance />
//         case "real-returns-after-tax" : return <Real_Return_After_Tax />
//         case "cost-of-delay-investment" : return <Cost_of_Delay />
//         case "chit-fund-vs-mutual-fund" : return <Chit_Fund_Mutual_Fund />
//         case "tax-savings-vs-investment-returns" : return <Tax_Saving_Vs_investment_Returns />
//         case "dividend-vs-growth-investment" : return <Dividend_Vs_Growth_Investment />
//         case "compound-interest" : return <Compound_Interest />
//         case "simple-interest-calculator" : return <Simple_Interest_Calculator />
//         case "monthly-income-scheme" : return <Monthly_Income_scheme />
//         case "senior-citizen-savings-scheme" : return <Senior_Citizen_Savings_Scheme />
//         case "gratuity-calculator" : return <Gratuity_Calculator />
//         case "currency-depreciation-investment" : return <Currency_Depreciation_Investment />


//         // Housing & Relocation Sub-Section
//         case "relocation-opportunity-calculator" : return <Relocation_Opportunity_Calculator />

//         // Insurance & Policy Calculators
//         case "lic-policy-net-interest-rate" : return <LIC_Net_Interest_Rate />
//         case "any-insurance-policy-evaluation" : return <Any_Insurance_Policy_Evaluation />


//         // Vehicle Calculators Sub-section
//         case "car-lease-vs-buy" : return <Car_lease_Vs_buy />
//         case "any-two-car-comparison" : return <Any_Two_Car_Comparison />
//         case "transport-mode-cost-savings" : return <Transpaort_Mode />
//         case "fuel-cost-calculator" : return <Fuel_Cost_Calculator />

//         // Retirement & Lifecycle Sub-section
//         case "child-education-goal-planner" : return <Child_Education_Goal_Planner />
//         case "marriage-expenses-calculator" : return <Marriage_Expenses_Calculator />
//         case "career-break-impact-calculator" : return <Career_break_Impact_Calc />
//         case "retirement-calculator" : return <Retirement_Calc />
//         case "dual-income-vs-single-income" : return <Dual_Vs_Single_Income />
//         case "monthly-budget-planner" : return <Monthly_Budget_Planner />
//         case "diy-vs-outsourcing-calculator" : return <DIY_Vs_Outsourcing_Calculator />
//         case "price-per-use-calculator" : return <Price_Per_Use_Calc />
//         case "fire-calculator" : return <Fire_Calc />


//         // Experimental Calculators Sub-Section
//         case "social-media-time-waste" : return <Social_Media />
//         case "work-from-home" : return <Work_From_Home />
//         case "job-switch-impact" : return <Job_Switch_Impact />
//         case "higher-education-degree-roi" : return <Higher_Education />
//         case "lifestyle-health-roi" : return <Lifecycle_Health_ROI />

//         default: return <h2 className="text-center text-red-500 mt-10">Calculator not focund</h2>
//     }
// }


import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

// Loan Calculators
// import LoanInterestVsFdInterest from "./components/LoanCalculators/LoanInterestVsFdInterest/LoanInterestVsFdInterest";
import LoanInterestSWP from "./components/LoanCalculators/LoanInterestSWP/LoanInterestSWP";
import TimeValue from "./components/LoanCalculators/TimeValue/TimeValue";
// import BasicLoan from "./components/LoanCalculators/BasicLoan/BasicLoan";
import AdvanceLoan from "./components/LoanCalculators/AdvanceLoan/AdvanceLoan";
// import SIPInvestment from "./components/InvestmentCalculators/SIPInvestment/SIPInvestment";
import SWPWithdrawal from "./components/InvestmentCalculators/SWPWithdrawal/SWPWithdrawal";
// import SWPCalculator from "./components/InvestmentCalculators/SWPCalculator/index";
import SIPCalculator from "./components/InvestmentCalculators/SIPCalculator/index";
import LoanVsFdVsSiporg from "./components/LoanCalculators/LoanVsFdVsSip/LoanVsFdVsSiporg";
import EMIVsRentorg from "./components/LoanCalculators/EMIVsRent/EMIVsRentorg";
import MutualFundLoanorg from "./components/LoanCalculators/MutualFundLoan/MutualFundLoanorg";
import LoanExtraRepayorg from "./components/LoanCalculators/LoanExtraRepay/LoanExtraRepayorg";
import LoanVsFdorg from "./components/LoanCalculators/LoanVsFd/LoanVsFdorg";
import DebtAvalancheorg from "./components/LoanCalculators/DebtAvalanche/DebtAvalancheorg";
import EMILoanFinderorg from "./components/LoanCalculators/EMILoanFinder/EMILoanFinderorg";
import SIPInvestmentorg from "./components/InvestmentCalculators/SIPInvestment/SIPInvestmentorg";
import SWPCalculatororg from "./components/InvestmentCalculators/SWPCalculator/Calculator";
import LoanInterestVsSWPInterestorg from "./components/LoanCalculators/LoanInterestVsSWPInterest/LoanInterestVsSWPInterestorg";
import LoanExtraRepayments from "../CalculatorDetails/components/LoanCalculators/LoanExtraRepayments";
import StampDuty from "../CalculatorDetails/components/LoanCalculators/StampDuty";
import UnderConstruction from "./components/HousingCalculators/UnderConstruction";
import PropertyInvestments from "./components/InvestmentCalculators/PropertyInvestments";
import TaxSavingVsInvestmentReturns from "./components/InvestmentCalculators/TaxSavingVsInvestmentReturns";
import HomeLoanPrepay from "./components/LoanCalculators/HomeLoanPrepay";
import RentVsBuy from "./components/HousingCalculators/RentVsBuy";
import RealReturns from "./components/InvestmentCalculators/RealReturn";
import HomeLoanEligibility from "./components/LoanCalculators/HomeLoanEligibility";
import BasicLoan from "./components/LoanCalculators/BasicLoan";
import EMIInterestRate from "../CalculatorDetails/components/LoanCalculators/EMIInterestRate";
import LoanTenure from "./components/LoanCalculators/LoanTenure";
import LoanInterestVsFdInterest from "./components/LoanCalculators/LoanInterestVsFdInterest/LoanInterestVsFdInterest";
// import TimeOfValue from "./components/LoanCalculators/TimeValueOfEmi";
// import LoanBasic from "./components/LoanCalculators/LoanBasic";
// import LoanAdvance from "./components/LoanCalculators/LoanAdvance";
// import Emi_Vs_Rent from "./components/LoanCalculators/EmiVsRent";
// import Debt_Avalanche_Vs_Debt_Snowball from "./components/LoanCalculators/DebtAvalancheVsDebtSnowball";

// Investment Calculators
// import SIP_Investment_Plan from "./components/InvestmentCalculators/SIP_Investment_Plan";
// import SWP_Withdrawal_Plan from "./components/InvestmentCalculators/SWP_Withdrawal_Plan";
// import Your_Time_Value from "./components/InvestmentCalculators/Your_Time_Value";
// import Future_Value_Item from "./components/InvestmentCalculators/Future_Value_Item";
// import Future_Value_Bank_balance from "./components/InvestmentCalculators/Future_Value_Bank_balance";
// import Real_Return_After_Tax from "./components/InvestmentCalculators/Real_Return_After_Tax";
// import Cost_of_Delay from "./components/InvestmentCalculators/Cost_of_Delay";
// import Chit_Fund_Mutual_Fund from "./components/InvestmentCalculators/Chit_Fund_&_Mutual_Fund";
// import Tax_Saving_Vs_investment_Returns from "./components/InvestmentCalculators/Tax_Saving_Vs_investment_Returns";
// import Dividend_Vs_Growth_Investment from "./components/InvestmentCalculators/Dividend_Vs_Growth_Investment";
// import Compound_Interest from "./components/InvestmentCalculators/Compound_Interest";
// import Simple_Interest_Calculator from "./components/InvestmentCalculators/Simple_Interest_Calculator";
// import Monthly_Income_scheme from "./components/InvestmentCalculators/Monthly_Income_scheme";
// import Senior_Citizen_Savings_Scheme from "./components/InvestmentCalculators/Senior_Citizen_Savings_Scheme";
// import Gratuity_Calculator from "./components/InvestmentCalculators/Gratuity_Calculator";
// import Currency_Depreciation_Investment from "./components/InvestmentCalculators/Currency_Depreciation_Investment";

// Housing & Relocation
// import Relocation_Opportunity_Calculator from "./components/Housing&Relocation/Relocation_Opportunity_Calculator";

// Insurance & Policy
// import LIC_Net_Interest_Rate from "./components/Insurance&PolicyCalculators/LIC_Net_Interest_Rate";
// import Any_Insurance_Policy_Evaluation from "./components/Insurance&PolicyCalculators/Any_Insurance_Policy_Evaluation";

// Vehicle
// import Car_lease_Vs_buy from "./components/VehicleCalculators/Car_lease_Vs_buy";
// import Any_Two_Car_Comparison from "./components/VehicleCalculators/Any_Two_Car_Comparison";
// import Transpaort_Mode from "./components/VehicleCalculators/Transpaort_Mode";
// import Fuel_Cost_Calculator from "./components/VehicleCalculators/Fuel_Cost_Calculator";

// Retirement & Lifecycle
// import Child_Education_Goal_Planner from "./components/RetirementLifecycle/Child_Education_Goal_Planner";
// import Marriage_Expenses_Calculator from "./components/RetirementLifecycle/Marriage_Expenses_Calculator";
// import Career_break_Impact_Calc from "./components/RetirementLifecycle/Career_break_Impact_Calc";
// import Retirement_Calc from "./components/RetirementLifecycle/Retirement_Calc";
// import Dual_Vs_Single_Income from "./components/RetirementLifecycle/Dual_Vs_Single_Income";
// import Monthly_Budget_Planner from "./components/RetirementLifecycle/Monthly_Budget_Planner";
// import DIY_Vs_Outsourcing_Calculator from "./components/RetirementLifecycle/DIY_Vs_Outsourcing_Calculator";
// import Price_Per_Use_Calc from "./components/RetirementLifecycle/Price_Per_Use_Calc";
// import Fire_Calc from "./components/RetirementLifecycle/Fire_Calc";

// Experimental
// import Social_Media from "./components/ExperimentalCalculators/Social_Media";
// import Work_From_Home from "./components/ExperimentalCalculators/Work_From_Home";
// import Job_Switch_Impact from "./components/ExperimentalCalculators/Job_Switch_Impact";
// import Lifecycle_Health_ROI from "./components/ExperimentalCalculators/Lifecycle_Health_ROI";
// import Higher_Education from "./components/ExperimentalCalculators/Higher_Education";

// SEO Metadata for each calculator
const calculatorSEOData = {
  // Loan Calculators
  "loan-vs-fd": {
    title: "Loan vs Fixed Deposit Calculator | Compare Returns & Interest Rates",
    description: "Compare loan interest payments against fixed deposit returns. Make informed decisions on whether to take a loan or invest in FD.",
    keywords: "loan vs fd, fixed deposit calculator, loan interest comparison, investment returns",
    ogImage: "/images/loan-vs-fd-og.jpg",
  },
  "loan-interest-vs-fd-interest": {
    title: "Loan Interest vs FD Interest Calculator | Compare Interest Rates",
    description: "Compare loan interest rates with fixed deposit returns. Calculate which option gives you better financial benefits.",
    keywords: "loan interest, fd interest, interest rate comparison, financial planning",
    ogImage: "/images/loan-interest-vs-fd-og.jpg",
  },
  "loan-interest-vs-swp-interest": {
    title: "Loan Interest vs SWP Interest Calculator | SWP vs Loan Comparison",
    description: "Compare loan interest payments with Systematic Withdrawal Plan returns. Optimize your financial strategy.",
    keywords: "loan interest, SWP calculator, systematic withdrawal plan, investment comparison",
    ogImage: "/images/loan-interest-vs-swp-og.jpg",
  },
  "loan-vs-fd-mf-sip": {
    title: "Loan vs FD vs MF SIP Calculator | Best Investment Option",
    description: "Compare loans, fixed deposits, and mutual fund SIPs. Find the best financial strategy for your money.",
    keywords: "loan vs fd vs sip, mutual fund calculator, investment comparison, SIP returns",
    ogImage: "/images/loan-vs-fd-vs-sip-og.jpg",
  },
  "loan-basic": {
    title: "Basic Loan Calculator | EMI, Interest & Tenure Calculator",
    description: "Calculate your loan EMI, total interest payable, and loan tenure with our easy-to-use basic loan calculator.",
    keywords: "basic loan calculator, EMI calculator, loan interest calculator, monthly payment",
    ogImage: "/images/basic-loan-og.jpg",
  },
  "emi-interest-loan-finder": {
    title: "EMI & Interest Loan Finder | Best Loan Options Calculator",
    description: "Find the best loan options based on your EMI and interest rate preferences. Compare different loan scenarios.",
    keywords: "emi finder, loan finder, interest calculator, best loan options",
    ogImage: "/images/emi-loan-finder-og.jpg",
  },
  "emi-vs-rent": {
    title: "EMI vs Rent Calculator | Buy vs Rent Property Decision Tool",
    description: "Compare monthly EMI payments with rent expenses. Decide whether buying a property or renting is better for you.",
    keywords: "emi vs rent, buy vs rent calculator, home loan EMI, rental property comparison",
    ogImage: "/images/emi-vs-rent-og.jpg",
  },
  "loan-tenure": {
    title: "Loan Tenure Calculator | Optimize Your Loan Duration",
    description: "Calculate optimal loan tenure based on your EMI capacity and interest rates. Minimize total interest payout.",
    keywords: "loan tenure calculator, loan duration, EMI planning, loan optimization",
    ogImage: "/images/loan-tenure-og.jpg",
  },
  "mutual-fund-loan-vs-swp": {
    title: "Mutual Fund Loan vs SWP Calculator | Smart Investment Strategy",
    description: "Compare taking a loan against mutual funds versus Systematic Withdrawal Plan. Optimize your investment strategy.",
    keywords: "mutual fund loan, SWP calculator, investment strategy, fund withdrawal",
    ogImage: "/images/mf-loan-vs-swp-og.jpg",
  },
  "loan-extra-repayment": {
    title: "Loan Extra Repayment Calculator | Save Interest & Reduce Tenure",
    description: "Calculate how extra repayments can reduce your loan tenure and save interest. Plan your loan prepayment strategy.",
    keywords: "loan extra repayment, prepayment calculator, save loan interest, reduce loan tenure",
    ogImage: "/images/loan-extra-repayment-og.jpg",
  },
  "debt-avalanche-vs-snowball": {
    title: "Debt Avalanche vs Snowball Calculator | Best Debt Repayment Strategy",
    description: "Compare debt avalanche and debt snowball methods. Find the fastest and most cost-effective way to pay off debt.",
    keywords: "debt avalanche, debt snowball, debt repayment calculator, pay off debt",
    ogImage: "/images/debt-avalanche-snowball-og.jpg",
  },
  "home-loan-eligibility": {
    title: "Home Loan Eligibility Calculator | Check Your Loan Qualification",
    description: "Calculate your home loan eligibility based on income, expenses, and existing obligations. Know how much loan you can get.",
    keywords: "home loan eligibility, loan qualification, home loan calculator, maximum loan amount",
    ogImage: "/images/home-loan-eligibility-og.jpg",
  },
  "home-loan-prepay": {
    title: "Home Loan Prepayment Calculator | Save Interest on Your Home Loan",
    description: "Calculate savings from home loan prepayment. Plan partial or full prepayment to reduce interest burden.",
    keywords: "home loan prepayment, prepayment calculator, save home loan interest, loan closure",
    ogImage: "/images/home-loan-prepay-og.jpg",
  },
  "loan-extra-repayments": {
    title: "Loan Extra Repayments Calculator | Advanced Loan Planning Tool",
    description: "Advanced calculator for planning extra loan repayments. Optimize your loan repayment strategy.",
    keywords: "extra repayments, loan planning, advance loan calculator, repayment strategy",
    ogImage: "/images/loan-extra-repayments-og.jpg",
  },
  "stamp-duty": {
    title: "Stamp Duty Calculator | Property Registration Charges",
    description: "Calculate stamp duty and property registration charges for your property purchase. Plan your home buying budget.",
    keywords: "stamp duty calculator, property registration, home buying cost, stamp duty charges",
    ogImage: "/images/stamp-duty-og.jpg",
  },
  
  // Investment Calculators
  "sip-systematic-investment-plan": {
    title: "SIP Calculator | Systematic Investment Plan Returns Calculator",
    description: "Calculate returns on your mutual fund SIP investments. Plan your wealth creation journey with our SIP calculator.",
    keywords: "SIP calculator, mutual fund returns, systematic investment plan, wealth creation",
    ogImage: "/images/sip-calculator-og.jpg",
  },
  "swp-systematic-withdrawal-plan": {
    title: "SWP Calculator | Systematic Withdrawal Plan Returns Calculator",
    description: "Calculate regular income from your mutual fund investments through Systematic Withdrawal Plan. Plan your retirement income.",
    keywords: "SWP calculator, systematic withdrawal plan, retirement income, mutual fund withdrawal",
    ogImage: "/images/swp-calculator-og.jpg",
  },
  "property-investment": {
    title: "Property Investment Calculator | Real Estate ROI Calculator",
    description: "Calculate returns on property investments. Evaluate rental yield, capital appreciation, and overall ROI.",
    keywords: "property investment, real estate calculator, ROI calculator, rental yield",
    ogImage: "/images/property-investment-og.jpg",
  },
  "real-returns-after-tax": {
    title: "Real Returns After Tax Calculator | Post-Tax Investment Returns",
    description: "Calculate your real investment returns after accounting for taxes and inflation. Make informed investment decisions.",
    keywords: "real returns, after tax returns, inflation adjusted returns, investment calculator",
    ogImage: "/images/real-returns-og.jpg",
  },
  "tax-savings-vs-investment-returns": {
    title: "Tax Savings vs Investment Returns Calculator | Optimize Your Finances",
    description: "Compare tax-saving investments with regular investment returns. Find the balance between tax efficiency and returns.",
    keywords: "tax savings, investment returns, tax planning calculator, tax efficient investing",
    ogImage: "/images/tax-savings-vs-returns-og.jpg",
  },
  "emi-interest-rate-finder": {
    title: "EMI Interest Rate Finder | Best Interest Rates for Your Loan",
    description: "Find the best interest rates for your loan based on EMI amount and tenure. Compare different rate scenarios.",
    keywords: "interest rate finder, EMI calculator, best loan rates, rate comparison",
    ogImage: "/images/emi-interest-rate-og.jpg",
  },

  // Housing Calculators
  "under-construction": {
    title: "Under Construction Property Calculator | Home Buying Guide",
    description: "Calculate costs and returns for under construction properties. Plan your investment in upcoming real estate projects.",
    keywords: "under construction property, real estate investment, property calculator, home buying",
    ogImage: "/images/under-construction-og.jpg",
  },
  "rent-vs-buy": {
    title: "Rent vs Buy Calculator | Should You Rent or Buy a Home?",
    description: "Compare renting vs buying a home. Make informed decision based on your financial situation and market conditions.",
    keywords: "rent vs buy, home buying decision, renting calculator, property purchase",
    ogImage: "/images/rent-vs-buy-og.jpg",
  },
};

// Helper function to format calculator name for title
const formatCalculatorName = (slug) => {
  const nameMap = {
    "loan-vs-fd": "Loan vs FD",
    "loan-interest-vs-fd-interest": "Loan Interest vs FD Interest",
    "loan-interest-vs-swp-interest": "Loan Interest vs SWP Interest",
    "loan-vs-fd-mf-sip": "Loan vs FD vs MF SIP",
    "loan-basic": "Basic Loan",
    "emi-interest-loan-finder": "EMI & Interest Loan Finder",
    "emi-vs-rent": "EMI vs Rent",
    "loan-tenure": "Loan Tenure",
    "mutual-fund-loan-vs-swp": "Mutual Fund Loan vs SWP",
    "loan-extra-repayment": "Loan Extra Repayment",
    "debt-avalanche-vs-snowball": "Debt Avalanche vs Snowball",
    "home-loan-eligibility": "Home Loan Eligibility",
    "home-loan-prepay": "Home Loan Prepayment",
    "loan-extra-repayments": "Loan Extra Repayments",
    "stamp-duty": "Stamp Duty",
    "sip-systematic-investment-plan": "SIP Calculator",
    "swp-systematic-withdrawal-plan": "SWP Calculator",
    "property-investment": "Property Investment",
    "real-returns-after-tax": "Real Returns After Tax",
    "tax-savings-vs-investment-returns": "Tax Savings vs Investment Returns",
    "emi-interest-rate-finder": "EMI Interest Rate Finder",
    "under-construction": "Under Construction Property",
    "rent-vs-buy": "Rent vs Buy",
  };
  return nameMap[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
};

const calculatorMap = {
  // Loan Calculators
  "loan-vs-fd": LoanVsFdorg,
  "loan-interest-vs-fd-interest": LoanInterestVsFdInterest,
  "loan-interest-vs-swp-interest": LoanInterestVsSWPInterestorg,
  // "loan-interest-vs-emi-swp": LoanInterestSWP,
  // "emi-prepayment-vs-invest": HomeLoanPrepay,
  "loan-vs-fd-mf-sip": LoanVsFdVsSiporg,
  // "time-value-of-emi": TimeValue,
  "loan-basic": BasicLoan,
  // "loan-advance": AdvanceLoan,
  "emi-interest-loan-finder": EMILoanFinderorg,
  "emi-vs-rent": EMIVsRentorg,
  "loan-tenure": LoanTenure,
  "mutual-fund-loan-vs-swp": MutualFundLoanorg,
  "loan-extra-repayment": LoanExtraRepayorg,
  "debt-avalanche-vs-snowball": DebtAvalancheorg,
  "home-loan-eligibility": HomeLoanEligibility,
  "home-loan-prepay": HomeLoanPrepay,
  "loan-extra-repayments": LoanExtraRepayments,
  "stamp-duty": StampDuty,
  // Investment
  "sip-systematic-investment-plan": SIPInvestmentorg,
  // "swp-systematic-withdrawal-plan": SWPWithdrawal,
  "swp-systematic-withdrawal-plan": SWPCalculatororg,
  // "sip-calculator": SIPCalculator,
  'property-investment': PropertyInvestments,
  // "your-time-value-per-hour": Your_Time_Value,
  // "future-value-of-an-item": Future_Value_Item,
  // "future-value-of-bank-balance": Future_Value_Bank_balance,
  "real-returns-after-tax": RealReturns,
  // "cost-of-delay-investment": Cost_of_Delay,
  // "chit-fund-vs-mutual-fund": Chit_Fund_Mutual_Fund,
  "tax-savings-vs-investment-returns": TaxSavingVsInvestmentReturns,
  "emi-interest-rate-finder": EMIInterestRate,
  // "dividend-vs-growth-investment": Dividend_Vs_Growth_Investment,
  // "compound-interest": Compound_Interest,
  // "simple-interest-calculator": Simple_Interest_Calculator,
  // "monthly-income-scheme": Monthly_Income_scheme,
  // "senior-citizen-savings-scheme": Senior_Citizen_Savings_Scheme,
  // "gratuity-calculator": Gratuity_Calculator,
  // "currency-depreciation-investment": Currency_Depreciation_Investment,

  // Housing & Relocation
  // "relocation-opportunity-calculator": Relocation_Opportunity_Calculator,
  'under-construction': UnderConstruction,
  'rent-vs-buy': RentVsBuy,

  // Insurance & Policy
  // "lic-policy-net-interest-rate": LIC_Net_Interest_Rate,
  // "any-insurance-policy-evaluation": Any_Insurance_Policy_Evaluation,

  // Vehicle
  // "car-lease-vs-buy": Car_lease_Vs_buy,
  // "any-two-car-comparison": Any_Two_Car_Comparison,
  // "transport-mode-cost-savings": Transpaort_Mode,
  // "fuel-cost-calculator": Fuel_Cost_Calculator,

  // Retirement & Lifecycle
  // "child-education-goal-planner": Child_Education_Goal_Planner,
  // "marriage-expenses-calculator": Marriage_Expenses_Calculator,
  // "career-break-impact-calculator": Career_break_Impact_Calc,
  // "retirement-calculator": Retirement_Calc,
  // "dual-income-vs-single-income": Dual_Vs_Single_Income,
  // "monthly-budget-planner": Monthly_Budget_Planner,
  // "diy-vs-outsourcing-calculator": DIY_Vs_Outsourcing_Calculator,
  // "price-per-use-calculator": Price_Per_Use_Calc,
  // "fire-calculator": Fire_Calc,

  // Experimental
  // "social-media-time-waste": Social_Media,
  // "work-from-home": Work_From_Home,
  // "job-switch-impact": Job_Switch_Impact,
  // "higher-education-degree-roi": Higher_Education,
  // "lifestyle-health-roi": Lifecycle_Health_ROI,
};

// Generate JSON-LD structured data for better SEO
const generateStructuredData = (slug, calculatorName, seoData) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": calculatorName,
    "description": seoData?.description || `Calculate ${calculatorName} online for free. Easy-to-use financial calculator.`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/UseAction",
      "userInteractionCount": "1000"
    }
  };
};

export default function CalculatorsDetails() {
  const { slug } = useParams();
  const CalculatorComponent = calculatorMap[slug];
  const seoData = calculatorSEOData[slug];
  const calculatorName = formatCalculatorName(slug);
  
  // Default SEO for unknown calculators
  const defaultTitle = `${calculatorName} | Financial Calculator | QuickHomeLoan.in`;
  const defaultDescription = `Free online ${calculatorName} calculator at QuickHomeLoan.in. Calculate and compare financial scenarios easily.`;
  
  const finalTitle = seoData?.title || defaultTitle;
  const finalDescription = seoData?.description || defaultDescription;
  const finalKeywords = seoData?.keywords || `financial calculator, ${calculatorName.toLowerCase()}, finance tool, investment calculator, quickhomeloan`;
  const finalOgImage = seoData?.ogImage || "/images/default-calculator-og.jpg";
  
  const structuredData = generateStructuredData(slug, calculatorName, seoData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!CalculatorComponent) {
    return (
      <>
        <Helmet>
          <title>Calculator Not Found | QuickHomeLoan.in</title>
          <meta name="description" content="The requested calculator could not be found. Please check the URL or browse our other financial calculators at QuickHomeLoan.in." />
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href="https://quickhomeloan.in/calculators" />
        </Helmet>
        <h2 className="text-center text-red-500 mt-20">
          Calculator not found
        </h2>
      </>
    );
  }

  // Construct the full canonical URL
  const canonicalUrl = `https://quickhomeloan.in/calculators/${slug}`;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{finalTitle}</title>
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
        <meta name="author" content="QuickHomeLoan.in" />
        
        {/* Canonical URL - Updated to quickhomeloan.in */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:image" content={finalOgImage} />
        <meta property="og:site_name" content="QuickHomeLoan.in - Financial Calculators" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={finalTitle} />
        <meta name="twitter:description" content={finalDescription} />
        <meta name="twitter:image" content={finalOgImage} />
        <meta name="twitter:site" content="@QuickHomeLoan" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Language and Region - India specific */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        
        {/* Mobile Optimization */}
        <meta name="apple-mobile-web-app-title" content={calculatorName} />
        <meta name="application-name" content={calculatorName} />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Site Verification (optional - add your verification codes) */}
        {/* <meta name="google-site-verification" content="your-code" /> */}
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* BreadcrumbList Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://quickhomeloan.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Calculators",
                "item": "https://quickhomeloan.in/calculators"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": calculatorName,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="font-proximaNova mt-20">
        {/* Breadcrumb navigation for better SEO and user experience */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2 text-sm text-gray-600">
          <ol className="flex flex-wrap gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="https://quickhomeloan.in/" className="hover:text-blue-600" itemProp="item">
                <span itemProp="name">Home</span>
              </a>
              <span className="mx-2">/</span>
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/calculators" className="hover:text-blue-600" itemProp="item">
                <span itemProp="name">Calculators</span>
              </a>
              <span className="mx-2">/</span>
              <meta itemProp="position" content="2" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-900 font-medium">{calculatorName}</span>
              <meta itemProp="position" content="3" />
              <meta itemProp="item" content={canonicalUrl} />
            </li>
          </ol>
        </nav>
        
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">{finalTitle}</h1>
        
        <CalculatorComponent />
      </div>
    </>
  );
}