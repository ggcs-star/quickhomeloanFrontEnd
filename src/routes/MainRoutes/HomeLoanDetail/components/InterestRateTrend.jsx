import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const InterestRateTrend = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
          {data.title}
        </h2>
      </div>

      {/* Chart Section */}
      <div className="p-6">
        <p className="text-sm text-neutral-500 mb-4">{data.description}</p>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis
                stroke="#666"
                tickFormatter={(value) => `${value.toFixed(2)}%`}
                domain={["dataMin - 0.05", "dataMax + 0.05"]}
              />
              <Tooltip
                formatter={(value) => `${value.toFixed(2)}%`}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
         <Line
  type="monotone"
  dataKey="rate"
  name="Starting Rate (p.a.)"
  stroke="#000"  // Change this to black (#000)
  strokeWidth={2}
  dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
/>

            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InterestRateTrend;
