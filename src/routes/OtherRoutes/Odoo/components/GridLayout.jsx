import React from 'react';
import './GridLayout.css'; // We'll create this CSS file next
import { Container } from '../../../../components/Layout';

const GridLayout = () => {
    return (
        <Container>
            <div className="row o_grid_mode" data-row-count="16">
                {/* Large image (visible only on lg screens and up) */}
                <div className="o_grid_item d-none d-lg-block g-height-12" style={{ gridArea: '3 / 3 / 15 / 11' }}>
                    <img
                        src="https://odoocdn.com/openerp_website/static/src/img/apps/home/speed_1.webp"
                        className="shadow-lg img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
                        alt=""
                        loading="lazy"
                    />
                </div>

                {/* Bottom left image (visible only on lg screens and up) */}
                <div className="o_grid_item d-none d-lg-block g-col-lg-6 g-height-6" style={{ gridArea: '11 / 1 / 17 / 7' }}>
                    <img
                        src="https://odoocdn.com/openerp_website/static/src/img/apps/home/ctrl-k-630.gif"
                        alt=""
                        className="shadow-lg img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
                        loading="lazy"
                    />
                </div>

                {/* Right side image (visible only on lg screens and up) */}
                <div className="o_grid_item d-none d-lg-block g-height-9 g-col-lg-3" style={{ gridArea: '8 / 10 / 17 / 13' }}>
                    <img
                        src="https://odoocdn.com/openerp_website/static/src/img/apps/home/speed_3.webp"
                        alt=""
                        className="shadow-lg img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
                        loading="lazy"
                    />
                </div>

                {/* Top left image (visible only on lg screens and up) */}
                <div className="o_grid_item d-none d-lg-block g-col-lg-3 g-height-8" style={{ gridArea: '1 / 1 / 9 / 4' }}>
                    <img
                        src="https://odoocdn.com/openerp_website/static/src/img/apps/home/speed_4.webp"
                        alt=""
                        className="shadow-lg img-thumbnail o_anim_fade_in o_animate o_visible o_animated"
                        loading="lazy"
                    />
                </div>

                {/* Mobile image (visible only on screens smaller than lg) */}
                <div className="o_grid_item d-block d-lg-none">
                    <img
                        src="https://odoocdn.com/openerp_website/static/src/img/apps/home/mobile_productivity.webp"
                        alt=""
                        className="shadow-lg w-100 o_anim_fade_in o_animate"
                        loading="lazy"
                    />
                </div>
            </div>
        </Container>
    );
};

export default GridLayout;