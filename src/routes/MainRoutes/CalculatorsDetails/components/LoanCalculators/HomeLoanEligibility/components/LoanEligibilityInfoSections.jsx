import React from "react";

export default function LoanEligibilityInfoSections() {
  return (
    <div className="space-y-12 mt-12">

      {/* ================= WHAT THIS CALCULATOR DOES ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          What This Calculator Does
        </h2>
        <div className="prose prose-slate max-w-none prose-li:marker:text-primary-600">
          <ul className="list-disc space-y-2 pl-5">
            <li>Estimates the maximum loan amount you can qualify for based on your financial profile.</li>
            <li>Uses the standard FOIR (Fixed Obligation to Income Ratio) method that banks and NBFCs use.</li>
            <li>Helps you understand your safe borrowing limit to plan your finances better.</li>
            <li>Provides an instant eligibility check for home loans, car loans, and personal loans.</li>
            <li>Allows you to test different scenarios by changing tenure and interest rates.</li>
            <li>Empowers you to check loan eligibility before you formally apply with a lender.</li>
          </ul>
        </div>
      </section>

      {/* ================= WHEN TO USE ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          When to Use This Calculator
        </h2>
        <div className="prose prose-slate max-w-none prose-li:marker:text-primary-600">
          <ul className="list-disc space-y-2 pl-5">
            <li>Before you start searching for a home, to know your property budget.</li>
            <li>When planning to buy a new or used car to determine affordability.</li>
            <li>Before applying for a personal loan for marriage, travel, or medical emergencies.</li>
            <li>To compare loan eligibility across different banks with varying interest rates.</li>
            <li>When you are unsure how much loan you can get on your current salary.</li>
            <li>If you already have existing EMIs and want to check your eligibility for a new loan.</li>
            <li>To decide on the ideal loan tenure that matches your repayment capacity.</li>
          </ul>
        </div>
      </section>

      {/* ================= HOW TO USE ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          How to Use – Step by Step
        </h2>
        <div className="prose prose-slate max-w-none prose-li:marker:text-primary-600">
          <ul className="list-disc space-y-2 pl-5">
            <li>Enter your net take-home salary in the "Monthly Income" field.</li>
            <li>Input the total of all your current monthly EMIs.</li>
            <li>Adjust the interest rate and tenure to match the loan offer.</li>
            <li>Select the type of loan you are interested in.</li>
            <li>Click the "Check Loan Eligibility" button.</li>
            <li>View the maximum loan amount you are likely to be approved for.</li>
          </ul>
        </div>
      </section>

      {/* ================= KEY FACTORS ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          Key Factors That Affect Your Loan Eligibility
        </h2>
        <div className="prose prose-slate max-w-none prose-li:marker:text-primary-600">
          <ul className="list-disc space-y-2 pl-5">
            <li>Net Monthly Income: Higher income means higher eligibility.</li>
            <li>FOIR: Banks usually cap EMIs at 40–60% of income.</li>
            <li>Credit Score: Scores above 750 improve approval chances.</li>
            <li>Existing Debts: Higher EMIs reduce new loan eligibility.</li>
            <li>Age: Loan tenure depends on retirement age.</li>
            <li>Employment Stability: Stable income increases confidence.</li>
            <li>Co-applicant: Adding one can significantly increase eligibility.</li>
            <li>Bank Policies: Lending norms differ by bank.</li>
          </ul>
        </div>
      </section>

      {/* ================= EXAMPLES ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          Example Eligibility Scenarios
        </h2>

        <div className="space-y-8 prose prose-slate max-w-none">
          {/* HOME LOAN */}
          <div>
            <h4 className="font-bold text-lg text-gray-800">1. Home Loan Example</h4>
            <div className="mt-3 p-4 bg-slate-100 rounded-md border">
              <p><strong>Eligible EMI:</strong> ₹30,000</p>
              <p className="font-bold mt-2">
                Maximum Loan ≈ <span className="text-primary-700">₹34,58,700</span>
              </p>
            </div>
          </div>

          {/* PERSONAL LOAN */}
          <div>
            <h4 className="font-bold text-lg text-gray-800">2. Personal Loan Example</h4>
            <div className="mt-3 p-4 bg-slate-100 rounded-md border">
              <p><strong>Eligible EMI:</strong> ₹22,500</p>
              <p className="font-bold mt-2">
                Maximum Loan ≈ <span className="text-primary-700">₹10,13,600</span>
              </p>
            </div>
          </div>

          {/* CAR LOAN */}
          <div>
            <h4 className="font-bold text-lg text-gray-800">3. Car Loan Example</h4>
            <div className="mt-3 p-4 bg-slate-100 rounded-md border">
              <p><strong>Eligible EMI:</strong> ₹25,000</p>
              <p className="font-bold mt-2">
                Maximum Loan ≈ <span className="text-primary-700">₹15,22,500</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          How This Calculator Works
        </h2>

        <div className="space-y-4 prose prose-slate max-w-none">
          <p className="font-mono bg-slate-100 p-3 rounded border text-sm">
            Eligible EMI = (Income × FOIR) − Existing EMIs
          </p>
          <p className="font-mono bg-slate-100 p-3 rounded border text-sm">
            Loan Amount = EMI × [ (1+r)^n − 1 ] / [ r × (1+r)^n ]
          </p>
        </div>
      </section>

      {/* ================= PRACTICAL APPLICATIONS ================= */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2 mb-4 tracking-tight">
          Practical Applications
        </h2>
        <div className="prose prose-slate max-w-none prose-li:marker:text-primary-600">
          <ul className="list-disc space-y-2 pl-5">
            <li>Plan property or car budget accurately</li>
            <li>Compare lender offers</li>
            <li>Optimize tenure vs EMI</li>
            <li>Improve FOIR before applying</li>
            <li>Negotiate better loan terms</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
