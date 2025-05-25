import { Performance } from '@/types/api';

export default async function PerformancesPage() {
  const res = await fetch('http://localhost:8000/api/performances/', { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data.results)) {
    console.error('Expected results array, got:', data);
    return <main className="p-8">Unexpected API response</main>;
  }

  const performances: Performance[] = data.results;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Performances</h1>
      <ul className="space-y-2">
        {performances.map((show) => (
          <li key={show.internal_id} className="border-b pb-2">
            <div className="font-semibold">{show.showDate}</div>
            <div className="text-sm text-gray-600">Venue ID: {show.external_venue_id}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}