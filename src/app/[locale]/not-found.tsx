'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';
import Link from 'next/link';

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="text-center space-y-8 p-8">
        <h1 className="text-4xl font-bold text-gray-dark">
          {translate('notFound.message', locale)}
        </h1>
        <Link
          href={`/${locale}`}
          className="inline-block bg-primary-800 text-white px-8 py-3 rounded-lg text-lg hover:bg-primary-700 transition-colors"
        >
          {translate('notFound.goHome', locale)}
        </Link>
      </main>
    </div>
  );
}
