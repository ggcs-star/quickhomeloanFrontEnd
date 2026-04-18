import React, { useState } from "react";
import { BarChart3, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import heroVideo from "../../../../assets/home/HeroSection/quickhomeloan.mp4";

export default function HeroSection4() {
  const [activeTab, setActiveTab] = useState("first"); // "first" | "refinance"

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT ================= */}
        <div className="space-y-6">

          {/* Tabs */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-full border border-neutral-200">
            <button
              onClick={() => setActiveTab("first")}
              className={`px-6 py-2 text-xs font-semibold rounded-full transition ${
                activeTab === "first"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              First Home Loan
            </button>

            <button
              onClick={() => setActiveTab("refinance")}
              className={`px-6 py-2 text-xs font-semibold rounded-full transition ${
                activeTab === "refinance"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Refinance / Existing
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[0.95]">
              Don’t Just hewq Take a Home Loan —{" "}
              <span className="text-neutral-400">
                Make the Right One.
              </span>
            </h1>

            {/* ✅ Dynamic Description */}
            <p className="text-lg lg:text-xl text-neutral-500 max-w-xl leading-relaxed font-medium">
              {activeTab === "first"
                ? "Unlock true market transparency. See the real cost including processing fees and hidden math banks don't show you."
                : "Switch to a smarter deal. Compare your current rates against the market's best performers and stop overpaying today."}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <div className="text-sm lg:text-lg flex flex-row items-center gap-4">

              {/* Primary */}
              <a
                href="https://myscore.cibil.com/CreditView/enrollShort_new.page?enterprise=CIBIL&offer=FACRA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 lg:px-8 py-4 bg-black text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-800 transition"
              >
                Check Eligibility
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary */}
              <a
                href="/calculators"
                className="w-full sm:w-auto px-4 lg:px-8 py-4 bg-white text-black font-semibold rounded-xl border border-neutral-300 hover:border-black transition text-center"
              >
                Calculate EMI
              </a>
            </div>

            {/* Subtext */}
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-neutral-400">
                No signup required • Takes 2 minutes
              </span>
              <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
              <span className="text-neutral-600">
                Most borrowers overpay ₹Lakhs blindly.
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 text-sm lg:text-base pt-6">
            {[
              { label: "Real Cost Analysis", icon: BarChart3 },
              { label: "100% Transparent", icon: ShieldCheck },
              { label: "Smart Comparisons", icon: Zap },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-neutral-100 rounded-lg">
                    <Icon className="w-4 h-4 text-neutral-700" />
                  </div>

                  <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
       <div className="relative">
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto rounded-[2rem] shadow-xl border border-neutral-200 object-cover"
          />
        </div>
      </div>
    </section>
  );
}