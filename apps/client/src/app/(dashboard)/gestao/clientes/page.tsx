'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { DataTable, CustoOperacionalTable } from '@/components/tables';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ComposicaoSocietariaModal } from '@/components/modals';
import { SimulacaoIndividual } from '@/components/simulacao/SimulacaoIndividual';
import { CompanyFilter } from '@/components/filters/CompanyFilter';
import { useSimulacaoIndividual } from '@/hooks/useSimulacaoIndividual';
import { 
  mockCarteiraClientes, 
  mockCustoOperacional, 
  mockComposicaoSocietaria 
} from '@/lib/mocks';
import type { CarteiraCliente, FiltrosClientes } from '@gestk/shared';
import { ColumnDef } from '@tanstack/react-table';
import { Badge, Button } from '@gestk/ui';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Search, Calendar, TrendingUp, DollarSign, Clock, FileText, Users, Building } from 'lucide-react';

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

export default function ClientesPage() {
  const [filtros, setFiltros] = useState<FiltrosClientes>({});
  const [dadosFiltrados, setDadosFiltrados] = useState<CarteiraCliente[]>(mockCarteiraClientes);
  const [showComposicao, setShowComposicao] = useState(false);
  const [cnpjSelecionado, setCnpjSelecionado] = useState<string>('');
  const [dataInicio, setDataInicio] = useState<string>('2025-01-01');
  const [dataFim, setDataFim] = useState<string>('2025-09-30');
  
  // Estados para filtros de empresa
  const [empresaSelecionada, setEmpresaSelecionada] = useState<string | null>(null);
  const [escritorioSelecionado, setEscritorioSelecionado] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Hook para simulação individual por cliente
  const {
    valorHora,
    setValorHora,
    dadosRecalculados,
    metricasEmpresa,
    dadosEvolucaoEmpresa,
    dadosProdutividade,
    analiseTendencias,
    resetValorHora,
    temEmpresaSelecionada
  } = useSimulacaoIndividual({ 
    dadosOriginais: mockCustoOperacional, 
    empresaSelecionada 
  });

  const handleFiltersChange = (novosFiltros: FiltrosClientes) => {
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
    setEmpresaSelecionada(null);
    setEscritorioSelecionado(null);
    setSearchTerm('');
  };

  const handleSocioClick = (cnpj: string) => {
    setCnpjSelecionado(cnpj);
    setShowComposicao(true);
  };

  // Obter nome da empresa selecionada
  const nomeEmpresaSelecionada = empresaSelecionada 
    ? mockCustoOperacional.find(emp => emp.id === empresaSelecionada)?.empresa || 'Empresa'
    : '';

  // Filtrar dados de custo operacional por período
  const dadosCustoFiltrados = dadosRecalculados.map(cliente => ({
    ...cliente,
    competencias: cliente.competencias.filter(comp => {
      const compDate = new Date(comp.competencia.split('/')[1] + '-' + comp.competencia.split('/')[0] + '-01');
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);
      return compDate >= inicio && compDate <= fim;
    })
  })).filter(cliente => cliente.competencias.length > 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Custo Operacional</h1>
          <p className="text-gray-600 mt-1">
            Análise detalhada do custo operacional dos clientes por competência
          </p>
        </div>
        <ExportButtons
          data={dadosFiltrados}
          nomeArquivo="custo_operacional"
          colunas={['razao_social', 'cnpj', 'regime_fiscal_display', 'ramo_atividade_display', 'status_cliente']}
          filtros={filtros}
        />
      </div>

      {/* Filtros de Empresa */}
      <CompanyFilter
        empresas={mockCustoOperacional}
        empresaSelecionada={empresaSelecionada}
        onEmpresaChange={setEmpresaSelecionada}
        escritorioSelecionado={escritorioSelecionado}
        onEscritorioChange={setEscritorioSelecionado}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onClearFilters={handleClearFilters}
      />

      {/* Simulação Individual por Cliente */}
      <SimulacaoIndividual
        valorHora={valorHora}
        onValorHoraChange={setValorHora}
        metricas={metricasEmpresa}
        analiseTendencias={analiseTendencias}
        onReset={resetValorHora}
        empresaSelecionada={empresaSelecionada}
        nomeEmpresa={nomeEmpresaSelecionada}
      />

      {/* Filtros de Período */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Período:</label>
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
          <span className="text-gray-500">até</span>
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </div>
      </div>

      {/* Cards de Resumo - Apenas se empresa selecionada */}
      {temEmpresaSelecionada && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Building className="h-4 w-4" />
                Competências
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metricasEmpresa.totalCompetencias}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Custo Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                R$ {metricasEmpresa.totalCusto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Rentabilidade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${
                metricasEmpresa.totalRentabilidade >= 0 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                R$ {metricasEmpresa.totalRentabilidade.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Tempo Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(metricasEmpresa.totalTempoHoras)}H
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Gráficos - Apenas se empresa selecionada */}
      {temEmpresaSelecionada && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart
            data={dadosEvolucaoEmpresa}
            lines={[
              { dataKey: 'custo', stroke: '#ef4444', name: 'Custo Operacional' },
              { dataKey: 'rentabilidade', stroke: '#10b981', name: 'Rentabilidade' }
            ]}
            title={`Evolução do Custo e Rentabilidade - ${nomeEmpresaSelecionada}`}
            description="Custo operacional e rentabilidade ao longo do tempo"
            height={300}
          />
          
          <BarChart
            data={dadosEvolucaoEmpresa.map(item => ({
              name: item.name,
              lancamentos: item.lancamentos,
              lancamentos_manuais: item.lancamentos_manuais
            }))}
            bars={[
              { dataKey: 'lancamentos', fill: '#3b82f6', name: 'Lançamentos' },
              { dataKey: 'lancamentos_manuais', fill: '#f59e0b', name: 'Manuais' }
            ]}
            title="Lançamentos por Competência"
            description="Quantidade de lançamentos e percentual manual"
            height={300}
          />
        </div>
      )}

      {/* Tabelas de Custo Operacional - Apenas se empresa selecionada */}
      {temEmpresaSelecionada && (
        <div className="space-y-6">
          {dadosCustoFiltrados.map((cliente) => (
            <CustoOperacionalTable
              key={cliente.id}
              data={cliente}
              onSocioClick={handleSocioClick}
            />
          ))}
        </div>
      )}

      {/* Mensagem quando nenhuma empresa selecionada */}
      {!temEmpresaSelecionada && (
        <div className="text-center py-12">
          <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Selecione uma Empresa
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Use os filtros acima para selecionar uma empresa e visualizar sua análise de custo operacional detalhada.
          </p>
        </div>
      )}

      {/* Modal de Composição Societária */}
      <ComposicaoSocietariaModal
        isOpen={showComposicao}
        onClose={() => setShowComposicao(false)}
        data={cnpjSelecionado ? mockComposicaoSocietaria[cnpjSelecionado] || null : null}
      />
    </div>
  );
}