export default async function Layout({ children }: { children: React.ReactNode }){
  return (
    <>
      <div className="container mx-auto flex flex-wrap py-6">
        {children}
      </div>
    </>
  )
}
