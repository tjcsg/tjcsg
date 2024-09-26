import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import CdbdSchedule from './cdbd-schedule';
import Container from '@/lib/components/container';
import { getCDBDSchedule } from '@/lib/api';
import Breadcrumb from '@/lib/components/breadcrumb';

const text = {
  en: {
    title: 'Closer Day By Day',
    home: 'Home',
    subtitle: 'Drawing closer to Jesus through His words',
    eyebrow: 'Study with us',
    openSchedule: 'See our latest Bible reading schedule',
  },
  zh: {
    title: '每日读经',
    home: '主页',
    subtitle: '透过耶稣的话语与他日近',
    eyebrow: '与我们查考',
    openSchedule: '查看我们最新的读经计划',
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
      <Container>
        <div className="max-w-screen-lg">
          <Breadcrumb
            breadcrumbs={[
              { name: text[lang].home, href: '/' },
              { name: text[lang].title, href: '/cdbd' },
            ]}
            className=""
          />
        </div>
      </Container>
      <PageHeader lang={lang} text={text} />
      <Container>
        <div className="-my-10 block w-full max-w-screen-lg">
          <CdbdSchedule
            schedule={schedule.url}
            text={text[lang].openSchedule}
          />
        </div>
      </Container>
      {children}
    </>
  );
}
