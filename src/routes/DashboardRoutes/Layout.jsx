import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Dashboard/components/Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-br from-blue-900 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold flex items-center">
                <span className="mr-2">🏠</span>
                QuickHomeLoan CRM
              </h1>
              <div className="hidden md:flex space-x-2">
                <NavLink to="/dashboard" className={({ isActive }) => `px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-800" : "hover:bg-blue-800"}`}>Dashboard</NavLink>
                <NavLink to="/dashboard/leads" className={({ isActive }) => `px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-800" : "hover:bg-blue-800"}`}>Leads</NavLink>
                <NavLink to="/dashboard/automation" className={({ isActive }) => `px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-800" : "hover:bg-blue-800"}`}>Automation</NavLink>
                <NavLink to="/dashboard/reports" className={({ isActive }) => `px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-800" : "hover:bg-blue-800"}`}>AI Insights</NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search..." className="bg-blue-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-blue-200" />
                <span className="absolute right-3 top-2.5 text-blue-200">🔍</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">AS</span>
                </div>
                <span className="hidden md:block">Admin User</span>
                <span className="text-sm">▾</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar - Sticky */}
        <div className="pt-8 sticky top-20 h-fit bg-gray-50">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 pt-14 overflow-auto">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

