import apiClient from '@/server/client';

import Article from '@/server/types/article'
import Pager from '@/server/types/pager';

import { ArticleBox } from '@/src/components/Article/ArticleBox'
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
    // TODO useSWR
    const res = await apiClient.Get<TopPageData>(configs.BackendAPI + "/top");;
    articles = res.data.articles
    return (
      <section className="w-full md:w-3/4 flex flex-col items-center px-3">
        {articles.map(article => (
            <ArticleBox
              key={article.id}
              article={article}
            />
          ))
        }
      </section>
    )
};

