import React from 'react';
import { Container } from '../../../../components/Layout';
import img1 from "../../../../assets/compare/one.svg";
import img2 from "../../../../assets/compare/two.svg";
import img3 from "../../../../assets/compare/three.svg";
import img4 from "../../../../assets/compare/four.svg";

const Tools = () => {
    const cards = [
        { img: img1, title: "Tool1" },
        { img: img2, title: "Tool2" },
        { img: img3, title: "Tool3" },
        { img: img4, title: "Tool4" },
    ];

    return (
        <Container>
            <div className="mx-auto">
                <h1 className="text-lg lg:text-3xl font-bold text-start my-6">
                    Tools
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-16 h-16 object-contain mb-3"
                            />
                            <h2 className="text-lg font-semibold text-gray-800">
                                {card.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Tools;
