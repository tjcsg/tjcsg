import Container from '@/lib/components/container';
import Image from 'next/image';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';

const pic = {
  adam: adamPic,
  tk: tkPic,
  sembawang: sembawangPic,
  serangoon: serangoonPic,
};

export default function ChurchLocation({
  name,
  shortname,
  address,
  timings,
  map_src,
  background,
}: {
  name: string;
  shortname: 'adam' | 'tk' | 'serangoon' | 'sembawang';
  address: string;
  timings: { day: string; time: string }[];
  map_src: string;
  background: string;
}) {
  return (
    <Container background={background}>
      <div className="block">
        <div className="mb-4 flex-col sm:flex-row">
          <h1 className="text-lg font-semibold lg:text-2xl">{name}</h1>
          <p className="lg:text-md text-sm text-gray-500">{address}</p>
        </div>
        <div className="sm:flex">
          <div className="mb-8 bg-lightblue sm:max-w-md">
            <Image
              src={pic[shortname]}
              className="w-full"
              alt={`A picture of ${name}'s exterior`}
            />
            <table className="table-sm mt-1">
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
          <iframe
            src={map_src}
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full sm:max-w-md"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
