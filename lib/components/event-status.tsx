'use client';

import { Locale } from '@/i18n-config';

const text = {
  en: {
    upcoming: 'Upcoming',
    ended: 'Ended',
  },
  zh: {
    upcoming: '即将到来',
    ended: '已结束',
  },
};

export default function EventStatus({
  date,
  lang,
}: {
  date: any;
  lang: Locale;
}) {
  return (
    <p className="absolute bottom-2 left-2 z-10 rounded-full bg-gray-100 bg-opacity-85 px-3 py-1.5 text-xs font-medium text-gray-600">
      {Date.now() < new Date(date).getTime()
        ? text[lang].upcoming
        : text[lang].ended}
    </p>
  );
}
