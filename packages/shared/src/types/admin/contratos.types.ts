/**
 * Tipos para Módulo de Administração - Contratos GESTK
 * 
 * @module types/admin/contratos
 */

import type { Contabilidade, Plano } from '../index'

/**
 * Status possíveis para um contrato
 */
export type ContratoStatus = 'ativo' | 'suspenso' | 'cancelado' | 'expirado'

/**
 * Interface principal de Contrato GESTK
 */
export interface Contrato {
  id: string
  contabilidade: Contabilidade
  plano: Plano
  data_inicio: string
  data_fim: string | null
  valor: number
  status: ContratoStatus
  observacoes: string | null
  created_at: string
  updated_at: string
}

/**
 * Dados para criação de um novo contrato
 */
export interface ContratoCreateData {
  contabilidade_id: string
  plano_id: string
  data_inicio: string
  data_fim?: string | null
  valor: number
  observacoes?: string | null
}

/**
 * Dados para atualização de um contrato existente
 */
export interface ContratoUpdateData {
  plano_id?: string
  data_inicio?: string
  data_fim?: string | null
  valor?: number
  observacoes?: string | null
}

/**
 * Filtros para listagem de contratos
 */
export interface ContratoFilters {
  status?: ContratoStatus
  contabilidade_id?: string
  plano_id?: string
  data_inicio_min?: string
  data_inicio_max?: string
  data_fim_min?: string
  data_fim_max?: string
  search?: string
  page?: number
  page_size?: number
  ordering?: string
}

/**
 * Resumo estatístico dos contratos
 */
export interface ContratoSummary {
  total: number
  ativos: number
  suspensos: number
  cancelados: number
  expirados: number
  valor_total_mensal: number
  valor_medio_contrato: number
  proximos_vencimentos: Array<{
    contrato_id: string
    contabilidade_nome: string
    data_fim: string
    dias_restantes: number
  }>
}

/**
 * Resposta paginada de contratos
 */
export interface ContratosPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: Contrato[]
}
