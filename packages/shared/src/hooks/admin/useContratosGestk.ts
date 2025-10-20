/**
 * React Query Hooks para Contratos GESTK
 * Gerencia cache, mutations e side effects
 * Documentação: docs/BLOCO_ADMIN_ATUALIZADO.md
 */

import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  UseMutationResult,
} from '@tanstack/react-query';
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

// ============================================================================
// QUERIES (Read operations)
// ============================================================================

/**
 * Hook para listar contratos GESTK com filtros
 * @param filters Filtros opcionais
 * @returns Query result com lista de contratos
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
 * @param id ID do contrato
 * @returns Query result com dados do contrato
 */
export const useContratoGestk = (id: string): UseQueryResult<ContratoGestk, Error> => {
  return useQuery({
    queryKey: ['contrato-gestk', id],
    queryFn: () => contratosGestkApi.get(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Hook para obter resumo/estatísticas dos contratos
 * @returns Query result com resumo dos contratos
 */
export const useContratosGestkResumo = (): UseQueryResult<ContratoGestkResumo, Error> => {
  return useQuery({
    queryKey: ['contratos-gestk-resumo'],
    queryFn: contratosGestkApi.resumo,
    staleTime: 1000 * 60 * 10, // 10 minutos
  });
};

// ============================================================================
// MUTATIONS (Write operations)
// ============================================================================

/**
 * Hook para criar um novo contrato
 * @returns Mutation para criar contrato
 */
export const useCreateContratoGestk = (): UseMutationResult<
  ContratoGestk,
  Error,
  ContratoGestkCreateData,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: contratosGestkApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato criado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao criar contrato');
    },
  });
};

/**
 * Hook para atualizar um contrato (PUT)
 * @returns Mutation para atualizar contrato
 */
export const useUpdateContratoGestk = (): UseMutationResult<
  ContratoGestk,
  Error,
  { id: string; data: ContratoGestkCreateData },
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => contratosGestkApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato atualizado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao atualizar contrato');
    },
  });
};

/**
 * Hook para atualizar parcialmente um contrato (PATCH)
 * @returns Mutation para atualizar parcialmente contrato
 */
export const usePartialUpdateContratoGestk = (): UseMutationResult<
  ContratoGestk,
  Error,
  { id: string; data: ContratoGestkUpdateData },
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => contratosGestkApi.partialUpdate(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato atualizado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao atualizar contrato');
    },
  });
};

/**
 * Hook para deletar um contrato
 * @returns Mutation para deletar contrato
 */
export const useDeleteContratoGestk = (): UseMutationResult<
  void,
  Error,
  string,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: contratosGestkApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato deletado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao deletar contrato');
    },
  });
};

/**
 * Hook para suspender um contrato
 * @returns Mutation para suspender contrato
 */
export const useSuspenderContratoGestk = (): UseMutationResult<
  ContratoGestk,
  Error,
  { id: string; motivo: string },
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, motivo }) => contratosGestkApi.suspender(id, motivo),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato suspenso com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao suspender contrato');
    },
  });
};

/**
 * Hook para cancelar um contrato
 * @returns Mutation para cancelar contrato
 */
export const useCancelarContratoGestk = (): UseMutationResult<
  ContratoGestk,
  Error,
  { id: string; motivo: string },
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, motivo }) => contratosGestkApi.cancelar(id, motivo),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato cancelado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao cancelar contrato');
    },
  });
};

/**
 * Hook para ativar um contrato
 * @returns Mutation para ativar contrato
 */
export const useAtivarContratoGestk = (): UseMutationResult<
  ContratoGestk,
  Error,
  string,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: contratosGestkApi.ativar,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk'] });
      queryClient.invalidateQueries({ queryKey: ['contrato-gestk', id] });
      queryClient.invalidateQueries({ queryKey: ['contratos-gestk-resumo'] });
      toast.success('Contrato ativado com sucesso!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Erro ao ativar contrato');
    },
  });
};
