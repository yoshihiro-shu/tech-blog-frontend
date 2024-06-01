import CurrentPager from "@/src/app/(article)/_components/pager/CurrentPager";
import NormalPager from "@/src/app/(article)/_components/pager/NormalPager";
import PrevPager from "@/src/app/(article)/_components/pager/PrevPager";
import NextPager from "@/src/app/(article)/_components/pager/NextPager";

import Pager from "@/server/types/pager";

type Props = {
    pager: Pager,
    getLink: (slug: number) => string
}

const displayPagerRange: number = 3

const Pagination = ({ pager, getLink }: Props) => {
  const startPage: number = pager.currentPage - 1 || 1
  const prevPage: number = pager.currentPage - 1
  const nextPage: number = startPage + displayPagerRange + 1
  const isPrevPage: boolean = 1 < pager.currentPage
  const isNextPage: boolean = nextPage < pager.lastPage

  let pagerRange: number[] = Array.from({length: displayPagerRange}, (_, n) => ( startPage+n ))
  pagerRange = pagerRange.filter(number => number <= pager.lastPage)

  return (
    <div className="flex items-center py-8">
      {isPrevPage && <PrevPager page={prevPage} getLink={getLink} />}
      {/* TODO fix */}
      {pagerRange.map(pr => (pr === pager.currentPage)
        ? <CurrentPager key={pr} page={pr} getLink={getLink}/>
        : <NormalPager key={pr} page={pr} getLink={getLink}/>)
      }
      {isNextPage && <NextPager page={nextPage} getLink={getLink}/>}
    </div>
  )
}

export default Pagination;