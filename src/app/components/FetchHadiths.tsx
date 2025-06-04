'use client';

import { useEffect, useState } from 'react';

type Hadith = {
  id: number;
  hadith: {
    text: string;
    arabic: string;
  };
  author: string;
  source: string;
  mood: string;
  tags: string[];
};

export default function FetchHadiths() {
  const [hadiths, setHadiths] = useState<Hadith[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hadiths')
      .then(res => res.json())
      .then(data => {
        setHadiths(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-8">Loading hadiths...</p>;

  return (
    <div className="p-4 space-y-6">
      {hadiths.map((h) => (
        <div key={h.id} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
          <p className="text-xl font-bold text-gray-800 mb-2">{h.hadith.text}</p>
          <p className="text-right text-2xl font-semibold text-gray-700 font-[Noto Kufi Arabic] mb-2">{h.hadith.arabic}</p>
          <p className="text-sm text-gray-500">{h.source} — <i>{h.author}</i></p>
          <div className="mt-2 flex flex-wrap gap-2">
            {h.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 text-sm px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
