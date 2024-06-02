import './globals.css'

import { Inter } from 'next/font/google'
import { type Metadata } from "next";
import { ReactNode, Suspense} from 'react';

import Loading from "@/app/loading";
import { NavBar } from '@/app/_layout/nav_bar'
import { Header } from '@/app/_layout/header'
import { TopicNav } from '@/app/_layout/topic_nav'
import { Footer } from '@/app/_layout/footer'
import { GoogleAnalytics } from '@/app/_components/google_analytics'
import { SITE_NAME, SITE_URL, GOOGLE_ANALYTICS_ID } from '@/constants/siteName';

import { UIProviders } from "./providers";

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
        <UIProviders>
          <NavBar />
          <Header />
          <TopicNav />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </UIProviders>
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