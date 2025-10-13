import { apiClient } from '../client';
export class ClientService {
    // ===== GESTÃO - CARTEIRA DE CLIENTES =====
    async getCarteiraClientes(filters) {
        return apiClient.get('/api/gestao/carteira/clientes/', { params: filters });
    }
    async getCarteiraCliente(id) {
        return apiClient.get(`/api/gestao/carteira/clientes/${id}/`);
    }
    async updateCarteiraCliente(id, data) {
        return apiClient.put(`/api/gestao/carteira/clientes/${id}/`, data);
    }
    async getCarteiraResumo() {
        return apiClient.get('/api/gestao/carteira/clientes/resumo/');
    }
    // ===== GESTÃO - CLIENTES =====
    async getClientes(filters) {
        return apiClient.get('/api/gestao/clientes/lista/', { params: filters });
    }
    async getCliente(id) {
        return apiClient.get(`/api/gestao/clientes/lista/${id}/`);
    }
    async updateCliente(id, data) {
        return apiClient.put(`/api/gestao/clientes/lista/${id}/`, data);
    }
    async getClientesResumo() {
        return apiClient.get('/api/gestao/clientes/lista/resumo/');
    }
    // ===== GESTÃO - USUÁRIOS =====
    async getUsuarios(filters) {
        return apiClient.get('/api/gestao/usuarios/lista/', { params: filters });
    }
    async getUsuario(id) {
        return apiClient.get(`/api/gestao/usuarios/lista/${id}/`);
    }
    async updateUsuario(id, data) {
        return apiClient.put(`/api/gestao/usuarios/lista/${id}/`, data);
    }
    async getUsuariosResumo() {
        return apiClient.get('/api/gestao/usuarios/lista/resumo/');
    }
    // ===== GESTÃO - ESCRITÓRIO =====
    async getEscritorio() {
        return apiClient.get('/api/gestao/escritorio/');
    }
    async updateEscritorio(data) {
        return apiClient.put('/api/gestao/escritorio/', data);
    }
    async getEscritorioResumo() {
        return apiClient.get('/api/gestao/escritorio/resumo/');
    }
    // ===== DASHBOARDS =====
    // Dashboard Demográfico
    async getDashboardDemografico(filters) {
        return apiClient.get('/api/dashboards/demografico/', { params: filters });
    }
    async getDashboardDemograficoCharts(filters) {
        return apiClient.get('/api/dashboards/demografico/graficos/', { params: filters });
    }
    async exportDashboardDemografico(filters) {
        const response = await apiClient.get('/api/dashboards/demografico/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard Fiscal
    async getDashboardFiscal(filters) {
        return apiClient.get('/api/dashboards/fiscal/', { params: filters });
    }
    async getDashboardFiscalCharts(filters) {
        return apiClient.get('/api/dashboards/fiscal/graficos/', { params: filters });
    }
    async exportDashboardFiscal(filters) {
        const response = await apiClient.get('/api/dashboards/fiscal/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard Contábil
    async getDashboardContabil(filters) {
        return apiClient.get('/api/dashboards/contabil/', { params: filters });
    }
    async getDashboardContabilCharts(filters) {
        return apiClient.get('/api/dashboards/contabil/graficos/', { params: filters });
    }
    async exportDashboardContabil(filters) {
        const response = await apiClient.get('/api/dashboards/contabil/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard de Indicadores
    async getDashboardIndicadores(filters) {
        return apiClient.get('/api/dashboards/indicadores/', { params: filters });
    }
    async getDashboardIndicadoresCharts(filters) {
        return apiClient.get('/api/dashboards/indicadores/graficos/', { params: filters });
    }
    async exportDashboardIndicadores(filters) {
        const response = await apiClient.get('/api/dashboards/indicadores/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard DRE
    async getDashboardDRE(filters) {
        return apiClient.get('/api/dashboards/dre/', { params: filters });
    }
    async getDashboardDRECharts(filters) {
        return apiClient.get('/api/dashboards/dre/graficos/', { params: filters });
    }
    async exportDashboardDRE(filters) {
        const response = await apiClient.get('/api/dashboards/dre/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // ===== MÉTODOS AUXILIARES =====
    // Download de arquivo
    async downloadFile(url, filename) {
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
    async uploadFile(file, onProgress) {
        return apiClient.upload('/api/upload/', file, onProgress);
    }
    // Obter dados gerais do dashboard
    async getDashboardOverview() {
        return apiClient.get('/api/dashboards/overview/');
    }
}
// Instância singleton
export const clientService = new ClientService();
//# sourceMappingURL=client.service.js.map