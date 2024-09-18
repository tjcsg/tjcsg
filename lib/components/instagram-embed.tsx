import Container from '@/lib/components/container';
import Script from 'next/script';

export default function InstagramEmbed() {
  return (
    <Container>
      <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></Script>
      <iframe
        src="https://cdn.lightwidget.com/widgets/3e3831ed7d2d5a2cae4dfd0dd4bc8eb1.html"
        className="lightwidget-widget h-full w-full overflow-hidden border-0"
        title="True Jesus Church Singapore Instagram Feed"
      ></iframe>
    </Container>
  );
}
