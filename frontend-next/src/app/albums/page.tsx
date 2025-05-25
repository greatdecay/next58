import { Album } from '@/types/api';

export default async function AlbumsPage() {
  const res = await fetch('http://localhost:8000/api/albums/', { next: { revalidate: 60 } });
  const data = await res.json();

  const albums: Album[] = data.results;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <ul className="space-y-2">
        {albums.map((album) => (
          <li key={album.id} className="border-b pb-2">
            {album.title}
          </li>
        ))}
      </ul>
    </main>
  );
}