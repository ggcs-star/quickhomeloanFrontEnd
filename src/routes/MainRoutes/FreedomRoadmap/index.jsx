import React, { useState, useEffect } from 'react';
import {
  Trophy, Compass, History, Zap, TrendingDown, Sparkles,
  BrainCircuit, Timer, Map, CircleAlert, SquareCheckBig,
  Headphones, Video, Volume2, CirclePlay, Target, ArrowRight,
  ChevronRight, ShieldCheck, BrainCircuit as BrainCircuitIcon,
  Timer as TimerIcon, Map as MapIcon, CircleAlert as CircleAlertIcon,
  Target as TargetIcon, Lock
} from 'lucide-react';
import axios from 'axios';

const FreedomRoadmap = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  // Loan data state
  const [loanData, setLoanData] = useState({
    originalSanction: 7500000,
    currentOutstanding: 5500000,
    monthlyEMI: 65000,
    roi: 9.15,
    additionalRepayment: 0
  });

  // Calculated state
  const [roadmapData, setRoadmapData] = useState({
    journeyComplete: 26.67, // 2M repaid of 7.5M = 26.67%
    repaidAmount: 2000000,
    freedomDate: 'June 2037',
    yearsLeft: 11,
    monthsLeft: 4,
    interestLeakage: 3366637,
    interestPerMonth: 41938
  });

  // Milestone progress
  const [progress, setProgress] = useState({
    progressPercentage: 26.67,
    tippingPointDate: 'December 2031',
    debtFreeDate: 'June 2037'
  });

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

  // Update calculations when loan data changes
  useEffect(() => {
    if (isProUser) {
      calculateRoadmap();
    }
  }, [loanData, isProUser]);

  const calculateRoadmap = () => {
    if (!isProUser) return;
    
    const repaid = loanData.originalSanction - loanData.currentOutstanding;
    const journeyComplete = (repaid / loanData.originalSanction) * 100;
    
    // Calculate interest leakage (simplified calculation)
    const remaining = loanData.currentOutstanding;
    const annualInterest = (remaining * loanData.roi) / 100;
    const interestLeakage = Math.round(annualInterest * 10); // 10 years approx
    
    // Calculate years left based on EMI and ROI
    const monthlyRate = loanData.roi / 12 / 100;
    const totalEMI = loanData.monthlyEMI + loanData.additionalRepayment;
    
    // Simplified time calculation
    const monthsLeft = Math.ceil(
      Math.log(totalEMI / (totalEMI - remaining * monthlyRate)) / 
      Math.log(1 + monthlyRate)
    );
    
    const yearsLeft = Math.floor(monthsLeft / 12);
    const remainingMonths = monthsLeft % 12;
    
    // Calculate freedom date (current year + years left)
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const freedomYear = currentYear + yearsLeft + Math.floor((currentMonth + remainingMonths) / 12);
    const freedomMonth = (currentMonth + remainingMonths) % 12;
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Tipping point calculation (when principal > interest)
    const tippingPointMonths = Math.ceil(monthsLeft * 0.6); // 60% of total time
    const tippingYear = currentYear + Math.floor(tippingPointMonths / 12);
    const tippingMonth = monthNames[(currentMonth + tippingPointMonths) % 12];
    
    setRoadmapData({
      journeyComplete: parseFloat(journeyComplete.toFixed(2)),
      repaidAmount: repaid,
      freedomDate: `${monthNames[freedomMonth]} ${freedomYear}`,
      yearsLeft,
      monthsLeft: remainingMonths,
      interestLeakage,
      interestPerMonth: Math.round(remaining * monthlyRate)
    });

    setProgress({
      progressPercentage: journeyComplete,
      tippingPointDate: `${tippingMonth} ${tippingYear}`,
      debtFreeDate: `${monthNames[freedomMonth]} ${freedomYear}`
    });
  };

  const handleInputChange = (field, value) => {
    if (!isProUser) return;
    const numValue = parseFloat(value) || 0;
    setLoanData(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const handleSliderChange = (e) => {
    if (!isProUser) return;
    const value = parseInt(e.target.value) || 0;
    setLoanData(prev => ({
      ...prev,
      additionalRepayment: value
    }));
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
  const BlurredNumberDisplay = ({ value, className = "", isPercentage = false, isCurrency = false, isMonths = false }) => {
    if (isProUser || isCheckingAccess) {
      let displayValue = value;
      if (isPercentage) displayValue = `${value}%`;
      else if (isCurrency) displayValue = formatCurrency(value);
      else if (isMonths) displayValue = `${value}M`;
      return <span className={className}>{displayValue}</span>;
    }
    let placeholder = "XX";
    if (isPercentage) placeholder = "XX%";
    else if (isCurrency) placeholder = "₹XX,XXX";
    else if (isMonths) placeholder = "XXM";
    return (
      <span className={`inline-block filter blur-[4px] select-none ${className}`} style={{ WebkitFilter: 'blur(4px)' }}>
        {placeholder}
      </span>
    );
  };

  // Actions data
  const actions = [
    {
      id: 1,
      title: "Refinance Audit",
      description: "Compare your current 9.15% ROI with the market prime (8.50%) to see if a transfer saves ₹4.2L.",
      buttonText: "Start Audit"
    },
    {
      id: 2,
      title: "Prepayment Milestone",
      description: "Achieve the 50% principal reduction milestone 18 months early by paying just ₹2L extra this year.",
      buttonText: "Prepay Now"
    },
    {
      id: 3,
      title: "Spread Reset",
      description: "Request the bank to reset your spread to match the new customer benchmark (saves ₹1.8k/mo).",
      buttonText: "Draft Request"
    },
    {
      id: 4,
      title: "EMI Step-Up",
      description: "Increase EMI by ₹5,000 every year to reach zero-debt in 9 years instead of 15.",
      buttonText: "View Roadmap"
    },
    {
      id: 5,
      title: "Insurance Refund",
      description: "As your principal drops, request the insurer to recalibrate and refund the excess mortgage premium.",
      buttonText: "Audit Premium"
    }
  ];

  // Audio briefings data
  const audioBriefings = [
    { title: "The 90-Day Reset Mandate", description: "Understanding the legal reset window for EBLR-linked loans.", length: "04:12" },
    { title: "Spread Stickiness Audit", description: "How to identify if your bank is delaying Repo Rate cut transmission.", length: "05:45" },
    { title: "Tenure Ballooning Defense", description: "Strategic response to silent tenure extensions during rate spikes.", length: "06:20" },
    { title: "MCLR to EBLR Conversion Legal", description: "The legal process to shift to a more transparent benchmark.", length: "07:15" },
    { title: "Step-up EMI Buffer Math", description: "Calculating the ideal EMI increase to absorb 1% volatility.", length: "04:50" }
  ];

  // Visual masterclasses data
  const visualMasterclasses = [
    { title: "Visualizing Rate Shock", length: "03:30", views: "12,405", color: "bg-neutral-100" },
    { title: "Interest Leakage Heatmap", length: "05:10", views: "8,920", color: "bg-neutral-100" },
    { title: "Negative Amortization Alert", length: "04:20", views: "15,100", color: "bg-neutral-100" },
    { title: "Benchmark Accuracy Masterclass", length: "08:45", views: "5,670", color: "bg-neutral-100" },
    { title: "Escape Velocity Strategy", length: "06:15", views: "22,300", color: "bg-neutral-100" }
  ];

  // Info cards data
  const infoCards = [
    {
      id: 1,
      title: "The 50% Milestone",
      description: "Repaying 50% of the sanctioned principal is the 'Escape Velocity' point. From here, daily interest burn drops significantly below the principal recovery amount.",
      icon: TargetIcon,
      color: "border-l-black",
      iconColor: "text-black"
    },
    {
      id: 2,
      title: "Amortization Crossover",
      description: "The 'Tipping Point' happens when your EMI finally pays more principal than interest. Identifying this date helps you time your balance transfers effectively.",
      icon: MapIcon,
      color: "border-l-black",
      iconColor: "text-black"
    },
    {
      id: 3,
      title: "Right to Repayment",
      description: "Under RBI Charter of Rights, you have the right to request a tenure reduction instead of EMI reduction whenever the benchmark rate falls.",
      icon: ShieldCheck,
      color: "border-l-black",
      iconColor: "text-black"
    }
  ];

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Freedom Roadmap</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete milestone tracking, interactive calculators, and personalized debt freedom strategies.
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
      <Trophy size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
        isProUser ? "text-green-700" : "text-gray-600"
      }`}>
        {isCheckingAccess ? "Checking..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
      </span>
    </div>
  );

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white">
      <div className="max-w-[1200px] mx-auto space-y-12 pb-20 font-sans text-neutral-900">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold tracking-tight text-neutral-900">
              Freedom Roadmap & Milestone Audit
            </h2>
            <p className="text-[14px] text-neutral-600 mt-1">
              Evaluate your progress acceleration and projected debt-free milestones.
            </p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {/* {!isProUser && !isCheckingAccess && <UpgradeBanner />} */}

        {/* Main Roadmap Section */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-md border border-neutral-300 overflow-hidden shadow-sm font-sans">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-neutral-700" />
                    <h3 className="text-[18px] font-medium text-neutral-900">
                      Debt Freedom Roadmap Audit
                    </h3>
                  </div>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-wider">
                    Simulating the exact path to zero liability and journey milestones.
                  </p>
                </div>
                <div className={`border px-5 py-2.5 rounded-md flex items-center gap-3 ${isProUser ? 'bg-white border-neutral-300' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isProUser ? 'bg-green-600' : 'bg-gray-400'}`}></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700">
                    {isProUser ? 'Active Tracking' : 'Pro Required'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column - Inputs */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-4">
                    {/* Original Sanction */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                        <Trophy className="w-3 h-3" />
                        Original Sanction
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-medium text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 focus:ring-1 focus:ring-neutral-700 outline-none transition-all"
                            type="number" 
                            value={loanData.originalSanction}
                            onChange={(e) => handleInputChange('originalSanction', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XX,XXX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Current Outstanding */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                        <History className="w-3 h-3" />
                        Current Outstanding
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-medium text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 focus:ring-1 focus:ring-neutral-700 outline-none transition-all"
                            type="number" 
                            value={loanData.currentOutstanding}
                            onChange={(e) => handleInputChange('currentOutstanding', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XX,XXX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* EMI and ROI */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                          <Zap className="w-3 h-3" />
                          Monthly EMI
                        </label>
                        {isProUser ? (
                          <input 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none"
                            type="number" 
                            value={loanData.monthlyEMI}
                            onChange={(e) => handleInputChange('monthlyEMI', e.target.value)}
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX,XXX
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                          <TrendingDown className="w-3 h-3" />
                          ROI (%)
                        </label>
                        {isProUser ? (
                          <input 
                            step="0.05"
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none"
                            type="number" 
                            value={loanData.roi}
                            onChange={(e) => handleInputChange('roi', e.target.value)}
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX.XX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Accelerator Slider */}
                    <div className="bg-neutral-50 p-5 rounded-md border border-neutral-300 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[12px] font-semibold text-neutral-900 uppercase tracking-widest flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-black" />
                          Accelerator
                        </span>
                        <span className="text-[15px] font-medium text-black tabular-nums">
                          <BlurredNumberDisplay value={loanData.additionalRepayment} isCurrency={true} />
                        </span>
                      </div>
                      {isProUser ? (
                        <input
                          min="0"
                          max="50000"
                          step="1000"
                          value={loanData.additionalRepayment}
                          onChange={handleSliderChange}
                          className="w-full h-1.5 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md"
                          type="range"
                        />
                      ) : (
                        <div className="w-full h-1.5 bg-neutral-200 rounded-full opacity-50"></div>
                      )}
                      <p className="text-[12px] text-neutral-500 font-regular text-center italic">
                        Additional monthly principal repayment.
                      </p>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide uppercase transition-all shadow-sm flex items-center justify-center gap-2 ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                    disabled={!isProUser}
                  >
                    <BrainCircuitIcon className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Compliance Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Progress Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Journey Complete Progress Circle */}
                    <div className="bg-white p-5 rounded-md border border-neutral-300 flex flex-col items-center justify-center text-center shadow-sm">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3"></circle>
                          <circle 
                            cx="18" 
                            cy="18" 
                            r="16" 
                            fill="none" 
                            stroke="#2E7D32" 
                            strokeWidth="3" 
                            strokeDasharray={`${isProUser ? roadmapData.journeyComplete : 0}, 100`}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[16px] font-medium text-neutral-900">
                            <BlurredNumberDisplay value={roadmapData.journeyComplete} isPercentage={true} />
                          </span>
                        </div>
                      </div>
                      <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest">
                        Journey Complete
                      </span>
                      <div className="text-[15px] font-medium text-neutral-900 mt-1 tabular-nums">
                        <BlurredNumberDisplay value={roadmapData.repaidAmount} isCurrency={true} /> Repaid
                      </div>
                    </div>

                    {/* Freedom Date Projection */}
                    <div className={`p-6 rounded-md text-white shadow-lg relative overflow-hidden group ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
                      <div className="relative z-10 space-y-4">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                          Freedom Date Projection
                        </span>
                        <div className="text-[20px] font-medium tracking-tight">
                          {isProUser ? roadmapData.freedomDate : 'XX XXXX'}
                        </div>
                        <div className="flex items-center gap-2 text-[14px] text-neutral-300">
                          <TimerIcon className="w-4 h-4 text-green-400" />
                          {isProUser ? `${roadmapData.yearsLeft}Y ${roadmapData.monthsLeft}M Left` : 'XXY XXM Left'}
                        </div>
                        <div className="pt-4 border-t border-white/10">
                          <div className="flex justify-between items-center text-[12px]">
                            <span className="text-neutral-400 uppercase font-medium">
                              Interest Leakage
                            </span>
                            <span className="text-red-400 font-medium tabular-nums">
                              <BlurredNumberDisplay value={roadmapData.interestLeakage} isCurrency={true} />
                            </span>
                          </div>
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flag absolute -right-4 -bottom-4 text-white/5 group-hover:scale-110 transition-transform duration-700" aria-hidden="true">
                        <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Milestone Map */}
                  <div className="bg-white p-6 rounded-md border border-neutral-300 space-y-6 shadow-sm">
                    <div className="flex items-center gap-2">
                      <MapIcon className="w-4 h-4 text-neutral-700" />
                      <h4 className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest">
                        The Milestone Map
                      </h4>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-1 bg-neutral-100 rounded-full flex items-center">
                      <div 
                        className="absolute left-0 h-full bg-green-600 rounded-full transition-all duration-1000"
                        style={{ width: `${isProUser ? roadmapData.journeyComplete : 0}%` }}
                      ></div>
                      <div className="w-full flex justify-between relative">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-green-600 border-2 border-white shadow-sm z-10"></div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase mt-2">Sanction</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 ${isProUser ? 'bg-neutral-300' : 'bg-gray-300'}`}></div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase mt-2">Tipping Point</span>
                          <span className="text-[9px] text-neutral-500 mt-1">
                            {isProUser ? progress.tippingPointDate : 'XX XXXX'}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 ${isProUser ? 'bg-neutral-200' : 'bg-gray-300'}`}></div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase mt-2">Debt Free</span>
                          <span className="text-[9px] text-neutral-500 mt-1">
                            {isProUser ? progress.debtFreeDate : 'XX XXXX'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Critical Insight */}
                    <div className="bg-yellow-50 border border-yellow-600/20 rounded-md p-4 flex gap-3">
                      <CircleAlertIcon className="w-4.5 h-4.5 text-yellow-600 shrink-0 mt-0.5" />
                      <p className="text-[12px] text-neutral-900 font-regular leading-relaxed">
                        <strong>Critical Insight:</strong> Interest is currently costing you <BlurredNumberDisplay value={roadmapData.interestPerMonth} isCurrency={true} /> per month. Tipping Point is the date when your principal portion exceeds interest in the EMI.
                      </p>
                    </div>
                  </div>

                  <button className={`text-[14px] font-semibold uppercase flex items-center gap-1.5 px-1 ${isProUser ? 'text-black hover:underline group' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                    View Fix
                    <ArrowRight className={`w-3.5 h-3.5 ${isProUser ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions to Perform Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <SquareCheckBig className="w-5 h-5 text-neutral-700" />
            <h3 className="text-[18px] font-medium text-neutral-900 tracking-tight">
              Actions to Perform
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action) => (
              <div key={action.id} className="bg-white p-6 rounded-md border border-neutral-300 shadow-sm flex flex-col h-full border-t-4 border-t-black hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-50 text-black flex items-center justify-center font-bold text-[14px]">
                    {action.id}
                  </div>
                  <h4 className="text-[16px] font-medium text-neutral-900">{action.title}</h4>
                </div>
                <p className="text-[14px] text-neutral-600 font-regular leading-relaxed mb-6 flex-grow">
                  {action.description}
                </p>
                <button 
                  className={`w-full py-3 rounded-md text-[14px] font-semibold uppercase tracking-widest transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!isProUser}
                >
                  {!isProUser && !isCheckingAccess ? 'Pro Feature' : action.buttonText}
                </button>
              </div>
            ))}
            
            {/* Roadmap Audit Done Card */}
            <div className={`p-6 rounded-md text-white shadow-lg flex flex-col justify-center relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[12px] uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  Audit Verified
                </div>
                <h4 className="text-[18px] font-medium">Roadmap Audit Done</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    'Complete these 5 tasks to accelerate your journey to zero-debt by over 36 months.'
                  ) : (
                    'Upgrade to Pro to access actionable tasks and accelerate your debt freedom journey.'
                  )}
                </p>
              </div>
              <ChevronRight className="absolute -right-8 -bottom-8 opacity-5 w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Interactive Risk Education Section */}
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-neutral-700" />
              Interactive Risk Education
            </h3>
            <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest">
              Library v4.2 Active
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Audio Briefings */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="w-5 h-5 text-neutral-700" />
                <h4 className="text-[16px] font-medium text-neutral-900">
                  Audio Strategy Briefings (5 Topics)
                </h4>
              </div>
              
              <div className="space-y-3">
                {audioBriefings.map((briefing, index) => (
                  <div key={index} className={`bg-white p-5 rounded-md border border-neutral-300 flex items-center justify-between ${isProUser ? 'group hover:border-black/30 transition-all shadow-sm' : 'opacity-70'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isProUser ? 'bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all' : 'bg-neutral-100'} text-neutral-700`}>
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-[15px] font-medium text-neutral-900">{briefing.title}</h5>
                        <p className="text-[12px] text-neutral-600 mt-0.5 font-regular">{briefing.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <div className="text-[15px] font-medium text-neutral-900 tabular-nums">
                          {briefing.length}
                        </div>
                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                          Length
                        </span>
                      </div>
                      <button className={`p-2.5 rounded-md transition-all active:scale-95 ${isProUser ? 'bg-black text-white hover:bg-neutral-800 shadow-sm' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={!isProUser}>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Masterclasses */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-5 h-5 text-neutral-700" />
                <h4 className="text-[16px] font-medium text-neutral-900">
                  Visual Masterclasses (5 Topics)
                </h4>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {visualMasterclasses.map((masterclass, index) => (
                  <div key={index} className={`bg-white rounded-md border border-neutral-300 overflow-hidden ${isProUser ? 'group hover:border-black/30 transition-all shadow-sm' : 'opacity-70'} flex h-28`}>
                    <div className={`w-32 ${masterclass.color} relative shrink-0 flex items-center justify-center`}>
                      <CirclePlay className={`w-6 h-6 ${isProUser ? 'text-neutral-700' : 'text-neutral-400'}`} />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h5 className="text-[14px] font-medium text-neutral-900 leading-tight line-clamp-1">
                          {masterclass.title}
                        </h5>
                        <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-neutral-500 uppercase tracking-tighter">
                          <span className="flex items-center gap-1">
                            <ClockIcon className="w-3 h-3" /> {masterclass.length}
                          </span>
                          <span className="flex items-center gap-1 text-black">
                            <Target className="w-3 h-3" /> 
                            {isProUser ? masterclass.views : 'XX,XXX'} Views
                          </span>
                        </div>
                      </div>
                      <button className={`text-[12px] font-bold uppercase flex items-center gap-1 ${isProUser ? 'text-black hover:underline group' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        Watch Now
                        <ArrowRight className={`w-3 h-3 ${isProUser ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className={`bg-white p-6 rounded-md border shadow-sm border-l-4 ${card.color} ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
                <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center mb-4">
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <h4 className="text-[16px] font-medium text-neutral-900 mb-2">{card.title}</h4>
                <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                  {isProUser ? card.description : 'Upgrade to Pro to access this milestone insight and accelerate your debt freedom journey.'}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compliance Note */}
        <p className="text-[12px] text-neutral-500 font-regular leading-relaxed italic text-center">
          *Compliance Note: Projections assume no future Repo Rate changes. Real-time resets may affect estimated freedom dates.
        </p>
      </div>
    </main>
  );
};

// Clock icon component
const ClockIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 6v6l4 2"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

export default FreedomRoadmap;