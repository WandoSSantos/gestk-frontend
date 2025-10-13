import { apiClient } from '../client';
import type { ExportOptions, ExportResult } from '../types/client.types';

export const exportService = {
  // Exportação CSV (client-side)
  csv: {
    exportar: (dados: any[], nomeArquivo: string, colunas?: string[]): ExportResult => {
      try {
        // Esta função será implementada no cliente usando papaparse
        // Por enquanto, retorna um resultado mock
        return {
          sucesso: true,
          nome_arquivo: `${nomeArquivo}.csv`,
          url: `data:text/csv;charset=utf-8,${encodeURIComponent('dados,csv')}`
        };
      } catch (error) {
        return {
          sucesso: false,
          nome_arquivo: `${nomeArquivo}.csv`,
          erro: error instanceof Error ? error.message : 'Erro desconhecido'
        };
      }
    }
  },

  // Exportação PDF (backend)
  pdf: {
    exportar: (opcoes: ExportOptions) =>
      apiClient.post<ExportResult>('/export/pdf/', opcoes, {
        responseType: 'blob'
      }),

    relatorio: (tipo: string, dados: any[], filtros?: Record<string, any>) =>
      apiClient.post<ExportResult>(`/export/pdf/${tipo}/`, {
        dados,
        filtros
      }, {
        responseType: 'blob'
      })
  },

  // Exportação Excel (backend)
  excel: {
    exportar: (opcoes: ExportOptions) =>
      apiClient.post<ExportResult>('/export/excel/', opcoes, {
        responseType: 'blob'
      }),

    relatorio: (tipo: string, dados: any[], filtros?: Record<string, any>) =>
      apiClient.post<ExportResult>(`/export/excel/${tipo}/`, {
        dados,
        filtros
      }, {
        responseType: 'blob'
      })
  },

  // Relatórios Automatizados
  relatorios: {
    gerar: (tipo: string, filtros: any, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post(`/export/relatorios/${tipo}/`, { filtros, formato }, {
        responseType: 'blob'
      }),

    agendar: (relatorio: any) =>
      apiClient.post('/export/relatorios/agendar/', relatorio),

    listarAgendados: () =>
      apiClient.get('/export/relatorios/agendados/'),

    executarAgendado: (id: string) =>
      apiClient.post(`/export/relatorios/agendados/${id}/executar/`)
  },

  // Utilitários de exportação
  utils: {
    // Gerar nome de arquivo com timestamp
    gerarNomeArquivo: (base: string, extensao: string): string => {
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      return `${base}_${timestamp}.${extensao}`;
    },

    // Baixar arquivo do blob
    baixarArquivo: (blob: Blob, nomeArquivo: string): void => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = nomeArquivo;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    },

    // Validar dados para exportação
    validarDados: (dados: any[]): { valido: boolean; erro?: string } => {
      if (!Array.isArray(dados)) {
        return { valido: false, erro: 'Dados devem ser um array' };
      }
      
      if (dados.length === 0) {
        return { valido: false, erro: 'Nenhum dado para exportar' };
      }

      return { valido: true };
    }
  }
};
