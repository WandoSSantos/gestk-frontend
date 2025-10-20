/**
 * Types para o módulo de Contratos GESTK
 * Documentação: docs/BLOCO_ADMIN_ATUALIZADO.md
 */

export interface ContratoGestk {
  id: string;
  contabilidade: string; // UUID
  contabilidade_razao_social: string; // Read-only
  contabilidade_cnpj: string; // Read-only
  numero_contrato: string;
  plano_servico: 'basico' | 'intermediario' | 'avancado' | 'enterprise' | 'custom';
  modulos_inclusos: string[]; // ['fiscal', 'contabil', 'folha', 'financeiro']
  limites: {
    max_empresas?: number;
    max_usuarios?: number;
    max_upload_mensal_mb?: number;
  };
  data_inicio: string; // ISO 8601
  data_fim: string | null; // ISO 8601
  trial_ate: string | null; // ISO 8601
  valor_mensal: string; // Decimal
  valor_setup: string | null; // Decimal
  status: 'trial' | 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
  motivo_suspensao: string | null;
  data_suspensao: string | null;
  motivo_cancelamento: string | null;
  data_cancelamento: string | null;
  observacoes: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface ContratoGestkCreateData {
  contabilidade: string; // UUID
  numero_contrato: string;
  plano_servico: 'basico' | 'intermediario' | 'avancado' | 'enterprise' | 'custom';
  modulos_inclusos: string[];
  limites?: {
    max_empresas?: number;
    max_usuarios?: number;
    max_upload_mensal_mb?: number;
  };
  data_inicio: string;
  data_fim?: string | null;
  trial_ate?: string | null;
  valor_mensal: string;
  valor_setup?: string | null;
  observacoes?: string | null;
}

export interface ContratoGestkUpdateData extends Partial<ContratoGestkCreateData> {}

export interface ContratoGestkFilters {
  contabilidade?: string;
  numero_contrato?: string;
  plano_servico?: string;
  status?: 'trial' | 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
  data_inicio_apos?: string;
  data_inicio_antes?: string;
  search?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
}

export interface ContratoGestkResumo {
  total: number;
  por_status: {
    trial: number;
    ativo: number;
    suspenso: number;
    cancelado: number;
    vencido: number;
  };
  por_plano: {
    basico: number;
    intermediario: number;
    avancado: number;
    enterprise: number;
    custom: number;
  };
  receita_mensal: string;
  receita_anual: string;
  total_empresas_ativas: number;
  total_usuarios_ativos: number;
}

export interface ContratoGestkApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ContratoGestk[];
}

// Enums para melhor type safety
export enum PlanoServico {
  BASICO = 'basico',
  INTERMEDIARIO = 'intermediario',
  AVANCADO = 'avancado',
  ENTERPRISE = 'enterprise',
  CUSTOM = 'custom',
}

export enum StatusContrato {
  TRIAL = 'trial',
  ATIVO = 'ativo',
  SUSPENSO = 'suspenso',
  CANCELADO = 'cancelado',
  VENCIDO = 'vencido',
}

export enum Modulo {
  FISCAL = 'fiscal',
  CONTABIL = 'contabil',
  FOLHA = 'folha',
  FINANCEIRO = 'financeiro',
}
