import Link from 'next/link';

import ContentfulImage from '@/lib/contentful-image';
import Container from '@/lib/components/container';
import SpecialEvents from '../special-events';
import GlobalLivestream from './global-livestream';

const adamTimings = [
  { day: 'Wednesday', time: '7:30pm - 8:45pm' },
  { day: 'Friday', time: '7:30pm - 8:45pm' },
  { day: 'Saturday - AM', time: '10:30am - 11:45am' },
  { day: 'Saturday - PM', time: '2:45pm - 4:00pm' },
];

const tkTimings = [
  { day: 'Tuesday', time: '7:30pm - 8:45pm' },
  { day: 'Friday', time: '7:30pm - 8:45pm' },
  { day: 'Saturday - AM', time: '10:30am - 11:45am' },
  { day: 'Saturday - PM', time: '2:45pm - 4:00pm' },
];

const sembawangTimings = [
  { day: 'Wednesday', time: '7:45pm - 9:00pm' },
  { day: 'Friday', time: '7:45pm - 9:00pm' },
  { day: 'Saturday - AM', time: '10:30am - 11:45am' },
  { day: 'Saturday - PM', time: '2:45pm - 4:00pm' },
];

const serangoonTimings = [
  { day: 'Tuesday', time: '7:45pm - 9:00pm' },
  { day: 'Friday', time: '7:45pm - 9:00pm' },
  { day: 'Saturday - AM', time: '10:30am - 11:45am' },
  { day: 'Saturday - PM', time: '1:45pm - 3:00pm' },
];

function ChurchLivestream({
  name,
  timings,
  background,
  href,
}: {
  name: string;
  timings: { day: string; time: string }[];
  background: string;
  href: string;
}) {
  return (
    <Container background={background}>
      <h1 className="mb-4 text-lg font-semibold lg:text-2xl">
        {name} Livestream
      </h1>

      <div className="bg-lightblue relative mx-auto mb-8 sm:max-w-md">
        <ContentfulImage
          src={`/locations/${name}.jpg`}
          width={723}
          height={445}
          className="w-full"
        ></ContentfulImage>
        <Link href={href}>
          <button className="text-md absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap rounded-md bg-button px-10 py-2 font-semibold text-white shadow-lg hover:bg-button_hover sm:text-xs">
            Watch Livestream
          </button>
        </Link>
        <table className="table-sm mt-6">
          <tbody>
            {timings.map((timing) => (
              <tr key={timing.day}>
                <td className="sm:text-md text-sm font-semibold">
                  {timing.day}
                </td>
                <td className="text-sm">{timing.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default async function Page() {
  return (
    <>
      <div className="mx-auto px-6 pb-8 pt-4 text-center sm:pt-8">
        <p className="text-base font-semibold leading-7 text-button">
          Worship with us
        </p>
        <h2 className="mt-2 text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          Livestreams
        </h2>
        <Link href="locations">
          <button className="sm:text-md mt-6 rounded-md border-2 border-button bg-white px-10 py-2 text-sm font-semibold text-button shadow-sm hover:bg-button hover:text-white sm:leading-4">
            Attend In-Person Church Service &rarr;
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ChurchLivestream
          name="Adam Road Church"
          timings={adamTimings}
          background="bg-stone-50"
          href="/livestream/adam"
        />
        <ChurchLivestream
          name="Telok Kurau Church"
          timings={tkTimings}
          background="bg-white"
          href="/livestream/tk"
        />
        <ChurchLivestream
          name="Sembawang Church"
          timings={sembawangTimings}
          background="bg-stone-50 md:bg-white"
          href="/livestream/sembawang"
        />
        <ChurchLivestream
          name="Serangoon Church"
          timings={serangoonTimings}
          background="bg-white md:bg-stone-50"
          href="/livestream/serangoon"
        />
      </div>
    </>
  );
}
