// Hardcoded songs for testing/fallback
const MOCK_SONGS = [
  {
    id: "1",
    name: "Blinding Lights",
    title: "Blinding Lights",
    artist: "The Weeknd",
    artists: "The Weeknd",
    primaryArtists: "The Weeknd",
    album: "After Hours",
    image: [
      { quality: "50x50", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/blinding%20lights.jpg" },
      { quality: "150x150", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/blinding%20lights.jpg" },
      { quality: "500x500", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/blinding%20lights.jpg" }
    ],
    // Multiple property names for compatibility
    downloadUrl: [
      { quality: "320kbps", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3" }
    ],
    audioUrl: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3",
    url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3",
    media_url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3",
    // Cover images
    coverImage: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/blinding%20lights.jpg",
    cover: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/blinding%20lights.jpg",
    thumbnail: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/blinding%20lights.jpg",
    duration: 200,
    year: "2020"
  },
  {
    id: "2",
    name: "Shape of You",
    title: "Shape of You",
    artist: "Ed Sheeran",
    artists: "Ed Sheeran",
    primaryArtists: "Ed Sheeran",
    album: "Divide",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/243/Divide-English-2017-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/243/Divide-English-2017-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverImage: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg",
    cover: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg",
    duration: 233,
    year: "2017"
  },
  {
    id: "3",
    name: "Levitating",
    title: "Levitating",
    artist: "Dua Lipa",
    artists: "Dua Lipa",
    primaryArtists: "Dua Lipa",
    album: "Future Nostalgia",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    coverImage: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg",
    cover: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg",
    duration: 203,
    year: "2020"
  },
  {
    id: "4",
    name: "Save Your Tears",
    title: "Save Your Tears",
    artist: "The Weeknd",
    artists: "The Weeknd",
    primaryArtists: "The Weeknd",
    album: "After Hours",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/After-Hours-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/After-Hours-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    coverImage: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg",
    cover: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg",
    duration: 215,
    year: "2020"
  },
  {
    id: "5",
    name: "Peaches",
    title: "Peaches",
    artist: "Justin Bieber ft. Daniel Caesar, Giveon",
    artists: "Justin Bieber, Daniel Caesar, Giveon",
    primaryArtists: "Justin Bieber",
    album: "Justice",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Justice-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Justice-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    coverImage: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg",
    cover: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg",
    duration: 198,
    year: "2021"
  },
  {
    id: "6",
    name: "Good 4 U",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    artists: "Olivia Rodrigo",
    primaryArtists: "Olivia Rodrigo",
    album: "SOUR",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/SOUR-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/SOUR-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    coverImage: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg",
    cover: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg",
    duration: 178,
    year: "2021"
  },
  {
    id: "7",
    name: "Stay",
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    artists: "The Kid LAROI, Justin Bieber",
    primaryArtists: "The Kid LAROI, Justin Bieber",
    album: "Stay",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Stay-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Stay-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    coverImage: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg",
    cover: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg",
    duration: 141,
    year: "2021"
  },
  {
    id: "8",
    name: "Heat Waves",
    title: "Heat Waves",
    artist: "Glass Animals",
    artists: "Glass Animals",
    primaryArtists: "Glass Animals",
    album: "Dreamland",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Dreamland-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Dreamland-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    media_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    coverImage: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg",
    cover: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg",
    thumbnail: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg",
    duration: 238,
    year: "2020"
  }
];

// Option 1: Pure hardcoded (no API calls)
export async function fetchSongs(song: string) {
  console.log(`Fetching hardcoded songs for query: "${song}"`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simple search filter
  const filtered = MOCK_SONGS.filter(s => 
    s.name.toLowerCase().includes(song.toLowerCase()) ||
    s.artist.toLowerCase().includes(song.toLowerCase()) ||
    s.album.toLowerCase().includes(song.toLowerCase())
  );
  
  // Return all songs if no matches found
  return { 
    songs: filtered.length > 0 ? filtered : MOCK_SONGS,
    total: filtered.length > 0 ? filtered.length : MOCK_SONGS.length
  };
}

// Option 2: Try API first, fallback to hardcoded (RECOMMENDED)
export async function fetchSongsWithFallback(song: string) {
  try {
    console.log(`Attempting to fetch songs from API for: "${song}"`);
    
    const res = await fetch(`/api/songs?song=${encodeURIComponent(song)}`);
    
    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }
    
    const data = await res.json();
    
    if (data.songs && data.songs.length > 0) {
      console.log(`Successfully fetched ${data.songs.length} songs from API`);
      return data;
    } else {
      throw new Error('No songs returned from API');
    }
    
  } catch (error) {
    console.warn('API failed, using hardcoded songs:', error);
    
    // Fallback to hardcoded songs
    const filtered = MOCK_SONGS.filter(s => 
      s.name.toLowerCase().includes(song.toLowerCase()) ||
      s.artist.toLowerCase().includes(song.toLowerCase()) ||
      s.album.toLowerCase().includes(song.toLowerCase())
    );
    
    return { 
      songs: filtered.length > 0 ? filtered : MOCK_SONGS,
      total: filtered.length > 0 ? filtered.length : MOCK_SONGS.length,
      fallback: true
    };
  }
}

export async function globalSearch(query: string) {
  console.log(`Global search for: "${query}"`);
  
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const results = MOCK_SONGS.filter(s => 
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.artist.toLowerCase().includes(query.toLowerCase()) ||
    s.album.toLowerCase().includes(query.toLowerCase())
  );
  
  return {
    songs: results,
    albums: [],
    artists: [],
    playlists: []
  };
}
