import Article from '@/server/types/article'
import { ArticleBox } from './ArticleBox'

type Props = { articles: Article[] }
const ArticlList = ({ articles }: Props)  => {
    return (
        <section className="w-full md:w-3/4 flex flex-col items-center px-3">
        {articles.map(article => (
            <ArticleBox
              key={article.id}
              article={article}
            />
          ))
        }
        {/* <Pagination
            pager={pager}
            getLink={getPagerLink}
        /> */}
      </section>
    )
}

export default ArticlList