import Container from '@/lib/components/container';
import SpecialEvents from '../special-events';
import GlobalLivestream from './global-livestream';

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
      <Container background="bg-white">
        <SpecialEvents lang={lang} />
      </Container>
      <Container background="bg-stone-50">
        <GlobalLivestream />
      </Container>
    </>
  );
}
