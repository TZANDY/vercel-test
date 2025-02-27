export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
    <h1 className="text-2xl">Products</h1>
    <div className="flex flex-col">
      {children}
    </div>
    </div >
  );
}