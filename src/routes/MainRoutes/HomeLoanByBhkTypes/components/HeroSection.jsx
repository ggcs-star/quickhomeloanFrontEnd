import React from "react";
import { Container } from "../../../../components/Layout";

const HeroSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white text-black py-20 lg:py-32 mx-auto text-center">

      <h1 className="text-2xl md:text-6xl font-extrabold text-black tracking-tight leading-tight">
        {data.title}
      </h1>

      <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
        {data.description}
      </p>

      <div className="flex flex-row justify-center items-center gap-4 mt-5">

        {/* Button 1 */}
        {data.buttons?.[0] && (
          <a href={data.buttons[0].href}>
            <button
              className="
                w-[150px] lg:w-[250px]
                rounded-md cursor-pointer focus:outline-none 
                transition-all duration-200 ease-in-out
                inline-flex items-center justify-center 
                px-1 lg:px-8 py-3 text-sm lg:text-lg
                bg-gray-300 text-black 
                hover:text-white hover:bg-neutral-800
              "
            >
              {data.buttons[0].label}
            </button>
          </a>
        )}

        {/* Button 2 */}
        {data.buttons?.[1] && (
          <a href={data.buttons[1].href}>
            <button
              className="
                w-[150px] lg:w-[250px]
                rounded-md cursor-pointer focus:outline-none 
                transition-all duration-200 ease-in-out
                inline-flex items-center justify-center 
                px-1 lg:px-8 py-3 text-sm lg:text-lg
                bg-white text-black border border-neutral-300
                hover:bg-black hover:text-white
              "
            >
              {data.buttons[1].label}
            </button>
          </a>
        )}

      </div>
    </section>
  );
};

export default HeroSection;
