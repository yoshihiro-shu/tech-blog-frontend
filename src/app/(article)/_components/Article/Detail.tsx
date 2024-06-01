import Article from '@/server/types/article';

import ArticleTitle from '@/app/(article)/_components/Article/Title';
import ArticleTag from '@/app/(article)/_components/Article/Tag';
import ArticleCategory from '@/app/(article)/_components/Article/Category';
import PublishedAt from '@/app/(article)/_components/Article/PublishedAt';
import { Markdown } from '@/app/_components/markdown';

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