import React from "react";
import { Container } from "../../../../components/Layout";

const HeroSection = ({ data }) => {
  return (
    <div className="py-32 text-neutral-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-neutral-600">
            {data.description}
          </p>

          {/* Buttons */}
          {data.buttons && (
            <div className="flex justify-center items-center gap-4 mt-4 mb-10">

              {data.buttons.map((btn, index) => (
                <a key={index} href={btn.href}>   {/* UPDATED: using btn.href */}
                  <button
                    className={`
                      w-[150px] lg:w-[220px]
                      rounded-md cursor-pointer focus:outline-none 
                      transition-all duration-200 ease-in-out 
                      inline-flex items-center justify-center 
                      px-4 lg:px-8 py-3 text-sm lg:text-lg
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
          )}

          {/* Highlights */}
          {data.highlights && (
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {data.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center md:justify-start text-neutral-800"
                >
                  <span className="mr-3 text-neutral-700 text-lg">✓</span>
                  <span className="text-neutral-700">{highlight}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
