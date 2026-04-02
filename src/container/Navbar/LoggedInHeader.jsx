import { Menu, ShieldCheck } from "lucide-react";

export default function LoggedInHeader({
  onMenuClick,
  onCompleteCompliance,
}) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-50">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-slate-100 rounded"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2">
          <div className="text-brand-action">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-[20px] font-semibold text-brand-deep hidden sm:block tracking-tight">
            BorrowerRights
          </h1>
        </div>
      </div>

      {/* Center (desktop only) */}
      <div className="hidden md:flex items-center gap-6 pr-6 border-r border-slate-100">
        <div className="flex flex-col items-end">
          <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
            Compliance Status
          </span>
          <span className="text-[12px] font-bold text-status-warning uppercase tracking-widest px-2 py-0.5 bg-orange-50 border border-status-warning/20 rounded">
            Incomplete
          </span>
        </div>

        <div className="flex flex-col items-end min-w-[140px]">
          <div className="flex justify-between w-full mb-1">
            <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">
              Completion
            </span>
            <span className="text-[12px] font-bold text-status-safe tabular-nums">
              23.4%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-status-safe transition-all duration-1000"
              style={{ width: "23.4%" }}
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <button
        onClick={onCompleteCompliance}
        className="bg-brand-action text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
      >
        Complete Compliance
      </button>
    </header>
  );
}
