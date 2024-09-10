import { Locale } from '@/i18n-config';
import OurBeliefs from './our-beliefs';

export default function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return <OurBeliefs lang={lang} background="bg-white-" />;
}
