import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { carteiraApi } from '../../api/client/carteira.api';
import type {
  ClienteCarteira,
  CarteiraFilters,
  CarteiraApiResponse,
  CategoriasCarteira,
  EvolucaoMensal,
  PeriodoFilter,
} from '../../types/client/carteira.types';

/**
 * Hook para listar clientes da carteira com filtros
 */
export const useCarteira = (
  filters?: CarteiraFilters
): UseQueryResult<CarteiraApiResponse<ClienteCarteira>, Error> => {
  return useQuery({
    queryKey: ['carteira', 'clientes', filters],
    queryFn: () => carteiraApi.getClientes(filters),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

/**
 * Hook para obter categorias da carteira (ativos, inativos, novos, inadimplentes)
 */
export const useCategorias = (
  periodo?: PeriodoFilter
): UseQueryResult<CategoriasCarteira, Error> => {
  return useQuery({
    queryKey: ['carteira', 'categorias', periodo],
    queryFn: () => carteiraApi.getCategorias(periodo),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

/**
 * Hook para obter evolução mensal da carteira
 */
export const useEvolucao = (
  meses: number = 12
): UseQueryResult<EvolucaoMensal[], Error> => {
  return useQuery({
    queryKey: ['carteira', 'evolucao', meses],
    queryFn: () => carteiraApi.getEvolucao(meses),
    staleTime: 1000 * 60 * 10, // 10 minutos
  });
};
