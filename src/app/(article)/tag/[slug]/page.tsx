import ArticleList from '@/app/(article)/_components/article/List'
import ErrorPage from '@/app/_components/error';

import Article from '@/interface/types/article';
import Pager from '@/interface/types/pager';

import apiClient from '@/interface/client';
import APIProvider from '@/interface/api/v1';


type ArticlesListPage = {
    articles: Article[],
    pager: Pager,
  }

const Page = async({
    params: { slug },
  }: {
    params: { slug: string }
  }) => {
    let articles: Article[] = [];
    try {
      const res = await apiClient.Get<ArticlesListPage>(APIProvider.getTagArticlesApi(slug));
      articles = res.data.articles;
    } catch (error) {
        console.error('Error fetching tag articles data:', error);
    }
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

export default Page;