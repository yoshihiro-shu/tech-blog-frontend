import Link from 'next/link'

const currentPagerCss: string = "h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"

type Props = {
    page: number,
    getLink: (slug: number) => string
}

const CurrentPager: React.FC<Props> = ({ page, getLink }: Props) => {
  return (
    <Link href={getLink(page)} className={currentPagerCss}>
      { page }
    </Link>
  )
}

export default CurrentPager;
