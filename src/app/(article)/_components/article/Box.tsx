import Link from 'next/link'

import Article from '@/interface/types/article'
import { articleDetailURL } from '@/lib/siteMap';
import Thumbnail from '@/app/(article)/_components/article/Thumbnail';
import ArticleTag from '@/app/(article)/_components/article/Tag';
import ArticleCategory from '@/app/(article)/_components/article/Category';
import PublishedAtComponent from '@/app/(article)/_components/article/PublishedAt';

type Props = { article: Article }
const ArticleBox = ({ article }: Props) => {
    return (
        <article className="flex flex-col shadow my-4 border-2 border-indigo-600">
            <Link href={articleDetailURL(article.id.toString())} className="hover:opacity-75 w-full">
            <Thumbnail title={article?.title}/>
            </Link>
            <div className="bg-white flex flex-col justify-start p-6 border-t-2 border-indigo-600">
            <ArticleCategory category={article.category}/>
            <ArticleTag tags={article.tags} />
            <PublishedAtComponent date={article.updatedAt} />
            </div>
        </article>
    )
};

export default ArticleBox;