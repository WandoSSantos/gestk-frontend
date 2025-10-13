// Dados mock para Análise do Escritório baseados na planilha do software legado

export interface AnaliseEscritorioMensal {
  mes: string;
  quantidade_clientes: number;
  faturamento_escritorio: number;
  variacao_faturamento: number;
  tempo_ativo_sistema: string; // HH:MM:SS
  lancamentos: number;
  percentual_lancamentos_manuais: number;
  vinculos_folhas_ativos: number;
  notas_fiscais_emitidas: number;
  total_notas_fiscais_movimentadas: number;
  custo_operacional: number;
  rentabilidade_operacional: number;
}

export interface KPIEscritorio {
  titulo: string;
  valor: number;
  variacao: number;
  tendencia: 'up' | 'down' | 'stable';
  cor: string;
  icone: string;
  descricao: string;
}

export const mockAnaliseEscritorioMensal: AnaliseEscritorioMensal[] = [
  {
    mes: 'Jan/2024',
    quantidade_clientes: 553,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3106:14:30',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 10,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -63677.95
  },
  {
    mes: 'Fev/2024',
    quantidade_clientes: 561,
    faturamento_escritorio: 10000.00,
    variacao_faturamento: 100.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 11,
    notas_fiscais_emitidas: 3,
    total_notas_fiscais_movimentadas: 3,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -53677.95
  },
  {
    mes: 'Mar/2024',
    quantidade_clientes: 568,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: -50.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 12,
    notas_fiscais_emitidas: 1,
    total_notas_fiscais_movimentadas: 1,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Abr/2024',
    quantidade_clientes: 575,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 13,
    notas_fiscais_emitidas: 2,
    total_notas_fiscais_movimentadas: 4,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Mai/2024',
    quantidade_clientes: 582,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 12,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Jun/2024',
    quantidade_clientes: 589,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 11,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Jul/2024',
    quantidade_clientes: 596,
    faturamento_escritorio: 20000.00,
    variacao_faturamento: 300.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 12,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63507.99,
    rentabilidade_operacional: -43507.99
  },
  {
    mes: 'Ago/2024',
    quantidade_clientes: 603,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: -75.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 13,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Set/2024',
    quantidade_clientes: 610,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 12,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Out/2024',
    quantidade_clientes: 617,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 11,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Nov/2024',
    quantidade_clientes: 624,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 12,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  },
  {
    mes: 'Dez/2024',
    quantidade_clientes: 631,
    faturamento_escritorio: 5000.00,
    variacao_faturamento: 0.00,
    tempo_ativo_sistema: '3097:57:02',
    lancamentos: 0,
    percentual_lancamentos_manuais: 0,
    vinculos_folhas_ativos: 13,
    notas_fiscais_emitidas: 0,
    total_notas_fiscais_movimentadas: 0,
    custo_operacional: 63677.95,
    rentabilidade_operacional: -58677.95
  }
];

// Dados para gráfico de evolução da rentabilidade
export const mockEvolucaoRentabilidade = mockAnaliseEscritorioMensal.map(item => ({
  mes: item.mes,
  rentabilidade: item.rentabilidade_operacional,
  faturamento: item.faturamento_escritorio,
  custo_operacional: item.custo_operacional
}));

// Dados para gráfico de evolução de clientes
export const mockEvolucaoClientes = mockAnaliseEscritorioMensal.map(item => ({
  mes: item.mes,
  clientes: item.quantidade_clientes,
  novos_clientes: item.quantidade_clientes - (mockAnaliseEscritorioMensal[mockAnaliseEscritorioMensal.indexOf(item) - 1]?.quantidade_clientes || 0)
}));

// Dados para gráfico de faturamento vs custos
export const mockFaturamentoVsCustos = mockAnaliseEscritorioMensal.map(item => ({
  mes: item.mes,
  faturamento: item.faturamento_escritorio,
  custo_operacional: item.custo_operacional,
  margem: item.faturamento_escritorio - item.custo_operacional
}));

// KPIs calculados
export const mockKPIsEscritorio: KPIEscritorio[] = [
  {
    titulo: 'Total de Clientes',
    valor: 631,
    variacao: 14.1,
    tendencia: 'up',
    cor: 'text-blue-600',
    icone: 'users',
    descricao: 'Crescimento de 14.1% no ano'
  },
  {
    titulo: 'Faturamento Anual',
    valor: 75408.00,
    variacao: 175.62,
    tendencia: 'up',
    cor: 'text-green-600',
    icone: 'dollar-sign',
    descricao: 'Crescimento de 175.62% no ano'
  },
  {
    titulo: 'Rentabilidade Média',
    valor: -54822.57,
    variacao: -13.8,
    tendencia: 'down',
    cor: 'text-red-600',
    icone: 'trending-down',
    descricao: 'Prejuízo médio mensal'
  },
  {
    titulo: 'Custo por Cliente',
    valor: 1162.25,
    variacao: -2.1,
    tendencia: 'up',
    cor: 'text-orange-600',
    icone: 'calculator',
    descricao: 'Custo operacional médio por cliente'
  },
  {
    titulo: 'Tempo Ativo Total',
    valor: 35769.42,
    variacao: 0,
    tendencia: 'stable',
    cor: 'text-purple-600',
    icone: 'clock',
    descricao: 'Horas totais no sistema (HH:MM)'
  },
  {
    titulo: 'Notas Fiscais Emitidas',
    valor: 15,
    variacao: 0,
    tendencia: 'stable',
    cor: 'text-indigo-600',
    icone: 'file-text',
    descricao: 'Total de notas emitidas no ano'
  }
];

// Dados para análise de tendências
export const mockTendencias = {
  crescimento_clientes: {
    periodo: 'Últimos 12 meses',
    taxa: 14.1,
    tendencia: 'crescimento_consistente'
  },
  faturamento: {
    periodo: 'Últimos 12 meses',
    variacao: 175.62,
    tendencia: 'crescimento_irregular',
    pico: 'Jul/2024',
    pico_valor: 20000.00
  },
  rentabilidade: {
    periodo: 'Últimos 12 meses',
    tendencia: 'prejuizo_constante',
    melhor_mes: 'Jul/2024',
    melhor_valor: -43507.99
  }
};

