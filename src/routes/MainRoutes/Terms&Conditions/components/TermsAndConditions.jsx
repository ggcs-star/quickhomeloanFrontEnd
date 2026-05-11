import React from "react";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using the services provided by Quick Home Loan (https://www.quickhomeloan.in), you agree to comply with and be bound by the following terms and conditions. If you do not agree, please do not use our services.",
    },
    {
      title: "Nature of Services",
      content:
        "Quick Home Loan is a loan facilitation platform and not a bank or NBFC. We connect users with financial institutions, banks, and lending partners based on the information provided.",
    },
    {
      title: "User Responsibilities",
      content:
        "Users must provide accurate, complete, and up-to-date information including personal, employment, and financial details. We are not responsible for any delay or rejection caused due to incorrect or incomplete information.",
    },
    {
      title: "Loan Approval",
      content:
        "Loan approval, interest rates, tenure, and disbursal are solely at the discretion of the respective lenders. Quick Home Loan does not guarantee loan approval.",
    },
    {
      title: "Data Sharing Consent",
      content:
        "By using our services, you consent to sharing your information with banks, NBFCs, and third-party partners for loan processing and related services.",
    },
    {
      title: "Third-Party Services",
      content:
        "We are not responsible for the actions, policies, or services of third-party lenders or partners.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website including text, design, logo, and graphics are the property of Quick Home Loan and may not be copied or reused without permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Quick Home Loan shall not be liable for any direct, indirect, or consequential damages including financial loss, loan rejection, or delays arising from use of our services.",
    },
    {
      title: "Termination",
      content:
        "We reserve the right to suspend or terminate access to our services at any time without prior notice in case of misuse or violation of terms.",
    },
    {
      title: "Governing Law",
      content:
        "These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Ahmedabad, Gujarat.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms at any time. Continued use of the website constitutes acceptance of updated terms.",
    },
  ];

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full bg-white min-h-screen pt-[96px] md:pt-[100px] pb-[80px] sm:pb-[100px] md:pb-[120px] px-[16px] sm:px-[24px] md:px-[30px]">
      
      {/* Header */}
      <div className="max-w-[1000px] mx-auto text-center mb-[40px] sm:mb-[50px] md:mb-[60px]">
        <h1 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bricolageSemiBold text-gray-900 leading-tight">
          Terms & Conditions
        </h1>

        <p className="text-gray-500 mt-[8px] sm:mt-[10px] text-[13px] sm:text-[14px] md:text-[15px]">
          These Terms and Conditions were last updated on {formattedDate}.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-[1000px] mx-auto space-y-[18px] sm:space-y-[22px] md:space-y-[26px]">
        {sections.map((item, index) => (
          <div
            key={index}
            className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-gray-200 shadow-sm"
          >
            {/* Title */}
            <div className="bg-gray-100 px-[18px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[14px] sm:py-[16px]">
              <h3 className="text-gray-900 font-bricolageSemiBold text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                {item.title} :
              </h3>
            </div>

            {/* Content */}
            <div className="bg-white px-[18px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[16px] sm:py-[18px] md:py-[20px]">
              <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}