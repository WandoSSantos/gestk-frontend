import { apiClient } from '../client';
import type {
  ClienteCarteira,
  CarteiraFilters,
  CarteiraApiResponse,
  CategoriasCarteira,
  EvolucaoMensal,
  PeriodoFilter,
} from '../../types/client/carteira.types';

/**
 * API de Carteira de Clientes
 * Endpoints para gestão e visualização da carteira de clientes
 */
export const carteiraApi = {
  /**
   * Lista clientes da carteira com filtros e paginação
   */
  async getClientes(filters?: CarteiraFilters): Promise<CarteiraApiResponse<ClienteCarteira>> {
    const params = new URLSearchParams();
    
    if (filters?.regime_fiscal) params.append('regime_fiscal', filters.regime_fiscal);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.data_inicio) params.append('data_inicio', filters.data_inicio);
    if (filters?.data_fim) params.append('data_fim', filters.data_fim);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.inadimplente !== undefined) params.append('inadimplente', String(filters.inadimplente));
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.page_size) params.append('page_size', String(filters.page_size));

    const queryString = params.toString();
    const url = `/api/gestao/carteira/clientes/${queryString ? `?${queryString}` : ''}`;
    
    return apiClient.get<CarteiraApiResponse<ClienteCarteira>>(url);
  },

  /**
   * Obtém categorização dos clientes (ativos, inativos, novos, inadimplentes)
   */
  async getCategorias(periodo?: PeriodoFilter): Promise<CategoriasCarteira> {
    const params = new URLSearchParams();
    
    if (periodo?.data_inicio) params.append('data_inicio', periodo.data_inicio);
    if (periodo?.data_fim) params.append('data_fim', periodo.data_fim);

    const queryString = params.toString();
    const url = `/api/gestao/carteira/categorias/${queryString ? `?${queryString}` : ''}`;
    
    return apiClient.get<CategoriasCarteira>(url);
  },

  /**
   * Obtém evolução mensal da carteira
   * @param meses - Número de meses a retornar (default: 12)
   */
  async getEvolucao(meses: number = 12): Promise<EvolucaoMensal[]> {
    return apiClient.get<EvolucaoMensal[]>(`/api/gestao/carteira/evolucao/?meses=${meses}`);
  },
};
