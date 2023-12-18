import Link from 'next/link'
import { useTranslations } from '@/i18n/useTranslation'

export const TopicNav = () => {
  const { t } =  useTranslations('TopicNav');
  const categories = [
    {
      "name": t('Ajaile'),
      "href": "/category/agile"
    },
    {
      "name": t('RequirementDefinition'),
      "href": "/category/requirement-definition"
    },
    {
      "name": t('Bussiness'),
      "href": "/category/bussiness"
    },
    {
      "name": t('Backend'),
      "href": "/category/backend"
    },
    {
      "name": t('Frontend'),
      "href": "/category/frontend"
    },
    {
      "name": t('Infrastructure'),
      "href": "/category/infrastructure"
    },
    {
      "name": t('Marketing'),
      "href": "/category/marketing"
    }
  ]
    return (
      <nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
        <div className="block sm:hidden">
          <Link
            href="/"
            className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          >
            Topics <i className="fas ml-2" />
          </Link>
        </div>
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
}

export default TopicNav;