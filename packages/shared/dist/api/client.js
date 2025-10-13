import axios from 'axios';
// Configuração base da API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
// Classe principal do cliente API
export class ApiClient {
    constructor(config) {
        this.accessToken = null;
        this.contabilidadeId = null;
        this.appContext = null;
        this.client = axios.create({
            baseURL: config?.baseURL || API_BASE_URL,
            timeout: config?.timeout || 10000,
            headers: {
                'Content-Type': 'application/json',
                ...config?.headers,
            },
        });
        this.setupInterceptors();
    }
    // Configurar interceptors
    setupInterceptors() {
        // Request interceptor
        this.client.interceptors.request.use((config) => {
            // Adicionar token de autenticação
            if (this.accessToken) {
                config.headers.Authorization = `Bearer ${this.accessToken}`;
            }
            // Adicionar headers de contexto
            if (this.contabilidadeId) {
                config.headers['X-Contabilidade-ID'] = this.contabilidadeId;
            }
            if (this.appContext) {
                config.headers['X-App-Context'] = this.appContext;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        // Response interceptor
        this.client.interceptors.response.use((response) => {
            return response;
        }, async (error) => {
            const originalRequest = error.config;
            // Se erro 401 e não é uma tentativa de refresh
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    // Tentar refresh do token
                    const refreshToken = this.getRefreshToken();
                    if (refreshToken) {
                        const newToken = await this.refreshAccessToken(refreshToken);
                        if (newToken) {
                            this.setAccessToken(newToken);
                            originalRequest.headers.Authorization = `Bearer ${newToken}`;
                            return this.client(originalRequest);
                        }
                    }
                }
                catch (refreshError) {
                    // Se refresh falhar, redirecionar para login
                    this.clearAuth();
                    window.location.href = '/login';
                }
            }
            return Promise.reject(error);
        });
    }
    // Métodos de autenticação
    setAccessToken(token) {
        this.accessToken = token;
        localStorage.setItem('access_token', token);
    }
    getAccessToken() {
        return this.accessToken || localStorage.getItem('access_token');
    }
    setRefreshToken(token) {
        localStorage.setItem('refresh_token', token);
    }
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    setContabilidadeId(id) {
        this.contabilidadeId = id;
        localStorage.setItem('contabilidade_id', id);
    }
    getContabilidadeId() {
        return this.contabilidadeId || localStorage.getItem('contabilidade_id');
    }
    setAppContext(context) {
        this.appContext = context;
        localStorage.setItem('app_context', context);
    }
    getAppContext() {
        return this.appContext || localStorage.getItem('app_context');
    }
    // Limpar autenticação
    clearAuth() {
        this.accessToken = null;
        this.contabilidadeId = null;
        this.appContext = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('contabilidade_id');
        localStorage.removeItem('app_context');
    }
    // Refresh do token
    async refreshAccessToken(refreshToken) {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/token/refresh/`, {
                refresh: refreshToken,
            });
            const { access } = response.data;
            this.setAccessToken(access);
            return access;
        }
        catch (error) {
            console.error('Erro ao renovar token:', error);
            return null;
        }
    }
    // Métodos HTTP
    async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }
    async patch(url, data, config) {
        const response = await this.client.patch(url, data, config);
        return response.data;
    }
    async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
    // Upload de arquivos
    async upload(url, file, onProgress) {
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                if (onProgress && progressEvent.total) {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    onProgress(progress);
                }
            },
        };
        const response = await this.client.post(url, formData, config);
        return response.data;
    }
    // Download de arquivos
    async download(url, filename) {
        const response = await this.client.get(url, {
            responseType: 'blob',
        });
        const blob = new Blob([response.data]);
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
    }
}
// Instância singleton do cliente
export const apiClient = new ApiClient();
// Inicializar com dados do localStorage
const initializeFromStorage = () => {
    const accessToken = localStorage.getItem('access_token');
    const contabilidadeId = localStorage.getItem('contabilidade_id');
    const appContext = localStorage.getItem('app_context');
    if (accessToken)
        apiClient.setAccessToken(accessToken);
    if (contabilidadeId)
        apiClient.setContabilidadeId(contabilidadeId);
    if (appContext)
        apiClient.setAppContext(appContext);
};
// Inicializar quando o módulo for carregado
if (typeof window !== 'undefined') {
    initializeFromStorage();
}
//# sourceMappingURL=client.js.map