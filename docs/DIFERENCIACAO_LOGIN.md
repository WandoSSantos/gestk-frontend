# Diferenciação de Login - GESTK Monorepo

## 📋 Visão Geral

Este documento detalha as estratégias de diferenciação de login entre as aplicações **Admin** e **Client** no monorepo GESTK, garantindo experiências otimizadas para cada tipo de usuário.

## 🎯 Estratégias de Diferenciação

### **OPÇÃO A: Subdomínios** ⭐ **RECOMENDADA**

```
admin.gestk.com.br    → App administrativa
app.gestk.com.br      → App cliente
```

**Vantagens:**
- ✅ Separação clara de contextos
- ✅ Deploy independente
- ✅ Configuração de cookies específica
- ✅ SEO otimizado
- ✅ Facilita manutenção

### **OPÇÃO B: Rotas Diferentes**

```
gestk.com.br/admin    → App administrativa  
gestk.com.br/app      → App cliente
```

**Vantagens:**
- ✅ Simplicidade de configuração
- ✅ Mesmo domínio
- ✅ Compartilhamento de cookies

**Desvantagens:**
- ❌ URLs mais longas
- ❌ Menos flexibilidade de deploy

### **OPÇÃO C: Parâmetro de Contexto**

```
gestk.com.br/login?context=admin
gestk.com.br/login?context=client
```

**Vantagens:**
- ✅ Interface única
- ✅ Lógica centralizada

**Desvantagens:**
- ❌ Complexidade de roteamento
- ❌ Menos flexibilidade

## 🏗️ Implementação: Subdomínios (Recomendada)

### Estrutura de Arquivos

```
gestk-frontend/
├── apps/
│   ├── admin/                    # App administrativa
│   │   ├── src/app/(auth)/login/
│   │   └── vercel.json
│   └── client/                   # App cliente
│       ├── src/app/(auth)/login/
│       └── vercel.json
├── packages/
│   └── shared/
│       └── auth/
│           ├── AuthProvider.tsx
│           ├── useAuth.ts
│           └── types.ts
```

### Configuração de Deploy

#### Vercel Configuration

```json
// apps/admin/vercel.json
{
  "version": 2,
  "name": "gestk-admin",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "alias": ["admin.gestk.com.br"],
  "env": {
    "NEXT_PUBLIC_APP_CONTEXT": "admin"
  }
}
```

```json
// apps/client/vercel.json
{
  "version": 2,
  "name": "gestk-client",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "alias": ["app.gestk.com.br"],
  "env": {
    "NEXT_PUBLIC_APP_CONTEXT": "client"
  }
}
```

## 🔐 Sistema de Autenticação Unificado

### Context Provider Compartilhado

```typescript
// packages/shared/auth/AuthProvider.tsx
'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { apiClient } from '../api/client'
import { User, Contabilidade, LoginData } from '../types'
import { authService, LoginResponse } from '../api/services/auth.service'

type AppContext = 'admin' | 'client'

interface AuthContextType {
  user: User | null
  contabilidades: Contabilidade[]
  contabilidadeAtiva: Contabilidade | null
  appContext: AppContext
  login: (data: LoginData) => Promise<void>
  logout: () => void
  setContabilidadeAtiva: (contabilidade: Contabilidade) => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ 
  children, 
  appContext 
}: { 
  children: React.ReactNode
  appContext: AppContext 
}) {
  const [user, setUser] = useState<User | null>(null)
  const [contabilidades, setContabilidades] = useState<Contabilidade[]>([])
  const [contabilidadeAtiva, setContabilidadeAtiva] = useState<Contabilidade | null>(null)
  const [loading, setLoading] = useState(true)

  const login = async (data: LoginData) => {
    try {
      // Adicionar contexto ao payload
      const loginData = {
        ...data,
        app_context: appContext
      }
      
      const loginResponse: LoginResponse = await authService.login(loginData)
      
      // Validação específica por contexto
      if (appContext === 'admin' && !loginResponse.user.is_superuser) {
        throw new Error('Acesso negado. Apenas administradores podem acessar esta área.')
      }
      
      if (appContext === 'client' && loginResponse.user.is_superuser) {
        throw new Error('Administradores devem acessar a área administrativa.')
      }
      
      // Resto da lógica de login...
      const { access, refresh, user, vinculos } = loginResponse
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
        localStorage.setItem('app_context', appContext)
      }
      
      apiClient.defaults.headers.Authorization = `Bearer ${access}`
      setUser(user)
      
      // Carregar contabilidades baseado no contexto
      const contabilidades = await authService.getContabilidades(appContext)
      setContabilidades(contabilidades)
      
      if (contabilidades.length > 0) {
        setContabilidadeAtiva(contabilidades[0])
      }
      
    } catch (error) {
      console.error('Erro no login:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
    } catch {
      // Continuar com logout local
    }
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('app_context')
    }
    setUser(null)
    setContabilidades([])
    setContabilidadeAtiva(null)
  }

  const setContabilidadeAtivaHandler = (contabilidade: Contabilidade) => {
    setContabilidadeAtiva(contabilidade)
    if (typeof window !== 'undefined') {
      localStorage.setItem('contabilidade_ativa_id', contabilidade.id)
    }
  }

  useEffect(() => {
    // Verificar token existente
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token')
      const savedContext = localStorage.getItem('app_context')
      
      if (token && savedContext === appContext) {
        // Validar token e carregar dados
        authService.getUser()
          .then(response => {
            setUser(response)
            return authService.getContabilidades(appContext)
          })
          .then(response => {
            setContabilidades(response)
            if (response.length > 0) {
              setContabilidadeAtiva(response[0])
            }
          })
          .catch(() => {
            logout()
          })
          .finally(() => {
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [appContext])

  return (
    <AuthContext.Provider value={{
      user,
      contabilidades,
      contabilidadeAtiva,
      appContext,
      login,
      logout,
      setContabilidadeAtiva: setContabilidadeAtivaHandler,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
```

## 🎨 Páginas de Login Diferenciadas

### Admin Login

```typescript
// apps/admin/src/app/(auth)/login/page.tsx
'use client'

import { AuthProvider } from '@gestk/shared/auth'
import { AdminLoginForm } from '@/components/auth/AdminLoginForm'
import { Shield, ArrowRight } from 'lucide-react'

export default function AdminLoginPage() {
  return (
    <AuthProvider appContext="admin">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="flex min-h-screen">
          {/* Left Side - Login Form */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-white">
                  GESTK Admin
                </h2>
                <p className="mt-2 text-sm text-blue-100">
                  Área administrativa do sistema
                </p>
              </div>
              <AdminLoginForm />
            </div>
          </div>
          
          {/* Right Side - Admin Features */}
          <div className="hidden lg:flex lg:flex-1 bg-white/10 backdrop-blur-lg">
            <div className="p-12 space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                Recursos Administrativos
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Gestão de Contratos</h4>
                    <p className="text-blue-100 text-sm">Controle completo dos contratos GESTK</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Sistema de Billing</h4>
                    <p className="text-blue-100 text-sm">Gestão de planos e faturas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
```

### Client Login

```typescript
// apps/client/src/app/(auth)/login/page.tsx
'use client'

import { AuthProvider } from '@gestk/shared/auth'
import { ClientLoginForm } from '@/components/auth/ClientLoginForm'
import { Calculator, BarChart3, Users, FileText } from 'lucide-react'

export default function ClientLoginPage() {
  return (
    <AuthProvider appContext="client">
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="flex min-h-screen">
          {/* Left Side - Login Form */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  GESTK
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Sua plataforma de gestão contábil
                </p>
              </div>
              <ClientLoginForm />
            </div>
          </div>
          
          {/* Right Side - Client Features */}
          <div className="hidden lg:flex lg:flex-1 bg-white/10 backdrop-blur-lg">
            <div className="p-12 space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Módulos Disponíveis
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <BarChart3 className="h-8 w-8 text-green-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Dashboards</h4>
                  <p className="text-gray-600 text-sm">Visualizações interativas dos seus dados</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <Users className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gestão</h4>
                  <p className="text-gray-600 text-sm">Análise de carteira e clientes</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <FileText className="h-8 w-8 text-purple-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Relatórios</h4>
                  <p className="text-gray-600 text-sm">Relatórios detalhados e exportação</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <Calculator className="h-8 w-8 text-orange-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Contabilidade</h4>
                  <p className="text-gray-600 text-sm">Módulos contábeis completos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
```

## 🔧 Formulários de Login Específicos

### Admin Login Form

```typescript
// apps/admin/src/components/auth/AdminLoginForm.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@gestk/shared/auth'
import { useRouter } from 'next/navigation'
import { Button } from '@gestk/shared/ui/button'
import { Input } from '@gestk/shared/ui/input'
import { Shield, User, Lock, ArrowRight } from 'lucide-react'

const adminLoginSchema = z.object({
  username: z.string().min(1, 'Usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
})

type AdminLoginData = z.infer<typeof adminLoginSchema>

export function AdminLoginForm() {
  const { login, loading } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AdminLoginData>({
    resolver: zodResolver(adminLoginSchema)
  })

  const onSubmit = async (data: AdminLoginData) => {
    setError('')
    try {
      await login(data)
      router.push('/dashboard')
    } catch (error) {
      setError('Credenciais inválidas ou acesso negado')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Usuário Administrativo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              {...register('username')}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
              placeholder="Digite seu usuário"
            />
          </div>
          {errors.username && (
            <p className="text-red-300 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              {...register('password')}
              type="password"
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
              placeholder="Digite sua senha"
            />
          </div>
          {errors.password && (
            <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-colors"
      >
        {loading ? 'Entrando...' : 'Acessar Admin'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
```

### Client Login Form

```typescript
// apps/client/src/components/auth/ClientLoginForm.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@gestk/shared/auth'
import { useRouter } from 'next/navigation'
import { Button } from '@gestk/shared/ui/button'
import { Input } from '@gestk/shared/ui/input'
import { Calculator, User, Lock, ArrowRight } from 'lucide-react'

const clientLoginSchema = z.object({
  username: z.string().min(1, 'Usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
  contabilidade: z.string().min(1, 'Selecione uma contabilidade'),
})

type ClientLoginData = z.infer<typeof clientLoginSchema>

export function ClientLoginForm() {
  const { login, loading, contabilidades } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ClientLoginData>({
    resolver: zodResolver(clientLoginSchema)
  })

  const onSubmit = async (data: ClientLoginData) => {
    setError('')
    try {
      await login(data)
      router.push('/dashboard')
    } catch (error) {
      setError('Credenciais inválidas')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Usuário
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              {...register('username')}
              className="pl-10"
              placeholder="Digite seu usuário"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              {...register('password')}
              type="password"
              className="pl-10"
              placeholder="Digite sua senha"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contabilidade
          </label>
          <select
            {...register('contabilidade')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Selecione uma contabilidade</option>
            {contabilidades.map((cont) => (
              <option key={cont.id} value={cont.id}>
                {cont.razao_social}
              </option>
            ))}
          </select>
          {errors.contabilidade && (
            <p className="text-red-500 text-sm mt-1">{errors.contabilidade.message}</p>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {loading ? 'Entrando...' : 'Acessar Sistema'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
```

## 🔄 Middleware de Redirecionamento

### Middleware para Subdomínios

```typescript
// packages/shared/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Redirecionar baseado no subdomínio
  if (hostname.startsWith('admin.')) {
    if (pathname.startsWith('/admin')) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL(`/admin${pathname}`, request.url))
  }
  
  if (hostname.startsWith('app.')) {
    if (pathname.startsWith('/app')) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL(`/app${pathname}`, request.url))
  }
  
  // Redirecionar para app padrão
  return NextResponse.redirect(new URL('/app', request.url))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

## 🎨 Diferenciação Visual

### Tema Admin
```css
/* Cores administrativas */
:root {
  --primary: #3b82f6;      /* Azul corporativo */
  --secondary: #64748b;     /* Cinza */
  --accent: #1e40af;        /* Azul escuro */
  --background: #f8fafc;    /* Cinza claro */
  --foreground: #1e293b;    /* Cinza escuro */
}
```

### Tema Client
```css
/* Cores cliente */
:root {
  --primary: #10b981;       /* Verde contábil */
  --secondary: #6b7280;     /* Cinza claro */
  --accent: #059669;        /* Verde escuro */
  --background: #f0fdf4;    /* Verde muito claro */
  --foreground: #064e3b;    /* Verde escuro */
}
```

## 🔒 Segurança e Validação

### Validação de Contexto

```typescript
// packages/shared/auth/validation.ts
export function validateUserContext(user: User, appContext: AppContext): boolean {
  if (appContext === 'admin') {
    return user.is_superuser || user.tipo_usuario === 'admin'
  }
  
  if (appContext === 'client') {
    return !user.is_superuser && ['user', 'operacional'].includes(user.tipo_usuario)
  }
  
  return false
}
```

### Redirecionamento Automático

```typescript
// packages/shared/auth/useAuthRedirect.ts
export function useAuthRedirect() {
  const { user, appContext } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (user && !validateUserContext(user, appContext)) {
      // Redirecionar para o contexto correto
      if (user.is_superuser) {
        router.push('https://admin.gestk.com.br')
      } else {
        router.push('https://app.gestk.com.br')
      }
    }
  }, [user, appContext, router])
}
```

## 📊 Benefícios da Diferenciação

### Técnicos
- ✅ **Separação clara** de responsabilidades
- ✅ **Deploy independente** por contexto
- ✅ **Configuração específica** por app
- ✅ **Otimização** de performance

### Funcionais
- ✅ **UX otimizada** para cada tipo de usuário
- ✅ **Interface específica** para cada contexto
- ✅ **Fluxos de trabalho** diferenciados
- ✅ **Segurança** por contexto

### Estratégicos
- ✅ **Escalabilidade** para novos contextos
- ✅ **Manutenção simplificada**
- ✅ **Flexibilidade** de desenvolvimento
- ✅ **Base sólida** para expansão

---

**Documento criado em**: 07/10/2025  
**Versão**: 1.0  
**Próxima revisão**: 14/10/2025
