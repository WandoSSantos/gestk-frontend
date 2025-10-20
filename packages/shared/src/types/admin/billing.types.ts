/**
 * Tipos para Módulo de Billing
 * 
 * @module types/admin/billing
 */

import type { Contabilidade } from '../index'
import type { Contrato } from './contratos.types'

// ==================== PLANOS ====================

/**
 * Periodicidade de cobrança do plano
 */
export type PlanoPeriodicidade = 'mensal' | 'trimestral' | 'semestral' | 'anual'

/**
 * Interface de Plano de Assinatura
 */
export interface Plano {
  id: string
  nome: string
  descricao: string
  valor: number
  periodicidade: PlanoPeriodicidade
  recursos: string[]
  limite_usuarios: number | null
  limite_empresas: number | null
  ativo: boolean
  created_at: string
  updated_at: string
}

/**
 * Dados para criar plano
 */
export interface PlanoCreateData {
  nome: string
  descricao: string
  valor: number
  periodicidade: PlanoPeriodicidade
  recursos: string[]
  limite_usuarios?: number | null
  limite_empresas?: number | null
  ativo?: boolean
}

/**
 * Filtros para planos
 */
export interface PlanoFilters {
  ativo?: boolean
  periodicidade?: PlanoPeriodicidade
  valor_min?: number
  valor_max?: number
  search?: string
  page?: number
  page_size?: number
}

/**
 * Resumo de planos
 */
export interface PlanoSummary {
  total: number
  ativos: number
  inativos: number
  assinaturas_ativas: number
}

// ==================== ASSINATURAS ====================

/**
 * Status de assinatura
 */
export type AssinaturaStatus = 'ativa' | 'suspensa' | 'cancelada' | 'expirada'

/**
 * Interface de Assinatura
 */
export interface Assinatura {
  id: string
  contrato: Contrato
  plano: Plano
  data_inicio: string
  data_fim: string | null
  valor: number
  status: AssinaturaStatus
  auto_renovacao: boolean
  created_at: string
  updated_at: string
}

/**
 * Dados para criar assinatura
 */
export interface AssinaturaCreateData {
  contrato_id: string
  plano_id: string
  data_inicio: string
  data_fim?: string | null
  valor: number
  auto_renovacao?: boolean
}

/**
 * Dados para atualizar assinatura
 */
export interface AssinaturaUpdateData {
  plano_id?: string
  data_fim?: string | null
  valor?: number
  auto_renovacao?: boolean
}

/**
 * Filtros para assinaturas
 */
export interface AssinaturaFilters {
  status?: AssinaturaStatus
  contrato_id?: string
  plano_id?: string
  auto_renovacao?: boolean
  search?: string
  page?: number
  page_size?: number
}

/**
 * Resumo de assinaturas
 */
export interface AssinaturaSummary {
  total: number
  ativas: number
  suspensas: number
  canceladas: number
  expiradas: number
  valor_total_mensal: number
  proximas_renovacoes: Array<{
    assinatura_id: string
    contabilidade_nome: string
    data_renovacao: string
  }>
}

// ==================== FATURAS ====================

/**
 * Status de fatura
 */
export type FaturaStatus = 'pendente' | 'paga' | 'vencida' | 'cancelada'

/**
 * Interface de Fatura
 */
export interface Fatura {
  id: string
  assinatura: Assinatura
  numero: string
  valor: number
  data_emissao: string
  data_vencimento: string
  data_pagamento: string | null
  status: FaturaStatus
  descricao: string | null
  observacoes: string | null
  created_at: string
  updated_at: string
}

/**
 * Dados para criar fatura
 */
export interface FaturaCreateData {
  assinatura_id: string
  valor: number
  data_vencimento: string
  descricao?: string | null
  observacoes?: string | null
}

/**
 * Dados para atualizar fatura
 */
export interface FaturaUpdateData {
  data_vencimento?: string
  valor?: number
  descricao?: string | null
  observacoes?: string | null
}

/**
 * Filtros para faturas
 */
export interface FaturaFilters {
  status?: FaturaStatus
  assinatura_id?: string
  contabilidade_id?: string
  data_vencimento_min?: string
  data_vencimento_max?: string
  search?: string
  page?: number
  page_size?: number
}

/**
 * Resumo de faturas
 */
export interface FaturaSummary {
  total: number
  pendentes: number
  pagas: number
  vencidas: number
  canceladas: number
  valor_total_pendente: number
  valor_total_pago: number
  valor_total_vencido: number
}

// ==================== PAGAMENTOS ====================

/**
 * Forma de pagamento
 */
export type FormaPagamento = 'boleto' | 'pix' | 'cartao' | 'transferencia' | 'dinheiro'

/**
 * Status de pagamento
 */
export type PagamentoStatus = 'pendente' | 'confirmado' | 'estornado'

/**
 * Interface de Pagamento
 */
export interface Pagamento {
  id: string
  fatura: Fatura
  valor: number
  data_pagamento: string
  forma_pagamento: FormaPagamento
  comprovante: string | null
  status: PagamentoStatus
  observacoes: string | null
  created_at: string
  updated_at: string
}

/**
 * Dados para criar pagamento
 */
export interface PagamentoCreateData {
  fatura_id: string
  valor: number
  data_pagamento: string
  forma_pagamento: FormaPagamento
  comprovante?: string | null
  observacoes?: string | null
}

/**
 * Filtros para pagamentos
 */
export interface PagamentoFilters {
  status?: PagamentoStatus
  fatura_id?: string
  forma_pagamento?: FormaPagamento
  data_pagamento_min?: string
  data_pagamento_max?: string
  search?: string
  page?: number
  page_size?: number
}

/**
 * Resumo de pagamentos
 */
export interface PagamentoSummary {
  total: number
  pendentes: number
  confirmados: number
  estornados: number
  valor_total_confirmado: number
  valor_total_estornado: number
  por_forma_pagamento: Record<FormaPagamento, number>
}

// ==================== RESPOSTAS PAGINADAS ====================

export interface PlanosPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: Plano[]
}

export interface AssinaturasPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: Assinatura[]
}

export interface FaturasPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: Fatura[]
}

export interface PagamentosPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pagamento[]
}
