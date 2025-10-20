import { apiClient } from '../client';
import {
  Cliente,
  ClientePayload,
  ClienteFilters,
  DashboardData,
  DashboardFilters,
  ChartData,
  PaginatedResponse
} from '../types';

export class ClientService {
  // ===== GESTÃƒO - CARTEIRA DE CLIENTES =====
  async getCarteiraClientes(filters?: ClienteFilters): Promise<PaginatedResponse<Cliente>> {
    return apiClient.get('/api/gestao/carteira/clientes/', { params: filters });
  }

  async getCarteiraCliente(id: string): Promise<Cliente> {
    return apiClient.get(`/api/gestao/carteira/clientes/${id}/`);
  }

  async updateCarteiraCliente(id: string, data: Partial<ClientePayload>): Promise<Cliente> {
    return apiClient.put(`/api/gestao/carteira/clientes/${id}/`, data);
  }

  async getCarteiraResumo(): Promise<{
    total_clientes: number;
    clientes_ativos: number;
    clientes_inativos: number;
    receita_total: number;
    crescimento: number;
  }> {
    return apiClient.get('/api/gestao/carteira/clientes/resumo/');
  }

  // ===== GESTÃƒO - CLIENTES =====
  async getClientes(filters?: ClienteFilters): Promise<PaginatedResponse<Cliente>> {
    return apiClient.get('/api/gestao/clientes/lista/', { params: filters });
  }

  async getCliente(id: string): Promise<Cliente> {
    return apiClient.get(`/api/gestao/clientes/lista/${id}/`);
  }

  async updateCliente(id: string, data: Partial<ClientePayload>): Promise<Cliente> {
    return apiClient.put(`/api/gestao/clientes/lista/${id}/`, data);
  }

  async getClientesResumo(): Promise<{
    total: number;
    ativos: number;
    inativos: number;
    por_tipo: Record<string, number>;
    por_cidade: Record<string, number>;
    por_estado: Record<string, number>;
  }> {
    return apiClient.get('/api/gestao/clientes/lista/resumo/');
  }

  // ===== GESTÃƒO - USUÃRIOS =====
  async getUsuarios(filters?: any): Promise<PaginatedResponse<any>> {
    return apiClient.get('/api/gestao/usuarios/lista/', { params: filters });
  }

  async getUsuario(id: string): Promise<any> {
    return apiClient.get(`/api/gestao/usuarios/lista/${id}/`);
  }

  async updateUsuario(id: string, data: any): Promise<any> {
    return apiClient.put(`/api/gestao/usuarios/lista/${id}/`, data);
  }

  async getUsuariosResumo(): Promise<{
    total: number;
    ativos: number;
    inativos: number;
    por_role: Record<string, number>;
    por_contabilidade: Record<string, number>;
  }> {
    return apiClient.get('/api/gestao/usuarios/lista/resumo/');
  }

  // ===== GESTÃƒO - ESCRITÃ“RIO =====
  async getEscritorio(): Promise<{
    id: string;
    nome: string;
    cnpj: string;
    endereco: string;
    telefone: string;
    email: string;
    created_at: string;
    updated_at: string;
  }> {
    return apiClient.get('/api/gestao/escritorio/');
  }

  async updateEscritorio(data: {
    nome?: string;
    endereco?: string;
    telefone?: string;
    email?: string;
  }): Promise<any> {
    return apiClient.put('/api/gestao/escritorio/', data);
  }

  async getEscritorioResumo(): Promise<{
    total_clientes: number;
    total_usuarios: number;
    receita_mensal: number;
    crescimento: number;
    indicadores: Record<string, number>;
  }> {
    return apiClient.get('/api/gestao/escritorio/resumo/');
  }

  // ===== DASHBOARDS =====
  
  // Dashboard DemogrÃ¡fico
  async getDashboardDemografico(filters?: DashboardFilters): Promise<DashboardData> {
    return apiClient.get('/dashboards/demografico/', { params: filters });
  }

  async getDashboardDemograficoCharts(filters?: DashboardFilters): Promise<ChartData> {
    return apiClient.get('/dashboards/demografico/graficos/', { params: filters });
  }

  async exportDashboardDemografico(filters?: DashboardFilters): Promise<Blob> {
    const response = await apiClient.get('/dashboards/demografico/exportar/', { 
      params: filters,
      responseType: 'blob'
    });
    return response;
  }

  // Dashboard Fiscal
  async getDashboardFiscal(filters?: DashboardFilters): Promise<DashboardData> {
    return apiClient.get('/dashboards/fiscal/', { params: filters });
  }

  async getDashboardFiscalCharts(filters?: DashboardFilters): Promise<ChartData> {
    return apiClient.get('/dashboards/fiscal/graficos/', { params: filters });
  }

  async exportDashboardFiscal(filters?: DashboardFilters): Promise<Blob> {
    const response = await apiClient.get('/dashboards/fiscal/exportar/', { 
      params: filters,
      responseType: 'blob'
    });
    return response;
  }

  // Dashboard ContÃ¡bil
  async getDashboardContabil(filters?: DashboardFilters): Promise<DashboardData> {
    return apiClient.get('/dashboards/contabil/', { params: filters });
  }

  async getDashboardContabilCharts(filters?: DashboardFilters): Promise<ChartData> {
    return apiClient.get('/dashboards/contabil/graficos/', { params: filters });
  }

  async exportDashboardContabil(filters?: DashboardFilters): Promise<Blob> {
    const response = await apiClient.get('/dashboards/contabil/exportar/', { 
      params: filters,
      responseType: 'blob'
    });
    return response;
  }

  // Dashboard de Indicadores
  async getDashboardIndicadores(filters?: DashboardFilters): Promise<DashboardData> {
    return apiClient.get('/dashboards/indicadores/', { params: filters });
  }

  async getDashboardIndicadoresCharts(filters?: DashboardFilters): Promise<ChartData> {
    return apiClient.get('/dashboards/indicadores/graficos/', { params: filters });
  }

  async exportDashboardIndicadores(filters?: DashboardFilters): Promise<Blob> {
    const response = await apiClient.get('/dashboards/indicadores/exportar/', { 
      params: filters,
      responseType: 'blob'
    });
    return response;
  }

  // Dashboard DRE
  async getDashboardDRE(filters?: DashboardFilters): Promise<DashboardData> {
    return apiClient.get('/dashboards/dre/', { params: filters });
  }

  async getDashboardDRECharts(filters?: DashboardFilters): Promise<ChartData> {
    return apiClient.get('/dashboards/dre/graficos/', { params: filters });
  }

  async exportDashboardDRE(filters?: DashboardFilters): Promise<Blob> {
    const response = await apiClient.get('/dashboards/dre/exportar/', { 
      params: filters,
      responseType: 'blob'
    });
    return response;
  }

  // ===== MÃ‰TODOS AUXILIARES =====
  
  // Download de arquivo
  async downloadFile(url: string, filename?: string): Promise<void> {
    const response = await apiClient.get(url, { responseType: 'blob' });
    
    const blob = new Blob([response]);
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  }

  // Upload de arquivo
  async uploadFile(file: File, onProgress?: (progress: number) => void): Promise<any> {
    return apiClient.upload('/upload/', file, onProgress);
  }

  // Obter dados gerais do dashboard
  async getDashboardOverview(): Promise<{
    total_clientes: number;
    total_usuarios: number;
    receita_total: number;
    crescimento: number;
    indicadores_principais: Record<string, number>;
    graficos_principais: ChartData[];
  }> {
    return apiClient.get('/dashboards/overview/');
  }
}

// InstÃ¢ncia singleton
export const clientService = new ClientService();





