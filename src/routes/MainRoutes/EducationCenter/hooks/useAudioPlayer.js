import { useState, useRef, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { incrementPlayCount } from '../data/audioLibraryData';

export const useAudioPlayer = (isProUser) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const [savedAudioId] = useLocalStorage('currentAudioId', null);
  const [savedTime] = useLocalStorage('currentAudioTime', 0);
  const [savedPlayingState] = useLocalStorage('isPlaying', false);

  useEffect(() => {
    if (savedAudioId && !currentAudio) {
      const event = new CustomEvent('loadSavedAudio', { 
        detail: { id: savedAudioId, time: savedTime, playing: savedPlayingState } 
      });
      window.dispatchEvent(event);
    }
  }, []);

  const handlePlayPause = (audio, audioLibraryData) => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    if (currentAudio?.id === audio.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        // Increment play count when starting playback
        incrementPlayCount(audio.id);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentAudio(audio);
      setCurrentTime(0);
      setDuration(0);
      // Increment play count for new track
      incrementPlayCount(audio.id);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (!isProUser) return;
    
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleGlobalPause = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleGlobalStop = () => {
    if (!isProUser) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  useEffect(() => {
    if (currentAudio) {
      localStorage.setItem("currentAudioId", currentAudio.id);
    }
    if (currentTime > 0) {
      localStorage.setItem("currentAudioTime", currentTime);
    }
    localStorage.setItem("isPlaying", isPlaying);
  }, [currentAudio, currentTime, isPlaying]);

  return {
    currentAudio,
    setCurrentAudio,
    isPlaying,
    setIsPlaying,
    currentTime,
    duration,
    audioRef,
    handlePlayPause,
    handleTimeUpdate,
    handleSeek,
    formatTime,
    handleGlobalPause,
    handleGlobalStop
  };
};