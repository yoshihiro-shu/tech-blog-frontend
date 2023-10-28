import Article from '@/server/types/article'
import Pager from '@/server/types/pager'
import { ArticleBox } from '@/src/components/Article/ArticleBox'
import Pagination from '@/src/components/Pager/Pagination'


type Props = {
  articles: Article[]
  pager?: Pager
  getLink?: (slug: number) => string
}
const ArticlList = ({ articles, pager, getLink }: Props)  => {
    return (
        <section className="w-full md:w-3/4 flex flex-col items-center px-3">
        {articles.map(article => (
            <ArticleBox
              key={article.id}
              article={article}
            />
          ))
        }
        { (pager && getLink) && <Pagination pager={pager} getLink={getLink}/>}
      </section>
    )
}

export default ArticlList