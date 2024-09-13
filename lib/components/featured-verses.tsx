export default function FeaturedVerses({
  verses,
  className = 'my-8',
}: {
  verses: {
    verse: string;
    verseLocation: string;
  }[];
  className?: string;
}) {
  return (
    <div className={className}>
      {verses.map((v) => {
        const { verse, verseLocation } = v;
        return (
          <div key={verse} className="mx-auto max-w-screen-md">
            <div className="text-md text-pretty text-center font-serif xs:text-lg sm:text-xl">
              <p className="mb-4">{verse}</p>
              <p>{verseLocation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
