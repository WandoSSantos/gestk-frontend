import { apiClient } from '@gestk/shared';
import type { 
  ClienteDetalhado, 
  ClienteFilters, 
  DjangoApiResponse,
  SimulacaoCustoPayload,
  DateFilters
} from '@gestk/shared';

export class ClientesService {
  /**
   * Obter lista de clientes
   */
  static async getClientes(filtros?: ClienteFilters): Promise<DjangoApiResponse<ClienteDetalhado>> {
    const params = new URLSearchParams();
    
    if (filtros?.search) params.append('search', filtros.search);
    if (filtros?.regime_fiscal) params.append('regime_fiscal', filtros.regime_fiscal);
    if (filtros?.ramo_atividade) params.append('ramo_atividade', filtros.ramo_atividade);
    if (filtros?.status_cliente) params.append('status_cliente', filtros.status_cliente);
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);
    if (filtros?.page) params.append('page', filtros.page.toString());
    if (filtros?.page_size) params.append('page_size', filtros.page_size.toString());

    return apiClient.get<DjangoApiResponse<ClienteDetalhado>>(
      `/api/gestao/clientes/lista/?${params.toString()}`
    );
  }

  /**
   * Obter detalhes de um cliente específico
   */
  static async getCliente(id: string): Promise<ClienteDetalhado> {
    return apiClient.get<ClienteDetalhado>(`/api/gestao/clientes/lista/${id}/`);
  }

  /**
   * Obter custo operacional por cliente
   */
  static async getCustoOperacional(filtros?: DateFilters & { cliente_id?: string }): Promise<Array<{
    cliente_id: string;
    razao_social: string;
    cnpj: string;
    mes: string;
    faturamento: number;
    tempo_gasto: number;
    lancamentos: number;
    lancamentos_manuais: number;
    percentual_manual: number;
    custo_operacional: number;
    rentabilidade_operacional: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);
    if (filtros?.cliente_id) params.append('cliente_id', filtros.cliente_id);

    return apiClient.get<Array<{
      cliente_id: string;
      razao_social: string;
      cnpj: string;
      mes: string;
      faturamento: number;
      tempo_gasto: number;
      lancamentos: number;
      lancamentos_manuais: number;
      percentual_manual: number;
      custo_operacional: number;
      rentabilidade_operacional: number;
    }>>(`/api/gestao/clientes/custo-operacional/?${params.toString()}`);
  }

  /**
   * Obter análise de rentabilidade por cliente
   */
  static async getRentabilidade(filtros?: DateFilters & { cliente_id?: string }): Promise<Array<{
    cliente_id: string;
    razao_social: string;
    cnpj: string;
    mes: string;
    receita: number;
    custos: number;
    lucro: number;
    margem_lucro: number;
    roi: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);
    if (filtros?.cliente_id) params.append('cliente_id', filtros.cliente_id);

    return apiClient.get<Array<{
      cliente_id: string;
      razao_social: string;
      cnpj: string;
      mes: string;
      receita: number;
      custos: number;
      lucro: number;
      margem_lucro: number;
      roi: number;
    }>>(`/api/gestao/clientes/rentabilidade/?${params.toString()}`);
  }

  /**
   * Simular custo operacional
   */
  static async simularCusto(data: SimulacaoCustoPayload): Promise<{
    custo_total: number;
    custo_por_hora: number;
    rentabilidade_estimada: number;
    recomendacoes: string[];
  }> {
    return apiClient.post<{
      custo_total: number;
      custo_por_hora: number;
      rentabilidade_estimada: number;
      recomendacoes: string[];
    }>('/api/gestao/clientes/simulacao-custo/', data);
  }

  /**
   * Obter valor hora atual do escritório
   */
  static async getValorHora(): Promise<{ valor_hora: number }> {
    return apiClient.get<{ valor_hora: number }>('/api/gestao/clientes/valor-hora/');
  }

  /**
   * Atualizar valor hora do escritório
   */
  static async updateValorHora(valor: number): Promise<{ valor_hora: number }> {
    return apiClient.put<{ valor_hora: number }>('/api/gestao/clientes/valor-hora/', {
      valor_hora: valor
    });
  }

  /**
   * Obter composição societária de um cliente
   */
  static async getComposicaoSocietaria(clienteId: string): Promise<Array<{
    id: string;
    nome: string;
    cpf_cnpj: string;
    participacao: number;
    tipo: 'pessoa_fisica' | 'pessoa_juridica';
    outras_empresas: string[];
  }>> {
    return apiClient.get<Array<{
      id: string;
      nome: string;
      cpf_cnpj: string;
      participacao: number;
      tipo: 'pessoa_fisica' | 'pessoa_juridica';
      outras_empresas: string[];
    }>>(`/api/gestao/clientes/composicao-societaria/${clienteId}/`);
  }

  /**
   * Obter histórico de atividades de um cliente
   */
  static async getHistoricoAtividades(clienteId: string, filtros?: DateFilters): Promise<Array<{
    data: string;
    atividade: string;
    usuario: string;
    tempo_gasto: number;
    lancamentos: number;
    observacoes?: string;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      data: string;
      atividade: string;
      usuario: string;
      tempo_gasto: number;
      lancamentos: number;
      observacoes?: string;
    }>>(`/api/gestao/clientes/historico-atividades/${clienteId}/?${params.toString()}`);
  }
}

