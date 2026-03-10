'use client';

import { useRef, useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryAutoplay = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          setShowPrompt(true);
        }
      }
    };
    
    tryAutoplay();
  }, []);

  const enableMusic = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPrompt(false);
      } catch (error) {
        console.log('Failed to play audio');
      }
    }
  };

  if (!showPrompt) {
    return (
      <audio ref={audioRef} loop>
        <source src="/kidsmusic.mp3" type="audio/mpeg" />
      </audio>
    );
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/kidsmusic.mp3" type="audio/mpeg" />
      </audio>
      
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={enableMusic}>
        <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center shadow-2xl">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Volume2 className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-text-charcoal mb-2">
            Welcome to KIDDIECARE! 🎵
          </h3>
          <p className="text-text-charcoal/70 mb-6">
            Click anywhere to enable background music
          </p>
          <button
            onClick={enableMusic}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Enable Music
          </button>
        </div>
      </div>
    </>
  );
}
