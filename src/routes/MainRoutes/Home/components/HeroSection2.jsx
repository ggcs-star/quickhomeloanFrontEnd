import React from 'react';
import { heroSectionData } from '../../../../db'; // Assuming you have this data in the 'db' folder
import './HeroSection.css';

function HeroSection2() {
    // We will just use the first slide data (static view)
    const currentSlide = heroSectionData[0]; // Static, first slide
    const isMobile = window.innerWidth <= 768; // Mobile detection logic

    const currentImage = isMobile ? currentSlide.img1 : currentSlide.img;

    return (
        <div className="relative w-full lg:h-[35%] font-helvetica tracking-wide overflow-hidden">
            {/* Background Image */}
            <img
                src={currentImage}
                alt={currentSlide.title}
                className="lg:w-full lg:h-full object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                {/* Hero Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center text-white px-4 py-12 md:py-16">
                    <div className="space-y-6">
                        {/* Badge */}
                        <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-accent text-white"
                        >
                            Trusted by 50,000+ Home Buyers
                        </span>
                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl">{currentSlide.title}</h1>
                        {/* Description */}
                        <p className="text-lg text-muted-foreground">
                            {currentSlide.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-10 rounded-md px-6 has-[&>svg]:px-4 bg-accent hover:bg-accent/90"
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
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&>svg]:px-4"
                            >
                                Calculate EMI
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex items-center gap-8 pt-4">
                        <div>
                            <div className="text-3xl text-primary">{currentSlide.interestRate}</div>
                            <div className="text-sm text-muted-foreground">Interest Rate</div>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div>
                            <div className="text-3xl text-primary">{currentSlide.approvalTime}</div>
                            <div className="text-sm text-muted-foreground">Approval Time</div>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div>
                            <div className="text-3xl text-primary">{currentSlide.maxLoan}</div>
                            <div className="text-sm text-muted-foreground">Max Loan</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section (Optional) */}
            <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={currentSlide.imageUrl}
                        alt="Happy family in their new home"
                        className="w-full h-auto"
                    />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                    <div className="flex items-center gap-3">
                        <div className="bg-accent/10 rounded-full p-3">
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
                                className="lucide lucide-circle-check h-6 w-6 text-accent"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">Happy Customers</div>
                            <div className="text-xl">50,000+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection2;
