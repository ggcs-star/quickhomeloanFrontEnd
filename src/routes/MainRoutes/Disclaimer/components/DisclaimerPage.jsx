import React from "react";

export default function DisclaimerPage() {
  const sections = [
    {
      title: "General Information",
      content:
        "The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and updated, we make no guarantees of completeness or accuracy.",
    },
    {
      title: "No Financial Advice",
      content:
        "Quick Home Loan does not provide financial, legal, or investment advice. Users are advised to consult with qualified professionals before making financial decisions.",
    },
    {
      title: "No Guarantee of Loan Approval",
      content:
        "We do not guarantee loan approval, interest rates, or loan terms. All approvals are subject to lender policies, eligibility criteria, and verification.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites or lenders. We are not responsible for their content, policies, or services.",
    },
    {
      title: "Limitation of Liability",
      content: [
        "Use of this website",
        "Loan rejection or delay",
        "Actions of third-party lenders",
      ],
      isList: true,
    },
    {
      title: "Website Availability",
      content:
        "We do not guarantee uninterrupted or error-free operation of the website.",
    },
    {
      title: "User Acceptance",
      content:
        "By using this website, you agree to this disclaimer.",
    },
  ];

  return (
    <div className="w-full bg-white pt-[96px] md:pt-[100px] pb-[70px] sm:pb-[100px] md:pb-[120px] px-[16px] sm:px-[20px] md:px-[30px]">
      
      {/* Header */}
      <div className="max-w-[1000px] mx-auto text-center mb-[35px] sm:mb-[50px] md:mb-[60px]">
        <h1 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-bricolageSemiBold text-gray-900 leading-tight">
          Disclaimer
        </h1>

        <p className="text-gray-500 mt-[10px] text-[13px] sm:text-[14px] md:text-[15px] max-w-[800px] mx-auto leading-[22px] sm:leading-[24px]">
          The information provided by Quick Home Loan on this website is for general informational purposes only. Please read the following disclaimer carefully before using our services.
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
              <h3 className="text-gray-900 font-bricolageSemiBold text-[15px] sm:text-[18px] md:text-[20px]">
                {section.title} :
              </h3>
            </div>

            {/* Content */}
            <div className="bg-white px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[14px] sm:py-[18px] md:py-[20px]">
              {section.isList ? (
                <ul className="list-disc pl-5 text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px] space-y-1">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
                  {section.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}