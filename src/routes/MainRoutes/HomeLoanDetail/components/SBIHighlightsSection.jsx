import React, { useMemo } from "react";
import {
  Percent,
  CalendarClock,
  IndianRupee,
  FileText,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Container } from "../../../../components/Layout";
import { useParams } from "react-router-dom";
import { homeLoanData } from "../../../../db/homeLoanData";
import { getLenders } from "../../../../api";

const SBIHighlightsSection = () => {
  const { slug } = useParams();

  /* ---------------- TANSTACK QUERY ---------------- */
  const {
    data: lenders = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["lenders"],

    queryFn: async () => {
      const lendersData = await getLenders();
      return lendersData;
    },

    // ✅ API WILL NOT REFETCH FOR 10 MINUTES
    staleTime: 1000 * 60 * 10,

    // ✅ CACHE STORED FOR 30 MINUTES
    gcTime: 1000 * 60 * 30,

    // ✅ PREVENT UNNECESSARY REFETCH
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  /* ---------------- MATCH LENDER FROM API ---------------- */
  const matchedLender = useMemo(() => {
    // Get DB record using route slug
    const dbData = homeLoanData.find((item) => item.slug === slug);
    
    if (!dbData || !lenders.length) return null;

    // Extract bank keyword from DB title
    // "SBI Home Loan" → "sbi"
    const bankKey = dbData.title
      .toLowerCase()
      .replace("home loan", "")
      .trim();

    // Match API lender intelligently
    let lender = lenders.find((item) => {
      const apiName = item.name.toLowerCase();
      return (
        apiName.includes(bankKey) ||
        bankKey.includes(apiName.split(" ")[0])
      );
    });

    // SPECIAL FIX for SBI
    if (!lender) {
      lender = lenders.find((item) =>
        item.name.toLowerCase().includes("state bank of india")
      );
    }

    // SPECIAL FIX for HDFC
    if (!lender && bankKey.includes("hdfc")) {
      lender = lenders.find((item) =>
        item.name.toLowerCase().includes("hdfc")
      );
    }

    // SPECIAL FIX for ICICI
    if (!lender && bankKey.includes("icici")) {
      lender = lenders.find((item) =>
        item.name.toLowerCase().includes("icici")
      );
    }

    // SPECIAL FIX for Axis Bank
    if (!lender && bankKey.includes("axis")) {
      lender = lenders.find((item) =>
        item.name.toLowerCase().includes("axis")
      );
    }

    // SPECIAL FIX for Bank of Baroda
    if (!lender && bankKey.includes("baroda")) {
      lender = lenders.find((item) =>
        item.name.toLowerCase().includes("bank of baroda")
      );
    }

    return { lender, dbData, bankKey };
  }, [lenders, slug]);

  /* ---------------- BUILD ITEMS ARRAY ---------------- */
  const items = useMemo(() => {
    if (!matchedLender) return [];

    const { lender, dbData, bankKey } = matchedLender;

    if (lender) {
      return [
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
      ];
    }

    // Fallback to DB data if no API match found
    console.warn("No API match found for:", bankKey);
    return [
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
    ];
  }, [matchedLender]);

  // Loading state
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

  // Error state
  if (error) {
    // Try to get fallback data from DB
    const dbData = homeLoanData.find((item) => item.slug === slug);
    const fallbackItems = dbData ? [
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
    ] : [];

    if (!fallbackItems.length) return null;

    return (
      <Container>
        <section className="my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fallbackItems.map((item, index) => (
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