'use client';

import Link from 'next/link'
import { useParams } from 'next/navigation'

import Article from '@/server/types/article';

import apiClient from '@/server/client';
import { getArticleDetailApi } from '@/server/api/articleDetail';
import configs from '@/config/index'

const AritcleDetail = async() => {
  const parmas = await useParams();
  const id = parmas.id || "1";

  const baseUrl = process.env.BASE_URL || ""
  const res = await apiClient.Get<Article>(getArticleDetailApi(configs.BackendAPI, id));
  const article: Article = res.data;

  return (
    <article className="flex flex-col shadow my-4">
      <Link href="/" className="hover:opacity-75">
        <img src={ article?.thumbnailUrl } alt={article?.title}/>
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article?.category.name }</Link>
        <p className="text-3xl font-bold hover:text-gray-700 pb-4">{ article?.title }</p>
        <p className="text-sm pb-3">
          By <Link href="/" className="font-semibold hover:text-gray-800">{ article?.user.name }</Link>
          , Published on <>{ article?.createdAt }</>
        </p>
        <p className="pb-6">{ article?.content }</p>
      </div>
    </article>
  )
}

export default AritcleDetail;
