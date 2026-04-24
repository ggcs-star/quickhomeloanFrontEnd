import React, { useEffect, useState } from "react";
import {
  Percent,
  CalendarClock,
  IndianRupee,
  FileText,
} from "lucide-react";
import { Container } from "../../../../components/Layout";
import { useParams } from "react-router-dom";
import { homeLoanData } from "../../../../db/homeLoanData";

const SBIHighlightsSection = () => {
  const { slug } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchLender = async () => {
      try {
        // ✅ STEP 1: get DB record using route slug
        const dbData = homeLoanData.find((item) => item.slug === slug);

        if (!dbData) {
          console.warn("No DB match for slug:", slug);
          return;
        }

        // ✅ STEP 2: extract bank keyword (important)
        // "SBI Home Loan" → "sbi"
        const bankKey = dbData.title
          .toLowerCase()
          .replace("home loan", "")
          .trim();

        // ✅ STEP 3: fetch API
        const res = await fetch(
          "https://backend.quickhomeloan.in/public/api/lenders"
        );
        const json = await res.json();

        if (json?.status && json?.data) {
          // ✅ STEP 4: match API lender intelligently
          const lender = json.data.find((item) => {
            const apiName = item.name.toLowerCase();

            return (
              apiName.includes(bankKey) || // "state bank of india" includes "sbi"? ❌
              bankKey.includes(apiName.split(" ")[0]) // fallback
            );
          });

          // 🔥 SPECIAL FIX for SBI (important edge case)
          const finalLender =
            lender ||
            json.data.find((item) =>
              item.name.toLowerCase().includes("state bank of india")
            );

          if (finalLender) {
            setItems([
              {
                icon: "percent",
                label: "Interest Rate",
                value: finalLender.rate?.includes("%")
                  ? finalLender.rate
                  : `${finalLender.rate}% p.a.`,
              },
              {
                icon: "calendar-clock",
                label: "Max Tenure",
                value: finalLender.tenure,
              },
              {
                icon: "indian-rupee",
                label: "Max Loan",
                value: finalLender.loan,
              },
              {
                icon: "file-text",
                label: "EMI Starting",
                value: finalLender.emi,
              },
            ]);
          } else {
            console.warn("No API match found for:", bankKey);
          }
        }
      } catch (error) {
        console.error("API error:", error);
      }
    };

    if (slug) fetchLender();
  }, [slug]);

  if (!items.length) return null;

  return (
    <Container>
      <section className="my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 lg:flex-row items-center p-5 bg-white rounded-md border border-neutral-200"
            >
              <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full shadow">
                {item.icon === "percent" && <Percent className="w-6 h-6" />}
                {item.icon === "calendar-clock" && (
                  <CalendarClock className="w-6 h-6" />
                )}
                {item.icon === "indian-rupee" && (
                  <IndianRupee className="w-6 h-6" />
                )}
                {item.icon === "file-text" && (
                  <FileText className="w-6 h-6" />
                )}
              </div>

              <div className="ml-4 text-center lg:text-left">
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