import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Activity, CreditCard, CircleAlert, Calendar,
  Calculator, Wallet, PiggyBank, Clock, SquareCheckBig,
  Headphones, Video, Volume2, CirclePlay, Target, ArrowRight,
  ChevronRight, Download, Info, CircleCheck, CircleX,
  Percent, TrendingDown, Zap, CheckCircle, ArrowRight as ArrowRightIcon,
  Download as DownloadIcon, Info as InfoIcon, BrainCircuit,
  Scale, MapPin, Shield, Landmark, ShieldAlert, CircleQuestionMark,
  ChevronRight as ChevronRightIcon, Headphones as HeadphonesIcon,
  Video as VideoIcon, Target as TargetIcon, Clock as ClockIcon,
  Wallet as WalletIcon, PiggyBank as PiggyBankIcon, Lock
} from 'lucide-react';
import axios from 'axios';

const EMIRepaymentHealth = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [healthScore, setHealthScore] = useState(75);
  const [onTimeRatio, setOnTimeRatio] = useState(83);
  const [bounceEvents, setBounceEvents] = useState(1);
  
  // Monthly EMI data
  const [monthlyEMIs, setMonthlyEMIs] = useState([
    { month: 'Jan 24', amount: 45000, status: 'paid', emiChanged: false },
    { month: 'Feb 24', amount: 45000, status: 'paid', emiChanged: false },
    { month: 'Mar 24', amount: 45000, status: 'bounce', emiChanged: false },
    { month: 'Apr 24', amount: 46250, status: 'paid', emiChanged: true },
    { month: 'May 24', amount: 46250, status: 'paid', emiChanged: true },
    { month: 'Jun 24', amount: 46250, status: 'paid', emiChanged: true },
    { month: 'Jul 24', amount: 48350, status: 'delayed', emiChanged: true },
    { month: 'Aug 24', amount: 48350, status: 'paid', emiChanged: true },
    { month: 'Sep 24', amount: 48350, status: 'paid', emiChanged: true },
    { month: 'Oct 24', amount: 48350, status: 'paid', emiChanged: true },
    { month: 'Nov 24', amount: 48350, status: 'paid', emiChanged: true },
    { month: 'Dec 24', amount: 48350, status: 'paid', emiChanged: true }
  ]);

  // Calculator state
  const [loanData, setLoanData] = useState({
    loanOutstanding: 5000000,
    emiAmount: 45000,
    emisPaid: 12,
    tenureYears: 15
  });

  const [results, setResults] = useState({
    totalEMIPaid: 540000,
    interestComponent: 344847,
    principalComponent: 195153,
    interestPercentage: 63.86,
    annualROI: 7.02
  });

  // Health metrics
  const [healthMetrics, setHealthMetrics] = useState({
    healthScore: 75,
    continuityScore: 65,
    transmissionGap: -1.5
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

  // Update health metrics when monthly data changes
  useEffect(() => {
    if (isProUser) {
      calculateHealthMetrics();
    }
  }, [monthlyEMIs, isProUser]);

  const calculateHealthMetrics = () => {
    const paidCount = monthlyEMIs.filter(emi => emi.status === 'paid').length;
    const bounceCount = monthlyEMIs.filter(emi => emi.status === 'bounce').length;
    const delayedCount = monthlyEMIs.filter(emi => emi.status === 'delayed').length;
    
    const newOnTimeRatio = Math.round((paidCount / monthlyEMIs.length) * 100);
    const newHealthScore = Math.round((paidCount / monthlyEMIs.length) * 100 - (bounceCount * 25) - (delayedCount * 10));
    
    setOnTimeRatio(newOnTimeRatio);
    setBounceEvents(bounceCount);
    const score = Math.max(0, Math.min(100, newHealthScore));
    setHealthScore(score);
    
    // Update health metrics object
    setHealthMetrics(prev => ({
      ...prev,
      healthScore: score,
      continuityScore: Math.round(score * 0.87)
    }));
  };

  const updateEMIStatus = (monthIndex, newStatus) => {
    if (!isProUser) return;
    const updatedEMIs = [...monthlyEMIs];
    updatedEMIs[monthIndex] = {
      ...updatedEMIs[monthIndex],
      status: newStatus
    };
    setMonthlyEMIs(updatedEMIs);
  };

  const updateEMIAmount = (monthIndex, newAmount) => {
    if (!isProUser) return;
    const updatedEMIs = [...monthlyEMIs];
    updatedEMIs[monthIndex] = {
      ...updatedEMIs[monthIndex],
      amount: newAmount,
      emiChanged: newAmount !== 45000
    };
    setMonthlyEMIs(updatedEMIs);
  };

  // Calculate results when loan data changes
  useEffect(() => {
    if (isProUser) {
      calculateResults();
    }
  }, [loanData, isProUser]);

  const calculateResults = () => {
    const totalEMIPaid = loanData.emiAmount * loanData.emisPaid;
    
    // Simple calculation for demonstration
    const monthlyRate = 0.0702 / 12;
    const interest = loanData.loanOutstanding * monthlyRate * loanData.emisPaid;
    const principal = totalEMIPaid - interest;
    
    setResults({
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
    setLoanData(prev => ({
      ...prev,
      [field]: numValue
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

  // Get health status config
  const getHealthStatus = (score) => {
    if (score >= 80) return {
      text: 'EXCELLENT HEALTH',
      color: 'text-green-400',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400/20',
      priority: 'Low Priority'
    };
    if (score >= 60) return {
      text: 'GOOD HEALTH',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400/20',
      priority: 'Medium Priority'
    };
    return {
      text: 'NEEDS ATTENTION',
      color: 'text-red-400',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400/20',
      priority: 'High Priority'
    };
  };

  const actions = [
    {
      id: 1,
      title: "Buffer Fund Setup",
      description: "Maintain 3 months of EMI in a 'Sweep-in' Fixed Deposit linked to your repayment account.",
      buttonText: "Setup Buffer"
    },
    {
      id: 2,
      title: "ROI Normalization",
      description: "Identify months where interest increased without notice. Request bank for pass-through audit.",
      buttonText: "Audit ROI"
    },
    {
      id: 3,
      title: "Digital SI Check",
      description: "Verify your E-Mandate/Standing Instruction status to ensure zero technical bounces.",
      buttonText: "Verify SI"
    },
    {
      id: 4,
      title: "Nodal Escalation",
      description: "If a technical bounce (bank error) affected your score, draft a notice to the Nodal Officer.",
      buttonText: "Draft Notice"
    },
    {
      id: 5,
      title: "Tenure Audit",
      description: "Manually verify pending installments against sanctioned term to detect 'Silent Tenure Ballooning'.",
      buttonText: "Check Tenure"
    }
  ];

  const audioBriefings = [
    { id: 1, title: "The 90-Day Reset Mandate", description: "Understanding the legal reset window for EBLR-linked loans.", duration: "04:12" },
    { id: 2, title: "Spread Stickiness Audit", description: "How to identify if your bank is delaying Repo Rate cut transmission.", duration: "05:45" },
    { id: 3, title: "Tenure Ballooning Defense", description: "Strategic response to silent tenure extensions during rate spikes.", duration: "06:20" },
    { id: 4, title: "MCLR to EBLR Conversion Legal", description: "The legal process to shift to a more transparent benchmark.", duration: "07:15" },
    { id: 5, title: "Step-up EMI Buffer Math", description: "Calculating the ideal EMI increase to absorb 1% volatility.", duration: "04:50" }
  ];

  const visualMasterclasses = [
    { id: 1, title: "Visualizing Rate Shock", duration: "03:30", views: "12,405", color: "bg-blue-100" },
    { id: 2, title: "Interest Leakage Heatmap", duration: "05:10", views: "8,920", color: "bg-red-100" },
    { id: 3, title: "Negative Amortization Alert", duration: "04:20", views: "15,100", color: "bg-yellow-100" },
    { id: 4, title: "Benchmark Accuracy Masterclass", duration: "08:45", views: "5,670", color: "bg-green-100" },
    { id: 5, title: "Escape Velocity Strategy", duration: "06:15", views: "22,300", color: "bg-purple-100" }
  ];

  // Helper function to get status color and icon
  const getStatusConfig = (status) => {
    switch(status) {
      case 'paid':
        return { 
          color: 'text-green-400', 
          bgColor: 'bg-white',
          borderColor: 'border-gray-200 hover:border-green-400/30',
          icon: CircleCheck,
          text: 'PAID'
        };
      case 'bounce':
        return { 
          color: 'text-red-400', 
          bgColor: 'bg-red-50',
          borderColor: 'border-red-400/20 shadow-sm shadow-red-400/5',
          icon: CircleX,
          text: 'BOUNCE'
        };
      case 'delayed':
        return { 
          color: 'text-yellow-400', 
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-400/20',
          icon: Clock,
          text: 'DELAYED'
        };
      default:
        return { 
          color: 'text-gray-400', 
          bgColor: 'bg-white',
          borderColor: 'border-gray-200',
          icon: CircleAlert,
          text: 'PENDING'
        };
    }
  };

  // Small Clock Icon component for duration display
  const SmallClockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 6v6l4 2"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );

  const healthStatus = getHealthStatus(healthScore);

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full EMI Analytics</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to detailed repayment analysis, interactive calculators, and complete financial insights.
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
      <div className="max-w-[1200px] mx-auto space-y-12 pb-20 font-sans">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">
              EMI Repayment Health
            </h2>
            <p className="text-[14px] text-neutral-600 mt-1">
              Detailed monthly breakdown of your repayment discipline and bounce history.
            </p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {/* {!isProUser && !isCheckingAccess && <UpgradeBanner />} */}

        {/* Health Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Health Score Card */}
          <div className={`bg-white p-6 rounded-md border shadow-sm flex items-center gap-4 ${!isProUser && !isCheckingAccess ? 'border-gray-200 opacity-70' : 'border-neutral-300'}`}>
            <div className="p-4 bg-neutral-50 rounded-md text-neutral-700">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest block mb-1">
                Health Score
              </span>
              <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                <BlurredNumberDisplay value={healthScore} isPercentage={true} />
              </div>
            </div>
          </div>

          {/* On-Time Ratio Card */}
          <div className={`bg-white p-6 rounded-md border shadow-sm flex items-center gap-4 ${!isProUser && !isCheckingAccess ? 'border-gray-200 opacity-70' : 'border-neutral-300'}`}>
            <div className="p-4 bg-neutral-50 rounded-md text-green-600">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest block mb-1">
                On-Time Ratio
              </span>
              <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                <BlurredNumberDisplay value={onTimeRatio} isPercentage={true} />
              </div>
            </div>
          </div>

          {/* Bounce Events Card */}
          <div className={`bg-white p-6 rounded-md border shadow-sm flex items-center gap-4 ${!isProUser && !isCheckingAccess ? 'border-gray-200 opacity-70' : 'border-neutral-300'}`}>
            <div className="p-4 rounded-md bg-red-50 text-red-600">
              <CircleAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest block mb-1">
                Bounce Events
              </span>
              <div className="text-[16px] font-medium tabular-nums text-red-600">
                <BlurredNumberDisplay value={bounceEvents} />
              </div>
            </div>
          </div>
        </div>

        {/* EMI Continuity Audit Section */}
        <div className="animate-in fade-in duration-500">
          <div className="bg-white rounded-md border border-neutral-300 shadow-sm overflow-hidden font-sans">
            {/* Section Header */}
            <div className="p-6 border-b border-neutral-300 flex items-center justify-between bg-neutral-50">
              <div>
                <h3 className="text-[18px] font-medium text-neutral-900 flex items-center gap-2 tracking-tight">
                  <Calendar className="w-4 h-4 text-neutral-700" />
                  EMI Continuity Audit
                </h3>
                <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-wider">
                  Monthly payment health tracking from scanned bank statements.
                </p>
              </div>
              <div className="text-right">
                <div className="text-[16px] font-medium tabular-nums text-yellow-600">
                  <BlurredNumberDisplay value={healthMetrics.continuityScore} isPercentage={true} />
                </div>
                <div className="text-[12px] font-medium uppercase text-neutral-500 tracking-wider">
                  Continuity Score
                </div>
              </div>
            </div>

            {/* Monthly EMI Grid */}
            <div className="p-6 md:p-8">
              <div className="space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {monthlyEMIs.map((emi, index) => {
                    const statusConfig = getStatusConfig(emi.status);
                    const StatusIcon = statusConfig.icon;
                    
                    return (
                      <div 
                        key={index}
                        className={`p-4 rounded-md border transition-all ${statusConfig.bgColor} ${statusConfig.borderColor} ${isProUser ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : 'cursor-default opacity-80'}`}
                        onClick={() => updateEMIStatus(index, emi.status === 'paid' ? 'bounce' : emi.status === 'bounce' ? 'delayed' : 'paid')}
                      >
                        <div className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest mb-3">
                          {emi.month}
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <StatusIcon className={`w-4 h-4 ${statusConfig.color.replace('400', '600')}`} />
                          <div className="relative">
                            {isProUser ? (
                              <input
                                type="number"
                                value={emi.amount}
                                onChange={(e) => updateEMIAmount(index, parseInt(e.target.value) || 0)}
                                onClick={(e) => e.stopPropagation()}
                                className={`text-[15px] font-medium tabular-nums w-24 text-right bg-transparent border-b border-transparent hover:border-neutral-300 focus:border-neutral-700 focus:outline-none ${emi.emiChanged ? 'text-blue-600' : 'text-neutral-900'}`}
                              />
                            ) : (
                              <span className="text-[15px] font-medium tabular-nums w-24 text-right inline-block filter blur-[4px]">
                                XX,XXX
                              </span>
                            )}
                          </div>
                        </div>
                        <div className={`text-[12px] font-bold uppercase tracking-tighter ${statusConfig.color.replace('400', '600')}`}>
                          {!isProUser && !isCheckingAccess ? (
                            <span className="filter blur-[3px] inline-block">XXXX</span>
                          ) : statusConfig.text}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Payment Discipline Alert */}
                <div className="bg-neutral-900 rounded-md p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-md bg-red-600/20">
                      <CircleAlert className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-medium">Payment Discipline Audit</h4>
                      <p className="text-[14px] text-neutral-300 mt-1 font-regular leading-relaxed">
                        Alert: Found {!isProUser && !isCheckingAccess ? 'X' : bounceEvents} payment failure(s). This results in significant hidden costs and lower eligibility.
                      </p>
                    </div>
                  </div>
                  <button 
                    className={`whitespace-nowrap text-white text-[14px] font-semibold px-6 py-2.5 rounded-md transition-all active:scale-[0.98] ${isProUser ? 'bg-black hover:bg-neutral-800' : 'bg-gray-600 cursor-not-allowed'}`}
                    disabled={!isProUser}
                  >
                    {!isProUser && !isCheckingAccess ? 'Upgrade to View Fix' : 'View Fix'}
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
            
            {/* Repayment Audit Done Card */}
            <div className={`p-6 rounded-md text-white shadow-lg flex flex-col justify-center relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[12px] uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  {healthStatus.priority} Audit
                </div>
                <h4 className="text-[18px] font-medium">Repayment Audit Done</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    healthScore >= 80 
                      ? 'Excellent repayment discipline. Maintain your high standards.'
                      : healthScore >= 60
                      ? 'Good repayment history. Consider optimizing for better rates.'
                      : 'Needs immediate attention to improve credit health.'
                  ) : (
                    'Upgrade to Pro to view detailed repayment audit insights and recommendations.'
                  )}
                </p>
              </div>
              <ChevronRight className="absolute -right-8 -bottom-8 opacity-5 w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Yearly Interest & Rate Audit Section */}
        <div className="animate-in fade-in duration-700 delay-150">
          <div className="bg-white rounded-md border border-neutral-300 overflow-hidden shadow-sm">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-neutral-700" />
                    <h3 className="text-[18px] font-medium text-neutral-900 tracking-tight">
                      Yearly Interest & Rate Audit
                    </h3>
                  </div>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-wider">
                    Reverse-calculating your true bank interest rate and yearly cost split.
                  </p>
                </div>
                <div className="bg-white border border-neutral-300 px-4 py-2 rounded-md flex items-start gap-3 max-w-xs">
                  <Info className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <p className="text-[12px] text-neutral-900 font-regular leading-snug">
                    Interest rate is derived from your EMI and balance to reflect the true rate applied.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Input Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                        <WalletIcon className="w-3 h-3" />
                        Loan Outstanding (Start of Year)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-medium text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 focus:ring-1 focus:ring-neutral-700 outline-none transition-all"
                            type="number" 
                            value={loanData.loanOutstanding}
                            onChange={(e) => handleInputChange('loanOutstanding', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XX,XXX
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                        <PiggyBankIcon className="w-3 h-3" />
                        Monthly EMI Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-medium text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 focus:ring-1 focus:ring-neutral-700 outline-none transition-all"
                            type="number" 
                            value={loanData.emiAmount}
                            onChange={(e) => handleInputChange('emiAmount', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XXX
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          EMIs Paid
                        </label>
                        <div className="relative">
                          {isProUser ? (
                            <input 
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none"
                              type="number" 
                              value={loanData.emisPaid}
                              onChange={(e) => handleInputChange('emisPaid', e.target.value)}
                            />
                          ) : (
                            <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                              XX
                            </div>
                          )}
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-neutral-500">Mo</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          Tenure
                        </label>
                        <div className="relative">
                          {isProUser ? (
                            <input 
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none"
                              type="number" 
                              value={loanData.tenureYears}
                              onChange={(e) => handleInputChange('tenureYears', e.target.value)}
                            />
                          ) : (
                            <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                              XX
                            </div>
                          )}
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-neutral-500">Yrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide uppercase transition-all shadow-sm flex items-center justify-center gap-2 ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                    disabled={!isProUser}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Compliance Audit'}
                  </button>
                </div>

                {/* Results Display */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-neutral-900 rounded-md p-6 md:p-8 text-white relative overflow-hidden group">
                    <div className="relative z-10 space-y-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-red-400 font-semibold uppercase tracking-widest text-[12px]">
                          <TrendingDown className="w-4 h-4" />
                          Interest Cost Impact
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <div className="text-[20px] font-medium tabular-nums tracking-tight">
                            <BlurredNumberDisplay value={results.interestPercentage} isPercentage={true} />
                          </div>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                          <div 
                            className="bg-red-600 h-full transition-all duration-1000" 
                            style={{ width: `${isProUser ? results.interestPercentage : 0}%` }}
                          ></div>
                          <div className="bg-green-600 h-full flex-1"></div>
                        </div>
                        <p className="text-[12px] text-neutral-400 font-regular">
                          Total EMI Paid: <span className="font-medium text-[15px] text-white">
                            <BlurredNumberDisplay value={results.totalEMIPaid} isCurrency={true} />
                          </span>
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        <div className="space-y-1">
                          <span className="text-[12px] font-medium text-neutral-400 uppercase tracking-widest block">
                            Interest Component
                          </span>
                          <div className="text-[16px] font-medium text-red-400 tabular-nums">
                            <BlurredNumberDisplay value={results.interestComponent} isCurrency={true} />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[12px] font-medium text-neutral-400 uppercase tracking-widest block">
                            Principal Component
                          </span>
                          <div className="text-[16px] font-medium text-green-400 tabular-nums">
                            <BlurredNumberDisplay value={results.principalComponent} isCurrency={true} />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[12px] font-medium text-neutral-400 uppercase tracking-widest block">
                            Annual ROI
                          </span>
                          <div className="text-[16px] font-medium text-white tabular-nums">
                            <BlurredNumberDisplay value={results.annualROI} isPercentage={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-md p-6 border border-neutral-300 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-black rounded-md text-white">
                        <Percent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[12px] font-semibold text-neutral-900 uppercase tracking-widest mb-0.5">
                          Effective Rate Audit
                        </h4>
                        <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={results.annualROI} isPercentage={true} />
                        </div>
                      </div>
                    </div>
                    <div className="md:max-w-[240px]">
                      <button className={`text-[14px] font-semibold uppercase flex items-center gap-1.5 ${isProUser ? 'text-black hover:underline group' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        View Fix
                        <ArrowRightIcon className={`w-4 h-4 ${isProUser ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <p className="text-[12px] text-neutral-500 font-regular leading-relaxed italic px-1">
                    *Compliance Note: All calculations are based on standard amortization schedules as per RBI Master Circular on Fair Lending Practices.
                  </p>
                </div>
              </div>
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
                {audioBriefings.map((briefing) => (
                  <div key={briefing.id} className={`bg-white p-5 rounded-md border border-neutral-300 flex items-center justify-between ${isProUser ? 'group hover:border-black/30 transition-all shadow-sm' : 'opacity-70'}`}>
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
                          {briefing.duration}
                        </div>
                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                          Length
                        </span>
                      </div>
                      <button className={`p-2.5 rounded-md transition-all active:scale-95 ${isProUser ? 'bg-black text-white hover:bg-neutral-800 shadow-sm' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={!isProUser}>
                        <ArrowRightIcon className="w-4 h-4" />
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
                {visualMasterclasses.map((masterclass) => (
                  <div key={masterclass.id} className={`bg-white rounded-md border border-neutral-300 overflow-hidden ${isProUser ? 'group hover:border-black/30 transition-all shadow-sm' : 'opacity-70'} flex h-28`}>
                    <div className={`w-32 bg-neutral-100 relative shrink-0 flex items-center justify-center`}>
                      <CirclePlay className={`w-6 h-6 ${isProUser ? 'text-neutral-700' : 'text-neutral-400'}`} />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h5 className="text-[14px] font-medium text-neutral-900 leading-tight line-clamp-1">
                          {masterclass.title}
                        </h5>
                        <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-neutral-500 uppercase tracking-tighter">
                          <span className="flex items-center gap-1">
                            <SmallClockIcon className="w-3 h-3" /> {masterclass.duration}
                          </span>
                          <span className="flex items-center gap-1 text-black">
                            <Target className="w-3 h-3" /> 
                            {isProUser ? masterclass.views : 'XX,XXX'} Views
                          </span>
                        </div>
                      </div>
                      <button className={`text-[12px] font-bold uppercase flex items-center gap-1 ${isProUser ? 'text-black hover:underline group' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        Watch Now
                        <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
            <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
              <Landmark className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Why EMI Changes?</h4>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              {isProUser ? (
                `EMIs can increase due to interest rate hikes, tenure adjustments, or bank fees. 
                Your EMI changed ${monthlyEMIs.filter(emi => emi.emiChanged).length} times in the last year.`
              ) : (
                'Upgrade to Pro to see EMI change analysis and reasons.'
              )}
            </p>
          </div>

          <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
            <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Bounce Impact</h4>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              {isProUser ? (
                `A single bounce can reduce your credit score by 100+ points and affect loan eligibility for up to 12 months. 
                ${bounceEvents > 0 ? ` You have ${bounceEvents} bounce(s) to address.` : ' No bounces detected.'}`
              ) : (
                'Upgrade to Pro to understand bounce impact on your credit health.'
              )}
            </p>
          </div>

          <div className={`bg-white p-6 rounded-md border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
            <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
              <CircleQuestionMark className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-medium text-neutral-900 mb-2">How to Improve Score?</h4>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              {isProUser ? (
                healthScore < 70 
                  ? 'Focus on on-time payments for 3-6 months. Setup payment reminders and maintain buffer funds.'
                  : 'Continue your good repayment habits. Consider additional measures for premium status.'
              ) : (
                'Upgrade to Pro for personalized score improvement strategies.'
              )}
            </p>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Credit Health Intelligence Card */}
          <div className={`p-8 rounded-md text-white shadow-lg relative overflow-hidden group ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
            <h3 className="text-[18px] font-medium mb-4 flex items-center gap-2 tracking-tight">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Credit Health Intelligence
            </h3>
            <p className="text-[14px] opacity-80 leading-relaxed mb-6 font-regular">
              {isProUser ? (
                'Lenders prioritize "Continuous Repayment History" (CRH). Even a single bounce, if not regularized within 30 days, can reduce your eligibility for Top-up loans or Balance Transfers by over 60%.'
              ) : (
                'Upgrade to Pro to access your Credit Health Intelligence report and get personalized recommendations.'
              )}
            </p>
            
            {isProUser && (
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[12px] bg-white/10 p-3 rounded-md border border-white/5 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span>No major cheque returns detected in last 6 months</span>
                </div>
                <div className="flex items-center gap-3 text-[12px] bg-white/10 p-3 rounded-md border border-white/5 font-medium">
                  <div className={`w-1.5 h-1.5 rounded-full ${bounceEvents > 0 ? 'bg-red-400' : 'bg-yellow-400'}`}></div>
                  <span>{bounceEvents > 0 ? `${bounceEvents} bounce(s) need regularization` : 'Minor delay in Mar-24 due to bank clearing window'}</span>
                </div>
              </div>
            )}
            
            <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck className="w-48 h-48" />
            </div>
          </div>

          {/* Repayment Strategy Card */}
          <div className="bg-white p-8 rounded-md border border-neutral-300 flex flex-col justify-center shadow-sm">
            <h3 className="text-[18px] font-medium text-neutral-900 mb-4 tracking-tight">
              Repayment Strategy
            </h3>
            <p className="text-[14px] text-neutral-600 mb-8 font-regular leading-relaxed">
              {isProUser ? (
                'Ensure your account is funded at least 48 hours before the EMI date to avoid technical bounces. We recommend setting up "Internal Sweeps" if your primary salary account is different.'
              ) : (
                'Upgrade to Pro to unlock personalized repayment strategies and optimization tools.'
              )}
            </p>
            <button 
              className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide uppercase transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              disabled={!isProUser}
            >
              {!isProUser && !isCheckingAccess ? (
                <>
                  <Lock size={16} />
                  Upgrade to Pro
                </>
              ) : (
                <>
                  Complete Compliance Audit
                  <ArrowRightIcon className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EMIRepaymentHealth;