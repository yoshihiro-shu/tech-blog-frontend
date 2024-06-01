import Article from '@/server/types/article'

import ArticleTitleComponent from './ArticleTitle';
import ArticleTagComponent from './ArticleTag';
import ArticleCategoryComponent from './ArticleCatagory'
import { Markdown } from '@/src/app/_components/markdown';
import PublishedAtComponent from './PunlishedAt';

type Props = { article: Article }
const ArticleDetail = async ({ article }: Props) => {

    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
          {/* <TableOfContents content={article.content} /> */}
          <div className="bg-white p-6 w-full">
            <ArticleTitleComponent title={article.title} />
            <ArticleCategoryComponent category={article.category}/>
            <ArticleTagComponent tags={article.tags} />
            <Markdown content={article.content}/>
            <PublishedAtComponent date={article.updatedAt} />
          </div>
        </article>
      )
}

export default ArticleDetail;