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

.draggable-player {
  cursor: move;
  user-select: none;
  touch-action: none;
}

.draggable-player:active {
  cursor: grabbing;
}
`;

const StyleSheet: React.FC<StyleSheetProps> = ({ children }) => (
  <style>{children}</style>
);

const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; dragging: boolean }>({
    startX: 0,
    startY: 0,
    dragging: false,
  });
  const playerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize position to bottom right
    if (typeof window !== 'undefined' && playerRef.current) {
      setPosition({
        x: window.innerWidth - playerRef.current.offsetWidth - 16,
        y: window.innerHeight - playerRef.current.offsetHeight - 16,
      });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLButtonElement) return; // Prevent dragging when clicking the play button

    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
      dragging: true,
    };
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLButtonElement) return;

    setIsDragging(true);
    dragRef.current = {
      startX: e.touches[0].clientX - position.x,
      startY: e.touches[0].clientY - position.y,
      dragging: true,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.dragging) return;

    const maxX = window.innerWidth - (playerRef.current?.offsetWidth || 0);
    const maxY = window.innerHeight - (playerRef.current?.offsetHeight || 0);

    setPosition({
      x: Math.min(Math.max(0, e.clientX - dragRef.current.startX), maxX),
      y: Math.min(Math.max(0, e.clientY - dragRef.current.startY), maxY),
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!dragRef.current.dragging) return;

    const maxX = window.innerWidth - (playerRef.current?.offsetWidth || 0);
    const maxY = window.innerHeight - (playerRef.current?.offsetHeight || 0);

    setPosition({
      x: Math.min(Math.max(0, e.touches[0].clientX - dragRef.current.startX), maxX),
      y: Math.min(Math.max(0, e.touches[0].clientY - dragRef.current.startY), maxY),
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    dragRef.current.dragging = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

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
      ref={playerRef}
      className={`fixed flex flex-col items-center z-50 draggable-player group/player
        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: isDragging ? 'none' : 'all 0.3s ease',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* New Hover Text for Draggable Notice */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
        <p className="text-sm font-medium bg-background/60 backdrop-blur px-3 py-1 rounded-full whitespace-nowrap">
          ✨ I am draggable! ✨
        </p>
      </div>

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
      <div className={`animate-bounce-slow ${isDragging ? 'animation-play-state: paused' : ''}`}>
        <div className={`
          absolute -inset-2 bg-green-400
          rounded-full blur-md opacity-75 group-hover:opacity-100 
          animate-spin-slow transition-opacity duration-300
          ${isPlaying ? 'opacity-75' : 'opacity-30'}
        `} />

        <div className={`
          relative bg-black/60 hover:bg-black/80 backdrop-blur 
          rounded-full shadow-lg transition-all duration-300 
          group hover:scale-110 
          ${isPlaying ? 'animate-pulse' : ''}
        `}>
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