import React from "react";
import { Container } from "../../../../components/Layout";

const ProductSuite = ({ productSuite }) => {
  return (
    <Container>
      <div className=" mt-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">{productSuite.title}</h3>
        <p className="text-gray-600 mb-6">{productSuite.description}</p>

        <div className="grid md:grid-cols-1 gap-6">
          {productSuite.products.map((item) => (
            <div key={item.id} className="">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h4>
              <p className="text-gray-700 mb-2">
                <strong>Purpose:</strong> {item.purpose}
              </p>
              {item.loanAmount && (
                <p className="text-gray-700"><strong>Loan Amount:</strong> {item.loanAmount}</p>
              )}
              {item.tenure && (
                <p className="text-gray-700"><strong>Tenure:</strong> {item.tenure}</p>
              )}
              {item.interestRate && (
                <p className="text-gray-700"><strong>Interest Rate:</strong> {item.interestRate}</p>
              )}

              {/* Optional Fields */}
              {item.highlights && (
                <ul className="list-disc ml-5 text-gray-600 mt-2">
                  {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              )}
              {item.benefits && (
                <ul className="list-disc ml-5 text-gray-600 mt-2">
                  {item.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
              {item.useCases && (
                <ul className="list-disc ml-5 text-gray-600 mt-2">
                  {item.useCases.map((u, i) => <li key={i}>{u}</li>)}
                </ul>
              )}
              {item.subsidy && (
                <p className="text-gray-700 mt-2"><strong>Subsidy:</strong> {item.subsidy}</p>
              )}
              {item.eligibleFor && (
                <p className="text-gray-700 mt-1"><strong>Eligible For:</strong> {item.eligibleFor}</p>
              )}
              {item.idealFor && (
                <p className="text-gray-700 mt-1"><strong>Ideal For:</strong> {item.idealFor}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductSuite;
