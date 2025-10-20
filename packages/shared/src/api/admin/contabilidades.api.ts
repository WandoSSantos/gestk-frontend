/**
 * API de Contabilidades (Admin)
 *
 * Endpoints implementados:
 * - GET /administracao/contabilidades-admin/        - Listar (paginação)
 * - GET /administracao/contabilidades-admin/{id}/   - Obter
 * - PUT /administracao/contabilidades-admin/{id}/   - Atualizar
 * - POST /administracao/contabilidades-admin/{id}/suspender-por-inadimplencia/ - Suspender
 * - POST /administracao/contabilidades-admin/{id}/reativar/ - Reativar
 * - GET /administracao/contabilidades-admin/resumo/ - Resumo
 */

import { apiClient } from '../client'
import type {
  ContabilidadeAdmin,
  ContabilidadeFilters,
  ContabilidadeUpdateData,
  ContabilidadesAdminPaginatedResponse,
  ContabilidadeSummary,
} from '../../types/admin/contabilidades.types'

export const contabilidadesApi = {
  async list(filters?: ContabilidadeFilters): Promise<ContabilidadesAdminPaginatedResponse> {
    return await apiClient.get<ContabilidadesAdminPaginatedResponse>('/api/administracao/contabilidades-admin/', { params: filters })
  },

  async get(id: string): Promise<ContabilidadeAdmin> {
    return await apiClient.get<ContabilidadeAdmin>(`/administracao/contabilidades-admin/${id}/`)
  },

  async update(id: string, data: ContabilidadeUpdateData): Promise<ContabilidadeAdmin> {
    return await apiClient.put<ContabilidadeAdmin>(`/administracao/contabilidades-admin/${id}/`, data)
  },

  async suspendForInadimplencia(id: string): Promise<ContabilidadeAdmin> {
    return await apiClient.post<ContabilidadeAdmin>(`/administracao/contabilidades-admin/${id}/suspender-por-inadimplencia/`)
  },

  async reactivate(id: string): Promise<ContabilidadeAdmin> {
    return await apiClient.post<ContabilidadeAdmin>(`/administracao/contabilidades-admin/${id}/reativar/`)
  },

  async summary(): Promise<ContabilidadeSummary> {
    return await apiClient.get<ContabilidadeSummary>('/api/administracao/contabilidades-admin/resumo/')
  },
}
