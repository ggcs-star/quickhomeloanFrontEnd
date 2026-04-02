import React from "react";
import Slider from "react-slick";
import image1 from '../../../../assets/miscellaneous/swipe/image1.webp';
import image2 from '../../../../assets/miscellaneous/swipe/image2.webp';
import image3 from '../../../../assets/miscellaneous/swipe/image3.webp';
import image4 from '../../../../assets/miscellaneous/swipe/image4.webp';
import { Container } from "../../../../components/Layout";

// Credit card data
const creditCards = [
  {
    bank: "YES BANK",
    title: "YES BANK Credit Card",
    description: "Experience a rewarding journey with YES BANK Credit Card",
    benefits: [
      "25% Discount on Movie Tickets booked through Book My Show",
      "10x Reward Points",
    ],
    img: image1,
    buttonText: "Apply Now",
    buttonLink: "#",
  },
  {
    bank: "IDFC FIRST",
    title: "IDFC FIRST Bank Credit Cards",
    description: "A Credit Card, like no other.",
    benefits: ["SAVE UPTO ₹7,600 Annually*"],
    img: image2,
    buttonText: "Apply Now",
    buttonLink: "#",
  },
  {
    bank: "Standard Chartered",
    title: "Standard Chartered Credit Card!",
    description: "Presenting the Standard Chartered Credit Card!",
    benefits: [
      "No joining fee.",
      "Enjoy flat 20% & 10% discount* on hotel & flight bookings.",
    ],
    img: image3,
    buttonText: "Apply Now",
    buttonLink: "#",
  },
  {
    bank: "ICICI Bank",
    title: "Many Indulgences with ICICI Credit Card",
    description: "One Card – Many Indulgences",
    benefits: [
      "Welcome vouchers worth Rs. 5000+",
      "25% discount on BookMyShow",
    ],
    img: image4,
    buttonText: "Apply Now",
    buttonLink: "#",
  },
];

// Slick slider settings
const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CreditCardSection() {
  return (
    <Container>
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Swipe Like A Pro - Credit Card on the Go!
      </h2>
      <p className="text-gray-600 mb-8">
        Urban Money is your one-stop solution for informed consultations
        pertaining to your next online credit card purchase. Not only does a
        Credit Card improve your credit score, but it also allows you to
        purchase high-end commodities. However, with a massive range of credit
        cards, we have hand-picked some of the best credit cards across various
        banks. Conveniently apply online today!
      </p>

      {/* Mobile Slider */}
      <div className="block sm:hidden">
        <Slider {...sliderSettings}>
          {creditCards.map((card, index) => (
            <div key={index} className="px-0 lg:px-3">
              <div className="rounded-3xl transition flex flex-col">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Tablet/Desktop */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {creditCards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl transition flex flex-col"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-fit h-96 object-contain"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
