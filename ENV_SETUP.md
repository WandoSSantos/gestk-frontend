# Configuração de Variáveis de Ambiente - GESTK

## 📋 Variáveis Necessárias

### Para GESTK Admin (apps/admin)
Crie um arquivo `.env.local` na pasta `apps/admin/` com as seguintes variáveis:

```env
# Configurações da API
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_TIMEOUT=10000

# Configurações de Desenvolvimento
NEXT_PUBLIC_DEBUG_MODE=true
NEXT_PUBLIC_USE_MOCKS_ON_404=true

# Configurações de Autenticação
NEXT_PUBLIC_AUTH_TOKEN_KEY=access_token
NEXT_PUBLIC_REFRESH_TOKEN_KEY=refresh_token
NEXT_PUBLIC_CONTABILIDADE_KEY=contabilidade_ativa_id

# Configurações de CORS
NEXT_PUBLIC_CORS_ORIGIN=http://localhost:3000
```

### Para GESTK Client (apps/client)
Crie um arquivo `.env.local` na pasta `apps/client/` com as seguintes variáveis:

```env
# Configurações da API
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_TIMEOUT=10000

# Configurações de Desenvolvimento
NEXT_PUBLIC_DEBUG_MODE=true
NEXT_PUBLIC_USE_MOCKS_ON_404=true

# Configurações de Autenticação
NEXT_PUBLIC_AUTH_TOKEN_KEY=access_token
NEXT_PUBLIC_REFRESH_TOKEN_KEY=refresh_token
NEXT_PUBLIC_CONTABILIDADE_KEY=contabilidade_ativa_id

# Configurações de CORS
NEXT_PUBLIC_CORS_ORIGIN=http://localhost:3001
```

## 🔧 Descrição das Variáveis

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `NEXT_PUBLIC_API_URL` | URL base da API Django | `http://localhost:8000` |
| `NEXT_PUBLIC_API_TIMEOUT` | Timeout das requisições (ms) | `10000` |
| `NEXT_PUBLIC_DEBUG_MODE` | Ativar logs de debug | `true` |
| `NEXT_PUBLIC_USE_MOCKS_ON_404` | Usar dados mock em caso de 404 | `true` |
| `NEXT_PUBLIC_AUTH_TOKEN_KEY` | Chave do token no localStorage | `access_token` |
| `NEXT_PUBLIC_REFRESH_TOKEN_KEY` | Chave do refresh token | `refresh_token` |
| `NEXT_PUBLIC_CONTABILIDADE_KEY` | Chave da contabilidade ativa | `contabilidade_ativa_id` |
| `NEXT_PUBLIC_CORS_ORIGIN` | Origem permitida pelo CORS | `http://localhost:3000/3001` |

## 🚀 Como Configurar

1. **Crie os arquivos `.env.local`**:
   ```bash
   # Para Admin
   touch apps/admin/.env.local
   
   # Para Client
   touch apps/client/.env.local
   ```

2. **Copie o conteúdo** dos exemplos acima para cada arquivo

3. **Ajuste as URLs** conforme necessário:
   - Se sua API estiver em outra porta, altere `NEXT_PUBLIC_API_URL`
   - Se estiver em produção, use a URL do servidor

4. **Reinicie os servidores** de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🔍 Verificação

Após configurar, verifique se:
- ✅ A API está rodando na porta 8000
- ✅ Os logs de debug aparecem no console (se `DEBUG_MODE=true`)
- ✅ As requisições são feitas para a URL correta
- ✅ Não há erros de CORS

## 🐛 Troubleshooting

### Erro de Network Error
- Verifique se a API está rodando: `http://localhost:8000/api/`
- Confirme se a URL está correta no `.env.local`
- Verifique se não há problemas de CORS

### Erro de CORS
- Adicione a origem do frontend nas configurações de CORS da API
- Verifique se `NEXT_PUBLIC_CORS_ORIGIN` está correto

### Timeout
- Aumente o valor de `NEXT_PUBLIC_API_TIMEOUT` se necessário
- Verifique se a API está respondendo rapidamente
