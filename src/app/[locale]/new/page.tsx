import  { ArticleBox } from '@/src/components/ArticleBox';
import Pagination from '@/src/components/Pager/Pagination'

import Article from '@/server/types/article';
import Pager from '@/server/types/pager';

import apiClient from '@/server/client';
import getNewArticlesApi from '@/server/api/newArticles';
import configs from '@/config/index';


type NewArticlesData = {
    articles: Article[],
    pager: Pager,
  }

const NewArticles = async() => {
  const page = "1";
  const res = await apiClient.Get<NewArticlesData>(configs.BackendAPI + getNewArticlesApi(page));

  const articles: Article[] = res.data.articles;
  const pager: Pager = res.data.pager;

  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {articles.map(article => (
        <ArticleBox
          key={article.id}
          article={article}
        />
      ))
      }
    {/* <Pagination
      pager={pager}
    /> */}
  </section>
  )
}

export default NewArticles;