/**
 * Tipos para Módulo de Usuários de Acesso
 * 
 * @module types/admin/usuarios-acesso
 */

import type { Contabilidade } from '../index'

/**
 * Tipo de usuário no sistema
 */
export type TipoUsuario = 'admin' | 'contador' | 'cliente' | 'suporte'

/**
 * Interface de Usuário de Acesso
 */
export interface UsuarioAcesso {
  id: string
  username: string
  email: string
  first_name: string
  last_name: string
  tipo_usuario: TipoUsuario
  contabilidades: Contabilidade[]
  data_inicio: string
  data_fim: string | null
  is_active: boolean
  modulos_acessiveis: string[]
  permissoes: string[]
  ultimo_acesso: string | null
  created_at: string
  updated_at: string
}

/**
 * Dados para criar usuário de acesso
 */
export interface UsuarioAcessoCreateData {
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
  tipo_usuario: TipoUsuario
  contabilidades: string[] // IDs das contabilidades
  data_inicio: string
  data_fim?: string | null
  modulos_acessiveis: string[]
  permissoes?: string[]
}

/**
 * Dados para atualizar usuário de acesso
 */
export interface UsuarioAcessoUpdateData {
  email?: string
  first_name?: string
  last_name?: string
  tipo_usuario?: TipoUsuario
  contabilidades?: string[]
  data_fim?: string | null
  modulos_acessiveis?: string[]
  permissoes?: string[]
}

/**
 * Dados para estender vigência
 */
export interface EstenderVigenciaData {
  data_fim: string
}

/**
 * Filtros para usuários de acesso
 */
export interface UsuarioAcessoFilters {
  tipo_usuario?: TipoUsuario
  is_active?: boolean
  contabilidade_id?: string
  search?: string
  data_inicio_min?: string
  data_inicio_max?: string
  page?: number
  page_size?: number
  ordering?: string
}

/**
 * Resumo de usuários de acesso
 */
export interface UsuarioAcessoSummary {
  total: number
  ativos: number
  inativos: number
  por_tipo: {
    admin: number
    contador: number
    cliente: number
    suporte: number
  }
  proximos_vencimentos: Array<{
    usuario_id: string
    username: string
    data_fim: string
    dias_restantes: number
  }>
}

/**
 * Resposta paginada de usuários
 */
export interface UsuariosAcessoPaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: UsuarioAcesso[]
}

/**
 * Módulos disponíveis no sistema
 */
export const MODULOS_DISPONIVEIS = [
  'dashboard',
  'carteira',
  'clientes',
  'usuarios',
  'escritorio',
  'relatorios',
  'fiscal',
  'contabil',
  'demografico',
  'indicadores',
  'dre'
] as const

export type ModuloDisponivel = typeof MODULOS_DISPONIVEIS[number]

/**
 * Permissões disponíveis
 */
export const PERMISSOES_DISPONIVEIS = [
  'view',
  'create',
  'edit',
  'delete',
  'export'
] as const

export type PermissaoDisponivel = typeof PERMISSOES_DISPONIVEIS[number]
