import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const data = [
  { year: "2015", min: 6.25, avg: 7.25, max: 8.25 },
  { year: "2016", min: 6.75, avg: 7.75, max: 8.75 },
  { year: "2017", min: 7.65, avg: 8.65, max: 9.65 },
  { year: "2018", min: 7.45, avg: 8.45, max: 9.25 },
  { year: "2019", min: 7.85, avg: 8.85, max: 9.65 },
  { year: "2020", min: 5.65, avg: 6.65, max: 7.65 },
  { year: "2021", min: 5.75, avg: 6.75, max: 7.75 },
  { year: "2022", min: 6.75, avg: 7.75, max: 8.75 },
  { year: "2023", min: 7.45, avg: 8.45, max: 9.25 },
  { year: "2024", min: 7.65, avg: 8.65, max: 9.65 },
]

export default function HistoricalInterestRates() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-gray-800/50 pb-2 mb-6">
        Historical Interest Rate Trends (10 Years)
      </h2>

      <div className="bg-light-card dark:bg-dark-card/50 rounded-lg">
        <div className="w-full h-[400px]">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(100,116,139,0.3)"
              />

              <XAxis
                dataKey="year"
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#6b7280" }}
              />

              <YAxis
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#6b7280" }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31,41,55,0.9)",
                  border: "1px solid #374151",
                  color: "#f9fafb",
                }}
                formatter={(value) => `${value}%`}
              />

              <Legend verticalAlign="bottom" height={36} />

              <Line
                type="monotone"
                dataKey="avg"
                name="Avg Rate"
                stroke="#374151"
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />

              <Line
                type="monotone"
                dataKey="max"
                name="Max Rate"
                stroke="#6b7280"
                strokeWidth={2}
                dot={{ r: 3 }}
              />

              <Line
                type="monotone"
                dataKey="min"
                name="Min Rate"
                stroke="#9ca3af"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>
    </section>
  )
}
