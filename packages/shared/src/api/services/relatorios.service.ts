import { apiClient } from '../client';

export interface RelatorioAgendado {
  id: string;
  nome: string;
  tipo: 'gestao' | 'dashboard' | 'fiscal' | 'contabil' | 'personalizado';
  frequencia: 'diario' | 'semanal' | 'mensal' | 'trimestral' | 'anual';
  proximaExecucao: string;
  status: 'ativo' | 'pausado' | 'erro';
  destinatarios: string[];
  formato: 'pdf' | 'excel' | 'csv';
  ultimaExecucao?: string;
  criadoEm: string;
  descricao?: string;
  filtros?: {
    periodo_inicio?: string;
    periodo_fim?: string;
    regime_fiscal?: string;
    ramo_atividade?: string;
    status_cliente?: string;
  };
}

export interface TemplateRelatorio {
  id: string;
  nome: string;
  tipo: string;
  descricao: string;
  campos: string[];
  configuracao: any;
}

export interface ExecucaoRelatorio {
  id: string;
  relatorioId: string;
  dataExecucao: string;
  status: 'sucesso' | 'erro' | 'processando';
  destinatarios: number;
  arquivoUrl?: string;
  erro?: string;
}

export const relatoriosService = {
  // Relatórios Agendados
  listar: (filtros?: any) => 
    apiClient.get('/relatorios/agendados/', { params: filtros }),

  criar: (relatorio: Omit<RelatorioAgendado, 'id' | 'criadoEm'>) =>
    apiClient.post('/relatorios/agendados/', relatorio),

  atualizar: (id: string, relatorio: Partial<RelatorioAgendado>) =>
    apiClient.put(`/relatorios/agendados/${id}/`, relatorio),

  excluir: (id: string) =>
    apiClient.delete(`/relatorios/agendados/${id}/`),

  executar: (id: string) =>
    apiClient.post(`/relatorios/agendados/${id}/executar/`),

  pausar: (id: string) =>
    apiClient.post(`/relatorios/agendados/${id}/pausar/`),

  ativar: (id: string) =>
    apiClient.post(`/relatorios/agendados/${id}/ativar/`),

  // Templates
  listarTemplates: () =>
    apiClient.get('/relatorios/templates/'),

  criarTemplate: (template: Omit<TemplateRelatorio, 'id'>) =>
    apiClient.post('/relatorios/templates/', template),

  // Execuções
  listarExecucoes: (relatorioId?: string) =>
    apiClient.get('/relatorios/execucoes/', { 
      params: relatorioId ? { relatorio: relatorioId } : {} 
    }),

  baixarExecucao: (execucaoId: string) =>
    apiClient.get(`/relatorios/execucoes/${execucaoId}/download/`, {
      responseType: 'blob'
    }),

  // Relatórios Específicos
  gerarRelatorioCarteira: (filtros: any) =>
    apiClient.post('/relatorios/gerar/carteira/', filtros),

  gerarRelatorioFiscal: (filtros: any) =>
    apiClient.post('/relatorios/gerar/fiscal/', filtros),

  gerarRelatorioContabil: (filtros: any) =>
    apiClient.post('/relatorios/gerar/contabil/', filtros),

  gerarRelatorioDashboard: (tipo: string, filtros: any) =>
    apiClient.post(`/relatorios/gerar/dashboard/${tipo}/`, filtros),

  // Configurações
  obterConfiguracoes: () =>
    apiClient.get('/relatorios/configuracoes/'),

  atualizarConfiguracoes: (configuracoes: any) =>
    apiClient.put('/relatorios/configuracoes/', configuracoes),

  // Estatísticas
  obterEstatisticas: () =>
    apiClient.get('/relatorios/estatisticas/'),
};

export default relatoriosService;

