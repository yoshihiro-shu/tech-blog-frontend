import Article from '@/server/types/article'

import { ArticleTitle } from '@/src/app/(article)/_components/article/Title';
import { ArticleTag } from '@/src/app/(article)/_components/article/Tag';
import { ArticleCategory } from '@/src/app/(article)/_components/article/Category';
import PublishedAt from '@/src/app/(article)/_components/article/PublishedAt';
import { Markdown } from '@/src/app/_components/markdown';

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
            <PublishedAt date={article.updatedAt} />
          </div>
        </article>
      )
}

export default ArticleDetail;