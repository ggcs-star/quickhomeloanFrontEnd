import React from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import quickhomeloan from "../../../../assets/home/HeroSection/quickhomeloan.mp4";
import { Container } from "../../../../components/Layout";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calculators");
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center">
      <Container>
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center md:px-6 pb-12">

          {/* LEFT SECTION */}
          <div>
            <span className="bg-gray-100 text-gray-800 inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium">
              Trusted by 50,000+ Home Buyers
            </span>

            <div className="py-4 md:py-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold">
                Your Dream Home is Just a Click Away
              </h1>

              <p className="text-base md:text-lg text-gray-700 mt-3">
                Get instant home loan approval with competitive interest rates
                starting from{" "}
                <span className="font-semibold text-black">6.5% p.a.</span> Simple
                process, quick disbursal, and expert guidance all the way.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <a
                href="https://myscore.cibil.com/CreditView/enrollShort_new.page?enterprise=CIBIL&offer=FACRA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-gray-800 
               inline-flex items-center justify-center 
               gap-1 lg:gap-2
               text-sm h-10 rounded-md 
               px-4 sm:px-5 lg:px-6 
               transition-all font-medium 
               w-full sm:w-44"
              >
                Check Eligibility
                <ArrowRight className="h-5 w-5 shrink-0" />
              </a>

              <button
                onClick={handleClick}
                className="border border-neutral-300 text-black hover:bg-black hover:text-white 
               inline-flex items-center justify-center 
               gap-1  /* <-- reduced from gap-2 */
               text-sm h-10 rounded-md px-6 
               transition-all font-medium 
               w-full sm:w-44"
              >
                Calculate EMI
              </button>
            </div>


            {/* STATS SECTION */}
            <div className="flex flex-row justify-center lg:justify-start sm:items-center gap-12 sm:gap-10 pt-8">
              {/* Stat 1 */}
              <div>
                <div className="text-2xl md:text-3xl font-semibold">6.5%</div>
                <div className="text-sm text-gray-600">Interest Rate</div>
              </div>

              <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

              {/* Stat 2 */}
              <div>
                <div className="text-2xl md:text-3xl font-semibold">24hrs</div>
                <div className="text-sm text-gray-600">Approval Time</div>
              </div>

              <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

              {/* Stat 3 */}
              <div>
                <div className="text-2xl md:text-3xl font-semibold">₹5Cr</div>
                <div className="text-sm text-gray-600">Max Loan</div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION WITH VIDEO */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-300">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={quickhomeloan} type="video/mp4" />
              </video>
            </div>

            {/* FLOATING CARD (only visible on lg+) */}
            <div className="absolute -bottom-6 -left-4 bg-white border border-neutral-300 rounded-xl shadow-lg p-3 lg:p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-3">
                  <CircleCheck className="text-black h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                  <div className="text-lg md:text-xl font-semibold">50,000+</div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </Container>
    </div>
  );
};

export default HeroSection;
