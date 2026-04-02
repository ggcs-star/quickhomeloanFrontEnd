import React from "react";

const ApprovalTips = ({ data }) => {
  return (
    <div className="py-12"> 
      {/* Title Box */}
      <div className="bg-gray-100 rounded-md border border-neutral-300 p-8 text-neutral-900">
        
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          {data.title}
        </h2>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.tips.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md border border-neutral-300 border-l-4 border-l-neutral-900"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {item.tip}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ApprovalTips;
