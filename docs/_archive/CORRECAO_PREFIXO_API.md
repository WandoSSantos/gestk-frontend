# ✅ CORREÇÃO URGENTE - Prefixo /api nos Endpoints

**Data:** 2025-01-22  
**Problema:** Frontend não estava adicionando `/api/` nos endpoints  
**Status:** ✅ CORRIGIDO

---

## 🔍 Problema Identificado

### Backend Espera
```
POST http://localhost:8000/api/auth/token/
GET  http://localhost:8000/api/administracao/contabilidades-admin/
```

### Frontend Estava Chamando (ERRADO)
```
POST http://localhost:8000/auth/token/            ❌ 404 Not Found
GET  http://localhost:8000/administracao/contabilidades-admin/  ❌ 404 Not Found
```

---

## ✅ Solução Aplicada

### 1. Atualizado `.env.local` nos Dois Apps

**Admin (`apps/admin/.env.local`):**
```env
# ANTES
NEXT_PUBLIC_API_URL=http://localhost:8000

# DEPOIS ✅
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

**Client (`apps/client/.env.local`):**
```env
# ANTES
NEXT_PUBLIC_API_URL=http://localhost:8000

# DEPOIS ✅
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 2. Como Funciona Agora

**ApiClient Base URL:**
```typescript
// packages/shared/src/api/client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

// Axios instance
axios.create({
  baseURL: 'http://localhost:8000/api'  // ← /api já incluído
})
```

**Chamadas de API:**
```typescript
// auth.api.ts
apiClient.post('/auth/token/', credentials)
// Resultado: POST http://localhost:8000/api/auth/token/ ✅

// contabilidades.api.ts  
apiClient.get('/administracao/contabilidades-admin/')
// Resultado: GET http://localhost:8000/api/administracao/contabilidades-admin/ ✅
```

---

## ⚠️ Inconsistências Encontradas

Alguns arquivos já tinham `/api/` hardcoded:

### Com `/api/` Duplicado (Precisa Correção)
```typescript
// client.service.ts - LINHA 15
apiClient.get('/api/gestao/carteira/clientes/')  // ❌ Vai virar /api/api/gestao...

// auth.service.ts - LINHA 14
apiClient.post('/api/auth/token/', credentials)  // ❌ Vai virar /api/api/auth...
```

### Sem `/api/` (Correto)
```typescript
// auth.api.ts - LINHA 13
apiClient.post('/auth/token/', credentials)  // ✅ Vira /api/auth/token/

// contabilidades.api.ts
apiClient.get('/administracao/contabilidades-admin/')  // ✅ Vira /api/administracao/...
```

---

## 🔧 Correções Necessárias

### Arquivos que Precisam Remover `/api/`:

**1. `packages/shared/src/api/services/auth.service.ts`**
```typescript
// LINHAS 14, 29, 48, 64
// ANTES ❌
apiClient.post('/api/auth/token/', credentials)
apiClient.post('/api/auth/logout/')
apiClient.post('/api/auth/token/refresh/', {...})
apiClient.post('/api/auth/select-contabilidade/', {...})

// DEPOIS ✅
apiClient.post('/auth/token/', credentials)
apiClient.post('/auth/logout/')
apiClient.post('/auth/token/refresh/', {...})
apiClient.post('/auth/select-contabilidade/', {...})
```

**2. `packages/shared/src/api/services/client.service.ts`**
```typescript
// TODAS as linhas com /api/gestao, /api/dashboards
// ANTES ❌
apiClient.get('/api/gestao/carteira/clientes/', ...)
apiClient.get('/api/dashboards/demografico/', ...)

// DEPOIS ✅
apiClient.get('/gestao/carteira/clientes/', ...)
apiClient.get('/dashboards/demografico/', ...)
```

**3. `packages/shared/src/api/services/admin.service.ts`**
```typescript
// TODAS as linhas com /api/administracao
// ANTES ❌
apiClient.get('/api/administracao/usuarios-acesso/', ...)

// DEPOIS ✅
apiClient.get('/administracao/usuarios-acesso/', ...)
```

---

## 📋 Arquivos Já Corretos (Não Mexer)

✅ `packages/shared/src/api/auth/auth.api.ts` - SEM /api/  
✅ `packages/shared/src/api/admin/usuarios-acesso.api.ts` - SEM /api/  
✅ `packages/shared/src/api/admin/contabilidades.api.ts` - SEM /api/

---

## 🎯 Padrão Correto

### REGRA: NUNCA colocar `/api/` no código

**Base URL já tem `/api/`:**
```typescript
baseURL: 'http://localhost:8000/api'
```

**Endpoints SEM `/api/`:**
```typescript
// ✅ CORRETO
apiClient.post('/auth/token/', ...)           → /api/auth/token/
apiClient.get('/administracao/usuarios/', ...) → /api/administracao/usuarios/
apiClient.get('/gestao/clientes/', ...)        → /api/gestao/clientes/
apiClient.get('/billing/faturas/', ...)        → /api/billing/faturas/
```

**Endpoints COM `/api/` (ERRADO):**
```typescript
// ❌ ERRADO - Vai duplicar
apiClient.post('/api/auth/token/', ...)  → /api/api/auth/token/ (404!)
```

---

## 🚀 Testes Necessários

### 1. Reiniciar Servidores
```powershell
# Parar tudo
Get-NetTCPConnection -LocalPort 3000,3001 | ForEach-Object { 
  Stop-Process -Id $_.OwningProcess -Force 
}

# Iniciar Admin
cd apps/admin; npm run dev

# Iniciar Client (novo terminal)
cd apps/client; npm run dev
```

### 2. Testar Login
```
http://localhost:3000/admin/login
Username: wando
Password: gestk2025
```

### 3. Verificar Network (F12)
```
✅ POST http://localhost:8000/api/auth/token/
✅ GET  http://localhost:8000/api/auth/me/
✅ GET  http://localhost:8000/api/administracao/contabilidades-admin/resumo/

❌ NÃO DEVE TER:
POST http://localhost:8000/api/api/auth/token/  (duplicado!)
GET  http://localhost:8000/auth/token/  (sem /api!)
```

---

## 📝 Credenciais Atualizadas

### Superuser (Admin App)
```
Username: wando
Email: juridico@office-ce.com.br
Password: gestk2025  ← SENHA NOVA!
URL: http://localhost:3000/admin/login
```

### Admin Contabilidade (Client App)
```
Username: admin_contabilidade
Email: admin@silvaassociados.com.br
Password: (verificar com backend)
URL: http://localhost:3001/login
```

---

## ⚡ Próximos Passos

1. [ ] Remover `/api/` de `auth.service.ts`
2. [ ] Remover `/api/` de `client.service.ts`
3. [ ] Remover `/api/` de `admin.service.ts`
4. [ ] Reiniciar servidores
5. [ ] Testar login com `wando / gestk2025`
6. [ ] Verificar Network tab (F12)
7. [ ] Confirmar endpoints corretos

---

**Status:** ⚠️ `.env.local` corrigido | ⏳ Aguardando correção nos services  
**Prioridade:** 🔴 ALTA - Bloqueando login
