import { Performance } from '@/types/api';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PerformancesPage() {
  const res = await fetch('http://localhost:8000/api/performances/');
  const data = await res.json();
  const performances: Performance[] = data.results;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Performances</h1>
      <ul className="space-y-4">
        {performances.map((show) => (
          <li key={show.internal_id} className="border-b pb-4">
            <div className="font-semibold">{formatDate(show.showDate)}</div>
            {show.venue && (
              <div className="text-gray-700">
                {show.venue.venue_name_display} <br />
                {show.venue.city_name}, {show.venue.locality_name}, {show.venue.country_name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}