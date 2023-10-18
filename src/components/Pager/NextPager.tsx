import Link from 'next/link'

import { usePathname } from 'next/navigation'

type Props = {page: number}

const NextPager: React.FC<Props> = ({ page }: Props) => {
  const basePath = usePathname() as string
  const next: string = basePath + '/' + page.toString()
  return (
    <Link href={next} className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      Next <i className="fas fa-arrow-right ml-2" />
    </Link>
  )
}

export default NextPager;