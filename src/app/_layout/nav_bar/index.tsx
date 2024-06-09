import Link from 'next/link'

import { ContactFormLink } from '@/constants/siteName'

export const NavBar = () => {
    const leftNav = [
      {
        "name": "ホーム",
        "href": "/"
      },
      {
        "name": "プロフィール",
        "href": "/profile"
      },
      {
        "name": "新着記事",
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
                      <Link
                        key={item.name}
                        href={item.href}
                        className="hover:text-gray-200 hover:underline px-4">
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>

            <div className="flex items-center text-lg no-underline text-white pr-6">
              {ContactFormLink &&
                <Link className="pl-6" href={ContactFormLink}>
                  お問い合わせ
                </Link>
              }
            </div>
          </div>
        </nav>
      </>
    )
};
