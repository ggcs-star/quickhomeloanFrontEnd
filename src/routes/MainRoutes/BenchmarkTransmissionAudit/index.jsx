import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  CalendarCheck, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  CircleQuestionMark, 
  ArrowRight,
  Zap,
  Headphones,
  Volume2,
  Video,
  Target,
  CirclePlay,
  ChevronRight,
  TrendingUp as TrendUpIcon,
  Clock as ClockIcon,
  Lock,
  Scale,
  BrainCircuit,
  MapPin,
  Shield,
  Landmark,
  CircleAlert
} from 'lucide-react';
import axios from 'axios';

const BenchmarkTransmissionAudit = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  // State for input values
  const [formData, setFormData] = useState({
    principalBalance: 5000000,
    currentROI: 9.25,
    remainingYears: 15,
    cibilScore: 800,
    location: 'Mumbai, Maharashtra'
  });

  // State for calculated values
  const [calculations, setCalculations] = useState({
    marketBenchmark: 7.25,
    transmissionGap: -2.00,
    annualInterestLoss: 100000,
    lifetimeLoss: 1500000
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

  // Handle input changes
  const handleInputChange = (field, value) => {
    if (!isProUser) return;
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || value
    }));
  };

  // Calculate all metrics based on input
  const calculateMetrics = () => {
    if (!isProUser) return;
    
    const { principalBalance, currentROI, remainingYears, cibilScore } = formData;
    
    // Market benchmark calculation (simplified - in real app would use API)
    let marketBenchmark;
    if (cibilScore >= 800) marketBenchmark = 7.25;
    else if (cibilScore >= 750) marketBenchmark = 7.75;
    else if (cibilScore >= 700) marketBenchmark = 8.25;
    else marketBenchmark = 9.00;

    const transmissionGap = marketBenchmark - currentROI;
    
    // Calculate interest loss
    const principal = principalBalance || 0;
    const currentAnnualInterest = principal * (currentROI / 100);
    const benchmarkAnnualInterest = principal * (marketBenchmark / 100);
    const annualInterestLoss = benchmarkAnnualInterest - currentAnnualInterest;
    
    // Calculate lifetime loss (simplified)
    const lifetimeLoss = annualInterestLoss * remainingYears;

    setCalculations({
      marketBenchmark: parseFloat(marketBenchmark.toFixed(2)),
      transmissionGap: parseFloat(transmissionGap.toFixed(2)),
      annualInterestLoss: Math.round(annualInterestLoss),
      lifetimeLoss: Math.round(lifetimeLoss)
    });
  };

  // Recalculate on form data change
  useEffect(() => {
    if (isProUser) {
      calculateMetrics();
    }
  }, [formData, isProUser]);

  // Handle audit button click
  const handleAuditClick = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    calculateMetrics();
    alert('Compliance audit completed! Check the updated results.');
  };

  // Format currency with Indian numbering system
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

  // Get CIBIL rating label
  const getCibilRating = (score) => {
    if (score >= 800) return 'Excellent';
    if (score >= 750) return 'Good';
    if (score >= 700) return 'Fair';
    return 'Poor';
  };

  // Get CIBIL rating color
  const getCibilRatingColor = (score) => {
    if (score >= 800) return 'text-green-600 bg-green-50';
    if (score >= 750) return 'text-blue-600 bg-blue-50';
    if (score >= 700) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  // Audio briefing data
  const audioBriefings = [
    { id: 1, title: 'The 90-Day Reset Mandate', description: 'Understanding the legal reset window for EBLR-linked loans.', duration: '04:12' },
    { id: 2, title: 'Spread Stickiness Audit', description: 'How to identify if your bank is delaying Repo Rate cut transmission.', duration: '05:45' },
    { id: 3, title: 'Tenure Ballooning Defense', description: 'Strategic response to silent tenure extensions during rate spikes.', duration: '06:20' },
    { id: 4, title: 'MCLR to EBLR Conversion Legal', description: 'The legal process to shift to a more transparent benchmark.', duration: '07:15' },
    { id: 5, title: 'Step-up EMI Buffer Math', description: 'Calculating the ideal EMI increase to absorb 1% volatility.', duration: '04:50' }
  ];

  // Video masterclass data
  const videoMasterclasses = [
    { id: 1, title: 'Visualizing Rate Shock', duration: '03:30', views: '12,405' },
    { id: 2, title: 'Interest Leakage Heatmap', duration: '05:10', views: '8,920' },
    { id: 3, title: 'Negative Amortization Alert', duration: '04:20', views: '15,100' },
    { id: 4, title: 'Benchmark Accuracy Masterclass', duration: '08:45', views: '5,670' },
    { id: 5, title: 'Escape Velocity Strategy', duration: '06:15', views: '22,300' }
  ];

  // Action items data
  const actionItems = [
    { id: 1, number: '1', title: 'Request Rate Reset', description: 'If your current ROI is higher than the market prime for your CIBIL score, submit a formal request to move to the bank\'s latest spread.', buttonText: 'Draft Request' },
    { id: 2, number: '2', title: 'MCLR to EBLR Switch', description: 'Stop opaque reset cycles. Move to EBLR (External Benchmark Linked Rate) for immediate pass-through of RBI Repo cuts within 90 days.', buttonText: 'Switch Benchmark' },
    { id: 3, number: '3', title: 'Challenge Spread Creep', description: 'Banks often keep spreads high for old customers. Use your \'Excellent\' CIBIL status to negotiate a spread reduction (usually 0.25% savings).', buttonText: 'View Strategy' },
    { id: 4, number: '4', title: 'Audit Reset Frequency', description: 'Verify if the bank has reset your ROI at least 4 times in the last 12 months (quarterly reset). If not, it\'s a direct transmission violation.', buttonText: 'Verify Reset Log' },
    { id: 5, number: '5', title: 'Ombudsman Escalation', description: 'If the bank refuses a rate reset despite a 0.5% gap from their current prime rates, file a grievance via the Banking Ombudsman.', buttonText: 'Escalate Case' }
  ];

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Benchmark Audit</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete transmission analysis, interactive calculators, and personalized recommendations.
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
      <Scale size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
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
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Benchmark Transmission Audit</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Ensuring your bank passes on RBI Repo Rate benefits to you.</p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {!isProUser && !isCheckingAccess && <UpgradeBanner />}

        {/* Main Audit Card */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-md border border-neutral-300 shadow-sm overflow-hidden font-sans">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-neutral-700" />
                    Spread Audit & Market Benchmarking
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">Identify Interest Leakage</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${
                  isProUser ? (
                    calculations.transmissionGap < -1 ? 'bg-red-600 text-white' : 
                    calculations.transmissionGap < 0 ? 'bg-yellow-600 text-white' : 
                    'bg-green-600 text-white'
                  ) : 'bg-gray-500 text-white'
                }`}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {!isProUser ? 'Pro Required' : (
                      calculations.transmissionGap < -1.5 ? 'EXCESSIVE TRANSMISSION' : 
                      calculations.transmissionGap < 0 ? 'MODERATE TRANSMISSION' : 
                      'OPTIMAL TRANSMISSION'
                    )}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Input Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    {/* Principal Balance */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Principal Balance</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.principalBalance}
                            onChange={(e) => handleInputChange('principalBalance', e.target.value)}
                            min="0"
                            step="100000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XX,XXX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ROI and Remaining Years */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Current ROI (%)</label>
                        {isProUser ? (
                          <input 
                            step="0.05"
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.currentROI}
                            onChange={(e) => handleInputChange('currentROI', e.target.value)}
                            min="0"
                            max="20"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX.XX
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Remaining (Yrs)</label>
                        {isProUser ? (
                          <input 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.remainingYears}
                            onChange={(e) => handleInputChange('remainingYears', e.target.value)}
                            min="1"
                            max="30"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CIBIL Score */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">CIBIL Score</label>
                        {isProUser && (
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${getCibilRatingColor(formData.cibilScore)}`}>
                            {getCibilRating(formData.cibilScore)}
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
                        {isProUser ? (
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.cibilScore}
                            onChange={(e) => handleInputChange('cibilScore', e.target.value)}
                            min="300"
                            max="900"
                          />
                        ) : (
                          <div className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XXX
                          </div>
                        )}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <div className="text-[10px] font-medium text-neutral-500">
                            {isProUser ? `${formData.cibilScore}/900` : 'XXX/900'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Location (City)</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
                        {isProUser ? (
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[14px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="text" 
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[14px] text-neutral-900 filter blur-[4px]">
                            XXXXXX
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleAuditClick}
                    disabled={!isProUser}
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Compliance Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Market Benchmark and Gap */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-5 rounded-md border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Market Benchmark</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.marketBenchmark} isPercentage={true} />
                      </div>
                      <p className="text-[12px] text-green-600 font-medium mt-1 uppercase tracking-tight">
                        {isProUser ? `Best for ${getCibilRating(formData.cibilScore)} profile` : 'Pro feature'}
                      </p>
                    </div>
                    <div className={`p-5 rounded-md border transition-all ${
                      isProUser ? (
                        calculations.transmissionGap < 0 ? 'bg-red-50 border-red-500/20' : 'bg-green-50 border-green-500/20'
                      ) : 'bg-gray-50 border-gray-200'
                    }`}>
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Transmission Gap</span>
                      <div className={`text-[16px] font-medium tabular-nums ${
                        isProUser ? (calculations.transmissionGap < 0 ? 'text-red-600' : 'text-green-600') : 'text-gray-500'
                      }`}>
                        <BlurredNumberDisplay value={calculations.transmissionGap} isPercentage={true} />
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">
                        {isProUser ? (
                          calculations.transmissionGap < 0 ? 'Higher than market rates' : 'Lower than market rates'
                        ) : 'Upgrade to see gap analysis'}
                      </p>
                    </div>
                  </div>

                  {/* Loss Calculation */}
                  <div className={`p-6 rounded-md text-white shadow-lg relative overflow-hidden group ${
                    isProUser ? (
                      calculations.annualInterestLoss > 0 ? 'bg-neutral-900' : 'bg-green-700'
                    ) : 'bg-gray-600'
                  }`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-1">
                        <span className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                          isProUser ? (calculations.annualInterestLoss > 0 ? 'text-red-400' : 'text-green-300') : 'text-gray-300'
                        }`}>
                          {isProUser ? (
                            calculations.annualInterestLoss > 0 ? 'Annual Interest Loss' : 'Annual Interest Gain'
                          ) : 'Annual Impact'}
                        </span>
                        <h4 className="text-[22px] font-semibold tracking-tight tabular-nums">
                          <BlurredNumberDisplay value={Math.abs(calculations.annualInterestLoss)} isCurrency={true} />
                        </h4>
                        <p className="text-[12px] text-neutral-300 leading-relaxed italic">
                          {isProUser ? (
                            calculations.annualInterestLoss > 0 
                              ? `Losing ₹${Math.round(Math.abs(calculations.annualInterestLoss) / 12).toLocaleString('en-IN')} per month to inefficiency.`
                              : 'You are getting better than market rates!'
                          ) : 'Upgrade to see monthly impact'}
                        </p>
                      </div>
                      <div className="bg-white/10 px-6 py-3 rounded-md border border-white/10 text-center min-w-[140px]">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">
                          Lifetime {isProUser ? (calculations.annualInterestLoss > 0 ? 'Loss' : 'Gain') : 'Impact'}
                        </div>
                        <div className="text-[18px] font-semibold text-white tabular-nums">
                          <BlurredNumberDisplay value={Math.abs(calculations.lifetimeLoss)} isCurrency={true} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warning Note */}
                  <div className="bg-white p-5 rounded-md border border-neutral-300 flex items-start gap-4">
                    <CircleAlert className="text-yellow-500 shrink-0 mt-0.5 w-5 h-5" />
                    <div className="space-y-1">
                      <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Transmission Right</p>
                      <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                        {isProUser ? (
                          calculations.transmissionGap < -1 
                            ? `Your rate is ${Math.abs(calculations.transmissionGap).toFixed(2)}% higher than the market benchmark for your profile. Banks must reset their EBLR at least once every three months.`
                            : calculations.transmissionGap < 0
                            ? `Your rate is slightly higher than the market benchmark. Consider requesting a rate reset.`
                            : 'Your rate is at or below market benchmark. Good job!'
                        ) : (
                          'Upgrade to Pro to analyze your transmission gap and identify potential interest savings.'
                        )}
                      </p>
                      <button className={`text-[12px] font-bold uppercase mt-2 flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        View Fix 
                        <ArrowRight className="w-3 h-3" />
                      </button>
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
            {/* Audio Briefings */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="w-4 h-4 text-neutral-700" />
                <h4 className="text-[16px] font-medium text-neutral-900">Audio Strategy Briefings (5 Topics)</h4>
              </div>

              <div className="space-y-3">
                {audioBriefings.map((audio) => (
                  <div key={audio.id} className={`bg-white p-5 rounded-md border border-neutral-300 flex items-center justify-between ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isProUser ? 'bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all' : 'bg-neutral-100'} text-neutral-700`}>
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-[15px] font-medium text-neutral-900">{audio.title}</h5>
                        <p className="text-[12px] text-neutral-600 mt-0.5 font-regular">{audio.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <div className="text-[15px] font-medium text-neutral-900 tabular-nums">{audio.duration}</div>
                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Length</span>
                      </div>
                      <button 
                        className={`p-2.5 rounded-md transition-all active:scale-95 ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                        disabled={!isProUser}
                      >
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
                {videoMasterclasses.map((video) => (
                  <div key={video.id} className={`bg-white rounded-md border border-neutral-300 overflow-hidden ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'} flex h-28`}>
                    <div className="w-32 relative shrink-0 bg-neutral-100 flex items-center justify-center">
                      <CirclePlay className={`w-6 h-6 ${isProUser ? 'text-neutral-700' : 'text-neutral-400'}`} />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h5 className="text-[14px] font-medium text-neutral-900 leading-tight line-clamp-1">{video.title}</h5>
                        <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-neutral-500 uppercase tracking-tighter">
                          <span className="flex items-center gap-1">
                            <ClockIcon className="w-3 h-3" />
                            {video.duration}
                          </span>
                          <span className="flex items-center gap-1 text-black">
                            <Target className="w-3 h-3" />
                            {isProUser ? video.views : 'XX,XXX'} Views
                          </span>
                        </div>
                      </div>
                      <button 
                        className={`text-[12px] font-bold uppercase flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
                        disabled={!isProUser}
                      >
                        Watch Now 
                        <ArrowRight className="w-3 h-3" />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-check-big text-neutral-700">
              <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <h3 className="text-[18px] font-medium text-neutral-900 tracking-tight">Actions to Perform</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionItems.map((action) => (
              <div key={action.id} className="bg-white p-6 rounded-md border border-neutral-300 shadow-sm flex flex-col h-full border-t-4 border-t-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-50 text-black flex items-center justify-center font-bold text-[14px]">{action.number}</div>
                  <h4 className="text-[16px] font-medium text-neutral-900">{action.title}</h4>
                </div>
                <p className="text-[14px] text-neutral-600 font-regular leading-relaxed mb-6 flex-grow">{action.description}</p>
                <button 
                  className={`w-full py-3 rounded-md text-[14px] font-semibold uppercase tracking-widest transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!isProUser}
                >
                  {!isProUser && !isCheckingAccess ? 'Pro Feature' : action.buttonText}
                </button>
              </div>
            ))}

            {/* Status Card */}
            <div className={`p-6 rounded-md text-white shadow-lg flex flex-col justify-center relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[12px] uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  {isProUser ? (
                    calculations.transmissionGap < -1 ? 'High Priority' : 
                    calculations.transmissionGap < 0 ? 'Medium Priority' : 
                    'Low Priority'
                  ) : 'Pro Required'} Audit
                </div>
                <h4 className="text-[18px] font-medium">Transmission Status</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    calculations.transmissionGap < -1 
                      ? 'Perform these actions to recover your interest leakage immediately.' 
                      : calculations.transmissionGap < 0
                      ? 'Consider these actions to optimize your loan terms.'
                      : 'Your loan terms are optimal. Monitor regularly.'
                  ) : (
                    'Upgrade to Pro to view your transmission status and actionable recommendations.'
                  )}
                </p>
              </div>
              <ChevronRight className="absolute -right-8 -bottom-8 opacity-5 w-24 h-24" />
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">What is Spread Creep?</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  `Banks often increase the "Spread" on existing loans when interest rates fall, preventing the benefit from reaching you. 
                  Your current spread gap is ${Math.abs(calculations.transmissionGap).toFixed(2)}%.`
                ) : (
                  'Upgrade to Pro to understand spread creep and how it affects your loan.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">The EBLR Mandate</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  `Per RBI, banks must reset the EBLR at least once in three months. 
                  ${calculations.transmissionGap < -1 
                    ? ` With a ${Math.abs(calculations.transmissionGap).toFixed(2)}% gap, your bank may not be complying.`
                    : ' Your bank appears to be complying with transmission norms.'}`
                ) : (
                  'Upgrade to Pro to check if your bank is complying with EBLR mandates.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <CircleQuestionMark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">How to Fix a Gap?</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  calculations.transmissionGap < -1 
                    ? `Your gap of ${Math.abs(calculations.transmissionGap).toFixed(2)}% is significant. Ask for a rate reset or conversion. Most banks charge 0.25% or ₹5,000 to move you to current rates.`
                    : 'Your rate is competitive. No immediate action needed.'
                ) : (
                  'Upgrade to Pro for personalized strategies to fix your rate gap.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BenchmarkTransmissionAudit;