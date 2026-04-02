// StatsRow.jsx
import React from "react";
import Slider from "react-slick";
import { Container } from "../../../../components/Layout";

const StatsRow = () => {
  const stats = [
    { value: "5.8 Lacs+", label: "Happy Customers" },
    { value: "6,100 Mn+", label: "Disbursed Annually" },
    { value: "150+", label: "Cities Covered" },
    { value: "587+", label: "Branches" },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2, // Show partial next slide hint
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="bg-gray-200 lg:py-4">
      <Container>
        {/* ✅ Mobile View: Slider */}
        <div className="block sm:hidden">
          <Slider {...sliderSettings}>
            {stats.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex flex-col items-center justify-center text-center py-2 lg:py-4 gap-2">
                  <div className="text-xl font-semibold text-gray-800">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.label}
                  </div>
                </div>
              </div>

            ))}

          </Slider>
        </div>

        {/* ✅ Desktop View: Flex Layout */}
        <div className="hidden sm:flex sm:items-stretch sm:justify-between gap-3">
          {stats.map((item, idx) => (
            <div key={idx} className="flex-1 sm:px-6 sm:py-2 flex items-center justify-center">
              <div className="flex gap-2 items-center text-center">
                <div className="text-lg font-semibold leading-none">{item.value}</div>
                <div className="text-md text-gray-500">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatsRow;
