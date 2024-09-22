import { Locale } from '@/i18n-config';
import { details } from '@/lib/church-details';
import ChurchLivestream from '@/lib/components/church-livestream';
import Header from '@/lib/components/header';

const text = {
  en: {
    livestream: 'Livestream',
  },
  zh: {
    livestream: '直播',
  },
};

export default async function LivestreamList({
  lang,
  background,
  titleClasses = 'text-2xl font-bold',
}: {
  lang: Locale;
  background: string;
  titleClasses?: string;
}) {
  return (
    <div className={`${background} px-8 pb-16 pt-12`} id="livestream">
      <div className={`mx-auto grid max-w-7xl`}>
        {/* <Header title={`${text[lang].livestream}`} /> */}
        <h1 className={titleClasses}>{text[lang].livestream}</h1>
        <div className="grid grid-cols-1 pt-6 md:grid-cols-2">
          <ChurchLivestream
            name={details[lang]['adam'].name}
            shortname={details[lang]['adam'].shortform}
            timings={details[lang]['adam'].timings}
            background="bg-stone-50"
            href="livestream/adam"
            lang={lang}
          />
          <ChurchLivestream
            name={details[lang]['tk'].name}
            shortname={details[lang]['tk'].shortform}
            timings={details[lang]['tk'].timings}
            background="bg-white"
            href="livestream/tk"
            lang={lang}
          />
          <ChurchLivestream
            name={details[lang]['sembawang'].name}
            shortname={details[lang]['sembawang'].shortform}
            timings={details[lang]['sembawang'].timings}
            background="bg-stone-50 md:bg-white"
            href="livestream/sembawang"
            lang={lang}
          />
          <ChurchLivestream
            name={details[lang]['serangoon'].name}
            shortname={details[lang]['serangoon'].shortform}
            timings={details[lang]['serangoon'].timings}
            background="bg-white md:bg-stone-50"
            href="livestream/serangoon"
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
}
