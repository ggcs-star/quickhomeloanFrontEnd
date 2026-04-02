import React from "react";
import {
  History,
  CreditCard,
  Bell,
  LifeBuoy,
} from "lucide-react";

const timeline = [
  {
    date: "2024-01-10",
    category: "Subscription",
    title: "Subscription Activated",
    description: "Pro Annual Plan started successfully.",
    color: "indigo",
    icon: CreditCard,
  },
  {
    date: "2024-01-12",
    category: "Alert",
    title: "EMI Leak Alert Sent",
    description: "Detected 0.5% interest spread efficiency issue.",
    color: "amber",
    icon: Bell,
  },
  {
    date: "2024-01-15",
    category: "Support",
    title: "User Raised Payment Ticket",
    description: "Query regarding GST invoice mismatch.",
    color: "red",
    icon: LifeBuoy,
  },
  {
    date: "2024-01-16",
    category: "System",
    title: "Ticket Resolved",
    description: "Invoice corrected and sent to email.",
    color: "slate",
    icon: History,
  },
  {
    date: "2024-05-20",
    category: "Alert",
    title: "Renewal Reminder Sent",
    description: "Plan expires in 235 days.",
    color: "amber",
    icon: Bell,
  },
];

const colorVariants = {
  indigo: {
    dot: "bg-indigo-600",
    icon: "text-indigo-400",
  },
  amber: {
    dot: "bg-amber-500",
    icon: "text-amber-400",
  },
  red: {
    dot: "bg-red-500",
    icon: "text-red-400",
  },
  slate: {
    dot: "bg-slate-400",
    icon: "text-slate-400",
  },
};

const CommunicationHistoryTimeline = () => {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      
      {/* Header */}
      <div className="p-8 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-50 text-indigo-600 rounded-2xl border border-slate-200">
            <History size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">
              Communication History Timeline
            </h3>
            <p className="text-sm text-slate-500">
              Chronological history of your profile activity.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Body */}
      <div className="p-10 relative">
        
        {/* Vertical Line */}
        <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-slate-100"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const colors = colorVariants[item.color];

            return (
              <div
                key={index}
                className="relative pl-14 flex items-start gap-4 animate-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* Dot */}
                <div
                  className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center -translate-x-1.5 text-white ${colors.dot}`}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>

                {/* Card */}
                <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex-1 hover:bg-white hover:shadow-md hover:border-indigo-100 transition-all">
                  
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {item.date} • {item.category}
                    </span>

                    <Icon size={14} className={colors.icon} />
                  </div>

                  <h4 className="font-bold text-slate-800 mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-500 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunicationHistoryTimeline;