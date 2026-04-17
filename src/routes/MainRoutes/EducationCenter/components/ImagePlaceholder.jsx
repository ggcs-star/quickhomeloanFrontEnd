import React from 'react';

const ImagePlaceholder = ({ type = 'audio', title, backgroundColor, accentColor, size = 'md' }) => {
  // Generate a consistent color based on title if not provided
  const getColorFromTitle = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      '#1E3A8A', '#065F46', '#991B1B', '#7E22CE', '#B45309', '#0E5E6F',
      '#BE123C', '#4C1D95', '#15803D', '#9A3412', '#3730A3', '#166534'
    ];
    return colors[Math.abs(hash) % colors.length];
  };

  const bgColor = backgroundColor || getColorFromTitle(title);
  const accent = accentColor || '#FFFFFF';
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 28,
    xl: 36,
    '2xl': 48
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} flex items-center justify-center overflow-hidden rounded-lg shadow-md`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent animate-pulse"></div>
      </div>
      
      {/* Icon */}
      <div className="relative z-10">
        {type === 'audio' ? (
          <svg 
            width={iconSizes[size]} 
            height={iconSizes[size]} 
            viewBox="0 0 24 24" 
            fill="white" 
            className="opacity-80"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        ) : (
          <svg 
            width={iconSizes[size]} 
            height={iconSizes[size]} 
            viewBox="0 0 24 24" 
            fill="white" 
            className="opacity-80"
          >
            <path d="M10 8.64L15.27 12 10 15.36V8.64zM8 5v14l11-7L8 5z"/>
          </svg>
        )}
      </div>
      
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-white/5"></div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;