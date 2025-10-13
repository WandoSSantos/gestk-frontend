# Solução para Erro CORS - GESTK

## 🚨 **Problema**
```
Forbidden origin checking failed does not match any trusted origins
```

Este erro ocorre quando o backend Django rejeita requisições do frontend devido a políticas de CORS (Cross-Origin Resource Sharing).

## ✅ **Soluções Implementadas**

### **1. Proxy Next.js (Solução Atual)**
Configurei um proxy no Next.js que redireciona todas as requisições `/api/*` para `http://localhost:8000/api/*`.

**Arquivos modificados:**
- `apps/admin/next.config.ts`
- `apps/client/next.config.ts`
- `apps/admin/src/lib/api/client.ts`

**Como funciona:**
- Frontend faz requisição para `/api/administracao/contabilidades-admin/`
- Next.js redireciona para `http://localhost:8000/api/administracao/contabilidades-admin/`
- Backend recebe a requisição como se fosse do mesmo domínio
- CORS não é um problema porque tecnicamente é a mesma origem

### **2. Configuração de Headers CORS**
Adicionei headers CORS no Next.js para garantir compatibilidade:

```typescript
headers: [
  { key: 'Access-Control-Allow-Credentials', value: 'true' },
  { key: 'Access-Control-Allow-Origin', value: '*' },
  { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
  { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
]
```

## 🔧 **Solução Alternativa (Backend)**

Se você tiver acesso ao código do backend Django, pode configurar CORS diretamente:

### **Opção A: Configuração Específica (Recomendado)**
```python
# settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # GESTK Admin
    "http://127.0.0.1:3000",
    "http://localhost:3001",  # GESTK Client
    "http://127.0.0.1:3001",
]
```

### **Opção B: Desenvolvimento (Temporário)**
```python
# settings.py - APENAS para desenvolvimento!
CORS_ALLOW_ALL_ORIGINS = True
```

## 🚀 **Como Testar**

1. **Reinicie os servidores** de desenvolvimento:
   ```bash
   # Parar processos existentes
   # Ctrl+C nos terminais que estão rodando
   
   # Iniciar novamente
   npm run dev
   ```

2. **Acesse o GESTK Admin**:
   - URL: `http://localhost:3000`
   - Faça login
   - Navegue para Contratos
   - Clique em "Novo Contrato"
   - Verifique se o dropdown de Contabilidades carrega

3. **Verifique o console** do navegador:
   - Não deve haver erros de CORS
   - As requisições devem aparecer como `/api/...` (URLs relativas)

## 🔍 **Troubleshooting**

### **Se ainda houver erro de CORS:**
1. Verifique se o backend está rodando na porta 8000
2. Verifique se o proxy está funcionando (requisições aparecem como `/api/...`)
3. Limpe o cache do navegador (Ctrl+Shift+R)

### **Se houver erro de Network:**
1. Verifique se a API está acessível: `http://localhost:8000/api/`
2. Verifique se os endpoints estão corretos
3. Verifique se a autenticação está funcionando

## 📝 **Notas Importantes**

- ✅ **Proxy funciona** para desenvolvimento local
- ✅ **URLs relativas** evitam problemas de CORS
- ✅ **Headers CORS** garantem compatibilidade
- ⚠️ **Para produção**, configure CORS no backend
- ⚠️ **Proxy Next.js** é apenas para desenvolvimento

## 🎯 **Resultado Esperado**

Após reiniciar os servidores:
- ✅ Sem erros de CORS
- ✅ Contabilidades carregando no dropdown
- ✅ Conexão frontend/backend funcionando
- ✅ Autenticação mantida durante desenvolvimento
