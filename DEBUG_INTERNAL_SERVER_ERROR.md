# 🔧 Debug - Internal Server Error em localhost:3001/login

## Problema Identificado
**Status**: Internal Server Error (500)  
**URL**: `localhost:3001/login`  
**App**: Admin  
**Porta Esperada**: 3001  

---

## 📋 Possíveis Causas

### 1️⃣ **Conflito de Portas**
- ✅ **Verificado**: Porta 3001 está em uso (PID 9852)
- **Solução**: Matar processo e reiniciar

```powershell
# Matar todos os processos Node
Get-Process node | Stop-Process -Force

# Aguardar 2 segundos
Start-Sleep -Seconds 2

# Reiniciar apps
npm run dev
```

### 2️⃣ **Erro na Compilação TypeScript**
- **Sintomas**: Página mostra erro genérico 500
- **Solução**: Verificar console/logs da aplicação

### 3️⃣ **Problema na Rota de Login**
- **Arquivo**: `apps/admin/src/app/auth/login/page.tsx`
- **Possível Causa**: Import faltando ou erro de tipo

---

## 🔍 Como Investigar

### Opção 1: Ver logs do terminal
```bash
cd gestk-frontend
npm run dev
# Observar se há erros durante compilação
```

### Opção 2: Verificar Network Tab (F12)
1. Abra DevTools (F12)
2. Vá para aba "Network"
3. Recarregue página (F5)
4. Procure por requisição "login"
5. Veja a resposta no preview

### Opção 3: Verificar Console (F12)
1. Abra DevTools (F12)
2. Vá para aba "Console"
3. Procure por mensagens de erro

---

## ✅ Verificação de Saúde

### Portas Ativas
```
✅ 3000 (Admin) - PID: 22496
✅ 3001 (Client) - PID: 9852
✅ 3002 (Landing) - PID: 24356
```

### URLs Esperadas
- **Admin**: http://localhost:3000
- **Client**: http://localhost:3001
- **Landing**: http://localhost:3002

---

## 🚀 Passos para Resolver

### PASSO 1: Limpar Processo
```powershell
# Terminal PowerShell como Admin
Get-Process node | Stop-Process -Force
Start-Sleep -Seconds 3
```

### PASSO 2: Limpar Cache
```powershell
cd c:\Users\ADM\Desktop\Projects\Administracao_Gestk_Front\gestk-frontend

# Limpar cache Next.js
Remove-Item -Path "apps/admin/.next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "apps/client/.next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "apps/landing/.next" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Cache limpo"
```

### PASSO 3: Reinstalar Dependências (se necessário)
```powershell
npm install
npm run dev
```

### PASSO 4: Verificar Saúde
- ✅ Abrir http://localhost:3001/login
- ✅ Verificar se carrega sem erro 500

---

## 📊 Stack da Página de Login

| Componente | Arquivo | Status |
|-----------|---------|--------|
| Page | `apps/admin/src/app/auth/login/page.tsx` | ? |
| Layout | `apps/admin/src/app/auth/layout.tsx` | ? |
| Componentes | `@gestk/ui` | ? |
| Imports | Verificar tipos | ? |

---

## 🐛 Erros Comuns

### ❌ "Cannot find module"
- Verificar se imports estão corretos
- Checar se packages/ui está compilado

### ❌ "TypeError at runtime"
- Verificar tipos TypeScript
- Revisar imports de shared library

### ❌ "CORS error"
- Verificar configuração de CORS
- Revisar next.config.ts

---

## 💡 Dica de Debug

Se o erro persistir:

1. **Abra Browser DevTools (F12)**
2. **Vá em Network Tab**
3. **Recarregue a página**
4. **Procure pelo request "login"**
5. **Clique nele e veja "Preview"**
6. **Copie o erro e compartilhe**

---

## 📞 Próximas Ações

Se o problema persistir após esses passos:

1. Compartilhar logs do console (F12)
2. Compartilhar erro exato do preview (Network Tab)
3. Verificar se há import de dados mock (que poderia causar erro)
4. Validar que não há erro de tipo em page.tsx

---

**Status**: 🔴 **REQUER AÇÃO DO USUÁRIO**
