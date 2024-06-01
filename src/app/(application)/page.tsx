import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';

import Article from '@/server/types/article'
import ArticleList from '@/src/components/Article/ArticleList'
import Pager from '@/server/types/pager';



// Add some delay here.
// const fetcher = (url: string) =>
//   Promise.all([
//     fetch(url),
//     new Promise((res) => setTimeout(res, 600))
//   ]).then(([res]) => res.json());

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

