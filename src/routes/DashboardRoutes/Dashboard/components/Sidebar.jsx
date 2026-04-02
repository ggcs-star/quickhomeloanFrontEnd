import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const active = location.pathname;

  const menus = [
    { id: "/dashboard", icon: "fa-chart-line", label: "Dashboard" },
    { id: "/dashboard/complete-your-profile", icon: "fa-users", label: "Complete Your Profile" },
    { id: "/dashboard/apply-for-loan", icon: "fa-magic", label: "Apply For Loan" },
    { id: "/dashboard/tools", icon: "fa-brain", label: "Tools" },
  ];

  return (
    <aside className="w-64 shadow-lg hidden md:block min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-700">Main Menu</h2>

        <nav className="space-y-2">
          {menus.map((m) => (
            <Link
              key={m.id}
              to={m.id}
              className={`flex items-center p-3 rounded-lg border-l-4 transition
                ${
                  active === m.id
                    ? "bg-blue-50 text-blue-700 border-blue-600"
                    : "text-gray-700 border-transparent hover:bg-gray-100"
                }`}
            >
              <i className={`fas ${m.icon} w-5`}></i>
              <span className="ml-3">{m.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
