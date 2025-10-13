// Mock data para análise de usuários e atividades

export interface AtividadeUsuario {
  usuario: string;
  competencia: string; // YYYY-MM
  horas_trabalhadas: string; // HH:MM:SS
  importacoes: number;
  lancamentos: number;
  lancamentos_manuais: number;
  eficiencia: number; // 0-100
  produtividade: number; // lançamentos por hora
}

export interface AtividadeCliente {
  id: number;
  razao_social: string;
  competencia: string; // YYYY-MM
  horas_trabalhadas: string; // HH:MM:SS
  importacoes: number;
  lancamentos: number;
  lancamentos_manuais: number;
  valor_hora: number;
  custo_total: number;
  rentabilidade: number;
}

export interface ResumoAtividades {
  total_atividades: number;
  total_importacoes: number;
  total_lancamentos: number;
  total_lancamentos_manuais: number;
  total_horas_ativas: number;
  periodo: {
    inicio: string;
    fim: string;
  };
}

// Dados de atividades por usuário (Janeiro a Setembro 2025)
export const mockAtividadesUsuarios: AtividadeUsuario[] = [
  // ANA LAIS
  { usuario: 'ANALAIS', competencia: '2025-01', horas_trabalhadas: '56:57:02', importacoes: 883, lancamentos: 255, lancamentos_manuais: 0, eficiencia: 85, produtividade: 4.5 },
  { usuario: 'ANALAIS', competencia: '2025-02', horas_trabalhadas: '64:14:12', importacoes: 1098, lancamentos: 265, lancamentos_manuais: 0, eficiencia: 88, produtividade: 4.1 },
  { usuario: 'ANALAIS', competencia: '2025-03', horas_trabalhadas: '52:26:55', importacoes: 971, lancamentos: 256, lancamentos_manuais: 0, eficiencia: 90, produtividade: 4.9 },
  { usuario: 'ANALAIS', competencia: '2025-04', horas_trabalhadas: '48:32:18', importacoes: 892, lancamentos: 248, lancamentos_manuais: 0, eficiencia: 87, produtividade: 5.1 },
  { usuario: 'ANALAIS', competencia: '2025-05', horas_trabalhadas: '61:15:44', importacoes: 1056, lancamentos: 272, lancamentos_manuais: 0, eficiencia: 89, produtividade: 4.4 },
  { usuario: 'ANALAIS', competencia: '2025-06', horas_trabalhadas: '55:48:29', importacoes: 934, lancamentos: 261, lancamentos_manuais: 0, eficiencia: 86, produtividade: 4.7 },
  { usuario: 'ANALAIS', competencia: '2025-07', horas_trabalhadas: '58:22:16', importacoes: 987, lancamentos: 259, lancamentos_manuais: 0, eficiencia: 88, produtividade: 4.4 },
  { usuario: 'ANALAIS', competencia: '2025-08', horas_trabalhadas: '49:35:12', importacoes: 845, lancamentos: 234, lancamentos_manuais: 0, eficiencia: 84, produtividade: 4.7 },
  { usuario: 'ANALAIS', competencia: '2025-09', horas_trabalhadas: '53:41:08', importacoes: 912, lancamentos: 247, lancamentos_manuais: 0, eficiencia: 87, produtividade: 4.6 },

  // ALISSON
  { usuario: 'ALISSON', competencia: '2025-01', horas_trabalhadas: '175:22:52', importacoes: 10, lancamentos: 4477, lancamentos_manuais: 937, eficiencia: 92, produtividade: 25.5 },
  { usuario: 'ALISSON', competencia: '2025-02', horas_trabalhadas: '136:21:46', importacoes: 11, lancamentos: 3725, lancamentos_manuais: 943, eficiencia: 89, produtividade: 27.3 },
  { usuario: 'ALISSON', competencia: '2025-03', horas_trabalhadas: '123:05:53', importacoes: 13, lancamentos: 4626, lancamentos_manuais: 1367, eficiencia: 94, produtividade: 37.6 },
  { usuario: 'ALISSON', competencia: '2025-04', horas_trabalhadas: '158:44:17', importacoes: 8, lancamentos: 3891, lancamentos_manuais: 892, eficiencia: 87, produtividade: 24.6 },
  { usuario: 'ALISSON', competencia: '2025-05', horas_trabalhadas: '142:18:33', importacoes: 12, lancamentos: 4156, lancamentos_manuais: 1056, eficiencia: 90, produtividade: 29.2 },
  { usuario: 'ALISSON', competencia: '2025-06', horas_trabalhadas: '167:29:41', importacoes: 9, lancamentos: 4321, lancamentos_manuais: 934, eficiencia: 88, produtividade: 25.8 },
  { usuario: 'ALISSON', competencia: '2025-07', horas_trabalhadas: '151:12:55', importacoes: 14, lancamentos: 3987, lancamentos_manuais: 987, eficiencia: 91, produtividade: 26.4 },
  { usuario: 'ALISSON', competencia: '2025-08', horas_trabalhadas: '134:56:22', importacoes: 7, lancamentos: 3654, lancamentos_manuais: 845, eficiencia: 85, produtividade: 27.1 },
  { usuario: 'ALISSON', competencia: '2025-09', horas_trabalhadas: '148:33:47', importacoes: 11, lancamentos: 4102, lancamentos_manuais: 912, eficiencia: 89, produtividade: 27.6 },

  // FABIO1
  { usuario: 'FABIO1', competencia: '2025-01', horas_trabalhadas: '29:03:23', importacoes: 678, lancamentos: 345, lancamentos_manuais: 0, eficiencia: 78, produtividade: 11.9 },
  { usuario: 'FABIO1', competencia: '2025-02', horas_trabalhadas: '23:39:20', importacoes: 652, lancamentos: 334, lancamentos_manuais: 0, eficiencia: 82, produtividade: 14.2 },
  { usuario: 'FABIO1', competencia: '2025-03', horas_trabalhadas: '35:20:25', importacoes: 595, lancamentos: 345, lancamentos_manuais: 0, eficiencia: 85, produtividade: 9.8 },
  { usuario: 'FABIO1', competencia: '2025-04', horas_trabalhadas: '31:47:12', importacoes: 712, lancamentos: 328, lancamentos_manuais: 0, eficiencia: 80, produtividade: 10.4 },
  { usuario: 'FABIO1', competencia: '2025-05', horas_trabalhadas: '27:15:38', importacoes: 634, lancamentos: 312, lancamentos_manuais: 0, eficiencia: 83, produtividade: 11.5 },
  { usuario: 'FABIO1', competencia: '2025-06', horas_trabalhadas: '33:52:44', importacoes: 689, lancamentos: 339, lancamentos_manuais: 0, eficiencia: 81, produtividade: 10.1 },
  { usuario: 'FABIO1', competencia: '2025-07', horas_trabalhadas: '28:41:17', importacoes: 645, lancamentos: 325, lancamentos_manuais: 0, eficiencia: 84, produtividade: 11.3 },
  { usuario: 'FABIO1', competencia: '2025-08', horas_trabalhadas: '32:18:56', importacoes: 701, lancamentos: 347, lancamentos_manuais: 0, eficiencia: 79, produtividade: 10.8 },
  { usuario: 'FABIO1', competencia: '2025-09', horas_trabalhadas: '30:24:33', importacoes: 667, lancamentos: 331, lancamentos_manuais: 0, eficiencia: 82, produtividade: 10.9 },

  // GERENTE
  { usuario: 'GERENTE', competencia: '2025-01', horas_trabalhadas: '03:01:41', importacoes: 0, lancamentos: 4679, lancamentos_manuais: 4679, eficiencia: 95, produtividade: 1559.7 },
  { usuario: 'GERENTE', competencia: '2025-02', horas_trabalhadas: '05:43:31', importacoes: 0, lancamentos: 4045, lancamentos_manuais: 4045, eficiencia: 92, produtividade: 704.3 },
  { usuario: 'GERENTE', competencia: '2025-03', horas_trabalhadas: '13:55:20', importacoes: 0, lancamentos: 3961, lancamentos_manuais: 3961, eficiencia: 88, produtividade: 283.6 },
  { usuario: 'GERENTE', competencia: '2025-04', horas_trabalhadas: '08:22:15', importacoes: 0, lancamentos: 4234, lancamentos_manuais: 4234, eficiencia: 90, produtividade: 512.1 },
  { usuario: 'GERENTE', competencia: '2025-05', horas_trabalhadas: '11:48:42', importacoes: 0, lancamentos: 3892, lancamentos_manuais: 3892, eficiencia: 87, produtividade: 330.8 },
  { usuario: 'GERENTE', competencia: '2025-06', horas_trabalhadas: '07:15:33', importacoes: 0, lancamentos: 4156, lancamentos_manuais: 4156, eficiencia: 91, produtividade: 570.1 },
  { usuario: 'GERENTE', competencia: '2025-07', horas_trabalhadas: '09:37:28', importacoes: 0, lancamentos: 4023, lancamentos_manuais: 4023, eficiencia: 89, produtividade: 430.2 },
  { usuario: 'GERENTE', competencia: '2025-08', horas_trabalhadas: '06:44:19', importacoes: 0, lancamentos: 3789, lancamentos_manuais: 3789, eficiencia: 86, produtividade: 563.4 },
  { usuario: 'GERENTE', competencia: '2025-09', horas_trabalhadas: '10:26:51', importacoes: 0, lancamentos: 4107, lancamentos_manuais: 4107, eficiencia: 88, produtividade: 393.2 },

  // LUCAS
  { usuario: 'LUCAS', competencia: '2025-01', horas_trabalhadas: '126:20:28', importacoes: 1809, lancamentos: 318, lancamentos_manuais: 0, eficiencia: 83, produtividade: 2.5 },
  { usuario: 'LUCAS', competencia: '2025-02', horas_trabalhadas: '107:02:10', importacoes: 1586, lancamentos: 236, lancamentos_manuais: 0, eficiencia: 85, produtividade: 2.2 },
  { usuario: 'LUCAS', competencia: '2025-03', horas_trabalhadas: '100:32:36', importacoes: 1928, lancamentos: 219, lancamentos_manuais: 0, eficiencia: 88, produtividade: 2.2 },
  { usuario: 'LUCAS', competencia: '2025-04', horas_trabalhadas: '118:47:52', importacoes: 1654, lancamentos: 285, lancamentos_manuais: 0, eficiencia: 81, produtividade: 2.4 },
  { usuario: 'LUCAS', competencia: '2025-05', horas_trabalhadas: '112:33:18', importacoes: 1732, lancamentos: 267, lancamentos_manuais: 0, eficiencia: 84, produtividade: 2.4 },
  { usuario: 'LUCAS', competencia: '2025-06', horas_trabalhadas: '125:19:44', importacoes: 1891, lancamentos: 301, lancamentos_manuais: 0, eficiencia: 82, produtividade: 2.4 },
  { usuario: 'LUCAS', competencia: '2025-07', horas_trabalhadas: '109:56:27', importacoes: 1765, lancamentos: 278, lancamentos_manuais: 0, eficiencia: 86, produtividade: 2.5 },
  { usuario: 'LUCAS', competencia: '2025-08', horas_trabalhadas: '103:41:15', importacoes: 1623, lancamentos: 254, lancamentos_manuais: 0, eficiencia: 84, produtividade: 2.5 },
  { usuario: 'LUCAS', competencia: '2025-09', horas_trabalhadas: '116:28:39', importacoes: 1857, lancamentos: 292, lancamentos_manuais: 0, eficiencia: 85, produtividade: 2.5 },

  // CARLA
  { usuario: 'CARLA', competencia: '2025-01', horas_trabalhadas: '151:04:55', importacoes: 6931, lancamentos: 425, lancamentos_manuais: 0, eficiencia: 91, produtividade: 2.8 },
  { usuario: 'CARLA', competencia: '2025-02', horas_trabalhadas: '120:47:22', importacoes: 6506, lancamentos: 268, lancamentos_manuais: 0, eficiencia: 89, produtividade: 2.2 },
  { usuario: 'CARLA', competencia: '2025-03', horas_trabalhadas: '118:21:23', importacoes: 7898, lancamentos: 266, lancamentos_manuais: 0, eficiencia: 93, produtividade: 2.2 },
  { usuario: 'CARLA', competencia: '2025-04', horas_trabalhadas: '135:18:47', importacoes: 7124, lancamentos: 389, lancamentos_manuais: 0, eficiencia: 87, produtividade: 2.9 },
  { usuario: 'CARLA', competencia: '2025-05', horas_trabalhadas: '142:33:12', importacoes: 6756, lancamentos: 412, lancamentos_manuais: 0, eficiencia: 90, produtividade: 2.9 },
  { usuario: 'CARLA', competencia: '2025-06', horas_trabalhadas: '128:56:38', importacoes: 7234, lancamentos: 356, lancamentos_manuais: 0, eficiencia: 88, produtividade: 2.8 },
  { usuario: 'CARLA', competencia: '2025-07', horas_trabalhadas: '139:41:25', importacoes: 6987, lancamentos: 378, lancamentos_manuais: 0, eficiencia: 89, produtividade: 2.7 },
  { usuario: 'CARLA', competencia: '2025-08', horas_trabalhadas: '124:17:53', importacoes: 6543, lancamentos: 334, lancamentos_manuais: 0, eficiencia: 86, produtividade: 2.7 },
  { usuario: 'CARLA', competencia: '2025-09', horas_trabalhadas: '131:42:16', importacoes: 7123, lancamentos: 367, lancamentos_manuais: 0, eficiencia: 88, produtividade: 2.8 },

  // SAMYLE
  { usuario: 'SAMYLE', competencia: '2025-01', horas_trabalhadas: '88:01:11', importacoes: 1, lancamentos: 14900, lancamentos_manuais: 1218, eficiencia: 96, produtividade: 169.3 },
  { usuario: 'SAMYLE', competencia: '2025-02', horas_trabalhadas: '89:40:27', importacoes: 2, lancamentos: 13012, lancamentos_manuais: 1997, eficiencia: 94, produtividade: 145.2 },
  { usuario: 'SAMYLE', competencia: '2025-03', horas_trabalhadas: '66:35:51', importacoes: 0, lancamentos: 11188, lancamentos_manuais: 593, eficiencia: 98, produtividade: 168.4 },
  { usuario: 'SAMYLE', competencia: '2025-04', horas_trabalhadas: '92:18:44', importacoes: 1, lancamentos: 13456, lancamentos_manuais: 1456, eficiencia: 95, produtividade: 146.0 },
  { usuario: 'SAMYLE', competencia: '2025-05', horas_trabalhadas: '85:27:33', importacoes: 0, lancamentos: 12834, lancamentos_manuais: 1234, eficiencia: 97, produtividade: 150.4 },
  { usuario: 'SAMYLE', competencia: '2025-06', horas_trabalhadas: '78:52:19', importacoes: 2, lancamentos: 12167, lancamentos_manuais: 987, eficiencia: 96, produtividade: 154.8 },
  { usuario: 'SAMYLE', competencia: '2025-07', horas_trabalhadas: '81:15:42', importacoes: 1, lancamentos: 12543, lancamentos_manuais: 1123, eficiencia: 95, produtividade: 154.6 },
  { usuario: 'SAMYLE', competencia: '2025-08', horas_trabalhadas: '74:38:56', importacoes: 0, lancamentos: 11892, lancamentos_manuais: 856, eficiencia: 97, produtividade: 159.2 },
  { usuario: 'SAMYLE', competencia: '2025-09', horas_trabalhadas: '76:24:17', importacoes: 1, lancamentos: 12234, lancamentos_manuais: 1023, eficiencia: 96, produtividade: 160.1 }
];

// Dados de atividades por cliente (Janeiro a Março 2025)
export const mockAtividadesClientes: AtividadeCliente[] = [
  // NEW CARDIO MEDICAL
  { id: 2, razao_social: 'NEW CARDIO MEDICAL COMERCIO DE PRODUTOS', competencia: '2025-01', horas_trabalhadas: '28:51:16', importacoes: 350, lancamentos: 687, lancamentos_manuais: 252, valor_hora: 24.90, custo_total: 718.34, rentabilidade: 1256.66 },
  { id: 2, razao_social: 'NEW CARDIO MEDICAL COMERCIO DE PRODUTOS', competencia: '2025-02', horas_trabalhadas: '76:09:59', importacoes: 317, lancamentos: 690, lancamentos_manuais: 277, valor_hora: 24.90, custo_total: 1896.48, rentabilidade: 123.52 },
  { id: 2, razao_social: 'NEW CARDIO MEDICAL COMERCIO DE PRODUTOS', competencia: '2025-03', horas_trabalhadas: '212:30:57', importacoes: 343, lancamentos: 892, lancamentos_manuais: 198, valor_hora: 24.90, custo_total: 5291.26, rentabilidade: -892.26 },

  // EMPRESA JUNIOR DA FEAACS
  { id: 6, razao_social: 'EMPRESA JUNIOR DA FEAACS', competencia: '2025-01', horas_trabalhadas: '00:08:40', importacoes: 0, lancamentos: 0, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: 3.61, rentabilidade: 196.39 },
  { id: 6, razao_social: 'EMPRESA JUNIOR DA FEAACS', competencia: '2025-02', horas_trabalhadas: '00:52:12', importacoes: 1, lancamentos: 3, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: 21.66, rentabilidade: 178.34 },
  { id: 6, razao_social: 'EMPRESA JUNIOR DA FEAACS', competencia: '2025-03', horas_trabalhadas: '00:29:08', importacoes: 1, lancamentos: 2, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: 12.10, rentabilidade: 187.90 },

  // DIMEDICAL COMERCIO E REPRESENTACAO
  { id: 16, razao_social: 'DIMEDICAL COMERCIO E REPRESENTACAO DE MA', competencia: '2025-01', horas_trabalhadas: '01:41:18', importacoes: 59, lancamentos: 1, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: 42.12, rentabilidade: 157.88 },
  { id: 16, razao_social: 'DIMEDICAL COMERCIO E REPRESENTACAO DE MA', competencia: '2025-02', horas_trabalhadas: '03:03:14', importacoes: 56, lancamentos: 0, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: 76.30, rentabilidade: 123.70 },
  { id: 16, razao_social: 'DIMEDICAL COMERCIO E REPRESENTACAO DE MA', competencia: '2025-03', horas_trabalhadas: '02:24:38', importacoes: 38, lancamentos: 1, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: 60.00, rentabilidade: 140.00 },

  // FRANCISCO SAULO COSTA OLIVEIRA
  { id: 17, razao_social: 'FRANCISCO SAULO COSTA OLIVEIRA', competencia: '2025-01', horas_trabalhadas: '12:34:56', importacoes: 45, lancamentos: 123, lancamentos_manuais: 12, valor_hora: 24.90, custo_total: 312.45, rentabilidade: 87.55 },
  { id: 17, razao_social: 'FRANCISCO SAULO COSTA OLIVEIRA', competencia: '2025-02', horas_trabalhadas: '-20:-7:-21', importacoes: 0, lancamentos: 0, lancamentos_manuais: 0, valor_hora: 24.90, custo_total: -500.00, rentabilidade: 500.00 },
  { id: 17, razao_social: 'FRANCISCO SAULO COSTA OLIVEIRA', competencia: '2025-03', horas_trabalhadas: '08:15:30', importacoes: 23, lancamentos: 67, lancamentos_manuais: 5, valor_hora: 24.90, custo_total: 205.50, rentabilidade: 194.50 },

  // Adicionando mais clientes para demonstração
  { id: 3, razao_social: 'TECH SOLUTIONS LTDA', competencia: '2025-01', horas_trabalhadas: '45:30:15', importacoes: 234, lancamentos: 456, lancamentos_manuais: 89, valor_hora: 24.90, custo_total: 1133.25, rentabilidade: 866.75 },
  { id: 3, razao_social: 'TECH SOLUTIONS LTDA', competencia: '2025-02', horas_trabalhadas: '52:18:42', importacoes: 267, lancamentos: 523, lancamentos_manuais: 95, valor_hora: 24.90, custo_total: 1302.90, rentabilidade: 697.10 },
  { id: 3, razao_social: 'TECH SOLUTIONS LTDA', competencia: '2025-03', horas_trabalhadas: '38:45:33', importacoes: 198, lancamentos: 389, lancamentos_manuais: 67, valor_hora: 24.90, custo_total: 964.50, rentabilidade: 1035.50 },

  { id: 4, razao_social: 'COMERCIAL ABC LTDA', competencia: '2025-01', horas_trabalhadas: '67:22:18', importacoes: 456, lancamentos: 789, lancamentos_manuais: 123, valor_hora: 24.90, custo_total: 1677.90, rentabilidade: 322.10 },
  { id: 4, razao_social: 'COMERCIAL ABC LTDA', competencia: '2025-02', horas_trabalhadas: '71:15:44', importacoes: 489, lancamentos: 823, lancamentos_manuais: 134, valor_hora: 24.90, custo_total: 1774.20, rentabilidade: 225.80 },
  { id: 4, razao_social: 'COMERCIAL ABC LTDA', competencia: '2025-03', horas_trabalhadas: '59:33:27', importacoes: 412, lancamentos: 756, lancamentos_manuais: 98, valor_hora: 24.90, custo_total: 1482.30, rentabilidade: 517.70 }
];

// Resumo geral das atividades (Janeiro a Setembro 2025)
export const mockResumoAtividades: ResumoAtividades = {
  total_atividades: 111392,
  total_importacoes: 486085,
  total_lancamentos: 643069,
  total_lancamentos_manuais: 187155,
  total_horas_ativas: 27928,
  periodo: {
    inicio: '2025-01-01',
    fim: '2025-09-30'
  }
};

// Dados para gráficos estratégicos
export const mockDadosEstrategicos = {
  // Evolução mensal de atividades
  evolucaoAtividades: [
    { mes: 'jan/2025', atividades: 3319 },
    { mes: 'fev/2025', atividades: 3200 },
    { mes: 'mar/2025', atividades: 2698 },
    { mes: 'abr/2025', atividades: 3404 },
    { mes: 'mai/2025', atividades: 3183 },
    { mes: 'jun/2025', atividades: 2911 },
    { mes: 'jul/2025', atividades: 3300 },
    { mes: 'ago/2025', atividades: 2753 },
    { mes: 'set/2025', atividades: 3161 }
  ],

  // Top 5 usuários mais produtivos
  topUsuariosProdutivos: [
    { usuario: 'SAMYLE', lancamentos: 111188, produtividade: 168.4 },
    { usuario: 'ALISSON', lancamentos: 4626, produtividade: 37.6 },
    { usuario: 'GERENTE', lancamentos: 3961, produtividade: 283.6 },
    { usuario: 'CARLA', lancamentos: 266, produtividade: 2.2 },
    { usuario: 'LUCAS', lancamentos: 219, produtividade: 2.2 }
  ],

  // Distribuição de eficiência
  distribuicaoEficiencia: [
    { faixa: '90-100%', usuarios: 3, percentual: 18.75 },
    { faixa: '80-89%', usuarios: 8, percentual: 50.0 },
    { faixa: '70-79%', usuarios: 4, percentual: 25.0 },
    { faixa: '60-69%', usuarios: 1, percentual: 6.25 }
  ],

  // Análise de tendências por usuário
  tendenciasUsuarios: [
    { usuario: 'SAMYLE', tendencia: 'Crescimento', variacao: 12.5 },
    { usuario: 'ALISSON', tendencia: 'Estável', variacao: 2.1 },
    { usuario: 'CARLA', tendencia: 'Crescimento', variacao: 8.7 },
    { usuario: 'LUCAS', tendencia: 'Declínio', variacao: -5.3 },
    { usuario: 'FABIO1', tendencia: 'Estável', variacao: 1.8 }
  ]
};

// Dados para Atividades por Módulo
export const mockAtividadesModulo = [
  {
    modulo: 'Escrita Fiscal',
    jan_2025: 1145,
    fev_2025: 1051,
    mar_2025: 974,
    abr_2025: 1185,
    mai_2025: 1077,
    jun_2025: 991,
    jul_2025: 1164,
    ago_2025: 966,
    set_2025: 1092,
    total_hours: 9644
  },
  {
    modulo: 'Folha de Pagamento',
    jan_2025: 1175,
    fev_2025: 1171,
    mar_2025: 876,
    abr_2025: 1071,
    mai_2025: 999,
    jun_2025: 932,
    jul_2025: 1000,
    ago_2025: 885,
    set_2025: 990,
    total_hours: 9099
  },
  {
    modulo: 'Contabil',
    jan_2025: 945,
    fev_2025: 994,
    mar_2025: 798,
    abr_2025: 1092,
    mai_2025: 1053,
    jun_2025: 961,
    jul_2025: 1073,
    ago_2025: 847,
    set_2025: 990,
    total_hours: 8754
  },
  {
    modulo: 'Honorários',
    jan_2025: 61,
    fev_2025: 45,
    mar_2025: 40,
    abr_2025: 40,
    mai_2025: 40,
    jun_2025: 43,
    jul_2025: 48,
    ago_2025: 50,
    set_2025: 77,
    total_hours: 443
  },
  {
    modulo: 'Patrimônio',
    jan_2025: 9,
    fev_2025: 10,
    mar_2025: 4,
    abr_2025: 11,
    mai_2025: 11,
    jun_2025: 7,
    jul_2025: 4,
    ago_2025: 4,
    set_2025: 11,
    total_hours: 70
  },
  {
    modulo: 'Lalur',
    jan_2025: 8,
    fev_2025: 1,
    mar_2025: 6,
    abr_2025: 6,
    mai_2025: 3,
    jun_2025: 0,
    jul_2025: 8,
    ago_2025: 1,
    set_2025: 1,
    total_hours: 33
  },
  {
    modulo: 'Atualizar',
    jan_2025: 0,
    fev_2025: 0,
    mar_2025: 0,
    abr_2025: 0,
    mai_2025: 0,
    jun_2025: 0,
    jul_2025: 2,
    ago_2025: 0,
    set_2025: 0,
    total_hours: 2
  },
  {
    modulo: 'Protocolos',
    jan_2025: 0,
    fev_2025: 0,
    mar_2025: 0,
    abr_2025: 0,
    mai_2025: 0,
    jun_2025: 0,
    jul_2025: 1,
    ago_2025: 0,
    set_2025: 0,
    total_hours: 2
  },
  {
    modulo: 'Registro',
    jan_2025: 0,
    fev_2025: 0,
    mar_2025: 0,
    abr_2025: 0,
    mai_2025: 0,
    jun_2025: 0,
    jul_2025: 0,
    ago_2025: 0,
    set_2025: 0,
    total_hours: 0
  },
  {
    modulo: 'Auditoria',
    jan_2025: 0,
    fev_2025: 0,
    mar_2025: 0,
    abr_2025: 0,
    mai_2025: 0,
    jun_2025: 0,
    jul_2025: 0,
    ago_2025: 0,
    set_2025: 0,
    total_hours: 0
  }
];

// Dados para gráfico comparativo de módulos (apenas módulos com atividade)
export const mockComparativoModulos = [
  { modulo: 'Escrita Fiscal', total_hours: 9644, cor: '#3B82F6' },
  { modulo: 'Folha de Pagamento', total_hours: 9099, cor: '#10B981' },
  { modulo: 'Contabil', total_hours: 8754, cor: '#F59E0B' },
  { modulo: 'Honorários', total_hours: 443, cor: '#EF4444' },
  { modulo: 'Patrimônio', total_hours: 70, cor: '#8B5CF6' },
  { modulo: 'Lalur', total_hours: 33, cor: '#06B6D4' },
  { modulo: 'Atualizar', total_hours: 2, cor: '#84CC16' },
  { modulo: 'Protocolos', total_hours: 2, cor: '#F97316' }
];

// Dados para evolução mensal dos módulos principais
export const mockEvolucaoModulos = [
  { 
    mes: 'Jan/2025', 
    'Escrita Fiscal': 1145, 
    'Folha de Pagamento': 1175, 
    'Contabil': 945,
    'Honorários': 61,
    'Patrimônio': 9,
    'Lalur': 8,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Fev/2025', 
    'Escrita Fiscal': 1051, 
    'Folha de Pagamento': 1171, 
    'Contabil': 994,
    'Honorários': 45,
    'Patrimônio': 10,
    'Lalur': 1,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Mar/2025', 
    'Escrita Fiscal': 974, 
    'Folha de Pagamento': 876, 
    'Contabil': 798,
    'Honorários': 40,
    'Patrimônio': 4,
    'Lalur': 6,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Abr/2025', 
    'Escrita Fiscal': 1185, 
    'Folha de Pagamento': 1071, 
    'Contabil': 1092,
    'Honorários': 40,
    'Patrimônio': 11,
    'Lalur': 6,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Mai/2025', 
    'Escrita Fiscal': 1077, 
    'Folha de Pagamento': 999, 
    'Contabil': 1053,
    'Honorários': 40,
    'Patrimônio': 11,
    'Lalur': 3,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Jun/2025', 
    'Escrita Fiscal': 991, 
    'Folha de Pagamento': 932, 
    'Contabil': 961,
    'Honorários': 43,
    'Patrimônio': 7,
    'Lalur': 0,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Jul/2025', 
    'Escrita Fiscal': 1164, 
    'Folha de Pagamento': 1000, 
    'Contabil': 1073,
    'Honorários': 48,
    'Patrimônio': 4,
    'Lalur': 8,
    'Atualizar': 2,
    'Protocolos': 1
  },
  { 
    mes: 'Ago/2025', 
    'Escrita Fiscal': 966, 
    'Folha de Pagamento': 885, 
    'Contabil': 847,
    'Honorários': 50,
    'Patrimônio': 4,
    'Lalur': 1,
    'Atualizar': 0,
    'Protocolos': 0
  },
  { 
    mes: 'Set/2025', 
    'Escrita Fiscal': 1092, 
    'Folha de Pagamento': 990, 
    'Contabil': 990,
    'Honorários': 77,
    'Patrimônio': 11,
    'Lalur': 1,
    'Atualizar': 0,
    'Protocolos': 0
  }
];
