# 🔍 DEBUG - Login Client

## 🎯 Logs Adicionados

Adicionei logs detalhados em 3 pontos:

### 1. `auth.api.ts` (API Layer)
```typescript
🔵 authApi.login - Iniciando login
🟢 authApi.login - Resposta recebida
🟡 authApi.login - Contabilidade armazenada
✅ authApi.login - Login concluído
🔴 authApi.login - Erro no login
```

### 2. `useAuth.ts` (Hook)
```typescript
🔵 useAuth.login - Iniciando
🟢 useAuth.login - Resposta da API recebida
✅ useAuth.login - Estado atualizado
🔴 useAuth.login - Erro capturado
```

### 3. `login/page.tsx` (Component)
```typescript
🚀 Login Cliente
❌ Erro no login
```

---

## 🧪 Como Testar

### 1. Abra o Console (F12)
```
http://localhost:3001/login
```

### 2. Faça Login
```
Username: wando
Password: gestk2025
```

### 3. Verifique os Logs

**Se funcionar (200):**
```
🔵 authApi.login - Iniciando login
🟢 authApi.login - Resposta recebida: { hasAccess: true, hasUser: true, ... }
✅ authApi.login - Login concluído
🔵 useAuth.login - Iniciando
🟢 useAuth.login - Resposta da API recebida
✅ useAuth.login - Estado atualizado
```

**Se falhar:**
```
🔵 authApi.login - Iniciando login
🔴 authApi.login - Erro no login: [detalhes do erro]
🔴 useAuth.login - Erro capturado
🔴 useAuth.login - Mensagem de erro: [mensagem]
```

---

## 📊 Diagnóstico

### Backend diz 200 mas Frontend mostra erro

**Possíveis causas:**

#### 1. Formato da Resposta Incorreto
Backend retorna 200 mas o JSON não tem os campos esperados:
```json
❌ Resposta sem campos necessários:
{
  "token": "abc123"  // Faltam: access, refresh, user
}

✅ Resposta correta:
{
  "access": "eyJ0eXAi...",
  "refresh": "eyJ0eXAi...",
  "user": {
    "id": "...",
    "username": "wando",
    "email": "juridico@office-ce.com.br"
  }
}
```

#### 2. CORS Headers Faltando
Backend retorna 200 mas browser bloqueia por CORS:
```
Console mostraria:
❌ CORS policy: No 'Access-Control-Allow-Origin' header
```

#### 3. Response Interceptor com Erro
ApiClient interceptor pode estar modificando/quebrando a resposta:
```typescript
// Verifique em packages/shared/src/api/client.ts
response.interceptors.response.use(...)
```

#### 4. Parsing JSON Falhando
Resposta não é JSON válido:
```
Backend retorna: "OK" (string)
Frontend espera: { access, refresh, user } (JSON)
```

---

## 🔧 Próximos Passos

### Passo 1: Verificar Console
Olhe os logs coloridos no console e me informe:
- Qual é a última mensagem azul 🔵?
- Aparece alguma mensagem verde 🟢?
- Qual erro vermelho 🔴 aparece?

### Passo 2: Verificar Network Tab
1. F12 → Network
2. Faça login
3. Click em `token/`
4. Veja a **Response** (aba Response)
5. Copie o JSON completo

### Passo 3: Verificar Backend Terminal
Confirme que aparece:
```
POST /api/auth/token/ HTTP/1.1" 200
```

---

## 📋 Checklist de Debug

- [ ] Console mostra `🔵 authApi.login - Iniciando`?
- [ ] Console mostra `🟢 authApi.login - Resposta recebida`?
- [ ] Console mostra `✅ authApi.login - Login concluído`?
- [ ] Console mostra erro `🔴`? Qual?
- [ ] Network tab mostra Status 200?
- [ ] Network tab → Response tem `access`, `refresh`, `user`?
- [ ] Backend terminal mostra `200`?

---

## ⚡ Teste Agora

1. **Acesse:** http://localhost:3001/login
2. **Abra F12** → Console
3. **Faça login:** wando / gestk2025
4. **Copie todos os logs** do console
5. **Me envie** para análise

---

**Status:** 🔍 Logs adicionados, aguardando teste
