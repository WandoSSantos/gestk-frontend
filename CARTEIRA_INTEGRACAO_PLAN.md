# 🚀 PLANO DE INTEGRAÇÃO - CARTEIRA DE CLIENTES

## 📋 Análise Atual

### ✅ Já Implementado
- **Types**: `CarteiraCliente`, `ClienteDetalhado`, `FiltrosCarteira` definidos em `@gestk/shared`
- **API Service**: `gestaoService.carteira` com endpoints mapeados
- **Componentes**: Tabelas, filtros e gráficos criados
- **Páginas**: Client já tem estrutura de páginas para carteira

### 📊 Endpoints Mapeados (Backend)

```
GET  /api/gestao/carteira/clientes/                 ✅ Listar (paginado)
GET  /api/gestao/carteira/clientes/{id}/            ✅ Detalhes
PUT  /api/gestao/carteira/clientes/{id}/            ✅ Atualizar
GET  /api/gestao/carteira/clientes/resumo/          ✅ Resumo/Stats
GET  /api/gestao/carteira/categorias/               ✅ Categorias
GET  /api/gestao/carteira/evolucao/                 ✅ Evolução mensal
GET  /api/gestao/carteira/aniversarios-parceria/    ✅ Aniversários
GET  /api/gestao/carteira/socios-aniversariantes/   ✅ Sócios
GET  /api/gestao/carteira/composicao-societaria/    ✅ Composição
GET  /api/gestao/carteira/regime-tributario/        ✅ Distribuição regime
GET  /api/gestao/carteira/ramo-atividade/           ✅ Distribuição ramo
GET  /api/gestao/carteira/estatisticas/             ✅ Estatísticas
GET  /api/gestao/carteira/exportar/                 ✅ Exportar PDF/Excel
```

---

## 🎯 O QUE PRECISA SER FEITO

### FASE 1: React Query Hooks (Shared)
**Arquivo**: `packages/shared/src/hooks/useCarteira.ts`

```typescript
// Query Hooks
useCarteiraClientes(filters) -> PaginatedResponse<CarteiraCliente>
useCarteiraResumo() -> { total, ativos, inativos, novos, cancelados... }
useCarteiraEvolucao(periodo) -> EvolucaoMensal[]
useCarteiraAniversarios(periodo) -> AniversarioParceria[]
useCarteiraSociosAniversariantes(periodo) -> SocioAniversariante[]
useCarteiraComposicaoSocietaria(clienteId) -> ComposicaoSocietaria[]
useCarteiraEstatisticas(periodo) -> Estatísticas

// Mutation Hooks
useUpdateCarteiraCliente(clienteId) -> Mutation
useExportarCarteira() -> Mutation
```

### FASE 2: Integração em Client App
**Arquivos**: `apps/client/src/app/(dashboard)/gestao/carteira/`

- ✅ Página `page.tsx` - Lista com filtros e tabela
- ✅ Página `[id]/page.tsx` - Detalhes do cliente
- ✅ Página `detalhes/page.tsx` - Análise detalhada
- ✅ Componentes de análise e gráficos

### FASE 3: Validação & Testes
- Testar fluxo E2E com backend real
- Validar cache e refetch
- Testar filtros e busca
- Testar exportação

---

## 🔌 Arquitetura

```
Frontend (Client App)
    ├── pages/carteira/page.tsx
    │   └── usa hook: useCarteiraClientes()
    │   └── usa componente: CarteiraTable
    │
    ├── pages/carteira/[id]/page.tsx
    │   └── usa hook: useCarteiraCliente(id)
    │   └── usa componentes: ClienteDetail, Resumo
    │
    └── hooks/ (shared)
        └── useCarteira.ts
            ├── useCarteiraClientes()
            ├── useCarteiraResumo()
            ├── useCarteiraEvolucao()
            └── ...

API Layer (Shared)
    └── services/gestao.service.ts
        └── carteira.*
            ├── listar()
            ├── detalhes()
            ├── evolucao()
            └── ...

Backend (Django API)
    └── /api/gestao/carteira/*
        ├── /clientes/
        ├── /resumo/
        ├── /evolucao/
        └── ...
```

---

## 📈 Status de Integração

| Componente | Status | Descrição |
|-----------|--------|-----------|
| Types | ✅ | Definidos em `client.types.ts` |
| API Service | ✅ | Implementado em `gestao.service.ts` |
| Hooks | ⏳ | Precisa criar em `useCarteira.ts` |
| Componentes | ✅ | Já existem no projeto |
| Páginas | ⏳ | Precisa integrar hooks nas páginas |
| Testes | ⏳ | Validação E2E pendente |

---

## ✨ Benefícios da Integração

✅ Listagem com paginação automática
✅ Filtros avançados (search, status, regime, ramo)
✅ Resumo/estatísticas em tempo real
✅ Cache automático com React Query
✅ Refetch inteligente
✅ Erro handling e loading states
✅ Exportação em múltiplos formatos

---

## 🎬 Próximos Passos

1. **Criar hooks** (`useCarteira.ts`) com React Query
2. **Integrar nas páginas** existentes do client
3. **Testar fluxo completo** com backend
4. **Validar performance** e cache

**Estou pronto para começar! 🚀**
