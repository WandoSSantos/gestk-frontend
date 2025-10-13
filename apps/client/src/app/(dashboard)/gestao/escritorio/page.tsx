'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { 
  mockAnaliseEscritorioMensal,
  mockEvolucaoRentabilidade,
  mockEvolucaoClientes,
  mockFaturamentoVsCustos,
  mockKPIsEscritorio,
  mockTendencias,
  type AnaliseEscritorioMensal,
  type KPIEscritorio
} from '@/lib/mocks';

export default function AnaliseEscritorioPage() {
  const [dataInicio, setDataInicio] = useState('2024-01-01');
  const [dataFim, setDataFim] = useState('2024-12-31');
  const [filtroEscritorio, setFiltroEscritorio] = useState('SILVEIRA RECURSOS HUMANOS LTDA');

  // Dados filtrados por período
  const dadosFiltrados = useMemo(() => {
    return mockAnaliseEscritorioMensal.filter(item => {
      const dataItem = new Date(`01/${item.mes.split('/')[0]}/${item.mes.split('/')[1]}`);
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);
      return dataItem >= inicio && dataItem <= fim;
    });
  }, [dataInicio, dataFim]);

  // Cálculos de totais
  const totais = useMemo(() => {
    return dadosFiltrados.reduce((acc, item) => ({
      quantidade_clientes: acc.quantidade_clientes + item.quantidade_clientes,
      faturamento_escritorio: acc.faturamento_escritorio + item.faturamento_escritorio,
      variacao_faturamento: acc.variacao_faturamento + item.variacao_faturamento,
      lancamentos: acc.lancamentos + item.lancamentos,
      percentual_lancamentos_manuais: acc.percentual_lancamentos_manuais + item.percentual_lancamentos_manuais,
      vinculos_folhas_ativos: acc.vinculos_folhas_ativos + item.vinculos_folhas_ativos,
      notas_fiscais_emitidas: acc.notas_fiscais_emitidas + item.notas_fiscais_emitidas,
      total_notas_fiscais_movimentadas: acc.total_notas_fiscais_movimentadas + item.total_notas_fiscais_movimentadas,
      custo_operacional: acc.custo_operacional + item.custo_operacional,
      rentabilidade_operacional: acc.rentabilidade_operacional + item.rentabilidade_operacional
    }), {
      quantidade_clientes: 0,
      faturamento_escritorio: 0,
      variacao_faturamento: 0,
      lancamentos: 0,
      percentual_lancamentos_manuais: 0,
      vinculos_folhas_ativos: 0,
      notas_fiscais_emitidas: 0,
      total_notas_fiscais_movimentadas: 0,
      custo_operacional: 0,
      rentabilidade_operacional: 0
    });
  }, [dadosFiltrados]);

  // Dados para gráficos filtrados
  const dadosGraficos = useMemo(() => {
    return {
      evolucaoRentabilidade: dadosFiltrados.map(item => ({
        mes: item.mes,
        rentabilidade: item.rentabilidade_operacional,
        faturamento: item.faturamento_escritorio,
        custo_operacional: item.custo_operacional
      })),
      evolucaoClientes: dadosFiltrados.map(item => ({
        mes: item.mes,
        clientes: item.quantidade_clientes
      })),
      faturamentoVsCustos: dadosFiltrados.map(item => ({
        mes: item.mes,
        faturamento: item.faturamento_escritorio,
        custo_operacional: item.custo_operacional,
        margem: item.faturamento_escritorio - item.custo_operacional
      }))
    };
  }, [dadosFiltrados]);

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const formatarPercentual = (valor: number) => {
    return `${valor.toFixed(2)}%`;
  };

  const formatarTempo = (tempo: string) => {
    return tempo;
  };

  const getVariacaoColor = (variacao: number) => {
    if (variacao > 0) return 'text-green-600';
    if (variacao < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getVariacaoIcon = (variacao: number) => {
    if (variacao > 0) return '↗';
    if (variacao < 0) return '↘';
    return '→';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Análise do Escritório</h1>
          <p className="text-gray-600 mt-1">
            Análise completa da situação do escritório de contabilidade
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Escolha o Escritório:</label>
            <select 
              value={filtroEscritorio}
              onChange={(e) => setFiltroEscritorio(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="SILVEIRA RECURSOS HUMANOS LTDA">SILVEIRA RECURSOS HUMANOS LTDA</option>
              <option value="ESCRITÓRIO CONTÁBIL ABC">ESCRITÓRIO CONTÁBIL ABC</option>
              <option value="CONTABILIDADE XYZ LTDA">CONTABILIDADE XYZ LTDA</option>
            </select>
          </div>
          
          <ExportButtons 
            data={dadosFiltrados}
            filename="analise-escritorio"
            title="Análise do Escritório"
          />
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Análise</CardTitle>
          <CardDescription>
            Selecione o período para análise dos dados do escritório
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Início
              </label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Fim
              </label>
              <Input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full sm:w-auto">
                Pesquisar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockKPIsEscritorio.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.titulo}</p>
                  <p className={`text-2xl font-bold ${kpi.cor}`}>
                    {kpi.titulo.includes('Faturamento') || kpi.titulo.includes('Rentabilidade') || kpi.titulo.includes('Custo') 
                      ? formatarMoeda(kpi.valor)
                      : kpi.titulo.includes('Tempo')
                      ? `${kpi.valor}H`
                      : kpi.valor.toLocaleString('pt-BR')
                    }
                  </p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm ${getVariacaoColor(kpi.variacao)}`}>
                      {getVariacaoIcon(kpi.variacao)} {formatarPercentual(kpi.variacao)}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{kpi.descricao}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${kpi.cor}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {kpi.icone === 'users' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    )}
                    {kpi.icone === 'dollar-sign' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    )}
                    {kpi.icone === 'trending-down' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    )}
                    {kpi.icone === 'calculator' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    )}
                    {kpi.icone === 'clock' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {kpi.icone === 'file-text' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    )}
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabela de Análise Mensal */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Mensal Detalhada</CardTitle>
          <CardDescription>
            Dados detalhados por competência do escritório selecionado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Mês</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Qtd. Clientes</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Faturamento</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Variação %</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Tempo Ativo</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Lançamentos</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">% Manual</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Folhas Ativas</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">NF Emitidas</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">NF Movimentadas</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Custo Oper.</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Rentabilidade</th>
                </tr>
              </thead>
              <tbody>
                {dadosFiltrados.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.mes}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.quantidade_clientes.toLocaleString('pt-BR')}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{formatarMoeda(item.faturamento_escritorio)}</td>
                    <td className={`py-3 px-4 text-right ${getVariacaoColor(item.variacao_faturamento)}`}>
                      {getVariacaoIcon(item.variacao_faturamento)} {formatarPercentual(item.variacao_faturamento)}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.tempo_ativo_sistema}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.lancamentos.toLocaleString('pt-BR')}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{formatarPercentual(item.percentual_lancamentos_manuais)}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.vinculos_folhas_ativos}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.notas_fiscais_emitidas}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.total_notas_fiscais_movimentadas}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{formatarMoeda(item.custo_operacional)}</td>
                    <td className={`py-3 px-4 text-right ${item.rentabilidade_operacional < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {formatarMoeda(item.rentabilidade_operacional)}
                    </td>
                  </tr>
                ))}
                {/* Linha de Total */}
                <tr className="border-t-2 border-gray-300 bg-gray-50 font-semibold">
                  <td className="py-3 px-4 font-bold text-gray-900">TOTAL</td>
                  <td className="py-3 px-4 text-right text-gray-900">{totais.quantidade_clientes.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-4 text-right text-gray-900">{formatarMoeda(totais.faturamento_escritorio)}</td>
                  <td className={`py-3 px-4 text-right ${getVariacaoColor(totais.variacao_faturamento)}`}>
                    {getVariacaoIcon(totais.variacao_faturamento)} {formatarPercentual(totais.variacao_faturamento)}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-900">35769:42:06</td>
                  <td className="py-3 px-4 text-right text-gray-900">{totais.lancamentos.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-4 text-right text-gray-900">{formatarPercentual(totais.percentual_lancamentos_manuais)}</td>
                  <td className="py-3 px-4 text-right text-gray-900">{totais.vinculos_folhas_ativos}</td>
                  <td className="py-3 px-4 text-right text-gray-900">{totais.notas_fiscais_emitidas}</td>
                  <td className="py-3 px-4 text-right text-gray-900">{totais.total_notas_fiscais_movimentadas}</td>
                  <td className="py-3 px-4 text-right text-gray-900">{formatarMoeda(totais.custo_operacional)}</td>
                  <td className={`py-3 px-4 text-right ${totais.rentabilidade_operacional < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {formatarMoeda(totais.rentabilidade_operacional)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Gráficos de Análise */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evolução da Rentabilidade */}
        <Card>
          <CardHeader>
            <CardTitle>Evolução da Rentabilidade</CardTitle>
            <CardDescription>
              Acompanhamento mensal da rentabilidade operacional
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart
              data={dadosGraficos.evolucaoRentabilidade}
              xKey="mes"
              yKey="rentabilidade"
              color="#ef4444"
              title="Rentabilidade Operacional"
              description="Evolução mensal da rentabilidade (valores negativos indicam prejuízo)"
            />
          </CardContent>
        </Card>

        {/* Evolução de Clientes */}
        <Card>
          <CardHeader>
            <CardTitle>Evolução de Clientes</CardTitle>
            <CardDescription>
              Crescimento da base de clientes ao longo do tempo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart
              data={dadosGraficos.evolucaoClientes}
              xKey="mes"
              yKey="clientes"
              color="#3b82f6"
              title="Quantidade de Clientes"
              description="Evolução mensal do número de clientes"
            />
          </CardContent>
        </Card>

        {/* Faturamento vs Custos */}
        <Card>
          <CardHeader>
            <CardTitle>Faturamento vs Custos Operacionais</CardTitle>
            <CardDescription>
              Comparativo mensal entre faturamento e custos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={dadosGraficos.faturamentoVsCustos}
              xKey="mes"
              yKey="faturamento"
              color="#10b981"
              title="Faturamento Mensal"
              description="Valores de faturamento por mês"
            />
          </CardContent>
        </Card>

        {/* Análise de Margem */}
        <Card>
          <CardHeader>
            <CardTitle>Análise de Margem</CardTitle>
            <CardDescription>
              Margem entre faturamento e custos operacionais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={dadosGraficos.faturamentoVsCustos.map(item => ({
                mes: item.mes,
                margem: item.margem
              }))}
              xKey="mes"
              yKey="margem"
              color="#f59e0b"
              title="Margem Operacional"
              description="Diferença entre faturamento e custos (valores negativos indicam prejuízo)"
            />
          </CardContent>
        </Card>
      </div>

      {/* Análise de Tendências */}
      <Card>
        <CardHeader>
          <CardTitle>Análise de Tendências</CardTitle>
          <CardDescription>
            Insights estratégicos baseados nos dados do período
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Crescimento de Clientes</h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Período:</span> {mockTendencias.crescimento_clientes.periodo}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Taxa:</span> {mockTendencias.crescimento_clientes.taxa}%
              </p>
              <p className="text-sm text-green-600 font-medium">
                Tendência: Crescimento consistente
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Faturamento</h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Período:</span> {mockTendencias.faturamento.periodo}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Variação:</span> {mockTendencias.faturamento.variacao}%
              </p>
              <p className="text-sm text-orange-600 font-medium">
                Tendência: Crescimento irregular
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Pico:</span> {mockTendencias.faturamento.pico} - {formatarMoeda(mockTendencias.faturamento.pico_valor)}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Rentabilidade</h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Período:</span> {mockTendencias.rentabilidade.periodo}
              </p>
              <p className="text-sm text-red-600 font-medium">
                Tendência: Prejuízo constante
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Melhor mês:</span> {mockTendencias.rentabilidade.melhor_mes}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Valor:</span> {formatarMoeda(mockTendencias.rentabilidade.melhor_valor)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}