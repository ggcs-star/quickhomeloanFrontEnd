export default function PersonalInfoSkeleton() {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -700px 0; }
            100% { background-position: 700px 0; }
          }

          .shimmer-effect {
            background: linear-gradient(
              to right,
              #e2e8f0 8%,
              #f1f5f9 18%,
              #e2e8f0 33%
            );
            background-size: 1000px 100%;
            animation: shimmer 1.6s infinite linear;
          }
        `}
      </style>

      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Header Skeleton */}
        <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
          <div className="h-5 w-40 rounded shimmer-effect" />
          <div className="h-9 w-20 rounded-lg shimmer-effect" />
        </div>

        {/* Form Skeleton */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-24 rounded shimmer-effect" />
              <div className="h-11 w-full rounded-lg shimmer-effect" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}