# 🎯 Plano de Implementação - Client App Endpoints

**Data**: 20/10/2025  
**Status**: Módulos Admin em PAUSE → Foco em Client  
**Objetivo**: Conectar Client App aos endpoints reais do backend

---

## 📊 Status Atual

### ✅ Já Implementado
- ✅ Autenticação (login, logout, tokens)
- ✅ Dashboard com dados mockados
- ✅ Menu do usuário
- ✅ Estrutura de rotas
- ✅ `client.service.ts` com alguns endpoints

### 🎯 Próxima Fase
Substituir dados mockados por chamadas reais à API nos módulos:
1. **Gestão** (Carteira, Clientes, Usuários, Escritório)
2. **Dashboards** (Demográfico, Fiscal, Contábil, Indicadores, DRE)
3. **Simuladores** (INSS, IRPF)
4. **Relatórios**

---

## 🚀 BLOCO CLIENT 1: Gestão - Carteira de Clientes

**Prioridade**: 🔴 CRÍTICA (Alto Valor)  
**Duração Estimada**: 3-4 horas  
**Dependências**: Auth já implementado

### Objetivos
- ✅ Listar clientes da carteira
- ✅ Filtrar por regime fiscal, status, período
- ✅ Exibir categorização (Ativos, Inativos, Novos, Inadimplentes)
- ✅ Mostrar evolução mensal
- ✅ Substituir mocks por dados reais

### Endpoints Backend Disponíveis

```typescript
GET /api/gestao/carteira/clientes/
Query params:
  - regime_fiscal?: string
  - status?: string
  - data_inicio?: string
  - data_fim?: string
  - page?: number
  - page_size?: number

Response: {
  count: number
  next: string | null
  previous: string | null
  results: Cliente[]
}

GET /api/gestao/carteira/categorias/
Query params:
  - data_inicio?: string
  - data_fim?: string

Response: {
  ativos: number
  inativos: number
  novos: number
  inadimplentes: number
}

GET /api/gestao/carteira/evolucao/
Query params:
  - meses?: number (default: 12)

Response: EvolucaoMensal[]
```

### Arquivos a Criar/Atualizar

#### 1. API Layer
```
packages/shared/src/api/client/
  └── carteira.api.ts  ⬅️ CRIAR
```

**Funções:**
```typescript
export const carteiraApi = {
  // Lista de clientes com filtros
  getClientes(filters?: CarteiraFilters): Promise<PaginatedResponse<Cliente>>
  
  // Categorias (ativos, inativos, etc)
  getCategorias(periodo?: PeriodoFilter): Promise<CategoriasCarteira>
  
  // Evolução mensal
  getEvolucao(meses?: number): Promise<EvolucaoMensal[]>
}
```

#### 2. Types
```
packages/shared/src/types/client/
  └── carteira.types.ts  ⬅️ CRIAR
```

**Interfaces:**
```typescript
interface Cliente {
  id: string
  razao_social: string
  cnpj: string
  regime_fiscal: 'SIMPLES_NACIONAL' | 'LUCRO_PRESUMIDO' | 'LUCRO_REAL'
  status: 'ATIVO' | 'INATIVO' | 'SUSPENSO'
  data_inicio: string
  faturamento_mensal?: number
  inadimplente: boolean
}

interface CarteiraFilters {
  regime_fiscal?: string
  status?: string
  data_inicio?: string
  data_fim?: string
  search?: string
  page?: number
  page_size?: number
}

interface CategoriasCarteira {
  ativos: number
  inativos: number
  novos: number
  inadimplentes: number
}

interface EvolucaoMensal {
  mes: string
  total_clientes: number
  novos_clientes: number
  clientes_inativos: number
}
```

#### 3. React Query Hooks
```
packages/shared/src/hooks/client/
  └── useCarteira.ts  ⬅️ CRIAR
```

**Hooks:**
```typescript
// Lista com paginação e filtros
export const useCarteira = (filters?: CarteiraFilters) => {
  return useQuery({
    queryKey: ['carteira', 'clientes', filters],
    queryFn: () => carteiraApi.getClientes(filters)
  })
}

// Categorias
export const useCategorias = (periodo?: PeriodoFilter) => {
  return useQuery({
    queryKey: ['carteira', 'categorias', periodo],
    queryFn: () => carteiraApi.getCategorias(periodo)
  })
}

// Evolução
export const useEvolucao = (meses?: number) => {
  return useQuery({
    queryKey: ['carteira', 'evolucao', meses],
    queryFn: () => carteiraApi.getEvolucao(meses)
  })
}
```

#### 4. Atualizar Página
```
apps/client/src/app/(dashboard)/gestao/carteira/page.tsx  ⬅️ ATUALIZAR
```

**Mudanças:**
- ❌ Remover `mockCarteiraClientes`, `mockCategoriasClientes`, `mockEvolucaoMensal`
- ✅ Usar `useCarteira()`, `useCategorias()`, `useEvolucao()`
- ✅ Adicionar loading states
- ✅ Adicionar error handling
- ✅ Manter filtros funcionais

### Critérios de Aceitação

- [ ] Lista de clientes carrega dados reais do backend
- [ ] Filtros funcionam (regime, status, período)
- [ ] Paginação implementada
- [ ] Cards de categorias exibem contadores reais
- [ ] Gráfico de evolução usa dados reais
- [ ] Loading states durante requisições
- [ ] Mensagens de erro apropriadas
- [ ] Cache de dados com React Query

### Testes

- [ ] Carregar lista completa sem filtros
- [ ] Aplicar filtro por regime fiscal
- [ ] Aplicar filtro por status
- [ ] Navegar entre páginas
- [ ] Visualizar evolução de 6 meses
- [ ] Visualizar evolução de 12 meses
- [ ] Testar com conexão lenta
- [ ] Testar erro de API (401, 500)

---

## 🚀 BLOCO CLIENT 2: Gestão - Detalhes do Cliente

**Prioridade**: 🟡 ALTA  
**Duração Estimada**: 2-3 horas  
**Dependências**: Bloco Client 1

### Endpoints Backend

```typescript
GET /api/gestao/clientes/lista/
GET /api/gestao/clientes/detalhes/{id}/
GET /api/gestao/clientes/socios/{cliente_id}/
```

### Arquivos

```
packages/shared/src/api/client/clientes.api.ts  ⬅️ CRIAR
packages/shared/src/types/client/clientes.types.ts  ⬅️ CRIAR
packages/shared/src/hooks/client/useClientes.ts  ⬅️ CRIAR
apps/client/src/app/(dashboard)/gestao/clientes/[id]/page.tsx  ⬅️ CRIAR
```

---

## 🚀 BLOCO CLIENT 3: Dashboard Demográfico

**Prioridade**: 🔴 CRÍTICA (Alto Impacto Visual)  
**Duração Estimada**: 4-5 horas  
**Dependências**: Auth

### Endpoints Backend

```typescript
GET /api/dashboards/demografico/indicadores/
GET /api/dashboards/demografico/evolucao-mensal/
GET /api/dashboards/demografico/distribuicao-etaria/
GET /api/dashboards/demografico/distribuicao-genero/
GET /api/dashboards/demografico/distribuicao-escolaridade/
GET /api/dashboards/demografico/distribuicao-cargo/
GET /api/dashboards/demografico/colaboradores/
```

### Arquivos

```
packages/shared/src/api/client/demografico.api.ts  ⬅️ CRIAR
packages/shared/src/types/client/demografico.types.ts  ⬅️ CRIAR
packages/shared/src/hooks/client/useDemografico.ts  ⬅️ CRIAR
apps/client/src/app/(dashboard)/dashboards/demografico/page.tsx  ⬅️ ATUALIZAR
```

### Componentes Gráficos Reutilizáveis

```
apps/client/src/components/charts/
  ├── PieChartComponent.tsx  ⬅️ CRIAR/ATUALIZAR
  ├── BarChartComponent.tsx  ⬅️ CRIAR/ATUALIZAR
  └── LineChartComponent.tsx  ⬅️ CRIAR/ATUALIZAR
```

---

## 🚀 BLOCO CLIENT 4: Dashboard Fiscal

**Prioridade**: 🔴 ALTA  
**Duração Estimada**: 3-4 horas  
**Dependências**: Auth

### Endpoints Backend

```typescript
GET /api/dashboards/fiscal/indicadores/
GET /api/dashboards/fiscal/resumo-por-tipo/
GET /api/dashboards/fiscal/top-clientes/
```

### Arquivos

```
packages/shared/src/api/client/fiscal.api.ts  ⬅️ CRIAR
packages/shared/src/types/client/fiscal.types.ts  ⬅️ CRIAR
packages/shared/src/hooks/client/useFiscal.ts  ⬅️ CRIAR
apps/client/src/app/(dashboard)/dashboards/fiscal/page.tsx  ⬅️ ATUALIZAR
```

---

## 🚀 BLOCO CLIENT 5: Dashboard Contábil

**Prioridade**: 🟡 MÉDIA  
**Duração Estimada**: 3-4 horas  
**Dependências**: Auth

### Endpoints Backend

```typescript
GET /api/dashboards/contabil/indicadores/
GET /api/dashboards/contabil/balancete/
```

### Arquivos

```
packages/shared/src/api/client/contabil.api.ts  ⬅️ CRIAR
packages/shared/src/types/client/contabil.types.ts  ⬅️ CRIAR
packages/shared/src/hooks/client/useContabil.ts  ⬅️ CRIAR
apps/client/src/app/(dashboard)/dashboards/contabil/page.tsx  ⬅️ ATUALIZAR
```

---

## 🚀 BLOCO CLIENT 6: Gestão de Usuários

**Prioridade**: 🟡 MÉDIA  
**Duração Estimada**: 3-4 horas  
**Dependências**: Auth

### Endpoints Backend

```typescript
GET /api/gestao/usuarios/lista/
GET /api/gestao/usuarios/atividades/
GET /api/gestao/usuarios/produtividade/
```

### Arquivos

```
packages/shared/src/api/client/usuarios.api.ts  ⬅️ CRIAR
packages/shared/src/types/client/usuarios.types.ts  ⬅️ CRIAR
packages/shared/src/hooks/client/useUsuarios.ts  ⬅️ CRIAR
apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx  ⬅️ CRIAR
```

---

## 🚀 BLOCO CLIENT 7: Dashboards Adicionais

**Prioridade**: 🟢 BAIXA  
**Duração Estimada**: 4-5 horas  
**Dependências**: Auth

### Dashboards

1. **Organizacional** (`/dashboards/organizacional`)
2. **Pessoal** (`/dashboards/pessoal`)
3. **Indicadores** (`/dashboards/indicadores`)
4. **DRE** (`/dashboards/dre`)

---

## 📅 Cronograma Sugerido

### Semana 1
- [x] ~~Dia 1-2: BLOCO 1 (Auth)~~ ✅ Concluído
- [ ] **Dia 3: BLOCO CLIENT 1 (Carteira)** ⬅️ PRÓXIMO
- [ ] Dia 4: BLOCO CLIENT 2 (Detalhes Cliente)
- [ ] Dia 5: BLOCO CLIENT 3 (Dashboard Demográfico)

### Semana 2
- [ ] Dia 6-7: BLOCO CLIENT 4 (Dashboard Fiscal)
- [ ] Dia 8: BLOCO CLIENT 5 (Dashboard Contábil)
- [ ] Dia 9: BLOCO CLIENT 6 (Usuários)
- [ ] Dia 10: BLOCO CLIENT 7 (Dashboards Adicionais)

---

## 🎯 Próxima Ação Imediata

### ⭐ Implementar BLOCO CLIENT 1: Carteira de Clientes

**Por quê começar por aqui?**
1. ✅ Alto valor funcional
2. ✅ Página já existe (apenas substituir mocks)
3. ✅ Endpoints backend documentados e funcionais
4. ✅ Padrão para outros módulos
5. ✅ Resultado visual rápido

**Próximo comando:**
```bash
# Criar estrutura de arquivos
mkdir -p packages/shared/src/api/client
mkdir -p packages/shared/src/types/client
mkdir -p packages/shared/src/hooks/client
```

**Ordem de implementação:**
1. Types (`carteira.types.ts`)
2. API (`carteira.api.ts`)
3. Hooks (`useCarteira.ts`)
4. Atualizar página (`carteira/page.tsx`)
5. Testar com backend

---

**Quer começar com Carteira de Clientes agora?** 🚀
