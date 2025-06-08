import { NextResponse } from 'next/server';

const hadiths = [
  {
    id: 1,
    hadith: {
      text: "Amir al-mu'minin, peace be upon him, said: Whenever a person conceals a thing in his heart it manifests itself through unintentional words from his tongue and (in) the expressions of his face.",
      arabic: "وَقَالَ عليه‏السلام: مَا أَضْمَرَ أَحَدٌ شَيْئاً إِلَّا ظَهَرَ فِي فَلَتَاتِ لِسَانِهِ وَ صَفَحَاتِ وَجْهِهِ"
    },
    author: "Imam Ali (عليه السلام)",
    source: "Nahj Al Balagah – Saying 26",
    mood: "Reflective",
    tags: ["intention", "heart", "self-awareness", "psychology", "spiritual insight", "truth"]
  }
];

export async function GET() {
  return NextResponse.json(hadiths);
}