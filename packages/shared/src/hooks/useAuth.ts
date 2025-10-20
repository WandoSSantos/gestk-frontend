import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { authApi } from '../api/auth/auth.api'
import { User, LoginRequest } from '../api/types'

interface AuthStore {
  // Estado
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null

  // Ações
  login: (credentials: LoginRequest) => Promise<void>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
  clearError: () => void
  setUser: (user: User | null) => void
}

export const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      // Login
      login: async (credentials: LoginRequest) => {
        console.log('🔵 useAuth.login - Iniciando...', credentials)
        set({ loading: true, error: null })
        try {
          const response = await authApi.login(credentials)
          console.log('🟢 useAuth.login - Resposta da API recebida:', response)
          
          set({
            user: response.user,
            isAuthenticated: true,
            loading: false,
            error: null,
          })
          
          console.log('✅ useAuth.login - Estado atualizado com sucesso')
        } catch (error: any) {
          console.error('🔴 useAuth.login - Erro capturado:', error)
          console.error('🔴 useAuth.login - Error response:', error.response)
          
          const errorMessage =
            error.response?.data?.detail ||
            error.response?.data?.message ||
            'Erro ao fazer login. Verifique suas credenciais.'
          
          console.error('🔴 useAuth.login - Mensagem de erro:', errorMessage)
          
          set({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: errorMessage,
          })
          
          throw new Error(errorMessage)
        }
      },

      // Logout
      logout: async () => {
        set({ loading: true })
        try {
          await authApi.logout()
        } catch (error) {
          console.error('Erro ao fazer logout:', error)
        } finally {
          set({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,
          })
        }
      },

      // Atualizar dados do usuário
      refreshUser: async () => {
        // Só atualizar se houver token
        if (!authApi.hasValidToken()) {
          set({ user: null, isAuthenticated: false })
          return
        }

        try {
          const user = await authApi.getCurrentUser()
          set({
            user,
            isAuthenticated: true,
            error: null,
          })
        } catch (error) {
          console.error('Erro ao atualizar usuário:', error)
          set({
            user: null,
            isAuthenticated: false,
          })
        }
      },

      // Limpar erro
      clearError: () => set({ error: null }),

      // Setar usuário manualmente (útil para testes)
      setUser: (user: User | null) =>
        set({
          user,
          isAuthenticated: !!user,
        }),
    }),
    {
      name: 'auth-storage', // Nome da chave no localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

// Hook para verificar se usuário é admin
export const useIsAdmin = () => {
  const user = useAuth((state) => state.user)
  return user?.is_admin || user?.is_staff || user?.is_superuser || false
}

// Hook para verificar se usuário é superuser
export const useIsSuperuser = () => {
  const user = useAuth((state) => state.user)
  return user?.is_superuser || false
}

// Hook para verificar permissões
export const useHasPermission = (permission: string) => {
  const user = useAuth((state) => state.user)
  return user?.permissoes?.includes(permission) || false
}

// Hook para verificar acesso a módulo
export const useHasModuleAccess = (module: string) => {
  const user = useAuth((state) => state.user)
  return user?.modulos_acessiveis?.includes(module) || false
}
