import configs from '@/config/index';

class APIEndpointProvider{
    private baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    public getTopPageApi(): string {
        return `${this.baseUrl}/top`
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

    public getResumeApi(): string {
        return `${this.baseUrl}/profile/resume`
    }
}

const APIProvider = new APIEndpointProvider(configs.BackendAPI + "api")

export default APIProvider;
