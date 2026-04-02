import React from 'react';
import { Container } from '../../../../components/Layout';

const Eligibility = ({ eligibility }) => {
    return (
        <Container>
            <div className="eligibility-section rounded-lg mt-6">
                <h3 className="text-2xl font-semibold mb-4">{eligibility.title}</h3>
                <ul className="space-y-2">
                    {eligibility.points.map((point, index) => (
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

export default Eligibility;
