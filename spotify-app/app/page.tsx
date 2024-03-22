import Link from 'next/link';

console.log('HOME!');
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-spotify text-4xl">Spotify Voting</h1>
      <div className="flex flex-row justify-center mb-72">
        <Link href="/host" className="text-center p-4 mx-4">
          HOST
        </Link>
        <Link href="/join" className="text-center p-4 mx-4">
          JOIN
        </Link>
      </div>
    </main>
  );
}
