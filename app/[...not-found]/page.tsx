import { Locale } from '@/i18n-config';
import { redirect } from 'next/navigation';

export default function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  redirect(`/${lang}`);
}
