'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { mockDashboardFiscal } from '@/lib/mocks';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Package,
  Users,
  Calculator,
  FileText
} from 'lucide-react';

export default function FiscalPage() {
  const [filtros, setFiltros] = React.useState({
    periodo_inicio: '2024-01-01',
    periodo_fim: '2024-12-31'
  });

  // Preparar dados para gráficos
  const dadosEvolucaoImpostos = mockDashboardFiscal.evolucao_impostos.map(item => ({
    name: item.mes,
    'Imposto Devido': item.imposto_devido,
    'Saldo a Recuperar': item.saldo_recuperar
  }));

  const dadosTopProdutos = mockDashboardFiscal.top_produtos.map(item => ({
    name: item.produto,
    value: item.valor,
    color: item.produto === 'Serviços Contábeis' ? '#3b82f6' :
           item.produto === 'Consultoria Fiscal' ? '#10b981' :
           item.produto === 'Auditoria' ? '#f59e0b' :
           item.produto === 'Planejamento Tributário' ? '#ef4444' : '#8b5cf6'
  }));

  const dadosTopClientes = mockDashboardFiscal.top_clientes.map(item => ({
    name: item.cliente,
    value: item.valor,
    color: item.cliente === 'Empresa ABC Ltda' ? '#3b82f6' :
           item.cliente === 'Comércio XYZ S/A' ? '#10b981' :
           item.cliente === 'Indústria DEF Ltda' ? '#f59e0b' :
           item.cliente === 'Tecnologia GHI ME' ? '#ef4444' : '#8b5cf6'
  }));

  const dadosImpostos = mockDashboardFiscal.impostos_devidos.map(item => ({
    name: item.tipo,
    value: item.valor,
    color: item.tipo === 'ICMS' ? '#3b82f6' :
           item.tipo === 'IPI' ? '#10b981' :
           item.tipo === 'PIS' ? '#f59e0b' :
           item.tipo === 'COFINS' ? '#ef4444' :
           item.tipo === 'IRPJ' ? '#8b5cf6' : '#f97316'
  }));

  const dadosGeolocalizacao = mockDashboardFiscal.geolocalizacao.map(item => ({
    name: item.uf,
    value: item.valor,
    quantidade: item.quantidade
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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Fiscal</h1>
          <p className="text-gray-600 mt-1">
            Análise de faturamento, produtos e impostos
          </p>
        </div>
        <ExportButtons
          data={[mockDashboardFiscal]}
          nomeArquivo="dashboard_fiscal"
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

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Faturamento Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {mockDashboardFiscal.faturamento_total.toLocaleString('pt-BR')}
            </div>
            <div className="flex items-center mt-1">
              {mockDashboardFiscal.variacao_faturamento > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span className={`text-sm ${
                mockDashboardFiscal.variacao_faturamento > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {mockDashboardFiscal.variacao_faturamento > 0 ? '+' : ''}{mockDashboardFiscal.variacao_faturamento}%
              </span>
              <span className="text-sm text-gray-500 ml-2">vs anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Package className="h-4 w-4 mr-2" />
              Produtos/Serviços
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {mockDashboardFiscal.top_produtos.length}
            </div>
            <div className="text-sm text-gray-500">
              Categorias ativas
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Clientes Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {mockDashboardFiscal.top_clientes.length}
            </div>
            <div className="text-sm text-gray-500">
              Principais clientes
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Estados Atendidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {mockDashboardFiscal.geolocalizacao.length}
            </div>
            <div className="text-sm text-gray-500">
              Unidades federativas
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={dadosEvolucaoImpostos}
          lines={[
            { dataKey: 'Imposto Devido', stroke: '#ef4444', name: 'Imposto Devido' },
            { dataKey: 'Saldo a Recuperar', stroke: '#10b981', name: 'Saldo a Recuperar' }
          ]}
          title="Evolução de Impostos"
          description="Impostos devidos vs saldo a recuperar por mês"
          height={350}
        />
        
        <PieChart
          data={dadosTopProdutos}
          title="Top Produtos/Serviços"
          description="Distribuição do faturamento por categoria"
          height={350}
          showLabel={true}
        />
      </div>

      {/* Segunda linha de gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChart
          data={dadosTopClientes}
          title="Top Clientes"
          description="Distribuição do faturamento por cliente"
          height={350}
          showLabel={true}
        />

        <BarChart
          data={dadosGeolocalizacao}
          bars={[
            { dataKey: 'valor', fill: '#3b82f6', name: 'Faturamento (R$)' }
          ]}
          title="Faturamento por Estado"
          description="Distribuição geográfica do faturamento"
          height={350}
        />
      </div>

      {/* Tabelas Detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Produtos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Top Produtos/Serviços
            </CardTitle>
            <CardDescription>
              Produtos e serviços mais relevantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardFiscal.top_produtos.map((produto, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{produto.produto}</div>
                    <div className="text-sm text-gray-500">
                      {produto.quantidade} vendas • {produto.percentual}% do total
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      R$ {produto.valor.toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Clientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Top Clientes
            </CardTitle>
            <CardDescription>
              Clientes com maior faturamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardFiscal.top_clientes.map((cliente, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{cliente.cliente}</div>
                    <div className="text-sm text-gray-500">
                      {cliente.percentual}% do faturamento
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      R$ {cliente.valor.toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impostos Devidos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="h-5 w-5 mr-2" />
            Impostos Devidos
          </CardTitle>
          <CardDescription>
            Distribuição dos impostos por tipo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDashboardFiscal.impostos_devidos.map((imposto, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{imposto.tipo}</span>
                  <span className="text-sm text-gray-500">{imposto.percentual}%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  R$ {imposto.valor.toLocaleString('pt-BR')}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${imposto.percentual}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
