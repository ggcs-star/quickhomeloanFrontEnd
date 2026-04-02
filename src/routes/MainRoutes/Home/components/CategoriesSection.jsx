import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Doctors",
    desc: "Exclusive home loan benefits for medical professionals.",
    link: "/home-loan/profession/doctor",
    icon: (
      <>
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
  },
  {
    title: "Chartered Accountants (CA)",
    desc: "Higher eligibility and faster approvals for CAs.",
    link: "/home-loan/profession/chartered-accountants",
    icon: (
      <>
        <rect width="20" height="14" x="2" y="6" rx="2" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 11v4" />
        <path d="M14 13h-4" />
      </>
    ),
  },
  {
    title: "Engineers",
    desc: "Structured home loan plans for engineering professionals.",
    link: "/home-loan/profession/engineer",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 1 0 0 5.4" />
        <path d="M11 12h2l2 3" />
        <path d="M3 12h8" />
      </>
    ),
  },
  {
    title: "Teachers",
    desc: "Special home loan programs for educators.",
    link: "/home-loan/profession/teacher",
    icon: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </>
    ),
  },
  {
    title: "Lawyers",
    desc: "Profession-focused home loans for legal practitioners.",
    link: "/home-loan/profession/lawyer",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M7 21h10" />
      </>
    ),
  },
  {
    title: "IT Professionals",
    desc: "Preferential home loan offers for software and IT professionals.",
    link: "/home-loan/profession/it-professionals",
    icon: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      </>
    ),
  },
  {
    title: "Business Owners",
    desc: "Flexible loans for entrepreneurs.",
    link: "/home-loan/profession/business-owners",
    icon: (
      <>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </>
    ),
  },
  {
    title: "Influencers",
    desc: "Tailored for the modern digital creator.",
    link: "/home-loan/profession/influencers",
    icon: (
      <>
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </>
    ),
  },
  {
    title: "NRIs",
    desc: "Invest in your home, from anywhere.",
    link: "/home-loan/profession/nris",
    icon: (
      <>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3" />
      </>
    ),
  },
  {
    title: "Defense Personnel",
    desc: "Serving those who serve the nation.",
    link: "/home-loan/profession/defense-personnel",
    icon: (
      <>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Private Sector",
    desc: "Loans designed for corporate employees.",
    link: "/home-loan/profession/private-sector",
    icon: (
      <>
        <path d="M10 18v-7" />
        <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847H3.474z" />
        <path d="M14 18v-7" />
        <path d="M18 18v-7" />
        <path d="M6 18v-7" />
        <path d="M3 22h18" />
      </>
    ),
  },
  {
    title: "Retired",
    desc: "Fulfilling post-retirement dreams.",
    link: "/home-loan/profession/retired",
    icon: (
      <>
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </>
    ),
  },
];

export default function HomeLoanCategories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Premium Home Loan Categories
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tailored home loan solutions designed for every profession and need.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-slate-900 transition-all flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4 min-h-[48px]">
                <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm flex-grow">
                {item.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-50">
                <Link
                  to={item.link}
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:gap-2 transition-all"
                >
                  Explore
                  <svg
                    className="ml-2 h-3 w-3"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
