import React, { useState, useEffect } from "react";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { audioLibraryData, getCurrentlyPlayingTrack } from "./data/audioLibraryData";
import { videoLibraryData } from "./data/videoLibraryData";
import { audioFaqMap } from "./data/audioFaqMap";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { useProAccess } from "./hooks/useProAccess";
import AudioPlayer from "./components/AudioPlayer";
import AudioCategory from "./components/AudioCategory";
import FAQSection from "./components/FAQSection";
import UpgradeBanner from "./components/UpgradeBanner";
import VideoGrid from "./components/VideoGrid";
import VideoModal from "./components/VideoModal";

const EducationCenter = () => {
  const [activeTab] = useState("audio");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [currentAudioFaqs, setCurrentAudioFaqs] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const { isProUser, isCheckingAccess } = useProAccess();
  const {
    currentAudio,
    setCurrentAudio,
    isPlaying,
    setIsPlaying,
    currentTime,
    duration,
    audioRef,
    handlePlayPause: originalHandlePlayPause,
    handleTimeUpdate,
    handleSeek,
    formatTime,
    handleGlobalPause,
    handleGlobalStop
  } = useAudioPlayer(isProUser);

  const categories = [...new Set(audioLibraryData.map(item => item.category))];
  const sortedCategories = categories.sort((a, b) => {
    const numA = parseInt(a.split('.')[0]);
    const numB = parseInt(b.split('.')[0]);
    return numA - numB;
  });

  const categoriesPerPage = 8;
  const totalCategoryPages = Math.ceil(sortedCategories.length / categoriesPerPage);
  const startCategoryIndex = (currentPage - 1) * categoriesPerPage;
  const endCategoryIndex = startCategoryIndex + categoriesPerPage;
  const currentCategories = sortedCategories.slice(startCategoryIndex, endCategoryIndex);

  const videosPerPage = 8;
  const totalVideoPages = Math.ceil(videoLibraryData.length / videosPerPage);
  const videoStartIndex = (currentVideoPage - 1) * videosPerPage;
  const videoEndIndex = videoStartIndex + videosPerPage;
  const currentVideos = videoLibraryData.slice(videoStartIndex, videoEndIndex);

  const getFaqsForAudio = (audioTitle) => {
    return audioFaqMap[audioTitle] || [];
  };

  const getAudioItemsForCategory = (category) => {
    return audioLibraryData.filter(item => item.category === category);
  };

  const getCategoryDisplayName = (category) => {
    if (category === "all") return "All Categories";
    const parts = category.split('. ');
    return parts.length > 1 ? parts[1] : category;
  };

  const handlePlayPause = (audio) => {
    originalHandlePlayPause(audio, audioLibraryData);
  };

  const handleStartLearning = () => {
    if (!isProUser && !isCheckingAccess) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    let audioToPlay = currentAudio;
    
    if (!audioToPlay) {
      const savedAudioId = localStorage.getItem("currentAudioId");
      if (savedAudioId) {
        audioToPlay = audioLibraryData.find(audio => audio.id === parseInt(savedAudioId));
      }
    }
    
    if (!audioToPlay && audioLibraryData.length > 0) {
      audioToPlay = audioLibraryData[0];
    }
    
    if (audioToPlay) {
      handlePlayPause(audioToPlay);
    }
  };

  const handleWatchVideo = (video) => {
    if (!isProUser && !isCheckingAccess) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (currentAudio) {
      const faqs = getFaqsForAudio(currentAudio.title);
      setCurrentAudioFaqs(faqs);
    } else {
      setCurrentAudioFaqs([]);
    }
  }, [currentAudio]);

  useEffect(() => {
    const handleLoadSavedAudio = (event) => {
      const { id, time, playing } = event.detail;
      const savedAudio = audioLibraryData.find(audio => audio.id === id);
      if (savedAudio && isProUser) {
        setCurrentAudio(savedAudio);
        if (time > 0 && audioRef.current) {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.currentTime = time;
              if (playing) {
                audioRef.current.play();
                setIsPlaying(true);
              }
            }
          }, 100);
        }
      }
    };

    window.addEventListener('loadSavedAudio', handleLoadSavedAudio);
    return () => window.removeEventListener('loadSavedAudio', handleLoadSavedAudio);
  }, [isProUser, setCurrentAudio, setIsPlaying]);

  // Set currently playing track on mount
  useEffect(() => {
    const currentlyPlaying = getCurrentlyPlayingTrack();
    if (currentlyPlaying && !currentAudio) {
      setCurrentAudio(currentlyPlaying);
    }
  }, []);

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white text-black">
      <audio
        ref={audioRef}
        src={currentAudio?.file}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
        }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="max-w-7xl mx-auto space-y-8 pb-20 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Education Center
            </h2>
            <p className="text-[14px] text-neutral-600 mt-1">
              Complete home loan education - from basics to advanced concepts
            </p>
          </div>

          <div className={`border px-5 py-3 rounded-md flex items-center gap-3 shadow-sm ${
            isProUser 
              ? "bg-green-50 border-green-200" 
              : "bg-white border-neutral-300"
          }`}>
            <GraduationCap size={20} className={isProUser ? "text-green-700" : "text-neutral-700"} />
            <span className={`text-[12px] font-semibold uppercase tracking-widest ${
              isProUser ? "text-green-700" : "text-neutral-700"
            }`}>
              {isCheckingAccess ? "Checking Access..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
            </span>
          </div>
        </div>

        {!isProUser && !isCheckingAccess && <UpgradeBanner />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AudioPlayer
              currentAudio={currentAudio}
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              isProUser={isProUser}
              onPlayPause={handleStartLearning}
              onStop={handleGlobalStop}
              onSeek={handleSeek}
              formatTime={formatTime}
            />

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700">
                  Learning Modules
                </h4>
                {totalCategoryPages > 1 && (
                  <span className="text-[12px] text-neutral-500">
                    Page {currentPage} of {totalCategoryPages}
                  </span>
                )}
              </div>

              {currentCategories.map((category) => (
                <AudioCategory
                  key={category}
                  category={category}
                  audioItems={getAudioItemsForCategory(category)}
                  currentAudio={currentAudio}
                  isPlaying={isPlaying}
                  isProUser={isProUser}
                  onPlayPause={handlePlayPause}
                  currentTime={currentTime}
                  duration={duration}
                  formatTime={formatTime}
                  onSeek={handleSeek}
                />
              ))}

              {totalCategoryPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-4">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md border border-neutral-300 ${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:border-black"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  
                  {[...Array(totalCategoryPages)].map((_, idx) => {
                    const pageNum = idx + 1;
                    if (
                      pageNum === 1 ||
                      pageNum === totalCategoryPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 rounded-md text-[14px] ${
                            currentPage === pageNum
                              ? "bg-black text-white"
                              : "border border-neutral-300 hover:border-black"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return <span key={idx} className="text-neutral-400">...</span>;
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalCategoryPages, p + 1))}
                    disabled={currentPage === totalCategoryPages}
                    className={`p-2 rounded-md border border-neutral-300 ${
                      currentPage === totalCategoryPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:border-black"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:block">
            <div className="sticky top-24">
              <FAQSection
                currentAudio={currentAudio}
                currentAudioFaqs={currentAudioFaqs}
                isProUser={isProUser}
                audioFaqMap={audioFaqMap}
                audioLibraryData={audioLibraryData}
                onPlayAudio={handlePlayPause}
              />
            </div>
          </div>
        </div>

        {activeTab === "video" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VideoGrid
                videos={currentVideos}
                currentPage={currentVideoPage}
                totalPages={totalVideoPages}
                onPageChange={setCurrentVideoPage}
                onWatchVideo={handleWatchVideo}
                isProUser={isProUser}
                getCategoryDisplayName={getCategoryDisplayName}
              />
            </div>
            <div className="lg:block">
              <div className="sticky top-24">
                <FAQSection
                  currentAudio={null}
                  currentAudioFaqs={[]}
                  isProUser={isProUser}
                  audioFaqMap={audioFaqMap}
                  audioLibraryData={audioLibraryData}
                  onPlayAudio={handlePlayPause}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <VideoModal
        selectedVideo={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
      />
    </main>
  );
};

export default EducationCenter;