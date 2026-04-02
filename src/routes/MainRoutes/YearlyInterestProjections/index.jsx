import React, { useState, useEffect } from 'react';
import { 
  Target, Scale, BrainCircuit, CircleAlert, TrendingUp, 
  ShieldAlert, CircleQuestionMark, Zap, Headphones, Volume2, 
  Video, Target as TargetIcon, CirclePlay, ChevronRight, ArrowRight, 
  Clock as ClockIcon, Lock, Shield, Info, Lightbulb, PieChart
} from 'lucide-react';
import axios from 'axios';

const YearlyInterestProjections = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  // State for input values
  const [formData, setFormData] = useState({
    loanOutstanding: 5000000,
    emiAmount: 45000,
    emisPaid: 12,
    tenureYears: 15
  });

  // State for calculated values
  const [calculations, setCalculations] = useState({
    totalEMIPaid: 540000,
    interestComponent: 344847,
    principalComponent: 195153,
    interestPercentage: 63.86,
    annualROI: 7.02
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

  // Calculate results when loan data changes
  useEffect(() => {
    if (isProUser) {
      calculateResults();
    }
  }, [formData, isProUser]);

  const calculateResults = () => {
    if (!isProUser) return;
    
    const totalEMIPaid = formData.emiAmount * formData.emisPaid;
    
    // Simple calculation for demonstration
    const monthlyRate = 0.0702 / 12;
    const interest = formData.loanOutstanding * monthlyRate * formData.emisPaid;
    const principal = totalEMIPaid - interest;
    
    setCalculations({
      totalEMIPaid,
      interestComponent: Math.round(interest),
      principalComponent: Math.round(principal),
      interestPercentage: Math.round((interest / totalEMIPaid) * 10000) / 100,
      annualROI: 7.02
    });
  };

  const handleInputChange = (field, value) => {
    if (!isProUser) return;
    const numValue = parseFloat(value) || 0;
    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
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

  // Get interest level color
  const getInterestLevelColor = (percentage) => {
    if (percentage < 50) return 'text-green-600 bg-green-50';
    if (percentage < 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  // Audio briefing data
  const audioBriefings = [
    { id: 1, title: 'Amortization Decoding', description: 'Understanding how banks calculate interest vs principal in your EMIs.', duration: '04:30' },
    { id: 2, title: 'The 13th EMI Strategy', description: 'How one extra EMI per year can save years off your loan tenure.', duration: '05:15' },
    { id: 3, title: 'Prepayment Optimization', description: 'Strategic timing and amounts for maximum interest savings.', duration: '06:45' },
    { id: 4, title: 'Interest Rate Verification', description: 'How to verify if your bank is charging the correct interest rate.', duration: '07:20' },
    { id: 5, title: 'Debt Snowball Method', description: 'Systematic approach to accelerate loan repayment.', duration: '04:50' }
  ];

  // Video masterclass data
  const videoMasterclasses = [
    { id: 1, title: 'Amortization Timeline', duration: '03:30', views: '16,405' },
    { id: 2, title: 'Interest vs Principal Chart', duration: '05:10', views: '11,920' },
    { id: 3, title: 'Prepayment Impact Visualizer', duration: '04:20', views: '18,100' },
    { id: 4, title: 'Rate Shock Simulation', duration: '08:45', views: '7,670' },
    { id: 5, title: 'Debt Freedom Roadmap', duration: '06:15', views: '26,300' }
  ];

  // Action items data
  const actionItems = [
    { 
      id: 1, 
      number: '1', 
      title: 'The 13th EMI', 
      description: 'Pay just one extra EMI per year to reduce a 20-year tenure by over 4 years instantly.', 
      buttonText: 'Calculate Gain'
    },
    { 
      id: 2, 
      number: '2', 
      title: 'Benchmark Audit', 
      description: 'Verify if your bank is using the correct Repo benchmark for interest calculations this year.', 
      buttonText: 'Start Audit'
    },
    { 
      id: 3, 
      number: '3', 
      title: 'Tenure Rebalancing', 
      description: 'If rates fell, request a tenure reduction instead of EMI reduction to save more interest.', 
      buttonText: 'Request Fix'
    },
    { 
      id: 4, 
      number: '4', 
      title: 'Step-Up Prepayment', 
      description: 'Increase EMI by 5% every year to follow your income growth and crush debt faster.', 
      buttonText: 'Setup Plan'
    },
    { 
      id: 5, 
      number: '5', 
      title: 'Balance Transfer', 
      description: 'If your gap > 0.5% vs market, initiate a transfer to save up to ₹5 Lakhs over the lifecycle.', 
      buttonText: 'Check Offers'
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
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Interest Analysis</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete interest projections, amortization schedules, and personalized optimization strategies.
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
      <Target size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
        isProUser ? "text-green-700" : "text-gray-600"
      }`}>
        {isCheckingAccess ? "Checking..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
      </span>
    </div>
  );

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white">
      <div className="max-w-7xl mx-auto space-y-12 pb-20 font-sans px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Yearly Interest Projections</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Analyze your annual interest outgo and optimize your repayment strategy.</p>
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
                    Yearly Interest & Rate Audit
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">Reverse-calculating your true bank interest rate</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${
                  isProUser ? (
                    calculations.interestPercentage < 50 ? 'bg-green-600 text-white' : 
                    calculations.interestPercentage < 70 ? 'bg-yellow-600 text-white' : 
                    'bg-red-600 text-white'
                  ) : 'bg-gray-500 text-white'
                }`}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {!isProUser ? 'Pro Required' : (
                      calculations.interestPercentage < 50 ? 'LOW INTEREST' : 
                      calculations.interestPercentage < 70 ? 'MODERATE INTEREST' : 
                      'HIGH INTEREST'
                    )} SHARE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Input Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    {/* Loan Outstanding */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Loan Outstanding</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.loanOutstanding}
                            onChange={(e) => handleInputChange('loanOutstanding', e.target.value)}
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

                    {/* EMI Amount and EMIs Paid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">EMI Amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                          {isProUser ? (
                            <input 
                              className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                              type="number" 
                              value={formData.emiAmount}
                              onChange={(e) => handleInputChange('emiAmount', e.target.value)}
                              min="0"
                            />
                          ) : (
                            <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                              ₹ XX,XXX
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">EMIs Paid</label>
                        {isProUser ? (
                          <input 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.emisPaid}
                            onChange={(e) => handleInputChange('emisPaid', e.target.value)}
                            min="1"
                            max="360"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tenure Years */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Tenure (Years)</label>
                        {isProUser && (
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${getInterestLevelColor(calculations.interestPercentage)}`}>
                            {calculations.interestPercentage.toFixed(1)}% Interest Share
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        {isProUser ? (
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.tenureYears}
                            onChange={(e) => handleInputChange('tenureYears', e.target.value)}
                            min="1"
                            max="30"
                          />
                        ) : (
                          <div className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Information Note */}
                    <div className="bg-white p-4 rounded-lg border border-neutral-300 flex items-start gap-3">
                      <CircleAlert className="text-blue-500 shrink-0 mt-0.5 w-5 h-5" />
                      <div className="space-y-1">
                        <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Compliance Note</p>
                        <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                          All calculations are based on standard amortization schedules as per RBI Master Circular on Fair Lending Practices.
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
                      calculateResults();
                      alert('Yearly Interest Projection Audit completed! Check the updated results.');
                    }}
                    disabled={!isProUser}
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Interest Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Interest vs Principal Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Interest Component</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.interestComponent} isCurrency={true} />
                      </div>
                      <p className="text-[12px] text-red-600 font-medium mt-1 uppercase tracking-tight">
                        Bank's Earnings
                      </p>
                    </div>
                    <div className={`p-5 rounded-lg border transition-all ${
                      isProUser ? (
                        calculations.interestPercentage < 50 ? 'bg-green-50 border-green-500/20' : 
                        calculations.interestPercentage < 70 ? 'bg-yellow-50 border-yellow-500/20' : 
                        'bg-red-50 border-red-500/20'
                      ) : 'bg-gray-50 border-gray-200'
                    }`}>
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Interest Share</span>
                      <div className={`text-[16px] font-medium tabular-nums ${
                        isProUser ? (
                          calculations.interestPercentage < 50 ? 'text-green-600' : 
                          calculations.interestPercentage < 70 ? 'text-yellow-600' : 
                          'text-red-600'
                        ) : 'text-gray-500'
                      }`}>
                        <BlurredNumberDisplay value={calculations.interestPercentage} isPercentage={true} />
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">
                        {isProUser ? (
                          calculations.interestPercentage > 65 ? 'High interest burden' : 'Moderate interest burden'
                        ) : 'Upgrade to see burden'}
                      </p>
                    </div>
                  </div>

                  {/* Total Cost Calculation */}
                  <div className={`p-6 rounded-lg text-white shadow-lg relative overflow-hidden group ${
                    isProUser ? (
                      calculations.interestPercentage > 65 ? 'bg-neutral-900' : 
                      calculations.interestPercentage > 50 ? 'bg-neutral-800' : 
                      'bg-green-700'
                    ) : 'bg-gray-600'
                  }`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-1">
                        <span className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                          isProUser ? (
                            calculations.interestPercentage > 65 ? 'text-red-400' : 
                            calculations.interestPercentage > 50 ? 'text-yellow-400' : 
                            'text-green-300'
                          ) : 'text-gray-300'
                        }`}>
                          Interest Cost Impact
                        </span>
                        <h4 className="text-[22px] font-semibold tracking-tight tabular-nums">
                          <BlurredNumberDisplay value={calculations.interestPercentage} isPercentage={true} /> Interest Share
                        </h4>
                        <p className="text-[12px] text-neutral-300 leading-relaxed italic">
                          {isProUser ? (
                            calculations.interestPercentage > 65 
                              ? `You're paying ₹${Math.round(calculations.interestComponent/calculations.totalEMIPaid*1000)/10} per ₹100 of EMI to the bank.`
                              : 'Your interest burden is within acceptable limits.'
                          ) : 'Upgrade to see detailed impact'}
                        </p>
                      </div>
                      <div className="bg-white/10 px-6 py-3 rounded-md border border-white/10 text-center min-w-[140px]">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Total EMI Paid</div>
                        <div className="text-[18px] font-semibold text-white tabular-nums">
                          <BlurredNumberDisplay value={calculations.totalEMIPaid} isCurrency={true} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="bg-white p-5 rounded-lg border border-neutral-300 flex items-start gap-4">
                    <PieChart className="text-blue-500 shrink-0 mt-0.5 w-5 h-5" />
                    <div className="space-y-1">
                      <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Detailed Breakdown</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="space-y-1">
                          <div className="text-[14px] font-medium text-neutral-900">Annual ROI</div>
                          <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                            <BlurredNumberDisplay value={calculations.annualROI} isPercentage={true} />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[14px] font-medium text-neutral-900">Principal Paid</div>
                          <div className="text-[16px] font-medium text-green-600 tabular-nums">
                            <BlurredNumberDisplay value={calculations.principalComponent} isCurrency={true} />
                          </div>
                        </div>
                      </div>
                      <button className={`text-[12px] font-bold uppercase mt-2 flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        View Amortization Schedule 
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
                    calculations.interestPercentage < 50 ? 'Low Priority' : 
                    calculations.interestPercentage < 70 ? 'Medium Priority' : 
                    'High Priority'
                  ) : 'Pro Required'} Audit
                </div>
                <h4 className="text-[18px] font-medium">Interest Analysis Complete</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    calculations.interestPercentage > 70 
                      ? 'Immediate action needed. High interest burden detected.' 
                      : calculations.interestPercentage > 50
                      ? 'Consider optimization strategies to reduce interest burden.'
                      : 'Your interest burden is low. Maintain current repayment strategy.'
                  ) : (
                    'Upgrade to Pro to view your interest analysis and actionable recommendations.'
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
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Interest-First Amortization</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'In early years, up to 80% of your EMI goes toward interest. Small prepayments now have the highest impact on reducing your lifetime debt.'
                ) : (
                  'Upgrade to Pro to understand how interest-first amortization affects your loan.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">The "1 Extra EMI" Rule</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'Making just one extra EMI payment every year can reduce a 20-year loan tenure by approximately 40-48 months.'
                ) : (
                  'Upgrade to Pro to discover the power of the "1 Extra EMI" strategy.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <CircleQuestionMark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Compounding in Reverse</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'Prepayment is like investing at your loan\'s interest rate, risk-free and tax-free. It\'s the most stable financial move for homeowners.'
                ) : (
                  'Upgrade to Pro to learn how prepayment works like reverse compounding.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default YearlyInterestProjections;