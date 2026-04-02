import { useRef, useMemo } from "react";

export default function CategorySlider({ categories = [], active, onChange }) {
  const sliderRef = useRef(null);

  /* -------------------------------
     STATIC "ALL" CATEGORY
  -------------------------------- */
  const allCategory = {
    id: "ALL",
    name: "All",
  };

  /* -------------------------------
     MERGE STATIC + API CATEGORIES
  -------------------------------- */
  const mergedCategories = useMemo(() => {
    if (!categories || categories.length === 0) return [allCategory];

    const hasAll = categories.some(
      (c) => String(c.id).toUpperCase() === "ALL"
    );

    return hasAll ? categories : [allCategory, ...categories];
  }, [categories]);

  if (mergedCategories.length === 0) return null;

  const showArrows = mergedCategories.length > 10;

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir * 300,
      behavior: "smooth",
    });
  };

  const handleClick = (id) => {
    sessionStorage.setItem("activeCategory", id);
    onChange(id);
  };

  const handleViewAll = () => {
    window.location.href = "https://news.quickhomeloan.in/";
  };

  return (
    <div className="relative flex items-center gap-3">

      {/* LEFT ARROW */}
      {showArrows && (
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 z-10 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
        >
          ‹
        </button>
      )}

      {/* SCROLLABLE CATEGORIES */}
      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pl-10 pr-2 flex-1"
      >
        {mergedCategories.map((cat) => {
          const isActive = String(cat.id) === String(active);

          return (
            <button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition
                ${
                  isActive
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* FIXED VIEW ALL (RIGHT END) */}
      <button
        onClick={handleViewAll}
        className="
          shrink-0 px-5 py-2 rounded-full border text-sm font-semibold
          bg-white text-gray-900 border-gray-900
          hover:bg-gray-900 hover:text-white transition cursor-pointer
        "
      >
        View All
      </button>

      {/* RIGHT ARROW */}
      {showArrows && (
        <button
          onClick={() => scroll(1)}
          className="absolute right-14 z-10 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
        >
          ›
        </button>
      )}
    </div>
  );
}
