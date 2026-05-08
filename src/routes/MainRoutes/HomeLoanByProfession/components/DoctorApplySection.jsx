import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorApplySection = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;

  const handleClick = (e) => {
    e.preventDefault(); // 🔥 prevents any accidental refresh
    navigate(data.button?.href || "/apply-loan");
  };

  return (
    <section
      id="apply"
      className="bg-gray-900 py-20 text-center text-white scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        {data.title || "Empowering Doctors to Own Their Dream Home"}
      </h2>

      <h3 className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
        {data.description ||
          "We value your dedication. Let us handle the complexities of financing while you focus on your patients."}
      </h3>

      <button
        onClick={handleClick}
        className="bg-white text-gray-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100"
      >
        {data.button?.label || "Apply Now"}
      </button>
    </section>
  );
};

export default DoctorApplySection;