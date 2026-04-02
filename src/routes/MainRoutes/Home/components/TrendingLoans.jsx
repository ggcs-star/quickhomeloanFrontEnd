import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "../../../../components/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CheckPoonaWallaBanner from '../../../../assets/miscellaneous/CheckPoonaWallaBanner.webp'
import CheckPoonaWallaBannerMobile from '../../../../assets/miscellaneous/CheckPoonaWallaBannerMobile.webp'

const TrendingLoans = () => {
  // ✅ Local DB (Array of Objects)
  const loans = [
    {
      id: 1,
      title: "Personal Loan",
      desc: "Paperless process at low rate",
      rate: "10.49%",
      rateColor: "bg-red-100 text-red-600",
      link: "#",
      image: "https://cdn.urbanmoney.com/images/personal-loan.svg",
    },
    {
      id: 2,
      title: "Home Loan",
      desc: "Instant approval at lowest interest rates",
      rate: "7.60%",
      rateColor: "bg-blue-100 text-blue-600",
      link: "#",
      image: "https://cdn.urbanmoney.com/images/home-loan.svg",
    },
    {
      id: 3,
      title: "Loan Against Property",
      desc: "Lowest interest rate",
      rate: "9.2%",
      rateColor: "bg-cyan-100 text-cyan-600",
      link: "#",
      image: "https://cdn.urbanmoney.com/images/property-loan.svg",
    },
    {
      id: 4,
      title: "Business Loan",
      desc: "Interest rate starting from",
      rate: "14%",
      rateColor: "bg-indigo-100 text-indigo-600",
      link: "#",
      image: "https://cdn.urbanmoney.com/images/business-loan.svg",
    },
  ];

  // ✅ Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000,    // Set autoplay interval to 4 seconds (4000ms)
};


  return (
    <Container>
      <div className="w-full py-4 lg:pb-12 bg-white">
        <div className="text-start">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Trending Loans & Offers
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            We are a one-stop-shop for all your loan credit requirements. We aim
            to revolutionise how loans are distributed by infusing technology and
            digital platforms into the financial sector. With a network of over 50
            lenders, we offer you the best financial products and services.
          </p>

          {/* Slider (Mobile + Tablet only) */}
          <div className="block lg:hidden py-8">
            <Slider {...settings}>
              {loans.map((loan) => (
                <div key={loan.id} className="p-2">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between p-4 h-full">
                    {/* Title + Description */}
                    <div>
                      <h3 className="text-lg font-semibold">{loan.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{loan.desc}</p>
                    </div>

                    {/* Image and Rate/Link Row */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                      {/* Right: Rate + Link */}
                      <div className="flex flex-col items-start">
                        <div
                          className={`px-4 py-2 rounded-md font-bold text-sm ${loan.rateColor}`}
                        >
                          {loan.rate}
                        </div>
                        <a
                          href={loan.link}
                          className="mt-2 text-sm font-medium text-blue-600 flex items-center gap-1 hover:underline"
                        >
                          Check Eligibility <FaArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Left: Image */}
                      <img
                        src={loan.image}
                        alt={loan.title}
                        className="w-24 h-24 object-contain flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Grid (Desktop only) */}
          <div className="mt-10 hidden lg:grid grid-cols-4 gap-6">
            {loans.map((loan) => (
              <div
                key={loan.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between p-4"
              >
                {/* Title + Description */}
                <div>
                  <h3 className="text-lg font-semibold">{loan.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{loan.desc}</p>
                </div>

                {/* Image and Rate/Link Row */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex flex-col items-start">
                    <div
                      className={`px-4 py-2 rounded-md font-bold text-sm ${loan.rateColor}`}
                    >
                      {loan.rate}
                    </div>
                    <a
                      href={loan.link}
                      className="mt-2 text-sm font-medium text-blue-600 flex items-center gap-1 hover:underline"
                    >
                      Check Eligibility <FaArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Images */}
      <div className="hidden lg:block">
        <img src={CheckPoonaWallaBanner} alt="banner" />
      </div>
      <div className="block lg:hidden">
        <img src={CheckPoonaWallaBannerMobile} alt="banner" />
      </div>
    </Container>
  );
};

export default TrendingLoans;
