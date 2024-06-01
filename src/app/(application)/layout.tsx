// import './globals.css'
// import { Inter } from 'next/font/google'
import Script from 'next/script'

import { NavBar} from '@/src/components/NavBar'
import { Header } from '@/src/components/Header'
import { TopicNav } from '@/src/components/TopicNav'
import { SideBar} from '@/src/components/SideBar'
import { Footer } from '@/src/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default async function Layout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ja">
      {/* TODO FIX */}
      {/* <body className={inter.className}> */}
      {/* Google tag (gtag.js)s */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0EGNB55Y3V" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0EGNB55Y3V');
        `}
      </Script>
      <body>
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
