import React from "react";

const DoctorApplySection = ({ data }) => {
  if (!data) return null;

  return (
    <section
      id="apply"
      className="bg-gray-900 py-20 text-center text-white scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        {data.title || "Empowering Doctors to Own Their Dream Home"}
      </h2>

      <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
        {data.description ||
          "We value your dedication. Let us handle the complexities of financing while you focus on your patients."}
      </p>

      <a
        // href={data.button?.href || "#"}
        className="bg-white text-gray-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 inline-block"
      >
        {data.button?.label || "Apply Now"}
      </a>
    </section>
  );
};

export default DoctorApplySection;
