import Link from 'next/link'

type Props = {
    page: number,
    getLink: (slug: number) => string
}

const NextPager: React.FC<Props> = ({ page, getLink }: Props) => {
  return (
    <Link href={getLink(page)} className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      { page } <i className="fas fa-arrow-right ml-2" />
    </Link>
  )
}

export default NextPager;