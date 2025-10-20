# Guia de Integração com API - GESTK Frontend

## 📋 Visão Geral

Este guia fornece orientações práticas para implementação da integração com a API do backend GESTK, seguindo o [Plano de Implementação](./PLANO_IMPLEMENTACAO_API.md).

---

## 🔧 Configuração Inicial

### 1. Variáveis de Ambiente

Crie os arquivos `.env.local` em cada aplicação:

**`apps/admin/.env.local`**
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_API_TIMEOUT=30000

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# App Configuration
NEXT_PUBLIC_APP_NAME=GESTK Admin
NEXT_PUBLIC_APP_VERSION=1.0.0
```

**`apps/client/.env.local`**
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_API_TIMEOUT=30000

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3001

# App Configuration
NEXT_PUBLIC_APP_NAME=GESTK Client
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 2. Instalação de Dependências

```bash
# Na raiz do projeto
npm install axios zod react-query @tanstack/react-query
```

---

## 🏗️ Estrutura de Código

### Cliente API Base

**`packages/shared/src/api/client.ts`**
```typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'

// Configuração base
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
const API_TIMEOUT = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000', 10)

// Cria instância do Axios
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar token em todas as requisições
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para renovar token automaticamente
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean }

    // Se erro 401 e ainda não tentou renovar
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refresh_token')
        if (!refreshToken) {
          throw new Error('No refresh token available')
        }

        // Renovar token
        const response = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
          refresh: refreshToken,
        })

        const { access } = response.data
        localStorage.setItem('access_token', access)

        // Retentar requisição original com novo token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access}`
        }
        return apiClient(originalRequest)
      } catch (refreshError) {
        // Se renovação falhar, redirecionar para login
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
```

### Types Base

**`packages/shared/src/api/types.ts`**
```typescript
// Response genérico de lista
export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

// Response de erro
export interface ApiError {
  detail?: string
  message?: string
  errors?: Record<string, string[]>
}

// Usuário
export interface User {
  id: string
  username: string
  email: string
  tipo_usuario: 'admin' | 'operacional' | 'cliente'
  contabilidade?: {
    id: string
    razao_social: string
    cnpj: string
  }
  modulos_acessiveis: string[]
  permissoes: string[]
  is_superuser: boolean
  is_admin: boolean
}

// Tokens
export interface AuthTokens {
  access: string
  refresh: string
}

// Login request
export interface LoginRequest {
  username: string
  password: string
}

// Login response
export interface LoginResponse extends AuthTokens {
  user: User
}
```

---

## 🔐 Bloco 1: Autenticação

### API de Autenticação

**`packages/shared/src/api/auth/auth.api.ts`**
```typescript
import apiClient from '../client'
import { LoginRequest, LoginResponse, AuthTokens, User } from '../types'

export const authApi = {
  // Login
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<AuthTokens>('/auth/token/', credentials)
    
    // Armazenar tokens
    localStorage.setItem('access_token', response.data.access)
    localStorage.setItem('refresh_token', response.data.refresh)
    
    // Buscar dados do usuário
    const userResponse = await apiClient.get<User>('/auth/me/')
    
    return {
      ...response.data,
      user: userResponse.data,
    }
  },

  // Logout
  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout/')
    } finally {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
    }
  },

  // Renovar token
  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const response = await apiClient.post<AuthTokens>('/auth/token/refresh/', {
      refresh: refreshToken,
    })
    
    localStorage.setItem('access_token', response.data.access)
    
    return response.data
  },

  // Buscar dados do usuário atual
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>('/auth/me/')
    return response.data
  },
}
```

### Hook de Autenticação

**`packages/shared/src/hooks/useAuth.ts`**
```typescript
import { create } from 'zustand'
import { authApi } from '../api/auth/auth.api'
import { User, LoginRequest } from '../api/types'

interface AuthStore {
  user: User | null
  loading: boolean
  error: string | null
  login: (credentials: LoginRequest) => Promise<void>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
  clearError: () => void
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (credentials) => {
    set({ loading: true, error: null })
    try {
      const response = await authApi.login(credentials)
      set({ user: response.user, loading: false })
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || 'Erro ao fazer login'
      set({ error: errorMessage, loading: false })
      throw error
    }
  },

  logout: async () => {
    set({ loading: true })
    try {
      await authApi.logout()
      set({ user: null, loading: false })
    } catch (error) {
      set({ user: null, loading: false })
    }
  },

  refreshUser: async () => {
    try {
      const user = await authApi.getCurrentUser()
      set({ user })
    } catch (error) {
      set({ user: null })
    }
  },

  clearError: () => set({ error: null }),
}))
```

### Middleware de Proteção de Rotas

**`apps/client/src/middleware.ts`**
```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')
  const isAuthPage = request.nextUrl.pathname.startsWith('/login')
  const isPublicPage = request.nextUrl.pathname === '/'

  // Se está tentando acessar página protegida sem token
  if (!token && !isAuthPage && !isPublicPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Se está logado e tenta acessar login
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

### Página de Login Atualizada

**`apps/client/src/app/(auth)/login/page.tsx`**
```typescript
'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect } from 'react'

const loginSchema = z.object({
  username: z.string().min(1, 'Email é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const { login, loading, error, user } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  // Se já estiver logado, redirecionar
  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data)
      router.push('/dashboard')
    } catch (error) {
      // Erro já tratado no hook
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {/* Campos do formulário */}
        <input {...register('username')} type="email" placeholder="Email" />
        {errors.username && <span>{errors.username.message}</span>}
        
        <input {...register('password')} type="password" placeholder="Senha" />
        {errors.password && <span>{errors.password.message}</span>}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
```

---

## 📊 Bloco 2: Carteira de Clientes

### Types de Carteira

**`packages/shared/src/api/gestao/carteira.types.ts`**
```typescript
export interface Cliente {
  id: string
  razao_social: string
  nome_fantasia?: string
  cnpj: string
  regime_fiscal: 'simples' | 'presumido' | 'real'
  ramo_atividade: string
  status_cliente: 'ativo' | 'inativo' | 'suspenso'
  uf: string
  cidade: string
  data_inicio_contrato?: string
  tempo_contrato_meses?: number
}

export interface CarteiraStats {
  total_clientes: number
  clientes_ativos: number
  clientes_inativos: number
  novos_mes: number
  perdidos_mes: number
}

export interface Categoria {
  regime_fiscal: string
  total: number
  ativos: number
  inativos: number
}

export interface EvolucaoMensal {
  mes: string
  total: number
  ativos: number
  novos: number
  perdidos: number
}

export interface CarteiraFilters {
  regime_fiscal?: string
  ramo_atividade?: string
  status?: string
  uf?: string
  search?: string
  page?: number
  page_size?: number
}
```

### API de Carteira

**`packages/shared/src/api/gestao/carteira.api.ts`**
```typescript
import apiClient from '../client'
import { PaginatedResponse } from '../types'
import {
  Cliente,
  CarteiraStats,
  Categoria,
  EvolucaoMensal,
  CarteiraFilters,
} from './carteira.types'

export const carteiraApi = {
  // Listar clientes
  async getClientes(filters?: CarteiraFilters): Promise<PaginatedResponse<Cliente>> {
    const response = await apiClient.get<PaginatedResponse<Cliente>>('/gestao/carteira/clientes/', {
      params: filters,
    })
    return response.data
  },

  // Estatísticas da carteira
  async getStats(): Promise<CarteiraStats> {
    const response = await apiClient.get<CarteiraStats>('/gestao/carteira/stats/')
    return response.data
  },

  // Categorias por regime fiscal
  async getCategorias(): Promise<Categoria[]> {
    const response = await apiClient.get<Categoria[]>('/gestao/carteira/categorias/')
    return response.data
  },

  // Evolução mensal
  async getEvolucao(meses: number = 12): Promise<EvolucaoMensal[]> {
    const response = await apiClient.get<EvolucaoMensal[]>('/gestao/carteira/evolucao/', {
      params: { meses },
    })
    return response.data
  },
}
```

### Hook de Carteira

**`packages/shared/src/hooks/useCarteira.ts`**
```typescript
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { carteiraApi } from '../api/gestao/carteira.api'
import { CarteiraFilters } from '../api/gestao/carteira.types'

export function useCarteira(filters?: CarteiraFilters) {
  return useQuery({
    queryKey: ['carteira', 'clientes', filters],
    queryFn: () => carteiraApi.getClientes(filters),
  })
}

export function useCarteiraStats() {
  return useQuery({
    queryKey: ['carteira', 'stats'],
    queryFn: () => carteiraApi.getStats(),
  })
}

export function useCategorias() {
  return useQuery({
    queryKey: ['carteira', 'categorias'],
    queryFn: () => carteiraApi.getCategorias(),
  })
}

export function useEvolucao(meses: number = 12) {
  return useQuery({
    queryKey: ['carteira', 'evolucao', meses],
    queryFn: () => carteiraApi.getEvolucao(meses),
  })
}
```

### Página de Carteira

**`apps/client/src/app/(dashboard)/gestao/carteira/page.tsx`**
```typescript
'use client'

import { useState } from 'react'
import { useCarteira, useCarteiraStats } from '@/hooks/useCarteira'
import { CarteiraFilters } from '@/types/carteira'

export default function CarteiraPage() {
  const [filters, setFilters] = useState<CarteiraFilters>({
    page: 1,
    page_size: 20,
  })

  const { data: clientes, isLoading, error } = useCarteira(filters)
  const { data: stats } = useCarteiraStats()

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar dados</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Carteira de Clientes</h1>

      {/* Cards de estatísticas */}
      {stats && (
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-600">Total de Clientes</p>
            <p className="text-3xl font-bold">{stats.total_clientes}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-600">Ativos</p>
            <p className="text-3xl font-bold text-green-600">{stats.clientes_ativos}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-600">Novos (mês)</p>
            <p className="text-3xl font-bold text-blue-600">{stats.novos_mes}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-600">Perdidos (mês)</p>
            <p className="text-3xl font-bold text-red-600">{stats.perdidos_mes}</p>
          </div>
        </div>
      )}

      {/* Tabela de clientes */}
      <div className="bg-white rounded shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Razão Social</th>
              <th className="text-left p-4">CNPJ</th>
              <th className="text-left p-4">Regime Fiscal</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {clientes?.results.map((cliente) => (
              <tr key={cliente.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{cliente.razao_social}</td>
                <td className="p-4">{cliente.cnpj}</td>
                <td className="p-4 capitalize">{cliente.regime_fiscal}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      cliente.status_cliente === 'ativo'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {cliente.status_cliente}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

---

## 🧪 Testes

### Configuração do Jest

**`jest.config.js`**
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

### Teste da API de Autenticação

**`packages/shared/src/api/auth/__tests__/auth.api.test.ts`**
```typescript
import { authApi } from '../auth.api'
import apiClient from '../../client'

jest.mock('../../client')

describe('authApi', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  describe('login', () => {
    it('deve fazer login com sucesso', async () => {
      const mockTokens = { access: 'token123', refresh: 'refresh123' }
      const mockUser = { id: '1', username: 'test', email: 'test@test.com' }

      ;(apiClient.post as jest.Mock)
        .mockResolvedValueOnce({ data: mockTokens })
      ;(apiClient.get as jest.Mock)
        .mockResolvedValueOnce({ data: mockUser })

      const result = await authApi.login({ username: 'test', password: 'pass' })

      expect(result).toEqual({ ...mockTokens, user: mockUser })
      expect(localStorage.getItem('access_token')).toBe('token123')
      expect(localStorage.getItem('refresh_token')).toBe('refresh123')
    })

    it('deve lançar erro em caso de falha', async () => {
      ;(apiClient.post as jest.Mock).mockRejectedValueOnce(new Error('Unauthorized'))

      await expect(
        authApi.login({ username: 'test', password: 'wrong' })
      ).rejects.toThrow()
    })
  })
})
```

---

## 📝 Checklist de Implementação

### Bloco 1: Autenticação
- [ ] Criar `packages/shared/src/api/client.ts`
- [ ] Criar `packages/shared/src/api/types.ts`
- [ ] Criar `packages/shared/src/api/auth/auth.api.ts`
- [ ] Criar `packages/shared/src/api/auth/auth.types.ts`
- [ ] Criar `packages/shared/src/hooks/useAuth.ts`
- [ ] Criar middleware em `apps/admin/src/middleware.ts`
- [ ] Criar middleware em `apps/client/src/middleware.ts`
- [ ] Atualizar página de login admin
- [ ] Atualizar página de login client
- [ ] Escrever testes unitários
- [ ] Testar fluxo completo de login/logout
- [ ] Testar renovação automática de token
- [ ] Validar proteção de rotas

### Bloco 2: Carteira
- [ ] Criar types em `packages/shared/src/api/gestao/carteira.types.ts`
- [ ] Criar API em `packages/shared/src/api/gestao/carteira.api.ts`
- [ ] Criar hooks em `packages/shared/src/hooks/useCarteira.ts`
- [ ] Criar página em `apps/client/src/app/(dashboard)/gestao/carteira/page.tsx`
- [ ] Criar componentes de tabela e filtros
- [ ] Escrever testes unitários
- [ ] Testar com dados reais
- [ ] Validar filtros e paginação

---

## 🚀 Próximos Passos

1. **Implementar Bloco 1 (Auth)**: Começar pela autenticação
2. **Testar Completamente**: Garantir que tudo funciona antes de prosseguir
3. **Documentar Descobertas**: Atualizar este guia com aprendizados
4. **Seguir para Bloco 2**: Implementar carteira de clientes
5. **Repetir o Processo**: Para cada bloco subsequente

---

**Última Atualização**: 20/10/2025
