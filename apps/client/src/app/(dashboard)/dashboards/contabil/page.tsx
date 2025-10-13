'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { mockDashboardContabil } from '@/lib/mocks';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  BarChart3,
  PieChart as PieChartIcon,
  Target
} from 'lucide-react';

export default function ContabilPage() {
  const [filtros, setFiltros] = React.useState({
    periodo_inicio: '2024-01-01',
    periodo_fim: '2024-12-31'
  });

  // Preparar dados para gráficos
  const dadosEvolucao = mockDashboardContabil.evolucao_mensal.map(item => ({
    name: item.mes,
    'Receita': item.receita,
    'Despesa': item.despesa,
    'Lucro': item.lucro
  }));

  const dadosGrupos = mockDashboardContabil.grupos_contas.map(item => ({
    name: item.grupo,
    value: item.valor,
    color: item.grupo === 'Ativo Circulante' ? '#3b82f6' :
           item.grupo === 'Ativo Não Circulante' ? '#10b981' :
           item.grupo === 'Passivo Circulante' ? '#ef4444' :
           item.grupo === 'Passivo Não Circulante' ? '#f59e0b' : '#8b5cf6'
  }));

  const dadosTopContas = mockDashboardContabil.top_contas.map(item => ({
    name: item.conta,
    value: item.valor,
    grupo: item.grupo
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Contábil</h1>
          <p className="text-gray-600 mt-1">
            Indicadores contábeis e evolução financeira
          </p>
        </div>
        <ExportButtons
          data={[mockDashboardContabil]}
          nomeArquivo="dashboard_contabil"
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

      {/* Cards de Indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Calculator className="h-4 w-4 mr-2" />
              Ativo Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardContabil.indicadores.ativo_total.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-gray-500">
              Patrimônio ativo
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Passivo Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardContabil.indicadores.passivo_total.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-gray-500">
              Obrigações
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Patrimônio Líquido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardContabil.indicadores.patrimonio_liquido.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-gray-500">
              Capital próprio
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Receita Bruta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardContabil.indicadores.receita_bruta.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-gray-500">
              Faturamento
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Lucro Líquido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {mockDashboardContabil.indicadores.lucro_liquido.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-gray-500">
              Resultado final
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={dadosEvolucao}
          lines={[
            { dataKey: 'Receita', stroke: '#10b981', name: 'Receita' },
            { dataKey: 'Despesa', stroke: '#ef4444', name: 'Despesa' },
            { dataKey: 'Lucro', stroke: '#3b82f6', name: 'Lucro' }
          ]}
          title="Evolução Mensal"
          description="Receita, despesas e lucro ao longo do tempo"
          height={350}
        />
        
        <PieChart
          data={dadosGrupos}
          title="Distribuição por Grupos"
          description="Composição do patrimônio por grupos de contas"
          height={350}
          showLabel={true}
        />
      </div>

      {/* Tabelas Detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grupos de Contas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChartIcon className="h-5 w-5 mr-2" />
              Grupos de Contas
            </CardTitle>
            <CardDescription>
              Distribuição do patrimônio por grupos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardContabil.grupos_contas.map((grupo, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{grupo.grupo}</div>
                    <div className="text-sm text-gray-500">
                      {grupo.percentual}% do total
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      R$ {grupo.valor.toLocaleString('pt-BR')}
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${grupo.percentual}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Contas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Top 5 Contas
            </CardTitle>
            <CardDescription>
              Contas com maior valor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardContabil.top_contas.map((conta, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{conta.conta}</div>
                    <div className="text-sm text-gray-500">
                      {conta.grupo}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      R$ {conta.valor.toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Liquidez */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="h-5 w-5 mr-2" />
            Análise de Liquidez
          </CardTitle>
          <CardDescription>
            Indicadores de liquidez e solvência
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                {((mockDashboardContabil.indicadores.ativo_total - mockDashboardContabil.indicadores.passivo_total) / mockDashboardContabil.indicadores.passivo_total * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-blue-800 mt-1">Margem de Segurança</div>
              <div className="text-xs text-blue-600 mt-1">
                (Ativo - Passivo) / Passivo × 100
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {(mockDashboardContabil.indicadores.lucro_liquido / mockDashboardContabil.indicadores.receita_bruta * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-green-800 mt-1">Margem de Lucro</div>
              <div className="text-xs text-green-600 mt-1">
                Lucro Líquido / Receita Bruta × 100
              </div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {(mockDashboardContabil.indicadores.ativo_total / mockDashboardContabil.indicadores.passivo_total).toFixed(2)}
              </div>
              <div className="text-sm text-purple-800 mt-1">Índice de Solvência</div>
              <div className="text-xs text-purple-600 mt-1">
                Ativo Total / Passivo Total
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
