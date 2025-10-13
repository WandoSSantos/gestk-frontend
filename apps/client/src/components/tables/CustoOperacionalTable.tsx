'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Badge } from '@gestk/ui';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { CustoOperacional, CompetenciaCusto } from '@/lib/mocks/custo-operacional.mock';

interface CustoOperacionalTableProps {
  data: CustoOperacional;
  onSocioClick?: (cnpj: string) => void;
}

export function CustoOperacionalTable({ data, onSocioClick }: CustoOperacionalTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const formatTime = (timeString: string) => {
    return timeString; // Já vem formatado como HH:MM:SS
  };

  const getVariacaoColor = (value: number) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getRentabilidadeColor = (value: number) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900">
              {data.empresa}
            </CardTitle>
            <CardDescription className="mt-1">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-600">CPF/CNPJ:</span>
                  <div className="font-mono">{data.cnpj}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Data Cadastro:</span>
                  <div>{format(new Date(data.data_cadastro), 'dd/MM/yyyy', { locale: ptBR })}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Data Criação:</span>
                  <div>{format(new Date(data.data_criacao), 'dd/MM/yyyy', { locale: ptBR })}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Sócio:</span>
                  <div 
                    className={`font-medium ${
                      data.socio_responsavel === 'SEM RESPONSÁVEL' 
                        ? 'text-gray-500' 
                        : 'text-blue-600 cursor-pointer hover:underline'
                    }`}
                    onClick={() => data.socio_responsavel !== 'SEM RESPONSÁVEL' && onSocioClick?.(data.cnpj)}
                  >
                    {data.socio_responsavel}
                  </div>
                </div>
              </div>
            </CardDescription>
          </div>
          <div className="ml-4">
            <Badge className="bg-blue-100 text-blue-800">
              Valor Hora: {formatCurrency(data.valor_hora)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-medium text-gray-600">Competência</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Faturamento da Empresa</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Variação de Faturamento</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Tempo Gasto no Sistema</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Lançamentos</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">% Lançamentos Manuais</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Vínculos de Folha Ativos</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Total NF-e Emitidas</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Total NF-e Movimentadas</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Faturamento do Escritório</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Custo Operacional</th>
                <th className="text-right py-3 px-2 font-medium text-gray-600">Rentabilidade Operacional</th>
              </tr>
            </thead>
            <tbody>
              {data.competencias.map((competencia, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2 font-medium text-gray-900">
                    {competencia.competencia}
                  </td>
                  <td className="py-3 px-2 text-right font-mono">
                    {formatCurrency(competencia.faturamento_empresa)}
                  </td>
                  <td className={`py-3 px-2 text-right font-mono ${getVariacaoColor(competencia.variacao_faturamento)}`}>
                    {formatPercent(competencia.variacao_faturamento)}
                  </td>
                  <td className="py-3 px-2 text-right font-mono">
                    {formatTime(competencia.tempo_gasto_sistema)}
                  </td>
                  <td className="py-3 px-2 text-right">
                    {competencia.lancamentos}
                  </td>
                  <td className="py-3 px-2 text-right">
                    {formatPercent(competencia.percentual_lancamentos_manuais)}
                  </td>
                  <td className="py-3 px-2 text-right">
                    {competencia.vinculos_folha_ativos}
                  </td>
                  <td className="py-3 px-2 text-right">
                    {competencia.total_nf_emitidas}
                  </td>
                  <td className="py-3 px-2 text-right">
                    {competencia.total_nf_movimentadas}
                  </td>
                  <td className="py-3 px-2 text-right font-mono">
                    {formatCurrency(competencia.faturamento_escritorio)}
                  </td>
                  <td className="py-3 px-2 text-right font-mono font-medium">
                    {formatCurrency(competencia.custo_operacional)}
                  </td>
                  <td className={`py-3 px-2 text-right font-mono font-medium ${getRentabilidadeColor(competencia.rentabilidade_operacional)}`}>
                    {formatCurrency(competencia.rentabilidade_operacional)}
                  </td>
                </tr>
              ))}
              {/* Linha de Total */}
              <tr className="border-t-2 border-gray-300 bg-gray-50 font-semibold">
                <td className="py-3 px-2 font-bold text-gray-900">Total</td>
                <td className="py-3 px-2 text-right font-mono">
                  {formatCurrency(data.total_faturamento)}
                </td>
                <td className="py-3 px-2 text-right font-mono">
                  {formatPercent(data.competencias.reduce((acc, c) => acc + c.variacao_faturamento, 0) / data.competencias.length)}
                </td>
                <td className="py-3 px-2 text-right font-mono">
                  {formatTime(data.total_tempo_sistema)}
                </td>
                <td className="py-3 px-2 text-right">
                  {data.total_lancamentos}
                </td>
                <td className="py-3 px-2 text-right">
                  {formatPercent(data.competencias.reduce((acc, c) => acc + c.percentual_lancamentos_manuais, 0) / data.competencias.length)}
                </td>
                <td className="py-3 px-2 text-right">
                  {data.competencias[0]?.vinculos_folha_ativos || 0}
                </td>
                <td className="py-3 px-2 text-right">
                  {data.total_nf_emitidas}
                </td>
                <td className="py-3 px-2 text-right">
                  {data.total_nf_movimentadas}
                </td>
                <td className="py-3 px-2 text-right font-mono">
                  {formatCurrency(data.competencias.reduce((acc, c) => acc + c.faturamento_escritorio, 0))}
                </td>
                <td className="py-3 px-2 text-right font-mono font-bold">
                  {formatCurrency(data.total_custo_operacional)}
                </td>
                <td className={`py-3 px-2 text-right font-mono font-bold ${getRentabilidadeColor(data.total_rentabilidade)}`}>
                  {formatCurrency(data.total_rentabilidade)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
