import apiClient from '@/server/client';

import Article from '@/server/types/article'
import Pager from '@/server/types/pager';

import ArticleList from '@/src/components/Article/ArticleList'
import configs from '@/config/index';

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
    const res = await apiClient.Get<TopPageData>(configs.BackendAPI + "/top");;
    articles = res.data.articles
    return (
      <ArticleList articles={articles}/>
    )
};

