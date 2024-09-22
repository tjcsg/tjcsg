export default function Container({
  background = '',
  children,
}: {
  background?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${background}`}>
      <div className="mx-auto max-w-screen-xl">
        <div
          className={`flex items-center justify-center px-6 py-4 sm:px-12 sm:py-8`}
        >
          <div className="mx-auto block w-full">{children}</div>
          {/* {children} */}
        </div>
      </div>
    </div>
  );
}
