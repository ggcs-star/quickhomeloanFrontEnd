import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Flame,
  Clock,
  CircleAlert,
  FileText,
  ZapOff,
  Scale,
  HeartPulse,
  ArrowRight,
  Compass,
  Lock
} from 'lucide-react';
import axios from 'axios';

const HomeDashboard = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);

  // Check pro access on component mount
  useEffect(() => {
    checkProAccess();
    
    // Listen for subscription updates
    const handleSubscriptionUpdate = (event) => {
      if (event.detail?.isPro === true) {
        checkProAccess();
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
      
      // Check local storage first
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      if (isProLocal) {
        setIsProUser(true);
        setIsCheckingAccess(false);
        return;
      }
      
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
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      setIsProUser(isProLocal);
    } finally {
      setIsCheckingAccess(false);
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };

  // Blurred number display component
  const BlurredNumberDisplay = ({ value, className = "", isPercentage = false, isCurrency = false }) => {
    if (isProUser || isCheckingAccess) {
      let displayValue = value;
      if (isPercentage) displayValue = `${value}%`;
      else if (isCurrency) displayValue = formatCurrency(value);
      return <span className={className}>{displayValue}</span>;
    }
    let placeholder = "XX";
    if (isPercentage) placeholder = "XX%";
    else if (isCurrency) placeholder = "₹XX,XXX";
    return (
      <span className={`inline-block filter blur-[4px] select-none ${className}`} style={{ WebkitFilter: 'blur(4px)' }}>
        {placeholder}
      </span>
    );
  };

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Dashboard Insights</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete financial analytics, detailed audit snapshots, and personalized recommendations.
          </p>
          <button 
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-[13px] font-semibold hover:bg-indigo-700 transition"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("openProModal"));
            }}
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );

  // Pro status indicator
  const ProStatusIndicator = () => (
    <div className={`border px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm ${
      isProUser 
        ? "bg-green-50 border-green-200" 
        : "bg-white border-gray-200"
    }`}>
      <ShieldCheck size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
        isProUser ? "text-green-700" : "text-gray-600"
      }`}>
        {isCheckingAccess ? "Checking..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
      </span>
    </div>
  );

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white">
      <div className="max-w-[1200px] mx-auto space-y-12 pb-20 font-sans px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Home Dashboard</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Your real-time loan compliance and cost exposure.</p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {/* {!isProUser && !isCheckingAccess && <UpgradeBanner />} */}

        {/* Main Card - Money Leak Tracker */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-md border border-neutral-300 shadow-sm overflow-hidden font-sans">
            {/* Top Border */}
            <div className="h-1 w-full bg-black"></div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-600" />
                    Your Home Loan Money Leak
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-wider">Interest Burn Tracker</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md border flex items-center gap-3 ${isProUser ? 'bg-white border-neutral-300' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isProUser ? 'bg-red-600 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className={`text-[12px] font-semibold uppercase tracking-widest ${isProUser ? 'text-red-600' : 'text-gray-500'}`}>
                    {isProUser ? 'LIVE TRACKING' : 'PRO REQUIRED'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Interest Leak Today */}
                  <div className="space-y-2">
                    <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block">
                      Interest leaking today:
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl md:text-5xl font-black text-neutral-900 tabular-nums tracking-tighter">
                        <BlurredNumberDisplay value={1301.37} isCurrency={true} />
                      </div>
                      {isProUser && (
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <Flame className="w-6 h-6 text-red-600 animate-pulse" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Verification Note */}
                  <div className="bg-neutral-50 p-4 rounded-md border border-neutral-300 flex items-start gap-3">
                    <CircleAlert className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                    <p className="text-[12px] text-neutral-600 font-regular">
                      Verified Interest Calculation Engine (8.75% ROI / ₹1.7Cr Principal)
                    </p>
                  </div>
                </div>

                {/* Right Column - Stats */}
                <div className="lg:col-span-5 space-y-4">
                  <div className={`p-5 rounded-md border shadow-sm ${isProUser ? 'bg-white border-neutral-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-3 mb-2 text-neutral-700">
                      <Clock className="w-4 h-4" />
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest">
                        This month
                      </span>
                    </div>
                    <div className="text-[22px] font-medium text-neutral-900 tabular-nums">
                      <BlurredNumberDisplay value={39041.1} isCurrency={true} />
                    </div>
                    <p className="text-[11px] text-neutral-500 mt-1 font-regular italic">
                      Automatic direct loss projection
                    </p>
                  </div>

                  <div className={`p-5 rounded-md border shadow-sm ${isProUser ? 'bg-red-50 border-red-300' : 'bg-gray-100 border-gray-200'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className={`text-[12px] font-medium uppercase tracking-widest ${isProUser ? 'text-red-600' : 'text-gray-500'}`}>
                        If ignored for 1 year
                      </span>
                    </div>
                    <div className={`text-[22px] font-medium tabular-nums ${isProUser ? 'text-red-600' : 'text-gray-500'}`}>
                      <BlurredNumberDisplay value={475000} isCurrency={true} />
                    </div>
                    <p className={`text-[11px] mt-1 font-regular italic ${isProUser ? 'text-red-500' : 'text-gray-400'}`}>
                      Compounded leakage impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Audit Snapshot */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <CircleAlert className="w-5 h-5 text-neutral-700" />
            <h3 className="text-[18px] font-medium text-neutral-900 tracking-tight">Critical Audit Snapshot</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Statement Analyzer Card */}
            <div className={`bg-white p-5 rounded-md border shadow-sm flex flex-col items-start ${isProUser ? 'group hover:border-black transition-all border-neutral-300' : 'border-gray-200 opacity-70'}`}>
              <div className="flex items-center justify-between w-full mb-3">
                <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black">
                  <FileText className="w-5 h-5" />
                </div>
                {isProUser && (
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                )}
              </div>
              <h4 className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest mb-1">
                Statement Analyzer
              </h4>
              <div className="text-[16px] font-medium text-neutral-900">
                {isProUser ? '3 Docs Scanned' : <span className="filter blur-[3px]">XX Docs</span>}
              </div>
              <p className="text-[12px] text-neutral-500 mt-1 font-regular">
                {isProUser ? 'Last Audit: Today' : 'Pro feature'}
              </p>
            </div>

            {/* Hidden Costs Card */}
            <div className={`bg-white p-5 rounded-md border shadow-sm flex flex-col items-start ${isProUser ? 'group hover:border-black transition-all border-neutral-300' : 'border-gray-200 opacity-70'}`}>
              <div className="flex items-center justify-between w-full mb-3">
                <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black">
                  <ZapOff className="w-5 h-5" />
                </div>
                {isProUser && (
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                )}
              </div>
              <h4 className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest mb-1">
                Hidden Costs
              </h4>
              <div className="text-[16px] font-medium text-neutral-900">
                <BlurredNumberDisplay value={2006} isCurrency={true} /> Found
              </div>
              <p className="text-[12px] text-neutral-500 mt-1 font-regular">
                {isProUser ? '3 Penalties detected' : 'Upgrade to view'}
              </p>
            </div>

            {/* Benchmark Gap Card */}
            <div className={`bg-white p-5 rounded-md border shadow-sm flex flex-col items-start ${isProUser ? 'group hover:border-black transition-all border-neutral-300' : 'border-gray-200 opacity-70'}`}>
              <div className="flex items-center justify-between w-full mb-3">
                <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black">
                  <Scale className="w-5 h-5" />
                </div>
                {isProUser && (
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                )}
              </div>
              <h4 className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest mb-1">
                Benchmark Gap
              </h4>
              <div className="text-[16px] font-medium text-neutral-900">
                <BlurredNumberDisplay value={-0.75} isPercentage={true} /> Gap
              </div>
              <p className="text-[12px] text-neutral-500 mt-1 font-regular">
                {isProUser ? 'Action Recommended' : 'Pro feature'}
              </p>
            </div>

            {/* Continuity Card */}
            <div className={`bg-white p-5 rounded-md border shadow-sm flex flex-col items-start ${isProUser ? 'group hover:border-black transition-all border-neutral-300' : 'border-gray-200 opacity-70'}`}>
              <div className="flex items-center justify-between w-full mb-3">
                <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black">
                  <HeartPulse className="w-5 h-5" />
                </div>
                {isProUser && (
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                )}
              </div>
              <h4 className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest mb-1">
                Continuity
              </h4>
              <div className="text-[16px] font-medium text-neutral-900">
                <BlurredNumberDisplay value={92} /> / 100
              </div>
              <p className="text-[12px] text-neutral-500 mt-1 font-regular">
                {isProUser ? 'Health: Normal' : 'Pro feature'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Transparency Tracker */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-md border border-neutral-300 shadow-sm overflow-hidden font-sans">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="space-y-1">
                    <h3 className="text-[18px] font-medium text-neutral-900 tracking-tight">Transparency & Reset Tracker</h3>
                    <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-wider">Rate and compliance monitoring</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className={`text-[12px] font-semibold uppercase flex items-center gap-1 ${isProUser ? 'text-black hover:underline group' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                      View Fix 
                      <ArrowRight className={`w-3 h-3 ${isProUser ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-5 rounded-md border shadow-sm ${isProUser ? 'bg-white border-neutral-300' : 'bg-gray-50 border-gray-200'}`}>
                    <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">
                      Effective Rate
                    </span>
                    <div className={`text-[16px] font-medium tabular-nums ${isProUser ? 'text-red-600' : 'text-gray-500'}`}>
                      <BlurredNumberDisplay value={9.25} isPercentage={true} /> ROI
                    </div>
                    <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">Current applied rate</p>
                  </div>
                  
                  <div className={`p-5 rounded-md border shadow-sm ${isProUser ? 'bg-white border-neutral-300' : 'bg-gray-50 border-gray-200'}`}>
                    <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">
                      Potential Savings
                    </span>
                    <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                      <BlurredNumberDisplay value={42500} isCurrency={true} /> / yr
                    </div>
                    <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">With benchmark reset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Freedom Strategy */}
          <div className="lg:col-span-4">
            <div className={`p-6 rounded-md text-white shadow-lg flex flex-col justify-center h-full relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[12px] uppercase tracking-widest">
                  <Compass className="w-4 h-4" />
                  Freedom Strategy
                </div>
                <h4 className="text-[18px] font-medium">Journey Progress</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-neutral-300">Progress</span>
                    <span className="text-[14px] font-medium">
                      <BlurredNumberDisplay value={23.4} isPercentage={true} />
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600" style={{ width: `${isProUser ? 23.4 : 0}%` }}></div>
                  </div>
                  <p className="text-[12px] text-neutral-400 font-regular">
                    {isProUser ? 'Target: 100% debt-free milestone' : 'Upgrade to track progress'}
                  </p>
                </div>
                
                <button 
                  className={`w-full py-3 rounded-md text-[14px] font-semibold uppercase tracking-widest transition-all mt-4 shadow-sm ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-500 text-gray-200 cursor-not-allowed'}`}
                  disabled={!isProUser}
                >
                  {!isProUser && !isCheckingAccess ? 'Upgrade to Pro' : 'Complete Compliance'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDashboard;