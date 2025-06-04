'use client';

import { T } from 'gt-next';
import { useState } from 'react';

export default function Header() {
  const [selectedLang, setSelectedLang] = useState('en');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    console.log('Language selected:', newLang);
    setSelectedLang(newLang);
    // Intentionally no reload or localStorage here for debugging
  };

  console.log('Currently selected language:', selectedLang);

  return (
    <header
      className="flex justify-between items-center p-4 text-white w-full fixed top-0 z-[100] shadow-md"
      style={{ backgroundColor: '#e00700' }}
    >
      <div className="flex items-center space-x-4">
        <span className="header-icon"></span>
        <T key="header.title">
          <h1 className="text-2xl font-bold">Test App</h1>
        </T>
      </div>
      <div className="flex space-x-2">
        <select
          onChange={handleLanguageChange}
          value={selectedLang}
          className="bg-white text-orange-950 px-4 py-2 rounded"
        >
          <option value="en">English</option>
          <option value="ur">اردو</option>
          <option value="fa">فارسی</option>
          <option value="ar">العربية</option>
          <option value="es">Español</option>
        </select>

        <T key="header.feedback">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc12apuXyfmCdr-0EtrI11WBv9NfrLv_TaK28NTp_w8PrjDOQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-950 px-4 py-2 rounded hover:bg-orange-900 hover:text-white"
          >
            Feedback
          </a>
        </T>
      </div>
    </header>
  );
}
