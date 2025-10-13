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
export declare const relatoriosService: {
    listar: (filtros?: any) => Promise<any>;
    criar: (relatorio: Omit<RelatorioAgendado, "id" | "criadoEm">) => Promise<any>;
    atualizar: (id: string, relatorio: Partial<RelatorioAgendado>) => Promise<any>;
    excluir: (id: string) => Promise<any>;
    executar: (id: string) => Promise<any>;
    pausar: (id: string) => Promise<any>;
    ativar: (id: string) => Promise<any>;
    listarTemplates: () => Promise<any>;
    criarTemplate: (template: Omit<TemplateRelatorio, "id">) => Promise<any>;
    listarExecucoes: (relatorioId?: string) => Promise<any>;
    baixarExecucao: (execucaoId: string) => Promise<any>;
    gerarRelatorioCarteira: (filtros: any) => Promise<any>;
    gerarRelatorioFiscal: (filtros: any) => Promise<any>;
    gerarRelatorioContabil: (filtros: any) => Promise<any>;
    gerarRelatorioDashboard: (tipo: string, filtros: any) => Promise<any>;
    obterConfiguracoes: () => Promise<any>;
    atualizarConfiguracoes: (configuracoes: any) => Promise<any>;
    obterEstatisticas: () => Promise<any>;
};
export default relatoriosService;
//# sourceMappingURL=relatorios.service.d.ts.map