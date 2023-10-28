import Link from 'next/link';

import Article from '@/server/types/article'
import { cagtegoryArticlesURL } from '@/src/lib/markdown/siteMap';

import ArticleTitleComponent from './ArticleTitle';
import ArticleTagComponent from './ArticleTag';
import MarkdownComponent from '../Markdown';
import PublishedAtComponent from './PunlishedAt';

type Props = { article: Article }
const ArticleDetail = async ({ article }: Props) => {

    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
          {/* <TableOfContents content={article.content} /> */}
          <div className="bg-white p-6 w-full">
            <ArticleTitleComponent title={article.title} />
            <Link href={cagtegoryArticlesURL(article.category.slug)} className="text-blue-700 text-sm font-bold pb-4">{ article?.category?.name }</Link>
            <ArticleTagComponent tags={article.tags} />
            <MarkdownComponent content={article.content}/>
            <PublishedAtComponent date={article.updatedAt} />
          </div>
        </article>
      )
}

export default ArticleDetail;