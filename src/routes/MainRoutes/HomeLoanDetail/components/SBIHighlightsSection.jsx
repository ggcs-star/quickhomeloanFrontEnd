import React from "react";
import {
  Percent,
  CalendarClock,
  IndianRupee,
  FileText,
} from "lucide-react";
import { Container } from "../../../../components/Layout";

const SBIHighlightsSection = ({ data }) => {
  if (!data || !data.items) return null;

  return (
    <Container>
      <section className="my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 lg:flex-row items-center p-5 bg-white text-black rounded-md border border-neutral-200"
            >
              {/* Icon Wrapper */}
              <div className="flex-shrink-0 bg-gray-100 text-black p-3 rounded-full shadow">
                {item.icon === "percent" && <Percent className="w-6 h-6" />}
                {item.icon === "calendar-clock" && <CalendarClock className="w-6 h-6" />}
                {item.icon === "indian-rupee" && <IndianRupee className="w-6 h-6" />}
                {item.icon === "file-text" && <FileText className="w-6 h-6" />}
              </div>

              {/* Text */}
              <div className="ml-4">
                <p className="text-sm text-neutral-600">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default SBIHighlightsSection;
