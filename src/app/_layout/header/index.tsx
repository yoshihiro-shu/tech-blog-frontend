import Link from 'next/link'
import { SITE_NAME } from '@/src/constants/siteName';

export function Header() {
    return (
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/" className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            {SITE_NAME}
          </Link>
          <br/>
          <p className="text-lg text-gray-600">
            〜 学んだことを随時更新しています。 〜
          </p>
        </div>
      </header>
    )
};