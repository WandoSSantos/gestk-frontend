import { apiClient } from '@gestk/shared';
import type { 
  ExportResponse,
  ClienteFilters,
  UsuarioFilters,
  DateFilters
} from '@gestk/shared';

export class ExportService {
  /**
   * Exportar carteira de clientes
   */
  static async exportarCarteira(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: ClienteFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/carteira/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar dados de clientes
   */
  static async exportarClientes(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: ClienteFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/clientes/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar dados de usuários
   */
  static async exportarUsuarios(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: UsuarioFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/usuarios/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar relatório geral
   */
  static async exportarRelatorioGeral(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters & {
      modulos?: string[];
      incluir_dashboards?: boolean;
      incluir_graficos?: boolean;
    }
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/relatorio-geral/${formato}/`, {
      filtros,
      formato,
      incluir_dashboards: filtros?.incluir_dashboards ?? true,
      incluir_graficos: filtros?.incluir_graficos ?? true
    });
  }

  /**
   * Exportar dashboard demográfico
   */
  static async exportarDashboardDemografico(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/dashboard/demografico/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar dashboard fiscal
   */
  static async exportarDashboardFiscal(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/dashboard/fiscal/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar dashboard contábil
   */
  static async exportarDashboardContabil(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/dashboard/contabil/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar dashboard indicadores
   */
  static async exportarDashboardIndicadores(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/dashboard/indicadores/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar dashboard DRE
   */
  static async exportarDashboardDRE(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/dashboard/dre/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar análise do escritório
   */
  static async exportarAnaliseEscritorio(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/analise-escritorio/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar relatório de custo operacional
   */
  static async exportarCustoOperacional(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters & { cliente_id?: string }
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/custo-operacional/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Exportar relatório de performance de usuários
   */
  static async exportarPerformanceUsuarios(
    formato: 'pdf' | 'excel' | 'csv', 
    filtros?: DateFilters
  ): Promise<ExportResponse> {
    return apiClient.post<ExportResponse>(`/api/export/performance-usuarios/${formato}/`, {
      filtros,
      formato,
      incluir_graficos: true
    });
  }

  /**
   * Baixar arquivo exportado
   */
  static async downloadArquivo(url: string, nomeArquivo?: string): Promise<void> {
    await apiClient.download(url, nomeArquivo);
  }

  /**
   * Obter status de exportação
   */
  static async getStatusExportacao(jobId: string): Promise<{
    status: 'pending' | 'processing' | 'completed' | 'failed';
    progress: number;
    arquivo_url?: string;
    erro?: string;
  }> {
    return apiClient.get<{
      status: 'pending' | 'processing' | 'completed' | 'failed';
      progress: number;
      arquivo_url?: string;
      erro?: string;
    }>(`/api/export/status/${jobId}/`);
  }
}

