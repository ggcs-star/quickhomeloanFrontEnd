import React from 'react';
import { Play, Pause, Square, Volume2, Lock, Headphones } from 'lucide-react';

const AudioPlayer = ({ 
  currentAudio, 
  isPlaying, 
  currentTime, 
  duration, 
  isProUser,
  onPlayPause,
  onStop,
  onSeek,
  formatTime 
}) => {
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!currentAudio) {
    return (
      <div className="border rounded-lg p-8 shadow-sm bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="text-center">
          <Headphones size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">No Audio Selected</h3>
          <p className="text-gray-500 mt-2">Select a lesson from the modules below to start learning</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rounded-lg overflow-hidden shadow-sm ${
      isProUser ? "bg-white border-neutral-300" : "bg-neutral-50 border-neutral-200"
    }`}>

      {/* Hero Section */}
      <div 
        className="relative h-48 md:h-64"
        style={{ 
          backgroundColor: currentAudio.backgroundColor || '#1E3A8A',
          backgroundImage: currentAudio.coverImage ? `url(${currentAudio.coverImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* ✅ UPDATED CONTENT WITH IMAGE BESIDE */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-end justify-between gap-4">

            {/* LEFT CONTENT */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                  Now Playing
                </span>
                {/* {currentAudio.isCurrentlyPlaying && (
                  <span className="text-xs font-medium bg-green-500/80 backdrop-blur-sm px-2 py-1 rounded animate-pulse">
                    ● LIVE
                  </span>
                )} */}
                {/* {currentAudio.playCount > 0 && (
                  <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                    {currentAudio.playCount.toLocaleString()} plays
                  </span>
                )} */}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-1 line-clamp-2">
                {currentAudio.title}
              </h3>

              <p className="text-sm text-white/80">
                       <span>{currentAudio.category?.split('. ')[1] || currentAudio.category}</span> | {currentAudio.year || '2026'}
              </p>
            </div>

            {/* RIGHT IMAGE PLACEHOLDER */}
            <div className="w-[90px] h-[90px] md:w-[210px] md:h-[210px] flex-shrink-0">
              <div className="w-full h-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-[30px] text-white/60 text-center px-1">
                  Image
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="p-6 space-y-4">
        
        {/* Controls */}
        <div className="flex items-center gap-4 flex-wrap">
          <button 
            onClick={onPlayPause}
            disabled={!isProUser}
            className={`px-8 py-3 rounded-md font-bold flex items-center gap-3 shadow-md transition-all ${
              isProUser
                ? "bg-black hover:bg-neutral-800 text-white"
                : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            }`}
          >
            {!isProUser ? (
              <>
                <Lock size={18} />
                Upgrade to Play
              </>
            ) : isPlaying ? (
              <>
                <Pause size={18} />
                Pause
              </>
            ) : (
              <>
                <Play size={18} />
                Start Learning
              </>
            )}
          </button>

          {currentAudio && isProUser && (
            <button
              onClick={onStop}
              className="bg-neutral-100 hover:bg-neutral-200 text-black px-4 py-3 rounded-md font-bold flex items-center gap-2 transition-all"
            >
              <Square size={18} />
              Stop
            </button>
          )}

          <div className="flex items-center gap-2 text-neutral-500 text-[12px]">
            <Volume2 size={14} />
            24kHz HD Audio
          </div>
        </div>

        {isProUser && (
          <>
            {/* Progress */}
            <div>
              <div className="flex justify-between text-[11px] text-neutral-500 mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={onSeek}
                className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${currentAudio.accentColor || 'black'} 0%, ${currentAudio.accentColor || 'black'} ${progressPercent}%, #e5e7eb ${progressPercent}%, #e5e7eb 100%)`
                }}
              />
            </div>

            <div className="flex justify-between items-center pt-2 text-xs text-neutral-500">
              <span>Duration: {currentAudio.duration}</span>
              <span>Category: {currentAudio.category?.split('. ')[1] || currentAudio.category}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;