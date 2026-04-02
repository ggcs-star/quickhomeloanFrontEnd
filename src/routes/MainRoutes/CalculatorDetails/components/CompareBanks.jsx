import React, { useState } from 'react';

// Bank data
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
    processingFeeRange: "",
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

const CompareBanks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredBanks = bankData.filter(bank => {
    const matchesSearch = bank.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || 
                       (filterType === 'nationalized' && bank.type === 'Nationalized') ||
                       (filterType === 'private' && bank.type === 'Private');
    
    return matchesSearch && matchesType;
  });

  const TrendingIcon = ({ trending }) => {
    if (trending === 'down') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down w-4 h-4 text-green-600" aria-hidden="true">
          <path d="M16 17h6v-6"></path>
          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
        </svg>
      );
    }
    return null;
  };

  const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-3 h-3" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" x2="12" y1="8" y2="12"></line>
      <line x1="12" x2="12.01" y1="16" y2="16"></line>
    </svg>
  );

  const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-6 h-6 text-blue-600" aria-hidden="true">
      <path d="M10 12h4"></path>
      <path d="M10 8h4"></path>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
    </svg>
  );

  return (
    <div className="space-y-6">
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
        {/* Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
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

        {/* Content */}
        <div className="px-6 [&:last-child]:pb-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search banks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive md:w-64"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 ${
                  filterType === 'all'
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
                }`}
              >
                All Banks
              </button>
              <button
                onClick={() => setFilterType('nationalized')}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 ${
                  filterType === 'nationalized'
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
                }`}
              >
                Nationalized
              </button>
              <button
                onClick={() => setFilterType('private')}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 ${
                  filterType === 'private'
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
                }`}
              >
                Private
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg border overflow-x-auto">
            <div className="relative w-full overflow-x-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Bank Name
                    </th>
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Type
                    </th>
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Interest Rate Range
                    </th>
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Processing Fee
                    </th>
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Foreclosure - Floating
                    </th>
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Foreclosure - Fixed
                    </th>
                    <th className="text-foreground h-10 px-2 text-center align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0 text-center">
                  {filteredBanks.map((bank) => (
                    <tr key={bank.id} className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div>
                          <div className="font-medium">{bank.name}</div>
                          {bank.note && (
                            <div className="text-muted-foreground mt-1 flex items-center gap-1 text-xs justify-center">
                              <AlertIcon />
                              <span>{bank.note}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <span
                          className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent ${
                            bank.type === 'Nationalized'
                              ? 'bg-black text-white [a&]:hover:bg-black/90'
                              : 'bg-gray-300 text-black [a&]:hover:bg-secondary/90'
                          }`}
                        >
                          {bank.type}
                        </span>
                      </td>
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div className="flex items-center gap-1">
                          <TrendingIcon trending={bank.trending} />
                          <span>{bank.interestRate}</span>
                        </div>
                      </td>
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div>
                          <div>{bank.processingFee}</div>
                          {bank.processingFeeRange && (
                            <div className="text-muted-foreground mt-1 text-xs">
                              {bank.processingFeeRange}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <span className={bank.foreclosureFloating === 'NIL' ? 'text-green-600' : 'text-amber-600'}>
                          {bank.foreclosureFloating}
                        </span>
                      </td>
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <span className={bank.foreclosureFixed === 'NIL' ? 'text-green-600' : 'text-amber-600'}>
                          {bank.foreclosureFixed}
                        </span>
                      </td>
                      <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <button className="inline-flex items-center justify-center text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-black text-white hover:bg-black/90 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 whitespace-nowrap">
                          Use This Rate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-5 h-5 text-blue-600 mt-0.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <div className="space-y-2">
                <p className="font-semibold">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  <li>Interest rates vary based on loan amount, tenure, credit score, and borrower profile</li>
                  <li>Foreclosure charges for floating rate loans are typically NIL as per RBI guidelines</li>
                  <li>Processing fees are subject to GST (18%)</li>
                  <li>Rates are indicative and subject to change. Please verify with the bank</li>
                  <li>Special concessions may be available for women, senior citizens, and defense personnel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBanks;