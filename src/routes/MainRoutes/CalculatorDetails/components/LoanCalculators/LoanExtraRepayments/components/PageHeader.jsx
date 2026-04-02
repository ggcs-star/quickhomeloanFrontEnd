import React from "react"
import { Container } from "../../../../../../../components/Layout"

export default function PageHeader() {
    return (
        <header className="bg-white border-b border-gray-200">
            <Container>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Home Loan Prepayment Calculator
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Reduce EMI or Tenure &amp; Save Lakhs on Interest!
                    </p>
                </div>
            </Container>

        </header>
    )
}
