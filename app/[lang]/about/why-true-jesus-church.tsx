import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Container from '@/lib/components/container';
import LinkButton from '@/lib/components/link-button';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import { Markdown } from '@/lib/markdown';
import adamPic from '@/public/locations/adam.jpg';
import Image from 'next/image';

const text = {
  en: {
    title: 'Why "True" Jesus Church?',
    learnMore: 'Learn more',
    contents: [
      'The God whom we worship is the true God; as His followers, we uphold His nature and identify ourselves as the true church of God.',
      'The Lord Jesus is the head of the church. The church, which is His body, is therefore called the true church.',
      'The true church preaches the true and complete gospel, confirmed by the presence of the Holy Spirit, signs and miracles.',
    ],
  },
  zh: {
    title: '为何称为【真】耶稣教会？',
    learnMore: 'Learn more',
    contents: [
      'The God whom we worship is the true God; as His followers, we uphold His nature and identify ourselves as the true church of God.',
      'The Lord Jesus is the head of the church. The church, which is His body, is therefore called the true church.',
      'The true church preaches the true and complete gospel, confirmed by the presence of the Holy Spirit, signs and miracles.',
    ],
  },
};

export default async function WhyTrueJesusChurch({
  lang,
  background = 'bg-white',
}: {
  lang: Locale;
  background?: string;
}) {
  const contentfulText = await getWebContent(lang, false);
  return (
    <Container background={`${background}`}>
      {/* <div className="mx-auto max-w-4xl">
        <ModernContentStrip
          title={text[lang].title}
          contents={[
            'The God whom we worship is the true God; as His followers, we uphold His nature and identify ourselves as the true church of God.',
            'The Lord Jesus is the head of the church. The church, which is His body, is therefore called the true church.',
            'The true church preaches the true and complete gospel, confirmed by the presence of the Holy Spirit, signs and miracles.',
          ]}
          otherContents={
            <>
              <LinkButton
                text={text[lang].learnMore}
                href={'tjc.org/the-one-church'}
                type={'inverse'}
                className={`mb-8 px-24 py-2 md:mx-0`}
              />
            </>
          }
          paragraphClasses="text-base"
          labelClasses="max-w-32 mr-10 mb-8 text-base font-normal uppercase xl:text-lg"
        />
      </div> */}
      <div className="pt-8">
        <h2 className="mb-8 text-lg uppercase lg:text-xl">
          {text[lang].title}
        </h2>
        <div className={`w-full text-pretty text-base xs:text-lg md:text-xl`}>
          {text[lang].contents.map((content, i) => (
            <p key={i} className={`pb-5`}>
              {content}
            </p>
          ))}
          <LinkButton
            text={text[lang].learnMore}
            href={'https://tjc.org/the-one-church'}
            type={'inverse'}
            className={`px-24 py-2 md:mx-0`}
          />
        </div>
      </div>
    </Container>
  );
}
