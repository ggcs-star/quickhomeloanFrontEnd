export default function CategoryArrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        direction === "left" ? "left-0" : "right-0"
      } z-20 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-lg`}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}
