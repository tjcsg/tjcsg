import { Locale } from '@/i18n-config';
import ContentStrip from '@/lib/components/content-strip';

const text = {
  en: {
    title: 'True Jesus Church Global Livestream',
    body: 'Feel free to join any of the live stream worship services offered by True Jesus Churches all around the world.',
  },
  zh: {
    title: 'True Jesus Church Global Livestream',
    body: 'Feel free to join any of the live stream worship services offered by True Jesus Churches all around the world.',
  },
};

const links = [
  {
    en: 'View global livestream',
    zh: 'View global livestream',
    href: 'https://tjc.org/livestream/',
  },
];

export default function GlobalLivestream({
  lang,
  background,
  isReversed = false,
}: {
  lang: Locale;
  background: string;
  isReversed?: boolean;
}) {
  return (
    <ContentStrip
      lang={lang}
      text={text}
      links={links}
      isReversed={isReversed}
      img="/global_livestream.png"
      background={background}
    />
  );
}
