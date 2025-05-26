'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Song } from '@/types/api';

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string | null>('http://localhost:8000/api/songs/?limit=25');

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchSongs = useCallback(async () => {
    if (!nextUrl || loading) return;
    setLoading(true);
    try {
      const res = await fetch(nextUrl);
      const data = await res.json();
      setSongs((prev) => [...prev, ...data.results]);
      setNextUrl(data.next);
    } catch (err) {
      console.error('Error fetching songs:', err);
    } finally {
      setLoading(false);
    }
  }, [nextUrl, loading]);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  useEffect(() => {
    if (!observerRef.current || !nextUrl) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchSongs();
        }
      },
      { threshold: 1.0 }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchSongs, loading, nextUrl]);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Songs (Alphabetical)</h1>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.trackID} className="border-b pb-2">
            <strong>{song.trackTitle}</strong>
            <div className="text-sm text-gray-600">{song.byWho}</div>
          </li>
        ))}
      </ul>
      {loading && <p className="mt-4 text-sm text-gray-500">Loading more songs...</p>}
      <div ref={observerRef} className="h-10" />
    </main>
  );
}