/**
 * Tipos para Módulo de Contabilidades Admin
 * 
 * @module types/admin/contabilidades
 */

/**
 * Status da contabilidade
 */
export type ContabilidadeStatus = 'ativa' | 'suspensa' | 'inadimplente' | 'cancelada'

/**
 * Endereço completo
 */
export interface Endereco {
  logradouro: string
  numero: string
  complemento: string | null
  bairro: string
  cidade: string
  estado: string
  cep: string
}

/**
 * Interface de Contabilidade (Admin View)
 */
export interface ContabilidadeAdmin {
  id: string
  nome: string
  razao_social: string
  cnpj: string
  email: string
  telefone: string
  endereco: Endereco
  status: ContabilidadeStatus
  data_cadastro: string
  data_suspensao: string | null
  motivo_suspensao: string | null
  contrato_ativo_id: string | null
  total_assinaturas: number
  usuarios_vinculados: number
  clientes_cadastrados: number
  responsavel_nome: string | null
  responsavel_email: string | null
  responsavel_telefone: string | null
  created_at: string
  updated_at: string
}

/**
 * Dados para atualizar contabilidade
 */
export interface ContabilidadeUpdateData {
  nome?: string
  razao_social?: string
  email?: string
  telefone?: string
  endereco?: Partial<Endereco>
  responsavel_nome?: string | null
  responsavel_email?: string | null
  responsavel_telefone?: string | null
}

/**
 * Dados para suspender contabilidade
 */
export interface SuspenderContabilidadeData {
  motivo: string
}

/**
 * Filtros para contabilidades
 */
export interface ContabilidadeFilters {
  status?: ContabilidadeStatus
  search?: string
  estado?: string
  cidade?: string
  tem_contrato_ativo?: boolean
  data_cadastro_min?: string
  data_cadastro_max?: string
  page?: number
  page_size?: number
  ordering?: string
}

/**
 * Resumo de contabilidades
 */
export interface ContabilidadeSummary {
  total: number
  ativas: number
  suspensas: number
  inadimplentes: number
  canceladas: number
  com_contrato_ativo: number
  total_usuarios: number
  total_clientes: number
  distribuicao_por_estado: Record<string, number>
}

/**
 * Resposta paginada de contabilidades
 */
export interface ContabilidadesAdminPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: ContabilidadeAdmin[]
}

/**
 * Estados brasileiros
 */
export const ESTADOS_BRASIL = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
] as const

export type EstadoBrasil = typeof ESTADOS_BRASIL[number]
