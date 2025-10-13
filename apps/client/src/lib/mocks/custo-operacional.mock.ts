// Dados mock para custo operacional e composição societária

export interface CustoOperacional {
  id: string;
  empresa: string;
  cnpj: string;
  data_cadastro: string;
  data_criacao: string;
  socio_responsavel: string;
  cpf_socio: string;
  regime_fiscal: string;
  ramo_atividade: string;
  escritorio_contabilidade: string;
  competencias: CompetenciaCusto[];
  valor_hora: number;
  total_custo_operacional: number;
  total_rentabilidade: number;
  total_faturamento: number;
  total_tempo_sistema: string; // HH:MM:SS
  total_lancamentos: number;
  total_nf_emitidas: number;
  total_nf_movimentadas: number;
}

export interface CompetenciaCusto {
  competencia: string; // "Jan/2025", "Fev/2025", etc.
  faturamento_empresa: number;
  variacao_faturamento: number; // percentual
  tempo_gasto_sistema: string; // HH:MM:SS
  lancamentos: number;
  percentual_lancamentos_manuais: number;
  vinculos_folha_ativos: number;
  total_nf_emitidas: number;
  total_nf_movimentadas: number;
  faturamento_escritorio: number;
  custo_operacional: number;
  rentabilidade_operacional: number;
}

export interface ComposicaoSocietaria {
  empresa_principal: {
    razao_social: string;
    cnpj: string;
  };
  socios: Socio[];
}

export interface Socio {
  id: string;
  nome: string;
  cpf: string;
  participacao_percentual: number;
  cargo: string;
  outras_empresas: OutraEmpresa[];
}

export interface OutraEmpresa {
  id: string;
  razao_social: string;
  cnpj: string;
  participacao_percentual: number;
  cargo: string;
  data_inicio: string;
  status: 'ativa' | 'inativa' | 'suspensa';
}

// Dados mock para custo operacional
export const mockCustoOperacional: CustoOperacional[] = [
  {
    id: '1',
    empresa: '2WV CONSTRUCOES E REFORMAS LTDA',
    cnpj: '30.599.448/0001-34',
    data_cadastro: '2023-08-01',
    data_criacao: '2018-06-01',
    socio_responsavel: 'SEM RESPONSÁVEL',
    cpf_socio: '',
    regime_fiscal: 'Simples Nacional',
    ramo_atividade: 'Construção Civil',
    escritorio_contabilidade: 'ContabilPro',
    valor_hora: 24.90,
    total_custo_operacional: 67.35,
    total_rentabilidade: -67.35,
    total_faturamento: 0,
    total_tempo_sistema: '02:42:19',
    total_lancamentos: 0,
    total_nf_emitidas: 0,
    total_nf_movimentadas: 1,
    competencias: [
      {
        competencia: 'Jan/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:19:11',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 7.96,
        rentabilidade_operacional: -7.96
      },
      {
        competencia: 'Fev/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:15:45',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 6.54,
        rentabilidade_operacional: -6.54
      },
      {
        competencia: 'Mar/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:22:33',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 8.12,
        rentabilidade_operacional: -8.12
      },
      {
        competencia: 'Abr/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:18:22',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 6.89,
        rentabilidade_operacional: -6.89
      },
      {
        competencia: 'Mai/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:25:15',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 9.45,
        rentabilidade_operacional: -9.45
      },
      {
        competencia: 'Jun/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:16:48',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 7.23,
        rentabilidade_operacional: -7.23
      },
      {
        competencia: 'Jul/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:21:07',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 8.67,
        rentabilidade_operacional: -8.67
      },
      {
        competencia: 'Ago/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:17:34',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 1,
        faturamento_escritorio: 0,
        custo_operacional: 6.98,
        rentabilidade_operacional: -6.98
      },
      {
        competencia: 'Set/2025',
        faturamento_empresa: 0,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '00:19:44',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folha_ativos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 0,
        faturamento_escritorio: 0,
        custo_operacional: 7.51,
        rentabilidade_operacional: -7.51
      }
    ]
  },
  {
    id: '2',
    empresa: '3D INDUSTRIA E COMERCIO DE CONFECCOES LT',
    cnpj: '12.434.748/0001-81',
    data_cadastro: '2022-01-01',
    data_criacao: '2010-08-19',
    socio_responsavel: 'DILENA MARQUES COLARES',
    cpf_socio: '301.325.253-72',
    regime_fiscal: 'Lucro Real',
    ramo_atividade: 'Indústria Têxtil',
    escritorio_contabilidade: 'ContabilPro',
    valor_hora: 24.90,
    total_custo_operacional: 1082.45,
    total_rentabilidade: 1586.62,
    total_faturamento: 2669066.27,
    total_tempo_sistema: '434:49:57',
    total_lancamentos: 3152,
    total_nf_emitidas: 1247,
    total_nf_movimentadas: 3152,
    competencias: [
      {
        competencia: 'Jan/2025',
        faturamento_empresa: 188604.90,
        variacao_faturamento: 0,
        tempo_gasto_sistema: '56:13:11',
        lancamentos: 346,
        percentual_lancamentos_manuais: 54.62,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 89,
        total_nf_movimentadas: 346,
        faturamento_escritorio: 2500,
        custo_operacional: 1400.25,
        rentabilidade_operacional: 1099.75
      },
      {
        competencia: 'Fev/2025',
        faturamento_empresa: 294514.15,
        variacao_faturamento: 56.15,
        tempo_gasto_sistema: '47:56:13',
        lancamentos: 335,
        percentual_lancamentos_manuais: 43.88,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 134,
        total_nf_movimentadas: 335,
        faturamento_escritorio: 2500,
        custo_operacional: 1194.50,
        rentabilidade_operacional: 1305.50
      },
      {
        competencia: 'Mar/2025',
        faturamento_empresa: 287123.45,
        variacao_faturamento: -2.57,
        tempo_gasto_sistema: '52:18:22',
        lancamentos: 379,
        percentual_lancamentos_manuais: 49.87,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 156,
        total_nf_movimentadas: 379,
        faturamento_escritorio: 2500,
        custo_operacional: 1302.75,
        rentabilidade_operacional: 1197.25
      },
      {
        competencia: 'Abr/2025',
        faturamento_empresa: 312456.78,
        variacao_faturamento: 8.82,
        tempo_gasto_sistema: '48:45:33',
        lancamentos: 342,
        percentual_lancamentos_manuais: 47.95,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 142,
        total_nf_movimentadas: 342,
        faturamento_escritorio: 2500,
        custo_operacional: 1214.30,
        rentabilidade_operacional: 1285.70
      },
      {
        competencia: 'Mai/2025',
        faturamento_empresa: 298765.43,
        variacao_faturamento: -4.38,
        tempo_gasto_sistema: '51:22:17',
        lancamentos: 365,
        percentual_lancamentos_manuais: 52.33,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 151,
        total_nf_movimentadas: 365,
        faturamento_escritorio: 2500,
        custo_operacional: 1278.90,
        rentabilidade_operacional: 1221.10
      },
      {
        competencia: 'Jun/2025',
        faturamento_empresa: 325678.90,
        variacao_faturamento: 9.00,
        tempo_gasto_sistema: '49:15:44',
        lancamentos: 358,
        percentual_lancamentos_manuais: 45.81,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 148,
        total_nf_movimentadas: 358,
        faturamento_escritorio: 2500,
        custo_operacional: 1226.55,
        rentabilidade_operacional: 1273.45
      },
      {
        competencia: 'Jul/2025',
        faturamento_empresa: 289123.67,
        variacao_faturamento: -11.22,
        tempo_gasto_sistema: '53:41:28',
        lancamentos: 371,
        percentual_lancamentos_manuais: 51.21,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 153,
        total_nf_movimentadas: 371,
        faturamento_escritorio: 2500,
        custo_operacional: 1337.20,
        rentabilidade_operacional: 1162.80
      },
      {
        competencia: 'Ago/2025',
        faturamento_empresa: 301456.12,
        variacao_faturamento: 4.26,
        tempo_gasto_sistema: '47:33:19',
        lancamentos: 339,
        percentual_lancamentos_manuais: 48.67,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 140,
        total_nf_movimentadas: 339,
        faturamento_escritorio: 2500,
        custo_operacional: 1184.75,
        rentabilidade_operacional: 1315.25
      },
      {
        competencia: 'Set/2025',
        faturamento_empresa: 316789.34,
        variacao_faturamento: 5.08,
        tempo_gasto_sistema: '50:08:52',
        lancamentos: 367,
        percentual_lancamentos_manuais: 46.32,
        vinculos_folha_ativos: 12,
        total_nf_emitidas: 152,
        total_nf_movimentadas: 367,
        faturamento_escritorio: 2500,
        custo_operacional: 1247.30,
        rentabilidade_operacional: 1252.70
      }
    ]
  }
];

// Dados mock para composição societária
export const mockComposicaoSocietaria: Record<string, ComposicaoSocietaria> = {
  '12.434.748/0001-81': {
    empresa_principal: {
      razao_social: '3D INDUSTRIA E COMERCIO DE CONFECCOES LT',
      cnpj: '12.434.748/0001-81'
    },
    socios: [
      {
        id: '1',
        nome: 'ANTONIO EUDES ETELVINO COLARES',
        cpf: '230.657.023-04',
        participacao_percentual: 60,
        cargo: 'Sócio Administrador',
        outras_empresas: [
          {
            id: '1',
            razao_social: 'DEBORAH',
            cnpj: '08.277.107/0001-93',
            participacao_percentual: 100,
            cargo: 'Sócio Proprietário',
            data_inicio: '2015-03-15',
            status: 'ativa'
          },
          {
            id: '2',
            razao_social: 'COMERCIO VAREJISTA DAFNE AVIAMENTOS LTDA',
            cnpj: '09.529.194/0001-91',
            participacao_percentual: 75,
            cargo: 'Sócio Administrador',
            data_inicio: '2018-07-22',
            status: 'ativa'
          },
          {
            id: '3',
            razao_social: 'DMC',
            cnpj: '06.244.797/0001-59',
            participacao_percentual: 50,
            cargo: 'Sócio',
            data_inicio: '2020-11-10',
            status: 'ativa'
          }
        ]
      },
      {
        id: '2',
        nome: 'DILENA MARQUES COLARES',
        cpf: '301.325.253-72',
        participacao_percentual: 40,
        cargo: 'Sócia Diretora',
        outras_empresas: [
          {
            id: '4',
            razao_social: 'ED',
            cnpj: '03.614.160/0001-19',
            participacao_percentual: 100,
            cargo: 'Sócia Proprietária',
            data_inicio: '2012-05-08',
            status: 'ativa'
          },
          {
            id: '5',
            razao_social: 'COMERCIO VAREJISTA MARQUES AVIAMENTOS',
            cnpj: '06.203.885/0001-02',
            participacao_percentual: 100,
            cargo: 'Sócia Proprietária',
            data_inicio: '2016-09-14',
            status: 'ativa'
          }
        ]
      }
    ]
  }
};

// Adicionar novos registros de custo operacional
export const mockCustoOperacionalAdicional: CustoOperacional[] = [
  {
    id: '3',
    empresa: 'TECH SOLUTIONS LTDA',
    cnpj: '12.345.678/0001-90',
    data_cadastro: '2023-01-15',
    data_criacao: '2020-03-10',
    socio_responsavel: 'João Silva',
    cpf_socio: '123.456.789-00',
    regime_fiscal: 'Lucro Presumido',
    ramo_atividade: 'Tecnologia',
    escritorio_contabilidade: 'ContabilTech',
    valor_hora: 24.90,
    total_custo_operacional: 2500.00,
    total_rentabilidade: 1500.00,
    total_faturamento: 50000.00,
    total_tempo_sistema: '100:30:45',
    total_lancamentos: 150,
    total_nf_emitidas: 25,
    total_nf_movimentadas: 150,
    competencias: [
      {
        competencia: 'Jan/2025',
        faturamento_empresa: 25000.00,
        variacao_faturamento: 15.5,
        tempo_gasto_sistema: '50:15:30',
        lancamentos: 75,
        percentual_lancamentos_manuais: 20.0,
        vinculos_folha_ativos: 5,
        total_nf_emitidas: 12,
        total_nf_movimentadas: 75,
        faturamento_escritorio: 2000.00,
        custo_operacional: 1250.00,
        rentabilidade_operacional: 750.00
      },
      {
        competencia: 'Fev/2025',
        faturamento_empresa: 25000.00,
        variacao_faturamento: 0.0,
        tempo_gasto_sistema: '50:15:15',
        lancamentos: 75,
        percentual_lancamentos_manuais: 15.0,
        vinculos_folha_ativos: 5,
        total_nf_emitidas: 13,
        total_nf_movimentadas: 75,
        faturamento_escritorio: 2000.00,
        custo_operacional: 1250.00,
        rentabilidade_operacional: 750.00
      }
    ]
  },
  {
    id: '4',
    empresa: 'COMERCIAL ABC LTDA',
    cnpj: '98.765.432/0001-10',
    data_cadastro: '2022-06-01',
    data_criacao: '2019-01-15',
    socio_responsavel: 'Maria Santos',
    cpf_socio: '987.654.321-00',
    regime_fiscal: 'Simples Nacional',
    ramo_atividade: 'Comércio',
    escritorio_contabilidade: 'FiscalMaster',
    valor_hora: 24.90,
    total_custo_operacional: 800.00,
    total_rentabilidade: 1200.00,
    total_faturamento: 30000.00,
    total_tempo_sistema: '32:10:20',
    total_lancamentos: 80,
    total_nf_emitidas: 15,
    total_nf_movimentadas: 80,
    competencias: [
      {
        competencia: 'Jan/2025',
        faturamento_empresa: 15000.00,
        variacao_faturamento: 8.2,
        tempo_gasto_sistema: '16:05:10',
        lancamentos: 40,
        percentual_lancamentos_manuais: 30.0,
        vinculos_folha_ativos: 3,
        total_nf_emitidas: 7,
        total_nf_movimentadas: 40,
        faturamento_escritorio: 1000.00,
        custo_operacional: 400.00,
        rentabilidade_operacional: 600.00
      },
      {
        competencia: 'Fev/2025',
        faturamento_empresa: 15000.00,
        variacao_faturamento: 0.0,
        tempo_gasto_sistema: '16:05:10',
        lancamentos: 40,
        percentual_lancamentos_manuais: 25.0,
        vinculos_folha_ativos: 3,
        total_nf_emitidas: 8,
        total_nf_movimentadas: 40,
        faturamento_escritorio: 1000.00,
        custo_operacional: 400.00,
        rentabilidade_operacional: 600.00
      }
    ]
  }
];

// Combinar todos os dados
export const mockCustoOperacionalCompleto = [
  ...mockCustoOperacional,
  ...mockCustoOperacionalAdicional
];
