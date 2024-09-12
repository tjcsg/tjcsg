export default function ModernContentStrip({
  title,
  contents,
  children = <></>,
  paragraphClasses = 'text-lg sm:text-xl md:text-2xl xl:text-3xl',
}: {
  title: string;
  contents: string[];
  children?: React.ReactNode;
  paragraphClasses?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <h1 className="text-md mb-8 basis-1/3 font-normal uppercase md:mb-0 xl:text-lg">
        {title}
      </h1>
      <div>
        <div className={`w-full md:prose `}>
          {contents.map((content, i) => (
            <p key={i} className={`leading-normal ${paragraphClasses}`}>
              {content}
            </p>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
