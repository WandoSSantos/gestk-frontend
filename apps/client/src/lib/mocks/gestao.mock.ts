import type {
  CarteiraCliente,
  CategoriaCliente,
  EvolucaoMensal,
  ClienteDetalhado,
  UsuarioAtividade,
  AtividadeUsuario,
  ProdutividadeUsuario,
  KPIEscritorio,
  ResultadoFinanceiro
} from '@gestk/shared';

// Mock data para Carteira
export const mockCarteiraClientes: CarteiraCliente[] = [
  {
    id: '1',
    razao_social: 'Empresa ABC Ltda',
    cnpj: '12.345.678/0001-90',
    regime_fiscal: 1,
    regime_fiscal_display: 'Simples Nacional',
    ramo_atividade: 3,
    ramo_atividade_display: 'Serviços',
    status_cliente: 'ativo',
    data_abertura: '2023-01-15',
    data_inicio_contrato: '2023-02-01',
    tempo_contrato_meses: 24,
    ultima_movimentacao: '2024-12-15'
  },
  {
    id: '2',
    razao_social: 'Comércio XYZ S/A',
    cnpj: '98.765.432/0001-10',
    regime_fiscal: 2,
    regime_fiscal_display: 'Lucro Presumido',
    ramo_atividade: 1,
    ramo_atividade_display: 'Comércio',
    status_cliente: 'novo',
    data_abertura: '2024-11-20',
    data_inicio_contrato: '2024-12-01',
    tempo_contrato_meses: 1,
    ultima_movimentacao: '2024-12-10'
  },
  {
    id: '3',
    razao_social: 'Indústria DEF Ltda',
    cnpj: '11.222.333/0001-44',
    regime_fiscal: 3,
    regime_fiscal_display: 'Lucro Real',
    ramo_atividade: 2,
    ramo_atividade_display: 'Indústria',
    status_cliente: 'inativo',
    data_abertura: '2022-06-10',
    data_inicio_contrato: '2022-07-01',
    tempo_contrato_meses: 30,
    ultima_movimentacao: '2024-10-15'
  },
  {
    id: '4',
    razao_social: 'Tecnologia GHI ME',
    cnpj: '55.666.777/0001-88',
    regime_fiscal: 4,
    regime_fiscal_display: 'MEI',
    ramo_atividade: 5,
    ramo_atividade_display: 'Tecnologia',
    status_cliente: 'sem_movimentacao',
    data_abertura: '2023-08-05',
    data_inicio_contrato: '2023-09-01',
    tempo_contrato_meses: 15,
    ultima_movimentacao: '2024-08-20'
  }
];

export const mockCategoriasClientes: CategoriaCliente[] = [
  {
    categoria: 'Ativos',
    quantidade: 45,
    percentual: 60.0,
    valor_total: 450000
  },
  {
    categoria: 'Inativos',
    quantidade: 15,
    percentual: 20.0,
    valor_total: 150000
  },
  {
    categoria: 'Novos',
    quantidade: 10,
    percentual: 13.3,
    valor_total: 100000
  },
  {
    categoria: 'Sem Movimentação',
    quantidade: 5,
    percentual: 6.7,
    valor_total: 50000
  }
];

export const mockEvolucaoMensal: EvolucaoMensal[] = [
  { mes: '2024-01', total_clientes: 65, novos_clientes: 5, clientes_inativos: 2 },
  { mes: '2024-02', total_clientes: 68, novos_clientes: 4, clientes_inativos: 1 },
  { mes: '2024-03', total_clientes: 71, novos_clientes: 6, clientes_inativos: 3 },
  { mes: '2024-04', total_clientes: 73, novos_clientes: 3, clientes_inativos: 1 },
  { mes: '2024-05', total_clientes: 75, novos_clientes: 4, clientes_inativos: 2 },
  { mes: '2024-06', total_clientes: 77, novos_clientes: 5, clientes_inativos: 3 },
  { mes: '2024-07', total_clientes: 79, novos_clientes: 3, clientes_inativos: 1 },
  { mes: '2024-08', total_clientes: 81, novos_clientes: 4, clientes_inativos: 2 },
  { mes: '2024-09', total_clientes: 83, novos_clientes: 5, clientes_inativos: 3 },
  { mes: '2024-10', total_clientes: 85, novos_clientes: 4, clientes_inativos: 2 },
  { mes: '2024-11', total_clientes: 87, novos_clientes: 6, clientes_inativos: 4 },
  { mes: '2024-12', total_clientes: 89, novos_clientes: 5, clientes_inativos: 3 }
];

// Mock data para Usuários
export const mockUsuariosAtividade: UsuarioAtividade[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao.silva@gestk.com',
    funcao: 'Contador Sênior',
    departamento: 'Contabilidade',
    ativo: true,
    ultimo_acesso: '2024-12-15T10:30:00Z',
    total_horas_mes: 160,
    atividades_mes: 45
  },
  {
    id: '2',
    nome: 'Maria Santos',
    email: 'maria.santos@gestk.com',
    funcao: 'Analista Fiscal',
    departamento: 'Fiscal',
    ativo: true,
    ultimo_acesso: '2024-12-15T09:15:00Z',
    total_horas_mes: 150,
    atividades_mes: 38
  },
  {
    id: '3',
    nome: 'Pedro Costa',
    email: 'pedro.costa@gestk.com',
    funcao: 'Assistente Contábil',
    departamento: 'Contabilidade',
    ativo: true,
    ultimo_acesso: '2024-12-14T16:45:00Z',
    total_horas_mes: 140,
    atividades_mes: 32
  },
  {
    id: '4',
    nome: 'Ana Oliveira',
    email: 'ana.oliveira@gestk.com',
    funcao: 'Gerente de Projetos',
    departamento: 'Gestão',
    ativo: false,
    ultimo_acesso: '2024-11-30T17:00:00Z',
    total_horas_mes: 0,
    atividades_mes: 0
  }
];

export const mockAtividadesUsuario: AtividadeUsuario[] = [
  {
    id: '1',
    usuario_id: '1',
    data_atividade: '2024-12-15',
    sistema_modulo: 'Contabilidade',
    tempo_sessao_minutos: 45,
    empresa: 'Empresa ABC Ltda',
    descricao: 'Lançamento de lançamentos contábeis'
  },
  {
    id: '2',
    usuario_id: '1',
    data_atividade: '2024-12-15',
    sistema_modulo: 'Fiscal',
    tempo_sessao_minutos: 30,
    empresa: 'Comércio XYZ S/A',
    descricao: 'Emissão de notas fiscais'
  },
  {
    id: '3',
    usuario_id: '2',
    data_atividade: '2024-12-15',
    sistema_modulo: 'Fiscal',
    tempo_sessao_minutos: 60,
    empresa: 'Indústria DEF Ltda',
    descricao: 'Cálculo de impostos'
  }
];

export const mockProdutividadeUsuario: ProdutividadeUsuario[] = [
  {
    usuario_id: '1',
    nome: 'João Silva',
    total_horas: 160,
    atividades_realizadas: 45,
    eficiencia: 85.5,
    periodo: '2024-12'
  },
  {
    usuario_id: '2',
    nome: 'Maria Santos',
    total_horas: 150,
    atividades_realizadas: 38,
    eficiencia: 78.2,
    periodo: '2024-12'
  },
  {
    usuario_id: '3',
    nome: 'Pedro Costa',
    total_horas: 140,
    atividades_realizadas: 32,
    eficiencia: 72.1,
    periodo: '2024-12'
  }
];

// Mock data para Análise do Escritório
export const mockKPIEscritorio: KPIEscritorio[] = [
  {
    nome: 'Total de Clientes',
    valor: 89,
    variacao_percentual: 12.5,
    periodo_anterior: 79,
    meta: 100,
    unidade: 'clientes'
  },
  {
    nome: 'Receita Mensal',
    valor: 125000,
    variacao_percentual: 8.3,
    periodo_anterior: 115400,
    meta: 150000,
    unidade: 'R$'
  },
  {
    nome: 'Produtividade Média',
    valor: 78.5,
    variacao_percentual: 5.2,
    periodo_anterior: 74.6,
    meta: 80.0,
    unidade: '%'
  },
  {
    nome: 'Satisfação do Cliente',
    valor: 4.2,
    variacao_percentual: -2.3,
    periodo_anterior: 4.3,
    meta: 4.5,
    unidade: '/5.0'
  }
];

export const mockResultadoFinanceiro: ResultadoFinanceiro = {
  receita_total: 1500000,
  despesas_total: 950000,
  lucro_liquido: 550000,
  margem_lucro: 36.7,
  periodo: '2024'
};

