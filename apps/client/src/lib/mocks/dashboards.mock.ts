import type {
  DashboardDemografico,
  DashboardFiscal,
  DashboardContabil,
  DashboardIndicadores,
  DashboardDRE
} from '@gestk/shared';

// Mock data para Dashboard Demográfico
export const mockDashboardDemografico: DashboardDemografico = {
  indicadores: {
    total_colaboradores: 45,
    turnover: 8.5,
    media_idade: 32.5,
    diversidade_genero: 65.2
  },
  evolucao_mensal: [
    { mes: '2024-01', total: 42, admissões: 3, demissões: 1 },
    { mes: '2024-02', total: 44, admissões: 2, demissões: 0 },
    { mes: '2024-03', total: 45, admissões: 2, demissões: 1 },
    { mes: '2024-04', total: 46, admissões: 3, demissões: 2 },
    { mes: '2024-05', total: 47, admissões: 2, demissões: 1 },
    { mes: '2024-06', total: 48, admissões: 3, demissões: 2 },
    { mes: '2024-07', total: 49, admissões: 2, demissões: 1 },
    { mes: '2024-08', total: 50, admissões: 3, demissões: 2 },
    { mes: '2024-09', total: 51, admissões: 2, demissões: 1 },
    { mes: '2024-10', total: 52, admissões: 3, demissões: 2 },
    { mes: '2024-11', total: 53, admissões: 2, demissões: 1 },
    { mes: '2024-12', total: 54, admissões: 3, demissões: 2 }
  ],
  distribuicao_idade: [
    { faixa: '18-25', quantidade: 8, percentual: 17.8 },
    { faixa: '26-35', quantidade: 18, percentual: 40.0 },
    { faixa: '36-45', quantidade: 12, percentual: 26.7 },
    { faixa: '46-55', quantidade: 5, percentual: 11.1 },
    { faixa: '56+', quantidade: 2, percentual: 4.4 }
  ],
  distribuicao_escolaridade: [
    { nivel: 'Ensino Médio', quantidade: 15, percentual: 33.3 },
    { nivel: 'Superior Incompleto', quantidade: 8, percentual: 17.8 },
    { nivel: 'Superior Completo', quantidade: 18, percentual: 40.0 },
    { nivel: 'Pós-graduação', quantidade: 4, percentual: 8.9 }
  ],
  distribuicao_cargo: [
    { cargo: 'Contador', quantidade: 12, percentual: 26.7 },
    { cargo: 'Analista', quantidade: 15, percentual: 33.3 },
    { cargo: 'Assistente', quantidade: 10, percentual: 22.2 },
    { cargo: 'Gerente', quantidade: 5, percentual: 11.1 },
    { cargo: 'Diretor', quantidade: 3, percentual: 6.7 }
  ],
  distribuicao_genero: [
    { genero: 'Feminino', quantidade: 29, percentual: 64.4 },
    { genero: 'Masculino', quantidade: 16, percentual: 35.6 }
  ]
};

// Mock data para Dashboard Fiscal
export const mockDashboardFiscal: DashboardFiscal = {
  faturamento_total: 2500000,
  faturamento_anterior: 2200000,
  variacao_faturamento: 13.6,
  top_produtos: [
    { produto: 'Serviços Contábeis', valor: 800000, quantidade: 120, percentual: 32.0 },
    { produto: 'Consultoria Fiscal', valor: 600000, quantidade: 80, percentual: 24.0 },
    { produto: 'Auditoria', valor: 400000, quantidade: 25, percentual: 16.0 },
    { produto: 'Planejamento Tributário', valor: 350000, quantidade: 45, percentual: 14.0 },
    { produto: 'Outros', valor: 350000, quantidade: 60, percentual: 14.0 }
  ],
  top_clientes: [
    { cliente: 'Empresa ABC Ltda', valor: 150000, percentual: 6.0 },
    { cliente: 'Comércio XYZ S/A', valor: 120000, percentual: 4.8 },
    { cliente: 'Indústria DEF Ltda', valor: 100000, percentual: 4.0 },
    { cliente: 'Tecnologia GHI ME', valor: 80000, percentual: 3.2 },
    { cliente: 'Outros', valor: 2050000, percentual: 82.0 }
  ],
  top_fornecedores: [
    { fornecedor: 'Fornecedor A', valor: 300000, percentual: 12.0 },
    { fornecedor: 'Fornecedor B', valor: 250000, percentual: 10.0 },
    { fornecedor: 'Fornecedor C', valor: 200000, percentual: 8.0 },
    { fornecedor: 'Outros', valor: 1750000, percentual: 70.0 }
  ],
  geolocalizacao: [
    { uf: 'SP', valor: 1000000, quantidade: 35 },
    { uf: 'RJ', valor: 600000, quantidade: 20 },
    { uf: 'MG', valor: 400000, quantidade: 15 },
    { uf: 'RS', valor: 300000, quantidade: 12 },
    { uf: 'Outros', valor: 200000, quantidade: 8 }
  ],
  impostos_devidos: [
    { tipo: 'ICMS', valor: 150000, percentual: 30.0 },
    { tipo: 'IPI', valor: 100000, percentual: 20.0 },
    { tipo: 'PIS', valor: 75000, percentual: 15.0 },
    { tipo: 'COFINS', valor: 75000, percentual: 15.0 },
    { tipo: 'IRPJ', valor: 50000, percentual: 10.0 },
    { tipo: 'CSLL', valor: 50000, percentual: 10.0 }
  ],
  evolucao_impostos: [
    { mes: '2024-01', imposto_devido: 45000, saldo_recuperar: 15000 },
    { mes: '2024-02', imposto_devido: 48000, saldo_recuperar: 18000 },
    { mes: '2024-03', imposto_devido: 52000, saldo_recuperar: 20000 },
    { mes: '2024-04', imposto_devido: 50000, saldo_recuperar: 22000 },
    { mes: '2024-05', imposto_devido: 55000, saldo_recuperar: 25000 },
    { mes: '2024-06', imposto_devido: 58000, saldo_recuperar: 28000 },
    { mes: '2024-07', imposto_devido: 60000, saldo_recuperar: 30000 },
    { mes: '2024-08', imposto_devido: 62000, saldo_recuperar: 32000 },
    { mes: '2024-09', imposto_devido: 65000, saldo_recuperar: 35000 },
    { mes: '2024-10', imposto_devido: 68000, saldo_recuperar: 38000 },
    { mes: '2024-11', imposto_devido: 70000, saldo_recuperar: 40000 },
    { mes: '2024-12', imposto_devido: 75000, saldo_recuperar: 45000 }
  ]
};

// Mock data para Dashboard Contábil
export const mockDashboardContabil: DashboardContabil = {
  indicadores: {
    ativo_total: 5000000,
    passivo_total: 2000000,
    patrimonio_liquido: 3000000,
    receita_bruta: 2500000,
    lucro_liquido: 550000
  },
  evolucao_mensal: [
    { mes: '2024-01', receita: 180000, despesa: 120000, lucro: 60000 },
    { mes: '2024-02', receita: 190000, despesa: 125000, lucro: 65000 },
    { mes: '2024-03', receita: 200000, despesa: 130000, lucro: 70000 },
    { mes: '2024-04', receita: 210000, despesa: 135000, lucro: 75000 },
    { mes: '2024-05', receita: 220000, despesa: 140000, lucro: 80000 },
    { mes: '2024-06', receita: 230000, despesa: 145000, lucro: 85000 },
    { mes: '2024-07', receita: 240000, despesa: 150000, lucro: 90000 },
    { mes: '2024-08', receita: 250000, despesa: 155000, lucro: 95000 },
    { mes: '2024-09', receita: 260000, despesa: 160000, lucro: 100000 },
    { mes: '2024-10', receita: 270000, despesa: 165000, lucro: 105000 },
    { mes: '2024-11', receita: 280000, despesa: 170000, lucro: 110000 },
    { mes: '2024-12', receita: 290000, despesa: 175000, lucro: 115000 }
  ],
  grupos_contas: [
    { grupo: 'Ativo Circulante', valor: 2000000, percentual: 40.0 },
    { grupo: 'Ativo Não Circulante', valor: 3000000, percentual: 60.0 },
    { grupo: 'Passivo Circulante', valor: 1200000, percentual: 60.0 },
    { grupo: 'Passivo Não Circulante', valor: 800000, percentual: 40.0 },
    { grupo: 'Patrimônio Líquido', valor: 3000000, percentual: 100.0 }
  ],
  top_contas: [
    { conta: 'Caixa e Equivalentes', valor: 500000, grupo: 'Ativo Circulante' },
    { conta: 'Contas a Receber', valor: 800000, grupo: 'Ativo Circulante' },
    { conta: 'Estoques', valor: 700000, grupo: 'Ativo Circulante' },
    { conta: 'Imobilizado', valor: 2500000, grupo: 'Ativo Não Circulante' },
    { conta: 'Fornecedores', valor: 600000, grupo: 'Passivo Circulante' }
  ]
};

// Mock data para Dashboard Indicadores
export const mockDashboardIndicadores: DashboardIndicadores = {
  financeiros: [
    { nome: 'Margem Bruta', valor: 45.2, meta: 40.0, status: 'positivo' },
    { nome: 'Margem Líquida', valor: 22.0, meta: 20.0, status: 'positivo' },
    { nome: 'ROE', valor: 18.3, meta: 15.0, status: 'positivo' },
    { nome: 'ROA', valor: 11.0, meta: 10.0, status: 'positivo' },
    { nome: 'Liquidez Corrente', valor: 1.8, meta: 1.5, status: 'positivo' }
  ],
  operacionais: [
    { nome: 'Produtividade', valor: 78.5, meta: 75.0, status: 'positivo' },
    { nome: 'Eficiência', valor: 82.3, meta: 80.0, status: 'positivo' },
    { nome: 'Satisfação Cliente', valor: 4.2, meta: 4.0, status: 'positivo' },
    { nome: 'Retenção Cliente', valor: 92.0, meta: 90.0, status: 'positivo' },
    { nome: 'Tempo Médio Atendimento', valor: 2.5, meta: 3.0, status: 'positivo' }
  ],
  patrimoniais: [
    { nome: 'Endividamento', valor: 40.0, meta: 50.0, status: 'positivo' },
    { nome: 'Composição Endividamento', valor: 60.0, meta: 70.0, status: 'positivo' },
    { nome: 'Rentabilidade Patrimônio', valor: 18.3, meta: 15.0, status: 'positivo' },
    { nome: 'Cobertura Juros', valor: 4.5, meta: 3.0, status: 'positivo' }
  ],
  tendencias: [
    { indicador: 'Receita', tendencia: 'crescimento', variacao: 12.5 },
    { indicador: 'Lucro', tendencia: 'crescimento', variacao: 15.8 },
    { indicador: 'Clientes', tendencia: 'crescimento', variacao: 8.3 },
    { indicador: 'Produtividade', tendencia: 'crescimento', variacao: 5.2 }
  ]
};

// Mock data para Dashboard DRE
export const mockDashboardDRE: DashboardDRE = {
  composicao: [
    { item: 'Receita Bruta', valor_atual: 2500000, valor_anterior: 2200000, variacao: 13.6, percentual_receita: 100.0 },
    { item: '(-) Impostos sobre Vendas', valor_atual: 500000, valor_anterior: 440000, variacao: 13.6, percentual_receita: 20.0 },
    { item: '= Receita Líquida', valor_atual: 2000000, valor_anterior: 1760000, variacao: 13.6, percentual_receita: 80.0 },
    { item: '(-) Custo dos Produtos/Serviços', valor_atual: 800000, valor_anterior: 700000, variacao: 14.3, percentual_receita: 32.0 },
    { item: '= Lucro Bruto', valor_atual: 1200000, valor_anterior: 1060000, variacao: 13.2, percentual_receita: 48.0 },
    { item: '(-) Despesas Operacionais', valor_atual: 650000, valor_anterior: 580000, variacao: 12.1, percentual_receita: 26.0 },
    { item: '= Lucro Operacional', valor_atual: 550000, valor_anterior: 480000, variacao: 14.6, percentual_receita: 22.0 },
    { item: '(-) Despesas Financeiras', valor_atual: 50000, valor_anterior: 45000, variacao: 11.1, percentual_receita: 2.0 },
    { item: '= Lucro Antes do IR', valor_atual: 500000, valor_anterior: 435000, variacao: 14.9, percentual_receita: 20.0 },
    { item: '(-) Imposto de Renda', valor_atual: 75000, valor_anterior: 65000, variacao: 15.4, percentual_receita: 3.0 },
    { item: '= Lucro Líquido', valor_atual: 425000, valor_anterior: 370000, variacao: 14.9, percentual_receita: 17.0 }
  ],
  evolucao: [
    { mes: '2024-01', receita_bruta: 180000, receita_liquida: 144000, lucro_bruto: 86400, lucro_liquido: 30600 },
    { mes: '2024-02', receita_bruta: 190000, receita_liquida: 152000, lucro_bruto: 91200, lucro_liquido: 32300 },
    { mes: '2024-03', receita_bruta: 200000, receita_liquida: 160000, lucro_bruto: 96000, lucro_liquido: 34000 },
    { mes: '2024-04', receita_bruta: 210000, receita_liquida: 168000, lucro_bruto: 100800, lucro_liquido: 35700 },
    { mes: '2024-05', receita_bruta: 220000, receita_liquida: 176000, lucro_bruto: 105600, lucro_liquido: 37400 },
    { mes: '2024-06', receita_bruta: 230000, receita_liquida: 184000, lucro_bruto: 110400, lucro_liquido: 39100 },
    { mes: '2024-07', receita_bruta: 240000, receita_liquida: 192000, lucro_bruto: 115200, lucro_liquido: 40800 },
    { mes: '2024-08', receita_bruta: 250000, receita_liquida: 200000, lucro_bruto: 120000, lucro_liquido: 42500 },
    { mes: '2024-09', receita_bruta: 260000, receita_liquida: 208000, lucro_bruto: 124800, lucro_liquido: 44200 },
    { mes: '2024-10', receita_bruta: 270000, receita_liquida: 216000, lucro_bruto: 129600, lucro_liquido: 45900 },
    { mes: '2024-11', receita_bruta: 280000, receita_liquida: 224000, lucro_bruto: 134400, lucro_liquido: 47600 },
    { mes: '2024-12', receita_bruta: 290000, receita_liquida: 232000, lucro_bruto: 139200, lucro_liquido: 49300 }
  ],
  analise_vertical: [
    { item: 'Receita Bruta', percentual: 100.0 },
    { item: 'Impostos sobre Vendas', percentual: 20.0 },
    { item: 'Receita Líquida', percentual: 80.0 },
    { item: 'Custo dos Produtos/Serviços', percentual: 32.0 },
    { item: 'Lucro Bruto', percentual: 48.0 },
    { item: 'Despesas Operacionais', percentual: 26.0 },
    { item: 'Lucro Operacional', percentual: 22.0 },
    { item: 'Despesas Financeiras', percentual: 2.0 },
    { item: 'Lucro Antes do IR', percentual: 20.0 },
    { item: 'Imposto de Renda', percentual: 3.0 },
    { item: 'Lucro Líquido', percentual: 17.0 }
  ],
  analise_horizontal: [
    { item: 'Receita Bruta', variacao_percentual: 13.6 },
    { item: 'Impostos sobre Vendas', variacao_percentual: 13.6 },
    { item: 'Receita Líquida', variacao_percentual: 13.6 },
    { item: 'Custo dos Produtos/Serviços', variacao_percentual: 14.3 },
    { item: 'Lucro Bruto', variacao_percentual: 13.2 },
    { item: 'Despesas Operacionais', variacao_percentual: 12.1 },
    { item: 'Lucro Operacional', variacao_percentual: 14.6 },
    { item: 'Despesas Financeiras', variacao_percentual: 11.1 },
    { item: 'Lucro Antes do IR', variacao_percentual: 14.9 },
    { item: 'Imposto de Renda', variacao_percentual: 15.4 },
    { item: 'Lucro Líquido', variacao_percentual: 14.9 }
  ]
};

