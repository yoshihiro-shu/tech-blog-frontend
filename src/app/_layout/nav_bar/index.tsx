import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

import { ContactFormLink } from '@/constants/siteName'

export const NavBar = () => {
    const centerNav = [
      {
        "name": "プロフィール",
        "href": "/profile"
      },
      {
        "name": "新着記事",
        "href": "/new/1"
      },
      {
        "name": "お問い合わせ",
        "href": ContactFormLink
      }
    ]
    return (
      <>
            <Navbar className="bg-blue-800 shadow text-white">
              <NavbarBrand>
                <Link className="font-bold text-inherit">HOME</Link>
              </NavbarBrand>
              <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
              {
                  centerNav.map((item, i) => (
                    <NavbarItem key={i} className="text-white">
                      <Link href={item.href} className="text-white">
                        {item.name}
                      </Link>
                    </NavbarItem>
                  ))
                }
              </NavbarContent>
            </Navbar>
      </>
    )
};
