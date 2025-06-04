import Head from 'next/head';

// Import your components
import Header from '../app/components/Header';
import FetchHadiths from './components/FetchHadiths';

export default function Home() {
  return (
    <>
      <Head>
        <title>GT Test App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>
      </Head>

      <Header />
       <main className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Sayings of Imam Ali (ع)</h1>
      <FetchHadiths />
    </main>
    </>
  );
}
