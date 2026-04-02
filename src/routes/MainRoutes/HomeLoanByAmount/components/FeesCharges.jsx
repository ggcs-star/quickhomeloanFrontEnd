import React from "react";
import { Container } from "../../../../components/Layout";

const FeesCharges = ({ feescharges }) => {
    if (!feescharges) return null;

    const { title, description1, description2, table } = feescharges;

    return (
        <Container>
            <div className="fees-charges rounded-lg mt-12">
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>

                {/* Descriptions */}
                <p className="text-gray-700 mb-2">{description1}</p>
                <p className="text-gray-700 mb-4">{description2}</p>

                {/* Table */}
                {table && table.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-50 border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="py-2 px-4 border-b">Charge</th>
                                    <th className="py-2 px-4 border-b">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">{item.charge}</td>
                                        <td className="py-2 px-4 border-b">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default FeesCharges;
