import React from 'react';
import { Container } from "../../../../components/Layout";
import Slider from "react-slick";
import { brandWrapper } from '../../../../db';



const Companies = () => {

    const settings = {
        dots: false,
        draggable: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Container className='!px-0'>
            <div className="flex flex-col lg:flex-row font-helvetica tracking-wide">
                <div className="flex justify-center items-center">
                    <div className="relative z-20 px-2 py-5 rounded-r-lg bg-blue sm:p-6 flex items-center justify-center">
                        <h1 className="text-black text-5xl font-helveticabold text-center w-40 flex justify-center items-center">
                            Our Features
                        </h1>
                    </div>
                </div>
                <div className="w-full overflow-hidden flex justify-center items-center xs:pt-8">
                    <div className="w-full">
                        <Slider {...settings}>
                            {brandWrapper?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-center items-center mx-12 lg:mx-20 py-20"
                                >
                                    <div className="bg-white shadow-2xl rounded-2xl p-6 w-60 text-center border border-gray-200 h-48 flex flex-col justify-center items-center">
                                        <img src={item.image} alt="" className='w-10 h-10 mt-2'/>
                                        <h1 className="text-2xl font-medium text-gray-800 py-4 ">{item.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>

            </div>
        </Container>

    );
};

export default Companies;
