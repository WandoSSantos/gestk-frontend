# ✅ CORREÇÃO FINAL - Prefixo /api/ nas Rotas

**Data:** 2025-01-22  
**Status:** ✅ Corrigido corretamente

---

## 🎯 Arquitetura Correta

### BaseURL (sem /api)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Rotas (com /api/)
```typescript
// ✅ CORRETO
apiClient.get('/api/auth/me/')
apiClient.post('/api/auth/token/')
apiClient.get('/api/administracao/usuarios-acesso/')
apiClient.get('/api/gestao/contratos-gestk/')
```

### URL Final
```
http://localhost:8000 + /api/auth/token/
= http://localhost:8000/api/auth/token/ ✅
```

---

## ❌ O Que Estava Errado ANTES

### Tentativa 1 (INCORRETA)
```
BaseURL: http://localhost:8000/api
Rota: /auth/token/
Final: http://localhost:8000/api/auth/token/ ✅

PROBLEMA: Outras rotas sem /api ficariam erradas:
Rota: /health/
Final: http://localhost:8000/api/health/ ❌ (deveria ser /health/)
```

### Tentativa 2 (INCORRETA)
```
BaseURL: http://localhost:8000
Rota: /auth/token/ (sem /api/)
Final: http://localhost:8000/auth/token/ ❌

PROBLEMA: Falta o /api/ → 404 Not Found
```

---

## ✅ Solução Correta AGORA

### Configuração
```env
# .env.local (admin e client)
NEXT_PUBLIC_API_URL=http://localhost:8000  ← SEM /api
```

### Código (todas as rotas com /api/)
```typescript
// packages/shared/src/api/services/admin.service.ts
apiClient.get('/api/administracao/usuarios-acesso/')  ← COM /api/
apiClient.post('/api/administracao/contabilidades-admin/')

// packages/shared/src/api/services/client.service.ts  
apiClient.get('/api/gestao/usuarios/lista/')  ← COM /api/
apiClient.get('/api/gestao/contratos-gestk/')

// packages/shared/src/api/services/auth.service.ts
apiClient.post('/api/auth/token/')  ← COM /api/
apiClient.get('/api/auth/me/')
```

---

## 📋 Arquivos Corrigidos

### 1. `.env.local` (Client)
```diff
- NEXT_PUBLIC_API_URL=http://localhost:8000/api
+ NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 2. `admin.service.ts`
Todas as chamadas agora têm `/api/`:
```typescript
// ✅ Antes: '/administracao/...'
// ✅ Agora: '/api/administracao/...'
```

### 3. `client.service.ts`
Todas as chamadas agora têm `/api/`:
```typescript
// ✅ Antes: '/gestao/...'
// ✅ Agora: '/api/gestao/...'
```

### 4. `auth.service.ts`
Já estava correto com `/api/`:
```typescript
// ✅ '/api/auth/token/'
// ✅ '/api/auth/me/'
```

---

## 🧪 Como Testar

### 1. Verificar URLs no Network Tab (F12)

**Deve aparecer:**
```
✅ POST http://localhost:8000/api/auth/token/
✅ GET http://localhost:8000/api/auth/me/
✅ GET http://localhost:8000/api/administracao/usuarios-acesso/
✅ GET http://localhost:8000/api/gestao/contratos-gestk/
```

**NÃO deve aparecer:**
```
❌ POST http://localhost:8000/auth/token/ (sem /api/)
❌ POST http://localhost:8000/api/api/auth/token/ (duplicado)
```

### 2. Verificar Logs do Backend

**Deve aparecer:**
```
✅ POST /api/auth/token/ HTTP/1.1" 200
✅ GET /api/auth/me/ HTTP/1.1" 200
✅ GET /api/administracao/usuarios-acesso/ HTTP/1.1" 200
```

**NÃO deve aparecer:**
```
❌ Not Found: /auth/token/
❌ Not Found: /administracao/usuarios-acesso/
❌ Forbidden (CSRF): /auth/token/
```

---

## 📊 Resumo da Correção

### Problema Original (do Backend)
```
❌ Not Found: /administracao/contabilidades-admin/
❌ Not Found: /administracao/contratos-gestk/resumo/
❌ Forbidden (CSRF): /auth/token/
```

### Causa
Frontend chamando sem o prefixo `/api/`

### Solução
1. ✅ BaseURL: `http://localhost:8000` (sem /api)
2. ✅ Todas as rotas: `/api/...` (com /api)
3. ✅ URL final: `http://localhost:8000/api/...`

---

## ✅ Credenciais Atualizadas

### Admin Login
```
URL: http://localhost:3000/login
Username: wando
Password: gestk2025 ← SENHA NOVA
```

### Client Login
```
URL: http://localhost:3001/login
Username: wando
Password: gestk2025
```

---

## 🎯 Próximos Passos

### 1. Reiniciar Servers
```powershell
# Admin (porta 3000)
cd apps/admin; npm run dev

# Client (porta 3001)
cd apps/client; npm run dev
```

### 2. Testar Login
- [ ] Admin: http://localhost:3000/login
- [ ] Client: http://localhost:3001/login
- [ ] Username: `wando`
- [ ] Password: `gestk2025`

### 3. Verificar Network Tab (F12)
- [ ] Todas URLs têm `/api/`
- [ ] Status 200 (não 404)
- [ ] Sem erros CSRF

---

## ⚡ TL;DR

**BaseURL:** `http://localhost:8000` (SEM /api)  
**Rotas:** `/api/auth/token/` (COM /api/)  
**Senha nova:** `gestk2025`  
**Status:** ✅ Tudo corrigido!

---

**Arquivos modificados:**
- `apps/client/.env.local`
- `packages/shared/src/api/services/admin.service.ts`
- `packages/shared/src/api/services/client.service.ts`

**Pronto para teste!** 🚀
