import Article from '@/server/types/article';
import ArticleDetail from '@/src/components/Article/ArticleDetail';
import apiClient from '@/server/client';
import { getArticleDetailApi } from '@/server/api/articleDetail'
import configs from '@/config/index';

const ArticleDetailPage = async({
    params: { id },
  }: {
    params: { id: string }
  }) => {
  const res = await apiClient.Get<Article>(getArticleDetailApi(configs.BackendAPI, id));

  const article: Article = res.data;
  if (article === null) {
    return <div>Article not found</div>
  }

  return (
    <ArticleDetail article={article}/>
  )
}

export default ArticleDetailPage;