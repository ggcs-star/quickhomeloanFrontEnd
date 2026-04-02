import React, { useState, useEffect } from 'react';
import { 
  Target, Scale, BrainCircuit, CircleAlert, TrendingUp, 
  ShieldAlert, CircleQuestionMark, Zap, Headphones, Volume2, 
  Video, Target as TargetIcon, CirclePlay, ChevronRight, ArrowRight, 
  Clock as ClockIcon, Lock, Shield, Info, Lightbulb, Percent,
  CheckCircle, ShieldCheck, AlertCircle
} from 'lucide-react';
import axios from 'axios';

const PrepaymentForeclosureRights = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  const [formData, setFormData] = useState({
    prepaymentAmount: 500000,
    loanOutstanding: 5000000
  });

  const [calculations, setCalculations] = useState({
    interestSaved: 925000,
    tenureGain: 41,
    interestRate: 8.75
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

  // Calculate savings when prepayment amount changes
  useEffect(() => {
    if (isProUser) {
      calculateSavings();
    }
  }, [formData, isProUser]);

  const calculateSavings = () => {
    if (!isProUser) return;
    
    // Simple calculation logic
    const percentage = formData.prepaymentAmount / formData.loanOutstanding;
    
    setCalculations({
      interestSaved: Math.round(percentage * 1850000),
      tenureGain: Math.round(percentage * 82),
      interestRate: 8.75
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

  const handleSliderChange = (e) => {
    if (!isProUser) return;
    const value = parseInt(e.target.value);
    setFormData(prev => ({
      ...prev,
      prepaymentAmount: value
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
  const BlurredNumberDisplay = ({ value, className = "", isPercentage = false, isCurrency = false, isMonths = false }) => {
    if (isProUser || isCheckingAccess) {
      let displayValue = value;
      if (isPercentage) displayValue = `${value}%`;
      else if (isCurrency) displayValue = formatCurrency(value);
      else if (isMonths) displayValue = `${value} Months`;
      return <span className={className}>{displayValue}</span>;
    }
    let placeholder = "XX";
    if (isPercentage) placeholder = "XX%";
    else if (isCurrency) placeholder = "₹XX,XXX";
    else if (isMonths) placeholder = "XX Months";
    return (
      <span className={`inline-block filter blur-[4px] select-none ${className}`} style={{ WebkitFilter: 'blur(4px)' }}>
        {placeholder}
      </span>
    );
  };

  // Get savings level color
  const getSavingsLevelColor = (savings) => {
    if (savings > 1000000) return 'text-green-600 bg-green-50';
    if (savings > 500000) return 'text-yellow-600 bg-yellow-50';
    return 'text-blue-600 bg-blue-50';
  };

  // Audio briefing data
  const audioBriefings = [
    { id: 1, title: 'Zero Penalty Rights', description: 'Understanding your legal rights for penalty-free prepayment on floating rate loans.', duration: '04:30' },
    { id: 2, title: 'No-Dues Certification', description: 'How to obtain proper certification and documentation after loan closure.', duration: '05:15' },
    { id: 3, title: 'Title Deed Recovery', description: 'Ensuring timely return of property documents within regulatory timelines.', duration: '06:45' },
    { id: 4, title: 'Insurance Premium Refund', description: 'Claiming pro-rata refunds on mortgage insurance after early closure.', duration: '07:20' },
    { id: 5, title: 'Legal Notice Preparation', description: 'Preparing compliant legal notices for illegal foreclosure charges.', duration: '04:50' }
  ];

  // Video masterclass data
  const videoMasterclasses = [
    { id: 1, title: 'Prepayment Impact Calculator', duration: '03:30', views: '18,405' },
    { id: 2, title: 'Foreclosure Timeline Visualizer', duration: '05:10', views: '12,920' },
    { id: 3, title: 'Document Recovery Checklist', duration: '04:20', views: '21,100' },
    { id: 4, title: 'Penalty Challenge Playbook', duration: '08:45', views: '9,670' },
    { id: 5, title: 'Debt Freedom Journey', duration: '06:15', views: '28,300' }
  ];

  // Action items data
  const actionItems = [
    { 
      id: 1, 
      number: '1', 
      title: 'Verify Penalty Exemption', 
      description: 'Individual floating-rate loans have 0% foreclosure fees. Verify your sanction letter\'s penalty clause.', 
      buttonText: 'Audit Clause'
    },
    { 
      id: 2, 
      number: '2', 
      title: 'Request No-Dues Cert', 
      description: 'Obtain a formal acknowledgement of full principal recovery within 15 days of foreclosure.', 
      buttonText: 'Draft Request'
    },
    { 
      id: 3, 
      number: '3', 
      title: 'Title Deed Audit', 
      description: 'Request the bank to specify the location of original deeds to ensure 30-day return compliance.', 
      buttonText: 'Locate Deeds'
    },
    { 
      id: 4, 
      number: '4', 
      title: 'Penal Interest Refund', 
      description: 'If you were overcharged penal interest during the closure period, request a reversal.', 
      buttonText: 'Claim Refund'
    },
    { 
      id: 5, 
      number: '5', 
      title: 'Insurance Surrender', 
      description: 'Apply for a pro-rata refund of your mortgage insurance premium if closing before term.', 
      buttonText: 'Surrender Now'
    }
  ];

  // Checklist items
  const checklistItems = [
    "Original Property Title Deeds",
    "NOC from the Bank (Nodal Signatory)",
    "Final Payment Amortization Schedule",
    "Zero-Balance Account Certificate",
    "Encumbrance Certificate (Post-Closure)",
    "Power of Attorney Revocation"
  ];

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Prepayment Analysis</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete prepayment simulations, savings calculations, and personalized foreclosure guidance.
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
      <div className="max-w-7xl mx-auto space-y-12 pb-20 font-sans px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Prepayment & Foreclosure Rights</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Simulate your path to zero-debt and verify regulatory compliance.</p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {!isProUser && !isCheckingAccess && <UpgradeBanner />}

        {/* Main Audit Card */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-lg border border-neutral-300 shadow-sm overflow-hidden font-sans">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-neutral-700" />
                    Prepayment Savings Simulator
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">Calculate your path to debt freedom</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${
                  isProUser ? (
                    calculations.interestSaved > 1000000 ? 'bg-green-600 text-white' : 
                    calculations.interestSaved > 500000 ? 'bg-yellow-600 text-white' : 
                    'bg-blue-600 text-white'
                  ) : 'bg-gray-500 text-white'
                }`}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {!isProUser ? 'Pro Required' : (
                      calculations.interestSaved > 1000000 ? 'HIGH SAVINGS' : 
                      calculations.interestSaved > 500000 ? 'MODERATE SAVINGS' : 
                      'POTENTIAL SAVINGS'
                    )}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Input Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    {/* Prepayment Amount */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Prepayment Amount</label>
                        <span className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={formData.prepaymentAmount} isCurrency={true} />
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.prepaymentAmount}
                            onChange={(e) => handleInputChange('prepaymentAmount', e.target.value)}
                            min="50000"
                            max="5000000"
                            step="50000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XX,XXX
                          </div>
                        )}
                      </div>
                      {isProUser && (
                        <input 
                          type="range"
                          min="50000"
                          max="5000000"
                          step="50000"
                          value={formData.prepaymentAmount}
                          onChange={handleSliderChange}
                          className="w-full h-1.5 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-neutral-700 mt-4"
                        />
                      )}
                    </div>

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

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Interest Rate</label>
                        {isProUser && (
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${getSavingsLevelColor(calculations.interestSaved)}`}>
                            {calculations.interestRate}% ROI
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
                        {isProUser ? (
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={calculations.interestRate}
                            readOnly
                            step="0.05"
                          />
                        ) : (
                          <div className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX.XX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Information Note */}
                    <div className="bg-white p-4 rounded-lg border border-neutral-300 flex items-start gap-3">
                      <AlertCircle className="text-blue-500 shrink-0 mt-0.5 w-5 h-5" />
                      <div className="space-y-1">
                        <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Simulation Note</p>
                        <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                          *Simulated results based on average Indian home loan interest rates (8.75% - 9.15%).
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
                      calculateSavings();
                      alert('Prepayment Savings Simulation completed! Check the updated results.');
                    }}
                    disabled={!isProUser}
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Prepayment Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Savings Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-5 rounded-lg border transition-all ${
                      isProUser ? (
                        calculations.interestSaved > 1000000 ? 'bg-green-50 border-green-500/20' : 
                        calculations.interestSaved > 500000 ? 'bg-yellow-50 border-yellow-500/20' : 
                        'bg-blue-50 border-blue-500/20'
                      ) : 'bg-gray-50 border-gray-200'
                    }`}>
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Interest Saved</span>
                      <div className={`text-[16px] font-medium tabular-nums ${
                        isProUser ? (
                          calculations.interestSaved > 1000000 ? 'text-green-600' : 
                          calculations.interestSaved > 500000 ? 'text-yellow-600' : 
                          'text-blue-600'
                        ) : 'text-gray-500'
                      }`}>
                        <BlurredNumberDisplay value={calculations.interestSaved} isCurrency={true} />
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">
                        Reduction in total loan liability
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Tenure Gain</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.tenureGain} isMonths={true} />
                      </div>
                      <p className="text-[12px] text-green-600 font-medium mt-1 uppercase tracking-tight">
                        Freedom acceleration
                      </p>
                    </div>
                  </div>

                  {/* Rights Information */}
                  <div className="p-6 rounded-lg text-white shadow-lg relative overflow-hidden group bg-neutral-900">
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="text-green-400 w-5 h-5" />
                        <h4 className="text-[16px] font-medium">Floating Rate Right</h4>
                      </div>
                      <p className="text-[14px] text-neutral-300 leading-relaxed font-regular">
                        Per RBI Master Circular, lenders cannot levy foreclosure penalties or prepayment charges on individual floating-rate loans.
                      </p>
                      <div className="bg-white/10 p-4 rounded-md border border-white/10">
                        <p className="text-[12px] text-neutral-400 italic">
                          Applicable even if the purpose is business, provided the borrower is an individual.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Action */}
                  <div className="bg-white p-5 rounded-lg border border-neutral-300 flex items-start gap-4">
                    <Zap className="text-yellow-500 shrink-0 mt-0.5 w-5 h-5" />
                    <div className="space-y-1">
                      <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Recovery Action</p>
                      <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                        If your bank charges illegal foreclosure fees, download our pre-filled legal notice formatted as per RBI guidelines.
                      </p>
                      <button className={`text-[12px] font-bold uppercase mt-2 flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        Download Legal Notice 
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Checklist */}
        <div className={`bg-white p-6 rounded-lg border shadow-sm ${!isProUser && !isCheckingAccess ? 'border-gray-200 opacity-70' : 'border-neutral-300'}`}>
          <h3 className="text-[16px] font-medium text-neutral-900 mb-6 uppercase tracking-widest">Mandatory No-Dues Checklist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 py-1">
                <CheckCircle className="text-green-500 w-4 h-4" />
                <span className="text-[14px] font-regular text-neutral-700">
                  {!isProUser && !isCheckingAccess ? (
                    <span className="filter blur-[3px] inline-block">XXXXXXXXXXXXX</span>
                  ) : item}
                </span>
              </div>
            ))}
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
                    calculations.interestSaved > 1000000 ? 'High Priority' : 
                    calculations.interestSaved > 500000 ? 'Medium Priority' : 
                    'Low Priority'
                  ) : 'Pro Required'} Audit
                </div>
                <h4 className="text-[18px] font-medium">Closure Audit Ready</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    calculations.interestSaved > 1000000 
                      ? 'Significant savings possible. Execute these steps for penalty-free closure.' 
                      : calculations.interestSaved > 500000
                      ? 'Consider prepayment for moderate savings. Verify your rights before proceeding.'
                      : 'Learn about your foreclosure rights for future reference.'
                  ) : (
                    'Upgrade to Pro to see your potential savings and personalized closure strategy.'
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
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Zero Penalty Rights</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'As per RBI guidelines, lenders cannot charge foreclosure penalties on individual floating-rate loans, even for business purposes.'
                ) : (
                  'Upgrade to Pro to understand your zero penalty rights and foreclosure protections.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Document Recovery</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'Banks must return property documents within 30 days of loan closure. Delays entitle you to compensation.'
                ) : (
                  'Upgrade to Pro to learn about document recovery timelines and your compensation rights.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <CircleQuestionMark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Insurance Refunds</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  'You\'re entitled to pro-rata refunds on mortgage insurance premiums when closing your loan before the term ends.'
                ) : (
                  'Upgrade to Pro to understand your insurance refund entitlements.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrepaymentForeclosureRights;