import React from "react";
import { Container } from "../../../../components/Layout";

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-slate-50">
      <Container className="container mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-700">
            A Better Way to Secure Your Home Loan
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We simplify the home loan process with technology and dedicated support,
            ensuring a seamless experience from application to disbursal.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-slate-900 mb-6"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Quick Approval
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Get your loan sanctioned in 24-48 hours.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-slate-900 mb-6"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" x2="5" y1="5" y2="19" />
              <circle cx="6.5" cy="6.5" r="2.5" />
              <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Low Interest Rates
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Competitive rates to make your loan affordable.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-slate-900 mb-6"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              100% Secure
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Your data is safe with our top-tier encryption.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-slate-900 mb-6"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Easy Documentation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              A hassle-free process with minimal paperwork.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-slate-900 mb-6"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Expert Guidance
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our loan experts are here to guide you.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-slate-900 mb-6"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              24/7 Support
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We are always here to help you at any time.
            </p>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
