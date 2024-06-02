import Article from '@/interface/types/article'
import Pager from '@/interface/types/pager'
import ArticleBox from '@/app/(article)/_components/article/Box'
import Pagination from '@/app/(article)/_components/pager/Pagination'

import {Spacer} from "@nextui-org/react";


type Props = {
  articles: Article[]
  pager?: Pager
  getLink?: (slug: number) => string
}
const ArticlList = ({ articles, pager, getLink }: Props)  => {
    return (
        <section className="w-full md:w-3/4 flex flex-col items-center px-3">
        {articles.map(article => (
          <>
            <ArticleBox
              key={article.id}
              article={article}
            />
            <Spacer y={4}
              key={article.id}
            />
          </>
          ))
        }
        { (pager && getLink) && <Pagination pager={pager} getLink={getLink}/>}
      </section>
    )
}

export default ArticlList;