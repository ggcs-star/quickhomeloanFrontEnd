import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Bangalore",
    text: `"Quick Home Loan made my dream of owning a home a reality. The process was incredibly smooth and transparent. Their team guided me at every step!"`,
    avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=P",
  },
  {
    name: "Amit Singh",
    role: "Business Owner, Delhi",
    text: `"As a self-employed individual, getting a loan was tough. Quick Home Loan understood my needs and provided a customized solution with a great interest rate."`,
    avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=A",
  },
  {
    name: "Sunita Rao",
    role: "Doctor, Chennai",
    text: `"The efficiency and professionalism of the Quick Home Loan team are commendable. I got my loan approved in just one day. Highly recommended!"`,
    avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=S",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0F1A32] text-white p-3 rounded-full shadow-md hover:bg-slate-800 z-30"
  >
    <ChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0F1A32] text-white p-3 rounded-full shadow-md hover:bg-slate-800 z-30"
  >
    <ChevronLeft size={20} />
  </button>
);

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto relative px-12">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real experiences from customers who trusted us for their home loans.
          </p>
        </div>

        {/* Ensure stars + arrows don't clip */}
        <style>{`.slick-slide { overflow: visible!important; }`}</style>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-6">
<div className="bg-white p-10 rounded-3xl shadow-sm border border-[#E5E7EB] relative">

  {/* ⭐ STAR ON CARD BORDER (perfect position) */}
  <div className="absolute -top-3 left-8 bg-[#0F1A32] text-white p-2 rounded-xl shadow-lg border border-[#E5E7EB]">
    <Star size={18} fill="white" />
  </div>

  <blockquote className="text-slate-700 leading-relaxed text-[17px] mb-10 italic">
    {item.text}
  </blockquote>

  <div className="border-t border-gray-200 mb-6"></div>

  <div className="flex items-center gap-4">
    <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
      <img
        src={item.avatar}
        alt={item.name}
        className="h-full w-full object-cover"
      />
    </div>

    <div>
      <div className="font-bold text-slate-900 text-lg">
        {item.name}
      </div>
      <div className="text-xs text-slate-500">{item.role}</div>
    </div>
  </div>

</div>

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
