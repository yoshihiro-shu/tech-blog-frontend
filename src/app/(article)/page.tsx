import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';

import Article from '@/server/types/article'
import ArticleList from '@/app/(article)/_components/article/List'
import Pager from '@/server/types/pager';

type TopPageData = {
  articles: Article[],
  pager: Pager,
}

export default async function Page() {
    let articles: Article[] = [];
    try {
      const res = await apiClient.Get<TopPageData>(APIProvider.getTopPageApi());
      articles = res.data.articles;
    } catch (error) {
        console.error('Error fetching top page data:', error);
    }
    return (
      <ArticleList articles={articles}/>
    )
};

export const dynamic = 'force-dynamic';
