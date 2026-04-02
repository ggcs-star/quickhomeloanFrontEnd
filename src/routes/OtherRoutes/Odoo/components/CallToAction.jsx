import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import leftimage from '../../../../assets/detail/fireworks/fireworks_01.svg'
import rightimage from '../../../../assets/detail/fireworks/fireworks_02.svg'

const CallToAction = () => {
  return (
    <section className="overflow-hidden text-center pt-16 pb-14 bg-white font-caveatRegular">
      <div className="container mx-auto px-4">
        {/* Main heading with images around "Unleash" */}
        <h3 className="text-6xl lg:text-8xl font-bold mb-10 flex flex-col justify-center items-center gap-2">
          <span className="flex items-center justify-center gap-4">
            {/* Left Image */}
            <img 
              src={leftimage} 
              alt="Left Decoration" 
              className="w-20 h-20 md:w-40 md:h-40 absolute left-[50px] lg:left-[550px]" 
              loading="lazy" 
            />

            {/* Text with fireworks effect */}
            <span className="relative inline-block top-10">
              Unleash
              {/* <span className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></span>
              <span className="absolute -bottom-2 -left-3 w-8 h-8 bg-pink-400 rounded-full opacity-20"></span> */}
            </span>

            {/* Right Image */}
            <img 
              src={rightimage}
              alt="Right Decoration" 
              className="w-20 h-20 md:w-40 md:h-40 absolute right-[50px] lg:right-[500px]" 
              loading="lazy" 
            />
          </span>

          <span className='py-8'>
            your <span className="text-green-800">growth potential</span>
          </span>
        </h3>

        {/* Call-to-action button */}
        <a 
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-axiforma inline-flex items-center gap-3 bg-pink-900 hover:bg-pink-800 text-white font-bold py-3 px-8 rounded-lg text-lg mb-4 transition-colors duration-200"
        >
          <FaWhatsapp className="text-2xl" /> Whatsapp Now
        </a>

        {/* Decorative arrow */}
        {/* <img 
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg" 
          className="block mx-auto mb-3" 
          alt="" 
          loading="lazy" 
        />

        <p className="text-sm text-gray-600 font-axiforma">
          No credit card required <br /> Instant access
        </p> */}
      </div>
    </section>
  );
};

export default CallToAction;
