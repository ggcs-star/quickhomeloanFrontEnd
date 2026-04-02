import { FaAngleDown } from "react-icons/fa";

export default function NavbarAuthActions({
  isAuthenticated,
  userName,
  userEmail,
  isLoggingOut,
  onDashboard,
  onCompliance,
  onLogout,
  onLogin,
  onSignup,
}) {
  return (
    <div className="hidden lg:flex items-center gap-4">
      {isAuthenticated ? (
        <>
          {/* User dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition">
              <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                {userName
                  ? userName.charAt(0).toUpperCase()
                  : userEmail
                  ? userEmail.charAt(0).toUpperCase()
                  : "U"}
              </div>

              <span className="text-sm font-medium text-slate-700 max-w-[120px] truncate">
                {userName || userEmail?.split("@")[0] || "User"}
              </span>

              <FaAngleDown className="text-slate-400 text-xs" />
            </button>

            <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button
                onClick={onDashboard}
                className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100"
              >
                Dashboard
              </button>

              <button
                onClick={onLogout}
                disabled={isLoggingOut}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onCompliance}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Complete Compliance
          </button>
        </>
      ) : (
        <>
          <button
            onClick={onLogin}
            className="px-5 py-2.5 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition"
          >
            Login
          </button>

          <button
            onClick={onSignup}
            className="px-5 py-2.5 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}
