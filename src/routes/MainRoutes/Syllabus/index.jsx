import React, { useState, useMemo } from 'react';

const Syllabus = () => {
  const [activeModule, setActiveModule] = useState(null);
  
  // Module data - same as provided
  const moduleData = useMemo(() => {
    const titles = [
      "CIBIL Score: The Reality Check",
      "Hidden Charges in Home Loans",
      "Fixed vs Floating: The Trap?",
      "Pre-payment Secrets revealed",
      "Negotiating with Private Banks",
      "PMAY Subsidy Eligibility",
      "Balance Transfer Strategy",
      "Property Valuation nuances",
      "Legal Verification checklist"
    ];
    
    const durations = [
      "0:25", "0:37", "1:45", "0:45", "0:04", "0:27", "1:03", "0:30", "1:37",
      "1:25", "0:29", "0:00", "1:04", "1:51", "1:33", "1:50", "0:10", "0:52",
      "1:30", "1:20", "1:47", "0:02", "1:28", "1:49", "0:18", "1:21", "1:31",
      "0:16", "1:19", "1:56", "0:37", "0:08", "1:22", "0:05", "1:26", "1:19",
      "0:25", "1:46", "0:46", "0:25", "1:57", "0:13", "1:25", "0:57", "0:26",
      "1:34", "1:40", "1:03", "1:39", "1:36", "0:22", "1:00", "1:51", "1:12",
      "1:58", "1:47", "0:30", "1:20", "0:16", "0:45", "1:55", "1:02", "1:56",
      "0:08", "1:34", "1:33", "1:09", "0:40", "1:48", "0:14", "1:23", "0:13",
      "0:23", "0:39", "0:01", "0:28", "1:24", "1:32", "1:12", "0:46", "1:43",
      "0:46", "1:01", "0:39", "0:15", "0:57", "0:14", "1:17", "0:40", "1:48",
      "1:00", "1:01", "1:01", "1:06", "0:57", "0:35", "0:13", "0:14", "1:57"
    ];
    
    return Array.from({ length: 99 }, (_, i) => ({
      id: i + 1,
      number: (i + 1).toString().padStart(2, '0'),
      title: titles[i % titles.length],
      duration: durations[i]
    }));
  }, []);

  // Calculate total duration
  const totalDuration = useMemo(() => {
    let totalSeconds = 0;
    moduleData.forEach(module => {
      const [minutes, seconds] = module.duration.split(':').map(Number);
      totalSeconds += minutes * 60 + seconds;
    });
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }, [moduleData]);

  const ModuleItem = ({ module }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    
    return (
      <div 
        className={`
          group relative flex items-center h-[56px] px-4 border-b border-neutral-100 last:border-0 
          transition-all duration-200 cursor-pointer hover:bg-neutral-50
          ${activeModule === module.id ? 'bg-blue-50 border-l-2 border-l-navy' : ''}
        `}
        onClick={() => setActiveModule(module.id)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Left accent border */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute left-10 bottom-full mb-1 z-50 pointer-events-none transition-all duration-300 transform translate-y-0">
            <div className="bg-gray-400 text-white text-[11px] leading-relaxed p-3 rounded-lg shadow-2xl border border-white/10 w-64 backdrop-blur-md">
              <p className="font-bold text-gold uppercase tracking-[0.1em] text-[9px] mb-1">Module Insight</p>
              Learn how to optimize your application for maximum savings and minimum rejection risk based on RBI-aligned banking logic.
            </div>
          </div>
        )}
        
        {/* Module Number */}
        <div className="w-[32px] shrink-0 text-[12px] font-mono text-neutral-300 group-hover:text-neutral-500 transition-colors tabular-nums">
          {module.number}
        </div>
        
        {/* Module Title */}
        <div className="flex-1 min-w-0 pr-4 ml-2">
          <span className="text-[14px] font-medium truncate block transition-colors text-navy group-hover:text-black">
            {module.title}
          </span>
        </div>
        
        {/* Right Side Info */}
        <div className="flex items-center gap-4">
          {/* Free Lesson Badge */}
          <div className="text-right text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
            <span className="text-navy">Free lesson</span>
          </div>
          
          {/* Duration */}
          <div className="w-[48px] shrink-0 text-right text-[11px] font-medium text-neutral-400 tabular-nums">
            {module.duration}
          </div>
          
          {/* Play Icon */}
          <div className="w-[24px] shrink-0 flex justify-center">
            <div className="text-navy/20 group-hover:text-navy transition-all transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:col-span-9">
      <div className="bg-white rounded-xl border border-neutral-300 overflow-hidden shadow-sm min-h-[400px]">
        {/* Header Row */}
        <div className="flex items-center h-12 px-4 border-b border-neutral-100 bg-neutral-50">
          <div className="w-[32px] shrink-0 text-[12px] font-mono text-neutral-500 font-medium tabular-nums">#</div>
          <div className="flex-1 min-w-0 ml-2">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-neutral-700">Module Title</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[100px] text-right">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-neutral-700">Status</span>
            </div>
            <div className="w-[48px] text-right">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-neutral-700">Time</span>
            </div>
            <div className="w-[24px] shrink-0"></div>
          </div>
        </div>

        {/* Syllabus Items Container */}
        <div className="max-h-[600px] overflow-y-auto">
          {moduleData.map((module) => (
            <ModuleItem key={module.id} module={module} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between h-12 px-4 border-t border-neutral-100 bg-neutral-50">
          <div className="text-sm text-neutral-600">
            {moduleData.length} modules • Total duration: {totalDuration}
          </div>
          <div className="text-sm text-navy font-medium">
            All lessons are free to preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;