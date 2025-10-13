import { apiClient } from '../client';
export class AdminService {
    // ===== CONTRATOS GESTK =====
    async getContratos(filters) {
        return apiClient.get('/api/administracao/contratos-gestk/', { params: filters });
    }
    async getContrato(id) {
        return apiClient.get(`/api/administracao/contratos-gestk/${id}/`);
    }
    async createContrato(data) {
        return apiClient.post('/api/administracao/contratos-gestk/', data);
    }
    async updateContrato(id, data) {
        return apiClient.put(`/api/administracao/contratos-gestk/${id}/`, data);
    }
    async deleteContrato(id) {
        return apiClient.delete(`/api/administracao/contratos-gestk/${id}/`);
    }
    async suspendContrato(id) {
        return apiClient.post(`/api/administracao/contratos-gestk/${id}/suspender/`);
    }
    async cancelContrato(id) {
        return apiClient.post(`/api/administracao/contratos-gestk/${id}/cancelar/`);
    }
    async activateContrato(id) {
        return apiClient.post(`/api/administracao/contratos-gestk/${id}/ativar/`);
    }
    async getContratosResumo() {
        return apiClient.get('/api/administracao/contratos-gestk/resumo/');
    }
    // ===== USUÁRIOS DE ACESSO =====
    async getUsuariosAcesso(filters) {
        return apiClient.get('/api/administracao/usuarios-acesso/', { params: filters });
    }
    async getUsuarioAcesso(id) {
        return apiClient.get(`/api/administracao/usuarios-acesso/${id}/`);
    }
    async createUsuarioAcesso(data) {
        return apiClient.post('/api/administracao/usuarios-acesso/', data);
    }
    async updateUsuarioAcesso(id, data) {
        return apiClient.put(`/api/administracao/usuarios-acesso/${id}/`, data);
    }
    async deleteUsuarioAcesso(id) {
        return apiClient.delete(`/api/administracao/usuarios-acesso/${id}/`);
    }
    async activateUsuarioAcesso(id) {
        return apiClient.post(`/api/administracao/usuarios-acesso/${id}/ativar/`);
    }
    async deactivateUsuarioAcesso(id) {
        return apiClient.post(`/api/administracao/usuarios-acesso/${id}/desativar/`);
    }
    async extendUsuarioAcesso(id, data) {
        return apiClient.post(`/api/administracao/usuarios-acesso/${id}/estender-vigencia/`, data);
    }
    async getUsuariosAcessoResumo() {
        return apiClient.get('/api/administracao/usuarios-acesso/resumo/');
    }
    // ===== CONTABILIDADES ADMIN =====
    async getContabilidadesAdmin(filters) {
        return apiClient.get('/api/administracao/contabilidades-admin/', { params: filters });
    }
    async getContabilidadeAdmin(id) {
        return apiClient.get(`/api/administracao/contabilidades-admin/${id}/`);
    }
    async updateContabilidadeAdmin(id, data) {
        return apiClient.put(`/api/administracao/contabilidades-admin/${id}/`, data);
    }
    async suspendContabilidadePorInadimplencia(id) {
        return apiClient.post(`/api/administracao/contabilidades-admin/${id}/suspender-por-inadimplencia/`);
    }
    async reactivateContabilidade(id) {
        return apiClient.post(`/api/administracao/contabilidades-admin/${id}/reativar/`);
    }
    async getContabilidadesAdminResumo() {
        return apiClient.get('/api/administracao/contabilidades-admin/resumo/');
    }
    // ===== PLANOS =====
    async getPlanos() {
        return apiClient.get('/api/billing/planos/');
    }
    async getPlano(id) {
        return apiClient.get(`/api/billing/planos/${id}/`);
    }
    async createPlano(data) {
        return apiClient.post('/api/billing/planos/', data);
    }
    async updatePlano(id, data) {
        return apiClient.put(`/api/billing/planos/${id}/`, data);
    }
    async deletePlano(id) {
        return apiClient.delete(`/api/billing/planos/${id}/`);
    }
    async getPlanosAtivos() {
        return apiClient.get('/api/billing/planos/ativos/');
    }
    async getPlanosResumo() {
        return apiClient.get('/api/billing/planos/resumo/');
    }
    // ===== ASSINATURAS =====
    async getAssinaturas() {
        return apiClient.get('/api/billing/assinaturas/');
    }
    async getAssinatura(id) {
        return apiClient.get(`/api/billing/assinaturas/${id}/`);
    }
    async createAssinatura(data) {
        return apiClient.post('/api/billing/assinaturas/', data);
    }
    async updateAssinatura(id, data) {
        return apiClient.put(`/api/billing/assinaturas/${id}/`, data);
    }
    async deleteAssinatura(id) {
        return apiClient.delete(`/api/billing/assinaturas/${id}/`);
    }
    async suspendAssinatura(id) {
        return apiClient.post(`/api/billing/assinaturas/${id}/suspender/`);
    }
    async cancelAssinatura(id) {
        return apiClient.post(`/api/billing/assinaturas/${id}/cancelar/`);
    }
    async activateAssinatura(id) {
        return apiClient.post(`/api/billing/assinaturas/${id}/ativar/`);
    }
    async getAssinaturasResumo() {
        return apiClient.get('/api/billing/assinaturas/resumo/');
    }
    // ===== FATURAS =====
    async getFaturas() {
        return apiClient.get('/api/billing/faturas/');
    }
    async getFatura(id) {
        return apiClient.get(`/api/billing/faturas/${id}/`);
    }
    async createFatura(data) {
        return apiClient.post('/api/billing/faturas/', data);
    }
    async updateFatura(id, data) {
        return apiClient.put(`/api/billing/faturas/${id}/`, data);
    }
    async deleteFatura(id) {
        return apiClient.delete(`/api/billing/faturas/${id}/`);
    }
    async markFaturaAsPaid(id) {
        return apiClient.post(`/api/billing/faturas/${id}/marcar-como-paga/`);
    }
    async cancelFatura(id) {
        return apiClient.post(`/api/billing/faturas/${id}/cancelar/`);
    }
    async getFaturasResumo() {
        return apiClient.get('/api/billing/faturas/resumo/');
    }
    // ===== PAGAMENTOS =====
    async getPagamentos() {
        return apiClient.get('/api/billing/pagamentos/');
    }
    async getPagamento(id) {
        return apiClient.get(`/api/billing/pagamentos/${id}/`);
    }
    async createPagamento(data) {
        return apiClient.post('/api/billing/pagamentos/', data);
    }
    async confirmPagamento(id) {
        return apiClient.post(`/api/billing/pagamentos/${id}/confirmar/`);
    }
    async refundPagamento(id) {
        return apiClient.post(`/api/billing/pagamentos/${id}/estornar/`);
    }
    async getPagamentosResumo() {
        return apiClient.get('/api/billing/pagamentos/resumo/');
    }
}
// Instância singleton
export const adminService = new AdminService();
//# sourceMappingURL=admin.service.js.map