import React, { useState } from "react";

import ApplyNow from "../ApplyNow";
import Syllabus from "../Syllabus";
import RegulatoryGrievance from "../RegulatoryGrievance";
import EducationCenter from "../EducationCenter";
import StatementAnalyzer from "../StatementAnalyzer";
import RateChangeRiskAudit from "../RateChangeRiskAudit";
import JourneyCompletionAudit from "../JourneyCompletionAudit";
import RateChangeTracker from "../RateChangeTracker";
import BenchmarkTransmissionAudit from "../BenchmarkTransmissionAudit";
import EMIStressIndexAudit from "../EMIStressIndexAudit";
import HiddenCostsAudit from "../HiddenCostsAudit";
import YearlyInterestProjections from "../YearlyInterestProjections";
import PrepaymentForeclosureRights from "../PrepaymentForeclosureRights";
import TaxIntelligenceCertificates from "../TaxIntelligenceCertificates";
import EMIRepaymentHealth from "../EMIRepaymentHealth";
import FreedomRoadmap from "../FreedomRoadmap";
import HomeDashboard from "../HomeDashboard";
import { useNavigate } from "react-router-dom";
import DuplicateStepper from "../DuplicateStepper";

const Dashboard = () => {
  // Changed default activeTab from "syllabus" to "apply"
  const [activeTab, setActiveTab] = useState("apply");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🔒 UNCHANGED LOGIC
  const renderContent = () => {
    switch (activeTab) {
      case "apply": return <DuplicateStepper />;
      case "homedashboard": return <HomeDashboard />;
      case "grievance": return <RegulatoryGrievance />;
      case "education": return <EducationCenter />;
      case "statement": return <StatementAnalyzer />;
      case "ratechange": return <RateChangeRiskAudit />;
      case "journeycompletion": return <JourneyCompletionAudit />;
      case "ratechangetracker": return <RateChangeTracker />;
      case "benchmark": return <BenchmarkTransmissionAudit />;
      case "emistress": return <EMIStressIndexAudit />;
      case "hiddencosts": return <HiddenCostsAudit />;
      case "yearlyinterest": return <YearlyInterestProjections />;
      case "prepaymentforeclosure": return <PrepaymentForeclosureRights />;
      case "taxplanner": return <TaxIntelligenceCertificates />;
      case "emiprepay": return <EMIRepaymentHealth />;
      case "freedom": return <FreedomRoadmap />;
      default: return <DuplicateStepper />; // Changed default to DuplicateStepper for consistency
    }
  };

  const navigate = useNavigate();

  const SidebarButton = ({ id, label, icon, isActive }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsSidebarOpen(false);
      }}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 w-full text-left ${isActive
        ? "bg-neutral-300 text-black shadow-md"
        : "text-neutral-600 hover:bg-neutral-100 hover:text-brand-deep"
        }`}
    >
      {/* Icon on the left side */}
      <span className={isActive ? "text-black" : "text-neutral-600"}>
        {icon}
      </span>
      <span className="font-medium text-[14px] tracking-tight">{label}</span>
    </button>
  );

  const CategoryTitle = ({ children }) => (
    <div className="px-4 pt-4 pb-1 text-[12px] font-semibold text-slate-400 uppercase tracking-widest">
      {children}
    </div>
  );

  // Icons from your HTML
  const icons = {
    layoutDashboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
      </svg>
    ),
    gavel: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path>
        <path d="m16 16 6-6"></path>
        <path d="m21.5 10.5-8-8"></path>
        <path d="m8 8 6-6"></path>
        <path d="m8.5 7.5 8 8"></path>
      </svg>
    ),
    bookOpen: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 7v14"></path>
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
      </svg>
    ),
    fileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
    shieldAlert: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
    ),
    milestone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 13v8"></path>
        <path d="M12 3v3"></path>
        <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"></path>
      </svg>
    ),
    trendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 7h6v6"></path>
        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
      </svg>
    ),
    scale: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v18"></path>
        <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
        <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
        <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
        <path d="M7 21h10"></path>
      </svg>
    ),
    zap: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
      </svg>
    ),
    heartPulse: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
        <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
      </svg>
    ),
    zapOff: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"></path>
        <path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"></path>
        <path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"></path>
        <path d="m2 2 20 20"></path>
      </svg>
    ),
    calculator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
        <line x1="8" x2="16" y1="6" y2="6"></line>
        <line x1="16" x2="16" y1="14" y2="18"></line>
        <path d="M16 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M8 18h.01"></path>
      </svg>
    ),
    shieldCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    receiptText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 16H8"></path>
        <path d="M14 8H8"></path>
        <path d="M16 12H8"></path>
        <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
      </svg>
    ),
    calendarCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
    compass: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    ),
    // Icon for Syllabus
    book: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
      </svg>
    ),
    // Icon for Apply Now
    documentAdd: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2v6h6"></path>
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
        <path d="M3 15h6"></path>
        <path d="M6 12v6"></path>
      </svg>
    ),
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5 12 3l9 6.5"></path>
        <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"></path>
      </svg>
    )
  };

  const navItems = [
    {
      category: "Snapshot", items: [
        // { id: "syllabus", label: "Syllabus", icon: icons.book },
        // { id: "apply", label: "Apply Now", icon: icons.documentAdd },
        { id: "homedashboard", label: "Home Dashboard", icon: icons.home }
      ]
    },
    {
      category: "Resolution", items: [
        { id: "grievance", label: "Regulatory Grievance", icon: icons.gavel }
      ]
    },
    {
      category: "Knowledge", items: [
        { id: "education", label: "Education Center", icon: icons.bookOpen }
      ]
    },
    {
      category: "Audit & Analysis", items: [
        { id: "statement", label: "Statement Analyzer", icon: icons.fileText },
        { id: "ratechange", label: "Rate Change Risk", icon: icons.shieldAlert },
        { id: "journeycompletion", label: "Journey Completion", icon: icons.milestone }
      ]
    },
    {
      category: "Transparency", items: [
        { id: "ratechangetracker", label: "Rate Change Tracker", icon: icons.trendingUp },
        { id: "benchmark", label: "Benchmark Gap Audit", icon: icons.scale },
        { id: "hiddencosts", label: "Hidden Costs", icon: icons.zapOff }
      ]
    },
    {
      category: "Financial Health", items: [
        { id: "emistress", label: "EMI Stress Index", icon: icons.heartPulse },
        { id: "yearlyinterest", label: "Yearly Interest Calc", icon: icons.calculator }
      ]
    },
    {
      category: "Optimization", items: [
        { id: "prepaymentforeclosure", label: "Foreclosure Engine", icon: icons.shieldCheck },
        { id: "taxplanner", label: "Tax Planner", icon: icons.receiptText },
        { id: "emiprepay", label: "EMI Continuity", icon: icons.calendarCheck }
      ]
    },
    {
      category: "Strategy", items: [
        { id: "freedom", label: "Freedom Roadmap", icon: icons.compass }
      ]
    },
  ];

  // Handler for Apply Now button
  const handleApplyNowClick = () => {
    setActiveTab("apply");
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex max-w-8xl mx-auto min-h-screen">

      {/* 📱 Mobile Header */}
      <div className="lg:hidden fixed lg:top-18 left-0 right-0 z-20 bg-white border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={handleApplyNowClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 text-black rounded-lg hover:opacity-90 transition-all duration-200 font-medium shadow-md"
          >
            <span>Apply Now</span>
          </button>
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-xl"
        >
          ☰
        </button>
      </div>

      {/* 🌑 Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 📚 Sidebar */}
      <aside
        className={`
          fixed lg:sticky z-50 lg:top-0
          w-64 bg-white border-r border-gray-200 p-6 py-10
          h-[160vh] transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Apply Now Button at the top - NOW IT WORKS THE SAME AS INSIDE SNAPSHOT */}
        <button
          onClick={handleApplyNowClick}
          className="w-full mb-6 flex items-center justify-center gap-2 px-4 py-3 bg-gray-300 text-black rounded-lg hover:opacity-90 transition-all duration-200 font-medium shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2v6h6"></path>
            <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
            <path d="M3 15h6"></path>
            <path d="M6 12v6"></path>
          </svg>
          <span>Apply Now</span>
        </button>

        <div className="space-y-1 max-h-full pr-1">
          {navItems.map((section) => (
            <div key={section.category}>
              <CategoryTitle>{section.category}</CategoryTitle>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <SidebarButton
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    icon={item.icon}
                    isActive={activeTab === item.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* 🧠 Main Content */}
      <main className="flex-1 lg:p-8 overflow-y-auto mt-32 lg:mt-0">
        {renderContent()}
      </main>

    </div>
  );
};

export default Dashboard;