import React from "react";

const CalculatorHeader = ({
  title,
  subtitle,
  description,
  className = "",
}) => {
  return (
    <header className={`text-center my-8 ${className}`}>
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        {title}
      </h1>

      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}

     
    </header>
  );
};

export default CalculatorHeader;
