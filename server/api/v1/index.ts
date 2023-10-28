import configs from '@/config/index';

class APIEndpointProvider{
    backendUrl: string;
    prefix?: string;

    constructor(backendUrl: string, prefix?: string) {
        this.backendUrl = backendUrl
        if (prefix !== undefined) {
            this.prefix = prefix
        }
    }

    private get baseUrl(): string {
        if (this.prefix !== undefined) {
            return `${this.backendUrl}/${this.prefix}`
        }
        return this.backendUrl
    }

    public getNewArticlesApi(page: string): string {
        return `${this.baseUrl}/new/${page}`
    }
    public getArticleDetailApi(id: string): string {
        return `${this.baseUrl}/articles/${id}`
    }
    public getCategoryArticlesApi(slug: string): string {
        return `${this.baseUrl}/articles/category/${slug}`
    }
    public getTagArticlesApi = (slug: string): string => {
        return `${this.baseUrl}/articles/tag/${slug}`
    }
}

const APIProvider = new APIEndpointProvider(configs.BackendAPI)

export default APIProvider;