import { Locale } from '@/i18n-config';
import ContactForm from '@/lib/components/contact-form';
import Container from '@/lib/components/container';
import ImageBanner from '@/lib/components/image-banner';
import InstagramEmbed from '@/lib/components/instagram-embed';
import PageHeader from '@/lib/components/page-header';
import Socials from '@/lib/components/socials';
import adamMingling from '@/public/adam_mingling.jpeg';
import adamLeafet from '@/public/adam_leaflet.jpg';
import { ComponentProps } from 'react';
import Image from 'next/image';

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

const CONTACT_DETAILS = {
  link: '+6564670149',
  readable: '+65 6467 0149',
  email: 'contact@tjc.org.sg',
};

function Invitation({ lang }: { lang: string }) {
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
            {"Let's get in touch!"}
          </h1>
          <p className="mb-3">
            Curious to learn more about the Bible or its gospel of salvation?
            Have any inquiries? We are happy to mail you free leaflets, arrange
            Bible studies with you, and answer your questions.
          </p>
          <p>
            You can also call us at{' '}
            <a
              href={`tel:${CONTACT_DETAILS.link}`}
              className="text-button underline hover:text-button_hover"
            >
              {CONTACT_DETAILS.readable}
            </a>{' '}
            (Mon-Fri, 8am-5pm) or drop us an email at{' '}
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="text-button underline hover:text-button_hover"
            >
              {CONTACT_DETAILS.email}
            </a>
            .
          </p>
          {/* <div className="hidden md:block"> */}
          <h2 className="mb-4 mt-8  text-lg font-bold">
            Follow us on social media
          </h2>
          <Socials size={7} colour={'text-gray-600'} />
        </div>
        {/* </div> */}
        <div className="mx-auto w-full py-12 xs:w-11/12 xs:py-16 sm:w-5/6 md:ml-8 md:w-4/5 md:pt-0 lg:w-1/2">
          <Image
            src={adamLeafet}
            alt={'A picture of a leaflet at Adam Road church'}
          />
        </div>
      </div>
    </Container>
  );
}

export default function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;

  return (
    <>
      <ImageBanner
        src={adamMingling}
        alt={'A picture of a leaflet at Adam Road church'}
      />
      <PageHeader
        lang={lang}
        text={text}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact Us', href: '/contact' },
        ]}
      />
      <Invitation lang={lang} />
      <ContactForm lang={lang} />
      <Container>
        <InstagramEmbed />
      </Container>
    </>
  );
}
