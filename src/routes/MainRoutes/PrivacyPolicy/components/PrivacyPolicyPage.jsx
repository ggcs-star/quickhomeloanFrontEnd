import React from "react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information Collection",
      content: "We collect the following types of information:",
      points: [
        "Personal Information: Name, phone number, email, address, employment details, income, and loan requirements.",
        "Financial Information: Basic financial details required for loan eligibility (we do not store sensitive banking credentials).",
        "Technical Information: IP address, browser type, device information, and usage data.",
      ],
    },
    {
      title: "Purpose of Information Use",
      content: "We use your information for:",
      points: [
        "Processing loan inquiries and connecting with lenders",
        "Customer support and communication",
        "Marketing and promotional updates (with consent)",
        "Improving website performance and user experience",
      ],
    },
    {
      title: "Information Sharing",
      content: "We may share your data with:",
      points: [
        "Banks and NBFCs",
        "Lending partners and DSAs",
        "Service providers for processing applications",
        "Legal authorities when required",
      ],
    },
    {
      title: "Cookies",
      content:
        "We use cookies to enhance user experience and analyze traffic. Users can disable cookies via browser settings.",
    },
    {
      title: "Data Security",
      content:
        "We implement industry-standard security measures. However, no online platform is completely secure.",
    },
    {
      title: "User Rights",
      content: "You have the right to:",
      points: [
        "Access your personal data",
        "Request correction or deletion",
        "Opt-out of marketing communications",
      ],
    },
    {
      title: "Children's Privacy",
      content:
        "Our services are not intended for individuals under 18 years of age.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this policy from time to time. Changes will be posted on this page.",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen pt-[96px] md:pt-[100px] pb-[70px] sm:pb-[100px] md:pb-[120px] px-[16px] sm:px-[24px] md:px-[30px]">
      
      {/* Header */}
      <div className="max-w-[1000px] mx-auto text-center mb-[40px] sm:mb-[50px] md:mb-[60px]">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-bricolageSemiBold text-gray-900 leading-tight">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mt-[8px] sm:mt-[10px] text-[13px] sm:text-[14px] md:text-[15px] max-w-[700px] mx-auto">
          This Privacy Policy explains how Quick Home Loan collects, uses, and protects your information.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-[1000px] mx-auto space-y-[18px] sm:space-y-[22px] md:space-y-[26px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-gray-200 shadow-sm"
          >
            {/* Title */}
            <div className="bg-gray-100 px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[12px] sm:py-[14px]">
              <h3 className="text-gray-900 font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px]">
                {section.title} :
              </h3>
            </div>

            {/* Content */}
            <div className="bg-white px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[16px] sm:py-[18px] md:py-[20px]">
              
              {section.content && (
                <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] mb-[10px]">
                  {section.content}
                </p>
              )}

              {section.points && (
                <ul className="list-disc pl-5 space-y-[6px] sm:space-y-[8px] text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}