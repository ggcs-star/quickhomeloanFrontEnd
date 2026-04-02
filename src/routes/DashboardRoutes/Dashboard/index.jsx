import CLVChart from "./components/CLVChart";
import PredictiveChart from "./components/PredictiveChart";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        AI-Powered Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        Real-time insights and predictive analytics
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-robot text-xl"></i>
            <div>
              <p className="font-semibold">AI Recommendation</p>
              <p className="text-blue-100 text-sm">
                Focus on high-potential leads today
              </p>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <PredictiveChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <CLVChart />
        </div>
      </div>
    </div>
    
  );
}
