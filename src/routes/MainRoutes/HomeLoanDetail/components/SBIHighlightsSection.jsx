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
import { getLenders } from "../../../../api"; // Import getLenders from api.js

const SBIHighlightsSection = () => {
  const { slug } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLender = async () => {
      setLoading(true);
      try {
        // ✅ STEP 1: get DB record using route slug
        const dbData = homeLoanData.find((item) => item.slug === slug);

        if (!dbData) {
          console.warn("No DB match for slug:", slug);
          setLoading(false);
          return;
        }

        // ✅ STEP 2: extract bank keyword (important)
        // "SBI Home Loan" → "sbi"
        const bankKey = dbData.title
          .toLowerCase()
          .replace("home loan", "")
          .trim();

        // ✅ STEP 3: fetch API using getLenders (which has caching)
        const lenders = await getLenders();

        if (lenders && lenders.length > 0) {
          // ✅ STEP 4: match API lender intelligently
          let lender = lenders.find((item) => {
            const apiName = item.name.toLowerCase();
            return (
              apiName.includes(bankKey) ||
              bankKey.includes(apiName.split(" ")[0])
            );
          });

          // 🔥 SPECIAL FIX for SBI (important edge case)
          if (!lender) {
            lender = lenders.find((item) =>
              item.name.toLowerCase().includes("state bank of india")
            );
          }

          // 🔥 SPECIAL FIX for HDFC
          if (!lender && bankKey.includes("hdfc")) {
            lender = lenders.find((item) =>
              item.name.toLowerCase().includes("hdfc")
            );
          }

          // 🔥 SPECIAL FIX for ICICI
          if (!lender && bankKey.includes("icici")) {
            lender = lenders.find((item) =>
              item.name.toLowerCase().includes("icici")
            );
          }

          // 🔥 SPECIAL FIX for Axis Bank
          if (!lender && bankKey.includes("axis")) {
            lender = lenders.find((item) =>
              item.name.toLowerCase().includes("axis")
            );
          }

          // 🔥 SPECIAL FIX for Bank of Baroda
          if (!lender && bankKey.includes("baroda")) {
            lender = lenders.find((item) =>
              item.name.toLowerCase().includes("bank of baroda")
            );
          }

          if (lender) {
            setItems([
              {
                icon: "percent",
                label: "Interest Rate",
                value: lender.rate?.includes("%")
                  ? lender.rate
                  : `${lender.rate}% p.a.`,
              },
              {
                icon: "calendar-clock",
                label: "Max Tenure",
                value: lender.tenure,
              },
              {
                icon: "indian-rupee",
                label: "Max Loan",
                value: lender.loan,
              },
              {
                icon: "file-text",
                label: "EMI Starting",
                value: lender.emi,
              },
            ]);
          } else {
            console.warn("No API match found for:", bankKey);
            // Set fallback data from DB if API match fails
            setItems([
              {
                icon: "percent",
                label: "Interest Rate",
                value: dbData.interestRate || "8.50% p.a.",
              },
              {
                icon: "calendar-clock",
                label: "Max Tenure",
                value: dbData.maxTenure || "30 Years",
              },
              {
                icon: "indian-rupee",
                label: "Max Loan",
                value: dbData.maxLoan || "₹5 Crore",
              },
              {
                icon: "file-text",
                label: "EMI Starting",
                value: dbData.emiStarting || "₹37,000",
              },
            ]);
          }
        } else {
          // Fallback to DB data if no lenders from API
          setItems([
            {
              icon: "percent",
              label: "Interest Rate",
              value: dbData.interestRate || "8.50% p.a.",
            },
            {
              icon: "calendar-clock",
              label: "Max Tenure",
              value: dbData.maxTenure || "30 Years",
            },
            {
              icon: "indian-rupee",
              label: "Max Loan",
              value: dbData.maxLoan || "₹5 Crore",
            },
            {
              icon: "file-text",
              label: "EMI Starting",
              value: dbData.emiStarting || "₹37,000",
            },
          ]);
        }
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchLender();
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <section className="my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="flex flex-col gap-4 lg:flex-row items-center p-5 bg-white rounded-md border border-neutral-200 animate-pulse"
              >
                <div className="flex-shrink-0 bg-gray-200 p-3 rounded-full shadow w-12 h-12"></div>
                <div className="ml-4 text-center lg:text-left w-full">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    );
  }

  if (!items.length) return null;

  return (
    <Container>
      <section className="my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 lg:flex-row items-center p-5 bg-white rounded-md border border-neutral-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full shadow">
                {item.icon === "percent" && <Percent className="w-6 h-6 text-gray-700" />}
                {item.icon === "calendar-clock" && (
                  <CalendarClock className="w-6 h-6 text-gray-700" />
                )}
                {item.icon === "indian-rupee" && (
                  <IndianRupee className="w-6 h-6 text-gray-700" />
                )}
                {item.icon === "file-text" && (
                  <FileText className="w-6 h-6 text-gray-700" />
                )}
              </div>

              <div className="ml-4 text-center lg:text-left">
                <p className="text-sm text-neutral-600">{item.label}</p>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default SBIHighlightsSection;