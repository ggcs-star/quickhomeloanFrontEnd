import React from 'react';

const HeroSection = ({ data }) => {
    return (
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-blue-200 mb-6">
                    <span>Home</span>
                    <span className="mx-2">›</span>
                    <span>Home Loans</span>
                    <span className="mx-2">›</span>
                    <span className="text-white font-semibold">700 CIBIL Score</span>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 bg-opacity-20 border border-green-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-300 text-sm font-semibold">
                                CIBIL SCORE 700 - ELIGIBLE FOR HOME LOAN
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            {data.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            {data.description}
                        </p>

                        {/* CTA Text */}
                        {data.cta && (
                            <p className="text-lg text-green-200 font-semibold">
                                {data.cta}
                            </p>
                        )}

                        {/* Key Highlights */}
                        {data.highlights && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">
                                    In this complete guide, you'll discover:
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {data.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <span className="text-blue-100 text-sm lg:text-base">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Check Your Eligibility Now
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200">
                                Calculate Your EMI
                            </button>
                        </div>
                    </div>

                    {/* Right Content - CIBIL Score Card */}
                    <div className="relative">
                        {/* Main Score Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            {/* Score Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
                                    <span className="text-blue-800 text-sm font-semibold">
                                        YOUR CIBIL SCORE RANGE
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    700 CIBIL Score
                                </h3>
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-green-600 font-semibold">Good Credit Profile</span>
                                </div>
                            </div>

                            {/* Score Visualization */}
                            <div className="mb-8">
                                <div className="flex justify-between text-xs text-gray-600 mb-2">
                                    <span>300</span>
                                    <span>900</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div 
                                        className="bg-gradient-to-r from-yellow-500 to-green-500 h-3 rounded-full"
                                        style={{ width: '66%' }} // 700/900 ≈ 77.7%
                                    ></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>Poor</span>
                                    <span>Excellent</span>
                                </div>
                            </div>

                            {/* Score Indicators */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-3 bg-red-50 rounded-lg">
                                    <div className="text-lg font-bold text-red-600">300-649</div>
                                    <div className="text-xs text-gray-600">Poor</div>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg border-2 border-green-200 shadow-lg">
                                    <div className="text-lg font-bold text-green-600">650-749</div>
                                    <div className="text-xs text-gray-600">Good</div>
                                </div>
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <div className="text-lg font-bold text-blue-600">750-900</div>
                                    <div className="text-xs text-gray-600">Excellent</div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                    <span className="text-sm text-gray-600">Approval Chance</span>
                                    <span className="font-bold text-green-600">85%</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                    <span className="text-sm text-gray-600">Interest Rate</span>
                                    <span className="font-bold text-blue-600">8.5% - 9.5%</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                    <span className="text-sm text-gray-600">Lenders Available</span>
                                    <span className="font-bold text-purple-600">20+</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold text-sm transform rotate-6 shadow-lg">
                            ✅ ELIGIBLE
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm transform -rotate-6 shadow-lg">
                            🏦 20+ BANKS
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-blue-700">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">650+</div>
                        <div className="text-blue-200 text-sm">Minimum Score Required</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">8.5% - 9.5%</div>
                        <div className="text-blue-200 text-sm">Expected Interest Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">85%</div>
                        <div className="text-blue-200 text-sm">Approval Probability</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">5-7 Days</div>
                        <div className="text-blue-200 text-sm">Average Processing</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;