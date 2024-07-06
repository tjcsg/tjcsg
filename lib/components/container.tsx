export default async function Container({
  background,
  children,
}: {
  background: string,
  children: React.ReactNode;
}) {

  return (
    <div className={`${background} py-10 px-12`}>
      {children}
    </div>
  )
}

