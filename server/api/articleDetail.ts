export const getArticleDetailApi = (baseUrl: string, id: string) => {
  return baseUrl + `/articles/${id}`
}