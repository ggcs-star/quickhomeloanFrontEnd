import React, { useState, useEffect } from 'react';
import { 
  HeartPulse, Scale, BrainCircuit, CircleAlert, TrendingDown, 
  ShieldAlert, CircleQuestionMark, Zap, Headphones, Volume2, 
  Video, Target, CirclePlay, ChevronRight, ArrowRight, 
  Clock as ClockIcon, Lock, Shield, Activity, AlertCircle
} from 'lucide-react';
import axios from 'axios';

const EMIStressIndexAudit = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  // State for input values
  const [formData, setFormData] = useState({
    monthlySalary: 120000,
    householdExpenses: 40000,
    totalEMIs: 55000
  });

  // State for calculated values
  const [calculations, setCalculations] = useState({
    monthlySurplus: 25000,
    debtRatio: 45.8,
    livingBurden: 33.3,
    auditScore: 54,
    complianceMeter: 46,
    riskStatus: 'Caution',
    foirPercentage: 45.8
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

  // Handle slider changes
  const handleSliderChange = (field, value) => {
    if (!isProUser) return;
    const numValue = parseInt(value, 10);
    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    if (!isProUser) return;
    const numValue = parseInt(value, 10) || 0;
    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  // Calculate all metrics based on input
  const calculateMetrics = () => {
    if (!isProUser) return;
    
    const { monthlySalary, householdExpenses, totalEMIs } = formData;
    
    // Calculate monthly surplus
    const monthlySurplus = monthlySalary - householdExpenses - totalEMIs;
    
    // Calculate Debt Ratio (FOIR) - Total EMIs / Monthly Salary
    const foirPercentage = monthlySalary > 0 ? (totalEMIs / monthlySalary) * 100 : 0;
    
    // Calculate Living Burden - Household Expenses / Monthly Salary
    const livingBurden = monthlySalary > 0 ? (householdExpenses / monthlySalary) * 100 : 0;
    
    // Calculate Audit Score (0-100 scale)
    let auditScore = 100;
    
    // Deduct points for high FOIR
    if (foirPercentage > 40) {
      auditScore -= (foirPercentage - 40) * 1.5;
    }
    if (foirPercentage > 50) {
      auditScore -= (foirPercentage - 50) * 2;
    }
    
    // Deduct points for low surplus
    const surplusRatio = (monthlySurplus / monthlySalary) * 100;
    if (surplusRatio < 20) {
      auditScore -= (20 - surplusRatio) * 1.2;
    }
    if (surplusRatio < 10) {
      auditScore -= (10 - surplusRatio) * 2;
    }
    
    // Ensure score stays within 0-100 range
    auditScore = Math.max(0, Math.min(100, auditScore));
    
    // Determine risk status based on FOIR
    let riskStatus;
    if (foirPercentage < 40) {
      riskStatus = 'Optimal Capacity';
    } else if (foirPercentage < 55) {
      riskStatus = 'Moderate Stress';
    } else {
      riskStatus = 'High Stress';
    }
    
    // Compliance meter (inverse of FOIR percentage for visual)
    const complianceMeter = Math.max(0, 100 - foirPercentage);

    setCalculations({
      monthlySurplus,
      debtRatio: parseFloat(foirPercentage.toFixed(1)),
      livingBurden: parseFloat(livingBurden.toFixed(1)),
      auditScore: Math.round(auditScore),
      complianceMeter: Math.round(complianceMeter),
      riskStatus,
      foirPercentage: parseFloat(foirPercentage.toFixed(1))
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
    alert('Financial Capacity Audit completed! Check the updated results.');
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

  // Get risk level color
  const getRiskLevelColor = (foir) => {
    if (foir < 40) return 'text-green-600 bg-green-50';
    if (foir < 55) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  // Get risk status badge color
  const getRiskStatusColor = (foir) => {
    if (foir < 40) return 'bg-green-600';
    if (foir < 55) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  // Audio briefing data
  const audioBriefings = [
    { id: 1, title: 'FOIR Optimization Strategies', description: 'How to reduce your Fixed Obligation to Income Ratio effectively.', duration: '04:30' },
    { id: 2, title: 'Debt Consolidation Masterclass', description: 'Moving high-interest loans to lower-rate instruments for better cash flow.', duration: '05:15' },
    { id: 3, title: 'Surplus Buffer Creation', description: 'Building emergency funds to absorb rate hikes and financial shocks.', duration: '06:45' },
    { id: 4, title: 'Expense Audit Methodology', description: 'Systematic approach to identifying and reducing non-essential expenses.', duration: '07:20' },
    { id: 5, title: 'Prepayment Strategy Planning', description: 'Optimizing bonus and extra income for maximum debt reduction.', duration: '04:50' }
  ];

  // Video masterclass data
  const videoMasterclasses = [
    { id: 1, title: 'FOIR Heatmap Visualization', duration: '03:30', views: '14,405' },
    { id: 2, title: 'Debt Snowball vs Avalanche', duration: '05:10', views: '9,920' },
    { id: 3, title: 'Cash Flow Optimization', duration: '04:20', views: '16,100' },
    { id: 4, title: 'Emergency Fund Calculator', duration: '08:45', views: '6,670' },
    { id: 5, title: 'Debt-Free Journey Mapping', duration: '06:15', views: '24,300' }
  ];

  // Action items data with dynamic calculations
  const actionItems = [
    { 
      id: 1, 
      number: '1', 
      title: 'Consolidate Unsecured', 
      description: `If FOIR > 50%, move high-interest personal loans into a Home Loan Top-up for 1/3rd the cost.`, 
      buttonText: 'View Savings'
    },
    { 
      id: 2, 
      number: '2', 
      title: 'Principal Sprint', 
      description: 'Apply any yearly bonus to principal now. Reducing principal by 10% lowers stress by 15%.', 
      buttonText: 'Prepay Audit'
    },
    { 
      id: 3, 
      number: '3', 
      title: 'Expenses Optimization', 
      description: `Audit non-EMI living expenses to identify ₹${Math.round(formData.householdExpenses * 0.125)}/mo surplus for defensive prepayments.`, 
      buttonText: 'Audit Living'
    },
    { 
      id: 4, 
      number: '4', 
      title: 'Switch to EBLR', 
      description: 'Stop interest leakage from outdated benchmarks to free up monthly liquidity.', 
      buttonText: 'Switch Now'
    },
    { 
      id: 5, 
      number: '5', 
      title: 'Emergency Buffer', 
      description: `Set aside ${formatCurrency(formData.totalEMIs * 3)} (3 EMIs) in a liquid fund to prevent payment bounces during rate spikes.`, 
      buttonText: 'Setup Fund'
    }
  ];

  // Calculate surplus ratio for recommendations
  const surplusRatio = (calculations.monthlySurplus / formData.monthlySalary) * 100;

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full EMI Stress Analysis</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete financial health analysis, interactive calculators, and personalized recommendations.
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
      <HeartPulse size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
        isProUser ? "text-green-700" : "text-gray-600"
      }`}>
        {isCheckingAccess ? "Checking..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
      </span>
    </div>
  );

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white">
      <div className="max-w-7xl mx-auto space-y-12 pb-20 font-sans ">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">EMI Stress Index Audit</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Evaluate your debt-to-income balance and financial liquidity.</p>
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
                    Financial Capacity Audit
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">Fixed Obligation to Income Ratio (FOIR)</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${
                  isProUser ? getRiskStatusColor(calculations.foirPercentage) : 'bg-gray-500'
                } text-white`}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {!isProUser ? 'Pro Required' : calculations.riskStatus}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Input Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    {/* Monthly Net Salary */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Monthly Net Salary</label>
                        <span className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={formData.monthlySalary} isCurrency={true} />
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.monthlySalary}
                            onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
                            min="30000"
                            max="500000"
                            step="5000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XXX
                          </div>
                        )}
                      </div>
                      {isProUser && (
                        <input 
                          min="30000" 
                          max="500000" 
                          step="5000" 
                          className="w-full h-1.5 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-neutral-700 mt-4" 
                          type="range" 
                          value={formData.monthlySalary}
                          onChange={(e) => handleSliderChange('monthlySalary', e.target.value)}
                        />
                      )}
                    </div>

                    {/* Household Expenses */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Household Expenses</label>
                        <span className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={formData.householdExpenses} isCurrency={true} />
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.householdExpenses}
                            onChange={(e) => handleInputChange('householdExpenses', e.target.value)}
                            min="5000"
                            max="96000"
                            step="1000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XXX
                          </div>
                        )}
                      </div>
                      {isProUser && (
                        <input 
                          min="5000" 
                          max="96000" 
                          step="1000" 
                          className="w-full h-1.5 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-neutral-700 mt-4" 
                          type="range" 
                          value={formData.householdExpenses}
                          onChange={(e) => handleSliderChange('householdExpenses', e.target.value)}
                        />
                      )}
                    </div>

                    {/* Total EMIs */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Total EMIs</label>
                        <span className="text-[16px] font-medium text-neutral-900 tabular-nums">
                          <BlurredNumberDisplay value={formData.totalEMIs} isCurrency={true} />
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        {isProUser ? (
                          <input 
                            className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.totalEMIs}
                            onChange={(e) => handleInputChange('totalEMIs', e.target.value)}
                            min="0"
                            max="120000"
                            step="1000"
                          />
                        ) : (
                          <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            ₹ XX,XXX
                          </div>
                        )}
                      </div>
                      {isProUser && (
                        <input 
                          min="0" 
                          max="120000" 
                          step="1000" 
                          className="w-full h-1.5 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-neutral-700 mt-4" 
                          type="range" 
                          value={formData.totalEMIs}
                          onChange={(e) => handleSliderChange('totalEMIs', e.target.value)}
                        />
                      )}
                    </div>

                    {/* Information Note */}
                    <div className="bg-white p-4 rounded-lg border border-neutral-300 flex items-start gap-3">
                      <AlertCircle className="text-yellow-500 shrink-0 mt-0.5 w-5 h-5" />
                      <div className="space-y-1">
                        <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Regulatory Standard</p>
                        <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                          Lenders prioritize cases where total fixed obligations stay below 45% of net monthly income.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleAuditClick}
                    disabled={!isProUser}
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <BrainCircuit className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Financial Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Monthly Surplus</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.monthlySurplus} isCurrency={true} />
                      </div>
                      <p className="text-[12px] text-green-600 font-medium mt-1 uppercase tracking-tight">
                        {isProUser ? `${surplusRatio.toFixed(1)}% of income` : 'Pro feature'}
                      </p>
                    </div>
                    <div className={`p-5 rounded-lg border transition-all ${
                      isProUser ? (
                        calculations.foirPercentage < 40 ? 'bg-green-50 border-green-500/20' : 
                        calculations.foirPercentage < 55 ? 'bg-yellow-50 border-yellow-500/20' : 
                        'bg-red-50 border-red-500/20'
                      ) : 'bg-gray-50 border-gray-200'
                    }`}>
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Debt Ratio (FOIR)</span>
                      <div className={`text-[16px] font-medium tabular-nums ${
                        isProUser ? (
                          calculations.foirPercentage < 40 ? 'text-green-600' : 
                          calculations.foirPercentage < 55 ? 'text-yellow-600' : 
                          'text-red-600'
                        ) : 'text-gray-500'
                      }`}>
                        <BlurredNumberDisplay value={calculations.foirPercentage} isPercentage={true} />
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">
                        {isProUser ? (
                          calculations.foirPercentage > 45 ? 'Above regulatory limit' : 'Within regulatory limit'
                        ) : 'Upgrade to see limit'}
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Living Burden</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.livingBurden} isPercentage={true} />
                      </div>
                      <p className="text-[12px] text-blue-600 font-medium mt-1 uppercase tracking-tight">
                        Survival Cost Ratio
                      </p>
                    </div>
                  </div>

                  {/* Audit Score Card */}
                  <div className={`p-6 rounded-lg text-white shadow-lg relative overflow-hidden group ${
                    isProUser ? (
                      calculations.auditScore < 50 ? 'bg-neutral-900' : 
                      calculations.auditScore < 70 ? 'bg-neutral-800' : 
                      'bg-green-700'
                    ) : 'bg-gray-600'
                  }`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-1">
                        <span className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                          isProUser ? (
                            calculations.auditScore < 50 ? 'text-red-400' : 
                            calculations.auditScore < 70 ? 'text-yellow-400' : 
                            'text-green-300'
                          ) : 'text-gray-300'
                        }`}>
                          Financial Health Score
                        </span>
                        <h4 className="text-[22px] font-semibold tracking-tight tabular-nums">
                          <BlurredNumberDisplay value={calculations.auditScore} />
                        </h4>
                        <p className="text-[12px] text-neutral-300 leading-relaxed italic">
                          {isProUser ? (
                            calculations.auditScore >= 70 ? 'Strong financial stability' : 
                            calculations.auditScore >= 50 ? 'Moderate financial pressure' : 
                            'High financial stress detected'
                          ) : 'Upgrade to see your score'}
                        </p>
                      </div>
                      <div className="bg-white/10 px-6 py-3 rounded-md border border-white/10 text-center min-w-[140px]">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Risk Status</div>
                        <div className="text-[18px] font-semibold text-white tabular-nums">
                          {!isProUser ? 'Pro Required' : calculations.riskStatus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Meter */}
                  <div className="bg-white p-5 rounded-lg border border-neutral-300 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold text-neutral-900 uppercase tracking-widest">Compliance Meter</span>
                      <span className={`text-[16px] font-bold tabular-nums ${
                        isProUser ? (
                          calculations.foirPercentage < 40 ? 'text-green-600' : 
                          calculations.foirPercentage < 55 ? 'text-yellow-600' : 
                          'text-red-600'
                        ) : 'text-gray-500'
                      }`}>
                        <BlurredNumberDisplay value={calculations.foirPercentage} isPercentage={true} />
                      </span>
                    </div>
                    <div className="relative h-4 bg-neutral-100 rounded-full overflow-hidden flex border border-neutral-200">
                      <div className="bg-green-500 h-full border-r border-white/20 transition-all duration-700" style={{ width: '40%' }}></div>
                      <div className="bg-yellow-500 h-full border-r border-white/20 transition-all duration-700" style={{ width: '15%' }}></div>
                      <div className="bg-red-500 h-full flex-1 transition-all duration-700"></div>
                      {isProUser && (
                        <div 
                          className="absolute top-0 bottom-0 w-1 bg-neutral-800 shadow-md transition-all duration-1000" 
                          style={{ left: `calc(${Math.min(calculations.foirPercentage, 100)}% - 2px)` }}
                        ></div>
                      )}
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">
                      <div className="">Safe (&lt;40%)</div>
                      <div className="text-yellow-600">Warning (40-55%)</div>
                      <div className="">Overload (&gt;55%)</div>
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
                            <Target className="w-3 h-3" />
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
                    calculations.foirPercentage < 40 ? 'Low Priority' : 
                    calculations.foirPercentage < 55 ? 'Medium Priority' : 
                    'High Priority'
                  ) : 'Pro Required'} Audit
                </div>
                <h4 className="text-[18px] font-medium">Financial Health Status</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    calculations.foirPercentage >= 55 
                      ? 'Immediate action required. Your FOIR exceeds 55%, putting you in high-risk territory.' 
                      : calculations.foirPercentage >= 40
                      ? 'Take preventive measures. Your FOIR is in warning zone. Consider these 5 tasks.'
                      : 'Good financial health. Maintain your current discipline.'
                  ) : (
                    'Upgrade to Pro to view your financial health status and actionable recommendations.'
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
                <TrendingDown className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">The 40% Compliance Rule</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  calculations.foirPercentage > 40 
                    ? `Your FOIR of ${calculations.foirPercentage.toFixed(1)}% exceeds the recommended 40% limit. Standard banking compliance suggests total EMIs should not exceed 40% of net monthly income.`
                    : `Your FOIR of ${calculations.foirPercentage.toFixed(1)}% is within the recommended 40% limit. Keep it below 40% to maintain a healthy credit profile.`
                ) : (
                  'Upgrade to Pro to see if your FOIR meets the 40% compliance rule.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Liquidity Buffers</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  surplusRatio < 15 
                    ? `Your surplus ratio of ${surplusRatio.toFixed(1)}% is below the recommended 15-20% level. High EMI levels reduce your ability to absorb sudden Repo Rate hikes.`
                    : `Your surplus ratio of ${surplusRatio.toFixed(1)}% is healthy. Maintain this level to absorb potential rate hikes.`
                ) : (
                  'Upgrade to Pro to analyze your liquidity buffers and surplus ratio.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <CircleQuestionMark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Debt Consolidation</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  calculations.foirPercentage > 50 
                    ? `Your stress index is in the "Risk" zone (FOIR: ${calculations.foirPercentage.toFixed(1)}%). Consider consolidating high-interest unsecured loans.`
                    : calculations.foirPercentage > 40
                    ? `Your FOIR is in warning zone. Consider debt consolidation if you have high-interest personal loans.`
                    : 'Your debt levels are manageable. Consolidation may not be necessary.'
                ) : (
                  'Upgrade to Pro for personalized debt consolidation recommendations.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EMIStressIndexAudit;