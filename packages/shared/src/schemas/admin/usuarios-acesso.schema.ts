/**
 * Schemas de Validação Zod para Usuários de Acesso
 * 
 * Validação de formulários e dados de API com:
 * - Validação de campos obrigatórios
 * - Validação de formatos (email, username, etc)
 * - Validação de lógica de negócio
 * - Mensagens de erro personalizadas em português
 * 
 * @module schemas/admin/usuarios-acesso
 */

import { z } from 'zod'
import { MODULOS_DISPONIVEIS } from '../../types/admin/usuarios-acesso.types'

/**
 * Schema de validação para criação de usuário
 */
export const usuarioAcessoCreateSchema = z.object({
  username: z
    .string()
    .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres')
    .max(150, 'Nome de usuário deve ter no máximo 150 caracteres')
    .regex(/^[a-zA-Z0-9._-]+$/, 'Nome de usuário deve conter apenas letras, números, pontos, underscores e hífens'),

  email: z
    .string()
    .email('Email inválido')
    .toLowerCase(),

  password: z
    .string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Senha deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'Senha deve conter pelo menos um número'),

  first_name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(150, 'Nome deve ter no máximo 150 caracteres'),

  last_name: z
    .string()
    .min(2, 'Sobrenome deve ter no mínimo 2 caracteres')
    .max(150, 'Sobrenome deve ter no máximo 150 caracteres'),

  tipo_usuario: z.enum(['admin', 'contador', 'cliente', 'suporte'], {
    message: 'Tipo de usuário inválido',
  }),

  contabilidades: z
    .array(z.string().uuid('ID de contabilidade inválido'))
    .min(1, 'Selecione pelo menos uma contabilidade')
    .default([]),

  data_inicio: z.string().refine((date) => {
    const parsed = new Date(date)
    return !isNaN(parsed.getTime())
  }, 'Data de início inválida'),

  data_fim: z
    .string()
    .refine((date) => {
      if (!date) return true
      const parsed = new Date(date)
      return !isNaN(parsed.getTime())
    }, 'Data de fim inválida')
    .nullable()
    .optional(),

  modulos_acessiveis: z
    .array(z.enum(MODULOS_DISPONIVEIS as any))
    .min(1, 'Selecione pelo menos um módulo')
    .default([]),

  permissoes: z
    .array(z.string())
    .default([]),
}).refine(
  (data) => {
    // Validar que data_fim é posterior a data_inicio
    if (data.data_fim) {
      const inicio = new Date(data.data_inicio)
      const fim = new Date(data.data_fim)
      return fim > inicio
    }
    return true
  },
  {
    message: 'Data de fim deve ser posterior à data de início',
    path: ['data_fim'],
  }
)

/**
 * Schema de validação para atualização de usuário
 */
export const usuarioAcessoUpdateSchema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .toLowerCase()
    .optional(),

  first_name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(150, 'Nome deve ter no máximo 150 caracteres')
    .optional(),

  last_name: z
    .string()
    .min(2, 'Sobrenome deve ter no mínimo 2 caracteres')
    .max(150, 'Sobrenome deve ter no máximo 150 caracteres')
    .optional(),

  tipo_usuario: z
    .enum(['admin', 'contador', 'cliente', 'suporte'])
    .optional(),

  contabilidades: z
    .array(z.string().uuid('ID de contabilidade inválido'))
    .min(1, 'Selecione pelo menos uma contabilidade')
    .optional(),

  data_fim: z
    .string()
    .refine((date) => {
      if (!date) return true
      const parsed = new Date(date)
      return !isNaN(parsed.getTime())
    }, 'Data de fim inválida')
    .nullable()
    .optional(),

  modulos_acessiveis: z
    .array(z.enum(MODULOS_DISPONIVEIS as any))
    .min(1, 'Selecione pelo menos um módulo')
    .optional(),

  permissoes: z
    .array(z.string())
    .optional(),
})

/**
 * Schema de validação para estender vigência
 */
export const estenderVigenciaSchema = z.object({
  data_fim: z.string().refine(
    (date) => {
      const parsed = new Date(date)
      const hoje = new Date()
      return parsed > hoje
    },
    'Data de fim deve ser futura'
  ),
})

/**
 * Schema de validação para filtros de busca
 */
export const usuarioAcessoFiltersSchema = z.object({
  tipo_usuario: z.enum(['admin', 'contador', 'cliente', 'suporte']).optional(),
  is_active: z.boolean().optional(),
  contabilidade_id: z.string().uuid().optional(),
  search: z.string().optional(),
  data_inicio_min: z.string().optional(),
  data_inicio_max: z.string().optional(),
  page: z.number().int().positive().default(1),
  page_size: z.number().int().positive().max(100).default(20),
  ordering: z.string().optional(),
})

/**
 * Tipos inferidos dos schemas
 */
export type UsuarioAcessoCreateSchema = z.infer<typeof usuarioAcessoCreateSchema>
export type UsuarioAcessoUpdateSchema = z.infer<typeof usuarioAcessoUpdateSchema>
export type EstenderVigenciaSchema = z.infer<typeof estenderVigenciaSchema>
export type UsuarioAcessoFiltersSchema = z.infer<typeof usuarioAcessoFiltersSchema>
