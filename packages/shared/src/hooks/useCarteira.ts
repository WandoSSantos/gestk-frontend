/**
 * React Query Hooks para Carteira de Clientes
 * 
 * Integração com API de gestão de carteira
 * Endpoints: /api/gestao/carteira/*
 * 
 * @module hooks/useCarteira
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { gestaoService } from '../api/services/gestao.service';
import { toast } from 'sonner';
import type {
  CarteiraCliente,
  ClienteDetalhado,
  CategoriaCliente,
  EvolucaoMensal,
  FiltrosCarteira,
  PaginatedResponse,
  PaginationParams
} from '../api/types/client.types';

// ============================================================================
// QUERY HOOKS
// ============================================================================

/**
 * Hook para listar clientes da carteira com filtros e paginação
 * 
 * @example
 * const { data, isLoading, error } = useCarteiraClientes(filters);
 */
export function useCarteiraClientes(
  filters?: FiltrosCarteira & PaginationParams
) {
  return useQuery({
    queryKey: ['carteira', 'clientes', filters],
    queryFn: async () => {
      const defaultFilters = {
        page: 1,
        page_size: 10,
        ...filters
      };
      const response = await gestaoService.carteira.listar(defaultFilters);
      return response;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos (antigo cacheTime)
    enabled: !!filters?.page_size || !!filters?.page,
    placeholderData: (previousData) => previousData
  });
}

/**
 * Hook para obter detalhes de um cliente específico
 * 
 * @example
 * const { data, isLoading } = useCarteiraCliente(clienteId);
 */
export function useCarteiraCliente(clienteId?: string) {
  return useQuery({
    queryKey: ['carteira', 'cliente', clienteId],
    queryFn: async () => {
      if (!clienteId) throw new Error('Cliente ID é obrigatório');
      return gestaoService.carteira.detalhes(clienteId);
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!clienteId
  });
}

/**
 * Hook para obter resumo/estatísticas da carteira
 * 
 * @example
 * const { data } = useCarteiraResumo();
 */
export function useCarteiraResumo() {
  return useQuery({
    queryKey: ['carteira', 'resumo'],
    queryFn: async () => {
      const response = await gestaoService.carteira.resumo();
      // Extrair summary da resposta ou retornar dados diretamente
      return response.data?.summary || response.data;
    },
    staleTime: 10 * 60 * 1000, // Mais tempo no cache
    gcTime: 20 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000 // Refetch a cada 5 min
  });
}

/**
 * Hook para obter categorias/classificação de clientes
 * 
 * @example
 * const { data: categorias } = useCategorias();
 */
export function useCategorias(filters?: FiltrosCarteira) {
  return useQuery({
    queryKey: ['carteira', 'categorias', filters],
    queryFn: async () => {
      return gestaoService.carteira.categorias(filters);
    },
    staleTime: 30 * 60 * 1000, // Dados mais estáticos
    gcTime: 60 * 60 * 1000
  });
}

/**
 * Hook para obter evolução da carteira por período
 * 
 * @example
 * const { data: evolucao } = useCarteiraEvolucao({
 *   data_inicio: '2025-01-01',
 *   data_fim: '2025-10-21'
 * });
 */
export function useCarteiraEvolucao(periodo?: {
  data_inicio?: string;
  data_fim?: string;
  meses?: number;
}) {
  return useQuery({
    queryKey: ['carteira', 'evolucao', periodo],
    queryFn: async () => {
      return gestaoService.carteira.evolucao(periodo);
    },
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    enabled: !!periodo
  });
}

/**
 * Hook para aniversários de parceria
 * 
 * @example
 * const { data: aniversarios } = useAniversariosParceria(12);
 */
export function useAniversariosParceria(meses?: number) {
  return useQuery({
    queryKey: ['carteira', 'aniversarios-parceria', meses],
    queryFn: async () => {
      return gestaoService.carteira.aniversarios(meses);
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
    enabled: true
  });
}

/**
 * Hook para sócios aniversariantes
 */
export function useSociosAniversariantes(meses?: number) {
  return useQuery({
    queryKey: ['carteira', 'socios-aniversariantes', meses],
    queryFn: async () => {
      return gestaoService.carteira.sociosAniversariantes(meses);
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
    enabled: true
  });
}

/**
 * Hook para composição societária de um cliente
 */
export function useComposicaoSocietaria(clienteId?: string) {
  return useQuery({
    queryKey: ['carteira', 'composicao-societaria', clienteId],
    queryFn: async () => {
      if (!clienteId) throw new Error('Cliente ID é obrigatório');
      return gestaoService.carteira.composicaoSocietaria(clienteId);
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
    enabled: !!clienteId
  });
}

/**
 * Hook para distribuição por regime tributário
 */
export function useRegimeTributario() {
  return useQuery({
    queryKey: ['carteira', 'regime-tributario'],
    queryFn: async () => {
      return gestaoService.carteira.regimeTributario();
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000
  });
}

/**
 * Hook para distribuição por ramo de atividade
 */
export function useRamoAtividade() {
  return useQuery({
    queryKey: ['carteira', 'ramo-atividade'],
    queryFn: async () => {
      return gestaoService.carteira.ramoAtividade();
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000
  });
}

// ============================================================================
// MUTATION HOOKS
// ============================================================================

/**
 * Hook para atualizar um cliente da carteira
 * 
 * @example
 * const { mutate: atualizar, isPending } = useUpdateCarteiraCliente();
 * atualizar({ id: '123', data: { razao_social: 'Novo Nome' } });
 */
export function useUpdateCarteiraCliente() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<CarteiraCliente> }) => {
      return gestaoService.carteira.atualizar(id, data);
    },
    onSuccess: (data, variables) => {
      // Invalidar queries relacionadas
      queryClient.invalidateQueries({ queryKey: ['carteira', 'clientes'] });
      queryClient.invalidateQueries({ queryKey: ['carteira', 'cliente', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['carteira', 'resumo'] });
      
      toast.success('Cliente atualizado com sucesso!');
    },
    onError: (error) => {
      toast.error(`Erro ao atualizar cliente: ${error.message}`);
    }
  });
}

/**
 * Hook para exportar carteira em diferentes formatos
 * 
 * @example
 * const { mutate: exportar, isPending } = useExportarCarteira();
 * exportar({ formato: 'pdf', filtros: {} });
 */
export function useExportarCarteira() {
  return useMutation({
    mutationFn: async ({
      formato,
      filtros
    }: {
      formato: 'pdf' | 'excel' | 'csv';
      filtros?: FiltrosCarteira;
    }) => {
      return gestaoService.carteira.exportar(filtros || {}, formato);
    },
    onSuccess: (data, variables) => {
      toast.success(`Carteira exportada em ${variables.formato.toUpperCase()}!`);
      
      // Download do arquivo
      const url = window.URL.createObjectURL(data as Blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `carteira-${new Date().toISOString().split('T')[0]}.${variables.formato}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    },
    onError: (error) => {
      toast.error(`Erro ao exportar carteira: ${error.message}`);
    }
  });
}

/**
 * Hook para refetch manual da carteira
 * 
 * @example
 * const { refetch } = useCarteiraClientes();
 * refetch(); // Atualizar dados manualmente
 */
export function useRefreshCarteira() {
  const queryClient = useQueryClient();

  return {
    refreshAll: () => {
      queryClient.invalidateQueries({ queryKey: ['carteira'] });
    },
    refreshClientes: () => {
      queryClient.invalidateQueries({ queryKey: ['carteira', 'clientes'] });
    },
    refreshResumo: () => {
      queryClient.invalidateQueries({ queryKey: ['carteira', 'resumo'] });
    }
  };
}
