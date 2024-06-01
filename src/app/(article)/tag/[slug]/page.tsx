import ArticleList from '@/app/(article)/_components/article/list'
import ErrorPage from '@/app/_components/error';

import Article from '@/server/types/article';
import Pager from '@/server/types/pager';

import apiClient from '@/server/client';
import APIProvider from '@/server/api/v1';


type ArticlesListPage = {
    articles: Article[],
    pager: Pager,
  }

const ArticlesByTag = async({
    params: { slug },
  }: {
    params: { slug: string }
  }) => {
  const res = await apiClient.Get<ArticlesListPage>(APIProvider.getTagArticlesApi(slug));
  const articles: Article[] = res.data.articles;
//   const pager: Pager = res.data.pager;

//   const getPagerLink = (slug: number): string => {
//     // TODO Page RoutingのPlugin的なものを作る
//     return `/tag/${slug}`
//   }

  if (articles.length === 0) {
    return <ErrorPage statusCode={404} errorMsg={`Tag '${slug}' Articles is Not Found`}/>
  }

  return (
    <ArticleList articles={articles}/>
  )
}

export default ArticlesByTag;