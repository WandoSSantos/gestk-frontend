# 🔐 Diagnóstico e Solução - Login Client

**Data:** 2025-01-22  
**Issue:** Login no app client com superuser não funciona  
**Credenciais testadas:** `juridico@office-ce.com.br` / `H33tsupa!`

---

## 📊 Status da Implementação

### ✅ Endpoint de Login Implementado

**Endpoint:** `POST /api/auth/token/`

**Localização:** 
- `packages/shared/src/api/auth/auth.api.ts` (linha 13)
- `packages/shared/src/api/services/auth.service.ts` (linha 14)

**Código:**
```typescript
// auth.api.ts
async login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>('/auth/token/', credentials)
  apiClient.setAccessToken(response.access)
  apiClient.setRefreshToken(response.refresh)
  return response
}

// auth.service.ts
async login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>('/api/auth/token/', credentials);
  apiClient.setAccessToken(response.access);
  apiClient.setRefreshToken(response.refresh);
  return response;
}
```

### ✅ Página de Login Client Existe

**Localização:** `apps/client/src/app/(auth)/login/page.tsx`

**Features:**
- ✅ Form validation com Zod
- ✅ Show/hide password
- ✅ Hook `useAuth` integrado
- ✅ Redirect automático se autenticado
- ✅ Error handling
- ✅ Loading state

---

## 🔍 Possíveis Causas do Problema

### 1. **Servidor Client Não Está Rodando** ⚠️

**Verificação:**
O terminal mostra apenas o **admin** rodando na porta 3000:
```
npm run dev --workspace=apps/admin
Local: http://localhost:3000  # ← App ADMIN
```

**O app CLIENT não está rodando!**

### 2. **URL do Backend Incorreta** ⚠️

**Warning no log:**
```
⚠️ Variável de ambiente API_URL não encontrada, usando valor padrão
```

A variável `API_URL` não está configurada, então pode estar usando URL incorreta.

### 3. **Diferença de Path entre APIs** ⚠️

Existem **duas implementações diferentes** do login:

**1. `auth.api.ts`** (sem `/api`):
```typescript
apiClient.post<LoginResponse>('/auth/token/', credentials)
```

**2. `auth.service.ts`** (com `/api`):
```typescript
apiClient.post<LoginResponse>('/api/auth/token/', credentials)
```

**Qual está sendo usado?** Depende de onde o `useAuth` importa.

---

## 🚀 Soluções

### Solução 1: Iniciar App Client

**Abra um NOVO terminal** e rode:

```powershell
cd C:\Users\ADM\Desktop\Projects\Administracao_Gestk_Front\gestk-frontend

# Iniciar app client na porta 3001
npm run dev --workspace=apps/client -- --port 3001
```

Depois acesse: `http://localhost:3001/login`

---

### Solução 2: Configurar Variável de Ambiente

**Criar arquivo `.env.local` no app client:**

```powershell
# Caminho: apps/client/.env.local
New-Item -Path "apps/client/.env.local" -ItemType File -Force
```

**Adicionar conteúdo:**
```env
# Backend API
API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api

# App Context
NEXT_PUBLIC_APP_CONTEXT=client
```

---

### Solução 3: Padronizar Path das APIs

Verificar qual implementação o `useAuth` está usando e garantir consistência.

---

## 🧪 Teste de Login via Terminal

Para testar o endpoint diretamente:

```powershell
# Teste 1: Com /api
curl -X POST https://api.gestk.com.br/api/auth/token/ `
  -H "Content-Type: application/json" `
  -d '{\"username\":\"juridico@office-ce.com.br\",\"password\":\"H33tsupa!\",\"app_context\":\"client\"}'

# Teste 2: Sem /api
curl -X POST https://api.gestk.com.br/auth/token/ `
  -H "Content-Type: application/json" `
  -d '{\"username\":\"juridico@office-ce.com.br\",\"password\":\"H33tsupa!\",\"app_context\":\"client\"}'
```

---

## 📋 Checklist de Diagnóstico

### Verificar Backend
- [ ] Endpoint `/api/auth/token/` está funcionando?
- [ ] Backend aceita `app_context: 'client'`?
- [ ] Usuário `juridico@office-ce.com.br` existe na tabela `core_usuarios`?
- [ ] Senha está correta no banco?
- [ ] CORS permite requests do frontend?

### Verificar Frontend
- [ ] App client está rodando? (porta 3001)
- [ ] `.env.local` configurado com `API_URL` correto?
- [ ] Console do browser mostra erro ao fazer login?
- [ ] Network tab mostra request POST para `/auth/token/`?
- [ ] Request está indo para URL correta?

### Verificar Autenticação
- [ ] `useAuth` hook está usando qual API? (`auth.api.ts` ou `auth.service.ts`)
- [ ] Path do endpoint está correto? (`/auth/token/` vs `/api/auth/token/`)
- [ ] Headers incluem `Content-Type: application/json`?
- [ ] Response status é 200 ou 401/403?

---

## 🔧 Comandos de Diagnóstico

### 1. Iniciar Client App
```powershell
# Terminal 2 (novo)
cd C:\Users\ADM\Desktop\Projects\Administracao_Gestk_Front\gestk-frontend
npm run dev --workspace=apps/client -- --port 3001
```

### 2. Verificar Variáveis de Ambiente
```powershell
# Ver conteúdo de .env.local
Get-Content apps/client/.env.local

# Se não existir, criar
@"
API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_APP_CONTEXT=client
"@ | Out-File -FilePath "apps/client/.env.local" -Encoding UTF8
```

### 3. Testar Endpoint Backend
```powershell
# Usando Invoke-RestMethod (PowerShell)
$body = @{
    username = "juridico@office-ce.com.br"
    password = "H33tsupa!"
    app_context = "client"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.gestk.com.br/api/auth/token/" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
```

---

## 🎯 Próximos Passos

### Passo 1: Iniciar Client App
Execute em um novo terminal:
```powershell
npm run dev --workspace=apps/client -- --port 3001
```

### Passo 2: Abrir Browser e Testar
1. Acesse: `http://localhost:3001/login`
2. Preencha:
   - **Email:** `juridico@office-ce.com.br`
   - **Senha:** `H33tsupa!`
3. Clique em "Entrar"

### Passo 3: Verificar Console (F12)
Se falhar, abra DevTools (F12) e verifique:
- **Console tab:** Erros JavaScript
- **Network tab:** Request POST para `/auth/token/`
  - Status code?
  - Request URL?
  - Response body?

### Passo 4: Reportar Resultados
Me informe:
- ✅ Login funcionou?
- ❌ Erro específico (copie mensagem)?
- 🔍 URL do request (Network tab)?
- 📊 Status code da resposta?

---

## 📚 Referências de Código

### Hook useAuth
**Arquivo:** `packages/shared/src/hooks/useAuth.ts`
```typescript
login: async (credentials: LoginRequest) => {
  try {
    const response = await authApi.login(credentials)
    setUser(response.user)
    setIsAuthenticated(true)
  } catch (error) {
    setError('Credenciais inválidas')
  }
}
```

### API Client Base URL
**Arquivo:** `packages/shared/src/api/client.ts`
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 
                     process.env.API_URL || 
                     'https://api.gestk.com.br/api'
```

### Login Types
**Arquivo:** `packages/shared/src/api/types.ts`
```typescript
interface LoginRequest {
  username: string
  password: string
  app_context?: 'admin' | 'client'
}

interface LoginResponse {
  access: string
  refresh: string
  user: User
  vinculos: Array<{
    contabilidade_id: string
    role: string
  }>
}
```

---

## ⚡ TL;DR (Solução Rápida)

```powershell
# 1. Criar .env.local para client
@"
API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_APP_CONTEXT=client
"@ | Out-File -FilePath "apps/client/.env.local" -Encoding UTF8

# 2. Iniciar client app (novo terminal)
npm run dev --workspace=apps/client -- --port 3001

# 3. Acessar no browser
start http://localhost:3001/login
```

Depois teste com as credenciais e me avise o resultado! 🚀

---

**Status:** ✅ **CLIENT APP RODANDO COM SUCESSO!**

## ✅ Status Atual

### Servidor Client
- **Status:** ✅ RODANDO
- **URL Local:** http://localhost:3001
- **URL Rede:** http://192.168.1.195:3001
- **API Configurada:** https://api.gestk.com.br/api
- **Tempo de inicialização:** ~1.1s

### Variáveis de Ambiente Configuradas
```env
NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api
NEXT_PUBLIC_API_TIMEOUT=30000
NEXT_PUBLIC_DEBUG_MODE=true
NEXT_PUBLIC_APP_CONTEXT=client
```

---

## 🎯 TESTE AGORA

### 1. Abrir Página de Login
**URL:** http://localhost:3001/login

### 2. Preencher Credenciais
- **Email:** juridico@office-ce.com.br
- **Senha:** H33tsupa!

### 3. Clicar em "Entrar"

### 4. Verificar Resultado
**Se funcionar:** ✅ Redirecionará para `/dashboard`

**Se falhar:** ❌ Verificar console (F12):
- **Console tab:** Ver erros JavaScript
- **Network tab:** Ver request POST `/auth/token/`
  - URL completa do request
  - Status code (200, 401, 403, 500?)
  - Response body (mensagem de erro)

---

## 🔍 Endpoints que Serão Chamados

### 1. Login
```
POST https://api.gestk.com.br/api/auth/token/
Body: {
  "username": "juridico@office-ce.com.br",
  "password": "H33tsupa!",
  "app_context": "client"
}
```

### 2. Se login OK → Buscar usuário
```
GET https://api.gestk.com.br/api/auth/me/
Headers: {
  "Authorization": "Bearer <access_token>"
}
```

---

## 📊 Possíveis Erros e Soluções

### Erro 1: 401 Unauthorized
**Causa:** Credenciais inválidas
**Solução:** Verificar se usuário existe no banco `core_usuarios` com essa senha

### Erro 2: 403 Forbidden
**Causa:** Usuário não tem permissão para acessar client
**Solução:** Verificar campo `tipo_usuario` ou `is_active` no banco

### Erro 3: 500 Internal Server Error
**Causa:** Erro no backend
**Solução:** Verificar logs do servidor Django

### Erro 4: CORS Error
**Causa:** Backend não permite requests de localhost:3001
**Solução:** Adicionar `localhost:3001` no CORS do backend

### Erro 5: Network Error / Cannot reach server
**Causa:** Backend offline ou URL incorreta
**Solução:** Testar endpoint direto:
```powershell
curl https://api.gestk.com.br/api/auth/token/ -v
```

---

## 🛠️ Debug Avançado

### Verificar Token JWT
Se login funcionar, verificar token armazenado:
```javascript
// No console do browser (F12)
localStorage.getItem('auth-storage')
```

### Verificar Headers do Request
Network tab → Click no request POST → Headers → Request Headers:
- `Content-Type: application/json` ✅
- `X-App-Context: client` ✅

### Verificar Payload do Request
Network tab → Click no request POST → Payload:
```json
{
  "username": "juridico@office-ce.com.br",
  "password": "H33tsupa!",
  "app_context": "client"
}
```

---

## 📞 Próximos Passos

1. **Acesse:** http://localhost:3001/login
2. **Teste login** com as credenciais
3. **Reporte o resultado:**
   - ✅ Funcionou? → Parabéns!
   - ❌ Erro? → Copie mensagem do console/network

---

**Terminal ID Client:** `aeb4e7aa-d8b0-4333-bf40-8bbf87cb4140`  
**Comando para parar:** `Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process -Force`


