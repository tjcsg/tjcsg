import { details } from '@/lib/church-details';
import ChurchLocation from './church-location';

export default async function Page() {
  return (
    <>
      <div className="mx-auto px-6 pb-8 pt-4 text-center sm:pt-8">
        <p className="text-base font-semibold leading-7 text-button">
          Worship with us
        </p>
        <h2 className="mt-2 text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          Locations
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We welcome you to join us at one of our four churches in Singapore.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <ChurchLocation
          name={details['adam'].name}
          address={details['adam'].address}
          timings={details['adam'].timings}
          map_src={details['adam'].map_src}
          background="bg-stone-50"
        />
        <ChurchLocation
          name={details['tk'].name}
          address={details['tk'].address}
          timings={details['tk'].timings}
          map_src={details['tk'].map_src}
          background="bg-white"
        />
        <ChurchLocation
          name={details['sembawang'].name}
          address={details['sembawang'].address}
          timings={details['sembawang'].timings}
          map_src={details['sembawang'].map_src}
          background="bg-stone-50 xl:bg-white"
        />
        <ChurchLocation
          name={details['serangoon'].name}
          address={details['serangoon'].address}
          timings={details['serangoon'].timings}
          map_src={details['serangoon'].map_src}
          background="bg-white xl:bg-stone-50"
        />
      </div>
    </>
  );
}
