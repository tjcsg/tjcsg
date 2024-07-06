export default async function Container({
  background,
  children,
}: {
  background: string;
  children: React.ReactNode;
}) {
  return <div className={`${background} px-12 py-10`}>{children}</div>;
}
