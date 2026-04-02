import React from "react";
import {
  Calculator,
  Banknote,
  TrendingUp,
  BarChart,
  Clock,
  FileText,
  BarChart2,
  Home,
  PieChart,
  TrendingDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

export const calculators = [
  {
    slug: "real-returns-after-tax",
    title: "Real Returns after Tax",
    description: "Calculate post-tax returns adjusted for inflation.",
    linkText: "Calculate",
    icon: <TrendingUp className="w-10 h-10 text-black" />,
  },
  {
    slug: "sip-systematic-investment-plan",
    title: "SIP - Systematic Investment Plan",
    description: "Plan your monthly investments and estimate future value.",
    linkText: "Calculate",
    icon: <Calculator className="w-10 h-10 text-black" />,
  },
  {
    slug: "swp-systematic-withdrawal-plan",
    title: "SWP - Systematic Withdrawal Plan",
    description: "Estimate withdrawals from your investments systematically.",
    linkText: "Calculate",
    icon: <Calculator className="w-10 h-10 text-black" />,
  },
  // {
  //   slug: "your-time-value-per-hour",
  //   title: "Your Time value per Hour",
  //   description: "Know the monetary value of your time per hour.",
  //   linkText: "Check Now",
  //   icon: <Clock className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "future-value-of-an-item",
  //   title: "Future Value of an Item (Inflation)",
  //   description: "See how inflation affects the price of an item over time.",
  //   linkText: "Calculate",
  //   icon: <TrendingUp className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "future-value-of-bank-balance",
  //   title: "Future Value of Bank Balance",
  //   description: "Find the future worth of your bank savings.",
  //   linkText: "Calculate",
  //   icon: <Banknote className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "cost-of-delay-investment",
  //   title: "Cost of Delay (Investment)",
  //   description: "Understand how delaying investments reduces future value.",
  //   linkText: "Compare",
  //   icon: <BarChart className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "chit-fund-vs-mutual-fund",
  //   title: "Chit Fund vs Mutual Fund",
  //   description: "Compare returns and risks of Chit funds vs Mutual funds.",
  //   linkText: "Compare",
  //   icon: <PieChart className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "tax-savings-vs-investment-returns",
  //   title: "Tax Savings vs. Investment Returns",
  //   description: "Evaluate the benefit of tax-saving investments.",
  //   linkText: "Check Now",
  //   icon: <FileText className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "dividend-vs-growth-investment",
  //   title: "Dividend vs Growth Investment",
  //   description: "Compare dividend plans with growth investment options.",
  //   linkText: "Compare",
  //   icon: <TrendingUp className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "compound-interest",
  //   title: "Compound Interest",
  //   description: "Calculate compound interest on your investment.",
  //   linkText: "Calculate",
  //   icon: <Calculator className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "simple-interest-calculator",
  //   title: "Simple Interest Calculator",
  //   description: "Quickly calculate simple interest on a loan or deposit.",
  //   linkText: "Calculate",
  //   icon: <Calculator className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "monthly-income-scheme",
  //   title: "Monthly Income Scheme",
  //   description: "Estimate returns from a monthly income scheme.",
  //   linkText: "Calculate",
  //   icon: <Banknote className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "senior-citizen-savings-scheme",
  //   title: "Senior Citizen Savings Scheme",
  //   description: "Calculate maturity value for senior citizen schemes.",
  //   linkText: "Calculate",
  //   icon: <FileText className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "gratuity-calculator",
  //   title: "Gratuity Calculator",
  //   description: "Compute the gratuity payable to employees.",
  //   linkText: "Calculate",
  //   icon: <FileText className="w-10 h-10 text-black" />,
  // },
  // {
  //   slug: "currency-depreciation-investment",
  //   title: "Currency Depreciation/Investment",
  //   description: "See how currency depreciation affects investments.",
  //   linkText: "Analyze",
  //   icon: <TrendingDown className="w-10 h-10 text-black" />,
  // },
    {
    slug: "property-investment",
    title: "Property Investment vs EMI Outflow Calculator",
    description: "Compare your property investment returns with your EMI outflows over time",
    linkText: "Analyze",
    icon: <TrendingDown className="w-10 h-10 text-black" />,
  },
      {
    slug: "tax-savings-vs-investment-returns",
    title: "Tax Savings vs Investment Returns Calculator",
    description: "Compare tax-saving investments with regular market investments",
    linkText: "Analyze",
    icon: <TrendingDown className="w-10 h-10 text-black" />,
  },
];


export default function InvestmentCalculators() {
  return (
    <Container className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Investment Calculators</h2>
      <p className="text-gray-600 mb-8">
        At Quick Home Loan, we aim to ease the burden of credit procedures through
        the help of financial calculators. You get access to various financial
        calculators, from EMI calculators to balance transfer calculators to FD
        calculators. With easy access to these calculators, you can now compute
        your monthly payments in advance and unlock better management and timely
        repayments.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
        {calculators.map((calc, index) => (
          <div
            key={index}
            className="p-3 lg:p-6 rounded-md border border-neutral-300 transition bg-white flex flex-col justify-between"
          >
            {/* Icon */}
              <div className="block lg:hidden py-2">{calc.icon}</div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {calc.title}
                </h3>
                <div className="h-1.5 w-10 bg-gray-200 rounded-lg mt-1"></div>
              </div>
              <div className="hidden lg:block">{calc.icon}</div>
            </div>
            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">{calc.description}</p>
            {/* Link */}
            <Link
              to={`/calculators/${calc.slug}`}
              className="text-black text-sm font-medium hover:underline mt-auto"
            >
              {calc.linkText}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
