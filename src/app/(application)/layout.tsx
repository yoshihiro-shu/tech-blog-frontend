import { NavBar} from '@/src/components/NavBar'
import { Header } from '@/src/components/Header'
import { TopicNav } from '@/src/components/TopicNav'
import { SideBar} from '@/src/components/SideBar'
import { Footer } from '@/src/components/Footer'

export default async function Layout({ children }: { children: React.ReactNode }){
  return (
    <>
      <NavBar />
      <Header />
      <TopicNav />
        <div className="container mx-auto flex flex-wrap py-6">
          {children}
          <SideBar />
        </div>
      <Footer />
    </>
  )
}
