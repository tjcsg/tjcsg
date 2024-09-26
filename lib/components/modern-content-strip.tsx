export default function ModernContentStrip({
  title,
  contents,
  otherContents = <></>,
  paragraphClasses = 'text-lg sm:text-xl md:text-2xl xl:text-3xl',
  labelClasses = 'text-base font-normal uppercase xl:text-lg',
}: {
  title: string;
  contents: string[];
  otherContents?: React.ReactNode;
  paragraphClasses?: string;
  labelClasses?: string;
}) {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <h1 className={`mb-8 basis-1/3 md:mb-0 ${labelClasses}`}>{title}</h1>
      <div>
        <div className={`prose w-full text-pretty ${paragraphClasses}`}>
          {contents.map((content, i) => (
            <p key={i} className={`leading-normal`}>
              {content}
            </p>
          ))}
        </div>
        <div className="max-w-[65ch]">{otherContents}</div>
      </div>
    </div>
  );
}
