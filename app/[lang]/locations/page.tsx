import { details } from '@/lib/church-details';
import ChurchLocation from '@/lib/components/church-location';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';

const text = {
  en: {
    title: 'Locations',
    subtitle:
      'We welcome you to join us at one of our four churches in Singapore.',
    eyebrow: 'Worship with us',
  },
  zh: {
    title: '教会地点',
    subtitle: '我们欢迎您来我们其中的四件教会与我们一起崇拜。',
    eyebrow: '与我们一起崇拜',
  },
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <PageHeader lang={lang} text={text} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-2">
        <ChurchLocation
          name={details[lang]['adam'].name}
          shortname={details[lang]['adam'].shortform}
          address={details[lang]['adam'].address}
          timings={details[lang]['adam'].timings}
          map_src={details[lang]['adam'].map_src}
          background="bg-stone-50"
        />
        <ChurchLocation
          name={details[lang]['tk'].name}
          shortname={details[lang]['tk'].shortform}
          address={details[lang]['tk'].address}
          timings={details[lang]['tk'].timings}
          map_src={details[lang]['tk'].map_src}
          background="bg-white"
        />
        <ChurchLocation
          name={details[lang]['sembawang'].name}
          shortname={details[lang]['sembawang'].shortform}
          address={details[lang]['sembawang'].address}
          timings={details[lang]['sembawang'].timings}
          map_src={details[lang]['sembawang'].map_src}
          background="bg-stone-50 xl:bg-white"
        />
        <ChurchLocation
          name={details[lang]['serangoon'].name}
          shortname={details[lang]['serangoon'].shortform}
          address={details[lang]['serangoon'].address}
          timings={details[lang]['serangoon'].timings}
          map_src={details[lang]['serangoon'].map_src}
          background="bg-white xl:bg-stone-50"
        />
      </div>
    </>
  );
}
