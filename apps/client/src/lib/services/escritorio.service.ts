import { apiClient } from '@gestk/shared';
import type { DateFilters } from '@gestk/shared';

export class EscritorioService {
  /**
   * Obter dados gerais do escritório
   */
  static async getEscritorio(): Promise<{
    nome: string;
    cnpj: string;
    endereco: string;
    telefone: string;
    email: string;
    responsavel: string;
    data_fundacao: string;
    total_clientes: number;
    total_usuarios: number;
    modulos_ativos: string[];
  }> {
    return apiClient.get<{
      nome: string;
      cnpj: string;
      endereco: string;
      telefone: string;
      email: string;
      responsavel: string;
      data_fundacao: string;
      total_clientes: number;
      total_usuarios: number;
      modulos_ativos: string[];
    }>('/api/gestao/escritorio/');
  }

  /**
   * Obter análise mensal do escritório
   */
  static async getAnaliseMensal(filtros?: DateFilters): Promise<Array<{
    mes: string;
    clientes: number;
    faturamento: number;
    variacao_faturamento: number;
    tempo_ativo: number;
    lancamentos: number;
    percentual_manual: number;
    folhas_ativas: number;
    nf_emitidas: number;
    nf_movimentadas: number;
    custo_operacional: number;
    rentabilidade: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      mes: string;
      clientes: number;
      faturamento: number;
      variacao_faturamento: number;
      tempo_ativo: number;
      lancamentos: number;
      percentual_manual: number;
      folhas_ativas: number;
      nf_emitidas: number;
      nf_movimentadas: number;
      custo_operacional: number;
      rentabilidade: number;
    }>>(`/api/gestao/escritorio/analise-mensal/?${params.toString()}`);
  }

  /**
   * Obter KPIs do escritório
   */
  static async getKPIs(filtros?: DateFilters): Promise<{
    total_clientes: number;
    variacao_clientes: number;
    faturamento_anual: number;
    variacao_faturamento: number;
    rentabilidade_media: number;
    variacao_rentabilidade: number;
    custo_por_cliente: number;
    tempo_ativo_total: number;
    notas_fiscais_emitidas: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      total_clientes: number;
      variacao_clientes: number;
      faturamento_anual: number;
      variacao_faturamento: number;
      rentabilidade_media: number;
      variacao_rentabilidade: number;
      custo_por_cliente: number;
      tempo_ativo_total: number;
      notas_fiscais_emitidas: number;
    }>(`/api/gestao/escritorio/kpis/?${params.toString()}`);
  }

  /**
   * Obter análise de rentabilidade
   */
  static async getRentabilidade(filtros?: DateFilters): Promise<Array<{
    mes: string;
    receita: number;
    custos: number;
    lucro: number;
    margem: number;
    roi: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      mes: string;
      receita: number;
      custos: number;
      lucro: number;
      margem: number;
      roi: number;
    }>>(`/api/gestao/escritorio/rentabilidade/?${params.toString()}`);
  }

  /**
   * Obter tendências do escritório
   */
  static async getTendencias(filtros?: DateFilters): Promise<{
    crescimento_clientes: number;
    crescimento_faturamento: number;
    tendencia_rentabilidade: 'crescente' | 'decrescente' | 'estavel';
    tendencia_produtividade: 'crescente' | 'decrescente' | 'estavel';
    previsao_proximos_meses: Array<{
      mes: string;
      previsao_clientes: number;
      previsao_faturamento: number;
    }>;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      crescimento_clientes: number;
      crescimento_faturamento: number;
      tendencia_rentabilidade: 'crescente' | 'decrescente' | 'estavel';
      tendencia_produtividade: 'crescente' | 'decrescente' | 'estavel';
      previsao_proximos_meses: Array<{
        mes: string;
        previsao_clientes: number;
        previsao_faturamento: number;
      }>;
    }>(`/api/gestao/escritorio/tendencias/?${params.toString()}`);
  }

  /**
   * Obter análise de custos
   */
  static async getAnaliseCustos(filtros?: DateFilters): Promise<{
    custo_total: number;
    custo_por_cliente: number;
    custo_por_usuario: number;
    custo_por_lancamento: number;
    distribuicao_custos: Array<{
      categoria: string;
      valor: number;
      percentual: number;
    }>;
    evolucao_custos: Array<{
      mes: string;
      custo_total: number;
      custo_por_cliente: number;
    }>;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      custo_total: number;
      custo_por_cliente: number;
      custo_por_usuario: number;
      custo_por_lancamento: number;
      distribuicao_custos: Array<{
        categoria: string;
        valor: number;
        percentual: number;
      }>;
      evolucao_custos: Array<{
        mes: string;
        custo_total: number;
        custo_por_cliente: number;
      }>;
    }>(`/api/gestao/escritorio/analise-custos/?${params.toString()}`);
  }

  /**
   * Obter métricas de produtividade
   */
  static async getMetricasProdutividade(filtros?: DateFilters): Promise<{
    produtividade_media: number;
    eficiencia_media: number;
    tempo_medio_por_lancamento: number;
    lancamentos_por_hora: number;
    distribuicao_produtividade: Array<{
      faixa: string;
      usuarios: number;
      percentual: number;
    }>;
    evolucao_produtividade: Array<{
      mes: string;
      produtividade: number;
      eficiencia: number;
    }>;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      produtividade_media: number;
      eficiencia_media: number;
      tempo_medio_por_lancamento: number;
      lancamentos_por_hora: number;
      distribuicao_produtividade: Array<{
        faixa: string;
        usuarios: number;
        percentual: number;
      }>;
      evolucao_produtividade: Array<{
        mes: string;
        produtividade: number;
        eficiencia: number;
      }>;
    }>(`/api/gestao/escritorio/metricas-produtividade/?${params.toString()}`);
  }
}

