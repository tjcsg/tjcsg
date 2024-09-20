import { Locale } from '@/i18n-config';
import ContactForm from '@/lib/components/contact-form';
import Container from '@/lib/components/container';
import InstagramEmbed from '@/lib/components/instagram-embed';
import PageHeader from '@/lib/components/page-header';
import Socials from '@/lib/components/socials';
import { ComponentProps } from 'react';

const text: ComponentProps<typeof PageHeader>['text'] = {
  en: {
    eyebrow: '',
    title: 'Contact Us',
  },
  zh: {
    eyebrow: '',
    title: '联络',
  },
};

export default function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;

  return (
    <>
      <Container>
        <PageHeader lang={lang} text={text} />
      </Container>
      <ContactForm lang={params.lang} />
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-bold">Follow us on social media</h2>
        <Socials size={8} colour={'text-gray-600'} />
      </div>
      <InstagramEmbed />
    </>
  );
}
