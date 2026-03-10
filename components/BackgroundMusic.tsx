'use client';

import { useRef, useEffect } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        console.log('Audio playback blocked by browser');
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/kidsmusic.mp3" type="audio/mpeg" />
    </audio>
  );
}
