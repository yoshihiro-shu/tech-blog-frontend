import Link from 'next/link';

import Article from '@/server/types/article'
import { markdownToHtml } from '@/src/lib/markdown';
import { displayTime } from '@/src/lib/markdown/datetime';
import { cagtegoryArticlesURL, tagArticlesURL } from '@/src/lib/markdown/siteMap';

// import TableOfContents from '@/src/components/TableOfContent';


type Props = { article: Article }

const ArticleDetail = async ({ article }: Props) => {
    const contentHtml = await markdownToHtml(article.content);
    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
          {/* <TableOfContents content={article.content} /> */}
          <div className="bg-white p-6 w-full">
            <div className="text-4xl font-bold hover:text-gray-700 pb-4">{ article?.title }</div>
            <Link href={cagtegoryArticlesURL(article.category.slug)} className="text-blue-700 text-sm font-bold pb-4">{ article?.category?.name }</Link>
            <p className='flex justify-end'>
                {article.tags.map((tag) =>
                 <Link className='ml-2' href={tagArticlesURL(tag.slug)} key={tag.id} >#{tag.name}</Link>
                 )}
            </p>
            <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p className="text-sm pb-3">
                Published on <>{ displayTime(article?.updatedAt) }</>
            </p>
          </div>
        </article>
      )
}

export default ArticleDetail;