import React from "react";
import loanapplication from "../../../../assets/miscellaneous/loan-application.svg"; // Ensure this path is correct
import { PrimaryBtn } from "../../../../components/Button";
import { Container } from "../../../../components/Layout";

const steps = [
  {
    number: "01",
    title: "Tell us about your financial requirement",
    description: "Fill out the details in less than 2 minutes.",
    color: "text-blue-600 border-blue-600",
    image: "https://cdn.urbanmoney.com/images/leftArrow.svg",
    arrowClass: "ml-3 size-28 rotate-0", // left arrow
  },
  {
    number: "02",
    title: "AI based eligibility engine to match you with best banks",
    description:
      "Based upon your details, our AI engine, using pool of 90+ bank details will match you with the best banks with success rate of over 90%",
    color: "text-orange-500 border-orange-500",
    image: "https://cdn.urbanmoney.com/images/leftArrow.svg",
    arrowClass: "ml-3 size-28 rotate-180 transform scale-x-[-1]", // left arrow
  },
  {
    number: "03",
    title: "Digital Bank application",
    description:
      "Add few more details in completely digital platform to create bank application.",
    color: "text-green-600 border-green-600",
    image: "https://cdn.urbanmoney.com/images/leftArrow.svg",
    arrowClass: "mr-3 size-28 rotate-180 transform scale-y-[-1]", // left arrow
  },
  {
    number: "04",
    title: "Get quick sanction on your loan",
    description:
      "The whole process of application filling to loan sanction gets reduced from weeks to few minutes.",
    color: "text-red-600 border-red-600",
    image: "https://cdn.urbanmoney.com/images/leftArrow.svg",
    arrowClass: "mr-3 size-28 rotate-180", // left arrow
  },
];

export default function LoanSteps() {
  return (
    <Container className='py-8'>
      <h2 className="text-2xl text-gray-800 mb-1 text-center">
        Your Loan Application Made Easy in 4 Steps
      </h2>
      <p className="text-gray-500 mb-10 text-lg text-center">Simple and fast</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Steps */}
        <div className="space-y-12 text-left relative">
          {steps.slice(0, 2).map((step, i) => (
            <div key={i} className="relative pl-0 lg:pl-6 flex items-center">
              <div className="flex flex-col">
                <div
                  className={` text-xl font-bold ${step.color}`}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
              {step.image && (
                <img
                  src={step.image}
                  alt="arrow"
                  className={`${step.arrowClass} hidden md:block -z-10`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Center Illustration */}
        <div className="hidden lg:block flex justify-center">
          <img
            src={loanapplication}
            alt="Loan Steps"
            className="w-72 md:w-96"
          />
        </div>

        {/* Right Steps */}
        <div className="space-y-12 relative">
          {steps.slice(2).map((step, i) => (
            <div key={i} className="flex items-start md:items-center gap-4">
              {/* Arrow Image */}

              <img
                src={step.image}
                alt={`Arrow for step ${step.number}`}
                className={`${step.arrowClass} hidden md:block`}
              />

              <div className="flex flex-col">
                <div className={`text-xl text-start font-bold ${step.color}`}>
                  {step.number}
                </div>

                <div className="text-start">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* <div className="mt-10">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started →
        </a>
      </div> */}
      <div className="flex justify-center py-8 lg:py-0">
        <PrimaryBtn className="flex items-center justify-center">
          Get Started →
        </PrimaryBtn>
      </div>

    </Container>
  );
}
