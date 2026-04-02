import React from "react";
import { Container } from "../../../../components/Layout";

const DocumentsSection = ({ data }) => {
  return (
    <Container>
      <div className="py-12 text-neutral-900">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">{data.title}</h2>

        {/* Document Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Common Documents */}
          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">
              For Everyone (KYC)
            </h3>
            <ul className="space-y-2 text-neutral-700">
              {data.commonDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-neutral-800">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Salaried Documents */}
          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">
              Salaried Individuals
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">
                  Identity & Address:
                </h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  {data.salariedDocuments.identity.map((doc, index) => (
                    <li key={index}>• {doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">
                  Income Proof:
                </h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  {data.salariedDocuments.income.map((doc, index) => (
                    <li key={index}>• {doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Self-Employed Documents */}
          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">
              Self-Employed
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">
                  Income Proof:
                </h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  {data.selfEmployedDocuments.income.map((doc, index) => (
                    <li key={index}>• {doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">
                  Business Proof:
                </h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  {data.selfEmployedDocuments.business.map((doc, index) => (
                    <li key={index}>• {doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Property Documents */}
        <div className="mt-8 bg-neutral-100 p-6 rounded-md border border-neutral-300 border-l-4 border-l-neutral-800">
          <h3 className="text-xl font-semibold mb-4 text-neutral-900">
            Property Documents (Before Disbursal)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-neutral-700">
            {data.propertyDocuments.map((doc, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 text-neutral-800">📄</span>
                {doc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DocumentsSection;
