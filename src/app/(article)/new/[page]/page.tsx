import ArticleList from '@/app/(article)/_components/article/List'
import Article from '@/server/types/article';
import Pager from '@/server/types/pager';

import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';
import { newAritclesURL } from '@/lib/siteMap';


type NewArticlesData = {
    articles: Article[],
    pager: Pager,
  }

const Page = async({
    params: { page },
  }: {
    params: { page: string }
  }) => {
    let articles: Article[] = [];
    let pager: Pager = {} as Pager;
    try {
      const res = await apiClient.Get<NewArticlesData>(APIProvider.getNewArticlesApi(page));
      articles = res.data.articles;
      pager = res.data.pager;
    } catch (error) {
        console.error('Error fetching new articles data:', error);
    }

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

export default Page;