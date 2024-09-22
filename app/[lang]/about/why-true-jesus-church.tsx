import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import LinkButton from '@/lib/components/link-button';

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
  titleClasses,
}: {
  lang: Locale;
  background?: string;
  titleClasses: string;
}) {
  return (
    <Container background={`${background}`}>
      <div className="pt-8">
        <h2 className={`mb-8 ${titleClasses}`}>{text[lang].title}</h2>
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
            className={`mt-6 px-20 py-0 text-base xs:text-lg md:text-xl`}
          />
        </div>
      </div>
    </Container>
  );
}
