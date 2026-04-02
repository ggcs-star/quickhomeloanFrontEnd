import React from "react";

const ProModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      
      {/* Modal Box */}
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* CONTENT (your UI) */}
        <div className="p-5">
          
          <div className="text-center mb-5">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-3xl font-bold text-gray-900">₹999</span>
              <span className="text-gray-500 text-sm">/year</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Everything you need to grow your social media presence
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            {[
              "Unlimited Projects & Links",
              "10 Social Accounts",
              "Advanced Analytics",
              "Priority Support",
              "Team Collaboration",
              "Custom URL Shortener",
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="text-indigo-500 mr-3">✔</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100 text-center">
            <p className="text-sm text-gray-600">Yearly subscription</p>
            <div className="flex justify-center gap-2 mt-1">
              <span className="text-2xl font-bold text-gray-900">₹999</span>
              <span className="text-gray-500">/year</span>
            </div>
            <p className="text-xs text-gray-500">
              Billed yearly, cancel anytime
            </p>
          </div>

          {/* CTA */}
          <button
            className="w-full py-3.5 bg-gradient-to-r from-[#4C6FFF] to-[#8B5CF6] 
              text-white font-bold rounded-lg hover:shadow-lg 
              transition-all text-sm mb-3"
            onClick={() => alert("Payment Flow Here")}
          >
            Subscribe at ₹999/yearly
          </button>

          <p className="text-center text-xs text-gray-500">
            🔒 Secure SSL encrypted payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProModal;