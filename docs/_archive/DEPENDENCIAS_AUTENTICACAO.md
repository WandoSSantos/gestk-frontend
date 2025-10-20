# Dependências do Sistema de Autenticação

## 📦 Visão Geral das Dependências

### ✅ Dependências Instaladas e Seu Uso

#### 1. **Zustand** (v5.0.8)
**Instalação**: ✅ Instalado em `@gestk/shared`
**Uso**: Gerenciamento de estado global de autenticação

```typescript
// packages/shared/src/hooks/useAuth.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Hook de autenticação global
export const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      login: async (credentials) => { /* ... */ },
      logout: async () => { /* ... */ },
      // ...
    }),
    { name: 'auth-storage' } // Persiste no localStorage
  )
)
```

**Por que Zustand?**
- ✅ Mais leve que Redux (~1KB vs ~3KB)
- ✅ API simples e intuitiva
- ✅ Suporte nativo a TypeScript
- ✅ Middleware de persistência built-in
- ✅ Melhor performance (sem re-renders desnecessários)
- ✅ Não precisa de Provider no topo da aplicação

**Onde é usado:**
- `packages/shared/src/hooks/useAuth.ts` - Hook principal
- `apps/client/src/app/(auth)/login/page.tsx` - Página de login do client

---

#### 2. **Axios** (v1.12.2)
**Instalação**: ✅ Já estava instalado
**Uso**: Cliente HTTP para comunicação com a API

```typescript
// packages/shared/src/api/client.ts
import axios, { AxiosInstance } from 'axios'

export class ApiClient {
  private client: AxiosInstance
  
  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    })
    
    // Interceptors para adicionar token automaticamente
    this.setupInterceptors()
  }
  
  // Métodos HTTP
  async get<T>(url: string) { /* ... */ }
  async post<T>(url: string, data: any) { /* ... */ }
  // ...
}
```

**Por que Axios?**
- ✅ Interceptors para request/response (adiciona token automaticamente)
- ✅ Suporte a timeout e cancelamento
- ✅ Transformação automática de JSON
- ✅ Suporte a upload/download de arquivos
- ✅ Melhor tratamento de erros que fetch nativo
- ✅ Suporte a progress events

**Onde é usado:**
- `packages/shared/src/api/client.ts` - Cliente HTTP base
- `packages/shared/src/api/auth/auth.api.ts` - Endpoints de autenticação
- Todos os endpoints de API que criaremos nos próximos blocos

---

### 🔄 Fluxo de Autenticação com Zustand + Axios

```typescript
// 1. Usuário faz login na página
const { login } = useAuth()
await login({ username, password })

// ↓

// 2. Hook chama authApi
export const authApi = {
  async login(credentials) {
    // 3. authApi usa apiClient (Axios)
    const response = await apiClient.post('/auth/token/', credentials)
    
    // 4. Salva tokens
    apiClient.setAccessToken(response.access)
    
    return response
  }
}

// ↓

// 5. Zustand atualiza estado global
set({
  user: response.user,
  isAuthenticated: true,
  loading: false
})

// ↓

// 6. Estado persiste no localStorage (Zustand persist middleware)
// 7. Componentes React re-renderizam automaticamente
```

---

### 📊 Comparação: Por que não usar Context API?

#### Context API + useState (Admin App - Atual)
```typescript
// Precisa de Provider
<AuthProvider>
  <App />
</AuthProvider>

// Causa re-renders em toda a árvore
const AuthContext = createContext()

// Sem persistência nativa
useEffect(() => {
  const token = localStorage.getItem('token')
  // Lógica manual de hidratação
}, [])
```

**Problemas:**
- ❌ Re-renders desnecessários em componentes filhos
- ❌ Necessita Provider wrapper
- ❌ Persistência manual
- ❌ Mais boilerplate code
- ❌ Difícil de testar

#### Zustand (Client App - Novo)
```typescript
// Sem Provider necessário
export const useAuth = create(/* ... */)

// Uso direto em qualquer componente
const { user, login } = useAuth()

// Persistência automática
persist((set) => ({ /* ... */ }), { name: 'auth' })
```

**Vantagens:**
- ✅ Zero re-renders desnecessários
- ✅ Sem Provider
- ✅ Persistência automática
- ✅ Menos código
- ✅ Fácil de testar
- ✅ TypeScript first-class support

---

### 🎯 Decisão Arquitetural

#### Admin App (Mantido com Context API)
**Por quê?**
- Já está funcionando
- Tem lógica específica de multi-tenancy
- Não quebrar código existente
- Permite migração gradual

#### Client App (Novo com Zustand)
**Por quê?**
- Aplicação mais simples
- Melhor performance
- State management moderno
- Base para futuras features

---

### 📦 Dependências Completas

```json
// packages/shared/package.json
{
  "dependencies": {
    "axios": "^1.12.2",      // ✅ HTTP client
    "zustand": "^5.0.8",     // ✅ State management
    "zod": "^4.1.12",        // ✅ Validação de schemas
    "date-fns": "^4.1.0",    // ✅ Manipulação de datas
    "clsx": "^2.1.1",        // ✅ Utility de classes CSS
    "tailwind-merge": "^3.3.1" // ✅ Merge de classes Tailwind
  }
}
```

---

### 🔐 Segurança

#### Tokens no localStorage
```typescript
// Zustand persist salva no localStorage
persist(
  (set) => ({ user, isAuthenticated }),
  { name: 'auth-storage' }
)
```

**⚠️ Considerações de Segurança:**
- localStorage é vulnerável a XSS
- **Recomendação futura**: Migrar para httpOnly cookies
- Por enquanto: Adequado para desenvolvimento
- Produção: Implementar CSP (Content Security Policy)

#### Headers de Autenticação
```typescript
// Axios adiciona automaticamente
this.client.interceptors.request.use((config) => {
  const token = this.getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
```

---

### 🧪 Testes

#### Testar Zustand Hook
```typescript
import { renderHook, act } from '@testing-library/react'
import { useAuth } from '@gestk/shared'

describe('useAuth', () => {
  it('deve fazer login com sucesso', async () => {
    const { result } = renderHook(() => useAuth())
    
    await act(async () => {
      await result.current.login({
        username: 'test@test.com',
        password: 'senha123'
      })
    })
    
    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.user).not.toBeNull()
  })
})
```

#### Testar Axios Client
```typescript
import { apiClient } from '@gestk/shared'
import MockAdapter from 'axios-mock-adapter'

describe('apiClient', () => {
  const mock = new MockAdapter(apiClient.client)
  
  it('deve adicionar token no header', async () => {
    mock.onGet('/test').reply((config) => {
      expect(config.headers.Authorization).toBe('Bearer token123')
      return [200, { data: 'success' }]
    })
    
    apiClient.setAccessToken('token123')
    await apiClient.get('/test')
  })
})
```

---

### 📚 Documentação das Libs

#### Zustand
- **Docs**: https://zustand-demo.pmnd.rs/
- **GitHub**: https://github.com/pmndrs/zustand
- **Bundle Size**: ~1KB gzipped
- **TypeScript**: Native support

#### Axios
- **Docs**: https://axios-http.com/
- **GitHub**: https://github.com/axios/axios
- **Bundle Size**: ~13KB gzipped
- **TypeScript**: @types/axios

---

### ✅ Resumo

| Dependência | Versão | Uso | Status |
|-------------|--------|-----|--------|
| **zustand** | 5.0.8 | State management global | ✅ Instalado |
| **axios** | 1.12.2 | HTTP client | ✅ Já existia |
| **zod** | 4.1.12 | Validação de schemas | ✅ Já existia |

**Todas as dependências necessárias estão instaladas e funcionando!** 🎉

---

### 🚀 Próximos Passos

1. **Validar tudo funciona**: Fazer login no client app
2. **Criar testes**: Testar useAuth e authApi
3. **Bloco 2**: Usar mesma estrutura (Zustand + Axios) para Carteira de Clientes

---

**Última Atualização**: 20/10/2025 14:15
