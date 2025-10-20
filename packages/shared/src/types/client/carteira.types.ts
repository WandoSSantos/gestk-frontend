// Types para o módulo de Carteira de Clientes

export type RegimeFiscal = 'SIMPLES_NACIONAL' | 'LUCRO_PRESUMIDO' | 'LUCRO_REAL';
export type StatusCliente = 'ATIVO' | 'INATIVO' | 'SUSPENSO';

export interface ClienteCarteira {
  id: string;
  razao_social: string;
  nome_fantasia?: string;
  cnpj: string;
  regime_fiscal: RegimeFiscal;
  status: StatusCliente;
  data_inicio: string;
  data_fim?: string;
  faturamento_mensal?: number;
  inadimplente: boolean;
  email?: string;
  telefone?: string;
  endereco?: {
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
}

export interface CarteiraFilters {
  regime_fiscal?: RegimeFiscal;
  status?: StatusCliente;
  data_inicio?: string;
  data_fim?: string;
  search?: string;
  inadimplente?: boolean;
  page?: number;
  page_size?: number;
}

export interface CarteiraApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface CategoriasCarteira {
  ativos: number;
  inativos: number;
  novos: number;
  inadimplentes: number;
}

export interface EvolucaoMensal {
  mes: string; // formato: "YYYY-MM" ou "Jan/2025"
  total_clientes: number;
  novos_clientes: number;
  clientes_inativos: number;
  clientes_suspensos?: number;
}

export interface PeriodoFilter {
  data_inicio?: string;
  data_fim?: string;
}
