import { apiClient } from '../client';
import {
  Contrato,
  ContratoPayload,
  ContractFilters,
  UsuarioAcesso,
  UsuarioAcessoPayload,
  UsuarioAcessoFilters,
  Contabilidade,
  ContabilidadePayload,
  ContabilidadeFilters,
  Plano,
  PlanoPayload,
  Assinatura,
  AssinaturaPayload,
  Fatura,
  FaturaPayload,
  Pagamento,
  PagamentoPayload,
  ResumoContratos,
  ResumoUsuarios,
  ResumoContabilidades,
  ResumoPlanos,
  ResumoAssinaturas,
  ResumoFaturas,
  ResumoPagamentos,
  PaginatedResponse
} from '../types';

export class AdminService {
  // ===== CONTRATOS GESTK =====
  async getContratos(filters?: ContractFilters): Promise<PaginatedResponse<Contrato>> {
    return apiClient.get('/api/administracao/contratos-gestk/', { params: filters });
  }

  async getContrato(id: string): Promise<Contrato> {
    return apiClient.get(`/api/administracao/contratos-gestk/${id}/`);
  }

  async createContrato(data: ContratoPayload): Promise<Contrato> {
    return apiClient.post('/api/administracao/contratos-gestk/', data);
  }

  async updateContrato(id: string, data: Partial<ContratoPayload>): Promise<Contrato> {
    return apiClient.put(`/api/administracao/contratos-gestk/${id}/`, data);
  }

  async deleteContrato(id: string): Promise<void> {
    return apiClient.delete(`/api/administracao/contratos-gestk/${id}/`);
  }

  async suspendContrato(id: string): Promise<Contrato> {
    return apiClient.post(`/api/administracao/contratos-gestk/${id}/suspender/`);
  }

  async cancelContrato(id: string): Promise<Contrato> {
    return apiClient.post(`/api/administracao/contratos-gestk/${id}/cancelar/`);
  }

  async activateContrato(id: string): Promise<Contrato> {
    return apiClient.post(`/api/administracao/contratos-gestk/${id}/ativar/`);
  }

  async getContratosResumo(): Promise<ResumoContratos> {
    return apiClient.get('/api/administracao/contratos-gestk/resumo/');
  }

  // ===== USUÁRIOS DE ACESSO =====
  async getUsuariosAcesso(filters?: UsuarioAcessoFilters): Promise<PaginatedResponse<UsuarioAcesso>> {
    return apiClient.get('/api/administracao/usuarios-acesso/', { params: filters });
  }

  async getUsuarioAcesso(id: string): Promise<UsuarioAcesso> {
    return apiClient.get(`/api/administracao/usuarios-acesso/${id}/`);
  }

  async createUsuarioAcesso(data: UsuarioAcessoPayload): Promise<UsuarioAcesso> {
    return apiClient.post('/api/administracao/usuarios-acesso/', data);
  }

  async updateUsuarioAcesso(id: string, data: Partial<UsuarioAcessoPayload>): Promise<UsuarioAcesso> {
    return apiClient.put(`/api/administracao/usuarios-acesso/${id}/`, data);
  }

  async deleteUsuarioAcesso(id: string): Promise<void> {
    return apiClient.delete(`/api/administracao/usuarios-acesso/${id}/`);
  }

  async activateUsuarioAcesso(id: string): Promise<UsuarioAcesso> {
    return apiClient.post(`/api/administracao/usuarios-acesso/${id}/ativar/`);
  }

  async deactivateUsuarioAcesso(id: string): Promise<UsuarioAcesso> {
    return apiClient.post(`/api/administracao/usuarios-acesso/${id}/desativar/`);
  }

  async extendUsuarioAcesso(id: string, data: { data_fim: string }): Promise<UsuarioAcesso> {
    return apiClient.post(`/api/administracao/usuarios-acesso/${id}/estender-vigencia/`, data);
  }

  async getUsuariosAcessoResumo(): Promise<ResumoUsuarios> {
    return apiClient.get('/api/administracao/usuarios-acesso/resumo/');
  }

  // ===== CONTABILIDADES ADMIN =====
  async getContabilidadesAdmin(filters?: ContabilidadeFilters): Promise<PaginatedResponse<Contabilidade>> {
    return apiClient.get('/api/administracao/contabilidades-admin/', { params: filters });
  }

  async getContabilidadeAdmin(id: string): Promise<Contabilidade> {
    return apiClient.get(`/api/administracao/contabilidades-admin/${id}/`);
  }

  async updateContabilidadeAdmin(id: string, data: Partial<ContabilidadePayload>): Promise<Contabilidade> {
    return apiClient.put(`/api/administracao/contabilidades-admin/${id}/`, data);
  }

  async suspendContabilidadePorInadimplencia(id: string): Promise<Contabilidade> {
    return apiClient.post(`/api/administracao/contabilidades-admin/${id}/suspender-por-inadimplencia/`);
  }

  async reactivateContabilidade(id: string): Promise<Contabilidade> {
    return apiClient.post(`/api/administracao/contabilidades-admin/${id}/reativar/`);
  }

  async getContabilidadesAdminResumo(): Promise<ResumoContabilidades> {
    return apiClient.get('/api/administracao/contabilidades-admin/resumo/');
  }

  // ===== PLANOS =====
  async getPlanos(): Promise<PaginatedResponse<Plano>> {
    return apiClient.get('/api/billing/planos/');
  }

  async getPlano(id: string): Promise<Plano> {
    return apiClient.get(`/api/billing/planos/${id}/`);
  }

  async createPlano(data: PlanoPayload): Promise<Plano> {
    return apiClient.post('/api/billing/planos/', data);
  }

  async updatePlano(id: string, data: Partial<PlanoPayload>): Promise<Plano> {
    return apiClient.put(`/api/billing/planos/${id}/`, data);
  }

  async deletePlano(id: string): Promise<void> {
    return apiClient.delete(`/api/billing/planos/${id}/`);
  }

  async getPlanosAtivos(): Promise<Plano[]> {
    return apiClient.get('/api/billing/planos/ativos/');
  }

  async getPlanosResumo(): Promise<ResumoPlanos> {
    return apiClient.get('/api/billing/planos/resumo/');
  }

  // ===== ASSINATURAS =====
  async getAssinaturas(): Promise<PaginatedResponse<Assinatura>> {
    return apiClient.get('/api/billing/assinaturas/');
  }

  async getAssinatura(id: string): Promise<Assinatura> {
    return apiClient.get(`/api/billing/assinaturas/${id}/`);
  }

  async createAssinatura(data: AssinaturaPayload): Promise<Assinatura> {
    return apiClient.post('/api/billing/assinaturas/', data);
  }

  async updateAssinatura(id: string, data: Partial<AssinaturaPayload>): Promise<Assinatura> {
    return apiClient.put(`/api/billing/assinaturas/${id}/`, data);
  }

  async deleteAssinatura(id: string): Promise<void> {
    return apiClient.delete(`/api/billing/assinaturas/${id}/`);
  }

  async suspendAssinatura(id: string): Promise<Assinatura> {
    return apiClient.post(`/api/billing/assinaturas/${id}/suspender/`);
  }

  async cancelAssinatura(id: string): Promise<Assinatura> {
    return apiClient.post(`/api/billing/assinaturas/${id}/cancelar/`);
  }

  async activateAssinatura(id: string): Promise<Assinatura> {
    return apiClient.post(`/api/billing/assinaturas/${id}/ativar/`);
  }

  async getAssinaturasResumo(): Promise<ResumoAssinaturas> {
    return apiClient.get('/api/billing/assinaturas/resumo/');
  }

  // ===== FATURAS =====
  async getFaturas(): Promise<PaginatedResponse<Fatura>> {
    return apiClient.get('/api/billing/faturas/');
  }

  async getFatura(id: string): Promise<Fatura> {
    return apiClient.get(`/api/billing/faturas/${id}/`);
  }

  async createFatura(data: FaturaPayload): Promise<Fatura> {
    return apiClient.post('/api/billing/faturas/', data);
  }

  async updateFatura(id: string, data: Partial<FaturaPayload>): Promise<Fatura> {
    return apiClient.put(`/api/billing/faturas/${id}/`, data);
  }

  async deleteFatura(id: string): Promise<void> {
    return apiClient.delete(`/api/billing/faturas/${id}/`);
  }

  async markFaturaAsPaid(id: string): Promise<Fatura> {
    return apiClient.post(`/api/billing/faturas/${id}/marcar-como-paga/`);
  }

  async cancelFatura(id: string): Promise<Fatura> {
    return apiClient.post(`/api/billing/faturas/${id}/cancelar/`);
  }

  async getFaturasResumo(): Promise<ResumoFaturas> {
    return apiClient.get('/api/billing/faturas/resumo/');
  }

  // ===== PAGAMENTOS =====
  async getPagamentos(): Promise<PaginatedResponse<Pagamento>> {
    return apiClient.get('/api/billing/pagamentos/');
  }

  async getPagamento(id: string): Promise<Pagamento> {
    return apiClient.get(`/api/billing/pagamentos/${id}/`);
  }

  async createPagamento(data: PagamentoPayload): Promise<Pagamento> {
    return apiClient.post('/api/billing/pagamentos/', data);
  }

  async confirmPagamento(id: string): Promise<Pagamento> {
    return apiClient.post(`/api/billing/pagamentos/${id}/confirmar/`);
  }

  async refundPagamento(id: string): Promise<Pagamento> {
    return apiClient.post(`/api/billing/pagamentos/${id}/estornar/`);
  }

  async getPagamentosResumo(): Promise<ResumoPagamentos> {
    return apiClient.get('/api/billing/pagamentos/resumo/');
  }
}

// Instância singleton
export const adminService = new AdminService();
