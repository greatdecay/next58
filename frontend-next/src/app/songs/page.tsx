// src/app/songs/page.tsx
import { Song } from '@/types/api';
export default async function SongsPage() {
  const res = await fetch('http://localhost:8000/api/songs/', { next: { revalidate: 60 } });
  const songs: Song[] = await res.json();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Songs</h1>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.trackID} className="border-b pb-2">
            <strong>{song.trackTitle}</strong>
            <div className="text-sm text-gray-600">{song.byWho}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}