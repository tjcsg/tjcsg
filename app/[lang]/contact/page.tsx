import { Locale } from '@/i18n-config';
import ContactForm from '@/lib/components/contact-form';
import Container from '@/lib/components/container';
import PageHeader from '@/lib/components/page-header';
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
    </>
  );
}
