import React from 'react';
import blueHighlight from '../../../../assets/detail/blue_highlight_1.svg';
import { Container } from '../../../../components/Layout';
import { useLocation } from 'react-router-dom';
import { productDetailPages } from '../../../../db/assets';

// Import localpulse icons for dynamic display
import page_localpulse from '../../../../assets/detail/icons/localpulse/pages management.png';
import post_localpulse from '../../../../assets/detail/icons/localpulse/post management.png';
import gallery_localpulse from '../../../../assets/detail/icons/localpulse/gallery system.png';
import estore_localpulse from '../../../../assets/detail/icons/localpulse/E-store features.png';
import video_localpulse from '../../../../assets/detail/icons/localpulse/video content.png';
import contentmonetize_localpulse from '../../../../assets/detail/icons/localpulse/content monetization.png';
import personalisedmobile_localpulse from '../../../../assets/detail/icons/localpulse/personalised mobile app.png';
// import personalisedwebsite_localpulse from '../../../../assets/detail/icons/personalised website.png';

const AllTheTech = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const currentSlug = pathParts.includes('details') ? pathParts[pathParts.length - 1] : 'localpulse';
    const product = productDetailPages[currentSlug];

    // Use product devices if available, otherwise use first 7 features as devices
    const devices = product?.devices || product?.features?.slice(0, 7)?.map(feature => ({
        title: feature.title,
        image: feature.icon,
        alt: feature.title
    })) || [];

    // Get the dynamic heading text
    const headingText = product?.allTheTech?.heading || 'All the tech in one platform';

    return (
        <Container>
            <div className="bg-cover bg-center bg-no-repeat w-full">
                <h1 className="text-center text-5xl md:text-7xl font-bold mt-20 relative font-caveatRegular leading-tight">
                    <span className="relative inline-block">
                        <span className="relative inline-block">
                            {headingText}
                            <span
                                className="absolute top-1/2 -translate-y-1/2 lg:top-[1.5px] lg:translate-y-0 left-0 h-20 w-full -z-10 transform -rotate-1"
                                style={{
                                    backgroundImage: `url(${blueHighlight})`,
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            ></span>

                        </span>
                    </span>
                </h1>
            </div>


            <div className="flex flex-wrap justify-center py-20">
                {devices.map((device, index) => (
                    <div
                        key={index}
                        className="w-1/2 sm:w-1/2 lg:w-[20%] px-4 lg:px-0 mx-0 lg:mx-6 pb-8"
                    >
                        <div className="bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                            <img
                                src={device.image}
                                alt={device.alt}
                                className="size-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-center text-lg mt-3 font-semibold">
                            {device.title}
                        </h3>
                    </div>
                ))}
            </div>

        </Container>
    );
};

export default AllTheTech;
