import YoutubeList from '@/lib/components/youtube-list';
import SpecialEvents from '../special-events';
import GlobalLivestream from './global-livestream';
import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';

const text = {
  en: {
    watchOtherSermons: 'Watch sermon recordings',
  },
  zh: {
    watchOtherSermons: 'Watch sermon recordings',
  },
};

function OlderSermons({ lang }: { lang: Locale }) {
  return (
    <Container>
      <h1 className="mb-8 text-2xl font-bold">
        {text[lang].watchOtherSermons}
      </h1>
      <YoutubeList
        playlist={'PLvc6U8OPfT_lqdkfc_udv3hdE_9KR7bwH'}
        index={[1, 2, 3, 4, 5]}
      />
    </Container>
  );
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  return (
    <>
      {children}
      <OlderSermons lang={lang} />
      <SpecialEvents
        lang={lang}
        background="bg-stone-50"
        titleClasses="text-2xl font-bold capitalize"
        paragraphClasses="text-base md:text-lg lg:text-xl"
      />
      <GlobalLivestream
        lang={lang}
        titleClasses="text-2xl font-bold capitalize"
        background="bg-white"
      />
    </>
  );
}
