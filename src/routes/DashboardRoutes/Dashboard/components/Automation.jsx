export default function Automation() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Automation Center</h1>
      <p className="text-gray-600 mb-6">Automate tasks & workflows</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: "fa-robot", label: "Active Automations", value: 12 },
          { icon: "fa-tasks", label: "Tasks Done", value: 156 },
          { icon: "fa-clock", label: "Time Saved", value: "8.2h" },
          { icon: "fa-rupee-sign", label: "Efficiency Gain", value: "25%" },
        ].map((stat) => (
          <div key={stat.label} className="p-6 bg-white shadow rounded-xl text-center">
            <i className={`fas ${stat.icon} text-3xl text-blue-600 mb-2`}></i>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
