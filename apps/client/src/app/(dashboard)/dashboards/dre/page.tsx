'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { mockDashboardDRE } from '@/lib/mocks';
import { 
  FileText, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  BarChart3,
  PieChart as PieChartIcon,
  Calculator,
  Target
} from 'lucide-react';

export default function DREPage() {
  const [filtros, setFiltros] = React.useState({
    periodo_inicio: '2024-01-01',
    periodo_fim: '2024-12-31'
  });

  // Preparar dados para gráficos
  const dadosEvolucao = mockDashboardDRE.evolucao.map(item => ({
    name: item.mes,
    'Receita Bruta': item.receita_bruta,
    'Receita Líquida': item.receita_liquida,
    'Lucro Bruto': item.lucro_bruto,
    'Lucro Líquido': item.lucro_liquido
  }));

  const dadosComposicao = mockDashboardDRE.composicao.map(item => ({
    item: item.item,
    valor_atual: item.valor_atual,
    valor_anterior: item.valor_anterior,
    variacao: item.variacao
  }));

  const dadosAnaliseVertical = mockDashboardDRE.analise_vertical.map(item => ({
    item: item.item,
    percentual: item.percentual
  }));

  const dadosAnaliseHorizontal = mockDashboardDRE.analise_horizontal.map(item => ({
    item: item.item,
    variacao_percentual: item.variacao_percentual
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

  const getVariacaoColor = (variacao: number) => {
    if (variacao > 0) return 'text-green-600';
    if (variacao < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getVariacaoIcon = (variacao: number) => {
    if (variacao > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (variacao < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Target className="h-4 w-4 text-gray-600" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard DRE</h1>
          <p className="text-gray-600 mt-1">
            Demonstração de Resultados do Exercício
          </p>
        </div>
        <ExportButtons
          data={[mockDashboardDRE]}
          nomeArquivo="dashboard_dre"
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

      {/* Resumo Executivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Receita Bruta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardDRE.composicao[0].valor_atual.toLocaleString('pt-BR')}
            </div>
            <div className="flex items-center mt-1">
              {getVariacaoIcon(mockDashboardDRE.composicao[0].variacao)}
              <span className={`text-sm ml-1 ${getVariacaoColor(mockDashboardDRE.composicao[0].variacao)}`}>
                {mockDashboardDRE.composicao[0].variacao > 0 ? '+' : ''}{mockDashboardDRE.composicao[0].variacao}%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Calculator className="h-4 w-4 mr-2" />
              Receita Líquida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardDRE.composicao[2].valor_atual.toLocaleString('pt-BR')}
            </div>
            <div className="flex items-center mt-1">
              {getVariacaoIcon(mockDashboardDRE.composicao[2].variacao)}
              <span className={`text-sm ml-1 ${getVariacaoColor(mockDashboardDRE.composicao[2].variacao)}`}>
                {mockDashboardDRE.composicao[2].variacao > 0 ? '+' : ''}{mockDashboardDRE.composicao[2].variacao}%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Lucro Bruto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardDRE.composicao[4].valor_atual.toLocaleString('pt-BR')}
            </div>
            <div className="flex items-center mt-1">
              {getVariacaoIcon(mockDashboardDRE.composicao[4].variacao)}
              <span className={`text-sm ml-1 ${getVariacaoColor(mockDashboardDRE.composicao[4].variacao)}`}>
                {mockDashboardDRE.composicao[4].variacao > 0 ? '+' : ''}{mockDashboardDRE.composicao[4].variacao}%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Lucro Líquido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {mockDashboardDRE.composicao[10].valor_atual.toLocaleString('pt-BR')}
            </div>
            <div className="flex items-center mt-1">
              {getVariacaoIcon(mockDashboardDRE.composicao[10].variacao)}
              <span className={`text-sm ml-1 ${getVariacaoColor(mockDashboardDRE.composicao[10].variacao)}`}>
                {mockDashboardDRE.composicao[10].variacao > 0 ? '+' : ''}{mockDashboardDRE.composicao[10].variacao}%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Evolução */}
      <LineChart
        data={dadosEvolucao}
        lines={[
          { dataKey: 'Receita Bruta', stroke: '#3b82f6', name: 'Receita Bruta' },
          { dataKey: 'Receita Líquida', stroke: '#10b981', name: 'Receita Líquida' },
          { dataKey: 'Lucro Bruto', stroke: '#f59e0b', name: 'Lucro Bruto' },
          { dataKey: 'Lucro Líquido', stroke: '#ef4444', name: 'Lucro Líquido' }
        ]}
        title="Evolução da DRE"
        description="Evolução mensal dos principais indicadores da DRE"
        height={400}
      />

      {/* Composição da DRE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Composição da DRE
          </CardTitle>
          <CardDescription>
            Estrutura detalhada da Demonstração de Resultados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDashboardDRE.composicao.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.item}</div>
                  <div className="text-sm text-gray-500">
                    {item.percentual_receita}% da receita bruta
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    R$ {item.valor_atual.toLocaleString('pt-BR')}
                  </div>
                  <div className="flex items-center justify-end mt-1">
                    {getVariacaoIcon(item.variacao)}
                    <span className={`text-sm ml-1 ${getVariacaoColor(item.variacao)}`}>
                      {item.variacao > 0 ? '+' : ''}{item.variacao}%
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      vs {item.valor_anterior.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análises Vertical e Horizontal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Análise Vertical */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChartIcon className="h-5 w-5 mr-2" />
              Análise Vertical
            </CardTitle>
            <CardDescription>
              Participação percentual de cada item na receita bruta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDashboardDRE.analise_vertical.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{item.item}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      {item.percentual}%
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.percentual}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Análise Horizontal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Análise Horizontal
            </CardTitle>
            <CardDescription>
              Variação percentual de cada item em relação ao período anterior
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDashboardDRE.analise_horizontal.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{item.item}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      {getVariacaoIcon(item.variacao_percentual)}
                      <span className={`text-lg font-bold ml-1 ${getVariacaoColor(item.variacao_percentual)}`}>
                        {item.variacao_percentual > 0 ? '+' : ''}{item.variacao_percentual}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Margens e Indicadores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="h-5 w-5 mr-2" />
            Margens e Indicadores
          </CardTitle>
          <CardDescription>
            Principais indicadores de rentabilidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                {((mockDashboardDRE.composicao[4].valor_atual / mockDashboardDRE.composicao[2].valor_atual) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-blue-800 mt-1">Margem Bruta</div>
              <div className="text-xs text-blue-600 mt-1">
                Lucro Bruto / Receita Líquida × 100
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {((mockDashboardDRE.composicao[6].valor_atual / mockDashboardDRE.composicao[2].valor_atual) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-green-800 mt-1">Margem Operacional</div>
              <div className="text-xs text-green-600 mt-1">
                Lucro Operacional / Receita Líquida × 100
              </div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {((mockDashboardDRE.composicao[10].valor_atual / mockDashboardDRE.composicao[2].valor_atual) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-purple-800 mt-1">Margem Líquida</div>
              <div className="text-xs text-purple-600 mt-1">
                Lucro Líquido / Receita Líquida × 100
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
