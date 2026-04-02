import React, { useState, useEffect } from 'react';
import { 
  Scale, BrainCircuit, CircleAlert, TrendingUp, 
  ShieldAlert, CircleQuestionMark, Zap, Headphones, Volume2, 
  Video, Target as TargetIcon, CirclePlay, ChevronRight, ArrowRight, 
  Clock as ClockIcon, Lock, Shield, Info, Lightbulb, Landmark,
  ReceiptText, CheckCircle, Percent
} from 'lucide-react';
import axios from 'axios';

const TaxIntelligenceCertificates = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  const [formData, setFormData] = useState({
    section24: 200000,
    section80C: 84200
  });

  const [calculations, setCalculations] = useState({
    section24Max: 200000,
    section80CMax: 150000,
    section24Percentage: 100,
    section80CPercentage: 56.13,
    expectedInterest: 242000,
    safeClaimRangeMin: 180000,
    safeClaimRangeMax: 200000
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

  // Calculate percentages and safe range
  useEffect(() => {
    if (isProUser) {
      const section24Percentage = (formData.section24 / calculations.section24Max) * 100;
      const section80CPercentage = (formData.section80C / calculations.section80CMax) * 100;
      
      const safeClaimMin = Math.max(150000, formData.section24 * 0.75);
      const safeClaimMax = Math.min(200000, formData.section24);
      
      setCalculations(prev => ({
        ...prev,
        section24Percentage,
        section80CPercentage,
        safeClaimRangeMin: Math.round(safeClaimMin / 1000) * 1000,
        safeClaimRangeMax: Math.round(safeClaimMax / 1000) * 1000
      }));
    }
  }, [formData, calculations.section24Max, calculations.section80CMax, isProUser]);

  const handleInputChange = (field, value) => {
    if (!isProUser) return;
    const numValue = parseFloat(value) || 0;
    
    if (field === 'section24') {
      setFormData(prev => ({
        ...prev,
        [field]: Math.min(numValue, calculations.section24Max)
      }));
    } else if (field === 'section80C') {
      setFormData(prev => ({
        ...prev,
        [field]: Math.min(numValue, calculations.section80CMax)
      }));
    }
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
      if (isPercentage) displayValue = `${value.toFixed(1)}%`;
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

  // Get tax utilization color
  const getTaxUtilizationColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600 bg-green-50';
    if (percentage >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  // Audio briefing data
  const audioBriefings = [
    { id: 1, title: 'Section 24(b) Deep Dive', description: 'Understanding interest deduction limits for self-occupied vs rental properties.', duration: '04:30' },
    { id: 2, title: 'Section 80C Optimization', description: 'Maximizing principal repayment benefits within the ₹1.5L cap.', duration: '05:15' },
    { id: 3, title: 'Provisional Certificate Guide', description: 'How to obtain and verify bank interest certificates for tax filing.', duration: '06:45' },
    { id: 4, title: 'Co-Borrower Tax Splitting', description: 'Strategies to double tax benefits through joint ownership.', duration: '07:20' },
    { id: 5, title: 'Pre-EMI Interest Claim', description: 'Claiming construction-phase interest in 5 equal installments.', duration: '04:50' }
  ];

  // Video masterclass data
  const videoMasterclasses = [
    { id: 1, title: 'Tax Benefit Calculator', duration: '03:30', views: '19,405' },
    { id: 2, title: 'Interest Certificate Audit', duration: '05:10', views: '14,920' },
    { id: 3, title: 'Deduction Timeline Visualizer', duration: '04:20', views: '23,100' },
    { id: 4, title: 'Property Type Impact Chart', duration: '08:45', views: '11,670' },
    { id: 5, title: 'Tax Planning Roadmap', duration: '06:15', views: '30,300' }
  ];

  // Action items data
  const actionItems = [
    { 
      id: 1, 
      number: '1', 
      title: 'Provisional Cert', 
      description: 'Download your bank\'s latest provisional interest certificate to lock in Sec 24(b) claims.', 
      buttonText: 'Download Cert'
    },
    { 
      id: 2, 
      number: '2', 
      title: 'Insurance Surrender', 
      description: 'Surrender unexpired mortgage insurance for a pro-rata refund upon partial prepayment.', 
      buttonText: 'Claim Refund'
    },
    { 
      id: 3, 
      number: '3', 
      title: '80C Optimization', 
      description: 'Verify if your principal repayment is reaching the ₹1.5L cap. Adjust ELSS investments accordingly.', 
      buttonText: 'Check 80C'
    },
    { 
      id: 4, 
      number: '4', 
      title: 'Co-Borrower Split', 
      description: 'Split interest benefits between spouse/parents to double the Sec 24(b) deduction to ₹4 Lakhs.', 
      buttonText: 'View Strategy'
    },
    { 
      id: 5, 
      number: '5', 
      title: 'Pre-EMI Interest', 
      description: 'Claim construction-phase interest in 5 equal installments post-possession as per IT Act.', 
      buttonText: 'Start Claim'
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
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Tax Intelligence</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete tax benefit analysis, optimization strategies, and personalized recommendations.
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
      <ReceiptText size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
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
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Tax Intelligence & Certificates</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Project your Section 24(b) and 80C benefits for FY 2024-25.</p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {/* {!isProUser && !isCheckingAccess && <UpgradeBanner />} */}

        {/* Main Audit Card */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-lg border border-neutral-300 shadow-sm overflow-hidden font-sans">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-neutral-700" />
                    Benefit Utilization Audit
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">Section 24(b) & 80C Deduction Analysis</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${
                  isProUser ? (
                    calculations.section24Percentage >= 80 ? 'bg-green-600 text-white' : 
                    calculations.section24Percentage >= 50 ? 'bg-yellow-600 text-white' : 
                    'bg-red-600 text-white'
                  ) : 'bg-gray-500 text-white'
                }`}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {!isProUser ? 'Pro Required' : (
                      calculations.section24Percentage >= 80 ? 'HIGH UTILIZATION' : 
                      calculations.section24Percentage >= 50 ? 'MODERATE UTILIZATION' : 
                      'LOW UTILIZATION'
                    )}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Input Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    {/* Section 24(b) - Interest */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Section 24(b) - Interest</label>
                        <span className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={formData.section24} isCurrency={true} />
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.section24}
                            onChange={(e) => handleInputChange('section24', e.target.value)}
                            min="0"
                            max={calculations.section24Max}
                            step="1000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XXX
                          </div>
                        )}
                      </div>
                      {isProUser && (
                        <>
                          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500"
                              style={{ width: `${calculations.section24Percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">
                            <span>₹0</span>
                            <span>{formatCurrency(calculations.section24Max)}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Section 80C - Principal */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Section 80C - Principal</label>
                        <span className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={formData.section80C} isCurrency={true} />
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.section80C}
                            onChange={(e) => handleInputChange('section80C', e.target.value)}
                            min="0"
                            max={calculations.section80CMax}
                            step="1000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XXX
                          </div>
                        )}
                      </div>
                      {isProUser && (
                        <>
                          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-500"
                              style={{ width: `${calculations.section80CPercentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">
                            <span>₹0</span>
                            <span>{formatCurrency(calculations.section80CMax)}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Information Note */}
                    <div className="bg-white p-4 rounded-lg border border-neutral-300 flex items-start gap-3">
                      <CircleAlert className="text-blue-500 shrink-0 mt-0.5 w-5 h-5" />
                      <div className="space-y-1">
                        <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Compliance Tip</p>
                        <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                          If the house is self-occupied, the interest deduction is capped at ₹2 Lakhs. If rented out, the entire interest can be offset against rental income.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      if (!isProUser) {
                        alert("This feature requires a Pro subscription. Please upgrade to continue.");
                        return;
                      }
                      alert('Tax Intelligence Audit completed! Check the updated results.');
                    }}
                    disabled={!isProUser}
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Tax Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Tax Utilization Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-5 rounded-lg border transition-all ${
                      isProUser ? (
                        calculations.section24Percentage >= 80 ? 'bg-green-50 border-green-500/20' : 
                        calculations.section24Percentage >= 50 ? 'bg-yellow-50 border-yellow-500/20' : 
                        'bg-red-50 border-red-500/20'
                      ) : 'bg-gray-50 border-gray-200'
                    }`}>
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Section 24(b) Utilization</span>
                      <div className={`text-[16px] font-medium tabular-nums ${
                        isProUser ? (
                          calculations.section24Percentage >= 80 ? 'text-green-600' : 
                          calculations.section24Percentage >= 50 ? 'text-yellow-600' : 
                          'text-red-600'
                        ) : 'text-gray-500'
                      }`}>
                        <BlurredNumberDisplay value={calculations.section24Percentage} isPercentage={true} />
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">
                        {isProUser ? (
                          calculations.section24Percentage >= 80 ? 'Maximum benefit claimed' : 'Room for optimization'
                        ) : 'Upgrade to see details'}
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Total Potential Deduction</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={formData.section24 + formData.section80C} isCurrency={true} />
                      </div>
                      <p className="text-[12px] text-green-600 font-medium mt-1 uppercase tracking-tight">
                        Combined tax benefit
                      </p>
                    </div>
                  </div>

                  {/* Tax Benefit Calculation */}
                  <div className={`p-6 rounded-lg text-white shadow-lg relative overflow-hidden group ${
                    isProUser ? (
                      (formData.section24 + formData.section80C) > 300000 ? 'bg-neutral-900' : 
                      (formData.section24 + formData.section80C) > 200000 ? 'bg-neutral-800' : 
                      'bg-green-700'
                    ) : 'bg-gray-600'
                  }`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-1">
                        <span className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                          isProUser ? (
                            (formData.section24 + formData.section80C) > 300000 ? 'text-green-400' : 
                            (formData.section24 + formData.section80C) > 200000 ? 'text-yellow-400' : 
                            'text-green-300'
                          ) : 'text-gray-300'
                        }`}>
                          Tax Benefit Impact
                        </span>
                        <h4 className="text-[22px] font-semibold tracking-tight tabular-nums">
                          <BlurredNumberDisplay value={formData.section24 + formData.section80C} isCurrency={true} />
                        </h4>
                        <p className="text-[12px] text-neutral-300 leading-relaxed italic">
                          {isProUser ? (
                            calculations.section24Percentage >= 80 
                              ? 'You are maximizing your Section 24(b) benefits.'
                              : 'Consider optimizing your interest certificate for higher benefits.'
                          ) : 'Upgrade to see optimization tips'}
                        </p>
                      </div>
                      <div className="bg-white/10 px-6 py-3 rounded-md border border-white/10 text-center min-w-[140px]">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Safe Claim Range</div>
                        <div className="text-[18px] font-semibold text-white tabular-nums">
                          <BlurredNumberDisplay value={calculations.safeClaimRangeMin} isCurrency={true} /> - 
                          <BlurredNumberDisplay value={calculations.safeClaimRangeMax} isCurrency={true} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Provisional Projection */}
                  <div className="bg-white p-5 rounded-lg border border-neutral-300 flex items-start gap-4">
                    <Landmark className="text-blue-500 shrink-0 mt-0.5 w-5 h-5" />
                    <div className="space-y-1">
                      <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Provisional Projection</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="space-y-1">
                          <div className="text-[14px] font-medium text-neutral-900">Expected Interest</div>
                          <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                            <BlurredNumberDisplay value={calculations.expectedInterest} isCurrency={true} />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[14px] font-medium text-neutral-900">80C Utilization</div>
                          <div className="text-[16px] font-medium text-yellow-600 tabular-nums">
                            <BlurredNumberDisplay value={calculations.section80CPercentage} isPercentage={true} />
                          </div>
                        </div>
                      </div>
                      <button className={`text-[12px] font-bold uppercase mt-2 flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        Generate Provisional Certificate 
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
                  <div key={audio.id} className={`bg-white p-5 rounded-lg border border-neutral-300 flex items-center justify-between ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'}`}>
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
                      <button className={`p-2.5 rounded-md transition-all active:scale-95 ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={!isProUser}>
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
                  <div key={video.id} className={`bg-white rounded-lg border border-neutral-300 overflow-hidden ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'} flex h-28`}>
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
                            <TargetIcon className="w-3 h-3" />
                            {isProUser ? video.views : 'XX,XXX'} Views
                          </span>
                        </div>
                      </div>
                      <button className={`text-[12px] font-bold uppercase flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
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
              <div key={action.id} className="bg-white p-6 rounded-lg border border-neutral-300 shadow-sm flex flex-col h-full border-t-4 border-t-black">
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
            <div className={`p-6 rounded-lg text-white shadow-lg flex flex-col justify-center relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[12px] uppercase tracking-widest">
                  <Shield className="w-4 h-4" />
                  {isProUser ? (
                    calculations.section24Percentage >= 80 ? 'High Priority' : 
                    calculations.section24Percentage >= 50 ? 'Medium Priority' : 
                    'Low Priority'
                  ) : 'Pro Required'} Audit
                </div>
                <h4 className="text-[18px] font-medium">Tax Audit Done</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    calculations.section24Percentage >= 80 
                      ? 'You are maximizing tax benefits. Maintain documentation for future filings.' 
                      : calculations.section24Percentage >= 50
                      ? 'Consider optimizing your tax deductions with these actions.'
                      : 'Significant tax benefits available. Take action before March 31st.'
                  ) : (
                    'Upgrade to Pro to view your tax optimization status and actionable recommendations.'
                  )}
                </p>
              </div>
              <ChevronRight className="absolute -right-8 -bottom-8 opacity-5 w-24 h-24" />
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Info className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Section 24(b) Benefits</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'Deduct up to ₹2 Lakhs per annum for self-occupied property. For let-out properties, there is no upper limit, but set-off against other income heads is capped at ₹2 Lakhs.'
                ) : (
                  'Upgrade to Pro to understand Section 24(b) benefits and maximize your tax savings.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Section 80C Optimization</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'Deduct up to ₹1.5 Lakhs. This limit is shared with other investments like PPF and ELSS. Property must not be sold within 5 years of possession to keep this benefit.'
                ) : (
                  'Upgrade to Pro to optimize your Section 80C deductions and maximize tax benefits.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <CircleQuestionMark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Pre-EMI Interest</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'Claim construction-phase interest in 5 equal installments post-possession as per IT Act. Ensure you obtain the property possession certificate before claiming.'
                ) : (
                  'Upgrade to Pro to understand how to claim pre-EMI interest benefits.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaxIntelligenceCertificates;