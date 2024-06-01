// import './globals.css'
import { Inter } from 'next/font/google'

import { GoogleAnalytics } from './_components/google_analytics'
import { NavBar} from '@/src/components/NavBar'
import { Header } from '@/src/components/Header'
import { TopicNav } from '@/src/components/TopicNav'
import { SideBar} from '@/src/components/SideBar'
import { Footer } from '@/src/components/Footer'

import { GOOGLE_ANALYTICS_ID } from '@/src/constants/siteName'

const inter = Inter({ subsets: ['latin'] })

export default async function Layout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ja">
      <GoogleAnalytics id={GOOGLE_ANALYTICS_ID}/>
      <body className={inter.className}>
        <NavBar />
        <Header />
        <TopicNav />
          <div className="container mx-auto flex flex-wrap py-6">
            {children}
            <SideBar />
          </div>
        <Footer />
      </body>
    </html>
  )
}
