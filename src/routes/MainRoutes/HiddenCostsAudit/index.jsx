import React, { useState, useEffect } from 'react';
import { 
  Search, AlertCircle, Percent, Receipt, Wallet, ShieldAlert, CircleQuestionMark,
  Zap, Headphones, Volume2, Video, Target, CirclePlay, ChevronRight,
  ArrowRight, Clock as ClockIcon, Lock, Shield, Scale, Landmark
} from 'lucide-react';
import axios from 'axios';

const HiddenCostsAudit = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  
  // State for input values
  const [formData, setFormData] = useState({
    bounceCharges: 1250,
    bounceEvents: 3,
    penalInterest: 450,
    gstOnPenalties: 306,
    lateFeeGST: 162
  });

  // State for calculated values
  const [calculations, setCalculations] = useState({
    totalNonEMICost: 2006,
    recoverableAmount: 802, // 40% of total
    penaltyRate: 2.5, // Penal interest rate in %
    gstRate: 18 // GST rate in %
  });

  // Charge log data
  const [chargeLog, setChargeLog] = useState([
    { id: 1, name: 'ECS Return Charge', date: '05 Mar 2024', amount: 500, type: 'Penalty', penaltyType: 'bounce' },
    { id: 2, name: 'Penal Interest (18 days)', date: '23 Mar 2024', amount: 450, type: 'Overdue Int', penaltyType: 'interest' },
    { id: 3, name: 'Late Fee GST Component', date: '05 Mar 2024', amount: 162, type: 'Tax', penaltyType: 'gst' },
    { id: 4, name: 'ECS Return Charge', date: '12 Feb 2024', amount: 500, type: 'Penalty', penaltyType: 'bounce' },
    { id: 5, name: 'ECS Return Charge', date: '20 Jan 2024', amount: 250, type: 'Penalty', penaltyType: 'bounce' }
  ]);

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
    const numValue = parseFloat(value) || 0;
    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  // Handle adding a new penalty charge
  const addPenaltyCharge = (type, amount) => {
    if (!isProUser) return;
    
    const newCharge = {
      id: chargeLog.length + 1,
      name: type === 'bounce' ? 'ECS Return Charge' : 
            type === 'interest' ? 'Penal Interest (30 days)' : 
            'Late Fee GST Component',
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      amount: amount,
      type: type === 'bounce' ? 'Penalty' : 
             type === 'interest' ? 'Overdue Int' : 
             'Tax',
      penaltyType: type
    };
    
    setChargeLog(prev => [newCharge, ...prev]);
  };

  // Calculate all metrics based on input
  const calculateMetrics = () => {
    if (!isProUser) return;
    
    // Calculate total from charge log
    const totalFromLog = chargeLog.reduce((sum, charge) => sum + charge.amount, 0);
    
    // Calculate bounce charges total
    const bounceTotal = chargeLog
      .filter(charge => charge.penaltyType === 'bounce')
      .reduce((sum, charge) => sum + charge.amount, 0);
    
    // Calculate penal interest total
    const interestTotal = chargeLog
      .filter(charge => charge.penaltyType === 'interest')
      .reduce((sum, charge) => sum + charge.amount, 0);
    
    // Calculate GST total
    const gstTotal = chargeLog
      .filter(charge => charge.penaltyType === 'gst')
      .reduce((sum, charge) => sum + charge.amount, 0);
    
    // Count bounce events
    const bounceEvents = chargeLog.filter(charge => charge.penaltyType === 'bounce').length;
    
    // Calculate recoverable amount (40% of total)
    const recoverableAmount = totalFromLog * 0.40;
    
    // Update form data based on charge log
    setFormData(prev => ({
      ...prev,
      bounceCharges: bounceTotal,
      bounceEvents: bounceEvents,
      penalInterest: interestTotal,
      gstOnPenalties: gstTotal
    }));

    setCalculations({
      totalNonEMICost: totalFromLog,
      recoverableAmount,
      penaltyRate: 2.5,
      gstRate: 18
    });
  };

  // Recalculate on charge log change
  useEffect(() => {
    if (isProUser) {
      calculateMetrics();
    }
  }, [chargeLog, isProUser]);

  // Handle audit button click
  const handleAuditClick = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    calculateMetrics();
    alert('Hidden Costs Audit completed! Check the updated results.');
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

  // Get bounce severity label
  const getBounceSeverity = (events) => {
    if (events >= 3) return 'High Risk';
    if (events >= 2) return 'Medium Risk';
    return 'Low Risk';
  };

  // Get bounce severity color
  const getBounceSeverityColor = (events) => {
    if (events >= 3) return 'text-red-600 bg-red-50';
    if (events >= 2) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  // Audio briefing data
  const audioBriefings = [
    { id: 1, title: 'Bounce Charge Negotiation', description: 'How to negotiate penalty waivers with bank managers effectively.', duration: '03:45' },
    { id: 2, title: 'GST Reclamation Rights', description: 'Understanding your rights to reclaim incorrectly charged GST on penalties.', duration: '04:20' },
    { id: 3, title: 'Sweep Facility Optimization', description: 'Setting up automatic sweep-in from FDs to prevent payment bounces.', duration: '05:15' },
    { id: 4, title: 'Penal Interest Caps', description: 'Legal limits on penal interest rates and how to enforce them.', duration: '06:30' },
    { id: 5, title: 'Payment Buffer Strategy', description: 'Creating automatic payment buffers to avoid late fees.', duration: '04:50' }
  ];

  // Video masterclass data
  const videoMasterclasses = [
    { id: 1, title: 'Hidden Cost Heatmap', duration: '03:30', views: '8,405' },
    { id: 2, title: 'Penalty Negotiation Playbook', duration: '05:10', views: '6,920' },
    { id: 3, title: 'GST Audit Trail Visualization', duration: '04:20', views: '11,100' },
    { id: 4, title: 'Auto-Debit Failure Prevention', duration: '08:45', views: '4,670' },
    { id: 5, title: 'Bank Charge Compliance Masterclass', duration: '06:15', views: '18,300' }
  ];

  // Action items data with dynamic calculations
  const actionItems = [
    { 
      id: 1, 
      number: '1', 
      title: 'Negotiate Waivers', 
      description: `Request the bank manager to waive technical bounce charges. Success rate: ${formData.bounceEvents > 2 ? 'High (70%)' : 'Medium (50%)'}`, 
      buttonText: 'Draft Waiver'
    },
    { 
      id: 2, 
      number: '2', 
      title: 'GST Reclamation', 
      description: `Ensure you are not being charged GST twice on late fees. Potential recovery: ${formatCurrency(formData.gstOnPenalties * 0.3)}`, 
      buttonText: 'Audit Taxes'
    },
    { 
      id: 3, 
      number: '3', 
      title: 'Sweep-In Facility', 
      description: 'Link a Fixed Deposit to your EMI account to prevent bounces when funds are low.', 
      buttonText: 'Enable Sweep'
    },
    { 
      id: 4, 
      number: '4', 
      title: 'Standardize Penal Rate', 
      description: `Current penal rate: ${calculations.penaltyRate}%. If >2%, request reset to standard RBI penal rates.`, 
      buttonText: 'Reset Penal'
    },
    { 
      id: 5, 
      number: '5', 
      title: 'Discipline Buffer', 
      description: `Setup an auto-reminder 48 hours before EMI date to prevent ${formData.bounceEvents} future bounces.`, 
      buttonText: 'Setup Alert'
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
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Hidden Costs Audit</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete penalty detection, recovery analysis, and personalized recommendations.
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
      <AlertCircle size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
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
            <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">Hidden Costs Audit</h2>
            <p className="text-[14px] text-neutral-600 mt-1">Detecting penal charges and tax leakages from your loan accounts.</p>
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
                    <Search className="w-5 h-5 text-neutral-700" />
                    Penalty Detection & Recovery Audit
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-medium uppercase tracking-widest">Identify Hidden Charges</p>
                </div>
                <div className={`px-5 py-2.5 rounded-md flex items-center gap-3 ${
                  isProUser ? (
                    formData.bounceEvents >= 3 ? 'bg-red-600 text-white' : 
                    formData.bounceEvents >= 2 ? 'bg-yellow-600 text-white' : 
                    'bg-green-600 text-white'
                  ) : 'bg-gray-500 text-white'
                }`}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest">
                    {!isProUser ? 'Pro Required' : getBounceSeverity(formData.bounceEvents)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Charge Summary */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-5">
                    {/* Total Non-EMI Cost */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Total Non-EMI Cost</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                        <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900">
                          <BlurredNumberDisplay value={calculations.totalNonEMICost} isCurrency={true} />
                        </div>
                      </div>
                    </div>

                    {/* Bounce Charges and Events */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Bounce Charges</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold text-[15px]">₹</span>
                          {isProUser ? (
                            <input 
                              className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                              type="number" 
                              value={formData.bounceCharges}
                              onChange={(e) => handleInputChange('bounceCharges', e.target.value)}
                            />
                          ) : (
                            <div className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                              XX,XXX
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Bounce Events</label>
                        {isProUser ? (
                          <input 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.bounceEvents}
                            onChange={(e) => handleInputChange('bounceEvents', e.target.value)}
                            min="0"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            X
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Penal Interest */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">Penal Interest</label>
                        {isProUser && (
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${getBounceSeverityColor(formData.bounceEvents)}`}>
                            {calculations.penaltyRate}% Rate
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
                        {isProUser ? (
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.penalInterest}
                            onChange={(e) => handleInputChange('penalInterest', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[16px] text-neutral-900 filter blur-[4px]">
                            XX,XXX
                          </div>
                        )}
                      </div>
                    </div>

                    {/* GST on Penalties */}
                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider block">GST on Penalties</label>
                      <div className="relative">
                        <Receipt className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
                        {isProUser ? (
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[14px] text-neutral-900 outline-none focus:ring-1 focus:ring-neutral-700" 
                            type="number" 
                            value={formData.gstOnPenalties}
                            onChange={(e) => handleInputChange('gstOnPenalties', e.target.value)}
                          />
                        ) : (
                          <div className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md font-medium text-[14px] text-neutral-900 filter blur-[4px]">
                            XX,XXX
                          </div>
                        )}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <div className="text-[10px] font-medium text-neutral-500">
                            {isProUser ? `${calculations.gstRate}% GST` : 'XX% GST'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleAuditClick}
                    disabled={!isProUser}
                    className={`w-full py-4 rounded-md text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <Search className="w-4 h-4" />
                    {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Hidden Costs Audit'}
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Recovery Potential */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-300 group transition-all hover:border-black/30">
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Recoverable Amount</span>
                      <div className="text-[16px] font-medium text-neutral-900 tabular-nums">
                        <BlurredNumberDisplay value={calculations.recoverableAmount} isCurrency={true} />
                      </div>
                      <p className="text-[12px] text-green-600 font-medium mt-1 uppercase tracking-tight">
                        40% of total penalties
                      </p>
                    </div>
                    <div className={`p-5 rounded-lg border transition-all ${
                      isProUser ? (
                        formData.bounceEvents >= 3 ? 'bg-red-50 border-red-500/20' : 
                        formData.bounceEvents >= 2 ? 'bg-yellow-50 border-yellow-500/20' : 
                        'bg-green-50 border-green-500/20'
                      ) : 'bg-gray-50 border-gray-200'
                    }`}>
                      <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest block mb-2">Bounce Risk Level</span>
                      <div className={`text-[16px] font-medium tabular-nums ${
                        isProUser ? (
                          formData.bounceEvents >= 3 ? 'text-red-600' : 
                          formData.bounceEvents >= 2 ? 'text-yellow-600' : 
                          'text-green-600'
                        ) : 'text-gray-500'
                      }`}>
                        {!isProUser ? 'Pro Required' : getBounceSeverity(formData.bounceEvents)}
                      </div>
                      <p className="text-[12px] text-neutral-500 font-regular mt-1 italic">
                        {isProUser ? `${formData.bounceEvents} event${formData.bounceEvents !== 1 ? 's' : ''} detected` : 'Upgrade to see events'}
                      </p>
                    </div>
                  </div>

                  {/* Total Cost Calculation */}
                  <div className={`p-6 rounded-lg text-white shadow-lg relative overflow-hidden group ${
                    isProUser ? (
                      calculations.totalNonEMICost > 1000 ? 'bg-neutral-900' : 'bg-green-700'
                    ) : 'bg-gray-600'
                  }`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-1">
                        <span className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                          isProUser ? (
                            calculations.totalNonEMICost > 1000 ? 'text-red-400' : 'text-green-300'
                          ) : 'text-gray-300'
                        }`}>
                          Total Hidden Costs
                        </span>
                        <h4 className="text-[22px] font-semibold tracking-tight tabular-nums">
                          <BlurredNumberDisplay value={calculations.totalNonEMICost} isCurrency={true} />
                        </h4>
                        <p className="text-[12px] text-neutral-300 leading-relaxed italic">
                          {isProUser ? (
                            calculations.totalNonEMICost > 1000 
                              ? `Penalties are adding ${formatCurrency(Math.round(calculations.totalNonEMICost / 12))} per month to your loan cost.`
                              : 'Your penalty costs are within acceptable limits.'
                          ) : 'Upgrade to see monthly impact'}
                        </p>
                      </div>
                      <div className="bg-white/10 px-6 py-3 rounded-md border border-white/10 text-center min-w-[140px]">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Recovery Potential</div>
                        <div className="text-[18px] font-semibold text-white tabular-nums">
                          <BlurredNumberDisplay value={Math.abs(calculations.recoverableAmount)} isCurrency={true} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warning Note */}
                  <div className="bg-white p-5 rounded-lg border border-neutral-300 flex items-start gap-4">
                    <AlertCircle className="text-red-500 shrink-0 mt-0.5 w-5 h-5" />
                    <div className="space-y-1">
                      <p className="text-[12px] font-semibold text-neutral-900 uppercase tracking-tight">Recovery Rights</p>
                      <p className="text-[14px] text-neutral-600 leading-relaxed font-regular">
                        {isProUser ? (
                          formData.bounceEvents >= 3 
                            ? `You have ${formData.bounceEvents} bounce events. Banks often waive charges for technical issues. Contact customer care immediately.`
                            : formData.bounceEvents >= 2
                            ? `Consider negotiating bounce charges. Success rate is ${formData.bounceEvents > 2 ? '70%' : '50%'} for technical bounces.`
                            : 'Your hidden costs are minimal. Maintain timely payments to avoid penalties.'
                        ) : (
                          'Upgrade to Pro to analyze your recovery rights and get personalized recommendations.'
                        )}
                      </p>
                      <button className={`text-[12px] font-bold uppercase mt-2 flex items-center gap-1 ${isProUser ? 'text-black hover:underline' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                        View Recovery Steps 
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

            {/* Status Card */}
            <div className={`p-6 rounded-lg text-white shadow-lg flex flex-col justify-center relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-gray-600'}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[12px] uppercase tracking-widest">
                  <Shield className="w-4 h-4" />
                  {isProUser ? (
                    formData.bounceEvents >= 3 ? 'High Priority' : 
                    formData.bounceEvents >= 2 ? 'Medium Priority' : 
                    'Low Priority'
                  ) : 'Pro Required'} Audit
                </div>
                <h4 className="text-[18px] font-medium">Recovery Status</h4>
                <p className="text-[12px] text-neutral-400 font-regular">
                  {isProUser ? (
                    formData.bounceEvents >= 3 
                      ? 'Immediate action required to recover significant penalty charges.' 
                      : formData.bounceEvents >= 2
                      ? 'Consider these actions to optimize your penalty recovery.'
                      : 'Your penalty costs are minimal. Monitor regularly.'
                  ) : (
                    'Upgrade to Pro to view your recovery status and actionable recommendations.'
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
                <Wallet className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">What are Hidden Costs?</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  `Hidden costs include bounce charges, penal interest, and GST on penalties that banks levy for payment delays. 
                  You've been charged ${formatCurrency(calculations.totalNonEMICost)} in such costs.`
                ) : (
                  'Upgrade to Pro to uncover hidden costs and penalties in your loan statements.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">Recovery Rights</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  `Banks often waive charges for technical bounces. 
                  ${formData.bounceEvents >= 3 
                    ? ` With ${formData.bounceEvents} bounce events, you have strong grounds for negotiation.`
                    : ' Contact customer care for potential waivers.'}`
                ) : (
                  'Upgrade to Pro to understand your recovery rights and maximize penalty refunds.'
                )}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg border shadow-sm border-l-4 border-l-black ${!isProUser && !isCheckingAccess ? 'border-gray-200' : 'border-neutral-300'}`}>
              <div className="w-10 h-10 bg-neutral-50 rounded-md flex items-center justify-center text-black mb-4">
                <CircleQuestionMark className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-neutral-900 mb-2">How to Recover Costs?</h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {isProUser ? (
                  formData.bounceEvents >= 2 
                    ? `You can recover up to ${formatCurrency(calculations.recoverableAmount)} (${Math.round(calculations.recoverableAmount/calculations.totalNonEMICost*100)}%) through negotiation and GST reclamation.`
                    : 'Maintain timely payments to avoid penalties.'
                ) : (
                  'Upgrade to Pro for personalized cost recovery strategies.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HiddenCostsAudit;