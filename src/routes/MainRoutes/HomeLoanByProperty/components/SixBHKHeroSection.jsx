import React from "react";

const SixBHKHeroSection = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-gray-50">
      <section className="text-black pt-28 pb-24 md:pt-44">
        <div className="container mx-auto px-6 text-center">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-4 mt-5">
            {data.buttons.map((btn, index) => (
              <a key={index} href={btn.link}>
                <button
                  className={`
                    w-[169px] lg:w-[350px]
                    rounded-md cursor-pointer focus:outline-none 
                    transition-all duration-200 ease-in-out
                    inline-flex items-center justify-center 
                    px-1 lg:px-2 py-3 text-sm lg:text-lg
                    ${
                      btn.variant === "primary"
                        ? "bg-gray-300 text-black hover:text-white hover:bg-neutral-800"
                        : "bg-white text-black border border-neutral-300 hover:bg-black hover:text-white"
                    }
                  `}
                >
                  {btn.label}
                </button>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default SixBHKHeroSection;
