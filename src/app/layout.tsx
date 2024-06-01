import { Inter } from 'next/font/google'
import { type Metadata } from "next";
import {ReactNode} from 'react';
import './globals.css'

import { GoogleAnalytics } from '@/src/app/_components/google_analytics'
import { NavBar } from '@/src/app/_layout/nav_bar'
import { Header } from '@/src/app/_layout/header'
import { TopicNav } from '@/src/app/_layout/topic_nav'
import { Footer } from '@/src/app/_layout/footer'
import { SITE_NAME, SITE_URL } from '@/src/constants/siteName';
import { GOOGLE_ANALYTICS_ID } from '@/src/constants/siteName'

type Props = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin'] })

// Even though this component is just passing its children through, the presence
// of this file fixes an issue in Next.js 13.4 where link clicks that switch
// the locale would otherwise cause a full reload.
export default function RootLayout({children}: Props) {
  return (
    <html lang="ja">
      <GoogleAnalytics id={GOOGLE_ANALYTICS_ID}/>
      <body className={inter.className}>
        <NavBar />
        <Header />
        <TopicNav />
          {children}
        <Footer />
      </body>
    </html>
  )
};

const siteName = SITE_NAME
const siteURL = SITE_URL
const siteDescription = "〜 学んだことを随時更新しています。 〜"
const twitterSite = "@yoshihiro_shu"
const twitterCreater = "@yoshihiro_shu"

export const metadata: Metadata = {
    title: {
      default: siteName,
      template: `%s | ${siteName}`
    },
    description: siteDescription,
    openGraph: {
      title: siteName,
      description: siteDescription,
      url: siteURL,
      siteName: siteName,
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: siteDescription,
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