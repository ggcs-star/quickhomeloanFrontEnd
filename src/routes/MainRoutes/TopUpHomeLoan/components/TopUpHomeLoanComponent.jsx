import { useState } from 'react';
import { Container } from '../../../../components/Layout';
import FAQSection from './FaqSection';

const TopUpHomeLoanComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        existingLender: '',
        outstandingAmount: '',
        topUpAmount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const lenders = [
        {
            name: 'Bank A',
            interestRate: '7.75% – 8.40%',
            processingFee: '0.35% + GST',
            tenure: 'Up to 20 years',
            bestFor: 'Lowest headline rate'
        },
        {
            name: 'Bank B',
            interestRate: '7.90% – 10.10%',
            processingFee: '₹2,999 fixed',
            tenure: 'Up to 15 years',
            bestFor: 'Salaried borrowers'
        },
        {
            name: 'NBFC C',
            interestRate: '8.30% – 9.15%',
            processingFee: '0.5% + GST',
            tenure: 'Up to 10 years',
            bestFor: 'Flexible income documentation'
        }
    ];

    const eligibilityItems = [
        'Active existing home loan account with clean repayment history',
        'Stable income (salaried or self-employed)',
        'Minimum age and maturity criteria as per lender',
        'Property meeting technical and legal norms',
        'Good credit score preferred (750+ recommended)'
    ];

    const documentItems = [
        'Identity proof (Aadhaar, PAN, Passport)',
        'Address proof (utility bills, passport)',
        'Latest salary slips / bank statements / ITRs',
        'Existing home loan account statement',
        'Property & sanction documents (if requested)'
    ];

    return (
        <Container>
            <main className="mx-auto lg:px-6 pt-28 pb-4 lg:py-28 text-black">
                {/* HERO SECTION */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="font-semibold uppercase text-sm text-gray-600">
                            Top-Up Home Loan
                        </p>

                        <h2 className="text-3xl font-bold mt-3 text-black">
                            Get extra funds on your existing home loan — smarter than personal loans
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Use funds for renovation, extension, furnishing, education, or other permitted uses.
                            Compare lender options with flexible tenure and quick approval.
                        </p>

                        {/* Features List */}
                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    number: '1',
                                    title: 'Lower interest than personal loans',
                                    description: 'Rates stay lower since top-up is secured against your home loan.'
                                },
                                {
                                    number: '2',
                                    title: 'Flexible end-use',
                                    description: 'Use funds for renovation, extension or other approved purposes.'
                                },
                                {
                                    number: '3',
                                    title: 'Quick documentation',
                                    description: 'Minimal paperwork if continuing with existing lender.'
                                },
                                {
                                    number: '4',
                                    title: 'Possible tax benefits',
                                    description: 'Applicable when funds are used for home-related expenses.'
                                }
                            ].map((item, index) => (
                                <li key={index} className="flex gap-3 items-start">
                                    <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                                        {item.number}
                                    </div>
                                    <div>
                                        <div className="font-semibold">{item.title}</div>
                                        <div className="text-sm text-gray-600">{item.description}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="#apply"
                                className="w-[50%] lg:w-[280px] text-center text-sm lg:text-lg inline-block lg:px-5 py-3 bg-black !text-white rounded-md hover:bg-gray-900 transition"
                            >
                                Get Personalized Quote
                            </a>
                            <a
                                href="#compare"
                                className="w-[50%] lg:w-[280px] text-center text-sm lg:text-lg inline-block px-3 lg:px-5 py-3 border border-gray-400 rounded-md hover:bg-gray-100 transition"
                            >
                                Compare Rates
                            </a>
                        </div>
                    </div>

                    {/* ENQUIRY FORM */}
                    <aside className="bg-white border border-gray-300 rounded-md p-3 lg:p-6">
                        <h3 className="font-semibold text-lg">Quick Enquiry</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Tell us what you need — we’ll call back shortly.
                        </p>

                        <form id="apply" className="mt-4 space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Existing Lender</label>
                                    <input
                                        type="text"
                                        name="existingLender"
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                        value={formData.existingLender}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Outstanding Principal (₹)</label>
                                    <input
                                        type="number"
                                        name="outstandingAmount"
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                        value={formData.outstandingAmount}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Desired Top-Up (₹)</label>
                                    <input
                                        type="number"
                                        name="topUpAmount"
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:border-black"
                                        value={formData.topUpAmount}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="text-sm lg:text-lg w-full px-4 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-900 transition"
                            >
                                Submit Enquiry
                            </button>
                        </form>

                        <p className="mt-4 text-xs text-gray-500">
                            By submitting, you agree to be contacted for loan assistance.
                        </p>
                    </aside>
                </section>

                {/* COMPARISON TABLE */}
                <section id="compare" className="mt-12 bg-white p-3 lg:p-6 rounded-md border border-neutral-300">
                    <h3 className="text-lg font-semibold text-black">How to Compare Top-Up Offers</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Don’t just look at the headline rate — consider fees, tenure, flexibility and total cost.
                    </p>

                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="text-left text-gray-500 border-b border-neutral-300">
                                    <th className="p-3">Lender</th>
                                    <th className="p-3">Interest Rate</th>
                                    <th className="p-3">Processing Fee</th>
                                    <th className="p-3">Tenure</th>
                                    <th className="p-3">Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lenders.map((lender, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-neutral-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                    >
                                        <td className="p-3 font-medium">{lender.name}</td>
                                        <td className="p-3">{lender.interestRate}</td>
                                        <td className="p-3">{lender.processingFee}</td>
                                        <td className="p-3">{lender.tenure}</td>
                                        <td className="p-3">{lender.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">Values shown are for demonstration — verify live rates.</p>
                </section>

                {/* ELIGIBILITY & DOCUMENTS */}
                <section className="mt-10 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-3 lg:p-6 rounded-md border border-neutral-300">
                        <h3 className="text-lg font-semibold text-black">Eligibility — Quick Checklist</h3>

                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                            {eligibilityItems.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-3 lg:p-6 rounded-md border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-black">Documents Required</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                            {documentItems.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* FEES / TAX NOTES */}
                <section className="mt-10 bg-white p-3 lg:p-6 rounded-md border border-neutral-300">
                    <h4 className="font-semibold text-black">Fees, Repayment & Tax Notes</h4>
                    <div className="mt-3 text-sm text-gray-700 space-y-3">
                        <p>Processing fee and transfer charges may apply — compare full costs, not just the rate.</p>
                        <p>Repayment usually merges into your EMI schedule with revised EMI or extended tenure.</p>
                        <p>Tax benefits apply only when funds are used for qualifying home-related purposes.</p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <FAQSection />

                {/* CTA SECTION */}
                <section className="mt-12 bg-black text-white p-8 rounded-md">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold">Check Your Top-Up Eligibility</h3>
                        <p className="mt-2 text-gray-300">
                            Get a free quote and compare leading bank & NBFC offers.
                        </p>

                        <div className="mt-5 flex justify-center gap-4">
                            <a
                                href="#apply"
                                className="w-[50%] lg:w-[250px] text-sm lg:text-lg lg:px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition"
                            >
                                Enquire Now
                            </a>

                            <a
                                href="#compare"
                                className="w-[50%] lg:w-[250px] text-sm lg:text-lg lg:px-6 py-3 border border-white/40 rounded-md hover:bg-white hover:text-black transition"
                            >
                                See Example Offers
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </Container>
    );
};

export default TopUpHomeLoanComponent;
