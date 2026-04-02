import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../../../../components/Layout";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Check Eligibility",
    description: "Use our calculator to check your loan eligibility instantly",
  },
  {
    number: "02",
    title: "Submit Application",
    description: "Fill out a simple form with your details and documents",
  },
  {
    number: "03",
    title: "Get Approval",
    description: "Receive approval within 24-48 hours after verification",
  },
  {
    number: "04",
    title: "Receive Funds",
    description: "Get the loan amount disbursed directly to your account",
  },
];

const HowItWorks = () => {
  return (
    <Container>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8  bg-white text-black">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get your home loan in 4 simple steps
          </p>
          <div className="" />
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number Circle */}
              <div className="bg-gradient-to-br from-black to-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-semibold shadow-md">
                {step.number}
              </div>

              {/* Step Text */}
              <h3 className="mb-2 font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>

              {/* Arrow Icon (hidden on last step) */}
              {index !== steps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute top-8 -right-4 text-gray-400 h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/apply-loan"
            className="cursor-pointer bg-black hover:bg-gray-800 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6"
          >
            Start Your Application
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default HowItWorks;
