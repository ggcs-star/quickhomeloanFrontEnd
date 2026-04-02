// src/pages/HomeLoanPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { homeLoanData } from "../../../../db/homeLoanData";
import { Container } from "../../../../components/Layout";

export default function Breadcrumb() {
    const { slug } = useParams();
    const loan = homeLoanData.find((item) => item.slug === slug);

    return (
        <Container>
            <div className="min-h-screen bg-gray-50">
                {/* 🧭 Breadcrumb Section */}
                <nav className="text-sm mb-4 text-gray-600">
                    <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
                        <li>
                            <Link
                                to="/"
                                className="hover:underline"
                            >
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link
                                to="/home-loan"
                                className=" hover:underline"
                            >
                                Home Loan
                            </Link>
                        </li>
                        {loan && (
                            <>
                                <li>/</li>
                                <li className=" ">
                                    {loan.title}
                                </li>
                            </>
                        )}
                    </ol>
                </nav>

            </div>
        </Container>
    );
}
