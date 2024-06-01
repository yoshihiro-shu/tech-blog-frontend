import Link from 'next/link'

import Article from '@/server/types/article'
import { articleDetailURL } from '@/src/lib/siteMap';
import { Thumbnail } from '@/src/app/(article)/_components/Article/Thumbnail'

import ArticleTagComponent from './ArticleTag';
import ArticleCategoryComponent from './ArticleCatagory'
import PublishedAtComponent from './PunlishedAt';

type Props = { article: Article }

export const  ArticleBox = ({ article }: Props) => {
    return (
      <article className="flex flex-col shadow my-4 border-2 border-indigo-600">
        <Link href={articleDetailURL(article.id.toString())} className="hover:opacity-75 w-full">
          <Thumbnail title={article?.title}/>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6 border-t-2 border-indigo-600">
          <ArticleCategoryComponent category={article.category}/>
          <ArticleTagComponent tags={article.tags} />
          <PublishedAtComponent date={article.updatedAt} />
        </div>
      </article>
    )
}
