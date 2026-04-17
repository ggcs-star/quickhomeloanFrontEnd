import React, { useState } from "react";

const ProModal = ({ isOpen, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayment = async () => {
    try {
      setIsProcessing(true);

      // 👉 YOUR PAYMENT API / RAZORPAY / STRIPE
      await new Promise((res) => setTimeout(res, 2000)); // simulate success

      // ✅ CLOSE MODAL AFTER SUCCESS
      onClose();

    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

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

          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-3.5 bg-gradient-to-r from-[#4C6FFF] to-[#8B5CF6] 
              text-white font-bold rounded-lg transition-all text-sm
              ${isProcessing ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg"}`}
          >
            {isProcessing ? "Processing..." : "Subscribe at ₹999/year"}
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            🔒 Secure SSL encrypted payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProModal;