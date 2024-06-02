import Article from '@/interface/types/article';
import ArticleDetail from '@/app/(article)/_components/article/Detail';
import apiClient from '@/interface/client';
import APIProvider from '@/interface/api/v1';

const Page = async({
    params: { id },
  }: {
    params: { id: string }
  }) => {
  let article: Article = {} as Article;
  try {
    const res = await apiClient.Get<Article>(APIProvider.getArticleDetailApi(id));
    article = res.data
  } catch (error) {
    console.error('Error fetching article data:', error);
  }
  return (
    <ArticleDetail article={article}/>
  )
}

export default Page;