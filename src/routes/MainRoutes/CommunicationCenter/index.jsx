import React, { useState } from "react";
import {
  Bell,
  LifeBuoy,
  History,
  Funnel,
  Settings2,
  MessageSquare,
  CheckCheck,
  ShieldAlert,
  Clock,
} from "lucide-react";

/* ------------------------- Static Data ------------------------- */

const categories = ["All", "Alert", "Offer", "Reminder", "System"];

const initialNotifications = [
  {
    id: 1,
    type: "Alert",
    date: "2024-05-20",
    title: "Your interest rate dropped by 0.25% at SBI!",
    unread: true,
  },
  {
    id: 2,
    type: "Reminder",
    date: "2024-05-18",
    title:
      "Complete your loan profile to unlock advanced refinancing tools.",
    unread: false,
  },
  {
    id: 3,
    type: "System",
    date: "2024-05-15",
    title: "Monthly report for May is now available.",
    unread: true,
  },
];

/* ------------------------- Main Component ------------------------- */

const CommunicationCenter = () => {
  const [activeTab, setActiveTab] = useState("Notifications");
  const [activeCategory, setActiveCategory] = useState("All");
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const [preferences, setPreferences] = useState({
    emiLeak: true,
    rateDrop: true,
    renewal: true,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, unread: false }))
    );
  };

  const filteredNotifications =
    activeCategory === "All"
      ? notifications
      : notifications.filter((n) => n.type === activeCategory);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="space-y-8">
        {/* ---------------- HEADER ---------------- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Communication Center
            </h1>
            <p className="text-slate-500">
              Stay updated on interest rate changes, loan alerts, and support requests.
            </p>
          </div>

          <div className="flex bg-slate-200/50 p-1.5 rounded-2xl border border-slate-200">
            <TabButton
              label="Notifications"
              icon={<Bell size={16} />}
              active={activeTab === "Notifications"}
              onClick={() => setActiveTab("Notifications")}
            />
            <TabButton
              label="Support Hub"
              icon={<LifeBuoy size={16} />}
              active={activeTab === "Support Hub"}
              onClick={() => setActiveTab("Support Hub")}
            />
            <TabButton
              label="Message History"
              icon={<History size={16} />}
              active={activeTab === "Message History"}
              onClick={() => setActiveTab("Message History")}
            />
          </div>
        </header>

        {/* ---------------- CONTENT GRID ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* -------- Sidebar -------- */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400">
                <Funnel size={14} />
                Message Categories
              </h3>

              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      activeCategory === cat
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold mb-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400">
                <Settings2 size={14} />
                Preferences
              </h3>

              <div className="space-y-6">
                <ToggleItem
                  title="EMI Leak Alerts"
                  desc="Get notified on leak detection."
                  checked={preferences.emiLeak}
                  onChange={() => togglePreference("emiLeak")}
                />
                <ToggleItem
                  title="Rate Drop Alerts"
                  desc="Smart bank repo rate alerts."
                  checked={preferences.rateDrop}
                  onChange={() => togglePreference("rateDrop")}
                />
                <ToggleItem
                  title="Renewal Reminders"
                  desc="7 days before expiry."
                  checked={preferences.renewal}
                  onChange={() => togglePreference("renewal")}
                />
              </div>
            </div>
          </div>

          {/* -------- Notifications Feed -------- */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold flex items-center gap-3">
                <MessageSquare size={18} className="text-indigo-600" />
                Notifications Feed
              </h3>

              <button
                onClick={markAllRead}
                className="text-indigo-600 text-xs font-black uppercase tracking-tight hover:underline flex items-center gap-1"
              >
                <CheckCheck size={14} />
                Mark all read
              </button>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {filteredNotifications.map((item) => (
                <NotificationItem key={item.id} item={item} />
              ))}

              {filteredNotifications.length === 0 && (
                <div className="p-10 text-center text-slate-400 text-sm">
                  No messages in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------- Sub Components ------------------------- */

const TabButton = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
      active
        ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
        : "text-slate-500 hover:text-slate-800"
    }`}
  >
    {icon}
    {label}
  </button>
);

const ToggleItem = ({ title, desc, checked, onChange }) => (
  <div className="flex items-start justify-between gap-4">
    <div className="flex-1">
      <p className="text-sm font-bold text-slate-800 mb-0.5">{title}</p>
      <p className="text-[10px] text-slate-400 font-medium">{desc}</p>
    </div>

    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-10 h-5 bg-slate-200 rounded-full peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
    </label>
  </div>
);

const NotificationItem = ({ item }) => {
  const typeStyles = {
    Alert: {
      icon: <ShieldAlert size={20} />,
      bg: "bg-red-100 text-red-600",
    },
    Reminder: {
      icon: <Clock size={20} />,
      bg: "bg-indigo-100 text-indigo-600",
    },
    System: {
      icon: <Bell size={20} />,
      bg: "bg-slate-100 text-slate-600",
    },
  };

  const style = typeStyles[item.type] || typeStyles.System;

  return (
    <div
      className={`p-6 hover:bg-slate-50/50 transition-colors flex gap-6 cursor-pointer ${
        item.unread ? "bg-indigo-50/30" : ""
      }`}
    >
      <div
        className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${style.bg}`}
      >
        {style.icon}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {item.type} • {item.date}
          </span>

          {item.unread && (
            <span className="w-2 h-2 bg-indigo-600 rounded-full" />
          )}
        </div>

        <p
          className={`text-sm ${
            item.unread
              ? "text-slate-900 font-bold"
              : "text-slate-600"
          }`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default CommunicationCenter;