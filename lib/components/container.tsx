export default async function Container({
  background,
  children,
}: {
  background: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${background} flex items-center justify-center px-6 py-10 sm:px-12`}
    >
      {children}
    </div>
  );
}
