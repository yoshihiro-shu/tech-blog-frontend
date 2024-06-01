// import './globals.css'
// import { Inter } from 'next/font/google'
import Script from 'next/script'

import { ReactNode } from 'react';

import { NavBar} from '@/src/components/NavBar'
import { Header } from '@/src/components/Header'
import { TopicNav } from '@/src/components/TopicNav'
import { SideBar} from '@/src/components/SideBar'
import { Footer } from '@/src/components/Footer'
import { SITE_NAME, SITE_URL } from '@/src/constants/siteName';

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode;
  params: {
    locale: string,
  };
};

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {

  const siteName = SITE_NAME
  const siteURL = SITE_URL
  const siteDescription = "〜 学んだことを随時更新しています。 〜"
  const twitterSite = "@yoshihiro_shu"
  const twitterCreater = "@yoshihiro_shu"
  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`
    },
    siteDescription,
    openGraph: {
      title: siteName,
      siteDescription,
      siteURL,
      siteName,
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      siteDescription,
      site: twitterSite,
      creator: twitterCreater,
    },
    // verification: {
    //   google: 'サーチコンソールのやつ',
    // },
    alternates: {
      canonical: siteURL,
    },
  };
}

export default async function Layout({children, params: {locale}}: Props){
  return (
    <html lang={locale}>
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
