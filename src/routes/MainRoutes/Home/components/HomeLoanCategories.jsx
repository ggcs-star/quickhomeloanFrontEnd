import React from 'react';

const HomeLoanCategories = () => {
  const loanCategories = [
    {
      id: 1,
      title: "Home Loan for Doctors",
      slug: "doctors",
      accentColor: "red-500",
      gradient: {
        bg: "bg-gradient-to-br from-red-50 to-red-100",
        bg1: "bg-gradient-to-br from-red-200 to-red-300",
        border: "bg-gradient-to-r from-red-300 to-red-400",
        icon: "bg-gradient-to-br from-red-100 to-red-200",
        shadow: "shadow-red-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M11 2v2"></path>
          <path d="M5 2v2"></path>
          <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
          <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
          <circle cx="20" cy="10" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Home Loan for Government Employees",
      slug: "government-employees",
      accentColor: "blue-500",
      gradient: {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        bg1: "bg-gradient-to-br from-blue-200 to-blue-300",
        border: "bg-gradient-to-r from-blue-300 to-blue-400",
        icon: "bg-gradient-to-br from-blue-100 to-blue-200",
        shadow: "shadow-blue-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-500">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Home Loan for Business Owners",
      slug: "business-owners",
      accentColor: "purple-500",
      gradient: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        bg1: "bg-gradient-to-br from-purple-200 to-purple-300",
        border: "bg-gradient-to-r from-purple-300 to-purple-400",
        icon: "bg-gradient-to-br from-purple-100 to-purple-200",
        shadow: "shadow-purple-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-500">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Home Loan for Social Media Influencers",
      slug: "social-media-influencers",
      accentColor: "orange-500",
      gradient: {
        bg: "bg-gradient-to-br from-orange-50 to-orange-100",
        bg1: "bg-gradient-to-br from-orange-200 to-orange-300",
        border: "bg-gradient-to-r from-orange-300 to-orange-400",
        icon: "bg-gradient-to-br from-orange-100 to-orange-200",
        shadow: "shadow-orange-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-500">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Home Loan for IT Professionals",
      slug: "it-professionals",
      accentColor: "teal-500",
      gradient: {
        bg: "bg-gradient-to-br from-teal-50 to-teal-100",
        bg1: "bg-gradient-to-br from-teal-200 to-teal-300",
        border: "bg-gradient-to-r from-teal-300 to-teal-400",
        icon: "bg-gradient-to-br from-teal-100 to-teal-200",
        shadow: "shadow-teal-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-teal-500">
          <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
          <path d="M20.054 15.987H3.946"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Home Loan for Teachers & Professors",
      slug: "teachers",
      accentColor: "yellow-500",
      gradient: {
        bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
        bg1: "bg-gradient-to-br from-yellow-200 to-yellow-300",
        border: "bg-gradient-to-r from-yellow-300 to-yellow-400",
        icon: "bg-gradient-to-br from-yellow-100 to-yellow-200",
        shadow: "shadow-yellow-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-500">
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
      ),
    },
    {
      id: 7,
      title: "Home Loan for NRIs",
      slug: "nris",
      accentColor: "green-500",
      gradient: {
        bg: "bg-gradient-to-br from-green-50 to-green-100",
        bg1: "bg-gradient-to-br from-green-200 to-green-300",
        border: "bg-gradient-to-r from-green-300 to-green-400",
        icon: "bg-gradient-to-br from-green-100 to-green-200",
        shadow: "shadow-green-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
    },
    {
      id: 8,
      title: "Home Loan for Women Professionals",
      slug: "women-professionals",
      accentColor: "pink-500",
      gradient: {
        bg: "bg-gradient-to-br from-pink-50 to-pink-100",
        bg1: "bg-gradient-to-br from-pink-200 to-pink-300",
        border: "bg-gradient-to-r from-pink-300 to-pink-400",
        icon: "bg-gradient-to-br from-pink-100 to-pink-200",
        shadow: "shadow-pink-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pink-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      id: 9,
      title: "Home Loan for Defense Personnel",
      slug: "defense-personnel",
      accentColor: "indigo-500",
      gradient: {
        bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
        bg1: "bg-gradient-to-br from-indigo-200 to-indigo-300",
        border: "bg-gradient-to-r from-indigo-300 to-indigo-400",
        icon: "bg-gradient-to-br from-indigo-100 to-indigo-200",
        shadow: "shadow-indigo-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-indigo-500">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
    },
    {
      id: 10,
      title: "Home Loan for Private Sector Employees",
      slug: "private-sector-employees",
      accentColor: "violet-500",
      gradient: {
        bg: "bg-gradient-to-br from-violet-50 to-violet-100",
        bg1: "bg-gradient-to-br from-violet-200 to-violet-300",
        border: "bg-gradient-to-r from-violet-300 to-violet-400",
        icon: "bg-gradient-to-br from-violet-100 to-violet-200",
        shadow: "shadow-violet-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-violet-500">
          <path d="M10 12h4"></path>
          <path d="M10 8h4"></path>
          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
        </svg>
      ),
    },
    {
      id: 11,
      title: "Home Loan for Retired Individuals",
      slug: "retired-individuals",
      accentColor: "purple-500",
      gradient: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        bg1: "bg-gradient-to-br from-purple-200 to-purple-300",
        border: "bg-gradient-to-r from-purple-300 to-purple-400",
        icon: "bg-gradient-to-br from-purple-100 to-purple-200",
        shadow: "shadow-purple-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-500">
          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
          <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path>
          <path d="M5 18v2"></path>
          <path d="M19 18v2"></path>
        </svg>
      ),
    },
    {
      id: 12,
      title: "Home Loan for Real Estate Investors",
      slug: "real-estate-investors",
      accentColor: "emerald-500",
      gradient: {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        bg1: "bg-gradient-to-br from-emerald-200 to-emerald-300",
        border: "bg-gradient-to-r from-emerald-300 to-emerald-400",
        icon: "bg-gradient-to-br from-emerald-100 to-emerald-200",
        shadow: "shadow-emerald-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500">
          <path d="M16 7h6v6"></path>
          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
        </svg>
      ),
    },
    {
      id: 13,
      title: "Home Loan for First-Time Home Buyers",
      slug: "first-time-home-buyers",
      accentColor: "sky-500",
      gradient: {
        bg: "bg-gradient-to-br from-sky-50 to-sky-100",
        bg1: "bg-gradient-to-br from-sky-200 to-sky-300",
        border: "bg-gradient-to-r from-sky-300 to-sky-400",
        icon: "bg-gradient-to-br from-sky-100 to-sky-200",
        shadow: "shadow-sky-200",
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-sky-500">
          <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
          <path d="m21 2-9.6 9.6"></path>
          <circle cx="7.5" cy="15.5" r="5.5"></circle>
        </svg>
      ),
    },
  ];


  const HouseIcon = ({ gradient }) => (
    <div className={`p-6 rounded-2xl transition-all duration-300 group-hover:scale-110 ${gradient.icon} shadow-lg`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 drop-shadow-lg mx-auto"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Premium Home Loan Categories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our specialized home loan solutions tailored for your unique professional and personal needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loanCategories.map((category) => (
          <div
            key={category.id}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl ${category.gradient.bg1} p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-10 ${category.gradient.bg}`} />

            {/* Blurred Circle Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className={`w-full h-full rounded-full blur-2xl bg-${category.accentColor}`} />
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-6">
              <div className="relative">
                <HouseIcon gradient={category.gradient} />
                <div
                  className={`absolute -bottom-3 -right-3 p-3 bg-white rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 ${category.gradient.shadow}`}
                >
                  {category.icon}
                </div>
              </div>
              <h3 className="text-white text-center font-medium max-w-[200px] leading-tight">
                {category.title}
              </h3>
            </div>

            {/* Bottom Bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5 origin-left ${category.gradient.border}`} />
          </div>
        ))}
      </div>

      <div className="mt-14 mb-14 text-center">
        <p className="text-xl text-gray-500">
          Each loan category is designed with unique benefits and eligibility criteria
        </p>
      </div>
    </div>
  );
};

export default HomeLoanCategories;