'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { mockDashboardIndicadores } from '@/lib/mocks';
import { 
  Target, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  BarChart3,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function IndicadoresPage() {
  const [filtros, setFiltros] = React.useState({
    periodo_inicio: '2024-01-01',
    periodo_fim: '2024-12-31'
  });

  // Preparar dados para gráficos
  const dadosFinanceiros = mockDashboardIndicadores.financeiros.map(item => ({
    name: item.nome,
    valor: item.valor,
    meta: item.meta,
    status: item.status
  }));

  const dadosOperacionais = mockDashboardIndicadores.operacionais.map(item => ({
    name: item.nome,
    valor: item.valor,
    meta: item.meta,
    status: item.status
  }));

  const dadosPatrimoniais = mockDashboardIndicadores.patrimoniais.map(item => ({
    name: item.nome,
    valor: item.valor,
    meta: item.meta,
    status: item.status
  }));

  const dadosTendencias = mockDashboardIndicadores.tendencias.map(item => ({
    indicador: item.indicador,
    variacao: item.variacao,
    tendencia: item.tendencia
  }));

  const handleFiltersChange = (novosFiltros: any) => {
    setFiltros(novosFiltros);
  };

  const handleClearFilters = () => {
    setFiltros({
      periodo_inicio: '2024-01-01',
      periodo_fim: '2024-12-31'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'positivo':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'negativo':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'positivo':
        return 'text-green-600 bg-green-50';
      case 'negativo':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case 'crescimento':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'declinio':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTendenciaColor = (tendencia: string) => {
    switch (tendencia) {
      case 'crescimento':
        return 'text-green-600';
      case 'declinio':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Indicadores</h1>
          <p className="text-gray-600 mt-1">
            KPIs financeiros, operacionais e patrimoniais
          </p>
        </div>
        <ExportButtons
          data={[mockDashboardIndicadores]}
          nomeArquivo="dashboard_indicadores"
          filtros={filtros}
        />
      </div>

      {/* Filtros */}
      <GlobalFilters
        filters={filtros}
        onFiltersChange={handleFiltersChange}
        onClearFilters={handleClearFilters}
        showSearch={false}
        showPeriod={true}
        showRegimeFiscal={false}
        showRamoAtividade={false}
        showStatus={false}
      />

      {/* Indicadores Financeiros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Indicadores Financeiros
          </CardTitle>
          <CardDescription>
            Métricas de performance financeira
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDashboardIndicadores.financeiros.map((indicador, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                indicador.status === 'positivo' ? 'border-green-200 bg-green-50' :
                indicador.status === 'negativo' ? 'border-red-200 bg-red-50' :
                'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{indicador.nome}</span>
                  {getStatusIcon(indicador.status)}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {indicador.valor.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-500">
                  Meta: {indicador.meta}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${
                      indicador.status === 'positivo' ? 'bg-green-500' :
                      indicador.status === 'negativo' ? 'bg-red-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${Math.min((indicador.valor / indicador.meta) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Indicadores Operacionais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Indicadores Operacionais
          </CardTitle>
          <CardDescription>
            Métricas de eficiência operacional
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDashboardIndicadores.operacionais.map((indicador, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                indicador.status === 'positivo' ? 'border-green-200 bg-green-50' :
                indicador.status === 'negativo' ? 'border-red-200 bg-red-50' :
                'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{indicador.nome}</span>
                  {getStatusIcon(indicador.status)}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {indicador.valor.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-500">
                  Meta: {indicador.meta}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${
                      indicador.status === 'positivo' ? 'bg-green-500' :
                      indicador.status === 'negativo' ? 'bg-red-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${Math.min((indicador.valor / indicador.meta) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Indicadores Patrimoniais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Indicadores Patrimoniais
          </CardTitle>
          <CardDescription>
            Métricas de estrutura patrimonial
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockDashboardIndicadores.patrimoniais.map((indicador, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                indicador.status === 'positivo' ? 'border-green-200 bg-green-50' :
                indicador.status === 'negativo' ? 'border-red-200 bg-red-50' :
                'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 text-sm">{indicador.nome}</span>
                  {getStatusIcon(indicador.status)}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {indicador.valor.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-500">
                  Meta: {indicador.meta}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${
                      indicador.status === 'positivo' ? 'bg-green-500' :
                      indicador.status === 'negativo' ? 'bg-red-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${Math.min((indicador.valor / indicador.meta) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gráficos Comparativos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={dadosFinanceiros}
          bars={[
            { dataKey: 'valor', fill: '#3b82f6', name: 'Valor Atual' },
            { dataKey: 'meta', fill: '#10b981', name: 'Meta' }
          ]}
          title="Indicadores Financeiros vs Metas"
          description="Comparação entre valores atuais e metas estabelecidas"
          height={350}
        />

        <BarChart
          data={dadosOperacionais}
          bars={[
            { dataKey: 'valor', fill: '#f59e0b', name: 'Valor Atual' },
            { dataKey: 'meta', fill: '#ef4444', name: 'Meta' }
          ]}
          title="Indicadores Operacionais vs Metas"
          description="Comparação entre valores atuais e metas estabelecidas"
          height={350}
        />
      </div>

      {/* Análise de Tendências */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Análise de Tendências
          </CardTitle>
          <CardDescription>
            Direção e magnitude das mudanças nos indicadores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockDashboardIndicadores.tendencias.map((tendencia, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{tendencia.indicador}</span>
                  {getTendenciaIcon(tendencia.tendencia)}
                </div>
                <div className={`text-2xl font-bold ${getTendenciaColor(tendencia.tendencia)}`}>
                  {tendencia.variacao > 0 ? '+' : ''}{tendencia.variacao}%
                </div>
                <div className="text-sm text-gray-500 capitalize">
                  {tendencia.tendencia}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resumo Executivo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Resumo Executivo
          </CardTitle>
          <CardDescription>
            Visão consolidada dos indicadores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {mockDashboardIndicadores.financeiros.filter(f => f.status === 'positivo').length +
                 mockDashboardIndicadores.operacionais.filter(o => o.status === 'positivo').length +
                 mockDashboardIndicadores.patrimoniais.filter(p => p.status === 'positivo').length}
              </div>
              <div className="text-sm text-green-800 mt-1">Indicadores Positivos</div>
              <div className="text-xs text-green-600 mt-1">
                Dentro ou acima da meta
              </div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">
                {mockDashboardIndicadores.financeiros.filter(f => f.status === 'neutro').length +
                 mockDashboardIndicadores.operacionais.filter(o => o.status === 'neutro').length +
                 mockDashboardIndicadores.patrimoniais.filter(p => p.status === 'neutro').length}
              </div>
              <div className="text-sm text-yellow-800 mt-1">Indicadores Neutros</div>
              <div className="text-xs text-yellow-600 mt-1">
                Próximos à meta
              </div>
            </div>
            
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600">
                {mockDashboardIndicadores.financeiros.filter(f => f.status === 'negativo').length +
                 mockDashboardIndicadores.operacionais.filter(o => o.status === 'negativo').length +
                 mockDashboardIndicadores.patrimoniais.filter(p => p.status === 'negativo').length}
              </div>
              <div className="text-sm text-red-800 mt-1">Indicadores Negativos</div>
              <div className="text-xs text-red-600 mt-1">
                Abaixo da meta
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
