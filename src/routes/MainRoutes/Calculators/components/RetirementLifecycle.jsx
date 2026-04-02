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
    slug: "child-education-goal-planner",
    title: "Child Education Goal Planner",
    description:
      "Plan and estimate the future cost of your child's education and the investments needed to meet that goal.",
    linkText: "Plan",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "marriage-expenses-calculator",
    title: "Marriage Expenses Calculator",
    description:
      "Estimate and plan the total cost of wedding expenses to budget effectively.",
    linkText: "Calculate",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "career-break-impact-calculator",
    title: "Career Break Impact Calculator",
    description:
      "Understand the long-term financial impact of taking a career break and plan accordingly.",
    linkText: "Evaluate",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "retirement-calculator",
    title: "Retirement Calculator",
    description:
      "Calculate how much you need to save and invest to maintain your lifestyle after retirement.",
    linkText: "Calculate",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "dual-income-vs-single-income",
    title: "Dual-Income vs Single-Income",
    description:
      "Compare the financial impact and lifestyle changes between dual-income and single-income households.",
    linkText: "Compare",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "monthly-budget-planner",
    title: "Monthly Budget Planner",
    description:
      "Plan and track monthly income, expenses, and savings to stay on budget.",
    linkText: "Plan",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "diy-vs-outsourcing-calculator",
    title: "DIY vs Outsourcing Calculator",
    description:
      "Evaluate whether doing tasks yourself or outsourcing them is more cost-effective.",
    linkText: "Compare",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "price-per-use-calculator",
    title: "Price Per Use Calculator",
    description:
      "Determine the true cost of an item based on how often you use it.",
    linkText: "Calculate",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    slug: "fire-calculator",
    title: "FIRE Calculator",
    description:
      "Plan for Financial Independence, Retire Early by calculating the savings and investments required.",
    linkText: "Plan",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
];


export default function RetirementLifecycle() {
  return (
    <Container className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Retirement & Lifecycle</h2>
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
