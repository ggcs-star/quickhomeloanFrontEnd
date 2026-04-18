import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// 🏦 Import bank logos
import hdfc from "../../../../assets/banklogo/hdfc.png";
import icici from "../../../../assets/banklogo/icici.png";
import sbi from "../../../../assets/banklogo/sbi.png";
import axis from "../../../../assets/banklogo/axis.png";
import kotak from "../../../../assets/banklogo/kotak.png";
import pnb from "../../../../assets/banklogo/pnb.png";

// 🖼️ Bank Logos and URLs
const banks = [
  { name: "HDFC Bank", logo: hdfc, link: "/home-loan/details/hdfc" },
  { name: "ICICI Bank", logo: icici, link: null },
  { name: "State Bank of India", logo: sbi, link: "/home-loan/details/sbi" },
  { name: "Axis Bank", logo: axis, link: "/home-loan/details/axis" },
  { name: "Kotak Mahindra", logo: kotak, link: null },
  { name: "Punjab National Bank", logo: pnb, link: null },
];

const TrustedPartners = () => {
  return (
    <section className="bg-gray-100 py-6">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-slate-900 mb-3">
          Our Trusted Lending Partners
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We've partnered with India's leading banks to bring you the best home loan offers.
        </p>
      </div>

      {/* 🔥 Smooth scroll + pause on hover */}
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {banks.map((bank) => {
          const content = (
            <>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
                {bank.name}
              </p>
            </>
          );

          if (bank.link) {
            return (
              <Link to={bank.link} key={bank.name} className="p-6 transition-all duration-300 flex items-center justify-center group gap-4">
                {content}
              </Link>
            );
          }

          return (
            <div key={bank.name} className="p-6 transition-all duration-300 flex items-center justify-center group gap-4 cursor-default">
              {content}
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default TrustedPartners;
