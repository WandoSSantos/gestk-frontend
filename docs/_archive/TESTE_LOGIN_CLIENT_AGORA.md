# 🚀 TESTE DE LOGIN CLIENT - PRONTO!

## ✅ Servidor Iniciado com Sucesso

**App Client está rodando em:**
- 🌐 **Local:** http://localhost:3001
- 🌍 **Rede:** http://192.168.1.195:3001

**API Configurada:**
- 🔗 **Backend:** https://api.gestk.com.br/api
- ⏱️ **Timeout:** 30 segundos
- 🐛 **Debug Mode:** Ativo

---

## 🎯 TESTE AGORA - PASSO A PASSO

### 1️⃣ Abrir Página de Login
Clique aqui ou copie no navegador:
```
http://localhost:3001/login
```

### 2️⃣ Preencher Credenciais
```
📧 Email:    juridico@office-ce.com.br
🔒 Senha:    H33tsupa!
```

### 3️⃣ Clicar em "Entrar"

### 4️⃣ Resultado Esperado
**✅ Sucesso:**
- Redireciona para `/dashboard`
- Mostra dados do usuário
- Dashboard carrega normalmente

**❌ Se falhar:**
Pressione `F12` e verifique:

**Console (aba Console):**
```javascript
// Procure por erros em vermelho
❌ Error: Failed to login
❌ Network Error
❌ 401 Unauthorized
```

**Network (aba Network):**
1. Procure request `POST token/`
2. Clique nele
3. Verifique:
   - **Status:** 200? 401? 500?
   - **Response:** Mensagem de erro?
   - **Headers → Request URL:** URL correta?

---

## 🔍 O Que o Frontend Vai Fazer

### Passo 1: Login Request
```http
POST https://api.gestk.com.br/api/auth/token/
Content-Type: application/json

{
  "username": "juridico@office-ce.com.br",
  "password": "H33tsupa!",
  "app_context": "client"
}
```

### Passo 2: Se Login OK (Status 200)
```http
Response:
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": "uuid",
    "username": "juridico",
    "email": "juridico@office-ce.com.br",
    "first_name": "Juridico",
    "last_name": "Office",
    "is_superuser": true,
    ...
  },
  "vinculos": []
}
```

### Passo 3: Armazenar Token
```javascript
localStorage.setItem('auth-storage', JSON.stringify({
  state: {
    user: {...},
    isAuthenticated: true,
    access: "eyJ0eXAi...",
    refresh: "eyJ0eXAi..."
  }
}))
```

### Passo 4: Redirecionar
```javascript
router.push('/dashboard')
```

---

## ❌ Possíveis Erros e Como Resolver

### Erro 1: 401 Unauthorized
```
Mensagem: "Invalid credentials" ou "Credenciais inválidas"
```
**Causa:** Email ou senha incorretos
**Soluções:**
1. Verificar se usuário existe no banco `core_usuarios`
2. Verificar senha no Django admin
3. Testar com outro usuário conhecido

---

### Erro 2: 403 Forbidden
```
Mensagem: "User does not have permission"
```
**Causa:** Usuário existe mas não tem permissão para client
**Soluções:**
1. Verificar campo `is_active = true` no banco
2. Verificar campo `tipo_usuario` permite acesso client
3. Verificar se não está bloqueado

---

### Erro 3: 500 Internal Server Error
```
Mensagem: "Internal Server Error"
```
**Causa:** Erro no código backend
**Soluções:**
1. Ver logs do servidor Django
2. Verificar se banco está acessível
3. Verificar se migrations estão aplicadas

---

### Erro 4: CORS Policy Error
```
Mensagem: "blocked by CORS policy"
```
**Causa:** Backend não permite requests de localhost:3001
**Soluções:**
```python
# settings.py do Django
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Admin
    "http://localhost:3001",  # Client ← ADICIONAR
    "http://localhost:3002",
]
```

---

### Erro 5: Network Error
```
Mensagem: "Network Error" ou "Failed to fetch"
```
**Causa:** Não consegue alcançar o servidor
**Soluções:**
1. Verificar se backend está online:
   ```powershell
   curl https://api.gestk.com.br/api/auth/token/ -v
   ```
2. Verificar internet
3. Verificar firewall

---

## 🧪 Teste Manual do Backend

Se quiser testar o backend diretamente sem o frontend:

```powershell
# PowerShell
$body = @{
    username = "juridico@office-ce.com.br"
    password = "H33tsupa!"
    app_context = "client"
} | ConvertTo-Json

$response = Invoke-RestMethod `
    -Uri "https://api.gestk.com.br/api/auth/token/" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body

# Ver resposta
$response | ConvertTo-Json -Depth 10
```

**Resposta esperada:**
```json
{
  "access": "token...",
  "refresh": "token...",
  "user": {
    "id": "...",
    "email": "juridico@office-ce.com.br",
    ...
  }
}
```

---

## 📋 Checklist de Verificação

### Backend (Para Time Backend)
- [ ] Endpoint `/api/auth/token/` está funcionando?
- [ ] CORS permite `localhost:3001`?
- [ ] Usuário `juridico@office-ce.com.br` existe em `core_usuarios`?
- [ ] Senha está correta no banco?
- [ ] Campo `is_active = true`?
- [ ] Campo `tipo_usuario` permite acesso?

### Frontend (Já Verificado ✅)
- [x] App client rodando na porta 3001
- [x] `.env.local` configurado com API URL
- [x] `NEXT_PUBLIC_API_URL` apontando para produção
- [x] Hook `useAuth` implementado
- [x] Página de login existe e está funcional
- [x] Form validation configurado

---

## 🎯 Resultado do Teste

**Por favor, após testar, me informe:**

### Se Funcionou ✅
- Login bem-sucedido?
- Redirecionou para dashboard?
- Dados do usuário aparecem?

### Se Falhou ❌
Copie e envie:
1. **Mensagem de erro** (Console do browser)
2. **Status code** (Network tab → Status)
3. **Request URL** (Network tab → Headers)
4. **Response body** (Network tab → Response)

**Exemplo:**
```
❌ Status: 401
URL: https://api.gestk.com.br/api/auth/token/
Response: {"detail": "Invalid credentials"}
```

---

## 🛠️ Comandos Úteis

### Parar Client App
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process -Force
```

### Reiniciar Client App
```powershell
cd apps/client; npm run dev
```

### Ver Logs do Terminal
```powershell
# Terminal ID: aeb4e7aa-d8b0-4333-bf40-8bbf87cb4140
```

---

## 📚 Arquivos Envolvidos

### Frontend
- `apps/client/.env.local` - Variáveis de ambiente
- `apps/client/src/app/(auth)/login/page.tsx` - Página de login
- `packages/shared/src/hooks/useAuth.ts` - Hook de autenticação
- `packages/shared/src/api/auth/auth.api.ts` - API de autenticação
- `packages/shared/src/api/client.ts` - Cliente HTTP base

### Backend (Django)
- View: `/api/auth/token/` - Login endpoint
- Model: `core_usuarios` - Tabela de usuários
- Settings: `CORS_ALLOWED_ORIGINS` - Configuração CORS

---

## ⚡ TL;DR

**1.** Acesse: http://localhost:3001/login  
**2.** Email: `juridico@office-ce.com.br` | Senha: `H33tsupa!`  
**3.** Clique "Entrar"  
**4.** Se erro, pressione F12 e me envie o erro  

🚀 **BOA SORTE!**

---

**Status:** ✅ Client rodando | ⏳ Aguardando seu teste
**Próxima ação:** Teste e me informe o resultado
