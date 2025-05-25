export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to 58hours</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><a href="/songs" className="text-blue-500 hover:underline">Songs</a></li>
        <li><a href="/performances" className="text-blue-500 hover:underline">Performances</a></li>
        <li><a href="/venues" className="text-blue-500 hover:underline">Venues</a></li>
        <li><a href="/artists" className="text-blue-500 hover:underline">Artists</a></li>
        <li><a href="/albums" className="text-blue-500 hover:underline">Albums</a></li>
      </ul>
    </main>
  );
}