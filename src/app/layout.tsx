import './globals.css'

import { GoogleTagManager } from '@/src/components/GoogleTagManager'
import { NavBar} from '@/src/components/NavBar'
import { Header } from '@/src/components/Header'
import { TopicNav } from '@/src/components/TopicNav'
import { SideBar} from '@/src/components/SideBar'
import { Footer } from '@/src/components/Footer'

import { i18n } from '@/i18n/config'
import { useTranslations } from '@/i18n/useTranslation'

export const generateStaticParams = async() => {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export function GenerateMetadata({
  params: {lang}
}: Omit<{
  children: React.ReactNode
  params: { lang: string }
}, 'children'>) {
  const { t } =  useTranslations(lang);

  const siteName = t('MetaData.SiteName')
  const siteURL = t('MetaData.SiteURL')
  const siteDescription = t('MetaData.SiteDescription')
  const twitterSite = t('MetaData.Twitter.Site')
  const twitterCreater = t('MetaData.Twitter.Creator')
  console.log('siteName', siteName)
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

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang;
  return (
    <html lang={lang}>
      {/* TODO FIX */}
      {/* <body className={inter.className}> */}
      <GoogleTagManager />
      <body>
        <NavBar locale={lang}/>
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
