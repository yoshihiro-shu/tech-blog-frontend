import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ContactFormLink } from '../constants/siteName'

type Props = { locale: string }

export const NavBar = ({locale}: Props) => {
  const t = useTranslations("Navbar");
    const leftNav = [
      {
        "name": t('home'),
        "href": "/"
      },
      {
        "name": t('profile'),
        "href": "/profile"
      },
      {
        "name": t('latestArticles'),
        "href": "/new/1"
      }
    ]
    return (
      <>
        <nav className="w-full py-4 bg-blue-800 shadow">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
            <nav>
              <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                {
                  leftNav.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-gray-200 hover:underline px-4">
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>

            <div className="flex items-center text-lg no-underline text-white pr-6">
              { locale === 'en' && (
                <Link className="pl-6" href="/ja">
                  日本語
                </Link>
              )}
              { locale === 'ja' && (
                <Link className="pl-6" href="/en">
                  ENGLISH
                </Link>
              )}
              {ContactFormLink &&
                <Link className="pl-6" href={ContactFormLink}>
                  {t('contact')}
                </Link>
              }
            </div>
          </div>
        </nav>
      </>
    )
}

export default NavBar;
