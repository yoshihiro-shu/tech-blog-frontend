import Link from 'next/link'

import { usePathname } from 'next/navigation'

const currentPagerCss: string = "h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"

type Props = {page: number}

const CurrentPager: React.FC<Props> = ({ page }: Props) => {
  const basePath = usePathname() as string
  const next: string = basePath + '/' + page.toString()
  return (
    <Link href={next} className={currentPagerCss}>
      { page }
    </Link>
  )
}

export default CurrentPager;