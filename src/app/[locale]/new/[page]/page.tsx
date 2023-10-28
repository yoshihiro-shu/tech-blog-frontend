import ArticleList from '@/src/components/Article/ArticleList'
import Article from '@/server/types/article';
import Pager from '@/server/types/pager';

import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';
import { newAritclesURL } from '@/src/lib/markdown/siteMap';


type NewArticlesData = {
    articles: Article[],
    pager: Pager,
  }

const NewArticles = async({
    params: { page },
  }: {
    params: { page: string }
  }) => {
  const res = await apiClient.Get<NewArticlesData>(APIProvider.getNewArticlesApi(page));
  const articles: Article[] = res.data.articles;
  const pager: Pager = res.data.pager;

  const getLink = (slug: number): string => {
    // TODO Page RoutingのPlugin的なものを作る
    return newAritclesURL(slug.toString())
  }

  if (articles.length === 0) {
    return <div>Articles not found</div>
  }

  return (
    <ArticleList articles={articles} pager={pager} getLink={getLink}/>
  )
}

export default NewArticles;