export default async function Container({
  background,
  children,
}: {
  background: string;
  children: React.ReactNode;
}) {
  return <div className={`${background} px-6 py-10 sm:px-12`}>{children}</div>;
}
