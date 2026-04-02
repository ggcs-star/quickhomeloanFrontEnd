import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

const steps = [
  {
    id: "01",
    title: "Check Eligibility",
    desc: "Fill a simple form to know your loan eligibility instantly.",
    link: "/loan-eligibility",
  },
  {
    id: "02",
    title: "Submit Application",
    desc: "Upload the required documents online in a few clicks.",
    link: "/apply-loan",
  },
  {
    id: "03",
    title: "Get Approval",
    desc: "Our team verifies your application within 24-48 hours.",
    link: "/loan-status",
  },
  {
    id: "04",
    title: "Receive Funds",
    desc: "The loan amount is disbursed directly to your account.",
    link: "/disbursement-info",
  },
];

const LoanProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <Container className="container mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Getting Your Loan is Easy
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Follow our simple 4-step process to get your home loan approved quickly.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* CONNECTING LINE (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 w-3/4 mx-auto -z-10" />

          {steps.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group relative flex flex-col items-center text-center bg-white p-6 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div
                className="
                  flex h-20 w-20 items-center justify-center
                  rounded-2xl bg-slate-900 text-2xl font-bold text-white
                  mb-6 shadow-xl ring-8 ring-white
                  group-hover:bg-black
                "
              >
                {item.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 text-center">
          <Link
            to="/apply-loan"
            className="
              inline-flex items-center justify-center rounded-full
              bg-slate-900 px-10 py-4 text-lg font-semibold text-white
              shadow-lg hover:bg-black hover:scale-105 transition-all
            "
          >
            Start Your Application
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default LoanProcessSection;
