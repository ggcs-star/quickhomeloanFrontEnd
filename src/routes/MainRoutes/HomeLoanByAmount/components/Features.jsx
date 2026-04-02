import React from 'react';
import { Container } from '../../../../components/Layout';

const Features = ({ features }) => {
    return (
        <Container>
            <div className="features-section rounded-lg mt-6">
                <h3 className="text-2xl font-semibold mb-4">{features.title}</h3>
                <ul className="space-y-2 ">
                    {features.points.map((point, index) => (
                        <li key={index} className="text-md text-gray-600">
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary mr-2"></span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Features;
