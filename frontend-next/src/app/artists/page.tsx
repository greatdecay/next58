import { Artist } from '@/types/api';

export default async function ArtistsPage() {
  const res = await fetch('http://localhost:8000/api/artists/', { next: { revalidate: 60 } });
  const data = await res.json();

  const artists: Artist[] = data.results;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Artists</h1>
      <ul className="space-y-2">
        {artists.map((artist) => (
          <li key={artist.external_artist_id} className="border-b pb-2">
            {artist.artist_name}
          </li>
        ))}
      </ul>
    </main>
  );
}