import React from 'react';
import { Film, Play, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoGrid = ({ 
  videos, 
  currentPage, 
  totalPages, 
  onPageChange, 
  onWatchVideo, 
  isProUser,
  getCategoryDisplayName 
}) => {
  return (
    <div className="space-y-4">
      <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700 flex items-center gap-2">
        <Film size={16} />
        Video Library
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`border rounded-md overflow-hidden transition shadow-sm ${
              isProUser 
                ? "bg-white border-neutral-300 hover:border-black"
                : "bg-neutral-50 border-neutral-200"
            }`}
          >
            <div className="aspect-video bg-neutral-100 flex items-center justify-center relative">
              {!isProUser ? (
                <Lock size={32} className="text-neutral-500" />
              ) : (
                <Play size={32} className="text-neutral-700" />
              )}
              {!isProUser && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <span className="bg-white/90 text-neutral-700 text-[10px] font-bold px-2 py-1 rounded-full">Pro</span>
                </div>
              )}
            </div>

            <div className="p-4 space-y-2">
              <h5 className={`text-[14px] font-medium line-clamp-1 ${isProUser ? "text-neutral-900" : "text-neutral-500"}`}>
                {video.title}
              </h5>
              <p className="text-[11px] text-neutral-400">{getCategoryDisplayName(video.category)}</p>
              <button
                onClick={() => onWatchVideo(video)}
                disabled={!isProUser}
                className={`text-[12px] font-bold ${
                  isProUser
                    ? "text-black hover:underline"
                    : "text-neutral-400 cursor-not-allowed"
                }`}
              >
                {!isProUser ? "Pro Feature" : "Watch Now"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md border border-neutral-300 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-black"
            }`}
          >
            <ChevronLeft size={16} />
          </button>
          
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={idx}
                onClick={() => onPageChange(pageNum)}
                className={`w-8 h-8 rounded-md text-[14px] ${
                  currentPage === pageNum
                    ? "bg-black text-white"
                    : "border border-neutral-300 hover:border-black"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md border border-neutral-300 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-black"
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;