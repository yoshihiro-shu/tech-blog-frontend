import { SideBar} from '@/app/(article)/_layout/sidebar'

export default async function Layout({ children }: { children: React.ReactNode }){
  return (
    <>
      <div className="container mx-auto w-full md:w-3/4 flex flex-wrap py-6">
        <section className="w-full md:w-3/4 flex flex-col items-center px-3">
          {children}
        </section>
        <section className="w-full md:w-1/4 items-center px-3">
          <SideBar />
        </section>
      </div>
    </>
  )
}
