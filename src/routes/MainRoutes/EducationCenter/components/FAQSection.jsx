import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Headphones } from 'lucide-react';

const FAQSection = ({ currentAudio, currentAudioFaqs, isProUser, audioFaqMap, audioLibraryData, onPlayAudio }) => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-neutral-300 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 sticky top-0 bg-white pb-2 z-10">
        <HelpCircle size={20} className="text-black" />
        <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700">
          {currentAudio ? "Related FAQs" : "Popular FAQs"}
        </h4>
      </div>

      {currentAudio ? (
        <>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-100">
            <div className="w-1 h-6 bg-black rounded-full"></div>
            <p className="text-[13px] text-neutral-600">
              Questions about <span className="font-semibold text-black">"{currentAudio.title}"</span>
            </p>
          </div>

          {currentAudioFaqs.length > 0 ? (
            <div className="space-y-1">
              {currentAudioFaqs.map((faq, index) => (
                <div key={index} className="border-b border-neutral-100 last:border-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-3 text-left font-medium transition-all hover:text-neutral-900 group"
                  >
                    <span className="text-[13px] text-neutral-700 pr-4 leading-relaxed group-hover:text-neutral-900">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`shrink-0 transition-all duration-300 text-neutral-400 ${
                        openFaqId === index ? "rotate-180 text-black" : "group-hover:text-neutral-600"
                      }`} 
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqId === index ? "max-h-96 pb-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-[12px] text-neutral-500 leading-relaxed pl-1 border-l-2 border-neutral-200 ml-1 pl-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-neutral-50 rounded-lg">
              <HelpCircle size={32} className="text-neutral-400 mx-auto mb-2" />
              <p className="text-[13px] text-neutral-500">No specific FAQs available for this topic yet.</p>
            </div>
          )}
        </>
      ) : (
        <>
          <p className="text-[13px] text-neutral-600 mb-4 leading-relaxed">
            Select and play any audio lesson to see related frequently asked questions.
          </p>
          <div className="text-center py-10 bg-neutral-50 rounded-lg">
            <Headphones size={36} className="text-neutral-400 mx-auto mb-2" />
            <p className="text-[13px] text-neutral-500">No audio selected</p>
            <p className="text-[11px] text-neutral-400 mt-1">Click play on any lesson to get started</p>
          </div>
          
          <div className="mt-4">
            <p className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider mb-3">Popular Topics</p>
            <div className="space-y-2">
              {Object.entries(audioFaqMap || {}).slice(0, 4).map(([title], idx) => (
                <div 
                  key={idx} 
                  className="text-[12px] text-neutral-500 hover:text-neutral-700 cursor-pointer transition p-2 rounded hover:bg-neutral-50"
                  onClick={() => {
                    const audio = audioLibraryData?.find(a => a.title === title);
                    if (audio && isProUser && onPlayAudio) {
                      onPlayAudio(audio);
                    } else if (!isProUser) {
                      alert("Please upgrade to Pro to access this lesson.");
                    }
                  }}
                >
                  • {title}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-5 pt-4 border-t border-neutral-200">
        <p className="text-[11px] text-neutral-400 text-center">
          Need more help? Contact our support team for personalized assistance.
        </p>
      </div>
    </div>
  );
};

export default FAQSection;