export default function CompareBar({ count, onCompare, onClear }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
      <div className="p-3 bg-white border-1 border-gray-300 rounded-xl shadow-lg flex items-center gap-4">
        <span className="font-semibold">{count} bank(s) selected</span>

        <button
          onClick={onCompare}
          className="bg-accent px-6 py-2 rounded-lg font-bold cursor-pointer"
        >
          Compare ({count})
        </button>

        <button onClick={onClear} className="text-primary text-sm cursor-pointer">
          Clear
        </button>
      </div>
    </div>
  )
}
