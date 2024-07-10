import { details } from '@/lib/church-details';
import ChurchLocation from './church-location';
import { Locale } from '@/i18n-config';

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
      <div className="mx-auto px-6 pb-8 pt-4 text-center sm:pt-8">
        <p className="text-base font-semibold leading-7 text-button">
          {text[lang].eyebrow}
        </p>
        <h2 className="mt-2 text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          {text[lang].title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {text[lang].subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
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
