'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';
import Link from 'next/link';

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        {translate('notFound.message', locale)}
      </h1>
      <Link
        href={`/?lang=${locale}`}
        className="inline-block bg-gray-light text-primary-800 px-6 py-3 text-lg"
      >
        {translate('notFound.goHome', locale)}
      </Link>
    </main>
  );
}
