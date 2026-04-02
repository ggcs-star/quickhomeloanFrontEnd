import React from 'react';

const ExperienceSpeedSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-6/12 xl:w-5/12 pt-6 text-center">
        <p className="text-lg mb-4 font-bold">
          <strong>Experience true speed,</strong> reduced data entry, smart AI, and a fast UI. All operations are done in less than 90ms - faster than a blink.
        </p>
        
        <img 
          src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_3.svg" 
          alt="" 
          className="mx-auto mb-4 rotate-45" 
          loading="lazy" 
        />
        
        <div className="relative group" data-video-id="5S-1uDGD4GA">
          <a 
            href="#" 
            className="text-pink-900 font-caveatSemiBold text-4xl mx-auto inline-flex items-center hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://odoocdn.com/openerp_website/static/src/img/graphics/youtube.svg" 
              width="45px" 
              className="mr-2" 
              alt="" 
              loading="lazy" 
            />
            Compare with SAP
          </a>
          
          {/* Optional hover effect */}
    
        </div>
      </div>
    </div>
  );
};

export default ExperienceSpeedSection;