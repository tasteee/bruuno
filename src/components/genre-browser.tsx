import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

import { genres } from "../constants/genres";
import { GenreBadge } from "./genre-badge";
import { GenreInput } from "./genre-input";
import { PlaybackBar } from "./playback-bar";

export const GenreBrowser = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGenres, setFilteredGenres] = useState(genres);

  useEffect(() => {
    setFilteredGenres(
      genres.filter((genre) =>
        genre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="GenreBrowserContainer">
      <GenreInput value={searchTerm} onChange={setSearchTerm} />
      <div className="GenreBrowser rainbow p-8 flex flex-col relative">
        <div className="IDK absolute inset-0 z-[-1]" />

        <div className="GenresList flex flex-wrap gap-4">
          {filteredGenres.map((genre) => (
            <GenreBadge
              key={genre}
              genre={genre}
              isActive={selectedGenre === genre}
              onClick={setSelectedGenre}
            />
          ))}
        </div>

        {selectedGenre && <PlaybackBar selectedGenre={selectedGenre} />}
      </div>
    </div>
  );
};
