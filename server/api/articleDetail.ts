export const getArticleDetailApi = (id: string | string[] | undefined) => {
  if ((id === undefined) || (id.length !== 1)) {
    return `/articles/1`
  }
  return `/articles/${id}`
}