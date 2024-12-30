export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Productos</h1>
      {children}
    </div>
  )
}