import Link from 'next/link'

export const TopicNav = () => {
    const agile = 'アジャイル';
    const requirementDefinition = '要件定義';
    const business = 'ビジネス';
    const backend = 'バックエンド';
    const frontend = 'フロントエンd';
    const infrastructure = 'インフラ';
    const marketing = 'マーケティング';
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
            <Link href="/category/agile" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{agile}</Link>
            <Link href="/category/requirement-definition" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{requirementDefinition}</Link>
            <Link href="/category/bussiness" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{business}</Link>
            <Link href="/category/backend" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{backend}</Link>
            <Link href="/category/frontend" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{frontend}</Link>
            <Link href="/category/infrastructure" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{infrastructure}</Link>
            <Link href="/category/marketing" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{marketing}</Link>
          </div>
        </div>
      </nav>
    )
}

export default TopicNav;