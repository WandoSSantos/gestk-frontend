'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { 
  mockCarteiraClientes, 
  mockCategoriasClientes, 
  mockEvolucaoMensal,
  mockUsuariosAtividade,
  mockProdutividadeUsuario,
  mockKPIEscritorio
} from '@/lib/mocks';
import { 
  Users, 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Activity,
  UserCheck,
  Briefcase,
  BarChart3
} from 'lucide-react';

export default function DashboardPage() {
  // Preparar dados para gráficos
  const dadosEvolucao = mockEvolucaoMensal.map(item => ({
    name: item.mes,
    'Total Clientes': item.total_clientes,
    'Novos Clientes': item.novos_clientes,
    'Clientes Inativos': item.clientes_inativos
  }));

  const dadosCategorias = mockCategoriasClientes.map(item => ({
    name: item.categoria,
    value: item.quantidade,
    color: item.categoria === 'Ativos' ? '#10b981' : 
           item.categoria === 'Inativos' ? '#ef4444' :
           item.categoria === 'Novos' ? '#3b82f6' : '#f59e0b'
  }));

  const dadosProdutividade = mockProdutividadeUsuario.map(usuario => ({
    name: usuario.nome.split(' ')[0], // Primeiro nome
    'Horas Trabalhadas': usuario.total_horas,
    'Atividades': usuario.atividades_realizadas
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard GESTK</h1>
        <p className="text-gray-600 mt-1">
          Visão geral do sistema de gestão contábil
        </p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Total de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {mockCarteiraClientes.length}
            </div>
            <div className="text-sm text-gray-500">
              Carteira ativa
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <UserCheck className="h-4 w-4 mr-2" />
              Usuários Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {mockUsuariosAtividade.filter(u => u.ativo).length}
            </div>
            <div className="text-sm text-gray-500">
              Colaboradores online
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Crescimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              +12.5%
            </div>
            <div className="text-sm text-gray-500">
              vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Receita Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ 125.000
            </div>
            <div className="text-sm text-gray-500">
              Dezembro 2024
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={dadosEvolucao}
          lines={[
            { dataKey: 'Total Clientes', stroke: '#3b82f6', name: 'Total Clientes' },
            { dataKey: 'Novos Clientes', stroke: '#10b981', name: 'Novos Clientes' },
            { dataKey: 'Clientes Inativos', stroke: '#ef4444', name: 'Clientes Inativos' }
          ]}
          title="Evolução da Carteira"
          description="Crescimento mensal de clientes"
          height={350}
        />
        
        <PieChart
          data={dadosCategorias}
          title="Distribuição por Status"
          description="Proporção de clientes por categoria"
          height={350}
          showLabel={true}
        />
      </div>

      {/* Segunda linha de gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={dadosProdutividade}
          bars={[
            { dataKey: 'Horas Trabalhadas', fill: '#3b82f6', name: 'Horas Trabalhadas' },
            { dataKey: 'Atividades', fill: '#10b981', name: 'Atividades' }
          ]}
          title="Produtividade dos Usuários"
          description="Horas trabalhadas e atividades realizadas"
          height={350}
        />

        <Card>
          <CardHeader>
            <CardTitle>KPIs do Escritório</CardTitle>
            <CardDescription>
              Principais indicadores de performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockKPIEscritorio.map((kpi, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{kpi.nome}</div>
                    <div className="text-sm text-gray-500">{kpi.unidade}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      {kpi.valor.toLocaleString('pt-BR')}
                    </div>
                    <div className={`text-sm ${
                      kpi.variacao_percentual > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.variacao_percentual > 0 ? '+' : ''}{kpi.variacao_percentual}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ações Rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Acesso rápido às principais funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="/gestao/carteira"
              className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-blue-900">Carteira</div>
                <div className="text-sm text-blue-600">Gestão de clientes</div>
              </div>
            </a>

            <a 
              href="/gestao/usuarios"
              className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <UserCheck className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="font-medium text-green-900">Usuários</div>
                <div className="text-sm text-green-600">Gestão de usuários</div>
              </div>
            </a>

            <a 
              href="/dashboards/fiscal"
              className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="font-medium text-purple-900">Dashboards</div>
                <div className="text-sm text-purple-600">Análises e relatórios</div>
              </div>
            </a>

            <a 
              href="/gestao/escritorio"
              className="flex items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              <Building2 className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <div className="font-medium text-orange-900">Escritório</div>
                <div className="text-sm text-orange-600">Análise do escritório</div>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}