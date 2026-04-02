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
// Loan Calculators
import LoanVsFd from "./components/LoanCalculators/LoanVsFd/LoanVsFd";
import LoanInterestVsFdInterest from "./components/LoanCalculators/LoanInterestVsFdInterest/LoanInterestVsFdInterest";
import LoanInterestSWP from "./components/LoanCalculators/LoanInterestSWP/LoanInterestSWP";
import EMIPrepay from "./components/LoanCalculators/EMIPrepay/EMIPrepay";
import TimeValue from "./components/LoanCalculators/TimeValue/TimeValue";
import BasicLoan from "./components/LoanCalculators/BasicLoan/BasicLoan";
import AdvanceLoan from "./components/LoanCalculators/AdvanceLoan/AdvanceLoan";
import EmiVsRent from "./components/LoanCalculators/EMIVsRent/EMIVsRent";
import DebtAvalanche from "./components/LoanCalculators/DebtAvalanche/DebtAvalanche";
// import SIPInvestment from "./components/InvestmentCalculators/SIPInvestment/SIPInvestment";
import SWPWithdrawal from "./components/InvestmentCalculators/SWPWithdrawal/SWPWithdrawal";
import SWPCalculator from "./components/InvestmentCalculators/SWPCalculator/index";
import SIPCalculator from "./components/InvestmentCalculators/SIPCalculator/index";
import LoanExtraRepayments from "./components/LoanCalculators/LoanExtraRepayments";
import StampDuty from "./components/LoanCalculators/StampDuty";
import EMIInterestRate from "./components/LoanCalculators/EMIInterestRate";
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

const calculatorMap = {
  // Loan Calculators
  "loan-vs-fd": LoanVsFd,
  "loan-extra-repayments": LoanExtraRepayments,
  "stamp-duty": StampDuty,
  "loan-interest-vs-fd-interest": LoanInterestVsFdInterest,
  "loan-interest-vs-emi-swp": LoanInterestSWP,
  "emi-prepayment-vs-invest": EMIPrepay,
  "time-value-of-emi": TimeValue,
  "loan-basic": BasicLoan,
  "loan-advance": AdvanceLoan,
  "emi-vs-rent": EmiVsRent,
  "debt-avalanche-vs-snowball": DebtAvalanche,

  "emi-interest-rate-finder": EMIInterestRate,

  // Investment
  // "sip-systematic-investment-plan": SIPInvestment,
  "swp-systematic-withdrawal-plan": SWPWithdrawal,
  "swp-calculator": SWPCalculator,
  "sip-calculator": SIPCalculator,
  // "your-time-value-per-hour": Your_Time_Value,
  // "future-value-of-an-item": Future_Value_Item,
  // "future-value-of-bank-balance": Future_Value_Bank_balance,
  // "real-returns-after-tax": Real_Return_After_Tax,
  // "cost-of-delay-investment": Cost_of_Delay,
  // "chit-fund-vs-mutual-fund": Chit_Fund_Mutual_Fund,
  // "tax-savings-vs-investment-returns": Tax_Saving_Vs_investment_Returns,
  // "dividend-vs-growth-investment": Dividend_Vs_Growth_Investment,
  // "compound-interest": Compound_Interest,
  // "simple-interest-calculator": Simple_Interest_Calculator,
  // "monthly-income-scheme": Monthly_Income_scheme,
  // "senior-citizen-savings-scheme": Senior_Citizen_Savings_Scheme,
  // "gratuity-calculator": Gratuity_Calculator,
  // "currency-depreciation-investment": Currency_Depreciation_Investment,

  // Housing & Relocation
  // "relocation-opportunity-calculator": Relocation_Opportunity_Calculator,

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

export default function CalculatorDetails() {
  const { slug } = useParams();
  const CalculatorComponent = calculatorMap[slug];


  useEffect(() => {
    window.scrollTo();
  }, []);

  if (!CalculatorComponent) {
    return (
      <h2 className="text-center text-red-500 mt-10">
        Calculator not found
      </h2>
    );
  }

  return <CalculatorComponent />;
}
