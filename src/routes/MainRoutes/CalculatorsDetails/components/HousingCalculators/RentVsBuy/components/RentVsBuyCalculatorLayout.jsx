import React from "react";
import RentVsBuyRightPanel from "./RentVsBuyRightPanel";

export default function RentVsBuyCalculatorLayout() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-8">

      {/* ================= LEFT PANEL (STICKY) ================= */}
      <div className="lg:col-span-2">
        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide pr-1">
          <div className="space-y-6">

            {/* ================= BUYING DETAILS ================= */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <svg
                  className="w-7 h-7 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25
                    c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545
                    M12.75 21H3.75a2.25 2.25 0 01-2.25-2.25V8.25
                    a2.25 2.25 0 012.25-2.25h16.5a2.25 2.25 0 012.25 2.25v10.5
                    A2.25 2.25 0 0118.75 21h-6"
                  />
                </svg>
                <h3 className="font-bold text-lg text-slate-900 ml-3">
                  Buying Details
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Property Price", value: "₹50,00,000" },
                  { label: "Down Payment", value: "20.0 %" },
                  { label: "Loan Interest Rate", value: "8.5 %" },
                  { label: "Loan Tenure", value: "20 yrs" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-slate-700">
                        {item.label}
                      </label>
                      <input
                        type="text"
                        value={item.value}
                        readOnly
                        className="w-28 py-1 px-2 text-right bg-slate-100 border border-slate-300 rounded-md text-sm font-semibold text-slate-900"
                      />
                    </div>
                    <input type="range" className="w-full accent-black" />
                  </div>
                ))}

                <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-200">
                  <p className="text-sm font-medium text-slate-600">
                    Projected Monthly EMI
                  </p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    ₹34,713
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RENTING DETAILS ================= */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <svg
                  className="w-7 h-7 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029
                    5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25
                    v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591
                    l6.499-6.499c.404-.404.527-1 .43-1.563
                    A6 6 0 1121.75 8.25z"
                  />
                </svg>
                <h3 className="font-bold text-lg text-slate-900 ml-3">
                  Renting Details
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700">
                    Current Monthly Rent
                  </label>
                  <input
                    type="text"
                    value="₹15,000"
                    readOnly
                    className="w-28 py-1 px-2 text-right bg-slate-100 border border-slate-300 rounded-md text-sm font-semibold text-slate-900"
                  />
                </div>
                <input type="range" className="w-full accent-black" />
              </div>
            </div>

            {/* ================= ECONOMIC FACTORS ================= */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-4">
                Economic Factors
              </h3>

              {[
                "Property Appreciation",
                "Annual Rent Increase",
                "Investment Return Rate",
                "Maintenance & Tax",
                "Inflation Rate",
              ].map((label, i) => (
                <div key={i} className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-slate-700">
                      {label}
                    </label>
                    <input
                      type="text"
                      value="6.0 %"
                      readOnly
                      className="w-28 py-1 px-2 text-right bg-slate-100 border border-slate-300 rounded-md text-sm font-semibold text-slate-900"
                    />
                  </div>
                  <input type="range" className="w-full accent-black" />
                </div>
              ))}
            </div>

            {/* ================= TIME FRAME ================= */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-4">
                Time Frame
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700">
                    Analysis Period
                  </label>
                  <input
                    type="text"
                    value="15 yrs"
                    readOnly
                    className="w-28 py-1 px-2 text-right bg-slate-100 border border-slate-300 rounded-md text-sm font-semibold text-slate-900"
                  />
                </div>
                <input type="range" className="w-full accent-black" />
              </div>
            </div>

            {/* ================= CTA ================= */}
            <button className="w-full bg-black text-white font-bold text-lg py-4 rounded-lg hover:bg-slate-900 transition">
              Calculate Financial Future
            </button>

          </div>
        </div>
      </div>

      {/* ================= RIGHT CONTENT PANEL ================= */}
      <div className="lg:col-span-3">
        <RentVsBuyRightPanel />
      </div>

    </main>
  );
}
