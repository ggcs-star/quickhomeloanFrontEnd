import React from "react";
import { Container } from "../../../../components/Layout";

const HeroSection3 = () => {
    return (
        <Container>
            <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-48 lg:pb-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-6 mb-12 lg:mb-0">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                                Your Dream Home is <br className="hidden sm:block" />
                                <span className="text-slate-500">Just a Click Away</span>
                            </h1>

                            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                                Get instant home loan approval with competitive interest rates
                                starting from 6.5% p.a. — simple process, quick disbursal, expert
                                guidance.
                            </p>

                            {/* BUTTONS */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#eligibility"
                                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-black hover:-translate-y-0.5 transition-all"
                                >
                                    Check Eligibility
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 h-5 w-5"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>

                                <a
                                    href="#calculators"
                                    className="inline-flex items-center justify-center rounded-full bg-white border-2 border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-calculator mr-2 h-5 w-5"
                                    >
                                        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                                        <line x1="8" x2="16" y1="6" y2="6"></line>
                                        <line x1="16" x2="16" y1="14" y2="18"></line>
                                        <path d="M16 10h.01"></path>
                                        <path d="M12 10h.01"></path>
                                        <path d="M8 10h.01"></path>
                                        <path d="M12 14h.01"></path>
                                        <path d="M8 14h.01"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M8 18h.01"></path>
                                    </svg>
                                    Calculate EMI
                                </a>
                            </div>

                            {/* STATS */}
                            <div className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-4 gap-4 border-t border-slate-100 pt-8">

                                {/* 1 */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-slate-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-percent h-6 w-6 text-slate-500 flex-shrink-0"
                                    >
                                        <line x1="19" x2="5" y1="5" y2="19"></line>
                                        <circle cx="6.5" cy="6.5" r="2.5"></circle>
                                        <circle cx="17.5" cy="17.5" r="2.5"></circle>
                                    </svg>
                                    <span className="text-sm font-bold leading-tight">
                                        6.5% p.a. Interest Rate
                                    </span>
                                </div>

                                {/* 2 */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-slate-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-clock h-6 w-6 text-slate-500 flex-shrink-0"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <span className="text-sm font-bold leading-tight">
                                        24hrs Approval Time
                                    </span>
                                </div>

                                {/* 3 */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-slate-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-indian-rupee h-6 w-6 text-slate-500 flex-shrink-0"
                                    >
                                        <path d="M6 3h12"></path>
                                        <path d="M6 8h12"></path>
                                        <path d="m6 13 8.5 8"></path>
                                        <path d="M6 13h3"></path>
                                        <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                                    </svg>
                                    <span className="text-sm font-bold leading-tight">
                                        ₹5 Cr Max Loan
                                    </span>
                                </div>

                                {/* 4 */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-slate-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-users h-6 w-6 text-slate-500 flex-shrink-0"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                    <span className="text-sm font-bold leading-tight">
                                        50,000+ Happy Customers
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="lg:col-span-6 relative ">
                            <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden shadow-2xl relative grayscale-[20%]">
                                <img
                                    src="https://placehold.co/800x600/e2e8f0/1e293b?text=Happy+Family+in+New+Home"
                                    alt="Family celebrating in their new home"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-10 opacity-50"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Container>
    );
};

export default HeroSection3;
