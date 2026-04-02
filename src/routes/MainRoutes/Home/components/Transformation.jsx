import React, { useState } from 'react';
import { transformation } from '../../../../db';
import { Container } from "../../../../components/Layout";
import { Link } from 'react-router-dom';
import { H2, H3 } from "../../../../components/Typography";
import { PrimaryBtn } from '../../../../components/Button';

const Transformation = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <Container>
            <div className="transformations-container  flex-wrap justify-center gap-6 mb-20 py-8 font-helvetica tracking-wide">
                <div className='flex flex-col'>
                    <div className="text-center mb-8 ">
                        <H2 className="">Best Revenue Generation Tools for News Reporters</H2>
                        {/* <H3 className="">We facilitate digital collaboration and growth opportunities for chemists, stockists, and pharmaceutical companies.</H3> */}
                    </div>

                    <div className='flex lg:flex-row flex-col'>
                        {transformation.map((item, index) => (
                            <div
                                key={index}
                                className="mx-4 my-4 shadow-lg rounded-lg w-auto lg:w-[300px] py-4 transition-all duration-300 ease-in-out"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: hoveredIndex === index ? item.bgColor || 'white' : '#ebecef',
                                    color: hoveredIndex === index ? item.textColor || 'white' : 'black',
                                    transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                                }}
                            >
                                <div className="flex flex-col items-center justify-between flex-grow text-center px-8 py-6">
                                    <div className="title-container">
                                        <p className="font-helveticabold text-xl px-4 mt-6 flex-grow">
                                            {item.title}
                                        </p>
                                        <p className="font-helveticabold text-md mt-2 flex-grow" style={{
                                            color: hoveredIndex === index ? 'white' : '#64748B',
                                        }}>
                                            {item.title2}
                                        </p>
                                    </div>

                                    <div className="description-container">
                                        <p
                                            className="mt-6 flex-grow md:leading-8"
                                            style={{
                                                color: hoveredIndex === index ? 'white' : '#64748B',
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="link-container text-center flex items-center justify-center">
                                    <PrimaryBtn>
                                        <Link
                                            to={item.link}
                                            className="cursor-pointer"
                                        >
                                            Explore Now
                                        </Link>
                                    </PrimaryBtn>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Transformation;
