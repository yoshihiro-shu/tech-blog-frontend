import Link from 'next/link'
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations("Header");
    return (
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/" className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            {t('title')}
          </Link>
          <br/>
          <p className="text-lg text-gray-600">
            {t('description')}
          </p>
        </div>
      </header>
    )
};
