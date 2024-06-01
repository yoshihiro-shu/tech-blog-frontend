import Article from '@/server/types/article'

import { ArticleTitle } from '@/src/app/(article)/_components/article/ArticleTitle';
import { ArticleTag}  from './Tag';
import { ArticleCategory } from '@/src/app/(article)/_components/article/ArticleCategory';
import { Markdown } from '@/src/app/_components/markdown';
import PublishedAtComponent from './PublishedAt';

type Props = { article: Article }
const ArticleDetail = async ({ article }: Props) => {

    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
          {/* <TableOfContents content={article.content} /> */}
          <div className="bg-white p-6 w-full">
            <ArticleTitle title={article.title} />
            <ArticleCategory category={article.category}/>
            <ArticleTag tags={article.tags} />
            <Markdown content={article.content}/>
            <PublishedAtComponent date={article.updatedAt} />
          </div>
        </article>
      )
}

export default ArticleDetail;