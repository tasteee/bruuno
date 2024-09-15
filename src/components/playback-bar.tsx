import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

export const PlaybackBar = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`PlaybackBar fixed bottom-0 left-0 right-0 p-4 shadow-lg transition-transform duration-300 ${
        props.selectedGenre ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-purple-500 text-white"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <span className="text-lg font-semibold">{props.selectedGenre}</span>
        </div>
        <div className="flex items-center gap-4">
          <SkipBack size={24} className="text-gray-600" />
          <div className="w-64 h-2 bg-gray-200 rounded-full">
            <div className="w-1/3 h-full bg-purple-500 rounded-full"></div>
          </div>
          <SkipForward size={24} className="text-gray-600" />
        </div>
        <div className="flex items-center gap-2">
          <Volume2 size={24} className="text-gray-600" />
          <input type="range" className="w-24" />
        </div>
      </div>
    </div>
  );
};
