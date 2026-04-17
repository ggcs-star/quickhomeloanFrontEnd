import React from 'react';
import { Play } from 'lucide-react';

const VideoModal = ({ selectedVideo, isOpen, onClose }) => {
  if (!isOpen || !selectedVideo) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="aspect-video bg-black flex items-center justify-center">
          <div className="text-center text-white">
            <Play size={48} className="mx-auto mb-4" />
            <p>Video player would appear here</p>
            <p className="text-sm text-gray-400 mt-2">Duration: {selectedVideo.duration}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600">{selectedVideo.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;