import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  CalendarPlus,
} from "lucide-react";

const ContactSupport = ({ data }) => {
  if (!data) return null;

  return (
    <div className=" bg-white text-black rounded-md border border-neutral-300 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-300">
        <h2 className="text-xl md:text-2xl font-bold">{data.title}</h2>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-6">

          {/* Branch Info */}
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">{data.branch.title}</h4>
              <p className="text-sm text-gray-600">{data.branch.address}</p>
            </div>
          </div>

          {/* Phone Info */}
          <div className="flex items-start">
            <Phone className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">{data.phone.title}</h4>
              <a
                href={`tel:${data.phone.number}`}
                className="text-sm text-gray-600 hover:underline"
              >
                {data.phone.number}
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start">
            <Clock className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">{data.hours.title}</h4>
              <p className="text-sm text-gray-600">{data.hours.details}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="border-t border-gray-300 pt-6 space-y-3">

            {/* Talk to Officer */}
            <button
              className="cursor-pointer w-full px-5 py-2.5 text-base font-semibold bg-black text-white rounded-md hover:bg-gray-900 transition"
              // onClick={() => alert("Connecting you to a loan officer...")}
            >
              <div className="flex items-center justify-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                {data.buttons.talkToOfficer}
              </div>
            </button>

            {/* Book a Callback */}
            <button
              className="cursor-pointer w-full px-5 py-2.5 text-base font-semibold bg-white text-black border border-neutral-300 rounded-md hover:bg-gray-100 transition"
              // onClick={() => alert("Callback request initiated!")}
            >
              <div className="flex items-center justify-center">
                <CalendarPlus className="w-4 h-4 mr-2" />
                {data.buttons.bookCallback}
              </div>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
