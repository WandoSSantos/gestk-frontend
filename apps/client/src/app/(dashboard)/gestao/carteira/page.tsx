'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { DataTable } from '@/components/tables';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { AniversarioParceriaModal, SociosAniversariantesModal } from '@/components/modals';
import { 
  mockCarteiraClientes, 
  mockCategoriasClientes, 
  mockEvolucaoMensal,
  mockAniversarioParceria,
  mockSociosAniversariantes,
  mockEmpresasRegimeTributario,
  mockEmpresasRamoAtividade
} from '@/lib/mocks';
import type { CarteiraCliente, FiltrosCarteira } from '@gestk/shared';
import { ColumnDef } from '@tanstack/react-table';
import { Badge, Button } from '@gestk/ui';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, Users, Building, TrendingUp, PieChart as PieChartIcon, BarChart3 } from 'lucide-react';

const statusColors = {
  ativo: 'bg-green-100 text-green-800',
  inativo: 'bg-red-100 text-red-800',
  novo: 'bg-blue-100 text-blue-800',
  sem_movimentacao: 'bg-yellow-100 text-yellow-800'
};

const statusLabels = {
  ativo: 'Ativo',
  inativo: 'Inativo',
  novo: 'Novo',
  sem_movimentacao: 'Sem Movimentação'
};

const regimeFiscalLabels = {
  1: 'Simples Nacional',
  2: 'Lucro Presumido',
  3: 'Lucro Real',
  4: 'MEI'
};

const ramoAtividadeLabels = {
  1: 'Comércio',
  2: 'Indústria',
  3: 'Serviços',
  4: 'Agronegócio',
  5: 'Tecnologia',
  6: 'Construção'
};

const columns: ColumnDef<CarteiraCliente>[] = [
  {
    accessorKey: 'razao_social',
    header: 'Razão Social',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('razao_social')}</div>
    ),
  },
  {
    accessorKey: 'cnpj',
    header: 'CNPJ',
    cell: ({ row }) => (
      <div className="font-mono text-sm">{row.getValue('cnpj')}</div>
    ),
  },
  {
    accessorKey: 'regime_fiscal_display',
    header: 'Regime Fiscal',
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue('regime_fiscal_display')}</div>
    ),
  },
  {
    accessorKey: 'ramo_atividade_display',
    header: 'Ramo de Atividade',
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue('ramo_atividade_display')}</div>
    ),
  },
  {
    accessorKey: 'status_cliente',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status_cliente') as keyof typeof statusColors;
      return (
        <Badge className={statusColors[status]}>
          {statusLabels[status]}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'data_abertura',
    header: 'Data Abertura',
    cell: ({ row }) => {
      const date = new Date(row.getValue('data_abertura'));
      return (
        <div className="text-sm">
          {format(date, 'dd/MM/yyyy', { locale: ptBR })}
        </div>
      );
    },
  },
  {
    accessorKey: 'tempo_contrato_meses',
    header: 'Tempo Contrato',
    cell: ({ row }) => (
      <div className="text-sm">
        {row.getValue('tempo_contrato_meses')} meses
      </div>
    ),
  },
];

export default function CarteiraPage() {
  const [filtros, setFiltros] = useState<FiltrosCarteira>({});
  const [dadosFiltrados, setDadosFiltrados] = useState<CarteiraCliente[]>(mockCarteiraClientes);
  const [showAniversarioParceria, setShowAniversarioParceria] = useState(false);
  const [showSociosAniversariantes, setShowSociosAniversariantes] = useState(false);

  const handleFiltersChange = (novosFiltros: FiltrosCarteira) => {
    setFiltros(novosFiltros);
    
    // Aplicar filtros aos dados
    let dados = [...mockCarteiraClientes];
    
    if (novosFiltros.regime_fiscal && novosFiltros.regime_fiscal.length > 0) {
      dados = dados.filter(cliente => 
        novosFiltros.regime_fiscal!.includes(cliente.regime_fiscal)
      );
    }
    
    if (novosFiltros.ramo_atividade && novosFiltros.ramo_atividade.length > 0) {
      dados = dados.filter(cliente => 
        novosFiltros.ramo_atividade!.includes(cliente.ramo_atividade)
      );
    }
    
    if (novosFiltros.status_cliente && novosFiltros.status_cliente.length > 0) {
      dados = dados.filter(cliente => 
        novosFiltros.status_cliente!.includes(cliente.status_cliente)
      );
    }
    
    if (novosFiltros.busca) {
      const busca = novosFiltros.busca.toLowerCase();
      dados = dados.filter(cliente => 
        cliente.razao_social.toLowerCase().includes(busca) ||
        cliente.cnpj.includes(busca)
      );
    }
    
    setDadosFiltrados(dados);
  };

  const handleClearFilters = () => {
    setFiltros({});
    setDadosFiltrados(mockCarteiraClientes);
  };

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Carteira de Clientes</h1>
          <p className="text-gray-600 mt-1">
            Gestão e análise da carteira de clientes do escritório
          </p>
        </div>
        <ExportButtons
          data={dadosFiltrados}
          nomeArquivo="carteira_clientes"
          colunas={['razao_social', 'cnpj', 'regime_fiscal_display', 'ramo_atividade_display', 'status_cliente']}
          filtros={filtros}
        />
      </div>

      {/* Filtros */}
      <div className="space-y-4">
        <GlobalFilters
          filters={filtros}
          onFiltersChange={handleFiltersChange}
          onClearFilters={handleClearFilters}
          showSearch={true}
          showPeriod={true}
          showRegimeFiscal={true}
          showRamoAtividade={true}
          showStatus={true}
        />
        
        {/* Filtros Específicos */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Período:</label>
            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filtros.data_inicio || ''}
              onChange={(e) => handleFiltersChange({ ...filtros, data_inicio: e.target.value })}
            />
            <span className="text-gray-500">até</span>
            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filtros.data_fim || ''}
              onChange={(e) => handleFiltersChange({ ...filtros, data_fim: e.target.value })}
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAniversarioParceria(true)}
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Ver Aniversários
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSociosAniversariantes(true)}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Ver Sócios
          </Button>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {mockCategoriasClientes.map((categoria, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {categoria.categoria}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {categoria.quantidade}
              </div>
              <div className="text-sm text-gray-500">
                {categoria.percentual}% do total
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* Aniversário de Parceria */}
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowAniversarioParceria(true)}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Aniversário de Parceria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {mockAniversarioParceria.length}
            </div>
            <div className="text-sm text-gray-500">
              empresas
            </div>
          </CardContent>
        </Card>
        
        {/* Sócios Aniversariantes */}
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowSociosAniversariantes(true)}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Sócios Aniversariantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockSociosAniversariantes.length}
            </div>
            <div className="text-sm text-gray-500">
              sócios
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={dadosEvolucao}
          lines={[
            { dataKey: 'Total Clientes', stroke: '#3b82f6', name: 'Total Clientes' },
            { dataKey: 'Novos Clientes', stroke: '#10b981', name: 'Novos Clientes' },
            { dataKey: 'Clientes Inativos', stroke: '#ef4444', name: 'Clientes Inativos' }
          ]}
          title="Evolução Mensal"
          description="Crescimento da carteira de clientes ao longo do tempo"
          height={300}
        />
        
        <PieChart
          data={dadosCategorias}
          title="Distribuição por Status"
          description="Proporção de clientes por categoria"
          height={300}
          showLabel={true}
        />
      </div>

      {/* Novos Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChart
          data={mockEmpresasRegimeTributario.map(item => ({
            name: item.regime,
            value: item.quantidade,
            color: item.cor
          }))}
          title="Empresas por Regime Tributário"
          description="Distribuição das empresas por regime fiscal"
          height={350}
          showLabel={true}
        />
        
        <BarChart
          data={mockEmpresasRamoAtividade.map(item => ({
            name: item.ramo,
            valor: item.quantidade
          }))}
          bars={[
            { dataKey: 'valor', fill: '#3b82f6', name: 'Quantidade' }
          ]}
          title="Empresas por Ramo de Atividade"
          description="Distribuição das empresas por ramo de atividade"
          height={350}
          horizontal={true}
        />
      </div>

      {/* Tabela de Clientes */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
          <CardDescription>
            {dadosFiltrados.length} cliente{dadosFiltrados.length !== 1 ? 's' : ''} encontrado{dadosFiltrados.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={dadosFiltrados}
            searchKey="razao_social"
            searchPlaceholder="Buscar por razão social ou CNPJ..."
            pageSize={10}
          />
        </CardContent>
      </Card>

      {/* Modais */}
      <AniversarioParceriaModal
        isOpen={showAniversarioParceria}
        onClose={() => setShowAniversarioParceria(false)}
        data={mockAniversarioParceria}
      />
      
      <SociosAniversariantesModal
        isOpen={showSociosAniversariantes}
        onClose={() => setShowSociosAniversariantes(false)}
        data={mockSociosAniversariantes}
      />
    </div>
  );
}
