import React, { useState } from 'react';

// ------------------ BANK DATA ------------------
const bankData = [
  {
    id: 1,
    name: "Union Bank of India",
    type: "Nationalized",
    interestRate: "8.35% - 10.1%",
    processingFee: "0.50% of loan amount + GST",
    processingFeeRange: "₹3,000 - ₹20,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% + GST on outstanding principal",
    note: "Defence personnel get special rates",
    trending: "down"
  },
  {
    id: 2,
    name: "Punjab National Bank (PNB)",
    type: "Nationalized",
    interestRate: "8.4% - 10.15%",
    processingFee: "0.35% of loan amount",
    processingFeeRange: "₹2,500 - ₹15,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% of principal outstanding",
    note: "No processing fee for loans above ₹30 lakhs",
    trending: "down"
  },
  {
    id: 3,
    name: "Bank of Baroda (BOB)",
    type: "Nationalized",
    interestRate: "8.4% - 10%",
    processingFee: "0.50% of loan amount + GST",
    processingFeeRange: "₹2,000 - ₹25,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% of outstanding amount",
    note: "Additional 0.05% concession for salaried customers",
    trending: "down"
  },
  {
    id: 4,
    name: "State Bank of India (SBI)",
    type: "Nationalized",
    interestRate: "8.5% - 9.65%",
    processingFee: "50% concession in Card Rate, 100% waiver in selected cases",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% of outstanding principal",
    note: "Women borrowers get 0.05% concession",
    trending: "down"
  },
  {
    id: 5,
    name: "Canara Bank",
    type: "Nationalized",
    interestRate: "8.5% - 9.9%",
    processingFee: "0.50% of loan amount + GST",
    processingFeeRange: "₹1,500 - ₹15,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% of principal outstanding",
    note: "No charges for loans under ₹10 lakhs",
    trending: "down"
  },
  {
    id: 6,
    name: "IDBI Bank",
    type: "Nationalized",
    interestRate: "8.5% - 10.25%",
    processingFee: "0.50% of loan amount + GST",
    processingFeeRange: "₹2,500 - ₹15,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "NIL",
    note: "Special schemes for government employees",
    trending: "down"
  },
  {
    id: 7,
    name: "Bank of India (BOI)",
    type: "Nationalized",
    interestRate: "8.55% - 10.3%",
    processingFee: "0.25% of loan amount + GST",
    processingFeeRange: "₹1,500 - ₹20,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "0.65% p.a. on outstanding for remaining maturity, max 2.25%",
    note: "Senior citizens get 0.25% concession",
    trending: "down"
  },
  {
    id: 8,
    name: "Indian Bank",
    type: "Nationalized",
    interestRate: "8.6% - 10.2%",
    processingFee: "0.25% of loan amount + GST",
    processingFeeRange: "₹2,000 - ₹18,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% of outstanding balance",
    note: "",
    trending: "down"
  },
  {
    id: 9,
    name: "Central Bank of India",
    type: "Nationalized",
    interestRate: "8.75% - 10.35%",
    processingFee: "0.50% of loan amount + GST",
    processingFeeRange: "₹2,500 - ₹20,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% on prepaid amount",
    note: "",
    trending: "down"
  },
  {
    id: 10,
    name: "Axis Bank",
    type: "Private",
    interestRate: "8.75% - 11.5%",
    processingFee: "Up to 1% of loan amount or ₹10,000 (whichever is higher) + GST",
    processingFeeRange: "₹10,000 - ₹50,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "2% of outstanding/amount prepaid",
    note: "Balance transfer facility available",
    trending: "down"
  },
  {
    id: 11,
    name: "IDFC FIRST Bank",
    type: "Private",
    interestRate: "8.75% - 11.25%",
    processingFee: "1% of loan amount + GST",
    processingFeeRange: "₹10,000 - ₹50,000",
    foreclosureFloating: "Up to 2% of principal outstanding (excluding taxes)",
    foreclosureFixed: "Up to 2% of principal outstanding (excluding taxes)",
    note: "Digital processing available",
    trending: "down"
  },
  {
    id: 12,
    name: "Yes Bank",
    type: "Private",
    interestRate: "9% - 12%",
    processingFee: "1.5% of loan amount or ₹10,000 (whichever is higher)",
    processingFeeRange: "₹10,000 - ₹75,000",
    foreclosureFloating: "NIL",
    foreclosureFixed: "3% of outstanding principal",
    note: "",
    trending: "down"
  }
];

// ------------------ COMPONENT ------------------
const BankRatesTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredBanks = bankData.filter(bank => {
    const matchesSearch = bank.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      filterType === 'all' ||
      (filterType === 'nationalized' && bank.type === 'Nationalized') ||
      (filterType === 'private' && bank.type === 'Private');

    return matchesSearch && matchesType;
  });

  // Icons
  const TrendingIcon = ({ trending }) =>
    trending === 'down' ? (
      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M16 17h6v-6"></path>
        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
      </svg>
    ) : null;

  const AlertIcon = () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" x2="12" y1="8" y2="12"></line>
      <line x1="12" x2="12.01" y1="16" y2="16"></line>
    </svg>
  );

  const BuildingIcon = () => (
    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M10 12h4"></path>
      <path d="M10 8h4"></path>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
    </svg>
  );

  return (
    <div className="space-y-6 pt-24 lg:pt-28 mb-4">
      <div className="bg-white flex flex-col gap-6 rounded-md border border-neutral-300">

        {/* Header */}
        <div className="px-4 md:px-6 pt-6">
          <div className="flex items-center gap-2">
            <BuildingIcon />
            <div>
              <h4 className="leading-none text-lg font-semibold">Compare Bank Loan Rates</h4>
              <p className="text-muted-foreground text-sm">
                Current home loan rates from major Indian banks (as of January 2025)
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-4 md:px-6">

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search banks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-neutral-300 rounded-md px-3 py-2 w-full md:w-64"
            />

            <div className="flex gap-2">
              {['all', 'nationalized', 'private'].map(t => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`h-9 px-4 py-2 text-sm rounded-md border transition ${
                    filterType === t
                      ? 'bg-black text-white'
                      : 'border-neutral-300 hover:bg-gray-100'
                  }`}
                >
                  {t === 'all' ? 'All Banks'
                    : t === 'nationalized' ? 'Nationalized'
                    : 'Private'}
                </button>
              ))}
            </div>
          </div>

          {/* ---------------- DESKTOP TABLE ---------------- */}
          <div className="hidden md:block rounded-lg border border-neutral-300 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-neutral-300">
                <tr>
                  {[
                    'Bank Name',
                    'Type',
                    'Interest Rate Range',
                    'Processing Fee',
                    'Foreclosure - Floating',
                    'Foreclosure - Fixed',
                    'Action',
                  ].map(h => (
                    <th key={h} className="px-2 py-3 text-center font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredBanks.map(bank => (
                  <tr key={bank.id} className="border-b border-neutral-300 hover:bg-gray-50">
                    <td className="p-2 text-center">
                      <div className="font-medium">{bank.name}</div>
                      {bank.note && (
                        <div className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                          <AlertIcon /> {bank.note}
                        </div>
                      )}
                    </td>

                    <td className="p-2 text-center">
                      <span className={`px-2 py-1 text-xs rounded-md ${
                        bank.type === 'Nationalized'
                          ? 'bg-black text-white'
                          : 'bg-gray-300'
                      }`}>
                        {bank.type}
                      </span>
                    </td>

                    <td className="p-2 flex items-center justify-center gap-1">
                      <TrendingIcon trending={bank.trending} />
                      {bank.interestRate}
                    </td>

                    <td className="p-2 text-center">
                      <div>{bank.processingFee}</div>
                      <div className="text-xs text-gray-500">{bank.processingFeeRange}</div>
                    </td>

                    <td className="p-2 text-green-600 text-center">
                      {bank.foreclosureFloating}
                    </td>

                    <td className="p-2 text-amber-600 text-center">
                      {bank.foreclosureFixed}
                    </td>

                    <td className="p-2 text-center">
                      <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
                        Use This Rate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---------------- MOBILE CARDS ---------------- */}
          <div className="md:hidden grid gap-4">
            {filteredBanks.map(bank => (
              <div key={bank.id} className="border border-neutral-300 rounded-lg p-4 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{bank.name}</h3>
                    {bank.note && (
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <AlertIcon /> {bank.note}
                      </p>
                    )}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    bank.type === 'Nationalized'
                      ? 'bg-black text-white'
                      : 'bg-gray-300'
                  }`}>
                    {bank.type}
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Interest Rate:</span>
                    <span className="flex items-center gap-1">
                      <TrendingIcon trending={bank.trending} />
                      {bank.interestRate}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Processing Fee:</span>
                    <span className="text-right">{bank.processingFee}</span>
                  </div>

                  {bank.processingFeeRange && (
                    <p className="text-xs text-gray-500">{bank.processingFeeRange}</p>
                  )}

                  <div className="flex justify-between">
                    <span className="font-medium">Foreclosure (Floating):</span>
                    <span className="text-green-600">{bank.foreclosureFloating}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Foreclosure (Fixed):</span>
                    <span className="text-amber-600">{bank.foreclosureFixed}</span>
                  </div>

                  <button className="w-full mt-3 bg-black text-white py-2 rounded-md text-sm">
                    Use This Rate
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="my-4 p-4 bg-gray-50 rounded-md border border-neutral-300">
            <p className="font-semibold mb-2">Important Notes:</p>
            <ul className="list-disc text-sm text-gray-600 ml-4 space-y-1">
              <li>Interest rates vary based on profile and loan amount</li>
              <li>Floating foreclosure charges typically NIL as per RBI</li>
              <li>Processing fees subject to GST (18%)</li>
              <li>Verify with the bank for latest rate updates</li>
              <li>Special concessions for women, seniors, defense personnel</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BankRatesTable;
