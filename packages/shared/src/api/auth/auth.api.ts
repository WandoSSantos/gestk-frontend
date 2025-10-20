import { apiClient } from '../client'
import { LoginRequest, LoginResponse, AuthTokens, User } from '../types'

export const authApi = {
  /**
   * Realiza login no sistema
   * @param credentials - Credenciais de login (username e password)
   * @returns Tokens de autenticação e dados do usuário
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      console.log('🔵 authApi.login - Iniciando login com:', credentials)
      
      // 1. Obter tokens e dados do login
      const response = await apiClient.post<LoginResponse>('/api/auth/token/', credentials)
      
      console.log('🟢 authApi.login - Resposta recebida:', {
        hasAccess: !!response.access,
        hasRefresh: !!response.refresh,
        hasUser: !!response.user,
        user: response.user
      })
      
      // 2. Armazenar tokens
      apiClient.setAccessToken(response.access)
      apiClient.setRefreshToken(response.refresh)
      
      // 3. Se houver contabilidade, armazenar
      if (response.user?.contabilidade?.id) {
        apiClient.setContabilidadeId(response.user.contabilidade.id)
        console.log('🟡 authApi.login - Contabilidade armazenada:', response.user.contabilidade.id)
      }
      
      console.log('✅ authApi.login - Login concluído com sucesso')
      return response
    } catch (error: any) {
      console.error('🔴 authApi.login - Erro no login:', error)
      console.error('🔴 authApi.login - Error response:', error.response?.data)
      // Limpar autenticação em caso de erro
      apiClient.clearAuth()
      throw error
    }
  },

  /**
   * Realiza logout do sistema
   */
  async logout(): Promise<void> {
    try {
      // Tentar invalidar o token no backend
      await apiClient.post('/api/auth/logout/')
    } catch (error) {
      // Continuar mesmo se falhar no backend
      console.error('Erro ao fazer logout no backend:', error)
    } finally {
      // Sempre limpar autenticação
      apiClient.clearAuth()
    }
  },

  /**
   * Renova o token de acesso usando o refresh token
   * @param refreshToken - Token de renovação
   * @returns Novo token de acesso
   */
  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const response = await apiClient.post<{ access: string }>('/api/auth/token/refresh/', {
      refresh: refreshToken,
    })
    
    // Atualizar token
    apiClient.setAccessToken(response.access)
    
    return {
      access: response.access,
      refresh: refreshToken, // Mantém o mesmo refresh token
    }
  },

  /**
   * Busca dados do usuário autenticado
   * @returns Dados do usuário atual
   */
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>('/api/auth/me/')
    return response
  },

  /**
   * Verifica se existe um token válido armazenado
   * @returns true se existe token
   */
  hasValidToken(): boolean {
    const token = apiClient.getAccessToken()
    return !!token
  },

  /**
   * Obtém o token de acesso armazenado
   * @returns Token de acesso ou null
   */
  getAccessToken(): string | null {
    return apiClient.getAccessToken()
  },

  /**
   * Obtém o refresh token armazenado
   * @returns Refresh token ou null
   */
  getRefreshToken(): string | null {
    return apiClient.getRefreshToken()
  },
}
