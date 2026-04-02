import React from "react";
import { Container } from "../../../../components/Layout";

const DocumentsRequired = ({ documents }) => {
    if (!documents) return null;

    const { title, descriptions } = documents;

    return (
        <Container>
            <div className="documents-required rounded-lg mt-12">
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>

                {/* Table */}
                {descriptions && descriptions.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-50 border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="py-2 px-4 border-b">Document Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {descriptions.map((doc, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">{doc}</td>
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

export default DocumentsRequired;
