// Tipos para o módulo Gestão
export interface CarteiraCliente {
  id: string;
  razao_social: string;
  cnpj: string;
  regime_fiscal: number;
  regime_fiscal_display: string;
  ramo_atividade: number;
  ramo_atividade_display: string;
  status_cliente: 'ativo' | 'inativo' | 'novo' | 'sem_movimentacao';
  data_abertura: string;
  data_inicio_contrato: string;
  tempo_contrato_meses: number;
  ultima_movimentacao?: string;
}

export interface CategoriaCliente {
  categoria: string;
  quantidade: number;
  percentual: number;
  valor_total?: number;
}

export interface EvolucaoMensal {
  mes: string;
  total_clientes: number;
  novos_clientes: number;
  clientes_inativos: number;
}

export interface ClienteDetalhado extends CarteiraCliente {
  socio_majoritario?: SocioMajoritario;
  endereco?: EnderecoCliente;
  contatos?: ContatoCliente[];
  custo_cliente?: CustoCliente;
  ultimas_atividades?: AtividadeCliente[];
}

export interface SocioMajoritario {
  nome: string;
  cpf: string;
  participacao_percentual: number;
  qualificacao: string;
}

export interface EnderecoCliente {
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

export interface ContatoCliente {
  tipo: 'telefone' | 'email' | 'celular';
  valor: string;
  principal: boolean;
}

export interface CustoCliente {
  valor_mensal: number;
  horas_utilizadas: number;
  custo_por_hora: number;
  ultima_atualizacao: string;
}

export interface AtividadeCliente {
  data: string;
  tipo: string;
  descricao: string;
  usuario: string;
}

// Tipos para Usuários
export interface UsuarioAtividade {
  id: string;
  nome: string;
  email: string;
  funcao: string;
  departamento: string;
  ativo: boolean;
  ultimo_acesso: string;
  total_horas_mes: number;
  atividades_mes: number;
}

export interface AtividadeUsuario {
  id: string;
  usuario_id: string;
  data_atividade: string;
  sistema_modulo: string;
  tempo_sessao_minutos: number;
  empresa: string;
  descricao: string;
}

export interface ProdutividadeUsuario {
  usuario_id: string;
  nome: string;
  total_horas: number;
  atividades_realizadas: number;
  eficiencia: number;
  periodo: string;
}

// Tipos para Análise do Escritório
export interface KPIEscritorio {
  nome: string;
  valor: number;
  variacao_percentual: number;
  periodo_anterior: number;
  meta?: number;
  unidade: string;
}

export interface ResultadoFinanceiro {
  receita_total: number;
  despesas_total: number;
  lucro_liquido: number;
  margem_lucro: number;
  periodo: string;
}

// Tipos para Dashboards
export interface DashboardDemografico {
  indicadores: {
    total_colaboradores: number;
    turnover: number;
    media_idade: number;
    diversidade_genero: number;
  };
  evolucao_mensal: {
    mes: string;
    total: number;
    admissões: number;
    demissões: number;
  }[];
  distribuicao_idade: {
    faixa: string;
    quantidade: number;
    percentual: number;
  }[];
  distribuicao_escolaridade: {
    nivel: string;
    quantidade: number;
    percentual: number;
  }[];
  distribuicao_cargo: {
    cargo: string;
    quantidade: number;
    percentual: number;
  }[];
  distribuicao_genero: {
    genero: string;
    quantidade: number;
    percentual: number;
  }[];
}

export interface DashboardFiscal {
  faturamento_total: number;
  faturamento_anterior: number;
  variacao_faturamento: number;
  top_produtos: {
    produto: string;
    valor: number;
    quantidade: number;
    percentual: number;
  }[];
  top_clientes: {
    cliente: string;
    valor: number;
    percentual: number;
  }[];
  top_fornecedores: {
    fornecedor: string;
    valor: number;
    percentual: number;
  }[];
  geolocalizacao: {
    uf: string;
    valor: number;
    quantidade: number;
  }[];
  impostos_devidos: {
    tipo: string;
    valor: number;
    percentual: number;
  }[];
  evolucao_impostos: {
    mes: string;
    imposto_devido: number;
    saldo_recuperar: number;
  }[];
}

export interface DashboardContabil {
  indicadores: {
    ativo_total: number;
    passivo_total: number;
    patrimonio_liquido: number;
    receita_bruta: number;
    lucro_liquido: number;
  };
  evolucao_mensal: {
    mes: string;
    receita: number;
    despesa: number;
    lucro: number;
  }[];
  grupos_contas: {
    grupo: string;
    valor: number;
    percentual: number;
  }[];
  top_contas: {
    conta: string;
    valor: number;
    grupo: string;
  }[];
}

export interface DashboardIndicadores {
  financeiros: {
    nome: string;
    valor: number;
    meta: number;
    status: 'positivo' | 'negativo' | 'neutro';
  }[];
  operacionais: {
    nome: string;
    valor: number;
    meta: number;
    status: 'positivo' | 'negativo' | 'neutro';
  }[];
  patrimoniais: {
    nome: string;
    valor: number;
    meta: number;
    status: 'positivo' | 'negativo' | 'neutro';
  }[];
  tendencias: {
    indicador: string;
    tendencia: 'crescimento' | 'declinio' | 'estavel';
    variacao: number;
  }[];
}

export interface DashboardDRE {
  composicao: {
    item: string;
    valor_atual: number;
    valor_anterior: number;
    variacao: number;
    percentual_receita: number;
  }[];
  evolucao: {
    mes: string;
    receita_bruta: number;
    receita_liquida: number;
    lucro_bruto: number;
    lucro_liquido: number;
  }[];
  analise_vertical: {
    item: string;
    percentual: number;
  }[];
  analise_horizontal: {
    item: string;
    variacao_percentual: number;
  }[];
}

// Tipos para Filtros
export interface FiltrosCarteira {
  regime_fiscal?: number[];
  ramo_atividade?: number[];
  status_cliente?: string[];
  data_inicio?: string;
  data_fim?: string;
  busca?: string;
}

export interface FiltrosClientes {
  nome?: string;
  cnpj?: string;
  regime_fiscal?: number[];
  ramo_atividade?: number[];
  data_abertura_inicio?: string;
  data_abertura_fim?: string;
  busca?: string;
}

export interface FiltrosUsuarios {
  nome?: string;
  funcao?: string[];
  departamento?: string[];
  data_inicio?: string;
  data_fim?: string;
  ativo?: boolean;
}

export interface FiltrosDashboard {
  periodo_inicio: string;
  periodo_fim: string;
  empresa_id?: string;
  contabilidade_id?: string;
}

// Tipos para Exportação
export interface ExportOptions {
  formato: 'pdf' | 'excel' | 'csv';
  dados: any[];
  nome_arquivo: string;
  colunas?: string[];
  filtros_aplicados?: Record<string, any>;
}

export interface ExportResult {
  sucesso: boolean;
  url?: string;
  erro?: string;
  nome_arquivo: string;
}

// Tipos para Paginação
export interface PaginationParams {
  page: number;
  page_size: number;
  ordering?: string;
  search?: string;
}

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next?: string;
  previous?: string;
  page: number;
  page_size: number;
  total_pages: number;
}

// Enums
export enum RegimeFiscal {
  SIMPLES_NACIONAL = 1,
  LUCRO_PRESUMIDO = 2,
  LUCRO_REAL = 3,
  MEI = 4
}

export enum RamoAtividade {
  COMERCIO = 1,
  INDUSTRIA = 2,
  SERVICOS = 3,
  AGRONEGOCIO = 4,
  TECNOLOGIA = 5,
  CONSTRUCAO = 6
}

export enum StatusCliente {
  ATIVO = 'ativo',
  INATIVO = 'inativo',
  NOVO = 'novo',
  SEM_MOVIMENTACAO = 'sem_movimentacao'
}

