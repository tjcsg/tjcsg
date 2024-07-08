import Container from '@/lib/components/container';
import ContentfulImage from '@/lib/contentful-image';

export default function ChurchLocation({
  name,
  address,
  timings,
  map_src,
  background,
}: {
  name: string;
  address: string;
  timings: { day: string; time: string }[];
  map_src: string;
  background: string;
}) {
  return (
    <Container background={background}>
      <div className="mb-4 flex-col sm:flex-row">
        <h1 className="text-lg font-semibold lg:text-2xl">{name}</h1>
        <p className="lg:text-md text-sm text-gray-500">{address}</p>
      </div>
      <div className="sm:flex">
        <div className="bg-lightblue mb-8 sm:max-w-md">
          <ContentfulImage
            src={`/locations/${name}.jpg`}
            width={723}
            height={445}
            className="w-full"
          ></ContentfulImage>
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
    </Container>
  );
}
