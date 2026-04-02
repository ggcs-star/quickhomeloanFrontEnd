import React from "react";
import {
  Zap,
  Calendar,
  Clock,
  Receipt,
  Download,
  FileText,
} from "lucide-react";

const subscriptionData = {
  status: "Active",
  plan: "Pro Member",
  startDate: "2024-01-10",
  endDate: "2025-01-10",
  autoRenewal: "Enabled",
  daysRemaining: 0,
  usagePercent: 100,
  invoice: {
    id: "INV-2024-001",
    paymentMethod: "Credit Card (Visa ending in 4242)",
    amount: "₹ 4,999",
    billingDate: "2024-01-10",
  },
};

const historyData = [
  {
    title: "Pro Plan Subscription",
    amount: "₹ 4,999",
    date: "2024-01-10",
    type: "Subscription",
    status: "Paid",
  },
  {
    title: "Trial Period Activation",
    amount: "₹ 0",
    date: "03 Jan 2024",
    type: "Trial",
    status: "Expired",
  },
  {
    title: "Free Account Access",
    amount: "₹ 0",
    date: "20 Dec 2023",
    type: "Standard",
    status: "Active",
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    Paid: "bg-green-100 text-green-700",
    Active: "bg-indigo-100 text-indigo-700",
    Expired: "bg-slate-100 text-slate-500",
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

const SubscriptionControlCenter = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="space-y-8 relative">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-bold text-slate-900">
            Subscription Control Center
          </h1>
          <p className="text-slate-500">
            Manage your plan, billing history, and service receipts.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-green-100 text-green-700">
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
                <p className="info-label">
                  <Calendar size={14} /> Start Date
                </p>
                <p className="info-value">{subscriptionData.startDate}</p>
              </div>

              <div>
                <p className="info-label">
                  <Calendar size={14} /> End Date
                </p>
                <p className="info-value">{subscriptionData.endDate}</p>
              </div>

              <div>
                <p className="info-label">
                  <Clock size={14} /> Auto-Renewal
                </p>
                <p className="info-value">{subscriptionData.autoRenewal}</p>
              </div>

              <div>
                <p className="info-label">
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
                <span>Joined: 10/01/2024</span>
                <span>Expires: 10/01/2025</span>
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
                  value={subscriptionData.invoice.amount}
                />
                <BillingRow
                  label="Billing Date"
                  value={subscriptionData.invoice.billingDate}
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-lg">
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
        <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
            <h2 className="font-bold text-lg">Billing & Service History</h2>
            <button className="text-indigo-600 text-sm font-bold flex items-center gap-1">
              Export History <Download size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  <th className="px-6 py-4">Item / Plan</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Invoice</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {historyData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-slate-800 text-sm">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm font-bold">
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      {item.type}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 hover:text-indigo-800 transition-colors p-2 rounded-lg hover:bg-white shadow-sm">
                        <FileText size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

const BillingRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-white/50">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default SubscriptionControlCenter;