import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { SITE_NAME } from '../constants/siteName';

export function Header() {
  const t = useTranslations("Header");
    return (
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/" className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            {SITE_NAME}
          </Link>
          <br/>
          <p className="text-lg text-gray-600">
            {t('description')}
          </p>
        </div>
      </header>
    )
};
