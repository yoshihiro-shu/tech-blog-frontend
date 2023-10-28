export const articleDetailURL = (id: string): string => {
    return `/article/${id}`
}
export const newAritclesURL = (page: string): string => {
    return `/new/${page}`
}
export const cagtegoryArticlesURL = (slug: string): string => {
    return `/category/${slug}`
}
export const tagArticlesURL = (slug: string): string => {
    return `/tag/${slug}`
}
