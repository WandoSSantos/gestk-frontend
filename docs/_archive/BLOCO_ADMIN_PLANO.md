# 🏢 Plano de Implementação - Módulos de Administração

**Data de Criação**: 20/10/2025  
**Prioridade**: ALTA  
**Objetivo**: Implementar CRUDs completos para administração de Contratos, Billing, Usuários e Contabilidades

---

## 📋 Visão Geral

Este plano foca na implementação dos módulos administrativos essenciais para o painel admin, permitindo:
- ✅ Gestão completa de contratos GESTK
- ✅ Sistema de billing (planos, assinaturas, faturas, pagamentos)
- ✅ Gerenciamento de usuários de acesso
- ✅ Administração de contabilidades

---

## 🎯 Estrutura de Implementação

### Fase 1: API Layer (2-3 horas)
Criar camada de API para todos os endpoints de administração

### Fase 2: Types & Schemas (1-2 horas)
Definir TypeScript types e schemas Zod para validação

### Fase 3: Hooks de Estado (2-3 horas)
Implementar hooks React Query para gerenciamento de estado

### Fase 4: Componentes UI (4-6 horas)
Criar componentes de formulários, tabelas e modais

### Fase 5: Páginas e Rotas (2-3 horas)
Implementar páginas e sistema de navegação

**Tempo Total Estimado**: 11-17 horas (~2-3 dias de desenvolvimento)

---

## 📦 Módulo 1: Contratos GESTK

### Endpoints (9 total)
```
✅ GET    /api/administracao/contratos-gestk/          - Listar contratos
✅ POST   /api/administracao/contratos-gestk/          - Criar contrato
✅ GET    /api/administracao/contratos-gestk/{id}/     - Obter contrato
✅ PUT    /api/administracao/contratos-gestk/{id}/     - Atualizar contrato
✅ DELETE /api/administracao/contratos-gestk/{id}/     - Deletar contrato
✅ POST   /api/administracao/contratos-gestk/{id}/suspender/ - Suspender
✅ POST   /api/administracao/contratos-gestk/{id}/cancelar/  - Cancelar
✅ POST   /api/administracao/contratos-gestk/{id}/ativar/    - Ativar
✅ GET    /api/administracao/contratos-gestk/resumo/   - Resumo
```

### Arquivos a Criar

#### 1. API Layer
```typescript
// packages/shared/src/api/admin/contratos.api.ts
export const contratosApi = {
  list(filters?: ContratoFilters): Promise<PaginatedResponse<Contrato>>
  create(data: ContratoCreateData): Promise<Contrato>
  get(id: string): Promise<Contrato>
  update(id: string, data: ContratoUpdateData): Promise<Contrato>
  delete(id: string): Promise<void>
  suspend(id: string): Promise<Contrato>
  cancel(id: string): Promise<Contrato>
  activate(id: string): Promise<Contrato>
  summary(): Promise<ContratoSummary>
}
```

#### 2. Types
```typescript
// packages/shared/src/types/admin/contratos.types.ts
export interface Contrato {
  id: string
  contabilidade: Contabilidade
  plano: Plano
  data_inicio: string
  data_fim: string | null
  valor: number
  status: 'ativo' | 'suspenso' | 'cancelado' | 'expirado'
  observacoes: string | null
  created_at: string
  updated_at: string
}

export interface ContratoCreateData {
  contabilidade_id: string
  plano_id: string
  data_inicio: string
  data_fim?: string
  valor: number
  observacoes?: string
}

export interface ContratoFilters {
  status?: string
  contabilidade_id?: string
  plano_id?: string
  data_inicio_min?: string
  data_inicio_max?: string
  search?: string
  page?: number
  page_size?: number
}

export interface ContratoSummary {
  total: number
  ativos: number
  suspensos: number
  cancelados: number
  expirados: number
  valor_total_mensal: number
}
```

#### 3. Hooks
```typescript
// packages/shared/src/hooks/admin/useContratos.ts
export function useContratos(filters?: ContratoFilters) {
  return useQuery({
    queryKey: ['contratos', filters],
    queryFn: () => contratosApi.list(filters)
  })
}

export function useContrato(id: string) {
  return useQuery({
    queryKey: ['contrato', id],
    queryFn: () => contratosApi.get(id)
  })
}

export function useCreateContrato() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: contratosApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos'] })
      toast.success('Contrato criado com sucesso!')
    }
  })
}

export function useUpdateContrato() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ContratoUpdateData }) =>
      contratosApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos'] })
      toast.success('Contrato atualizado com sucesso!')
    }
  })
}

export function useDeleteContrato() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: contratosApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos'] })
      toast.success('Contrato deletado com sucesso!')
    }
  })
}

export function useContratoActions() {
  const queryClient = useQueryClient()
  
  return {
    suspend: useMutation({
      mutationFn: contratosApi.suspend,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['contratos'] })
        toast.success('Contrato suspenso com sucesso!')
      }
    }),
    cancel: useMutation({
      mutationFn: contratosApi.cancel,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['contratos'] })
        toast.success('Contrato cancelado com sucesso!')
      }
    }),
    activate: useMutation({
      mutationFn: contratosApi.activate,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['contratos'] })
        toast.success('Contrato ativado com sucesso!')
      }
    })
  }
}
```

#### 4. Componentes
```typescript
// apps/admin/src/components/admin/contratos/ContratosTable.tsx
// apps/admin/src/components/admin/contratos/ContratoForm.tsx
// apps/admin/src/components/admin/contratos/ContratoCard.tsx
// apps/admin/src/components/admin/contratos/ContratoFilters.tsx
// apps/admin/src/components/admin/contratos/ContratoActions.tsx
```

#### 5. Páginas
```typescript
// apps/admin/src/app/(dashboard)/admin/contratos/page.tsx - Lista
// apps/admin/src/app/(dashboard)/admin/contratos/novo/page.tsx - Criar
// apps/admin/src/app/(dashboard)/admin/contratos/[id]/page.tsx - Detalhes
// apps/admin/src/app/(dashboard)/admin/contratos/[id]/editar/page.tsx - Editar
```

---

## 📦 Módulo 2: Billing

### Submódulo 2.1: Planos (7 endpoints)
```
✅ GET    /api/billing/planos/          - Listar planos
✅ POST   /api/billing/planos/          - Criar plano
✅ GET    /api/billing/planos/{id}/     - Obter plano
✅ PUT    /api/billing/planos/{id}/     - Atualizar plano
✅ DELETE /api/billing/planos/{id}/     - Deletar plano
✅ GET    /api/billing/planos/ativos/   - Planos ativos
✅ GET    /api/billing/planos/resumo/   - Resumo
```

### Submódulo 2.2: Assinaturas (9 endpoints)
```
✅ GET    /api/billing/assinaturas/          - Listar assinaturas
✅ POST   /api/billing/assinaturas/          - Criar assinatura
✅ GET    /api/billing/assinaturas/{id}/     - Obter assinatura
✅ PUT    /api/billing/assinaturas/{id}/     - Atualizar assinatura
✅ DELETE /api/billing/assinaturas/{id}/     - Deletar assinatura
✅ POST   /api/billing/assinaturas/{id}/suspender/ - Suspender
✅ POST   /api/billing/assinaturas/{id}/cancelar/  - Cancelar
✅ POST   /api/billing/assinaturas/{id}/ativar/    - Ativar
✅ GET    /api/billing/assinaturas/resumo/   - Resumo
```

### Submódulo 2.3: Faturas (8 endpoints)
```
✅ GET    /api/billing/faturas/          - Listar faturas
✅ POST   /api/billing/faturas/          - Criar fatura
✅ GET    /api/billing/faturas/{id}/     - Obter fatura
✅ PUT    /api/billing/faturas/{id}/     - Atualizar fatura
✅ DELETE /api/billing/faturas/{id}/     - Deletar fatura
✅ POST   /api/billing/faturas/{id}/marcar-como-paga/ - Marcar paga
✅ POST   /api/billing/faturas/{id}/cancelar/         - Cancelar
✅ GET    /api/billing/faturas/resumo/   - Resumo
```

### Submódulo 2.4: Pagamentos (6 endpoints)
```
✅ GET    /api/billing/pagamentos/          - Listar pagamentos
✅ POST   /api/billing/pagamentos/          - Criar pagamento
✅ GET    /api/billing/pagamentos/{id}/     - Obter pagamento
✅ POST   /api/billing/pagamentos/{id}/confirmar/ - Confirmar
✅ POST   /api/billing/pagamentos/{id}/estornar/  - Estornar
✅ GET    /api/billing/pagamentos/resumo/   - Resumo
```

### Types Compartilhados
```typescript
// packages/shared/src/types/admin/billing.types.ts

export interface Plano {
  id: string
  nome: string
  descricao: string
  valor: number
  periodicidade: 'mensal' | 'trimestral' | 'semestral' | 'anual'
  recursos: string[]
  ativo: boolean
  created_at: string
  updated_at: string
}

export interface Assinatura {
  id: string
  contrato: Contrato
  plano: Plano
  data_inicio: string
  data_fim: string | null
  valor: number
  status: 'ativa' | 'suspensa' | 'cancelada' | 'expirada'
  created_at: string
  updated_at: string
}

export interface Fatura {
  id: string
  assinatura: Assinatura
  numero: string
  valor: number
  data_vencimento: string
  data_pagamento: string | null
  status: 'pendente' | 'paga' | 'vencida' | 'cancelada'
  observacoes: string | null
  created_at: string
  updated_at: string
}

export interface Pagamento {
  id: string
  fatura: Fatura
  valor: number
  data_pagamento: string
  forma_pagamento: 'boleto' | 'pix' | 'cartao' | 'transferencia'
  comprovante: string | null
  status: 'pendente' | 'confirmado' | 'estornado'
  observacoes: string | null
  created_at: string
  updated_at: string
}
```

---

## 📦 Módulo 3: Usuários de Acesso

### Endpoints (9 total)
```
✅ GET    /api/administracao/usuarios-acesso/          - Listar usuários
✅ POST   /api/administracao/usuarios-acesso/          - Criar usuário
✅ GET    /api/administracao/usuarios-acesso/{id}/     - Obter usuário
✅ PUT    /api/administracao/usuarios-acesso/{id}/     - Atualizar usuário
✅ DELETE /api/administracao/usuarios-acesso/{id}/     - Deletar usuário
✅ POST   /api/administracao/usuarios-acesso/{id}/ativar/     - Ativar
✅ POST   /api/administracao/usuarios-acesso/{id}/desativar/  - Desativar
✅ POST   /api/administracao/usuarios-acesso/{id}/estender-vigencia/ - Estender
✅ GET    /api/administracao/usuarios-acesso/resumo/   - Resumo
```

### Types
```typescript
// packages/shared/src/types/admin/usuarios-acesso.types.ts

export interface UsuarioAcesso {
  id: string
  username: string
  email: string
  first_name: string
  last_name: string
  tipo_usuario: 'admin' | 'contador' | 'cliente'
  contabilidades: Contabilidade[]
  data_inicio: string
  data_fim: string | null
  is_active: boolean
  modulos_acessiveis: string[]
  permissoes: string[]
  created_at: string
  updated_at: string
}

export interface UsuarioAcessoCreateData {
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
  tipo_usuario: 'admin' | 'contador' | 'cliente'
  contabilidades: string[] // IDs das contabilidades
  data_inicio: string
  data_fim?: string
  modulos_acessiveis: string[]
  permissoes: string[]
}

export interface UsuarioAcessoFilters {
  tipo_usuario?: string
  is_active?: boolean
  contabilidade_id?: string
  search?: string
  page?: number
  page_size?: number
}

export interface UsuarioAcessoSummary {
  total: number
  ativos: number
  inativos: number
  por_tipo: {
    admin: number
    contador: number
    cliente: number
  }
}
```

### Funcionalidades Especiais
```typescript
// Hook para vincular contabilidade ao criar usuário
export function useContabilidadesDisponiveis() {
  return useQuery({
    queryKey: ['contabilidades-disponiveis'],
    queryFn: () => contabilidadesApi.list({ status: 'ativa' })
  })
}

// Formulário com seleção de contabilidades
<MultiSelect
  label="Contabilidades"
  options={contabilidades}
  value={selectedContabilidades}
  onChange={setSelectedContabilidades}
/>
```

---

## 📦 Módulo 4: Contabilidades Admin

### Endpoints (6 total)
```
✅ GET    /api/administracao/contabilidades-admin/          - Listar
✅ GET    /api/administracao/contabilidades-admin/{id}/     - Obter
✅ PUT    /api/administracao/contabilidades-admin/{id}/     - Atualizar
✅ POST   /api/administracao/contabilidades-admin/{id}/suspender-por-inadimplencia/ - Suspender
✅ POST   /api/administracao/contabilidades-admin/{id}/reativar/ - Reativar
✅ GET    /api/administracao/contabilidades-admin/resumo/   - Resumo
```

### Types
```typescript
// packages/shared/src/types/admin/contabilidades.types.ts

export interface ContabilidadeAdmin {
  id: string
  nome: string
  cnpj: string
  email: string
  telefone: string
  endereco: {
    logradouro: string
    numero: string
    complemento: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
  }
  status: 'ativa' | 'suspensa' | 'inadimplente' | 'cancelada'
  data_cadastro: string
  data_suspensao: string | null
  motivo_suspensao: string | null
  contrato_ativo: Contrato | null
  assinaturas: Assinatura[]
  usuarios_vinculados: number
  created_at: string
  updated_at: string
}

export interface ContabilidadeFilters {
  status?: string
  search?: string
  estado?: string
  cidade?: string
  page?: number
  page_size?: number
}

export interface ContabilidadeSummary {
  total: number
  ativas: number
  suspensas: number
  inadimplentes: number
  canceladas: number
}
```

---

## 🗂️ Estrutura de Arquivos

```
packages/shared/src/
├── api/
│   └── admin/
│       ├── contratos.api.ts          ✅ Módulo 1
│       ├── billing/
│       │   ├── planos.api.ts         ✅ Módulo 2.1
│       │   ├── assinaturas.api.ts    ✅ Módulo 2.2
│       │   ├── faturas.api.ts        ✅ Módulo 2.3
│       │   └── pagamentos.api.ts     ✅ Módulo 2.4
│       ├── usuarios-acesso.api.ts    ✅ Módulo 3
│       └── contabilidades.api.ts     ✅ Módulo 4
├── types/
│   └── admin/
│       ├── contratos.types.ts
│       ├── billing.types.ts
│       ├── usuarios-acesso.types.ts
│       └── contabilidades.types.ts
└── hooks/
    └── admin/
        ├── useContratos.ts
        ├── useBilling.ts
        ├── useUsuariosAcesso.ts
        └── useContabilidades.ts

apps/admin/src/
├── app/
│   └── (dashboard)/
│       └── admin/
│           ├── contratos/
│           │   ├── page.tsx          # Lista
│           │   ├── novo/page.tsx     # Criar
│           │   └── [id]/
│           │       ├── page.tsx      # Detalhes
│           │       └── editar/page.tsx # Editar
│           ├── billing/
│           │   ├── planos/
│           │   ├── assinaturas/
│           │   ├── faturas/
│           │   └── pagamentos/
│           ├── usuarios/
│           │   ├── page.tsx
│           │   ├── novo/page.tsx
│           │   └── [id]/
│           └── contabilidades/
│               ├── page.tsx
│               └── [id]/
└── components/
    └── admin/
        ├── contratos/
        │   ├── ContratosTable.tsx
        │   ├── ContratoForm.tsx
        │   ├── ContratoCard.tsx
        │   └── ContratoFilters.tsx
        ├── billing/
        │   ├── PlanosTable.tsx
        │   ├── AssinaturasTable.tsx
        │   ├── FaturasTable.tsx
        │   └── PagamentosTable.tsx
        ├── usuarios/
        │   ├── UsuariosTable.tsx
        │   ├── UsuarioForm.tsx
        │   └── VincularContabilidades.tsx
        └── contabilidades/
            ├── ContabilidadesTable.tsx
            ├── ContabilidadeCard.tsx
            └── ContabilidadeActions.tsx
```

---

## 🎨 Padrões de UI

### Tabelas
```typescript
// Usar DataTable do shadcn/ui com:
- Paginação server-side
- Ordenação por coluna
- Filtros avançados
- Busca em tempo real
- Ações em lote
- Export para CSV/Excel
```

### Formulários
```typescript
// Usar react-hook-form + zod com:
- Validação client-side
- Feedback visual de erros
- Auto-save (draft)
- Campos condicionais
- Upload de arquivos
- Multi-step forms
```

### Modais
```typescript
// Usar Dialog do shadcn/ui para:
- Criar registro
- Editar registro
- Confirmar ações destrutivas
- Visualizar detalhes
```

---

## 🔄 Ordem de Implementação Recomendada

### Sprint 1 (Dia 1) - Fundação
1. ✅ Criar estrutura de pastas
2. ✅ Implementar types de todos os módulos
3. ✅ Criar API layer básica (sem hooks)
4. ✅ Testar endpoints com ferramentas HTTP

### Sprint 2 (Dia 2) - Contratos & Usuários
5. ✅ Implementar hooks de Contratos
6. ✅ Criar componentes UI de Contratos
7. ✅ Implementar páginas de Contratos
8. ✅ Implementar hooks de Usuários de Acesso
9. ✅ Criar formulário com vínculo de contabilidades
10. ✅ Criar páginas de Usuários

### Sprint 3 (Dia 3) - Billing
11. ✅ Implementar hooks de Planos
12. ✅ Implementar hooks de Assinaturas
13. ✅ Criar componentes UI de Billing
14. ✅ Implementar páginas de Billing

### Sprint 4 (Dia 4) - Contabilidades & Refinamento
15. ✅ Implementar hooks de Contabilidades
16. ✅ Criar componentes UI de Contabilidades
17. ✅ Implementar páginas de Contabilidades
18. ✅ Adicionar filtros avançados em todas as listas
19. ✅ Implementar export de dados

### Sprint 5 (Dia 5) - Testes & Documentação
20. ✅ Criar testes unitários dos hooks
21. ✅ Criar testes de integração das APIs
22. ✅ Documentar componentes com Storybook
23. ✅ Criar guia de uso para admin

---

## ✅ Checklist de Progresso

### Módulo 1: Contratos GESTK
- [ ] API Layer
- [ ] Types & Schemas
- [ ] Hooks React Query
- [ ] Componentes UI
- [ ] Páginas
- [ ] Testes

### Módulo 2: Billing
- [ ] API Layer (Planos)
- [ ] API Layer (Assinaturas)
- [ ] API Layer (Faturas)
- [ ] API Layer (Pagamentos)
- [ ] Types & Schemas
- [ ] Hooks React Query
- [ ] Componentes UI
- [ ] Páginas
- [ ] Testes

### Módulo 3: Usuários de Acesso
- [ ] API Layer
- [ ] Types & Schemas
- [ ] Hooks React Query
- [ ] Componentes UI (com vínculo de contabilidades)
- [ ] Páginas
- [ ] Testes

### Módulo 4: Contabilidades Admin
- [ ] API Layer
- [ ] Types & Schemas
- [ ] Hooks React Query
- [ ] Componentes UI
- [ ] Páginas
- [ ] Testes

---

## 📊 Métricas de Sucesso

- ✅ Todos os CRUDs funcionando
- ✅ Validação de dados client-side e server-side
- ✅ Feedback visual claro (loading, success, error)
- ✅ Filtros e busca em todas as listas
- ✅ Paginação server-side implementada
- ✅ Ações de status (ativar, suspender, cancelar) funcionando
- ✅ Vínculo de contabilidades aos usuários OK
- ✅ Export de dados implementado
- ✅ Zero erros no console
- ✅ Testes com cobertura >80%

---

**Próximo Passo**: Começar pela Sprint 1 - Criar estrutura e types básicos.

**Última Atualização**: 20/10/2025 14:45
