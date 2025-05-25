// src/app/venues/page.tsx
import { Venue } from '@/types/api';
export default async function VenuesPage() {
  const res = await fetch('http://localhost:8000/api/venues/', { next: { revalidate: 60 } });
  const venues: Venue[] = await res.json();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Venues</h1>
      <ul className="space-y-2">
        {venues.map((venue) => (
          <li key={venue.external_venue_id} className="border-b pb-2">
            {venue.venue_name_display}
          </li>
        ))}
      </ul>
    </main>
  );
}