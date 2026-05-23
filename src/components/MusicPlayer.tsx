"use client";

import { useState, useRef } from "react";
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

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/audio/creuza-de-ma.mp3" loop />

      {shown && (
        <div className="bg-foreground text-background rounded-2xl p-4 shadow-xl text-sm max-w-[220px]">
          <p className="font-serif text-base mb-0.5">Creuza de ma</p>
          <p className="text-background/50 text-xs mb-3">Fabrizio De Andre &middot; 1984</p>
          <button
            onClick={toggle}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent hover:opacity-90 text-white rounded-xl text-xs font-medium transition-opacity"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
          <p className="text-background/35 text-[10px] text-center mt-2">
            The sound of Genova
          </p>
        </div>
      )}

      <button
        onClick={() => setShown(!shown)}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
          playing
            ? "bg-accent text-white ring-2 ring-accent/40 ring-offset-2"
            : "bg-foreground/80 hover:bg-foreground text-background"
        }`}
        title="The sound of Genova"
      >
        <Music className={`w-5 h-5 ${playing ? "animate-pulse" : ""}`} />
      </button>
    </div>
  );
}
