import Article from '@/server/types/article';
import ArticleDetail from '@/src/app/(article)/_components/article/ArticleDetail';
import apiClient from '@/server/client';
import APIProvider from '@/server/api/v1';

const ArticleDetailPage = async({
    params: { id },
  }: {
    params: { id: string }
  }) => {
  const res = await apiClient.Get<Article>(APIProvider.getArticleDetailApi(id));
  const article: Article = res.data;
  if (article === null) {
    return <div>Article not found</div>
  }

  return (
    <ArticleDetail article={article}/>
  )
}

export default ArticleDetailPage;