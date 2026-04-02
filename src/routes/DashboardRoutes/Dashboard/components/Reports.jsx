import CLVChart from "./CLVChart";
import ConversionProbabilityChart from "./ConversionProbabilityChart";

export default function Reports() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">AI Insights & Predictive Analytics</h1>
      <p className="text-gray-600 mb-6">Advanced machine learning insights</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold mb-4">Conversion Probability</h3>
          <ConversionProbabilityChart />
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold mb-4">Customer Lifetime Value</h3>
          <CLVChart />
        </div>
      </div>
    </>
  );
}
