'use client';

import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio playback failed');
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/kidsmusic.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
}
