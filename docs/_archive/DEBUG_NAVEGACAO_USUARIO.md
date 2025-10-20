# Guia de Debug - Navegação "Novo Usuário"

## Problema
Clicar no botão "Novo Usuário" não abre a página de criação.

## Arquivos Envolvidos

### 1. Página de Listagem
**Arquivo:** `apps/admin/src/app/(dashboard)/admin/usuarios/page.tsx`
```typescript
const handleCreateClick = () => {
  router.push('/admin/usuarios/novo')
}

<Button onClick={handleCreateClick}>
  <Plus className="mr-2 h-4 w-4" />
  Novo Usuário
</Button>
```
✅ Código está correto

### 2. Página de Criação
**Arquivo:** `apps/admin/src/app/(dashboard)/admin/usuarios/novo/page.tsx`
```typescript
'use client'

import { UsuarioForm } from '@/components/admin/usuarios/UsuarioForm'

export default function NovoUsuarioPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Novo Usuário de Acesso</h1>
      <UsuarioForm mode="create" />
    </div>
  )
}
```
✅ Arquivo existe e está correto

## Procedimento de Debug

### Passo 1: Verificar Dev Server

```powershell
# No diretório raiz do monorepo
cd C:\Users\ADM\Desktop\Projects\Administracao_Gestk_Front\gestk-frontend

# Iniciar o dev server do admin
npm run dev --workspace=apps/admin

# OU (se usar Turbo)
npm run dev

# OU
npx turbo dev --filter=admin
```

**Aguardar mensagem:**
```
✓ Ready in Xms
➜ Local:   http://localhost:3000
```

### Passo 2: Abrir o Browser

1. Abra `http://localhost:3000/admin/usuarios`
2. Abra o **DevTools** (F12)
3. Vá para a aba **Console**
4. Clique no botão "Novo Usuário"

### Passo 3: Verificar Erros

#### Console do Browser (F12)
Procure por:
- ❌ Erros de JavaScript/TypeScript
- ❌ Erros de import/export
- ❌ Erros de componentes
- ❌ Erros de provider (QueryClient, AuthProvider)

**Possíveis erros:**
```javascript
// Erro de cliente/servidor mismatch
Error: Hydration failed because the initial UI does not match what was rendered on the server

// Erro de provider
Error: No QueryClient set, use QueryClientProvider to set one

// Erro de import
Error: Module not found: Can't resolve '@gestk/shared'

// Erro de componente
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components)
```

#### Terminal do Dev Server
Procure por:
- ❌ Erros de compilação TypeScript
- ❌ Erros de build
- ❌ Warnings relevantes

### Passo 4: Testar Navegação Manual

Digite diretamente na barra de endereços:
```
http://localhost:3000/admin/usuarios/novo
```

**Se a página abrir:**
- ✅ Rota existe e funciona
- ❌ Problema é no click handler ou router

**Se NÃO abrir:**
- ❌ Possível erro na página de criação
- ❌ Verifique console e terminal

### Passo 5: Verificar Router

Adicione logs para debug no click handler:

```typescript
const handleCreateClick = () => {
  console.log('🔵 Botão clicado')
  console.log('🔵 Router:', router)
  router.push('/admin/usuarios/novo')
  console.log('🔵 Push executado')
}
```

**Esperado no console:**
```
🔵 Botão clicado
🔵 Router: {pathname: '/admin/usuarios', push: ƒ, ...}
🔵 Push executado
```

### Passo 6: Verificar Providers

Certifique-se que os providers estão configurados em `app/layout.tsx`:

```typescript
// apps/admin/src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryProvider>  {/* ✅ Deve estar aqui */}
          <AuthProvider>  {/* ✅ Deve estar aqui */}
            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
```

### Passo 7: Limpar Cache

Se nada funcionar, limpe o cache:

```powershell
# Parar o dev server (Ctrl+C)

# No diretório do admin
cd apps\admin

# Limpar .next
Remove-Item -Recurse -Force .next

# Voltar ao diretório raiz
cd ..\..

# Reinstalar dependências (opcional)
npm install

# Rebuild shared package
cd packages\shared
npm run build
cd ..\..

# Iniciar dev server novamente
npm run dev --workspace=apps/admin
```

## Cenários Comuns

### Cenário 1: Página não existe (404)
**Sintoma:** URL muda, mas mostra 404
**Causa:** Arquivo `novo/page.tsx` não está no lugar correto
**Solução:** Verificar estrutura de pastas

### Cenário 2: Erro de Hydration
**Sintoma:** Console mostra erro de hydration
**Causa:** Componente usa `window` ou `localStorage` sem `useEffect`
**Solução:** Envolver código cliente em `useEffect` ou `'use client'`

### Cenário 3: Navegação não acontece
**Sintoma:** Click não faz nada, URL não muda
**Causa:** Erro silencioso em provider ou router
**Solução:** Verificar console e terminal

### Cenário 4: Página carrega mas quebra
**Sintoma:** URL muda, página carrega mas mostra erro
**Causa:** Erro no componente `UsuarioForm`
**Solução:** Verificar console para stack trace

## Checklist de Diagnóstico

- [ ] Dev server está rodando?
- [ ] Console do browser tem erros?
- [ ] Terminal do dev server tem erros?
- [ ] Navegação manual funciona?
- [ ] Router.push é executado (via log)?
- [ ] Providers estão configurados?
- [ ] Cache foi limpo?
- [ ] Arquivo `novo/page.tsx` existe?
- [ ] Imports em `UsuarioForm` estão corretos?
- [ ] Shared package está buildado?

## Comandos Úteis

```powershell
# Ver estrutura de arquivos
Get-ChildItem -Recurse apps\admin\src\app\(dashboard)\admin\usuarios

# Verificar imports no UsuarioForm
Select-String -Path "apps\admin\src\components\admin\usuarios\UsuarioForm.tsx" -Pattern "import"

# Verificar se shared package está buildado
Test-Path packages\shared\dist

# Rebuild shared package
cd packages\shared; npm run build; cd ..\..

# Type-check do admin app
cd apps\admin; npx tsc --noEmit; cd ..\..
```

## Solução Esperada

Após seguir os passos, você deve:
1. ✅ Ver logs no console ao clicar no botão
2. ✅ Ver a URL mudar para `/admin/usuarios/novo`
3. ✅ Ver a página de criação renderizar
4. ✅ Ver o formulário de usuário

Se ainda não funcionar, copie os erros exatos do console/terminal e peça ajuda!
