import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';

import Article from '@/server/types/article'
import ArticleList from '@/src/app/(article)/_components/article/List'
import Pager from '@/server/types/pager';

type TopPageData = {
  articles: Article[],
  pager: Pager,
}

export default async function Index() {
    let articles: Article[] = [];
    const res = await apiClient.Get<TopPageData>(APIProvider.getTopPageApi());;
    articles = res.data.articles
    return (
      <ArticleList articles={articles}/>
    )
};

