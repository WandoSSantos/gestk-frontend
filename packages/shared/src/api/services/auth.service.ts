import { apiClient } from '../client';
import { 
  LoginRequest, 
  LoginResponse, 
  RefreshTokenRequest, 
  RefreshTokenResponse,
  User,
  Contabilidade 
} from '../types';

export class AuthService {
  // Login
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/api/auth/token/', credentials);
    
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
  async logout(): Promise<void> {
    try {
      await apiClient.post('/api/auth/logout/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    } finally {
      // Limpar dados de autenticação
      apiClient.clearAuth();
    }
  }

  // Refresh token
  async refreshToken(): Promise<string | null> {
    const refreshToken = apiClient.getRefreshToken();
    if (!refreshToken) {
      throw new Error('Refresh token não encontrado');
    }

    try {
      const response = await apiClient.post<RefreshTokenResponse>('/api/auth/token/refresh/', {
        refresh: refreshToken
      });

      apiClient.setAccessToken(response.access);
      return response.access;
    } catch (error) {
      console.error('Erro ao renovar token:', error);
      apiClient.clearAuth();
      throw error;
    }
  }

  // Selecionar contabilidade
  async selectContabilidade(contabilidadeId: string): Promise<void> {
    await apiClient.post('/api/auth/select-contabilidade/', {
      contabilidade_id: contabilidadeId
    });

    apiClient.setContabilidadeId(contabilidadeId);
  }

  // Verificar se está autenticado
  isAuthenticated(): boolean {
    const token = apiClient.getAccessToken();
    return !!token;
  }

  // Obter usuário atual
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('current_user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error('Erro ao parsear usuário:', error);
        return null;
      }
    }
    return null;
  }

  // Salvar usuário atual
  setCurrentUser(user: User): void {
    localStorage.setItem('current_user', JSON.stringify(user));
  }

  // Obter contabilidades disponíveis
  getAvailableContabilidades(): Contabilidade[] {
    const contabilidadesStr = localStorage.getItem('available_contabilidades');
    if (contabilidadesStr) {
      try {
        return JSON.parse(contabilidadesStr);
      } catch (error) {
        console.error('Erro ao parsear contabilidades:', error);
        return [];
      }
    }
    return [];
  }

  // Salvar contabilidades disponíveis
  setAvailableContabilidades(contabilidades: Contabilidade[]): void {
    localStorage.setItem('available_contabilidades', JSON.stringify(contabilidades));
  }

  // Verificar se tem permissão para contabilidade
  hasContabilidadeAccess(contabilidadeId: string): boolean {
    const contabilidades = this.getAvailableContabilidades();
    return contabilidades.some(c => c.id === contabilidadeId);
  }

  // Obter role do usuário para contabilidade atual
  getUserRole(): string | null {
    const roleStr = localStorage.getItem('user_role');
    return roleStr;
  }

  // Salvar role do usuário
  setUserRole(role: string): void {
    localStorage.setItem('user_role', role);
  }

  // Verificar se é admin
  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.is_staff || user?.is_superuser || false;
  }

  // Verificar se é superuser
  isSuperUser(): boolean {
    const user = this.getCurrentUser();
    return user?.is_superuser || false;
  }

  // Obter contexto da aplicação
  getAppContext(): 'admin' | 'client' | null {
    return apiClient.getAppContext();
  }

  // Verificar se é contexto admin
  isAdminContext(): boolean {
    return apiClient.getAppContext() === 'admin';
  }

  // Verificar se é contexto client
  isClientContext(): boolean {
    return apiClient.getAppContext() === 'client';
  }

  // Inicializar autenticação a partir do localStorage
  initializeAuth(): void {
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
  clearAllAuth(): void {
    apiClient.clearAuth();
    localStorage.removeItem('current_user');
    localStorage.removeItem('available_contabilidades');
    localStorage.removeItem('user_role');
  }
}

// Instância singleton
export const authService = new AuthService();
