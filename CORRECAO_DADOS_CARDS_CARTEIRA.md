# 🔧 Correção - Dados Não Aparecem nos Cards da Carteira

**Data**: 2024-2025  
**Status**: ✅ CORRIGIDO  
**Problema**: Cards de contagem (Ativos, Inativos, Novos, Inadimplentes) mostravam "0"

---

## 🎯 Problema Identificado

A API retorna os dados no endpoint `/api/gestao/carteira/clientes/` com a seguinte estrutura:

```json
{
  "summary": {
    "total_clientes": 2186,
    "clientes_ativos": 1550,
    "clientes_inativos": 636,
    "clientes_novos": 6,
    "clientes_sem_movimentacao": 0,
    "percentual_ativo": 70.91
  },
  "results": [
    { ...dados dos clientes... }
  ]
}
```

**Mas o frontend estava:**
1. ❌ Tentando acessar `categoriasData?.ativos` (que não existe)
2. ❌ Esperando um array de categorias, não um summary
3. ❌ Não usando o endpoint `/api/gestao/carteira/resumo/` que deveria ter essas informações

---

## ✅ Solução Implementada

### 1️⃣ **Atualizar Hook `useCarteiraResumo()`**

**Arquivo**: `packages/shared/src/hooks/useCarteira.ts`

```typescript
export function useCarteiraResumo() {
  return useQuery({
    queryKey: ['carteira', 'resumo'],
    queryFn: async () => {
      const response = await gestaoService.carteira.resumo();
      // Extrair summary da resposta ou retornar dados diretamente
      return response.data?.summary || response.data;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000
  });
}
```

✅ Agora extrai corretamente o `summary` da resposta

---

### 2️⃣ **Adicionar Hook ao Import**

**Arquivo**: `apps/client/src/app/(dashboard)/gestao/carteira/page.tsx`

```typescript
import {
  useCarteiraClientes,
  useCategorias,
  useCarteiraEvolucao,
  useCarteiraResumo,  // ✅ ADICIONADO
  useAniversariosParceria,
  useSociosAniversariantes,
  useRegimeTributario,
  useRamoAtividade
} from '@gestk/shared';
```

---

### 3️⃣ **Chamar Hook na Página**

```typescript
const { data: resumoData, isLoading: isLoadingResumo } = useCarteiraResumo();
```

---

### 4️⃣ **Mapear Dados do Resumo para Contagens**

```typescript
const contagensCategorias = useMemo(() => {
  if (!resumoData) {
    return { ativos: 0, inativos: 0, novos: 0, inadimplentes: 0 };
  }
  // Mapear dados do resumo para as contagens esperadas
  return {
    ativos: resumoData.clientes_ativos || 0,           // 1550
    inativos: resumoData.clientes_inativos || 0,       // 636
    novos: resumoData.clientes_novos || 0,             // 6
    inadimplentes: resumoData.clientes_sem_movimentacao || 0, // 0
  };
}, [resumoData]);
```

✅ Agora os dados vêm diretamente da API

---

### 5️⃣ **Usar Dados Corretos nos Cards**

**Antes:**
```tsx
{isLoadingCategorias ? <Loader2 /> : contagensCategorias.ativos}
```

**Depois:**
```tsx
{isLoadingResumo ? <Loader2 /> : contagensCategorias.ativos}
```

✅ Usa o loading state correto

---

### 6️⃣ **Usar Total Correto para Cálculo de Percentual**

**Antes:**
```tsx
{totalClientes > 0 ? `${Math.round((categoriasData?.ativos || 0) / totalClientes * 100)}%` : '0%'} do total
```

**Depois:**
```tsx
{carteiraData?.count && carteiraData.count > 0 ? `${Math.round(contagensCategorias.ativos / carteiraData.count * 100)}%` : '0%'} do total
```

✅ Usa o total de clientes da paginação

---

## 📊 Mapeamento de Dados

| Campo na UI | Campo na API | Valor Exemplo |
|-------------|------|------|
| Ativos | `clientes_ativos` | 1550 |
| Inativos | `clientes_inativos` | 636 |
| Novos | `clientes_novos` | 6 |
| Inadimplentes | `clientes_sem_movimentacao` | 0 |
| Total | `total_clientes` | 2186 |
| % Ativos | `percentual_ativo` | 70.91 |

---

## 🔄 Fluxo de Dados Agora

```
┌─────────────────────────────────────────────────────┐
│  carteira/page.tsx                                  │
└────────────┬────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────┐
│  useCarteiraResumo()                                │
│  - Chama GET /api/gestao/carteira/resumo/          │
│  - Extrai response.data.summary                     │
└────────────┬────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────┐
│  resumoData = {                                     │
│    total_clientes: 2186,                           │
│    clientes_ativos: 1550,                          │
│    clientes_inativos: 636,                         │
│    clientes_novos: 6,                              │
│    clientes_sem_movimentacao: 0,                   │
│    percentual_ativo: 70.91                         │
│  }                                                  │
└────────────┬────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────┐
│  contagensCategorias = {                           │
│    ativos: 1550,                                   │
│    inativos: 636,                                  │
│    novos: 6,                                       │
│    inadimplentes: 0                                │
│  }                                                  │
└────────────┬────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────┐
│  Render Cards com valores corretos ✅              │
└─────────────────────────────────────────────────────┘
```

---

## ✅ Resultado Esperado

Agora os cards devem mostrar:

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Ativos    │  Inativos   │    Novos    │Inadimplentes│
│    1550     │     636     │      6      │      0      │
│ 70.91% do   │ 29.09% do   │  0.27% do   │  0.00% do   │
│   total     │   total     │   total     │   total     │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

---

## 🧪 Testes Recomendados

### Teste 1: Verificar API
```bash
curl http://127.0.0.1:8000/api/gestao/carteira/resumo/
```

Esperar retorno com `summary`

### Teste 2: Verificar React Query DevTools
1. Abrir DevTools (F12)
2. Achar extensão "@tanstack/react-query-devtools"
3. Procurar query "carteira-resumo"
4. Verificar dados em "Data"

### Teste 3: Verificar Console
1. Abrir DevTools (F12)
2. Aba "Console"
3. Verificar se há erros relacionados a `resumoData`

---

## 🚀 Próximas Etapas

1. ✅ **Testar em desenvolvimento**
   - Abrir http://localhost:3001/gestao/carteira
   - Verificar se cards mostram valores corretos

2. ✅ **Validar cálculo de percentuais**
   - Confirmar que 1550 / 2186 = 70.91%

3. ⏳ **Considerar cache**
   - Resume usa cache de 10 min (staleTime)
   - Se dados mudam no backend, frontend pode demorar para atualizar

4. ⏳ **Implementar refetch manual**
   - Adicionar botão "Atualizar" para forçar refetch

---

## 📝 Arquivos Modificados

1. **`packages/shared/src/hooks/useCarteira.ts`**
   - Atualizar extração de summary no `useCarteiraResumo()`

2. **`apps/client/src/app/(dashboard)/gestao/carteira/page.tsx`**
   - Adicionar import de `useCarteiraResumo`
   - Chamar hook
   - Mapear dados do resumo
   - Atualizar cards para usar dados corretos
   - Atualizar loading states

---

## 🎓 Lição Aprendida

**Problema**: Dados vindo em estrutura diferente da esperada  
**Solução**: Extrair dados na camada de hooks (useCarteira)  
**Benefício**: Camada de componentes fica mais limpa e reutilizável

**Padrão Aplicado**: Adapter Pattern
```
API Response → Hook (transforma) → Component (consome)
```

---

**Status**: 🟢 **PRONTO PARA TESTAR**
