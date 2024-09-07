import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import CdbdSchedule from './cdbd-schedule';
import Container from '@/lib/components/container';
import { getCDBDSchedule } from '@/lib/api';

const text = {
  en: {
    title: 'Closer Day By Day',
    subtitle: 'Drawing closer to Jesus through His words',
    eyebrow: 'Study with us',
    openSchedule: 'See our latest Bible reading schedule',
  },
  zh: {
    title: 'Closer Day By Day',
    subtitle: 'Drawing closer to Jesus through His words',
    eyebrow: 'Study with us',
    openSchedule: 'See our latest Bible reading schedule',
  },
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const { schedule } = await getCDBDSchedule(false);
  return (
    <>
      <PageHeader lang={lang} text={text} />
      <Container background="bg-white">
        <div className="block w-full max-w-screen-lg">
          <div>
            <CdbdSchedule
              schedule={schedule.url}
              text={text[lang].openSchedule}
            />
          </div>
        </div>
      </Container>
      {children}
    </>
  );
}
