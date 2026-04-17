import React from "react";

export default function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT GRID ================= */}
        <div className="space-y-10 transition-all duration-1000 opacity-100 translate-y-0">

          {/* Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200">
            <button className="px-6 py-2 text-xs font-bold rounded-full bg-white text-blue-600 shadow-sm">
              First Home Loan
            </button>
            <button className="px-6 py-2 text-xs font-bold text-slate-500 hover:text-slate-700">
              Refinance / Existing
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
              Don’t Just Take a Home Loan —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Make the Right One.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              Unlock true market transparency. See the real cost including
              processing fees and hidden math banks don't show you.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Start Free Loan Analysis →
              </button>

              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
                Compare Loans Now
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-slate-400">
                No signup required • Takes 2 minutes
              </span>
              <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
              <span className="text-rose-500 animate-pulse font-semibold">
                Most borrowers overpay ₹Lakhs blindly.
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            {[
              "Real Cost Analysis",
              "100% Transparent",
              "Smart Comparisons",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="p-1.5 bg-slate-50 rounded-lg"></div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT GRID ================= */}
        <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
          
          {/* Glow */}
          <div className="absolute -inset-6 bg-teal-100/30 rounded-[3rem] blur-3xl -z-10"></div>

          {/* Card */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Loan Optimizer v2.0
              </span>

              <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                Refinance Opportunity
              </span>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">

              <h3 className="text-xl font-bold text-slate-900">
                Real Cost Comparison
              </h3>

              {/* Table */}
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-4 font-bold text-slate-400 text-xs">
                  <div>Feature</div>
                  <div className="text-center">Current</div>
                  <div className="text-center">Bank A</div>
                  <div className="text-center text-teal-600">Best</div>
                </div>

                <div className="grid grid-cols-4 p-4 bg-slate-50 rounded-xl">
                  <div>Interest</div>
                  <div className="text-center">8.95%</div>
                  <div className="text-center">8.40%</div>
                  <div className="text-center font-bold">8.15%</div>
                </div>

                <div className="grid grid-cols-4 p-4">
                  <div>Fees</div>
                  <div className="text-center">₹15K</div>
                  <div className="text-center">₹5K</div>
                  <div className="text-center text-green-600 font-bold">
                    ₹0
                  </div>
                </div>

                <div className="grid grid-cols-4 p-4 bg-slate-50 rounded-xl">
                  <div>Hidden</div>
                  <div className="text-center text-red-500">₹24K</div>
                  <div className="text-center">₹8K</div>
                  <div className="text-center text-green-600 font-bold">
                    ₹0
                  </div>
                </div>

                <div className="grid grid-cols-4 p-5 bg-slate-900 text-white rounded-2xl">
                  <div>Total</div>
                  <div className="text-center">₹1.24Cr</div>
                  <div className="text-center">₹1.16Cr</div>
                  <div className="text-center font-black">₹1.08Cr</div>
                </div>
              </div>

              {/* Savings */}
              <div className="p-6 bg-emerald-50 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-emerald-700">
                    Savings
                  </p>
                  <p className="text-2xl font-black text-slate-900">
                    ₹16,42,000
                  </p>
                </div>
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border flex items-center gap-3 animate-bounce">
            <div>
              <p className="text-xs font-black">Verified</p>
              <p className="text-[10px] text-slate-400">
                Advisory Panel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}