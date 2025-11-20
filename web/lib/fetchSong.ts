// Hardcoded songs for testing/fallback
const MOCK_SONGS = [
  {
    id: "1",
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }
    ],
    duration: 200,
    year: "2020",
    primaryArtists: "The Weeknd",
    url: "https://www.jiosaavn.com/song/blinding-lights/1"
  },
  {
    id: "2",
    name: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/243/Divide-English-2017-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/243/Divide-English-2017-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
    ],
    duration: 233,
    year: "2017",
    primaryArtists: "Ed Sheeran",
    url: "https://www.jiosaavn.com/song/shape-of-you/2"
  },
  {
    id: "3",
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ],
    duration: 203,
    year: "2020",
    primaryArtists: "Dua Lipa",
    url: "https://www.jiosaavn.com/song/levitating/3"
  },
  {
    id: "4",
    name: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/After-Hours-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/After-Hours-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    duration: 215,
    year: "2020",
    primaryArtists: "The Weeknd",
    url: "https://www.jiosaavn.com/song/save-your-tears/4"
  },
  {
    id: "5",
    name: "Peaches",
    artist: "Justin Bieber ft. Daniel Caesar, Giveon",
    album: "Justice",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Justice-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Justice-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
    ],
    duration: 198,
    year: "2021",
    primaryArtists: "Justin Bieber",
    url: "https://www.jiosaavn.com/song/peaches/5"
  },
  {
    id: "6",
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/SOUR-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/SOUR-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
    ],
    duration: 178,
    year: "2021",
    primaryArtists: "Olivia Rodrigo",
    url: "https://www.jiosaavn.com/song/good-4-u/6"
  },
  {
    id: "7",
    name: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "Stay",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Stay-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Stay-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
    ],
    duration: 141,
    year: "2021",
    primaryArtists: "The Kid LAROI, Justin Bieber",
    url: "https://www.jiosaavn.com/song/stay/7"
  },
  {
    id: "8",
    name: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Dreamland-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Dreamland-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
    ],
    duration: 238,
    year: "2020",
    primaryArtists: "Glass Animals",
    url: "https://www.jiosaavn.com/song/heat-waves/8"
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
