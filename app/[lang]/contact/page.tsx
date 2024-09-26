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
import Breadcrumb from '@/lib/components/breadcrumb';

const text = {
  en: {
    eyebrow: '',
    title: 'Contact Us',
    home: 'Home',
    keepInTouch: "Let's get in touch!",
    keepInTouchText:
      'Curious to learn more about the Bible or its gospel of salvation? Have any inquiries? We are happy to mail you free leaflets, arrange Bible studies with you, and answer your questions.',
    follow: 'Follow us on social media',
  },
  zh: {
    eyebrow: '',
    title: '联系我们',
    home: '主页',
    keepInTouch: '让我们保持联系！',
    keepInTouchText:
      '对圣经或它的救恩福音感到好奇吗？有任何疑问吗？我们很乐意免费邮寄宣传单给您，为您安排圣经学习，并回答您的问题。',
    follow: '关注我们的社交媒体',
  },
};

const CONTACT_DETAILS = {
  link: '+6564670149',
  readable: '+65 6467 0149',
  email: 'contact@tjc.org.sg',
};

function Invitation({ lang }: { lang: Locale }) {
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
            {text[lang].keepInTouch}
          </h1>
          <p className="mb-3">{text[lang].keepInTouchText}</p>
          {lang === 'en' ? (
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
          ) : (
            <p>
              您也可以在周一至周五上午8点至下午5点拨打我们的电话{' '}
              <a
                href={`tel:${CONTACT_DETAILS.link}`}
                className="text-button underline hover:text-button_hover"
              >
                {CONTACT_DETAILS.readable}
              </a>{' '}
              ，或发送电子邮件至{' '}
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-button underline hover:text-button_hover"
              >
                {CONTACT_DETAILS.email}
              </a>{' '}
              与我们联系。
            </p>
          )}

          {/* <div className="hidden md:block"> */}
          <h2 className="mb-4 mt-8  text-lg font-bold">{text[lang].follow}</h2>
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
      <Container>
        <Breadcrumb
          breadcrumbs={[
            { name: text[lang].home, href: `/${lang}` },
            { name: text[lang].title, href: `/${lang}/contact` },
          ]}
        />
      </Container>
      <PageHeader lang={lang} text={text} />
      <Invitation lang={lang} />
      <ContactForm lang={lang} />
      <Container>
        <InstagramEmbed />
      </Container>
    </>
  );
}
