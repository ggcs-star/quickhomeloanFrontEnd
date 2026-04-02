import React from "react";
import { Calculator, Home, Banknote, TrendingUp, Smartphone, BarChart } from "lucide-react"; // Icons (optional)
import { Container } from "../../../../components/Layout";

const calculators = [
  {
    title: "Home Loan EMI Calculator",
    description: "A Home Loan EMI Calculator permits you to compute",
    linkText: "Calculate EMI",
    link: "#",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Home Loan Eligibility Calculator",
    description: "Determine your housing loan eligibility through Home Loan",
    linkText: "Check Now",
    link: "#",
    icon: <Home className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Home Loan Balance Transfer",
    description: "Put forward your decision on the balance transfer",
    linkText: "Check Now",
    link: "#",
    icon: <Banknote className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Home Loan Prepayment Calculator",
    description: "A Home Loan Prepayment calculator is an online",
    linkText: "Check Now",
    link: "#",
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "SIP Calculator",
    description: "SIP calculator is a tool that enables you to compute",
    linkText: "Check Now",
    link: "#",
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Gratuity Calculator",
    description: "A gratuity calculator is an advanced tool that estimates",
    linkText: "Check Now",
    link: "#",
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
  },
];

export default function FinancialCalculators() {
  return (
    <Container className='py-8'>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Financial Calculators</h2>
      <p className="text-gray-600 max-w-3xl mb-8">
        At Urban Money, we aim to ease the burden of credit procedures through the help of financial
        calculators. You get access to various financial calculators, from EMI calculators to balance
        transfer calculators to FD calculators. With easy access to these calculators, you can now compute
        your monthly payments in advance and unlock better management and timely repayments.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition bg-white flex flex-col justify-between"
          >
            {/* Icon */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-500 border-2">{calc.title}</h3>
              {calc.icon}
            </div>
            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">
              {calc.description}{" "}
              <a href={calc.link} className="text-blue-600 hover:underline">
                know more
              </a>
            </p>
            {/* Link */}
            <a
              href={calc.link}
              className="text-blue-600 text-sm font-medium hover:underline mt-auto"
            >
              {calc.linkText}
            </a>
          </div>
        ))}
      </div>
      </Container>
  );
}
