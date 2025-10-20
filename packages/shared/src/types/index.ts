// ===== TIPOS BASE =====

export type UsuarioTipo = 'superuser' | 'admin' | 'contador' | 'cliente' | 'operacional' | 'readonly'

export interface User {
  id: string
  username: string
  email: string
  first_name: string
  last_name: string
  tipo_usuario: 'superuser' | 'admin' | 'operacional' | 'etl' | 'readonly'
  contabilidade?: Contabilidade
  is_active: boolean
  date_joined: string
  last_login?: string
}

export interface Contabilidade {
  id: string
  razao_social: string
  nome_fantasia?: string
  cnpj: string
  email: string
  telefone?: string
  endereco?: string
  ativo: boolean
  responsavel_financeiro_nome?: string
  responsavel_financeiro_email?: string
  suspensa_por_inadimplencia: boolean
  saldo_creditos: number
  created_at: string
  updated_at: string
}

// ===== AUTENTICAÇÃO =====

export interface LoginData {
  username: string
  password: string
}

export interface LoginResponse {
  access: string
  refresh: string
  user: User
}

export interface RefreshTokenData {
  refresh: string
}

export interface RefreshTokenResponse {
  access: string
}

// ===== ADMIN - CONTRATOS GESTK =====

// Tipo para Pessoa Jurídica (cliente direto da GESTK)
export interface PessoaJuridica {
  id: string
  razao_social: string
  nome_fantasia?: string
  cnpj: string
  email: string
  telefone?: string
  endereco?: string
  responsavel_nome?: string
  responsavel_email?: string
  ativo: boolean
  created_at: string
  updated_at: string
}

// Tipo para cliente do contrato GESTK (pode ser Contabilidade ou Pessoa Jurídica)
export interface ClienteGestk {
  tipo: 'contabilidade' | 'pessoa_juridica'
  contabilidade?: Contabilidade
  pessoa_juridica?: PessoaJuridica
}

export interface ContratoGestk {
  id: string
  numero_contrato: string
  // Cliente pode ser Contabilidade ou Pessoa Jurídica
  cliente: ClienteGestk
  // Manter campo contabilidade para compatibilidade (será removido se for PJ)
  contabilidade?: Contabilidade
  pessoa_juridica?: PessoaJuridica
  plano_servico: string
  plano_servico_nome?: string
  valor_mensal: number
  data_inicio: string
  data_termino?: string
  status: 'ativo' | 'suspenso' | 'cancelado' | 'vencido'
  modulos_inclusos: string[]
  limites: {
    usuarios: number
    empresas: number
    contratos: number
  }
  created_at: string
  updated_at: string
}

export interface UsuarioAcesso {
  id: string
  usuario: User
  contabilidade: Contabilidade
  contrato?: ContratoGestk
  empresa_cnpj?: string
  role: 'superuser' | 'admin' | 'operacional' | 'etl' | 'readonly'
  modulos_acesso: string[]
  data_inicio: string
  data_fim?: string
  ativo: boolean
  created_at: string
  updated_at: string
}

// ===== ADMIN - BILLING =====

export interface Plano {
  id: string
  codigo: string
  nome: string
  descricao?: string
  preco_mensal: number
  preco_anual: number
  modulos_inclusos: string[]
  limites: {
    usuarios: number
    empresas: number
    contratos: number
  }
  ativo: boolean
  created_at: string
  updated_at: string
}

export interface Assinatura {
  id: string
  contabilidade: Contabilidade
  plano: Plano
  data_inicio: string
  data_fim?: string
  status: 'ativa' | 'suspensa' | 'cancelada' | 'vencida'
  valor_mensal: number
  ciclo_cobranca: 'mensal' | 'anual'
  created_at: string
  updated_at: string
}

export interface Fatura {
  id: string
  assinatura: Assinatura
  numero_fatura: string
  competencia: string
  valor_original: number
  valor_final: number
  data_emissao: string
  data_vencimento: string
  status: 'pendente' | 'paga' | 'vencida' | 'cancelada'
  created_at: string
  updated_at: string
}

export interface Pagamento {
  id: string
  fatura: Fatura
  valor: number
  metodo: 'pix' | 'cartao' | 'boleto' | 'transferencia'
  transacao_id: string
  status: 'pendente' | 'processando' | 'aprovado' | 'rejeitado' | 'estornado'
  data_pagamento?: string
  created_at: string
  updated_at: string
}

// ===== CLIENT - GESTÃO =====

export interface CarteiraCliente {
  id: string
  razao_social: string
  cnpj: string
  regime_fiscal: 'simples' | 'presumido' | 'real' | 'mei'
  ramo_atividade: 'comercio' | 'industria' | 'servicos' | 'tecnologia'
  status_cliente: 'ativo' | 'inativo' | 'novo' | 'sem_movimentacao'
  data_abertura: string
  data_inicio_contrato: string
  tempo_contrato_meses: number
  ultima_movimentacao: string
  uf: string
  cidade: string
}

export interface ClienteDetalhado extends CarteiraCliente {
  nome_fantasia?: string
  ativo: boolean
  data_inicio_atividades: string
  contratos: ContratoCliente[]
  faturamento_total: number
  faturamento_mes_atual: number
  notas_fiscais_mes: number
}

export interface ContratoCliente {
  id: string
  data_inicio: string
  data_termino?: string
  valor_honorario: number
  plano_servico: string
  modulos_contratados: string[]
  status_cobranca: 'em_dia' | 'atrasado' | 'suspenso'
}

export interface AniversarioParceria {
  id: string
  razao_social: string
  cnpj: string
  data_inicio_contrato: string
  anos_parceria: number
  data_criacao_empresa: string
  anos_atividade: number
}

export interface SocioAniversariante {
  id: string
  nome: string
  cpf: string
  data_nascimento: string
  idade: number
  empresa: string
  cnpj: string
}

export interface ComposicaoSocietaria {
  id: string
  nome: string
  cpf_cnpj: string
  participacao: number
  tipo: 'pessoa_fisica' | 'pessoa_juridica'
  outras_empresas: string[]
}

// ===== CLIENT - DASHBOARDS =====

export interface DemograficoIndicadores {
  total_colaboradores: number
  colaboradores_ativos: number
  colaboradores_inativos: number
  turnover_mensal: number
  turnover_anual: number
  media_idade: number
  percentual_masculino: number
  percentual_feminino: number
  distribuicao_escolaridade: {
    fundamental: number
    medio: number
    superior: number
    pos: number
  }
}

export interface FiscalFaturamento {
  total_faturamento: number
  total_impostos: number
  percentual_impostos: number
  total_notas_fiscais: number
  media_valor_nota: number
  faturamento_mes_anterior: number
  crescimento_percentual: number
}

export interface ContabilIndicadores {
  total_ativo: number
  total_passivo: number
  patrimonio_liquido: number
  receita_total: number
  despesas_total: number
  lucro_liquido: number
  margem_lucro: number
}

// ===== FILTROS =====

export interface DateFilters {
  data_inicio?: string
  data_fim?: string
}

export interface ClienteFilters extends DateFilters {
  search?: string
  regime_fiscal?: string
  ramo_atividade?: string
  status_cliente?: string
  page?: number
  page_size?: number
}

export interface UsuarioFilters extends DateFilters {
  search?: string
  tipo_usuario?: string
  ativo?: boolean
  page?: number
  page_size?: number
}

export interface SimulacaoCustoPayload {
  valor_hora: number
  horas_trabalhadas: number
  lancamentos_manuais: number
  lancamentos_automaticos: number
}

// ===== EXPORT =====

export interface ExportResponse {
  arquivo_url: string
  nome_arquivo: string
  tamanho_bytes: number
  data_geracao: string
}

// ===== PAGINAÇÃO DJANGO =====

export interface DjangoApiResponse<T> {
  count: number
  next?: string
  previous?: string
  results: T[]
}

export interface DjangoPaginatedResponse<T> {
  count: number
  next?: string
  previous?: string
  results: T[]
}

// ===== RESPONSES GENÉRICAS =====

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// ===== EXPORTS DOS MÓDULOS ADMIN =====
export * from './admin'
