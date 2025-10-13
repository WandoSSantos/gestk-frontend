import { apiClient } from '@gestk/shared';
import type { 
  CarteiraCliente, 
  ClienteDetalhado, 
  ClienteFilters, 
  DjangoApiResponse,
  AniversarioParceria,
  SocioAniversariante,
  ComposicaoSocietaria,
  DateFilters
} from '@gestk/shared';

export class CarteiraService {
  /**
   * Obter lista da carteira de clientes
   */
  static async getCarteira(filtros?: ClienteFilters): Promise<DjangoApiResponse<CarteiraCliente>> {
    const params = new URLSearchParams();
    
    if (filtros?.search) params.append('search', filtros.search);
    if (filtros?.regime_fiscal) params.append('regime_fiscal', filtros.regime_fiscal);
    if (filtros?.ramo_atividade) params.append('ramo_atividade', filtros.ramo_atividade);
    if (filtros?.status_cliente) params.append('status_cliente', filtros.status_cliente);
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);
    if (filtros?.page) params.append('page', filtros.page.toString());
    if (filtros?.page_size) params.append('page_size', filtros.page_size.toString());

    return apiClient.get<DjangoApiResponse<CarteiraCliente>>(
      `/api/gestao/carteira/?${params.toString()}`
    );
  }

  /**
   * Obter detalhes de um cliente específico
   */
  static async getClienteDetalhado(id: string): Promise<ClienteDetalhado> {
    return apiClient.get<ClienteDetalhado>(`/api/gestao/clientes/${id}/`);
  }

  /**
   * Obter aniversários de parceria
   */
  static async getAniversariosParceria(filtros?: DateFilters): Promise<AniversarioParceria[]> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<AniversarioParceria[]>(
      `/api/gestao/carteira/aniversarios-parceria/?${params.toString()}`
    );
  }

  /**
   * Obter sócios aniversariantes
   */
  static async getSociosAniversariantes(filtros?: DateFilters): Promise<SocioAniversariante[]> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<SocioAniversariante[]>(
      `/api/gestao/carteira/socios-aniversariantes/?${params.toString()}`
    );
  }

  /**
   * Obter composição societária de um cliente
   */
  static async getComposicaoSocietaria(id: string): Promise<ComposicaoSocietaria[]> {
    return apiClient.get<ComposicaoSocietaria[]>(
      `/api/gestao/carteira/composicao-societaria/${id}/`
    );
  }

  /**
   * Obter distribuição por regime tributário
   */
  static async getDistribuicaoRegime(filtros?: DateFilters): Promise<Array<{ regime: string; quantidade: number }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{ regime: string; quantidade: number }>>(
      `/api/gestao/carteira/regime-tributario/?${params.toString()}`
    );
  }

  /**
   * Obter distribuição por ramo de atividade
   */
  static async getDistribuicaoRamo(filtros?: DateFilters): Promise<Array<{ ramo: string; quantidade: number }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{ ramo: string; quantidade: number }>>(
      `/api/gestao/carteira/ramo-atividade/?${params.toString()}`
    );
  }

  /**
   * Obter evolução da carteira
   */
  static async getEvolucao(filtros?: DateFilters): Promise<Array<{ mes: string; total: number; novos: number; cancelados: number }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{ mes: string; total: number; novos: number; cancelados: number }>>(
      `/api/gestao/carteira/evolucao/?${params.toString()}`
    );
  }

  /**
   * Obter estatísticas gerais da carteira
   */
  static async getEstatisticas(filtros?: DateFilters): Promise<{
    total_clientes: number;
    clientes_ativos: number;
    clientes_inativos: number;
    novos_este_mes: number;
    cancelados_este_mes: number;
    faturamento_total: number;
    faturamento_medio_por_cliente: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      total_clientes: number;
      clientes_ativos: number;
      clientes_inativos: number;
      novos_este_mes: number;
      cancelados_este_mes: number;
      faturamento_total: number;
      faturamento_medio_por_cliente: number;
    }>(`/api/gestao/carteira/estatisticas/?${params.toString()}`);
  }
}

