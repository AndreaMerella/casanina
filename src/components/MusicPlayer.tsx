"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const [shown, setShown] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  // Stop on unmount
  useEffect(() => {
    return () => { audioRef.current?.pause(); };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/audio/creuza-de-ma.mp3" loop />

      {shown && (
        <div className="bg-foreground text-background rounded-2xl p-4 shadow-xl text-sm max-w-[210px] mb-1">
          <p className="font-serif text-base mb-0.5">Creuza de ma</p>
          <p className="text-background/50 text-xs mb-3">Fabrizio De Andre &middot; 1984</p>
          <button
            onClick={toggle}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent hover:bg-accent-dark text-white rounded-xl text-xs font-semibold transition-colors"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
          <p className="text-background/35 text-[10px] text-center mt-2 italic">
            The sound of Genova
          </p>
        </div>
      )}

      {/* Button with ripple rings when playing */}
      <div className="relative">
        {playing && (
          <>
            <span className="absolute inset-0 rounded-full bg-accent/30 animate-[ping_1.4s_ease-out_infinite]" />
            <span className="absolute inset-[-6px] rounded-full bg-accent/15 animate-[ping_1.4s_ease-out_0.4s_infinite]" />
            <span className="absolute inset-[-12px] rounded-full bg-accent/08 animate-[ping_1.4s_ease-out_0.8s_infinite]" />
          </>
        )}
        <button
          onClick={() => setShown(!shown)}
          className={`relative w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            playing
              ? "bg-accent text-white scale-110"
              : "bg-foreground/80 hover:bg-foreground text-background"
          }`}
          title="The sound of Genova"
        >
          <Music className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
