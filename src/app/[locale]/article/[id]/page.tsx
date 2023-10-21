import Link from 'next/link';

import Article from '@/server/types/article';

import apiClient from '@/server/client';
import { getArticleDetailApi } from '@/server/api/articleDetail'
import configs from '@/config/index';

import { markdownToHtml } from '@/src/lib/markdown';
import { displayTime } from '@/src/lib/markdown/datetime';

const ArticleDetail = async({
    params: { id },
  }: {
    params: { id: string }
  }) => {
  const res = await apiClient.Get<Article>(getArticleDetailApi(configs.BackendAPI, id));

  const article: Article = res.data;

  if (article === null) {
    return <div>Article not found</div>
  }

  const contentHtml = await markdownToHtml(article.content);

  return (
    <article className="flex flex-col shadow my-4">
      <div className="bg-white flex flex-col justify-start p-6">
      <p className="text-sm pb-3">
        Published on <>{ displayTime(article?.createdAt) }</>
      </p>
        <Link href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article?.category?.name }</Link>
        <p className="text-3xl font-bold hover:text-gray-700 pb-4">{ article?.title }</p>
        {article.tags.map((tag) => <Link href="/" key={tag.id} >#{tag.name}</Link>)}
        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </article>
  )
}

export default ArticleDetail;