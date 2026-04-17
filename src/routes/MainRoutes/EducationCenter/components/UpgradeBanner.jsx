import React from 'react';
import { Lock } from 'lucide-react';

const UpgradeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-6">
      <div className="flex items-center gap-3 mb-3">
        <Lock size={24} className="text-indigo-600" />
        <h4 className="text-[16px] font-bold text-indigo-900">Unlock Full Education Center</h4>
      </div>
      <p className="text-[13px] text-indigo-800 mb-4">
        Get access to all audio lessons, video masterclasses, and complete educational content.
      </p>
      <button 
        className="w-full bg-indigo-600 text-white py-2.5 rounded-md text-[13px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition"
        onClick={() => {
          window.dispatchEvent(new CustomEvent("openProModal"));
        }}
      >
        Upgrade to Pro
      </button>
    </div>
  );
};

export default UpgradeBanner;