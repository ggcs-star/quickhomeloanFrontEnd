export default function TableShimmer({ rows = 6 }) {
  return (
    <div className="animate-pulse">
      {/* Header shimmer */}
      <div className="grid grid-cols-8 gap-4 bg-gray-200 p-4 rounded-t-lg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-300 rounded" />
        ))}
      </div>

      {/* Body shimmer */}
      {Array.from({ length: rows }).map((_, row) => (
        <div
          key={row}
          className="grid grid-cols-8 gap-4 p-4 border-b"
        >
          <div className="h-4 w-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-8 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  )
}
