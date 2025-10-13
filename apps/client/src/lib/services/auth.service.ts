import { apiClient } from '@gestk/shared';
import type { LoginData, LoginResponse, User, RefreshTokenData, RefreshTokenResponse } from '@gestk/shared';

export class AuthService {
  /**
   * Realizar login do usuário
   */
  static async login(credentials: LoginData): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/api/auth/login/', credentials);
    
    // Configurar tokens
    apiClient.setAccessToken(response.access);
    apiClient.setRefreshToken(response.refresh);
    
    // Configurar contexto client
    apiClient.setAppContext('client');
    
    // Configurar contabilidade do usuário
    if (response.user.contabilidade) {
      apiClient.setContabilidadeId(response.user.contabilidade.id);
    }
    
    return response;
  }

  /**
   * Realizar logout do usuário
   */
  static async logout(): Promise<void> {
    try {
      await apiClient.post('/api/auth/logout/');
    } finally {
      apiClient.clearAuth();
    }
  }

  /**
   * Obter dados do usuário atual
   */
  static async getCurrentUser(): Promise<User> {
    return apiClient.get<User>('/api/auth/user/');
  }

  /**
   * Renovar token de acesso
   */
  static async refreshToken(): Promise<string> {
    const refreshToken = apiClient.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    
    const response = await apiClient.post<RefreshTokenResponse>('/api/auth/token/refresh/', {
      refresh: refreshToken
    });
    
    apiClient.setAccessToken(response.access);
    return response.access;
  }

  /**
   * Trocar contabilidade ativa
   */
  static async switchContabilidade(contabilidadeId: string): Promise<void> {
    // Verificar se usuário tem acesso à contabilidade
    const hasAccess = await apiClient.get<boolean>(
      `/api/administracao/usuarios-acesso/verificar-acesso/?contabilidade=${contabilidadeId}`
    );
    
    if (hasAccess) {
      apiClient.setContabilidadeId(contabilidadeId);
    } else {
      throw new Error('Usuário não tem acesso a esta contabilidade');
    }
  }

  /**
   * Verificar se usuário está autenticado
   */
  static isAuthenticated(): boolean {
    return !!apiClient.getAccessToken();
  }

  /**
   * Obter contabilidade ativa
   */
  static getCurrentContabilidadeId(): string | null {
    return apiClient.getContabilidadeId();
  }
}

