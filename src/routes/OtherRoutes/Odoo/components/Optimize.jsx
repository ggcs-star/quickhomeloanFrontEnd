import React from 'react';
import bgImage from '../../../../assets/detail/optimize/illustration.svg';
import yellow_underline from '../../../../assets/detail/yellow_underline.svg';
import GridLayout from './GridLayout';
import ExperienceSpeedSection from './ExperienceSpeedSection';

const Optimize = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[400px] w-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center py-20 text-7xl font-bold mt-20 relative font-caveatRegular">
          Optimized for{' '}
          <span className="relative inline-block">
            productivity
            <span
              className="absolute top-[11.5px] left-0 h-20 w-[100%] -z-10 transform -rotate-1"
              style={{
                backgroundImage: `url(${yellow_underline})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            ></span>
          </span>
        </h1>
      </div>

      {/* <div className="row o_grid_mode" data-row-count="16">
        <div className="o_grid_item d-none d-lg-block g-height-12" style={{ gridArea: '3 / 3 / 15 / 11' }}>
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/home/speed_1.webp"
            className="img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
            alt=""
            loading="lazy"
            style={{ visibility: 'visible', animationPlayState: 'running' }}
          />
        </div>
        <div className="o_grid_item d-none d-lg-block g-col-lg-6 g-height-6" style={{ gridArea: '11 / 1 / 17 / 7' }}>
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/home/ctrl-k-630.gif"
            alt=""
            className="img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
            loading="lazy"
            style={{ visibility: 'visible', animationPlayState: 'running' }}
          />
        </div>
        <div className="o_grid_item d-none d-lg-block g-height-9 g-col-lg-3" style={{ gridArea: '8 / 10 / 17 / 13' }}>
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/home/speed_3.webp"
            alt=""
            className="img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
            loading="lazy"
            style={{ visibility: 'visible', animationPlayState: 'running' }}
          />
        </div>
        <div className="o_grid_item d-none d-lg-block g-col-lg-3 g-height-8" style={{ gridArea: '1 / 1 / 9 / 4' }}>
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/home/speed_4.webp"
            alt=""
            className="img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
            loading="lazy"
            style={{ visibility: 'visible', animationPlayState: 'running' }}
          />
        </div>
        <div className="o_grid_item d-block d-lg-none">
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/home/mobile_productivity.webp"
            alt=""
            className="w-100 o_anim_fade_in o_animate"
            loading="lazy"
            style={{ visibility: 'visible', animationPlayState: 'paused' }}
          />
        </div>
      </div> */}

      <GridLayout/>
      <ExperienceSpeedSection/>
    </div>
  );
};

export default Optimize;
