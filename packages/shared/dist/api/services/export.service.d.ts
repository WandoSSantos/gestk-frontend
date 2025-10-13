import type { ExportOptions, ExportResult } from '../types/client.types';
export declare const exportService: {
    csv: {
        exportar: (dados: any[], nomeArquivo: string, colunas?: string[]) => ExportResult;
    };
    pdf: {
        exportar: (opcoes: ExportOptions) => Promise<ExportResult>;
        relatorio: (tipo: string, dados: any[], filtros?: Record<string, any>) => Promise<ExportResult>;
    };
    excel: {
        exportar: (opcoes: ExportOptions) => Promise<ExportResult>;
        relatorio: (tipo: string, dados: any[], filtros?: Record<string, any>) => Promise<ExportResult>;
    };
    relatorios: {
        gerar: (tipo: string, filtros: any, formato: "pdf" | "excel" | "csv") => Promise<any>;
        agendar: (relatorio: any) => Promise<any>;
        listarAgendados: () => Promise<any>;
        executarAgendado: (id: string) => Promise<any>;
    };
    utils: {
        gerarNomeArquivo: (base: string, extensao: string) => string;
        baixarArquivo: (blob: Blob, nomeArquivo: string) => void;
        validarDados: (dados: any[]) => {
            valido: boolean;
            erro?: string;
        };
    };
};
//# sourceMappingURL=export.service.d.ts.map