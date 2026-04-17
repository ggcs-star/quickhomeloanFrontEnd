import React, { useState, useEffect } from "react";
import {
  Zap,
  Calendar,
  Clock,
  Receipt,
  Download,
  FileText,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const StatusBadge = ({ status }) => {
  const styles = {
    Paid: "bg-green-100 text-green-700",
    Active: "bg-indigo-100 text-indigo-700",
    Expired: "bg-slate-100 text-slate-500",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
        styles[status] || "bg-slate-100 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
};

const BillingRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-white/50">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const SubscriptionControlCenter = () => {
  const [subscriptionData, setSubscriptionData] = useState({
    status: "Loading...",
    plan: "Pro Member",
    startDate: "-",
    endDate: "-",
    autoRenewal: "-",
    daysRemaining: 0,
    usagePercent: 0,
    amount: 0,
    invoice: {
      id: "-",
      paymentMethod: "-",
      amount: "-",
      billingDate: "-",
    },
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const historyData = [
    {
      title: "Pro Plan Subscription",
      amount: "₹ 999",
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
      type: "Subscription",
      status: "Paid",
    },
    {
      title: "Trial Period Activation",
      amount: "₹ 0",
      date: "27 Mar 2026",
      type: "Trial",
      status: "Expired",
    },
  ];

  // Function to fetch subscription data
  const fetchSubscriptionData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setError("No authentication token found. Please log in.");
        setIsLoading(false);
        return;
      }
      
      const response = await axios.get(
        "https://backend.quickhomeloan.in/public/api/check-access",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.data && response.data.access !== undefined) {
        const data = response.data;
        
        // Format dates
        const startDate = data.start_date ? new Date(data.start_date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) : "-";
        const endDate = data.end_date ? new Date(data.end_date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) : "-";
        
        // Calculate usage percentage
        const totalDays = data.days_remaining ? 
          Math.ceil((new Date(data.end_date) - new Date(data.start_date)) / (1000 * 60 * 60 * 24)) : 1;
        const daysUsed = totalDays - (data.days_remaining || 0);
        const usagePercent = data.days_remaining ? Math.round((daysUsed / totalDays) * 100) : 0;
        
        setSubscriptionData({
          status: data.access ? "Active" : "Inactive",
          plan: data.access ? "Pro Member" : "Free Member",
          startDate: startDate,
          endDate: endDate,
          autoRenewal: data.auto_renewal || "Not Set",
          daysRemaining: data.days_remaining || 0,
          usagePercent: usagePercent,
          amount: data.amount || 0,
          invoice: {
            id: `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`,
            paymentMethod: "Credit Card (Visa ending in 4242)",
            amount: `₹ ${data.amount || 999}`,
            billingDate: startDate,
          },
        });
        
        // Update localStorage
        if (data.access === true) {
          localStorage.setItem("is_pro_user", "true");
        } else {
          localStorage.setItem("is_pro_user", "false");
        }
      }
    } catch (err) {
      console.error("Error fetching subscription data:", err);
      setError(err.response?.data?.message || err.message || "Failed to load subscription data");
      
      // Fallback to localStorage data
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      if (isProLocal) {
        setSubscriptionData(prev => ({
          ...prev,
          status: "Active",
          plan: "Pro Member",
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptionData();
    
    // Listen for subscription updates
    const handleSubscriptionUpdate = (event) => {
      if (event.detail?.updated) {
        fetchSubscriptionData();
      }
    };
    
    window.addEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    
    return () => {
      window.removeEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    };
  }, []);

  const handleDownloadInvoice = () => {
    // Create a simple invoice download
    const invoiceContent = `
      INVOICE
      ========================================
      Invoice ID: ${subscriptionData.invoice.id}
      Date: ${subscriptionData.invoice.billingDate}
      Plan: ${subscriptionData.plan}
      Amount: ${subscriptionData.invoice.amount}
      Payment Method: ${subscriptionData.invoice.paymentMethod}
      Status: ${subscriptionData.status}
      ========================================
      Thank you for your subscription!
    `;
    
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice_${subscriptionData.invoice.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <RefreshCw size={48} className="animate-spin text-indigo-600 mx-auto mb-4" />
            <p className="text-slate-600">Loading subscription details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !subscriptionData.status === "Active") {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Subscription</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchSubscriptionData}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="space-y-8 relative">
        {/* Header */}
        <header className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Subscription Control Center
            </h1>
            <p className="text-slate-500">
              Manage your plan, billing history, and service receipts.
            </p>
          </div>
          <button
            onClick={fetchSubscriptionData}
            className="p-2 text-slate-500 hover:text-indigo-600 transition-colors"
            title="Refresh"
          >
            <RefreshCw size={20} />
          </button>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${
                subscriptionData.status === "Active" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-slate-100 text-slate-500"
              }`}>
                {subscriptionData.status}
              </span>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-100 text-indigo-600">
                <Zap size={32} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase">
                  Current Plan
                </p>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                  {subscriptionData.plan}
                </h2>
              </div>
            </div>

            {/* Plan Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div>
                <p className="info-label flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <Calendar size={14} /> Start Date
                </p>
                <p className="info-value text-sm font-semibold text-slate-800">
                  {subscriptionData.startDate}
                </p>
              </div>

              <div>
                <p className="info-label flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <Calendar size={14} /> End Date
                </p>
                <p className="info-value text-sm font-semibold text-slate-800">
                  {subscriptionData.endDate}
                </p>
              </div>

              <div>
                <p className="info-label flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <Clock size={14} /> Auto-Renewal
                </p>
                <p className="info-value text-sm font-semibold text-slate-800">
                  {subscriptionData.autoRenewal}
                </p>
              </div>

              <div>
                <p className="info-label flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <Clock size={14} /> Days Remaining
                </p>
                <p className="text-sm font-bold text-indigo-600">
                  {subscriptionData.daysRemaining} Days
                </p>
              </div>
            </div>

            {/* Usage Bar */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                <span>Usage Period</span>
                <span>{subscriptionData.usagePercent}%</span>
              </div>

              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex p-1 border border-slate-200">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: `${subscriptionData.usagePercent}%` }}
                />
              </div>

              <div className="flex justify-between text-xs font-medium text-slate-400">
                <span>Started: {subscriptionData.startDate}</span>
                <span>Expires: {subscriptionData.endDate}</span>
              </div>
            </div>
          </div>

          {/* Billing Card */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Receipt className="text-indigo-400" />
                Last Billing Details
              </h3>

              <div className="space-y-4 text-sm">
                <BillingRow label="Invoice ID" value={subscriptionData.invoice.id} />
                <BillingRow
                  label="Paid via"
                  value={subscriptionData.invoice.paymentMethod}
                />
                <BillingRow
                  label="Amount"
                  value={`₹ ${subscriptionData.amount}`}
                />
                <BillingRow
                  label="Billing Date"
                  value={subscriptionData.invoice.billingDate}
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button 
                onClick={handleDownloadInvoice}
                className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Download size={18} />
                Download Invoice
              </button>

              <button className="w-full border border-white/20 text-white/70 py-3 rounded-xl font-bold text-sm hover:bg-white/5 transition-colors">
                Update Billing Info
              </button>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <FileText size={18} />
              Payment History
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historyData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-3 text-sm font-medium text-slate-800">{item.title}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{item.amount}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{item.date}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{item.type}</td>
                    <td className="px-6 py-3">
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionControlCenter;