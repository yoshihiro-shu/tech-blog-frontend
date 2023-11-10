// import './globals.css'
// import { Inter } from 'next/font/google'
import Script from 'next/script'

import { NextSeo } from 'next-seo';
import {getTranslator} from 'next-intl/server';
import {ReactNode} from 'react';

import { NavBar} from '@/src/components/NavBar'
import { Header } from '@/src/components/Header'
import { TopicNav } from '@/src/components/TopicNav'
import { SideBar} from '@/src/components/SideBar'
import { Footer } from '@/src/components/Footer'

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
  const t = await getTranslator(locale);

  return {
    title: t('Header.title')
  };
}

export default async function LocaleLayout({children, params: {locale}}: Props){
  const t = await getTranslator(locale);
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
      <NextSeo
        title={t('Header.title')}
        description={t('Header.description')}
      />
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
