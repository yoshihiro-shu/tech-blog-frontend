import Link from 'next/link'
// import { useTranslation } from 'react-i18next';

export function Header() {
//   const { t } = useTranslation();
    return (
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/" className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            {/* {t('title')} */}
            title
          </Link>
          <p className="text-lg text-gray-600">
            {/* {t('description')} */}
            description
          </p>
        </div>
      </header>
    )
};
