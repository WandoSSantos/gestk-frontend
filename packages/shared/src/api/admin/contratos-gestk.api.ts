/**
 * API Layer para Contratos GESTK
 * Endpoints: GET, POST, PUT, PATCH, DELETE + 4 Actions
 * Documentação: docs/BLOCO_ADMIN_ATUALIZADO.md
 */

import { apiClient } from '../client';
import type {
  ContratoGestk,
  ContratoGestkCreateData,
  ContratoGestkUpdateData,
  ContratoGestkFilters,
  ContratoGestkResumo,
  ContratoGestkApiResponse,
} from '../../types/admin/contratos-gestk.types';

export const contratosGestkApi = {
  /**
   * Lista todos os contratos GESTK com filtros
   * GET /api/administracao/contratos-gestk/
   */
  async list(filters?: ContratoGestkFilters): Promise<ContratoGestkApiResponse> {
    const params = new URLSearchParams();

    if (filters?.contabilidade) params.append('contabilidade', filters.contabilidade);
    if (filters?.numero_contrato) params.append('numero_contrato', filters.numero_contrato);
    if (filters?.plano_servico) params.append('plano_servico', filters.plano_servico);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.data_inicio_apos) params.append('data_inicio_apos', filters.data_inicio_apos);
    if (filters?.data_inicio_antes)
      params.append('data_inicio_antes', filters.data_inicio_antes);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.ordering) params.append('ordering', filters.ordering);
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.page_size) params.append('page_size', String(filters.page_size));

    const queryString = params.toString();
    const url = `/api/administracao/contratos-gestk/${queryString ? `?${queryString}` : ''}`;

    return apiClient.get<ContratoGestkApiResponse>(url);
  },

  /**
   * Obtém detalhes de um contrato específico
   * GET /api/administracao/contratos-gestk/{id}/
   */
  async get(id: string): Promise<ContratoGestk> {
    return apiClient.get<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/`);
  },

  /**
   * Cria um novo contrato GESTK
   * POST /api/administracao/contratos-gestk/
   */
  async create(data: ContratoGestkCreateData): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>('/api/administracao/contratos-gestk/', data);
  },

  /**
   * Atualiza um contrato completamente (PUT)
   * PUT /api/administracao/contratos-gestk/{id}/
   */
  async update(id: string, data: ContratoGestkCreateData): Promise<ContratoGestk> {
    return apiClient.put<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/`, data);
  },

  /**
   * Atualiza um contrato parcialmente (PATCH)
   * PATCH /api/administracao/contratos-gestk/{id}/
   */
  async partialUpdate(id: string, data: ContratoGestkUpdateData): Promise<ContratoGestk> {
    return apiClient.patch<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/`, data);
  },

  /**
   * Deleta um contrato
   * DELETE /api/administracao/contratos-gestk/{id}/
   */
  async delete(id: string): Promise<void> {
    return apiClient.delete(`/api/administracao/contratos-gestk/${id}/`);
  },

  /**
   * Suspende um contrato com motivo
   * POST /api/administracao/contratos-gestk/{id}/suspender/
   */
  async suspender(id: string, motivo: string): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>(
      `/api/administracao/contratos-gestk/${id}/suspender/`,
      { motivo }
    );
  },

  /**
   * Cancela um contrato com motivo
   * POST /api/administracao/contratos-gestk/{id}/cancelar/
   */
  async cancelar(id: string, motivo: string): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>(
      `/api/administracao/contratos-gestk/${id}/cancelar/`,
      { motivo }
    );
  },

  /**
   * Ativa um contrato suspenso
   * POST /api/administracao/contratos-gestk/{id}/ativar/
   */
  async ativar(id: string): Promise<ContratoGestk> {
    return apiClient.post<ContratoGestk>(`/api/administracao/contratos-gestk/${id}/ativar/`);
  },

  /**
   * Obtém resumo/estatísticas dos contratos
   * GET /api/administracao/contratos-gestk/resumo/
   */
  async resumo(): Promise<ContratoGestkResumo> {
    return apiClient.get<ContratoGestkResumo>('/api/administracao/contratos-gestk/resumo/');
  },
};
