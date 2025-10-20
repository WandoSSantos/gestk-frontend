# 🏢 Plano de Implementação - Módulos de Administração (ATUALIZADO)

**Data de Criação**: 20/10/2025  
**Última Atualização**: 20/10/2025 19:30  
**Status**: 📋 PRONTO PARA EXECUÇÃO  
**Base**: Documentação oficial do backend (`INTEGRACAO_FRONTEND_BACKEND.md`)

---

## 📊 Overview dos Módulos

| Módulo | Endpoints | ViewSets | Status Backend | Status Frontend |
|--------|-----------|----------|----------------|-----------------|
| **Contratos GESTK** | 10 | ContratoGestkViewSet | ✅ 100% | ⏳ 0% |
| **Usuários de Acesso** | 10 | UsuarioAcessoViewSet | ✅ 100% | ⏳ 0% |
| **Contabilidades Admin** | 6 | ContabilidadeAdminViewSet | ✅ 100% | ⏳ 0% |
| **TOTAL** | **26** | **3** | **✅ PRONTO** | **⏳ PENDENTE** |

**Backend Base URL**: `http://localhost:8000/api/administracao/`  
**Autenticação**: JWT Bearer Token (8h access, 7d refresh)  
**Multitenancy**: Header `X-Contabilidade-ID` quando aplicável  

---

## 🎯 Ordem de Implementação

### BLOCO 1: Contratos GESTK (4-5 horas) ⬅️ COMEÇAR AQUI
- 10 endpoints (CRUD + 4 actions + resumo)
- Alta prioridade - Core business
- Integração com Contabilidades

### BLOCO 2: Usuários de Acesso (4-5 horas)
- 10 endpoints (CRUD + 4 actions + resumo)
- Gestão de permissões e roles
- Controle de vigência

### BLOCO 3: Contabilidades Admin (3-4 horas)
- 6 endpoints (Read-only + 3 actions + resumo + histórico)
- Visão administrativa completa
- Agregação de dados

**Tempo Total Estimado**: 11-14 horas (~2 dias)

---

## 📦 BLOCO 1: Contratos GESTK (10 endpoints)

### Base URL
```
/api/administracao/contratos-gestk/
```

### Endpoints Implementados no Backend
```
✅ GET    /api/administracao/contratos-gestk/              - Listar contratos
✅ GET    /api/administracao/contratos-gestk/{id}/         - Detalhar contrato
✅ POST   /api/administracao/contratos-gestk/              - Criar contrato
✅ PUT    /api/administracao/contratos-gestk/{id}/         - Atualizar completo
✅ PATCH  /api/administracao/contratos-gestk/{id}/         - Atualizar parcial
✅ DELETE /api/administracao/contratos-gestk/{id}/         - Deletar contrato
✅ POST   /api/administracao/contratos-gestk/{id}/suspender/ - Suspender (motivo)
✅ POST   /api/administracao/contratos-gestk/{id}/cancelar/  - Cancelar (motivo)
✅ POST   /api/administracao/contratos-gestk/{id}/ativar/    - Ativar contrato
✅ GET    /api/administracao/contratos-gestk/resumo/       - Estatísticas
```

### 1. Types TypeScript

**Arquivo**: `packages/shared/src/types/admin/contratos-gestk.types.ts`

```typescript
export interface ContratoGestk {
  id: string;
  contabilidade: string; // UUID
  contabilidade_razao_social: string; // Read-only
  contabilidade_cnpj: string; // Read-only
  numero_contrato: string;
  plano_servico: 'basico' | 'intermediario' | 'avancado' | 'enterprise' | 'custom';
  modulos_inclusos: string[]; // ['fiscal', 'contabil', 'folha', 'financeiro']
  limites: {
    max_empresas?: number;
    max_usuarios?: number;
    max_upload_mensal_mb?: number;
  };
  data_inicio: string; // ISO 8601
  data_fim: string | null; // ISO 8601
  trial_ate: string | null; // ISO 8601
  valor_mensal: string; // Decimal
  valor_setup: string | null; // Decimal
  status: 'trial' | 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
  motivo_suspensao: string | null;
  data_suspensao: string | null;
  motivo_cancelamento: string | null;
  data_cancelamento: string | null;
  observacoes: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface ContratoGestkCreateData {
  contabilidade: string; // UUID
  numero_contrato: string;
  plano_servico: 'basico' | 'intermediario' | 'avancado' | 'enterprise' | 'custom';
  modulos_inclusos: string[];
  limites?: {
    max_empresas?: number;
    max_usuarios?: number;
    max_upload_mensal_mb?: number;
  };
  data_inicio: string;
  data_fim?: string | null;
  trial_ate?: string | null;
  valor_mensal: string;
  valor_setup?: string | null;
  observacoes?: string | null;
}

export interface ContratoGestkUpdateData extends Partial<ContratoGestkCreateData> {}

export interface ContratoGestkFilters {
  contabilidade?: string;
  numero_contrato?: string;
  plano_servico?: string;
  status?: 'trial' | 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
  data_inicio_apos?: string;
  data_inicio_antes?: string;
  search?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
}

export interface ContratoGestkResumo {
  total: number;
  por_status: {
    trial: number;
    ativo: number;
    suspenso: number;
    cancelado: number;
    vencido: number;
  };
  por_plano: {
    basico: number;
    intermediario: number;
    avancado: number;
    enterprise: number;
    custom: number;
  };
  receita_mensal: string;
  receita_anual: string;
  total_empresas_ativas: number;
  total_usuarios_ativos: number;
}

export interface ContratoGestkApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ContratoGestk[];
}
```

### 2. API Layer

**Arquivo**: `packages/shared/src/api/admin/contratos-gestk.api.ts`

```typescript
import { apiClient } from '../client';
import type {
  ContratoGestk,
  ContratoGestkCreateData,
  ContratoGestkUpdateData,
  ContratoGestkFilters,
  ContratoGestkResumo,
  ContratoGestkApiResponse,
} from '../../types/admin/contratos-gestk.types';

export const contratosGestkApi = {
  /**
   * Lista todos os contratos GESTK com filtros
   */
  async list(filters?: ContratoGestkFilters): Promise<ContratoGestkApiResponse> {
    const params = new URLSearchParams();
    
    if (filters?.contabilidade) params.append('contabilidade', filters.contabilidade);
    if (filters?.numero_contrato) params.append('numero_contrato', filters.numero_contrato);
    if (filters?.plano_servico) params.append('plano_servico', filters.plano_servico);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.data_inicio_apos) params.append('data_inicio_apos', filters.data_inicio_apos);
    if (filters?.data_inicio_antes) params.append('data_inicio_antes', filters.data_inicio_antes);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.ordering) params.append('ordering', filters.ordering);
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.page_size) params.append('page_size', String(filters.page_size));

    const queryString = params.toString();
    const url = `/api/administracao/contratos-gestk/${queryString ? `?${queryString}` : ''}`;
    
    return apiClient.get<ContratoGestkApiResponse>(url);
  },

  /**
   * Obtém detalhes de um contrato específico
   */
  async get(id: string): Promise<ContratoGestk> {
    return apiClient.get<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/`);
  },

  /**
   * Cria um novo contrato GESTK
   */
  async create(data: ContratoGestkCreateData): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>('/api/administracao/contratos-gestk/', data);
  },

  /**
   * Atualiza um contrato completamente (PUT)
   */
  async update(id: string, data: ContratoGestkCreateData): Promise<ContratoGestk> {
    return apiClient.put<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/`, data);
  },

  /**
   * Atualiza um contrato parcialmente (PATCH)
   */
  async partialUpdate(id: string, data: ContratoGestkUpdateData): Promise<ContratoGestk> {
    return apiClient.patch<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/`, data);
  },

  /**
   * Deleta um contrato
   */
  async delete(id: string): Promise<void> {
    return apiClient.delete(`/api/administracao/contratos-gestk/${id}/`);
  },

  /**
   * Suspende um contrato com motivo
   */
  async suspender(id: string, motivo: string): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>(
      `/api/administracao/contratos-gestk/${id}/suspender/`,
      { motivo }
    );
  },

  /**
   * Cancela um contrato com motivo
   */
  async cancelar(id: string, motivo: string): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>(
      `/api/administracao/contratos-gestk/${id}/cancelar/`,
      { motivo }
    );
  },

  /**
   * Ativa um contrato suspenso
   */
  async ativar(id: string): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/ativar/`);
  },

  /**
   * Obtém resumo/estatísticas dos contratos
   */
  async resumo(): Promise<ContratoGestkResumo> {
    return apiClient.get<ContratoGestkResumo>('/api/administracao/contratos-gestk/resumo/');
  },
};
```

### 3. React Query Hooks

**Arquivo**: `packages/shared/src/hooks/admin/useContratosGestk.ts`

```typescript
import { useQuery, useMutation, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { contratosGestkApi } from '../../api/admin/contratos-gestk.api';
import type {
  ContratoGestk,
  ContratoGestkCreateData,
  ContratoGestkUpdateData,
  ContratoGestkFilters,
  ContratoGestkResumo,
  ContratoGestkApiResponse,
} from '../../types/admin/contratos-gestk.types';
import { toast } from 'sonner';

/**
 * Hook para listar contratos GESTK com filtros
 */
export const useContratosGestk = (
  filters?: ContratoGestkFilters
): UseQueryResult<ContratoGestkApiResponse, Error> => {
  return useQuery({
    queryKey: ['contratos-gestk', filters],
    queryFn: () => contratosGestkApi.list(filters),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

/**
 * Hook para obter detalhes de um contrato específico
 */
export const useContratoGestk = (
  id: string
): UseQueryResult<ContratoGestk, Error> => {
  return useQuery({
    queryKey: ['contrato-gestk', id],
    queryFn: () => contratosGestkApi.get(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Hook para criar um novo contrato
 */
export const useCreateContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: contratosGestkApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      toast.success('Contrato criado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao criar contrato');
    },
  });
};

/**
 * Hook para atualizar um contrato (PUT)
 */
export const useUpdateContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ContratoGestkCreateData }) =>
      contratosGestkApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      toast.success('Contrato atualizado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao atualizar contrato');
    },
  });
};

/**
 * Hook para atualizar parcialmente um contrato (PATCH)
 */
export const usePartialUpdateContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ContratoGestkUpdateData }) =>
      contratosGestkApi.partialUpdate(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      toast.success('Contrato atualizado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao atualizar contrato');
    },
  });
};

/**
 * Hook para deletar um contrato
 */
export const useDeleteContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: contratosGestkApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      toast.success('Contrato deletado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao deletar contrato');
    },
  });
};

/**
 * Hook para suspender um contrato
 */
export const useSuspenderContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, motivo }: { id: string; motivo: string }) =>
      contratosGestkApi.suspender(id, motivo),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      toast.success('Contrato suspenso com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao suspender contrato');
    },
  });
};

/**
 * Hook para cancelar um contrato
 */
export const useCancelarContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, motivo }: { id: string; motivo: string }) =>
      contratosGestkApi.cancelar(id, motivo),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      toast.success('Contrato cancelado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao cancelar contrato');
    },
  });
};

/**
 * Hook para ativar um contrato
 */
export const useAtivarContratoGestk = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: contratosGestkApi.ativar,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', id] });
      toast.success('Contrato ativado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao ativar contrato');
    },
  });
};

/**
 * Hook para obter resumo/estatísticas dos contratos
 */
export const useContratosGestkResumo = (): UseQueryResult<ContratoGestkResumo, Error> => {
  return useQuery({
    queryKey: ['contratos-gestk-resumo'],
    queryFn: contratosGestkApi.resumo,
    staleTime: 1000 * 60 * 10, // 10 minutos
  });
};
```

### 4. Próximos Arquivos a Criar

**Componentes** (apps/admin/src/components/admin/contratos-gestk/):
- `ContratosGestkTable.tsx` - Tabela com paginação
- `ContratoGestkForm.tsx` - Formulário create/edit
- `ContratoGestkCard.tsx` - Card de resumo
- `ContratoGestkFilters.tsx` - Filtros avançados
- `ContratoGestkActions.tsx` - Botões de ação (suspender, cancelar, ativar)

**Páginas** (apps/admin/src/app/(dashboard)/admin/contratos-gestk/):
- `page.tsx` - Lista de contratos
- `novo/page.tsx` - Criar contrato
- `[id]/page.tsx` - Detalhes do contrato
- `[id]/editar/page.tsx` - Editar contrato

---

## 📦 BLOCO 2: Usuários de Acesso (10 endpoints)

[Estrutura similar ao BLOCO 1, seguindo o mesmo padrão]

**Base URL**: `/api/administracao/usuarios-acesso/`

**Endpoints**: List, Detail, Create, Update, Patch, Delete, Ativar, Desativar, EstenderVigencia, Resumo

---

## 📦 BLOCO 3: Contabilidades Admin (6 endpoints)

[Estrutura similar, mas sem Create/Update/Delete - apenas Read + Actions]

**Base URL**: `/api/administracao/contabilidades-admin/`

**Endpoints**: List, Detail, SuspenderPorInadimplencia, Reativar, Resumo, Historico

---

## ✅ Checklist de Execução - BLOCO 1

### Sprint 1: Fundação (1-2h)
- [ ] Criar `contratos-gestk.types.ts` com todas as interfaces
- [ ] Criar `contratos-gestk.api.ts` com os 10 métodos
- [ ] Criar `useContratosGestk.ts` com os 9 hooks
- [ ] Exportar tudo no `packages/shared/src/index.ts`
- [ ] Compilar shared package: `npm run build`

### Sprint 2: Componentes (2-3h)
- [ ] Criar `ContratosGestkTable.tsx`
- [ ] Criar `ContratoGestkForm.tsx`  
- [ ] Criar `ContratoGestkFilters.tsx`
- [ ] Criar `ContratoGestkActions.tsx`

### Sprint 3: Páginas (1-2h)
- [ ] Criar `page.tsx` (lista)
- [ ] Criar `novo/page.tsx` (create)
- [ ] Criar `[id]/page.tsx` (detail)
- [ ] Criar `[id]/editar/page.tsx` (edit)

### Sprint 4: Testes (30min-1h)
- [ ] Testar listagem com filtros
- [ ] Testar create/update/delete
- [ ] Testar actions (suspender, cancelar, ativar)
- [ ] Validar toasts e feedback

---

## 🚀 PRÓXIMOS PASSOS

1. **Começar BLOCO 1**: Implementar Contratos GESTK completo
2. **Validar no navegador**: Testar todos os endpoints
3. **Repetir padrão para BLOCO 2**: Usuários de Acesso
4. **Repetir padrão para BLOCO 3**: Contabilidades Admin

**Tempo Total Estimado**: 11-14 horas (~2 dias de desenvolvimento)

---

**Última Atualização**: 20/10/2025 19:30  
**Documento Base**: `INTEGRACAO_FRONTEND_BACKEND.md`  
**Status**: ✅ Pronto para executar BLOCO 1
