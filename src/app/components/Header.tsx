'use client';

import { T } from 'gt-next';
import { LocaleSelector, useGT } from 'gt-next/client';

export default function Header() {
  const { locale, setLocale } = useGT();

  const handleLocaleChange = (newLocale: ing) => {
    setLocale(newLocale);
    // No need for router.push or refresh
  };

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
        <LocaleSelector 
          value={locale}
          onChange={handleLocaleChange}
          options={[
            { value: 'en', label: 'English' },
            { value: 'ar', label: 'العربية' },
            { value: 'ur', label: 'اردو' },
            { value: 'fa', label: 'فارسی' },
            { value: 'es', label: 'Español' }
          ]}
        />

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
