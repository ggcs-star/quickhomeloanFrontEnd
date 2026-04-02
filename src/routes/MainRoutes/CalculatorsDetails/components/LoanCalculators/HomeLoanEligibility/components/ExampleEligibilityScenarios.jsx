import React from "react";

const ExampleEligibilityScenarios = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Example Eligibility Scenarios
      </h2>

      <div className="space-y-8 text-gray-700">
        {/* ================= HOME LOAN ================= */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black text-lg mb-2">
            1. Home Loan Eligibility Example
          </h4>

          <p className="text-sm mb-3">
            An individual with a monthly salary of ₹80,000 wants to check their
            home loan eligibility.
          </p>

          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li><strong>Net Monthly Income:</strong> ₹80,000</li>
            <li><strong>Existing EMIs:</strong> ₹10,000</li>
            <li><strong>Loan Tenure:</strong> 20 Years</li>
            <li><strong>Interest Rate:</strong> 8.5% p.a.</li>
            <li><strong>Bank FOIR Norm:</strong> 50%</li>
          </ul>

          <div className="bg-gray-50 p-4 rounded-md text-sm space-y-2">
            <p><strong>Calculation:</strong></p>
            <p>Maximum EMI Allowed (50% FOIR) = ₹80,000 × 50% = ₹40,000</p>
            <p>Available EMI for New Loan = ₹40,000 − ₹10,000 = ₹30,000</p>
            <p className="font-semibold text-gray-900 mt-2">
              Based on an eligible EMI of ₹30,000 for 20 years at 8.5%, the
              Maximum Loan Amount is approximately ₹34,58,700.
            </p>
          </div>
        </div>

        {/* ================= PERSONAL LOAN ================= */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black text-lg mb-2">
            2. Personal Loan Eligibility Example
          </h4>

          <p className="text-sm mb-3">
            An individual earning ₹45,000/month with no existing loans.
          </p>

          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li><strong>Net Monthly Income:</strong> ₹45,000</li>
            <li><strong>Existing EMIs:</strong> ₹0</li>
            <li><strong>Loan Tenure:</strong> 5 Years</li>
            <li><strong>Interest Rate:</strong> 12% p.a.</li>
          </ul>

          <div className="bg-gray-50 p-4 rounded-md text-sm space-y-2">
            <p>Eligible EMI = ₹45,000 × 50% = ₹22,500</p>
            <p className="font-semibold text-gray-900 mt-2">
              Maximum Personal Loan Amount is approximately ₹10,13,600.
            </p>
          </div>
        </div>

        {/* ================= CAR LOAN ================= */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black text-lg mb-2">
            3. Car Loan Eligibility Example
          </h4>

          <p className="text-sm mb-3">
            An individual with a salary of ₹60,000 and an existing personal loan EMI.
          </p>

          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li><strong>Net Monthly Income:</strong> ₹60,000</li>
            <li><strong>Existing EMIs:</strong> ₹5,000</li>
            <li><strong>Loan Tenure:</strong> 7 Years</li>
            <li><strong>Interest Rate:</strong> 9.5% p.a.</li>
          </ul>

          <div className="bg-gray-50 p-4 rounded-md text-sm space-y-2">
            <p>
              Eligible EMI = (₹60,000 × 50%) − ₹5,000 = ₹25,000
            </p>
            <p className="font-semibold text-gray-900 mt-2">
              Maximum Car Loan Amount is approximately ₹15,22,500.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleEligibilityScenarios;
