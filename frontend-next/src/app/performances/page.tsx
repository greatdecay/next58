// src/app/performances/page.tsx
export default async function PerformancesPage() {
  const res = await fetch('http://localhost:8000/api/performances/', { next: { revalidate: 60 } });
  const performances = await res.json();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Performances</h1>
      <ul className="space-y-2">
        {performances.map((show: any) => (
          <li key={show.internal_id} className="border-b pb-2">
            {show.showDate} @ {show.external_venue_id}
          </li>
        ))}
      </ul>
    </main>
  );
}