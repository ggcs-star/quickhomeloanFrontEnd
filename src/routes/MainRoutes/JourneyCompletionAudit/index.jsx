import React, { useState, useMemo, useEffect } from 'react';
import { 
  Milestone, 
  Timer, 
  BrainCircuit, 
  Zap, 
  Headphones, 
  Volume2, 
  Video, 
  Clock, 
  Target, 
  CirclePlay, 
  SquareCheckBig, 
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Compass,
  Trophy,
  Calendar,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Lock
} from 'lucide-react';
import axios from 'axios';

const JourneyCompletionAudit = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [sanctionedTenure, setSanctionedTenure] = useState(269); // months
  const [pendingInstallments, setPendingInstallments] = useState(206); // months

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

  // Calculate all derived values
  const calculations = useMemo(() => {
    // Convert months to years for display
    const sanctionedYears = (sanctionedTenure / 12).toFixed(2);
    const pendingYears = (pendingInstallments / 12).toFixed(2);
    const completedMonths = sanctionedTenure - pendingInstallments;
    const completedYears = (completedMonths / 12).toFixed(2);
    
    // Freedom Index (percentage completed)
    const freedomIndex = ((completedMonths / sanctionedTenure) * 100).toFixed(2);
    
    // Time served in years and months
    const timeServedYears = Math.floor(completedMonths / 12);
    const timeServedMonths = completedMonths % 12;
    
    // Remaining timeline
    const remainingYears = (pendingInstallments / 12).toFixed(2);
    
    // Total period
    const totalYears = (sanctionedTenure / 12).toFixed(2);
    
    return {
      sanctionedYears,
      pendingYears,
      completedMonths,
      completedYears,
      freedomIndex,
      timeServedYears,
      timeServedMonths,
      remainingYears,
      totalYears
    };
  }, [sanctionedTenure, pendingInstallments]);

  const handleSanctionedTenureChange = (value) => {
    if (!isProUser) return;
    const newValue = Math.max(0, Math.min(600, value)); // Cap at 50 years
    setSanctionedTenure(newValue);
    
    // Auto-adjust pending installments if it exceeds sanctioned tenure
    if (pendingInstallments > newValue) {
      setPendingInstallments(newValue);
    }
  };

  const handlePendingInstallmentsChange = (value) => {
    if (!isProUser) return;
    const newValue = Math.max(0, Math.min(600, value)); // Cap at 50 years
    setPendingInstallments(newValue);
    
    // Auto-adjust sanctioned tenure if it's less than pending installments
    if (sanctionedTenure < newValue) {
      setSanctionedTenure(newValue);
    }
  };

  // Blurred number display component
  const BlurredNumberDisplay = ({ value, className = "", isPercentage = false, isYears = false, isMonths = false }) => {
    if (isProUser || isCheckingAccess) {
      let displayValue = value;
      if (isPercentage) displayValue = `${value}%`;
      else if (isYears) displayValue = `${value} years`;
      else if (isMonths) displayValue = `${value} months`;
      return <span className={className}>{displayValue}</span>;
    }
    // Show blurred placeholder
    let placeholder = "XX";
    if (isPercentage) placeholder = "XX%";
    else if (isYears) placeholder = "XX years";
    else if (isMonths) placeholder = "XX months";
    return (
      <span className={`inline-block filter blur-[4px] select-none ${className}`} style={{ WebkitFilter: 'blur(4px)' }}>
        {placeholder}
      </span>
    );
  };

  const audioTopics = [
    { title: 'The 90-Day Reset Mandate', description: 'Understanding the legal reset window for EBLR-linked loans.', duration: '04:12' },
    { title: 'Spread Stickiness Audit', description: 'How to identify if your bank is delaying Repo Rate cut transmission.', duration: '05:45' },
    { title: 'Tenure Ballooning Defense', description: 'Strategic response to silent tenure extensions during rate spikes.', duration: '06:20' },
    { title: 'MCLR to EBLR Conversion Legal', description: 'The legal process to shift to a more transparent benchmark.', duration: '07:15' },
    { title: 'Step-up EMI Buffer Math', description: 'Calculating the ideal EMI increase to absorb 1% volatility.', duration: '04:50' },
  ];

  const videoTopics = [
    { title: 'Visualizing Rate Shock', duration: '03:30', views: '12,405' },
    { title: 'Interest Leakage Heatmap', duration: '05:10', views: '8,920' },
    { title: 'Negative Amortization Alert', duration: '04:20', views: '15,100' },
    { title: 'Benchmark Accuracy Masterclass', duration: '08:45', views: '5,670' },
    { title: 'Escape Velocity Strategy', duration: '06:15', views: '22,300' },
  ];

  const actions = [
    { number: 1, title: 'Recalculate Principal Share', description: 'Ensure your bank isn\'t silently extending tenure while Repo Rates are falling. Request a principal-only update.', buttonText: 'Complete Compliance' },
    { number: 2, title: 'Benchmark Transition', description: 'If your sanctioned tenure is still linked to MCLR, switch to EBLR for immediate transparency in reset cycles.', buttonText: 'View Fix' },
    { number: 3, title: 'Partial Prepayment Audit', description: `A 5% principal prepayment at this stage can reduce your journey by up to ${Math.floor(pendingInstallments * 0.1)} months. Perform a milestone payment.`, buttonText: 'Continue' },
    { number: 4, title: 'Reset Fee Negotiation', description: sanctionedTenure > 360 ? 'Your tenure exceeds 30 years. You have the right to request a spread reduction without excessive conversion fees.' : 'If your tenure exceeds 30 years, you have the right to request a spread reduction without excessive conversion fees.', buttonText: 'Complete Compliance' },
    { number: 5, title: 'No-Objection Strategy', description: 'Verify your documentation status. Ensure all original deeds are tracked as per your sanctioned timeline.', buttonText: 'View Fix' },
  ];

  const handleCompleteAudit = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    // Calculate if there's tenure ballooning
    const tenureBallooning = sanctionedTenure - pendingInstallments < 0 ? 
      'No tenure ballooning detected' : 
      `Tenure extended by ${sanctionedTenure - pendingInstallments} months`;
    
    alert(`Audit Complete!\n\n` +
          `Freedom Index: ${calculations.freedomIndex}%\n` +
          `Time Served: ${calculations.timeServedYears} years, ${calculations.timeServedMonths} months\n` +
          `Remaining: ${calculations.remainingYears} years\n` +
          `${tenureBallooning}`);
  };

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Journey Audit</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete tenure analysis, interactive calculators, and personalized recommendations.
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
      <Milestone size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
        isProUser ? "text-green-700" : "text-gray-600"
      }`}>
        {isCheckingAccess ? "Checking..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
      </span>
    </div>
  );

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white">
      <div className="max-w-7xl mx-auto space-y-12 pb-20 font-sans">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Journey Completion Audit</h2>
            <p className="text-[14px] text-neutral-600 mt-1">
              Compare your sanctioned tenure against actual pending installments.
            </p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {!isProUser && !isCheckingAccess && <UpgradeBanner />}

        {/* Main Audit Section */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-lg border border-neutral-300 shadow-sm overflow-hidden font-sans">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
                    <Timer className="w-5 h-5 text-neutral-700" />
                    Tenure Audit & Lifecycle Tracking
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">
                    Measure your position in the loan cycle
                  </p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${isProUser ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isProUser ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {isProUser ? 'Audit Engine Active' : 'Pro Required'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Inputs */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">
                        Original Sanctioned Tenure
                      </label>
                      <div className="relative">
                        <ClockIcon className="lucide lucide-clock absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
                        {isProUser ? (
                          <input
                            className="w-full pl-10 pr-16 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700"
                            type="number"
                            value={sanctionedTenure}
                            onChange={(e) => handleSanctionedTenureChange(Number(e.target.value))}
                            min="1"
                            max="600"
                          />
                        ) : (
                          <div className="w-full pl-10 pr-16 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XXX
                          </div>
                        )}
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-neutral-500">
                          Months ({isProUser ? calculations.sanctionedYears : 'XX'} years)
                        </span>
                      </div>
                      <div className="text-[12px] text-neutral-500 mt-1">
                        Total loan period when sanctioned
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">
                        Actual Pending Installments
                      </label>
                      <div className="relative">
                        <CalendarIcon className="lucide lucide-calendar absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
                        {isProUser ? (
                          <input
                            className="w-full pl-10 pr-16 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700"
                            type="number"
                            value={pendingInstallments}
                            onChange={(e) => handlePendingInstallmentsChange(Number(e.target.value))}
                            min="0"
                            max="600"
                          />
                        ) : (
                          <div className="w-full pl-10 pr-16 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XXX
                          </div>
                        )}
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-neutral-500">
                          Months ({isProUser ? calculations.pendingYears : 'XX'} years)
                        </span>
                      </div>
                      <div className="text-[12px] text-neutral-500 mt-1">
                        Months left to complete the loan
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-neutral-50 p-4 rounded-md border border-neutral-300">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-[12px] text-neutral-500 font-medium">Months Completed</div>
                          <div className="text-[16px] font-semibold text-neutral-900">
                            <BlurredNumberDisplay value={calculations.completedMonths} isMonths={true} />
                          </div>
                        </div>
                        <div>
                          <div className="text-[12px] text-neutral-500 font-medium">Years Completed</div>
                          <div className="text-[16px] font-semibold text-neutral-900">
                            <BlurredNumberDisplay value={calculations.completedYears} isYears={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                    onClick={handleCompleteAudit}
                    disabled={!isProUser}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Compliance Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">
                        Freedom Index
                      </span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.freedomIndex} isPercentage={true} />
                      </div>
                      <div className="mt-3 h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 transition-all duration-1000" 
                          style={{ width: `${isProUser ? Math.min(parseFloat(calculations.freedomIndex), 100) : 0}%` }}
                        ></div>
                      </div>
                      <div className="text-[12px] text-neutral-500 mt-2">
                        {isProUser ? (
                          parseFloat(calculations.freedomIndex) < 25 ? 'Early stage - Focus on principal payments' :
                          parseFloat(calculations.freedomIndex) < 50 ? 'Mid journey - Consider refinancing' :
                          parseFloat(calculations.freedomIndex) < 75 ? 'Good progress - Maintain momentum' :
                          'Almost there - Final stretch!'
                        ) : (
                          'Upgrade to Pro to see insights'
                        )}
                      </div>
                    </div>

                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">
                        Time Served
                      </span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={`${calculations.timeServedYears}.${calculations.timeServedMonths}`} isYears={true} />
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1">
                        Months Paid: <BlurredNumberDisplay value={calculations.completedMonths} isMonths={true} />
                      </p>
                      <div className="mt-2 text-[12px] text-black">
                        {isProUser ? (
                          calculations.timeServedYears >= 5 ? '✓ Past golden ratio threshold' : '→ Aim for 5 years'
                        ) : (
                          '→ Pro feature'
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-lg text-white shadow-lg relative overflow-hidden group ${isProUser ? 'bg-neutral-900' : 'bg-neutral-600'}`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-1">
                        <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                          Remaining Timeline
                        </span>
                        <h4 className="text-[20px] font-semibold tracking-tight">
                          <BlurredNumberDisplay value={calculations.remainingYears} isYears={true} />
                        </h4>
                        <p className="text-[12px] text-neutral-300 leading-relaxed italic">
                          Based on current {isProUser ? pendingInstallments : 'XX'} installments.
                        </p>
                        {isProUser && parseFloat(calculations.remainingYears) > 20 && (
                          <p className="text-[12px] text-yellow-400 mt-1">
                            ⚠️ Consider prepayment options
                          </p>
                        )}
                      </div>
                      <div className="bg-white/10 px-6 py-3 rounded-md border border-white/10 text-center min-w-[140px]">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Total Period</div>
                        <div className="text-[16px] font-medium text-white">
                          <BlurredNumberDisplay value={calculations.totalYears} isYears={true} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tenure Comparison */}
                  <div className="bg-white p-4 rounded-md border border-neutral-300">
                    <div className="text-[12px] font-medium text-neutral-500 mb-2">Tenure Comparison</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[13px] text-neutral-600">Sanctioned:</span>
                        <span className="text-[13px] font-medium">
                          <BlurredNumberDisplay value={calculations.sanctionedYears} isYears={true} />
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[13px] text-neutral-600">Remaining:</span>
                        <span className="text-[13px] font-medium">
                          <BlurredNumberDisplay value={calculations.remainingYears} isYears={true} />
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-neutral-100 pt-2">
                        <span className="text-[13px] text-neutral-600">Difference:</span>
                        <span className={`text-[13px] font-medium ${isProUser && sanctionedTenure - pendingInstallments < 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {isProUser ? (
                            <>
                              {Math.abs(sanctionedTenure - pendingInstallments)} months {
                                sanctionedTenure - pendingInstallments < 0 ? 'ahead' : 'behind'
                              }
                            </>
                          ) : (
                            'XX months'
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Risk Education */}
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-neutral-700" />
              Interactive Risk Education
            </h3>
            <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest">Library v4.2 Active</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Audio Strategy Briefings */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="w-4 h-4 text-neutral-700" />
                <h4 className="text-[16px] font-medium text-neutral-900">Audio Strategy Briefings (5 Topics)</h4>
              </div>
              <div className="space-y-3">
                {audioTopics.map((topic, index) => (
                  <div
                    key={index}
                    className={`bg-white p-5 rounded-lg border border-neutral-300 flex items-center justify-between ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isProUser ? 'bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all' : 'bg-neutral-100'} text-neutral-700`}>
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-[15px] font-medium text-neutral-900">{topic.title}</h5>
                        <p className="text-[12px] text-neutral-600 mt-0.5 font-regular">{topic.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <div className="text-[15px] font-medium text-neutral-900 tabular-nums">{topic.duration}</div>
                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Length</span>
                      </div>
                      <button className={`p-2.5 rounded-md transition-all active:scale-[0.95] ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={!isProUser}>
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
                <Video className="w-4 h-4 text-neutral-700" />
                <h4 className="text-[16px] font-medium text-neutral-900">Visual Masterclasses (5 Topics)</h4>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {videoTopics.map((video, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg border border-neutral-300 overflow-hidden ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'} flex h-28`}
                  >
                    <div className="w-32 relative shrink-0 bg-neutral-100 flex items-center justify-center">
                      <CirclePlay className={`w-6 h-6 ${isProUser ? 'text-neutral-700' : 'text-neutral-400'}`} />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h5 className="text-[14px] font-medium text-neutral-900 leading-tight line-clamp-1">
                          {video.title}
                        </h5>
                        <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-neutral-500 uppercase tracking-tighter">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {video.duration}
                          </span>
                          <span className="flex items-center gap-1 text-black">
                            <Target className="w-3 h-3" /> 
                            {isProUser ? video.views : 'XX,XXX'} Views
                          </span>
                        </div>
                      </div>
                      <button className={`text-[12px] font-bold uppercase flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        Watch Now <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions to Perform */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <SquareCheckBig className="w-5 h-5 text-neutral-700" />
            <h3 className="text-[18px] font-medium text-neutral-900 tracking-tight">Actions to Perform</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-neutral-300 shadow-sm flex flex-col h-full border-t-4 border-t-black"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-50 text-black flex items-center justify-center font-bold text-[14px]">
                    {action.number}
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

            {/* Audit Verified Card */}
            <div className={`p-6 rounded-lg text-white shadow-lg flex flex-col justify-center relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-neutral-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-500 font-bold text-[12px] uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  Audit Verified
                </div>
                <h4 className="text-[18px] font-medium">Lifecycle Review Done</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    'Complete these 5 tasks to ensure your journey is optimized for zero-debt.'
                  ) : (
                    'Upgrade to Pro to access actionable tasks and optimize your journey.'
                  )}
                </p>
                {isProUser && (
                  <div className="text-[11px] text-neutral-300 mt-2">
                    Current Status: {parseFloat(calculations.freedomIndex) >= 50 ? 'On track' : 'Needs attention'}
                  </div>
                )}
              </div>
              <ChevronRight className="lucide lucide-chevron-right absolute -right-8 -bottom-8 opacity-5 w-24 h-24" />
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">The Golden Ratio</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  <>
                    Crossing the {calculations.timeServedYears >= 60 ? (
                      <span className="font-semibold text-green-600">60-month (5-year) mark</span>
                    ) : (
                      "60-month (5-year) mark"
                    )} is critical. Most Indian home loans see a significant drop in the outstanding principal acceleration after this point.
                    {calculations.timeServedYears < 5 && " You're approaching this milestone."}
                  </>
                ) : (
                  'Upgrade to Pro to track your golden ratio milestone and optimize your loan journey.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Refinance Window</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  <>
                    The best time to switch your loan is between the 3rd and 7th year, when the principal is still high enough to save significant interest.
                    {calculations.timeServedYears >= 3 && calculations.timeServedYears <= 7 && (
                      <span className="block mt-2 text-black font-medium">✓ You're in the optimal refinance window!</span>
                    )}
                  </>
                ) : (
                  'Upgrade to Pro to identify your optimal refinance window and maximize savings.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Tenure Verification</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  <>
                    Always verify "Pending Installments" manually. Banks often increase tenure silently to keep EMIs constant when Repo Rates rise.
                    {sanctionedTenure - pendingInstallments < 0 && (
                      <span className="block mt-2 text-black font-medium">
                        ⚠️ Detected possible tenure extension
                      </span>
                    )}
                  </>
                ) : (
                  'Upgrade to Pro to detect silent tenure extensions and protect your loan terms.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JourneyCompletionAudit;