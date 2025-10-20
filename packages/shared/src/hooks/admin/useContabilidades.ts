/**
 * Hooks React Query para Contabilidades (Admin)
 *
 * Gerencia contabilidades com:
 * - Queries para listagem, detalhes e resumo
 * - Mutations para atualizar, suspender e reativar
 * - Invalidação automática de cache
 * - Toast notifications
 */

import { useQuery, useMutation, useQueryClient, type UseQueryOptions, type UseMutationOptions } from '@tanstack/react-query'
import { toast } from 'sonner'
import { contabilidadesApi } from '../../api/admin/contabilidades.api'
import type {
  ContabilidadeAdmin,
  ContabilidadeFilters,
  ContabilidadeUpdateData,
  ContabilidadesAdminPaginatedResponse,
  ContabilidadeSummary,
} from '../../types/admin/contabilidades.types'

/**
 * Query keys para cache do React Query
 */
export const contabilidadesKeys = {
  all: ['contabilidades-admin'] as const,
  lists: () => [...contabilidadesKeys.all, 'list'] as const,
  list: (filters?: ContabilidadeFilters) => [...contabilidadesKeys.lists(), filters] as const,
  details: () => [...contabilidadesKeys.all, 'detail'] as const,
  detail: (id: string) => [...contabilidadesKeys.details(), id] as const,
  summary: () => [...contabilidadesKeys.all, 'summary'] as const,
}

/**
 * Hook para listar contabilidades com filtros
 */
export function useContabilidades(
  filters?: ContabilidadeFilters,
  options?: Omit<UseQueryOptions<ContabilidadesAdminPaginatedResponse>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: contabilidadesKeys.list(filters),
    queryFn: () => contabilidadesApi.list(filters),
    staleTime: 1000 * 60 * 5, // 5 minutos
    ...options,
  })
}

/**
 * Hook para obter detalhes de uma contabilidade
 */
export function useContabilidade(
  id: string,
  options?: Omit<UseQueryOptions<ContabilidadeAdmin>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: contabilidadesKeys.detail(id),
    queryFn: () => contabilidadesApi.get(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutos
    ...options,
  })
}

/**
 * Hook para obter resumo estatístico das contabilidades
 */
export function useContabilidadesSummary(
  options?: Omit<UseQueryOptions<ContabilidadeSummary>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: contabilidadesKeys.summary(),
    queryFn: () => contabilidadesApi.summary(),
    staleTime: 1000 * 60 * 2, // 2 minutos
    ...options,
  })
}

/**
 * Hook para atualizar contabilidade existente
 */
export function useUpdateContabilidade(
  options?: UseMutationOptions<
    ContabilidadeAdmin,
    Error,
    { id: string; data: ContabilidadeUpdateData }
  >
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ContabilidadeUpdateData }) =>
      contabilidadesApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.lists() })
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.detail(variables.id) })
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.summary() })
      toast.success('Contabilidade atualizada com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao atualizar contabilidade: ${error.message}`)
    },
    ...options,
  })
}

/**
 * Hook para ações de contabilidade (suspender, reativar)
 */
export function useContabilidadeActions() {
  const queryClient = useQueryClient()

  const suspendForInadimplencia = useMutation({
    mutationFn: (id: string) => contabilidadesApi.suspendForInadimplencia(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.lists() })
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.summary() })
      toast.success('Contabilidade suspensa por inadimplência!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao suspender contabilidade: ${error.message}`)
    },
  })

  const reactivate = useMutation({
    mutationFn: (id: string) => contabilidadesApi.reactivate(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.lists() })
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: contabilidadesKeys.summary() })
      toast.success('Contabilidade reativada com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao reativar contabilidade: ${error.message}`)
    },
  })

  return {
    suspendForInadimplencia,
    reactivate,
  }
}
