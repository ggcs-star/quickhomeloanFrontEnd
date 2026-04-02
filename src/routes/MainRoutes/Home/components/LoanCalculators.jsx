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
import { Container } from "../../../../components/Layout"; // adjust path

export const calculators = [
  {
    slug: "loan-vs-fd",
    title: "Loan vs FD",
    description: "Compare the return on fixed deposit with the cost of a loan.",
    linkText: "Calculate",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "loan-interest-vs-fd-interest",
    title: "Loan Interest vs FD Interest",
    description: "Evaluate whether taking a loan or breaking an FD is smarter.",
    linkText: "Check Now",
    icon: <Banknote className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "loan-interest-vs-emi-swp",
    title: "Loan Interest vs EMI-SWP Interest",
    description: "Compare loan interest with interest from a Systematic Withdrawal Plan.",
    linkText: "Check Now",
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "emi-prepayment-vs-invest",
    title: "EMI Prepayment vs Invest (FD/MF)",
    description: "Should you prepay your loan or invest the money instead?",
    linkText: "Compare",
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "time-value-of-emi",
    title: "Time Value of EMI",
    description: "Understand the true value of your EMI in future terms.",
    linkText: "Calculate",
    icon: <Clock className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "loan-basic",
    title: "Loan Basic",
    description: "Simple calculator for loan amount, tenure, and EMI basics.",
    linkText: "Try Now",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "loan-advance",
    title: "Loan Advance",
    description: "Advanced calculator for effective interest rates and costs.",
    linkText: "Try Now",
    icon: <BarChart2 className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "emi-vs-rent",
    title: "EMI vs RENT",
    description: "Should you rent or pay EMIs? Get a financial comparison.",
    linkText: "Compare",
    icon: <Home className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "loan-vs-fd-mf-sip",
    title: "Loan vs FD/MF vs SIP - Advanced",
    description: "Advanced tool to compare loans with FD, Mutual Funds, and SIPs.",
    linkText: "Explore",
    icon: <PieChart className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "debt-avalanche-vs-snowball",
    title: "Debt Avalanche vs Debt Snowball",
    description: "Compare two debt repayment strategies to find what suits you best.",
    linkText: "Compare",
    icon: <TrendingDown className="w-10 h-10 text-blue-600" />,
  },
];

export default function LoanCalculators() {
  return (
    <Container className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Loan Calculators</h2>
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
              className="text-blue-600 text-sm font-medium hover:underline mt-auto"
            >
              {calc.linkText}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
