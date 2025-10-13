// Dados mock para aniversários de parceria e sócios

export interface AniversarioParceria {
  id: string;
  empresa: string;
  cnpj: string;
  data_cadastro: string;
  anos_parceria: number;
  data_inicio_atividades: string;
  anos_atividade: number;
  status: 'ativo' | 'inativo' | 'pendente';
  valor_contrato: number;
  regime_fiscal: string;
  ramo_atividade: string;
}

export interface SocioAniversariante {
  id: string;
  nome: string;
  cpf: string;
  data_nascimento: string;
  idade: number;
  empresa: string;
  cnpj: string;
  cargo: string;
  telefone: string;
  email: string;
  data_aniversario: string; // Próximo aniversário
  dias_para_aniversario: number;
}

export interface EmpresaRegimeTributario {
  regime: string;
  quantidade: number;
  percentual: number;
  cor: string;
}

export interface EmpresaRamoAtividade {
  ramo: string;
  quantidade: number;
  percentual: number;
  cor: string;
}

// Dados mock para aniversários de parceria
export const mockAniversarioParceria: AniversarioParceria[] = [
  {
    id: '1',
    empresa: 'ALTO DA MANGABEIRA INCORPORACOES SPE LTD',
    cnpj: '57.811.207/0001-63',
    data_cadastro: '2024-10-22',
    anos_parceria: 0,
    data_inicio_atividades: '2024-10-22',
    anos_atividade: 0,
    status: 'ativo',
    valor_contrato: 2500,
    regime_fiscal: 'Lucro Real',
    ramo_atividade: 'Construção'
  },
  {
    id: '2',
    empresa: 'ANDRADE DISTRIBUIDORA LTDA',
    cnpj: '27.008.122/0002-61',
    data_cadastro: '2023-10-16',
    anos_parceria: 1,
    data_inicio_atividades: '2023-10-09',
    anos_atividade: 1,
    status: 'ativo',
    valor_contrato: 1800,
    regime_fiscal: 'Simples Nacional',
    ramo_atividade: 'Comércio'
  },
  {
    id: '3',
    empresa: 'ASP - CONSULTORIA, ARQUIVOLOGIA E CONTAB',
    cnpj: '07.036.370/0001-28',
    data_cadastro: '2018-09-30',
    anos_parceria: 6,
    data_inicio_atividades: '2004-10-14',
    anos_atividade: 20,
    status: 'ativo',
    valor_contrato: 3200,
    regime_fiscal: 'Lucro Presumido',
    ramo_atividade: 'Serviços'
  },
  {
    id: '4',
    empresa: 'TECH SOLUTIONS BRASIL LTDA',
    cnpj: '12.345.678/0001-90',
    data_cadastro: '2022-03-15',
    anos_parceria: 2,
    data_inicio_atividades: '2020-01-10',
    anos_atividade: 4,
    status: 'ativo',
    valor_contrato: 4500,
    regime_fiscal: 'Lucro Real',
    ramo_atividade: 'Tecnologia'
  },
  {
    id: '5',
    empresa: 'CONSTRUTORA VIDA NOVA S/A',
    cnpj: '98.765.432/0001-10',
    data_cadastro: '2020-11-20',
    anos_parceria: 4,
    data_inicio_atividades: '2018-05-15',
    anos_atividade: 6,
    status: 'ativo',
    valor_contrato: 6800,
    regime_fiscal: 'Lucro Real',
    ramo_atividade: 'Construção'
  },
  {
    id: '6',
    empresa: 'COMERCIAL SÃO PAULO LTDA',
    cnpj: '11.222.333/0001-44',
    data_cadastro: '2019-07-08',
    anos_parceria: 5,
    data_inicio_atividades: '2017-03-12',
    anos_atividade: 7,
    status: 'ativo',
    valor_contrato: 2200,
    regime_fiscal: 'Simples Nacional',
    ramo_atividade: 'Comércio'
  },
  {
    id: '7',
    empresa: 'INDUSTRIA MINEIRA LTDA',
    cnpj: '55.666.777/0001-88',
    data_cadastro: '2021-12-01',
    anos_parceria: 3,
    data_inicio_atividades: '2019-08-20',
    anos_atividade: 5,
    status: 'ativo',
    valor_contrato: 5200,
    regime_fiscal: 'Lucro Presumido',
    ramo_atividade: 'Indústria'
  },
  {
    id: '8',
    empresa: 'SERVIÇOS FINANCEIROS S/A',
    cnpj: '33.444.555/0001-66',
    data_cadastro: '2017-04-10',
    anos_parceria: 7,
    data_inicio_atividades: '2015-02-28',
    anos_atividade: 9,
    status: 'ativo',
    valor_contrato: 8500,
    regime_fiscal: 'Lucro Real',
    ramo_atividade: 'Serviços'
  }
];

// Dados mock para sócios aniversariantes
export const mockSociosAniversariantes: SocioAniversariante[] = [
  {
    id: '1',
    nome: 'João Silva Santos',
    cpf: '123.456.789-00',
    data_nascimento: '1985-12-15',
    idade: 38,
    empresa: 'TECH SOLUTIONS BRASIL LTDA',
    cnpj: '12.345.678/0001-90',
    cargo: 'Sócio Administrador',
    telefone: '(11) 99999-1111',
    email: 'joao.silva@techsolutions.com.br',
    data_aniversario: '2024-12-15',
    dias_para_aniversario: 0
  },
  {
    id: '2',
    nome: 'Maria Oliveira Costa',
    cpf: '987.654.321-00',
    data_nascimento: '1990-12-20',
    idade: 33,
    empresa: 'CONSTRUTORA VIDA NOVA S/A',
    cnpj: '98.765.432/0001-10',
    cargo: 'Diretora Financeira',
    telefone: '(11) 99999-2222',
    email: 'maria.oliveira@vidanova.com.br',
    data_aniversario: '2024-12-20',
    dias_para_aniversario: 5
  },
  {
    id: '3',
    nome: 'Carlos Eduardo Pereira',
    cpf: '456.789.123-00',
    data_nascimento: '1988-12-25',
    idade: 35,
    empresa: 'COMERCIAL SÃO PAULO LTDA',
    cnpj: '11.222.333/0001-44',
    cargo: 'Sócio Proprietário',
    telefone: '(11) 99999-3333',
    email: 'carlos.pereira@comercialsp.com.br',
    data_aniversario: '2024-12-25',
    dias_para_aniversario: 10
  },
  {
    id: '4',
    nome: 'Ana Paula Rodrigues',
    cpf: '789.123.456-00',
    data_nascimento: '1992-01-05',
    idade: 32,
    empresa: 'INDUSTRIA MINEIRA LTDA',
    cnpj: '55.666.777/0001-88',
    cargo: 'Sócia Diretora',
    telefone: '(11) 99999-4444',
    email: 'ana.rodrigues@industriam.com.br',
    data_aniversario: '2025-01-05',
    dias_para_aniversario: 21
  },
  {
    id: '5',
    nome: 'Roberto Almeida Lima',
    cpf: '321.654.987-00',
    data_nascimento: '1983-01-10',
    idade: 41,
    empresa: 'SERVIÇOS FINANCEIROS S/A',
    cnpj: '33.444.555/0001-66',
    cargo: 'Presidente',
    telefone: '(11) 99999-5555',
    email: 'roberto.lima@servfin.com.br',
    data_aniversario: '2025-01-10',
    dias_para_aniversario: 26
  }
];

// Dados mock para empresas por regime tributário
export const mockEmpresasRegimeTributario: EmpresaRegimeTributario[] = [
  {
    regime: 'Simples Nacional',
    quantidade: 345,
    percentual: 45.2,
    cor: '#fbbf24'
  },
  {
    regime: 'Lucro Presumido',
    quantidade: 198,
    percentual: 25.9,
    cor: '#60a5fa'
  },
  {
    regime: 'N/D',
    quantidade: 128,
    percentual: 16.8,
    cor: '#9ca3af'
  },
  {
    regime: 'Doméstica',
    quantidade: 48,
    percentual: 6.3,
    cor: '#34d399'
  },
  {
    regime: 'Lucro Real',
    quantidade: 42,
    percentual: 5.5,
    cor: '#f472b6'
  },
  {
    regime: 'Micro Empresa',
    quantidade: 20,
    percentual: 2.6,
    cor: '#fb7185'
  },
  {
    regime: 'Isenta de IRPJ',
    quantidade: 15,
    percentual: 2.0,
    cor: '#ef4444'
  },
  {
    regime: 'Regime Especial de Tributação',
    quantidade: 12,
    percentual: 1.6,
    cor: '#84cc16'
  },
  {
    regime: 'Imune do IRPJ',
    quantidade: 8,
    percentual: 1.0,
    cor: '#facc15'
  },
  {
    regime: 'MEI',
    quantidade: 5,
    percentual: 0.7,
    cor: '#06b6d4'
  }
];

// Dados mock para empresas por ramo de atividade
export const mockEmpresasRamoAtividade: EmpresaRamoAtividade[] = [
  {
    ramo: 'Comércio',
    quantidade: 280,
    percentual: 36.7,
    cor: '#3b82f6'
  },
  {
    ramo: 'Educação e Saúde',
    quantidade: 195,
    percentual: 25.6,
    cor: '#10b981'
  },
  {
    ramo: 'Desconhecido',
    quantidade: 120,
    percentual: 15.7,
    cor: '#6b7280'
  },
  {
    ramo: 'Administração Pública e Serviços Diversos',
    quantidade: 85,
    percentual: 11.1,
    cor: '#8b5cf6'
  },
  {
    ramo: 'Serviços Profissionais',
    quantidade: 45,
    percentual: 5.9,
    cor: '#f59e0b'
  },
  {
    ramo: 'Serviços Domésticos',
    quantidade: 25,
    percentual: 3.3,
    cor: '#ef4444'
  },
  {
    ramo: 'Indústria',
    quantidade: 20,
    percentual: 2.6,
    cor: '#84cc16'
  },
  {
    ramo: 'Construção',
    quantidade: 15,
    percentual: 2.0,
    cor: '#f97316'
  }
];

