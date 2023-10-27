import ArticleList from '@/src/components/Article/ArticleList'
// import Pagination from '@/src/components/Pager/Pagination'

import Article from '@/server/types/article';
import Pager from '@/server/types/pager';

import apiClient from '@/server/client';
import getTagArticlesApi from '@/server/api/tagArticles';
import configs from '@/config/index';


type ArticlesListPage = {
    articles: Article[],
    pager: Pager,
  }

const ArticlesByTag = async({
    params: { slug },
  }: {
    params: { slug: string }
  }) => {
  const res = await apiClient.Get<ArticlesListPage>(configs.BackendAPI + getTagArticlesApi(slug));

  const articles: Article[] = res.data.articles;
//   const pager: Pager = res.data.pager;

//   const getPagerLink = (slug: number): string => {
//     // TODO Page RoutingのPlugin的なものを作る
//     return `/tag/${slug}`
//   }

  if (articles.length === 0) {
    return <div>Articles not found</div>
  }

  return (
    <ArticleList articles={articles}/>
  )
}

export default ArticlesByTag;