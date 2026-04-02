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
  Lock
} from 'lucide-react';
import axios from 'axios';

const RateChangeTracker = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [bankSpread, setBankSpread] = useState(2.25);
  const [currentBenchmark, setCurrentBenchmark] = useState('EBLR (Repo)');
  const [rateHistory, setRateHistory] = useState([
    {
      id: 1,
      date: 'Oct 12, 2023',
      type: 'Repo Rate Hike',
      oldRate: 8.50,
      newRate: 8.75,
      impact: 'EMI +₹1,250',
      impactType: 'emi',
      color: 'red',
      icon: 'trending-up'
    },
    {
      id: 2,
      date: 'Feb 15, 2024',
      type: 'Reset Review',
      oldRate: 8.75,
      newRate: 8.75,
      impact: 'Tenure +3 Months',
      impactType: 'tenure',
      color: 'orange',
      icon: 'clock'
    },
    {
      id: 3,
      date: 'Jun 20, 2024',
      type: 'Spread Adjustment',
      oldRate: 8.75,
      newRate: 9.10,
      impact: 'EMI +₹2,100',
      impactType: 'emi',
      color: 'red',
      icon: 'trending-up'
    }
  ]);

  const [complianceStatus, setComplianceStatus] = useState({
    resetResponse: 'Compliant',
    spreadVolatility: 'Moderate'
  });

  const [currentRate, setCurrentRate] = useState(9.10);

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

  // Calculate total impact
  const totalImpact = rateHistory.reduce((sum, event) => {
    if (event.impactType === 'emi') {
      const amount = parseInt(event.impact.match(/\d+/)[0]) || 0;
      return sum + amount;
    }
    return sum;
  }, 0);

  // Calculate rate changes count
  const rateChangesCount = rateHistory.filter(event => event.oldRate !== event.newRate).length;

  // Calculate average spread
  const calculateAverageSpread = () => {
    const spreads = rateHistory.map(event => event.newRate - (event.oldRate || event.newRate));
    const validSpreads = spreads.filter(s => !isNaN(s) && s !== 0);
    if (validSpreads.length === 0) return 0;
    const average = validSpreads.reduce((a, b) => a + b, 0) / validSpreads.length;
    return average.toFixed(2);
  };

  const handleAddRateChange = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    const newDate = new Date().toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    const newEvent = {
      id: rateHistory.length + 1,
      date: newDate,
      type: 'Manual Update',
      oldRate: currentRate,
      newRate: currentRate + 0.25,
      impact: 'EMI +₹1,500',
      impactType: 'emi',
      color: 'red',
      icon: 'trending-up'
    };

    setRateHistory([newEvent, ...rateHistory]);
    setCurrentRate(currentRate + 0.25);
  };

  const handleUpdateSpread = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    const newSpread = parseFloat((bankSpread + 0.1).toFixed(2));
    setBankSpread(newSpread);
    
    // Add a spread adjustment event
    const newDate = new Date().toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    const newEvent = {
      id: rateHistory.length + 1,
      date: newDate,
      type: 'Spread Adjustment',
      oldRate: currentRate,
      newRate: currentRate + 0.1,
      impact: 'EMI +₹850',
      impactType: 'emi',
      color: 'red',
      icon: 'trending-up'
    };

    setRateHistory([newEvent, ...rateHistory]);
    setCurrentRate(currentRate + 0.1);
  };

  const handleBenchmarkChange = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    setCurrentBenchmark(prev => prev === 'EBLR (Repo)' ? 'MCLR' : 'EBLR (Repo)');
  };

  const handleComplianceCheck = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    const now = new Date();
    const lastEventDate = new Date(rateHistory[0].date);
    const daysSinceLastChange = Math.floor((now - lastEventDate) / (1000 * 60 * 60 * 24));
    
    const newStatus = {
      resetResponse: daysSinceLastChange <= 90 ? 'Compliant' : 'Non-Compliant',
      spreadVolatility: bankSpread > 2.5 ? 'High' : bankSpread > 2.0 ? 'Moderate' : 'Low'
    };
    
    setComplianceStatus(newStatus);
    
    alert(`Compliance Audit Complete!\n\nReset Response: ${newStatus.resetResponse}\nSpread Volatility: ${newStatus.spreadVolatility}\nDays since last change: ${daysSinceLastChange}\nCurrent Spread: ${bankSpread}%`);
  };

  // Blurred number display component
  const BlurredNumberDisplay = ({ value, className = "", isPercentage = false, isCurrency = false }) => {
    if (isProUser || isCheckingAccess) {
      let displayValue = value;
      if (isPercentage) displayValue = `${value}%`;
      else if (isCurrency) displayValue = `₹${value}`;
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

  const getColorClasses = (color) => {
    switch(color) {
      case 'red': return 'bg-red-50 text-red-600';
      case 'orange': return 'bg-orange-50 text-orange-600';
      case 'green': return 'bg-green-50 text-green-600';
      default: return 'bg-neutral-50 text-neutral-700';
    }
  };

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Rate Tracking</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get access to complete rate history, compliance audits, and advanced tracking features.
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
      <Activity size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h2 className="text-[20px] font-semibold text-neutral-900 tracking-tight">Rate Change Tracker</h2>
            <p className="text-[14px] text-neutral-600 mt-1">
              Monitoring interest volatility and benchmark transparency.
            </p>
          </div>
          <ProStatusIndicator />
        </div>

        {/* Show upgrade banner for non-pro users */}
        {/* {!isProUser && !isCheckingAccess && <UpgradeBanner />} */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Rate History */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[16px] font-medium text-neutral-900 flex items-center gap-2">
                <TrendUpIcon className="w-4 h-4 text-neutral-700" />
                Interest Change History
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-widest">
                  Last {rateHistory.length} Events
                </span>
                <div className="text-xs text-neutral-500">
                  {rateChangesCount} rate changes • 
                  <BlurredNumberDisplay value={totalImpact} isCurrency={true} /> total EMI impact
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {rateHistory.map((event) => (
                <div
                  key={event.id}
                  className={`bg-white p-6 rounded-md border border-neutral-300 shadow-sm flex items-center gap-6 ${isProUser ? 'group hover:border-black transition-all' : 'opacity-80'}`}
                >
                  <div className={`p-4 rounded-md shrink-0 ${getColorClasses(event.color)}`}>
                    {event.icon === 'trending-up' ? (
                      <TrendingUp className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[14px] font-semibold text-neutral-900">{event.date}</span>
                      <span className="text-[12px] bg-neutral-50 px-2 py-0.5 rounded uppercase font-medium text-neutral-500 tracking-tighter">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {event.oldRate !== event.newRate ? (
                        <>
                          <span className="text-neutral-400 line-through text-[14px]">
                            <BlurredNumberDisplay value={event.oldRate} isPercentage={true} />
                          </span>
                          <span className="text-neutral-400">→</span>
                        </>
                      ) : null}
                      <div className="flex items-center gap-1">
                        <span className="text-[16px] font-medium text-neutral-900">
                          <BlurredNumberDisplay value={event.newRate} isPercentage={true} />
                        </span>
                        <span className="text-[12px] font-medium text-neutral-500">ROI</span>
                      </div>
                      {event.oldRate !== event.newRate && (
                        <span className={`text-xs font-medium ${
                          event.newRate > event.oldRate ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {event.newRate > event.oldRate ? '↑' : '↓'} 
                          <BlurredNumberDisplay value={Math.abs(event.newRate - event.oldRate)} isPercentage={true} />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[12px] text-neutral-500 font-medium uppercase block mb-1">
                      Pass-through Impact
                    </span>
                    <span className={`text-[16px] font-medium ${
                      event.impactType === 'emi' ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {isProUser ? event.impact : (
                        <span className="filter blur-[3px]">₹XX,XXX</span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Summary */}
            <div className="bg-white p-4 rounded-md border border-neutral-300 shadow-sm">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3">
                  <div className="text-sm text-neutral-500 mb-1">Current Rate</div>
                  <div className="text-xl font-semibold text-neutral-900">
                    <BlurredNumberDisplay value={currentRate} isPercentage={true} />
                  </div>
                </div>
                <div className="text-center p-3">
                  <div className="text-sm text-neutral-500 mb-1">Spread Avg</div>
                  <div className="text-xl font-semibold text-neutral-900">
                    <BlurredNumberDisplay value={calculateAverageSpread()} isPercentage={true} />
                  </div>
                </div>
                <div className="text-center p-3">
                  <div className="text-sm text-neutral-500 mb-1">Total Impact</div>
                  <div className="text-xl font-semibold text-black">
                    <BlurredNumberDisplay value={totalImpact} isCurrency={true} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-300 border-dashed p-8 rounded-md flex flex-col items-center justify-center text-neutral-500 text-[14px]">
              <ClockIcon className="lucide lucide-clock mb-2 text-neutral-300 w-6 h-6" />
              <span>Older history archives available in full statement import</span>
              {isProUser ? (
                <button 
                  onClick={handleAddRateChange}
                  className="mt-4 text-black text-sm font-medium hover:text-neutral-800 transition-colors"
                >
                  + Add Rate Change Event
                </button>
              ) : (
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent("openProModal"))}
                  className="mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors flex items-center gap-1"
                >
                  <Lock size={12} />
                  Upgrade to Add Events
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Bank Spread Card */}
            <div className="bg-white px-5 py-4 rounded-md border border-neutral-300 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-50 rounded-md">
                  <Activity className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <span className="text-[12px] text-neutral-500 uppercase font-medium tracking-widest block">
                    Bank Spread
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-medium text-neutral-900">
                      <BlurredNumberDisplay value={bankSpread} isPercentage={true} /> (Fixed)
                    </span>
                    {isProUser ? (
                      <button 
                        onClick={handleUpdateSpread}
                        className="text-xs text-black hover:text-neutral-800 transition-colors"
                      >
                        Update
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">Pro feature</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Active Bench Card */}
            <div className="bg-white px-5 py-4 rounded-md border border-neutral-300 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-50 rounded-md">
                  <CalendarCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <span className="text-[12px] text-neutral-500 uppercase font-medium tracking-widest block">
                    Active Bench
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-medium text-neutral-900">
                      {isProUser ? currentBenchmark : (
                        <span className="filter blur-[3px] inline-block">XXXXXXX</span>
                      )}
                    </span>
                    {isProUser ? (
                      <button 
                        onClick={handleBenchmarkChange}
                        className="text-xs text-black hover:text-neutral-800 transition-colors"
                      >
                        Switch
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">Pro feature</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transparency Audit */}
            <div className={`p-6 rounded-md text-white shadow-lg relative overflow-hidden ${isProUser ? 'bg-neutral-900' : 'bg-neutral-600'}`}>
              <div className="relative z-10">
                <h3 className="text-[16px] font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Transparency Audit
                </h3>
                <p className="text-[14px] opacity-90 leading-relaxed mb-8">
                  Banks must notify you of rate changes and their impact on EMI/Tenure. Any delayed pass-through of rate cuts is a <strong>Regulatory Violation</strong>.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[12px] bg-white/10 p-3 rounded-md border border-white/10">
                    <span className="font-medium">Reset Response Time</span>
                    <span className={`font-semibold uppercase tracking-wider ${
                      isProUser ? (
                        complianceStatus.resetResponse === 'Compliant' ? 'text-green-400' : 'text-red-400'
                      ) : 'text-yellow-400'
                    }`}>
                      {isProUser ? complianceStatus.resetResponse : 'Pro Required'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[12px] bg-white/10 p-3 rounded-md border border-white/10">
                    <span className="font-medium">Spread Volatility</span>
                    <span className={`font-semibold uppercase tracking-wider ${
                      isProUser ? (
                        complianceStatus.spreadVolatility === 'Low' ? 'text-green-400' :
                        complianceStatus.spreadVolatility === 'Moderate' ? 'text-yellow-400' : 'text-red-400'
                      ) : 'text-yellow-400'
                    }`}>
                      {isProUser ? complianceStatus.spreadVolatility : 'Pro Required'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
                <TrendingUp className="w-48 h-48" />
              </div>
            </div>

            {/* Strategic Tip */}
            <div className="bg-white p-6 rounded-md border border-neutral-300 shadow-sm border-l-4 border-l-black">
              <h4 className="text-[16px] font-medium text-neutral-900 mb-4 flex items-center gap-2">
                <CircleQuestionMark className="w-4 h-4 text-black" />
                Strategic Tip
              </h4>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Whenever a rate increases, banks often extend tenure instead of increasing EMI. Check if your tenure is exceeding 30 years—this can exponentially increase your interest cost.
              </p>
              <div className="mt-4 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Current spread: <BlurredNumberDisplay value={bankSpread} isPercentage={true} /></span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Benchmark: {isProUser ? currentBenchmark : (
                    <span className="filter blur-[3px] inline-block">XXXXXXX</span>
                  )}</span>
                </div>
              </div>
              <button className={`mt-6 text-[12px] font-semibold uppercase tracking-widest flex items-center gap-1 transition-transform ${isProUser ? 'text-black hover:translate-x-1' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isProUser}>
                Read ROI Guide <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Compliance Lock */}
            <div className={`p-6 rounded-md text-white shadow-xl ${isProUser ? 'bg-neutral-900' : 'bg-neutral-600'}`}>
              <h3 className="text-[16px] font-medium mb-3">Compliance Lock</h3>
              <p className="text-[14px] opacity-80 mb-6">
                Verify if your bank applied the latest Repo Rate cut to your loan account.
              </p>
              <button 
                onClick={handleComplianceCheck}
                className={`w-full py-3 rounded-md text-[14px] font-semibold tracking-wide transition-all ${isProUser ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-500 text-gray-200 cursor-not-allowed'}`}
                disabled={!isProUser}
              >
                {!isProUser && !isCheckingAccess ? 'Upgrade to Audit' : 'Complete Compliance'}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Risk Education */}
        <div className="space-y-10 pt-4">
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
                    className={`bg-white p-5 rounded-md border border-neutral-300 flex items-center justify-between ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'}`}
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
                    className={`bg-white rounded-md border border-neutral-300 overflow-hidden ${isProUser ? 'group hover:border-black transition-all shadow-sm' : 'opacity-70'} flex h-28`}
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
                            <ClockIcon className="w-3 h-3" /> {video.duration}
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
      </div>
    </main>
  );
};

export default RateChangeTracker;