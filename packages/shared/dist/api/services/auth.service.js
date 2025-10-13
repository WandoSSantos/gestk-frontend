import { apiClient } from '../client';
export class AuthService {
    // Login
    async login(credentials) {
        const response = await apiClient.post('/api/auth/token/', credentials);
        // Salvar tokens
        apiClient.setAccessToken(response.access);
        apiClient.setRefreshToken(response.refresh);
        // Definir contexto da aplicação
        if (credentials.app_context) {
            apiClient.setAppContext(credentials.app_context);
        }
        return response;
    }
    // Logout
    async logout() {
        try {
            await apiClient.post('/api/auth/logout/');
        }
        catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
        finally {
            // Limpar dados de autenticação
            apiClient.clearAuth();
        }
    }
    // Refresh token
    async refreshToken() {
        const refreshToken = apiClient.getRefreshToken();
        if (!refreshToken) {
            throw new Error('Refresh token não encontrado');
        }
        try {
            const response = await apiClient.post('/api/auth/token/refresh/', {
                refresh: refreshToken
            });
            apiClient.setAccessToken(response.access);
            return response.access;
        }
        catch (error) {
            console.error('Erro ao renovar token:', error);
            apiClient.clearAuth();
            throw error;
        }
    }
    // Selecionar contabilidade
    async selectContabilidade(contabilidadeId) {
        await apiClient.post('/api/auth/select-contabilidade/', {
            contabilidade_id: contabilidadeId
        });
        apiClient.setContabilidadeId(contabilidadeId);
    }
    // Verificar se está autenticado
    isAuthenticated() {
        const token = apiClient.getAccessToken();
        return !!token;
    }
    // Obter usuário atual
    getCurrentUser() {
        const userStr = localStorage.getItem('current_user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            }
            catch (error) {
                console.error('Erro ao parsear usuário:', error);
                return null;
            }
        }
        return null;
    }
    // Salvar usuário atual
    setCurrentUser(user) {
        localStorage.setItem('current_user', JSON.stringify(user));
    }
    // Obter contabilidades disponíveis
    getAvailableContabilidades() {
        const contabilidadesStr = localStorage.getItem('available_contabilidades');
        if (contabilidadesStr) {
            try {
                return JSON.parse(contabilidadesStr);
            }
            catch (error) {
                console.error('Erro ao parsear contabilidades:', error);
                return [];
            }
        }
        return [];
    }
    // Salvar contabilidades disponíveis
    setAvailableContabilidades(contabilidades) {
        localStorage.setItem('available_contabilidades', JSON.stringify(contabilidades));
    }
    // Verificar se tem permissão para contabilidade
    hasContabilidadeAccess(contabilidadeId) {
        const contabilidades = this.getAvailableContabilidades();
        return contabilidades.some(c => c.id === contabilidadeId);
    }
    // Obter role do usuário para contabilidade atual
    getUserRole() {
        const roleStr = localStorage.getItem('user_role');
        return roleStr;
    }
    // Salvar role do usuário
    setUserRole(role) {
        localStorage.setItem('user_role', role);
    }
    // Verificar se é admin
    isAdmin() {
        const user = this.getCurrentUser();
        return user?.is_staff || user?.is_superuser || false;
    }
    // Verificar se é superuser
    isSuperUser() {
        const user = this.getCurrentUser();
        return user?.is_superuser || false;
    }
    // Obter contexto da aplicação
    getAppContext() {
        return apiClient.getAppContext();
    }
    // Verificar se é contexto admin
    isAdminContext() {
        return apiClient.getAppContext() === 'admin';
    }
    // Verificar se é contexto client
    isClientContext() {
        return apiClient.getAppContext() === 'client';
    }
    // Inicializar autenticação a partir do localStorage
    initializeAuth() {
        const token = apiClient.getAccessToken();
        const contabilidadeId = apiClient.getContabilidadeId();
        const appContext = apiClient.getAppContext();
        if (token && contabilidadeId && appContext) {
            // Reconfigurar headers
            apiClient.setAccessToken(token);
            apiClient.setContabilidadeId(contabilidadeId);
            apiClient.setAppContext(appContext);
        }
    }
    // Limpar todos os dados de autenticação
    clearAllAuth() {
        apiClient.clearAuth();
        localStorage.removeItem('current_user');
        localStorage.removeItem('available_contabilidades');
        localStorage.removeItem('user_role');
    }
}
// Instância singleton
export const authService = new AuthService();
//# sourceMappingURL=auth.service.js.map