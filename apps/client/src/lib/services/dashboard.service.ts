import { apiClient } from '@gestk/shared';
import type { 
  DemograficoIndicadores,
  FiscalFaturamento,
  ContabilIndicadores,
  DateFilters
} from '@gestk/shared';

export class DashboardService {
  // ===== DASHBOARD DEMOGRÁFICO =====

  /**
   * Obter indicadores demográficos
   */
  static async getDemograficoIndicadores(): Promise<DemograficoIndicadores> {
    return apiClient.get<DemograficoIndicadores>('/api/dashboards/demografico/indicadores/');
  }

  /**
   * Obter evolução de colaboradores
   */
  static async getDemograficoColaboradores(filtros?: DateFilters): Promise<Array<{
    mes: string;
    total: number;
    admissões: number;
    demissões: number;
    ativos: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      mes: string;
      total: number;
      admissões: number;
      demissões: number;
      ativos: number;
    }>>(`/api/dashboards/demografico/colaboradores/?${params.toString()}`);
  }

  /**
   * Obter distribuições demográficas
   */
  static async getDemograficoDistribuicoes(): Promise<{
    genero: Array<{ genero: string; quantidade: number }>;
    idade: Array<{ faixa: string; quantidade: number }>;
    escolaridade: Array<{ nivel: string; quantidade: number }>;
    cargo: Array<{ cargo: string; quantidade: number }>;
    categoria: Array<{ categoria: string; quantidade: number }>;
  }> {
    return apiClient.get<{
      genero: Array<{ genero: string; quantidade: number }>;
      idade: Array<{ faixa: string; quantidade: number }>;
      escolaridade: Array<{ nivel: string; quantidade: number }>;
      cargo: Array<{ cargo: string; quantidade: number }>;
      categoria: Array<{ categoria: string; quantidade: number }>;
    }>('/api/dashboards/demografico/distribuicoes/');
  }

  // ===== DASHBOARD FISCAL =====

  /**
   * Obter dados de faturamento fiscal
   */
  static async getFiscalFaturamento(filtros?: DateFilters): Promise<FiscalFaturamento> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<FiscalFaturamento>(`/api/dashboards/fiscal/faturamento/?${params.toString()}`);
  }

  /**
   * Obter top produtos fiscais
   */
  static async getFiscalProdutos(filtros?: DateFilters): Promise<Array<{
    produto: string;
    quantidade: number;
    valor_total: number;
    percentual: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      produto: string;
      quantidade: number;
      valor_total: number;
      percentual: number;
    }>>(`/api/dashboards/fiscal/produtos/?${params.toString()}`);
  }

  /**
   * Obter top clientes fiscais
   */
  static async getFiscalClientes(filtros?: DateFilters): Promise<Array<{
    cliente: string;
    cnpj: string;
    valor_total: number;
    quantidade_nf: number;
    percentual: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      cliente: string;
      cnpj: string;
      valor_total: number;
      quantidade_nf: number;
      percentual: number;
    }>>(`/api/dashboards/fiscal/clientes/?${params.toString()}`);
  }

  /**
   * Obter dados de geolocalização fiscal
   */
  static async getFiscalGeolocalizacao(filtros?: DateFilters): Promise<Array<{
    uf: string;
    quantidade: number;
    valor_total: number;
    percentual: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      uf: string;
      quantidade: number;
      valor_total: number;
      percentual: number;
    }>>(`/api/dashboards/fiscal/geolocalizacao/?${params.toString()}`);
  }

  /**
   * Obter dados de impostos
   */
  static async getFiscalImpostos(filtros?: DateFilters): Promise<Array<{
    imposto: string;
    valor_devido: number;
    valor_pago: number;
    percentual: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      imposto: string;
      valor_devido: number;
      valor_pago: number;
      percentual: number;
    }>>(`/api/dashboards/fiscal/impostos/?${params.toString()}`);
  }

  // ===== DASHBOARD CONTÁBIL =====

  /**
   * Obter indicadores contábeis
   */
  static async getContabilIndicadores(filtros?: DateFilters): Promise<ContabilIndicadores> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<ContabilIndicadores>(`/api/dashboards/contabil/indicadores/?${params.toString()}`);
  }

  /**
   * Obter evolução contábil
   */
  static async getContabilEvolucao(filtros?: DateFilters): Promise<Array<{
    mes: string;
    ativo: number;
    passivo: number;
    patrimonio_liquido: number;
    receita: number;
    despesas: number;
    lucro: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      mes: string;
      ativo: number;
      passivo: number;
      patrimonio_liquido: number;
      receita: number;
      despesas: number;
      lucro: number;
    }>>(`/api/dashboards/contabil/evolucao/?${params.toString()}`);
  }

  /**
   * Obter dados por grupos contábeis
   */
  static async getContabilGrupos(filtros?: DateFilters): Promise<Array<{
    grupo: string;
    saldo: number;
    percentual: number;
    variacao: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      grupo: string;
      saldo: number;
      percentual: number;
      variacao: number;
    }>>(`/api/dashboards/contabil/grupos/?${params.toString()}`);
  }

  /**
   * Obter top contas contábeis
   */
  static async getContabilTopContas(filtros?: DateFilters): Promise<Array<{
    conta: string;
    codigo: string;
    saldo: number;
    percentual: number;
    variacao: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      conta: string;
      codigo: string;
      saldo: number;
      percentual: number;
      variacao: number;
    }>>(`/api/dashboards/contabil/top-contas/?${params.toString()}`);
  }

  // ===== DASHBOARD INDICADORES =====

  /**
   * Obter indicadores financeiros
   */
  static async getIndicadoresFinanceiros(filtros?: DateFilters): Promise<{
    receita_total: number;
    despesas_total: number;
    lucro_liquido: number;
    margem_lucro: number;
    roi: number;
    crescimento_receita: number;
    crescimento_lucro: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      receita_total: number;
      despesas_total: number;
      lucro_liquido: number;
      margem_lucro: number;
      roi: number;
      crescimento_receita: number;
      crescimento_lucro: number;
    }>(`/api/dashboards/indicadores/financeiros/?${params.toString()}`);
  }

  /**
   * Obter indicadores operacionais
   */
  static async getIndicadoresOperacionais(filtros?: DateFilters): Promise<{
    total_clientes: number;
    clientes_ativos: number;
    clientes_novos: number;
    churn_rate: number;
    faturamento_por_cliente: number;
    tempo_medio_atendimento: number;
    satisfacao_media: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      total_clientes: number;
      clientes_ativos: number;
      clientes_novos: number;
      churn_rate: number;
      faturamento_por_cliente: number;
      tempo_medio_atendimento: number;
      satisfacao_media: number;
    }>(`/api/dashboards/indicadores/operacionais/?${params.toString()}`);
  }

  /**
   * Obter indicadores patrimoniais
   */
  static async getIndicadoresPatrimoniais(filtros?: DateFilters): Promise<{
    patrimonio_liquido: number;
    ativo_total: number;
    passivo_total: number;
    liquidez_corrente: number;
    liquidez_geral: number;
    endividamento: number;
    rentabilidade_patrimonio: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      patrimonio_liquido: number;
      ativo_total: number;
      passivo_total: number;
      liquidez_corrente: number;
      liquidez_geral: number;
      endividamento: number;
      rentabilidade_patrimonio: number;
    }>(`/api/dashboards/indicadores/patrimoniais/?${params.toString()}`);
  }

  // ===== DASHBOARD DRE =====

  /**
   * Obter composição da DRE
   */
  static async getDREComposicao(filtros?: DateFilters): Promise<{
    receita_bruta: number;
    deducoes: number;
    receita_liquida: number;
    custos: number;
    lucro_bruto: number;
    despesas_operacionais: number;
    lucro_operacional: number;
    receitas_financeiras: number;
    despesas_financeiras: number;
    lucro_antes_ir: number;
    imposto_renda: number;
    lucro_liquido: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      receita_bruta: number;
      deducoes: number;
      receita_liquida: number;
      custos: number;
      lucro_bruto: number;
      despesas_operacionais: number;
      lucro_operacional: number;
      receitas_financeiras: number;
      despesas_financeiras: number;
      lucro_antes_ir: number;
      imposto_renda: number;
      lucro_liquido: number;
    }>(`/api/dashboards/dre/composicao/?${params.toString()}`);
  }

  /**
   * Obter evolução da DRE
   */
  static async getDREEvolucao(filtros?: DateFilters): Promise<Array<{
    mes: string;
    receita_bruta: number;
    receita_liquida: number;
    lucro_bruto: number;
    lucro_operacional: number;
    lucro_liquido: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      mes: string;
      receita_bruta: number;
      receita_liquida: number;
      lucro_bruto: number;
      lucro_operacional: number;
      lucro_liquido: number;
    }>>(`/api/dashboards/dre/evolucao/?${params.toString()}`);
  }

  /**
   * Obter análise vertical da DRE
   */
  static async getDREAnaliseVertical(filtros?: DateFilters): Promise<Array<{
    conta: string;
    valor: number;
    percentual: number;
    variacao: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      conta: string;
      valor: number;
      percentual: number;
      variacao: number;
    }>>(`/api/dashboards/dre/analise-vertical/?${params.toString()}`);
  }
}

