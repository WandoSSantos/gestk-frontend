'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { mockDashboardDemografico } from '@/lib/mocks';
import { 
  Users, 
  TrendingUp, 
  UserCheck, 
  Calendar, 
  UserPlus, 
  UserMinus, 
  AlertTriangle,
  RotateCcw,
  Filter,
  Expand
} from 'lucide-react';

export default function DemograficoPage() {
  const [filtros, setFiltros] = useState({
    dataInicio: '2024-01-01',
    dataFim: '2024-12-31',
    empresa: '',
    departamento: '',
    cargo: '',
    categoria: ''
  });

  const [statusFiltros, setStatusFiltros] = useState({
    ativos: true,
    contratacoes: false,
    demissoes: false,
    masContratacoes: false
  });

  // Preparar dados para gráficos
  const dadosEvolucao = mockDashboardDemografico.evolucao_mensal.map(item => ({
    name: item.mes,
    'Total': item.total,
    'Admissões': item.admissões,
    'Demissões': item.demissões
  }));

  const dadosIdade = mockDashboardDemografico.distribuicao_idade.map(item => ({
    name: item.faixa,
    value: item.quantidade,
    color: item.faixa === '18-25' ? '#3b82f6' :
           item.faixa === '26-35' ? '#10b981' :
           item.faixa === '36-45' ? '#f59e0b' :
           item.faixa === '46-55' ? '#ef4444' : '#8b5cf6'
  }));

  const dadosEscolaridade = mockDashboardDemografico.distribuicao_escolaridade.map(item => ({
    name: item.nivel,
    value: item.quantidade,
    color: item.nivel === 'Ensino Médio' ? '#3b82f6' :
           item.nivel === 'Superior Incompleto' ? '#10b981' :
           item.nivel === 'Superior Completo' ? '#f59e0b' : '#8b5cf6'
  }));

  const dadosCargo = mockDashboardDemografico.distribuicao_cargo.map(item => ({
    name: item.cargo,
    value: item.quantidade,
    color: item.cargo === 'Contador' ? '#3b82f6' :
           item.cargo === 'Analista' ? '#10b981' :
           item.cargo === 'Assistente' ? '#f59e0b' :
           item.cargo === 'Gerente' ? '#ef4444' : '#8b5cf6'
  }));

  const dadosGenero = mockDashboardDemografico.distribuicao_genero.map(item => ({
    name: item.genero,
    value: item.quantidade,
    color: item.genero === 'Feminino' ? '#ec4899' : '#3b82f6'
  }));

  // Dados para lista de colaboradores
  const colaboradores = [
    { nome: 'Ana Silva', departamento: 'Contabilidade', faturamento: 'R$ 15.000' },
    { nome: 'Carlos Santos', departamento: 'Fiscal', faturamento: 'R$ 12.500' },
    { nome: 'Maria Oliveira', departamento: 'RH', faturamento: 'R$ 8.000' },
    { nome: 'João Costa', departamento: 'Contabilidade', faturamento: 'R$ 18.000' },
    { nome: 'Fernanda Lima', departamento: 'Fiscal', faturamento: 'R$ 14.000' }
  ];

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros(prev => ({ ...prev, [campo]: valor }));
  };

  const handleStatusChange = (status: string) => {
    setStatusFiltros(prev => ({ ...prev, [status]: !prev[status] }));
  };

  const resetarFiltros = () => {
    setFiltros({
      dataInicio: '2024-01-01',
      dataFim: '2024-12-31',
      empresa: '',
      departamento: '',
      cargo: '',
      categoria: ''
    });
    setStatusFiltros({
      ativos: true,
      contratacoes: false,
      demissoes: false,
      masContratacoes: false
    });
  };

  return (
    <div className="space-y-6">
      {/* Header com Filtros de Data */}
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Módulo Gestão</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <AlertTriangle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <Users className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">Data Inicial</label>
            <Input
              type="date"
              value={filtros.dataInicio}
              onChange={(e) => handleFiltroChange('dataInicio', e.target.value)}
              className="bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Data Final</label>
            <Input
              type="date"
              value={filtros.dataFim}
              onChange={(e) => handleFiltroChange('dataFim', e.target.value)}
              className="bg-white text-gray-900"
            />
          </div>
          <div className="flex items-end">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Pesquisar
            </Button>
          </div>
        </div>
      </div>

      {/* Painel Demográfico - Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Painel Demográfico</span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={resetarFiltros}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Redefinir Filtros
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Filtros de Status */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Status:</span>
              <Button
                variant={statusFiltros.ativos ? "default" : "outline"}
                size="sm"
                onClick={() => handleStatusChange('ativos')}
                className={statusFiltros.ativos ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Ativos
              </Button>
              <Button
                variant={statusFiltros.contratacoes ? "default" : "outline"}
                size="sm"
                onClick={() => handleStatusChange('contratacoes')}
                className={statusFiltros.contratacoes ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Contratações
              </Button>
              <Button
                variant={statusFiltros.demissoes ? "default" : "outline"}
                size="sm"
                onClick={() => handleStatusChange('demissoes')}
                className={statusFiltros.demissoes ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Demissões
              </Button>
              <Button
                variant={statusFiltros.masContratacoes ? "default" : "outline"}
                size="sm"
                onClick={() => handleStatusChange('masContratacoes')}
                className={statusFiltros.masContratacoes ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Más Contratações
              </Button>
            </div>

            {/* Filtros de Dados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selecione uma empresa
                </label>
                <select
                  value={filtros.empresa}
                  onChange={(e) => handleFiltroChange('empresa', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todas as empresas</option>
                  <option value="empresa1">Empresa 1</option>
                  <option value="empresa2">Empresa 2</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Departamento
                </label>
                <select
                  value={filtros.departamento}
                  onChange={(e) => handleFiltroChange('departamento', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todos os departamentos</option>
                  <option value="contabilidade">Contabilidade</option>
                  <option value="fiscal">Fiscal</option>
                  <option value="rh">RH</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selecione um cargo
                </label>
                <select
                  value={filtros.cargo}
                  onChange={(e) => handleFiltroChange('cargo', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todos os cargos</option>
                  <option value="contador">Contador</option>
                  <option value="analista">Analista</option>
                  <option value="assistente">Assistente</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selecione uma categoria
                </label>
                <select
                  value={filtros.categoria}
                  onChange={(e) => handleFiltroChange('categoria', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todas as categorias</option>
                  <option value="efetivo">Efetivo</option>
                  <option value="temporario">Temporário</option>
                  <option value="terceirizado">Terceirizado</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className={`${statusFiltros.demissoes ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
          <CardContent className="p-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${statusFiltros.demissoes ? 'text-red-600' : 'text-gray-900'}`}>
                {mockDashboardDemografico.indicadores.turnover}%
              </div>
              <div className="text-sm text-gray-600">Turnover</div>
            </div>
          </CardContent>
        </Card>

        <Card className={`${statusFiltros.ativos ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
          <CardContent className="p-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${statusFiltros.ativos ? 'text-green-600' : 'text-gray-900'}`}>
                {mockDashboardDemografico.indicadores.total_colaboradores}
              </div>
              <div className="text-sm text-gray-600">Ativos</div>
            </div>
          </CardContent>
        </Card>

        <Card className={`${statusFiltros.contratacoes ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
          <CardContent className="p-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${statusFiltros.contratacoes ? 'text-green-600' : 'text-gray-900'}`}>
                12
              </div>
              <div className="text-sm text-gray-600">Contratações</div>
            </div>
          </CardContent>
        </Card>

        <Card className={`${statusFiltros.demissoes ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
          <CardContent className="p-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${statusFiltros.demissoes ? 'text-red-600' : 'text-gray-900'}`}>
                3
              </div>
              <div className="text-sm text-gray-600">Demissões</div>
            </div>
          </CardContent>
        </Card>

        <Card className={`${statusFiltros.masContratacoes ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
          <CardContent className="p-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${statusFiltros.masContratacoes ? 'text-red-600' : 'text-gray-900'}`}>
                2
              </div>
              <div className="text-sm text-gray-600">Períodos de Afastamento</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Layout Principal - Gráfico Grande + Cards Laterais */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico Principal - Evolução */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Evolução Demográfica</span>
                <Button variant="ghost" size="sm">
                  <Expand className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                Movimentação de colaboradores ao longo do tempo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={dadosEvolucao}
                lines={[
                  { dataKey: 'Total', stroke: '#3b82f6', name: 'Total Colaboradores' },
                  { dataKey: 'Admissões', stroke: '#10b981', name: 'Admissões' },
                  { dataKey: 'Demissões', stroke: '#ef4444', name: 'Demissões' }
                ]}
                height={400}
              />
            </CardContent>
          </Card>
        </div>

        {/* Cards Laterais */}
        <div className="space-y-4">
          {/* Colaboradores por Gênero */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-sm">
                <span>Colaboradores por Gênero</span>
                <Button variant="ghost" size="sm">
                  <Expand className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockDashboardDemografico.distribuicao_genero.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold ${
                        item.genero === 'Feminino' ? 'bg-pink-500' : 'bg-blue-500'
                      }`}>
                        {item.genero === 'Feminino' ? '♀' : '♂'}
                      </div>
                      <span className="text-sm font-medium">{item.genero}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{item.percentual}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Colaboradores por Faixa Etária */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-sm">
                <span>Colaboradores por Faixa Etária</span>
                <Button variant="ghost" size="sm">
                  <Expand className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={dadosIdade}
                height={200}
                showLabel={true}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Segunda Linha - Gráficos de Distribuição */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Colaboradores por Categoria */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Colaboradores por Categoria</span>
              <Button variant="ghost" size="sm">
                <Expand className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={dadosEscolaridade}
              xKey="name"
              yKey="value"
              color="#3b82f6"
              height={250}
            />
          </CardContent>
        </Card>

        {/* Colaboradores por Escolaridade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Colaboradores por Escolaridade</span>
              <Button variant="ghost" size="sm">
                <Expand className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={dadosEscolaridade}
              height={250}
              showLabel={true}
            />
          </CardContent>
        </Card>
      </div>

      {/* Terceira Linha - Lista e Gráfico de Cargo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de Colaboradores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Lista de Colaboradores</span>
              <Button variant="ghost" size="sm">
                <Expand className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4 py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded-t-lg">
                <div>NOME</div>
                <div>DEPARTAMENTO</div>
                <div>FATURAMENTO</div>
              </div>
              {colaboradores.map((colaborador, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-3 px-4 border-b border-gray-200 text-sm">
                  <div className="font-medium">{colaborador.nome}</div>
                  <div className="text-gray-600">{colaborador.departamento}</div>
                  <div className="text-gray-600">{colaborador.faturamento}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Colaboradores por Cargo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Colaboradores por Cargo</span>
              <Button variant="ghost" size="sm">
                <Expand className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={dadosCargo}
              xKey="name"
              yKey="value"
              color="#10b981"
              height={300}
            />
          </CardContent>
        </Card>
      </div>

      {/* Botão de Exportação */}
      <div className="flex justify-end">
        <ExportButtons
          data={[mockDashboardDemografico]}
          nomeArquivo="dashboard_demografico"
          filtros={filtros}
        />
      </div>
    </div>
  );
}