import React from "react";

const CallToActionSection = () => {
  return (
    <section className="py-8 bg-gray-300 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-100 to-white blur-3xl opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Own Your Dream Home?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of satisfied homeowners and take the first step toward
          your dream property with a trusted lending partner.
        </p>

        <div className="flex flex-row gap-4 justify-center">
          {/* ✅ Apply Now Button */}
          <a
            href="/apply-loan"
            rel="noopener noreferrer"
            className="w-[50%] lg:w-auto cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 
              h-11 rounded-md px-8 
              bg-black text-white hover:bg-gray-900 
              focus-visible:ring-2 focus-visible:ring-black/50 shadow-md hover:shadow-lg"
          >
            Apply Now
          </a>

          {/* ✅ Talk to an Expert Button */}
          <a
            href="tel:+919876543210"
            className="w-[50%] lg:w-auto cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300
              h-11 rounded-md px-8 
              border border-black text-black hover:bg-black hover:text-white
              focus-visible:ring-2 focus-visible:ring-black/50"
          >
            Talk to an Expert
          </a>
        </div>

        {/* Small Caption */}
        <p className="text-sm text-gray-600 mt-8">
          24/7 Support • 100% Secure • Trusted by 50,000+ Home Buyers
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
