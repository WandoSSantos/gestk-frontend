'use client';

import React from 'react';
import { Download, FileText, FileSpreadsheet, File } from 'lucide-react';
import { Button } from '@gestk/ui';
import { exportService } from '@gestk/shared';

interface ExportButtonsProps {
  data: any[];
  nomeArquivo: string;
  colunas?: string[];
  filtros?: Record<string, any>;
  className?: string;
  disabled?: boolean;
  onExportStart?: () => void;
  onExportComplete?: (result: any) => void;
  onExportError?: (error: string) => void;
}

export function ExportButtons({
  data,
  nomeArquivo,
  colunas,
  filtros,
  className = '',
  disabled = false,
  onExportStart,
  onExportComplete,
  onExportError
}: ExportButtonsProps) {
  const [isExporting, setIsExporting] = React.useState<string | null>(null);

  const handleExport = async (formato: 'pdf' | 'excel' | 'csv') => {
    if (disabled || isExporting) return;

    try {
      setIsExporting(formato);
      onExportStart?.();

      const opcoes = {
        formato,
        dados: data,
        nome_arquivo: nomeArquivo,
        colunas,
        filtros_aplicados: filtros
      };

      let result;

      if (formato === 'csv') {
        // Exportação CSV client-side
        result = exportService.csv.exportar(data, nomeArquivo, colunas);
        
        if (result.sucesso && result.url) {
          const link = document.createElement('a');
          link.href = result.url;
          link.download = result.nome_arquivo;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        // Exportação PDF/Excel via backend
        const response = formato === 'pdf' 
          ? await exportService.pdf.exportar(opcoes)
          : await exportService.excel.exportar(opcoes);

        const blob = new Blob([response.data], {
          type: formato === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });

        exportService.utils.baixarArquivo(blob, `${nomeArquivo}.${formato}`);
        result = { sucesso: true, nome_arquivo: `${nomeArquivo}.${formato}` };
      }

      onExportComplete?.(result);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      onExportError?.(errorMessage);
    } finally {
      setIsExporting(null);
    }
  };

  const isDisabled = disabled || !data || data.length === 0;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleExport('csv')}
        disabled={isDisabled || isExporting === 'csv'}
        className="text-green-600 hover:text-green-800"
      >
        {isExporting === 'csv' ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2" />
        ) : (
          <File className="h-4 w-4 mr-2" />
        )}
        CSV
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleExport('excel')}
        disabled={isDisabled || isExporting === 'excel'}
        className="text-green-600 hover:text-green-800"
      >
        {isExporting === 'excel' ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2" />
        ) : (
          <FileSpreadsheet className="h-4 w-4 mr-2" />
        )}
        Excel
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleExport('pdf')}
        disabled={isDisabled || isExporting === 'pdf'}
        className="text-red-600 hover:text-red-800"
      >
        {isExporting === 'pdf' ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2" />
        ) : (
          <FileText className="h-4 w-4 mr-2" />
        )}
        PDF
      </Button>
    </div>
  );
}
