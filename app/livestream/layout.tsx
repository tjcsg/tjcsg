import Container from '@/lib/components/container';
import SpecialEvents from '../special-events';
import GlobalLivestream from './global-livestream';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Container background="bg-white">
        <SpecialEvents />
      </Container>
      <Container background="bg-stone-50">
        <GlobalLivestream />
      </Container>
    </>
  );
}
