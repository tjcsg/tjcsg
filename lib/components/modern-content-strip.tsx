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
    <div className="flex w-full flex-col md:flex-row">
      <h1 className="text-md mb-8 basis-1/3 font-normal uppercase md:mb-0 xl:text-lg">
        {title}
      </h1>
      <div>
        <div className={`prose w-full ${paragraphClasses}`}>
          {contents.map((content, i) => (
            <p key={i} className={`leading-normal`}>
              {content}
            </p>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
