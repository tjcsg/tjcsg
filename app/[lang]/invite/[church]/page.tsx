import { Locale } from '@/i18n-config';
import { getLatestEventFromChurch } from '@/lib/api';
import { Church } from '@/lib/church-details';
import { redirect } from 'next/navigation';
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return ['tk', 'adam', 'serangoon', 'sembawang', 'telok-kurau'];
}

export default async function Page({
  params,
}: {
  params: { church: Church | 'telok-kurau'; lang: Locale };
}) {
  let { church, lang } = params;
  church = church == 'telok-kurau' ? 'tk' : church;
  const event = await getLatestEventFromChurch(lang, church);
  if (!event) {
    redirect(`/${lang}/events`);
  }
  const isOver = event.date2
    ? Date.now() > new Date(event.date2).getTime()
    : Date.now() > new Date(event.date).getTime();

  if (isOver) {
    redirect(`/${lang}/events`);
  }

  redirect(`/${lang}/events/${event.slug}`);
}
