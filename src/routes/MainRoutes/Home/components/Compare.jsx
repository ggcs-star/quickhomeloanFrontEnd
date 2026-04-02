import React from 'react';
import { Container } from '../../../../components/Layout';
import img1 from "../../../../assets/compare/trust.svg";
import img2 from "../../../../assets/compare/simplify.svg";
import img3 from "../../../../assets/compare/generate.svg";
import img4 from "../../../../assets/compare/educate.svg";
import img5 from "../../../../assets/compare/smooth.svg";

const Compare = () => {
    const cards = [
        { img: img1, numbers:1, title: "Build Trust" },
        { img: img2, numbers:2, title: "Simplify Loan Choices" },
        { img: img3, numbers:3, title: "Generate Leads" },
        { img: img4, numbers:4, title: "Educate Customers" },
        { img: img5, numbers:5, title: "Smooth, Compliant and Scalable" },
    ];

    return (
        <Container>
            <div className="mx-auto">
                <h1 className="text-lg lg:text-3xl font-bold text-start my-6">
                    Compare & Apply for "Best Home Loan Offer"
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-start justify-start text-start hover:shadow-xl transition"
                        >
                            <img 
                                src={card.img} 
                                alt={card.title} 
                                className="w-16 h-16 object-contain mb-3" 
                            />
                            <div className='flex gap-1 items-start'>
                                <h2 className="text-3xl font-bold text-gray-800">
                                {card.numbers}.
                            </h2>
                            <h2 className="text-lg font-semibold text-gray-800 pt-2">
                                {card.title}
                            </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Compare;
