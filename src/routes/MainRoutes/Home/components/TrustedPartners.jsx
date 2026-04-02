import React from "react";
import Marquee from "react-fast-marquee";

// 🏦 Import bank logos
import hdfc from "../../../../assets/banklogo/hdfc.png";
import icici from "../../../../assets/banklogo/icici.png";
import sbi from "../../../../assets/banklogo/sbi.png";
import axis from "../../../../assets/banklogo/axis.png";
import kotak from "../../../../assets/banklogo/kotak.png";
import pnb from "../../../../assets/banklogo/pnb.png";

// 🖼️ Bank Logos and URLs
const banks = [
  { name: "HDFC Bank", logo: hdfc, link: "https://www.hdfcbank.com" },
  { name: "ICICI Bank", logo: icici, link: "https://www.icicibank.com" },
  { name: "State Bank of India", logo: sbi, link: "https://www.sbi.co.in" },
  { name: "Axis Bank", logo: axis, link: "https://www.axisbank.com" },
  { name: "Kotak Mahindra", logo: kotak, link: "https://www.kotak.com" },
  { name: "Punjab National Bank", logo: pnb, link: "https://www.pnbindia.in" },
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
        {banks.map((bank) => (
          <a
            href={bank.link}
            key={bank.name}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 transition-all duration-300 flex items-center justify-center group gap-4"
          >
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
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedPartners;
