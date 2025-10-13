import { apiClient } from '../client';
export const relatoriosService = {
    // Relatórios Agendados
    listar: (filtros) => apiClient.get('/relatorios/agendados/', { params: filtros }),
    criar: (relatorio) => apiClient.post('/relatorios/agendados/', relatorio),
    atualizar: (id, relatorio) => apiClient.put(`/relatorios/agendados/${id}/`, relatorio),
    excluir: (id) => apiClient.delete(`/relatorios/agendados/${id}/`),
    executar: (id) => apiClient.post(`/relatorios/agendados/${id}/executar/`),
    pausar: (id) => apiClient.post(`/relatorios/agendados/${id}/pausar/`),
    ativar: (id) => apiClient.post(`/relatorios/agendados/${id}/ativar/`),
    // Templates
    listarTemplates: () => apiClient.get('/relatorios/templates/'),
    criarTemplate: (template) => apiClient.post('/relatorios/templates/', template),
    // Execuções
    listarExecucoes: (relatorioId) => apiClient.get('/relatorios/execucoes/', {
        params: relatorioId ? { relatorio: relatorioId } : {}
    }),
    baixarExecucao: (execucaoId) => apiClient.get(`/relatorios/execucoes/${execucaoId}/download/`, {
        responseType: 'blob'
    }),
    // Relatórios Específicos
    gerarRelatorioCarteira: (filtros) => apiClient.post('/relatorios/gerar/carteira/', filtros),
    gerarRelatorioFiscal: (filtros) => apiClient.post('/relatorios/gerar/fiscal/', filtros),
    gerarRelatorioContabil: (filtros) => apiClient.post('/relatorios/gerar/contabil/', filtros),
    gerarRelatorioDashboard: (tipo, filtros) => apiClient.post(`/relatorios/gerar/dashboard/${tipo}/`, filtros),
    // Configurações
    obterConfiguracoes: () => apiClient.get('/relatorios/configuracoes/'),
    atualizarConfiguracoes: (configuracoes) => apiClient.put('/relatorios/configuracoes/', configuracoes),
    // Estatísticas
    obterEstatisticas: () => apiClient.get('/relatorios/estatisticas/'),
};
export default relatoriosService;
//# sourceMappingURL=relatorios.service.js.map