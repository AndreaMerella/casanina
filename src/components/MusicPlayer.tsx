"use client";

import { useState } from "react";
import { Music } from "lucide-react";

export default function MusicPlayer() {
  const [shown, setShown] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {shown && (
        <div className="bg-foreground text-background rounded-2xl p-4 shadow-xl text-sm max-w-[220px]">
          <p className="font-serif text-base mb-1">Creuza de ma</p>
          <p className="text-background/60 text-xs mb-3">Fabrizio De André · 1984</p>
          <a
            href="https://www.youtube.com/results?search_query=creuza+de+ma+fabrizio+de+andre"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2 bg-accent hover:opacity-90 text-white rounded-xl text-xs font-medium transition-opacity"
          >
            ▶ Play on YouTube
          </a>
          <p className="text-background/40 text-[10px] text-center mt-2">
            The sound of Genova
          </p>
        </div>
      )}

      <button
        onClick={() => setShown(!shown)}
        className="w-12 h-12 rounded-full bg-foreground/80 hover:bg-foreground text-background shadow-lg flex items-center justify-center transition-all"
        title="The sound of Genova"
      >
        <Music className="w-5 h-5" />
      </button>
    </div>
  );
}
