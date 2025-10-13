import { AxiosRequestConfig } from 'axios';
interface ApiClientConfig {
    baseURL: string;
    timeout: number;
    headers: Record<string, string>;
}
export declare class ApiClient {
    private client;
    private accessToken;
    private contabilidadeId;
    private appContext;
    constructor(config?: Partial<ApiClientConfig>);
    private setupInterceptors;
    setAccessToken(token: string): void;
    getAccessToken(): string | null;
    setRefreshToken(token: string): void;
    getRefreshToken(): string | null;
    setContabilidadeId(id: string): void;
    getContabilidadeId(): string | null;
    setAppContext(context: 'admin' | 'client'): void;
    getAppContext(): 'admin' | 'client' | null;
    clearAuth(): void;
    private refreshAccessToken;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    upload<T = any>(url: string, file: File, onProgress?: (progress: number) => void): Promise<T>;
    download(url: string, filename?: string): Promise<void>;
}
export declare const apiClient: ApiClient;
export {};
//# sourceMappingURL=client.d.ts.map