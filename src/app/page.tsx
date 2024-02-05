import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/simulator'}>시뮬레이터</Link>
    </main>
  );
}
