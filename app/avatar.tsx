import ContentfulImage from '@/lib/contentful-image';

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: any;
}) {
  return (
    <div className="flex items-center">
      <div className="mr-4 h-12 w-12">
        <ContentfulImage
          alt={name}
          className="h-full rounded-full object-cover"
          height={48}
          width={48}
          src={picture.url}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
