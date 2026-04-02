import { useEffect, useState } from "react";

export default function ReelBlock() {
  const [reel, setReel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReel = async () => {
      try {
        const res = await fetch(
          "https://news.quickhomeloan.in/api/get_reel"
        );
        const json = await res.json();

        if (json.status && json.data.length > 0) {
          // Pick latest reel
          setReel(json.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch reel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReel();
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900">
        Featured Reel
      </h3>

      {loading && (
        <p className="mt-4 text-sm text-gray-500">
          Loading reel...
        </p>
      )}

      {!loading && reel && (
        <>
          <p className="mt-2 text-sm text-gray-600">
            {reel.caption}
          </p>

          <div className="mt-5 rounded-xl overflow-hidden bg-black">
            <video
              src={reel.video_url}
              className="w-full h-64 object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </>
      )}

      {!loading && !reel && (
        <div className="mt-6 h-40 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          No reel available
        </div>
      )}
    </div>
  );
}
