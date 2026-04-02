import React from "react";
import { Container } from "../../../../components/Layout";
import { useNavigate } from "react-router-dom";

// ✅ Import all images
import doctorsImg from "../../../../assets/loanCards/doctor.png";
import governmentImg from "../../../../assets/loanCards/government.png";
import businessImg from "../../../../assets/loanCards/business.png";
import influencersImg from "../../../../assets/loanCards/socialmedia.png";
import itImg from "../../../../assets/loanCards/itprofessional.png";
import teachersImg from "../../../../assets/loanCards/teachers.png";
import nriImg from "../../../../assets/loanCards/nri.png";
import womenImg from "../../../../assets/loanCards/women.png";
import defenseImg from "../../../../assets/loanCards/defense.png";
import privateImg from "../../../../assets/loanCards/private.png";
import retiredImg from "../../../../assets/loanCards/retired.png";
import investorsImg from "../../../../assets/loanCards/realestate.png";

const HomeLoanCards = () => {
  const navigate = useNavigate();

  const loanCategories = [
    {
      id: 1,
      title: "Home Loan for Doctors",
      description: "Special rates for medical professionals",
      accentColor: "#E91E63",
      image: doctorsImg,
      slug: "doctors",
    },
    {
      id: 2,
      title: "Home Loan for Government Employees",
      description: "Trusted service for public servants",
      accentColor: "#3F51B5",
      image: governmentImg,
      slug: "government-employees",
    },
    {
      id: 3,
      title: "Home Loan for Business Owners",
      description: "Flexible options for entrepreneurs",
      accentColor: "#4CAF50",
      image: businessImg,
      slug: "business-owners",
    },
    {
      id: 4,
      title: "Home Loan for Social Media Influencers",
      description: "Creative financing for content creators",
      accentColor: "#00BCD4",
      image: influencersImg,
      slug: "social-media-influencers",
    },
    {
      id: 5,
      title: "Home Loan for IT Professionals",
      description: "Tech-savvy solutions for tech experts",
      accentColor: "#FF9800",
      image: itImg,
      slug: "it-professionals",
    },
    {
      id: 6,
      title: "Home Loan for Teachers & Professors",
      description: "Dedicated support for educators",
      accentColor: "#7C4DFF",
      image: teachersImg,
      slug: "teachers-and-professors",
    },
    {
      id: 7,
      title: "Home Loan for NRIs",
      description: "Global solutions for overseas Indians",
      accentColor: "#E91E63",
      image: nriImg,
      slug: "nris",
    },
    {
      id: 8,
      title: "Home Loan for Women Professionals",
      description: "Empowering women homeowners",
      accentColor: "#673AB7",
      image: womenImg,
      slug: "women-professionals",
    },
    {
      id: 9,
      title: "Home Loan for Defense Personnel",
      description: "Honoring those who serve",
      accentColor: "#43A047",
      image: defenseImg,
      slug: "defense-personnel",
    },
    {
      id: 10,
      title: "Home Loan for Private Sector Employees",
      description: "Corporate-friendly loan packages",
      accentColor: "#00BCD4",
      image: privateImg,
      slug: "private-sector-employees",
    },
    {
      id: 11,
      title: "Home Loan for Retired Individuals",
      description: "Comfortable living in golden years",
      accentColor: "#FF9800",
      image: retiredImg,
      slug: "retired-individuals",
    },
    {
      id: 12,
      title: "Home Loan for Real Estate Investors",
      description: "Grow your property portfolio",
      accentColor: "#7C4DFF",
      image: investorsImg,
      slug: "realestate-investors",
    },
  ];

  const handleCardClick = (slug) => {
    navigate(`/premium-home-loan-categories/${slug}`);
  };

  return (
    <Container className="py-16 bg-white text-black">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-3">
          Premium Home Loan Categories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore specialized home loan solutions tailored to your unique
          profession and lifestyle.
        </p>
        <div className="" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
        {loanCategories.map((loan) => (
          <div
  key={loan.id}
  onClick={() => handleCardClick(loan.slug)}
  className="bg-white border border-neutral-300 rounded-xl group relative overflow-hidden shadow-sm 
             hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer hover:border-gray-300"
>
  {/* Image + Text Section */}
  <div className="
        flex flex-col sm:flex-row 
        items-center sm:items-start 
        gap-4 sm:gap-6 p-2 lg:p-6
      ">
    
    {/* Image */}
    <div className="
          w-24 h-24 flex-shrink-0 
          flex items-center justify-center 
          rounded-xl overflow-hidden 
          transition-all duration-500
        ">
      <img
        src={loan.image}
        alt={loan.title}
        className="object-contain w-full h-full transition-all duration-500"
      />
    </div>

    {/* Text */}
    <div className="flex-1 text-center sm:text-left">
      <h3 className="pb-1 text-black text-lg font-semibold 
                     group-hover:text-gray-900 transition-colors">
        {loan.title}
      </h3>
      <p className="text-gray-600 text-sm">{loan.description}</p>
    </div>
  </div>

  {/* Accent Line */}
  <div
    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 
               group-hover:scale-x-100 transition-transform duration-500"
    style={{ backgroundColor: loan.accentColor }}
  />
</div>

        ))}
      </div>
    </Container>
  );
};

export default HomeLoanCards;
