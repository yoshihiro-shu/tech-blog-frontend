import Link from 'next/link'
import { useTranslations } from 'next-intl';

import Article from '@/server/types/article'
import { displayTime } from '@/src/lib/markdown/datetime';
import { cagtegoryArticlesURL, tagArticlesURL } from '@/src/lib/markdown/siteMap';
import { Thumbnail } from '@/src/components/Thumbnail'

type Props = { article: Article }

export const  ArticleBox = ({ article }: Props) => {
    const t = useTranslations("Article");
    const articleDetailPath: string = "/article/" + article.id
    return (
      <article className="flex flex-col shadow my-4 border-2 border-indigo-600">
        <Link href={articleDetailPath} className="hover:opacity-75 w-full">
          <Thumbnail title={article?.title}/>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6 border-t-2 border-indigo-600">
          <Link href={cagtegoryArticlesURL(article.category?.slug)} className="text-blue-700 text-sm font-bold pb-4">{ article.category?.name }</Link>
          <p className="text-sm flex justify-start">
            {article.tags.map(tag => (
              <Link href={tagArticlesURL(tag.slug)} className='mr-2'>#{ tag.name }</Link>
            ))}
          </p>
          <p className="text-sm flex justify-end">
            {t('LastModifiedAt')}  <>{ displayTime(article.createdAt) }</>
          </p>
        </div>
      </article>
    )
}
