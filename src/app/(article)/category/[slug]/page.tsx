import ArticleList from '@/app/(article)/_components/article/List'
import Article from '@/server/types/article';
import ErrorPage from '@/app/_components/error';
import Pager from '@/server/types/pager';

import apiClient from '@/server/client';
import APIProvider from '@/server/api/v1';



type ArticlesListPage = {
    articles: Article[],
    pager: Pager,
  }

const Page = async({
    params: { slug },
  }: {
    params: { slug: string }
  }) => {
  const res = await apiClient.Get<ArticlesListPage>(APIProvider.getCategoryArticlesApi(slug));

  const articles: Article[] = res.data.articles;
//   const pager: Pager = res.data.pager;

//   const getPagerLink = (slug: number): string => {
//     // TODO Page RoutingのPlugin的なものを作る
//     return `/cateogory/${slug}`
//   }

  if (articles.length === 0) {
    return <ErrorPage statusCode={404} errorMsg={`Category '${slug}' Articles is Not Found`}/>
  }

  return (
    <ArticleList articles={articles}/>
  )
}

export default Page;