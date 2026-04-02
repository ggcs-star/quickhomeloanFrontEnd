import React from "react";
import { Quote, Star } from "lucide-react";

const CustomerTestimonials = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
          {data.title}
        </h2>
      </div>

      {/* Testimonials */}
      <div className="p-6 space-y-6">
        {data.testimonials.map((t, i) => (
          <div
            key={i}
            className="relative p-4 border-l-4 border-black bg-neutral-100 rounded-r-lg"
          >
            <Quote className="absolute top-2 right-2 w-8 h-8 text-primary/10" />
            <div className="relative">
              {/* ⭐ Ratings */}
              <div className="flex items-center">
                {[...Array(t.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Title */}
              <h4 className="font-bold text-neutral-800 mt-2">{t.title}</h4>

              {/* Review */}
              <p className="text-sm text-neutral-600 my-2">"{t.feedback}"</p>

              {/* Author */}
              <p className="text-sm font-semibold text-neutral-700 text-right">
                — {t.author}, {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
