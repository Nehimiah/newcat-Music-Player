// Hardcoded songs for testing/fallback
const MOCK_SONGS = [
  {
    id: "1",
    name: "Blinding Lights",
    title: "Blinding Lights",
    artist: "The Weeknd",
    artists: {
      primary: [{ name: "The Weeknd", id: "1" }],
      all: [{ name: "The Weeknd", id: "1" }]
    },
    primaryArtists: "The Weeknd",
    album: {
      name: "After Hours",
      id: "after-hours"
    },
    albumName: "After Hours",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-50x50.jpg", url: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-150x150.jpg", url: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-500x500.jpg", url: "https://c.saavncdn.com/191/Blinding-Lights-English-2019-20191129024805-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3", url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3" },
      { quality: "48kbps", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3", url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3" },
      { quality: "96kbps", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3", url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3" },
      { quality: "160kbps", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3", url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3" },
      { quality: "320kbps", link: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3", url: "https://pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev/The%20Weeknd%20-%20Blinding%20Lights.mp3" }
    ],
    duration: 200,
    year: "2020"
  },
  {
    id: "2",
    name: "Shape of You",
    title: "Shape of You",
    artist: "Ed Sheeran",
    artists: {
      primary: [{ name: "Ed Sheeran", id: "2" }],
      all: [{ name: "Ed Sheeran", id: "2" }]
    },
    primaryArtists: "Ed Sheeran",
    album: {
      name: "Divide",
      id: "divide"
    },
    albumName: "Divide",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/243/Divide-English-2017-50x50.jpg", url: "https://c.saavncdn.com/243/Divide-English-2017-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/243/Divide-English-2017-150x150.jpg", url: "https://c.saavncdn.com/243/Divide-English-2017-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg", url: "https://c.saavncdn.com/243/Divide-English-2017-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
    ],
    duration: 233,
    year: "2017"
  },
  {
    id: "3",
    name: "Levitating",
    title: "Levitating",
    artist: "Dua Lipa",
    artists: {
      primary: [{ name: "Dua Lipa", id: "3" }],
      all: [{ name: "Dua Lipa", id: "3" }]
    },
    primaryArtists: "Dua Lipa",
    album: {
      name: "Future Nostalgia",
      id: "future-nostalgia"
    },
    albumName: "Future Nostalgia",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-50x50.jpg", url: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-150x150.jpg", url: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg", url: "https://c.saavncdn.com/069/Future-Nostalgia-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ],
    duration: 203,
    year: "2020"
  },
  {
    id: "4",
    name: "Save Your Tears",
    title: "Save Your Tears",
    artist: "The Weeknd",
    artists: {
      primary: [{ name: "The Weeknd", id: "4" }],
      all: [{ name: "The Weeknd", id: "4" }]
    },
    primaryArtists: "The Weeknd",
    album: {
      name: "After Hours",
      id: "after-hours-2"
    },
    albumName: "After Hours",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/After-Hours-English-2020-50x50.jpg", url: "https://c.saavncdn.com/191/After-Hours-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/After-Hours-English-2020-150x150.jpg", url: "https://c.saavncdn.com/191/After-Hours-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg", url: "https://c.saavncdn.com/191/After-Hours-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    duration: 215,
    year: "2020"
  },
  {
    id: "5",
    name: "Peaches",
    title: "Peaches",
    artist: "Justin Bieber ft. Daniel Caesar, Giveon",
    artists: {
      primary: [{ name: "Justin Bieber", id: "5" }],
      all: [{ name: "Justin Bieber", id: "5" }, { name: "Daniel Caesar", id: "5a" }, { name: "Giveon", id: "5b" }]
    },
    primaryArtists: "Justin Bieber",
    album: {
      name: "Justice",
      id: "justice"
    },
    albumName: "Justice",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Justice-English-2021-50x50.jpg", url: "https://c.saavncdn.com/191/Justice-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Justice-English-2021-150x150.jpg", url: "https://c.saavncdn.com/191/Justice-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg", url: "https://c.saavncdn.com/191/Justice-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
    ],
    duration: 198,
    year: "2021"
  },
  {
    id: "6",
    name: "Good 4 U",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    artists: {
      primary: [{ name: "Olivia Rodrigo", id: "6" }],
      all: [{ name: "Olivia Rodrigo", id: "6" }]
    },
    primaryArtists: "Olivia Rodrigo",
    album: {
      name: "SOUR",
      id: "sour"
    },
    albumName: "SOUR",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/SOUR-English-2021-50x50.jpg", url: "https://c.saavncdn.com/191/SOUR-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/SOUR-English-2021-150x150.jpg", url: "https://c.saavncdn.com/191/SOUR-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg", url: "https://c.saavncdn.com/191/SOUR-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
    ],
    duration: 178,
    year: "2021"
  },
  {
    id: "7",
    name: "Stay",
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    artists: {
      primary: [{ name: "The Kid LAROI", id: "7" }, { name: "Justin Bieber", id: "7a" }],
      all: [{ name: "The Kid LAROI", id: "7" }, { name: "Justin Bieber", id: "7a" }]
    },
    primaryArtists: "The Kid LAROI, Justin Bieber",
    album: {
      name: "Stay",
      id: "stay"
    },
    albumName: "Stay",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Stay-English-2021-50x50.jpg", url: "https://c.saavncdn.com/191/Stay-English-2021-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Stay-English-2021-150x150.jpg", url: "https://c.saavncdn.com/191/Stay-English-2021-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg", url: "https://c.saavncdn.com/191/Stay-English-2021-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
    ],
    duration: 141,
    year: "2021"
  },
  {
    id: "8",
    name: "Heat Waves",
    title: "Heat Waves",
    artist: "Glass Animals",
    artists: {
      primary: [{ name: "Glass Animals", id: "8" }],
      all: [{ name: "Glass Animals", id: "8" }]
    },
    primaryArtists: "Glass Animals",
    album: {
      name: "Dreamland",
      id: "dreamland"
    },
    albumName: "Dreamland",
    image: [
      { quality: "50x50", link: "https://c.saavncdn.com/191/Dreamland-English-2020-50x50.jpg", url: "https://c.saavncdn.com/191/Dreamland-English-2020-50x50.jpg" },
      { quality: "150x150", link: "https://c.saavncdn.com/191/Dreamland-English-2020-150x150.jpg", url: "https://c.saavncdn.com/191/Dreamland-English-2020-150x150.jpg" },
      { quality: "500x500", link: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg", url: "https://c.saavncdn.com/191/Dreamland-English-2020-500x500.jpg" }
    ],
    downloadUrl: [
      { quality: "12kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { quality: "48kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { quality: "96kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { quality: "160kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { quality: "320kbps", link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
    ],
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
    s.album.name.toLowerCase().includes(song.toLowerCase())
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
      s.album.name.toLowerCase().includes(song.toLowerCase())
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
    s.album.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return {
    songs: results,
    albums: [],
    artists: [],
    playlists: []
  };
}
