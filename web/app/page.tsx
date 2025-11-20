"use client";
import { decode } from "he";
import { fetchSongs } from "@/lib/fetchSong";
import MusicCard from "@/components/Cards/musicCard";
import MusicCardPlaceholder from "@/components/Cards/musicCardPlaceHolder";
import Sidebar from "@/components/sidebar";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTracks,
  setCurrentTrackIndex,
  play,
} from "@/store/features/musicPlayer/musicPlayer";
import type { RootState } from "@/store/store";

export default function Home() {
  const dispatch = useDispatch();
  const tracks = useSelector((state: RootState) => state.musicPlayer.tracks);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔥 Real audio element required for mobile playback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
  }, []);

  const playAudioOnMobile = (url: string) => {
    if (!audioRef.current) return;
    audioRef.current.src = url;
    audioRef.current
      .play()
      .catch((err) => console.log("Mobile Playback Blocked:", err));
  };

  useEffect(() => {
    async function loadTrendingSongs() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSongs("top songs");
        setSongs(data.songs || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadTrendingSongs();
  }, []);

  const handleSongClick = (song: any) => {
    const track = {
      title: decode(song.name || "Unknown Title"),
      album: decode(song.album?.name || song.albumName || "Unknown Album"),
      photo: song.image?.[2]?.url || "",
      url: song.downloadUrl?.[4]?.url || "",
    };

    if (!track.url) {
      console.warn("No audio URL found for track:", track);
      return;
    }

    const updatedTracks = [...tracks, track];
    dispatch(setTracks(updatedTracks));
    dispatch(setCurrentTrackIndex(updatedTracks.length - 1));
    dispatch(play());

    // 🚀 IMPORTANT — immediately trigger audio for mobile
    setTimeout(() => {
      playAudioOnMobile(track.url);
    }, 0);
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 px-4 md:px-8 lg:px-14 py-24">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
          Trending Now
        </h1>

        {error && (
          <p className="text-red-500 text-lg mb-4">Error: {error}</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {loading
            ? Array.from({ length: 18 }).map((_, idx) => (
                <MusicCardPlaceholder key={idx} />
              ))
            : songs.map((song: any, idx: number) => {
                const imageUrl = song.image?.[2]?.url || "";
                const songName = decode(song.name || "Unknown Title");
                const artistName = decode(
                  song.artists?.primary?.[0]?.name || "Unknown Artist"
                );

                return (
                  <div
                    key={idx}
                    className="cursor-pointer"
                    onClick={() => handleSongClick(song)}         // 💻 Laptop playback
                    onTouchStart={() => handleSongClick(song)}    // 📱 Mobile playback
                  >
                    <MusicCard
                      image={imageUrl}
                      title={songName}
                      artist={artistName}
                    />
                  </div>
                );
              })}
        </div>
      </main>
    </div>
  );
}
