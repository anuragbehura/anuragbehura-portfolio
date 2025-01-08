"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface StyleSheetProps {
  children: string;
}

const styles = `
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}
`;

const StyleSheet: React.FC<StyleSheetProps> = ({ children }) => (
  <style>{children}</style>
);

const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        void audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col items-center z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Attention Text */}
      <div className={`
                transition-all duration-500 
                ${hasInteracted ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
                ${isPlaying ? 'hidden' : ''}
            `}>
        <p className="text-sm font-medium bg-background/60 backdrop-blur 
                             px-3 rounded-full animate-wave">
          Play😖
        </p>
      </div>

      {/* Music Playing Indicator */}
      <div className={`
                transition-all duration-500
                ${!isPlaying || !hasInteracted ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
            `}>
        <p className="text-sm font-medium bg-background/60 backdrop-blur 
                             px-3 py-1 rounded-full animate-bounce-slow">
          Yeah😌
        </p>
      </div>

      {/* Player Controls */}
      <div className="animate-bounce-slow">
        <div
          className={`
                        absolute -inset-2 bg-green-400
                        rounded-full blur-md opacity-75 group-hover:opacity-100 
                        animate-spin-slow transition-opacity duration-300
                        ${isPlaying ? 'opacity-75' : 'opacity-30'}
                    `}
        />

        <div
          className={`
                        relative bg-black/60 hover:bg-black/80 backdrop-blur 
                        rounded-full shadow-lg transition-all duration-300 
                        group hover:scale-110 
                        ${isPlaying ? 'animate-pulse' : ''}
                    `}
        >
          <audio
            ref={audioRef}
            src="/audio/onandon.mp3"
            loop
          />

          <button
            onClick={togglePlay}
            className={`
                            w-8 h-8 flex items-center justify-center 
                            transition-transform duration-300
                            ${isHovered ? 'scale-110' : 'scale-100'}
                        `}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white animate-fade-in" />
            ) : (
              <Play className="w-4 h-4 text-white animate-fade-in" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const FloatingMusicPlayerWithStyles: React.FC = () => (
  <>
    <StyleSheet>{styles}</StyleSheet>
    <FloatingMusicPlayer />
  </>
);

export default FloatingMusicPlayerWithStyles;