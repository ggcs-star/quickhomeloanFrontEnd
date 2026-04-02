import React, { useState, useEffect } from "react";
import {
  Gavel,
  FileWarning,
  Send,
  Download,
  Info,
  Scale,
  Building2,
  AlertTriangle,
  ChevronRight,
  CheckCircle,
  Lock,
} from "lucide-react";
import axios from "axios";

const RegulatoryGrievance = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);

  // Check pro access on component mount
  useEffect(() => {
    checkProAccess();
    
    // Listen for subscription updates (from navbar or other components)
    const handleSubscriptionUpdate = (event) => {
      if (event.detail?.isPro === true) {
        checkProAccess(); // Re-check access when subscription is updated
      }
    };
    
    window.addEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    
    return () => {
      window.removeEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    };
  }, []);

  const checkProAccess = async () => {
    setIsCheckingAccess(true);
    try {
      const token = localStorage.getItem("token");
      
      // Check local storage first for quick UI response
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      if (isProLocal) {
        setIsProUser(true);
        setIsCheckingAccess(false);
        return;
      }
      
      // If no token, user is not authenticated
      if (!token) {
        setIsProUser(false);
        setIsCheckingAccess(false);
        return;
      }
      
      // Verify with API
      const response = await axios.get(
        "https://backend.quickhomeloan.in/public/api/check-access",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.data && response.data.access === true) {
        setIsProUser(true);
        localStorage.setItem("is_pro_user", "true");
      } else {
        setIsProUser(false);
        localStorage.setItem("is_pro_user", "false");
      }
    } catch (error) {
      console.error("Error checking pro access:", error);
      // On error, default to false and check local storage as fallback
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      setIsProUser(isProLocal);
    } finally {
      setIsCheckingAccess(false);
    }
  };

  // Grievance items data
  const grievanceItems = [
    {
      level: "CRITICAL",
      levelClass: "bg-red-50 text-red-700 border-red-200",
      title: "Delayed Repo Transmission",
      desc: "Your bank failed to reduce ROI despite an RBI Repo Rate cut within the mandatory 90-day reset window.",
      action: "Draft Legal Notice",
    },
    {
      level: "HIGH",
      levelClass: "bg-orange-50 text-orange-700 border-orange-200",
      title: "Compounded Penal Interest",
      desc: "Verification found the lender is compounding penal interest on top of regular interest—a direct RBI violation.",
      action: "Generate Ombudsman Form",
    },
    {
      level: "CRITICAL",
      levelClass: "bg-red-50 text-red-700 border-red-200",
      title: "Hidden Spread Creep",
      desc: "Your bank increased the spread on an existing loan during a downward cycle without your written consent.",
      action: "Spread Reset Request",
    },
    {
      level: "MEDIUM",
      levelClass: "bg-yellow-50 text-yellow-700 border-yellow-200",
      title: "MCLR Transition Failure",
      desc: "Lender did not offer the option to switch from MCLR to EBLR as per the 2019 Circular requirements.",
      action: "Formal Benchmark Switch",
    },
    {
      level: "HIGH",
      levelClass: "bg-orange-50 text-orange-700 border-orange-200",
      title: "Title Deed Delay",
      desc: "Loan closed, but property documents were not returned within 30 days. You are entitled to ₹5,000/day compensation.",
      action: "Claim Compensation",
    },
  ];

  const handleActionClick = (action) => {
    if (!isProUser) {
      // Show upgrade modal or toast notification
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    // Proceed with the action
    console.log(`Executing action: ${action}`);
    // Add your action logic here
  };

  const handleDownloadTemplate = (action) => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    // Proceed with download
    console.log(`Downloading template for: ${action}`);
    // Add your download logic here
  };

  return (
    <main className="flex-1 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-10 pb-20 text-black pt-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h2 className="text-[28px] font-bold tracking-tight text-neutral-900">
              Grievance & Redressal Hub
            </h2>
            <p className="text-[16px] text-neutral-600 mt-2">
              Legal and regulatory actions to contest bank-side violations and leakages.
            </p>
          </div>

          <div className={`border px-5 py-3 rounded-md flex items-center gap-3 shadow-sm ${
            isProUser 
              ? "bg-green-50 border-green-200" 
              : "bg-white border-neutral-300"
          }`}>
            <Gavel className={isProUser ? "text-green-700" : "text-neutral-700"} size={20} />
            <span className={`text-[12px] font-semibold uppercase tracking-widest ${
              isProUser ? "text-green-700" : "text-neutral-700"
            }`}>
              {isCheckingAccess ? "Checking Access..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
            </span>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">

            {/* Section Header */}
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[20px] font-semibold flex items-center gap-2 text-neutral-900">
                <FileWarning className="text-black" size={20} />
                Detected Actionable Grievances
              </h3>

              <div className="flex items-center gap-1.5 text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                5 Active Cases
              </div>
            </div>

            {/* Cards */}
            {grievanceItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-md border border-neutral-300 shadow-sm hover:border-black transition-all"
              >
                <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest border ${item.levelClass}`}
                      >
                        {item.level}
                      </span>
                      <h4 className="text-[16px] font-semibold text-neutral-900">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-[14px] text-neutral-700 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] font-bold text-neutral-500 uppercase">
                      <CheckCircle size={12} className="text-neutral-700" />
                      RBI Circular: RBI/2023-24/53
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <button 
                      className={`px-6 py-2.5 rounded-md text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 transition ${
                        isProUser && !isCheckingAccess
                          ? "bg-black text-white hover:bg-neutral-800"
                          : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                      }`}
                      onClick={() => handleActionClick(item.action)}
                      disabled={!isProUser || isCheckingAccess}
                    >
                      {!isProUser && !isCheckingAccess ? (
                        <>
                          <Lock size={14} />
                          Upgrade to Pro
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          {item.action}
                        </>
                      )}
                    </button>

                    <button 
                      className={`text-[12px] font-bold uppercase flex items-center gap-1 transition ${
                        isProUser && !isCheckingAccess
                          ? "text-neutral-500 hover:text-black"
                          : "text-neutral-400 cursor-not-allowed"
                      }`}
                      onClick={() => handleDownloadTemplate(item.action)}
                      disabled={!isProUser || isCheckingAccess}
                    >
                      <Download size={14} />
                      View Template
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State */}
            <div className="bg-neutral-50 border border-dashed border-neutral-300 p-8 rounded-md text-center text-neutral-500">
              <Info className="mx-auto mb-3 text-neutral-400" size={32} />
              <p className="font-medium text-neutral-600">
                No additional regulatory violations identified in current audit.
              </p>
              <p className="text-[12px] mt-1 text-neutral-500">
                Re-run statement analyzer if you have new documents.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">

            {/* Rights Card */}
            <div className="bg-white p-8 rounded-md border border-neutral-300 shadow-sm">
              <Scale className="text-neutral-700 mb-6" size={32} />
              <h4 className="text-[18px] font-semibold text-neutral-900 mb-2">
                Your Right to Redressal
              </h4>
              <p className="text-[14px] text-neutral-600 mb-6 leading-relaxed">
                If the bank fails to resolve your grievance within 30 days, you
                can escalate directly to the RBI Ombudsman.
              </p>

              <button 
                className={`w-full border py-3 rounded-md text-[13px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition ${
                  isProUser && !isCheckingAccess
                    ? "border-neutral-300 hover:border-black hover:bg-neutral-50 text-neutral-700"
                    : "border-neutral-200 text-neutral-400 cursor-not-allowed bg-neutral-50"
                }`}
                onClick={() => handleActionClick("Regulatory Handbook")}
                disabled={!isProUser || isCheckingAccess}
              >
                {!isProUser && !isCheckingAccess ? (
                  <>
                    <Lock size={14} />
                    Pro Feature
                  </>
                ) : (
                  <>
                    Regulatory Handbook
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Ombudsman */}
            <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 ${
              isProUser && !isCheckingAccess 
                ? "border-l-black border-neutral-300" 
                : "border-l-neutral-400 border-neutral-200"
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className={isProUser && !isCheckingAccess ? "text-black" : "text-neutral-400"} size={18} />
                <h4 className={`text-[16px] font-semibold ${isProUser && !isCheckingAccess ? "text-neutral-900" : "text-neutral-500"}`}>
                  Ombudsman Escalation
                </h4>
                {!isProUser && !isCheckingAccess && (
                  <span className="text-[10px] font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                    Pro
                  </span>
                )}
              </div>

              <p className={`text-[14px] mb-4 leading-relaxed ${
                isProUser && !isCheckingAccess ? "text-neutral-600" : "text-neutral-400"
              }`}>
                Filing a case with the Banking Ombudsman is free of charge and
                carries legal weight.
              </p>

              {!isProUser && !isCheckingAccess ? (
                <div className="flex gap-3 p-3 bg-neutral-100 rounded-md border border-neutral-200">
                  <Lock className="text-neutral-500" size={16} />
                  <span className="text-[12px] text-neutral-600 font-medium">
                    Upgrade to Pro to access Ombudsman escalation tools
                  </span>
                </div>
              ) : (
                <div className="flex gap-3 p-3 bg-neutral-50 rounded-md border border-neutral-200">
                  <AlertTriangle className="text-orange-600" size={16} />
                  <span className="text-[12px] text-neutral-600 font-medium">
                    Do not sign "Full & Final Settlement" if the principal amount is in dispute.
                  </span>
                </div>
              )}
            </div>

            {/* Pro Upgrade Banner - Only show if not pro */}
            {!isProUser && !isCheckingAccess && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-md border border-indigo-200">
                <div className="flex items-center gap-3 mb-3">
                  <Gavel className="text-indigo-600" size={24} />
                  <h4 className="text-[16px] font-bold text-indigo-900">Unlock All Features</h4>
                </div>
                <p className="text-[13px] text-indigo-800 mb-4">
                  Get access to legal notices, ombudsman forms, and complete grievance management tools.
                </p>
                <button 
                  className="w-full bg-indigo-600 text-white py-2.5 rounded-md text-[13px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition"
                  onClick={() => {
                    // Trigger pro modal from navbar
                    window.dispatchEvent(new CustomEvent("openProModal"));
                  }}
                >
                  Upgrade to Pro
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegulatoryGrievance;