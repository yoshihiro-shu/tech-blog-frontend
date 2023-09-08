// import './globals.css'
// import { Inter } from 'next/font/google'

import {ReactNode} from 'react';
import {getTranslator} from 'next-intl/server';

import { NavBar} from '@/components/NavBar'
import { Header } from '@/components/Header'
import { TopicNav } from '@/components/TopicNav'
import { SideBar} from '@/components/SideBar'
import { Footer } from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslator(locale);

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({children, params: {locale}}: Props){
  return (
    <html lang={locale}>
      {/* TODO FIX */}
      {/* <body className={inter.className}> */}
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
