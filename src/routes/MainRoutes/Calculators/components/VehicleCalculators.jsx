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
  // {
  //   slug: "car-lease-vs-buy",
  //   title: "Car Lease vs Buy",
  //   description: "Compare the total cost of leasing a car versus buying it to decide the most economical option.",
  //   linkText: "Compare",
  //   icon: <Calculator className="w-10 h-10 text-blue-600" />,
  // },
  // {
  //   slug: "any-two-car-comparison",
  //   title: "Any Two Car Comparison",
  //   description: "Evaluate and compare the costs and features of any two cars side by side.",
  //   linkText: "Compare",
  //   icon: <Calculator className="w-10 h-10 text-blue-600" />,
  // },
  // {
  //   slug: "transport-mode-cost-savings",
  //   title: "Transport Mode Cost Savings",
  //   description: "Analyze potential savings when switching between different modes of transport (car, bike, public transport, etc.).",
  //   linkText: "Calculate",
  //   icon: <Calculator className="w-10 h-10 text-blue-600" />,
  // },
  // {
  //   slug: "fuel-cost-calculator",
  //   title: "Fuel Cost Calculator",
  //   description: "Estimate monthly or trip-based fuel expenses based on mileage, distance, and fuel price.",
  //   linkText: "Calculate",
  //   icon: <Calculator className="w-10 h-10 text-blue-600" />,
  // },
];


export default function VehicleCalculators() {
  return (
    <Container className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Vehicle Calculators</h2>
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
