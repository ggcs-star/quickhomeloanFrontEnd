export default function ReelCard({ count, title, subtitle }) {
  return (
    <div className="h-36 rounded-xl bg-gradient-to-br from-gray-900 to-black text-white p-5 flex flex-col justify-end">
      <div className="text-2xl font-bold">{count}</div>
      <div className="mt-1 text-sm font-semibold">{title}</div>
      <div className="text-xs text-gray-300">{subtitle}</div>
    </div>
  );
}
