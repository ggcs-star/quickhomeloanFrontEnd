import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Pause, Lock } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const AudioCategory = ({ 
  category, 
  audioItems, 
  currentAudio, 
  isPlaying, 
  isProUser,
  onPlayPause,
  currentTime,
  duration,
  formatTime,
  onSeek
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalMinutes = audioItems.reduce((total, item) => {
    const [mins] = item.duration.split(':').map(Number);
    return total + mins;
  }, 0);

  const getCategoryDisplayName = (categoryName) => {
    const parts = categoryName.split('. ');
    return parts.length > 1 ? parts[1] : categoryName;
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-neutral-50 px-5 py-3 border-b border-neutral-200 hover:bg-neutral-100 transition-colors flex justify-between items-center group"
      >
        <div className="text-left">
          <h3 className="text-[16px] font-semibold text-neutral-900">
            {getCategoryDisplayName(category)}
          </h3>
          <p className="text-[12px] text-neutral-500 mt-0.5">
            {audioItems.length} lessons • Total: {totalMinutes} min
          </p>
        </div>
        <div className="text-neutral-400 group-hover:text-neutral-600 transition-colors">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[2000px]" : "max-h-0"
      }`}>
        <div className="divide-y divide-neutral-100">
          {audioItems.map((item) => {
            const isItemCurrent = currentAudio?.id === item.id;
            const isItemPlaying = isItemCurrent && isPlaying;
            const progressPercent = isItemCurrent && duration > 0 ? (currentTime / duration) * 100 : 0;

            return (
              <div 
                key={item.id} 
                className={`p-4 hover:bg-neutral-50 transition-all ${
                  isItemCurrent ? "bg-blue-50 border-l-4 border-blue-500" : ""
                }`}
              >
                <div className="flex gap-3">
                  {/* Album Art / Thumbnail */}
                  <div className="flex-shrink-0">
  {/* {item.coverImage ? (
    <img 
      src={item.coverImage} 
      alt={item.title}
      className="w-12 h-12 rounded-md object-cover"
    />
  ) : (
    <div className="w-12 h-12 rounded-md overflow-hidden relative bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-end p-1">
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <p className="text-[8px] font-semibold text-white leading-tight line-clamp-2">
          {item.title}
        </p>
      </div>

    </div>
  )} */}
</div>
                  
                  <div className="flex gap-4 min-w-0">

                    <div className="flex justify-between items-start gap-2">
                      <button
                        onClick={() => onPlayPause(item)}
                        disabled={!isProUser}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isProUser
                            ? "bg-black text-white hover:bg-neutral-800"
                            : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                        }`}
                      >
                        {!isProUser ? (
                          <Lock size={10} />
                        ) : isItemPlaying ? (
                          <Pause size={12} />
                        ) : (
                          <Play size={12} className="ml-0.5" />
                        )}
                      </button>
                      
                      {isItemCurrent && isProUser && (
                        <div className="flex-1">
                          <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={onSeek}
                            className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                            style={{
                              background: `linear-gradient(to right, ${item.accentColor || 'black'} 0%, ${item.accentColor || 'black'} ${progressPercent}%, #e5e7eb ${progressPercent}%, #e5e7eb 100%)`
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className={`text-[14px] font-medium truncate pr-2 ${isProUser ? "text-neutral-900" : "text-neutral-500"}`}>
                          {item.title}
                        </h5>
                        <p className={`text-[11px] truncate ${isProUser ? "text-neutral-500" : "text-neutral-400"}`}>
                          {item.desc}
                        </p>
                        {/* {item.playCount > 0 && (
                          <p className="text-[10px] text-neutral-400 mt-0.5">
                            {item.playCount.toLocaleString()} plays
                          </p>
                        )} */}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className={`text-[12px] font-mono ${isProUser ? "text-neutral-600" : "text-neutral-400"}`}>
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Play Button and Progress */}
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudioCategory;