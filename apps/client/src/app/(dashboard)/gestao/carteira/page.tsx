'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { DataTable } from '@/components/tables';
import { ExportButtons } from '@/components/export';
import { GlobalFilters } from '@/components/filters';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { AniversarioParceriaModal, SociosAniversariantesModal } from '@/components/modals';
import {
  useCarteiraClientes,
  useCategorias,
  useCarteiraEvolucao,
  useCarteiraResumo,
  useAniversariosParceria,
  useSociosAniversariantes,
  useRegimeTributario,
  useRamoAtividade
} from '@gestk/shared';
import type { ClienteCarteira, CarteiraFilters } from '@gestk/shared';
import { ColumnDef } from '@tanstack/react-table';
import { Badge, Button } from '@gestk/ui';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, Users, Building, TrendingUp, PieChart as PieChartIcon, BarChart3, Loader2 } from 'lucide-react';
import { useCarteiraResumoQuery} from "../../../../../../../packages/shared/src/queries/carteira/carteiraQuery";


const columns: ColumnDef<ClienteCarteira>[] = [
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
    accessorKey: 'regime_fiscal',
    header: 'Regime Fiscal',
    cell: ({ row }) => {
      const regime = row.getValue('regime_fiscal') as string;
      return (
        <div className="text-sm">
          {regime === 'SIMPLES_NACIONAL' ? 'Simples Nacional' :
           regime === 'LUCRO_PRESUMIDO' ? 'Lucro Presumido' :
           regime === 'LUCRO_REAL' ? 'Lucro Real' : regime}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const color = status === 'ATIVO' ? 'bg-green-100 text-green-800' :
                    status === 'INATIVO' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800';
      return (
        <Badge className={color}>
          {status === 'ATIVO' ? 'Ativo' :
           status === 'INATIVO' ? 'Inativo' :
           status === 'SUSPENSO' ? 'Suspenso' : status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'data_inicio',
    header: 'Data Início',
    cell: ({ row }) => {
      const date = new Date(row.getValue('data_inicio'));
      return (
        <div className="text-sm">
          {format(date, 'dd/MM/yyyy', { locale: ptBR })}
        </div>
      );
    },
  },
  {
    accessorKey: 'inadimplente',
    header: 'Inadimplente',
    cell: ({ row }) => {
      const inadimplente = row.getValue('inadimplente') as boolean;
      return (
        <Badge className={inadimplente ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
          {inadimplente ? 'Sim' : 'Não'}
        </Badge>
      );
    },
  },
];

export default function CarteiraPage() {
  const [filtros, setFiltros] = useState<CarteiraFilters>({});
  const [showAniversarioParceria, setShowAniversarioParceria] = useState(false);
  const [showSociosAniversariantes, setShowSociosAniversariantes] = useState(false);

  // React Query hooks - conectados aos endpoints reais
  const { data: carteiraData, isLoading: isLoadingCarteira, error: errorCarteira } = useCarteiraClientes(filtros as any);
  const { data: resumoData, isLoading: isLoadingResumo, error: errorResumo } = useCarteiraResumoQuery();
  const { data: categoriasData, isLoading: isLoadingCategorias } = useCategorias();
  const { data: evolucaoData, isLoading: isLoadingEvolucao } = useCarteiraEvolucao({ meses: 12 });
  const { data: aniversariosData, isLoading: isLoadingAniversarios } = useAniversariosParceria(12);
  const { data: sociosData, isLoading: isLoadingSocios } = useSociosAniversariantes(12);
  const { data: regimeTributarioData, isLoading: isLoadingRegime } = useRegimeTributario();
  const { data: ramoAtividadeData, isLoading: isLoadingRamo } = useRamoAtividade();

  console.log('Resumo Data:', resumoData);

  const handleFiltersChange = (novosFiltros: CarteiraFilters) => {
    setFiltros(novosFiltros);
  };

  const handleClearFilters = () => {
    setFiltros({});
  };

  // Preparar dados para gráficos
  const dadosEvolucao = useMemo(() => {
    if (!evolucaoData || evolucaoData.length === 0) {
      // Mock data temporário se backend não retornar
      return Array.from({ length: 12 }, (_, i) => ({
        name: new Date(2024, i, 1).toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' }),
        'Total Clientes': Math.floor(Math.random() * 50) + 100,
        'Novos Clientes': Math.floor(Math.random() * 10) + 5,
        'Clientes Inativos': Math.floor(Math.random() * 5) + 2,
      }));
    }
    return (evolucaoData as any[]).map((item: any) => ({
      name: item.mes || item.mês,
      'Total Clientes': item.total_clientes || item.totalClientes || 0,
      'Novos Clientes': item.novos_clientes || item.novosClientes || 0,
      'Clientes Inativos': item.clientes_inativos || item.clientesInativos || 0
    }));
  }, [evolucaoData]);

  // Extrair contagens do resumo (dados da API)
  const contagensCategorias = useMemo(() => {
    if (!resumoData) {
      return { ativos: 0, inativos: 0, novos: 0, inadimplentes: 0 };
    }
    // Mapear dados do resumo para as contagens esperadas
    return {
      ativos: resumoData.clientes_ativos || 0,
      inativos: resumoData.clientes_inativos || 0,
      novos: resumoData.clientes_novos || 0,
      inadimplentes: resumoData.clientes_sem_movimentacao || 0,
    };
  }, [resumoData]);

  // Dados de fallback para regime tributário (enquanto API não retorna dados)
  const regimeFallback = [
    { regime: 'SIMPLES_NACIONAL', quantidade: 45, nome: 'Simples Nacional' },
    { regime: 'LUCRO_PRESUMIDO', quantidade: 28, nome: 'Lucro Presumido' },
    { regime: 'LUCRO_REAL', quantidade: 15, nome: 'Lucro Real' },
    { regime: 'MEI', quantidade: 12, nome: 'MEI' },
  ];

  // Dados de fallback para ramo de atividade (enquanto API não retorna dados)
  const ramoFallback = [
    { ramo: 'Consultoria', nome: 'Consultoria', quantidade: 25 },
    { ramo: 'Tecnologia', nome: 'Tecnologia', quantidade: 32 },
    { ramo: 'Comércio', nome: 'Comércio', quantidade: 18 },
    { ramo: 'Serviços', nome: 'Serviços', quantidade: 28 },
    { ramo: 'Indústria', nome: 'Indústria', quantidade: 12 },
  ];

  // Dados a serem usados (reais ou fallback)
  const dadosRegime = regimeTributarioData && regimeTributarioData.length > 0 ? regimeTributarioData : regimeFallback;
  const dadosRamo = ramoAtividadeData && ramoAtividadeData.length > 0 ? ramoAtividadeData : ramoFallback;

  const dadosFiltrados = carteiraData?.results || [];
  const totalClientes = carteiraData?.count || 0;

  // Loading state
  if (isLoadingCarteira && !carteiraData) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-gray-600">Carregando dados da carteira...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (errorCarteira) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-red-600 font-semibold">Erro ao carregar dados</p>
          <p className="text-gray-600 mt-2">{errorCarteira.message}</p>
        </div>
      </div>
    );
  }

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
          filters={{
            busca: filtros.search,
            periodo: filtros.data_inicio && filtros.data_fim ? {
              from: new Date(filtros.data_inicio),
              to: new Date(filtros.data_fim)
            } : undefined,
            regime_fiscal: filtros.regime_fiscal ? [filtros.regime_fiscal] : undefined,
            status: filtros.status ? [filtros.status] : undefined,
          }}
          onFiltersChange={(newFilters: any) => {
            setFiltros({
              ...filtros,
              search: newFilters.busca,
              data_inicio: newFilters.periodo?.from ? newFilters.periodo.from.toISOString().split('T')[0] : undefined,
              data_fim: newFilters.periodo?.to ? newFilters.periodo.to.toISOString().split('T')[0] : undefined,
              regime_fiscal: newFilters.regime_fiscal?.[0] as any,
              status: newFilters.status?.[0] as any,
            });
          }}
          onClearFilters={handleClearFilters}
          showSearch={true}
          showPeriod={true}
          showRegimeFiscal={true}
          showStatus={true}
          regimeFiscalOptions={[
            { value: 'SIMPLES_NACIONAL', label: 'Simples Nacional' },
            { value: 'LUCRO_PRESUMIDO', label: 'Lucro Presumido' },
            { value: 'LUCRO_REAL', label: 'Lucro Real' },
          ]}
          statusOptions={[
            { value: 'ATIVO', label: 'Ativo' },
            { value: 'INATIVO', label: 'Inativo' },
            { value: 'SUSPENSO', label: 'Suspenso' },
          ]}
        />
        
        {/* Ações Rápidas */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAniversarioParceria(true)}
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Ver Aniversários de Parceria
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSociosAniversariantes(true)}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Ver Sócios Aniversariantes
          </Button>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {/* Ativos */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {isLoadingResumo ? <Loader2 className="h-6 w-6 animate-spin" /> : contagensCategorias.ativos}
            </div>
            <div className="text-sm text-gray-500">
              {carteiraData?.count && carteiraData.count > 0 ? `${Math.round(contagensCategorias.ativos / carteiraData.count * 100)}%` : '0%'} do total
            </div>
          </CardContent>
        </Card>

        {/* Inativos */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Inativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {isLoadingResumo ? <Loader2 className="h-6 w-6 animate-spin" /> : contagensCategorias.inativos}
            </div>
            <div className="text-sm text-gray-500">
              {carteiraData?.count && carteiraData.count > 0 ? `${Math.round(contagensCategorias.inativos / carteiraData.count * 100)}%` : '0%'} do total
            </div>
          </CardContent>
        </Card>

        {/* Novos */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Novos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {isLoadingResumo ? <Loader2 className="h-6 w-6 animate-spin" /> : contagensCategorias.novos}
            </div>
            <div className="text-sm text-gray-500">
              {carteiraData?.count && carteiraData.count > 0 ? `${Math.round(contagensCategorias.novos / carteiraData.count * 100)}%` : '0%'} do total
            </div>
          </CardContent>
        </Card>

        {/* Inadimplentes */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Inadimplentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {isLoadingResumo ? <Loader2 className="h-6 w-6 animate-spin" /> : contagensCategorias.inadimplentes}
            </div>
            <div className="text-sm text-gray-500">
              {carteiraData?.count && carteiraData.count > 0 ? `${Math.round(contagensCategorias.inadimplentes / carteiraData.count * 100)}%` : '0%'} do total
            </div>
          </CardContent>
        </Card>
        
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
              {isLoadingAniversarios ? <Loader2 className="h-6 w-6 animate-spin" /> : aniversariosData?.length || 0}
            </div>
            <div className="text-sm text-gray-500">
              próximos 12 meses
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
              {isLoadingSocios ? <Loader2 className="h-6 w-6 animate-spin" /> : sociosData?.length || 0}
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
          data={[
            { name: 'Ativos', value: contagensCategorias.ativos, color: '#10b981' },
            { name: 'Inativos', value: contagensCategorias.inativos, color: '#ef4444' },
            { name: 'Novos', value: contagensCategorias.novos, color: '#3b82f6' },
            { name: 'Inadimplentes', value: contagensCategorias.inadimplentes, color: '#f59e0b' },
          ]}
          title="Distribuição por Status"
          description="Proporção de clientes por categoria"
          height={300}
          showLabel={true}
        />
      </div>

      {/* Novos Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isLoadingRegime ? (
          <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <PieChart
            data={(dadosRegime as any[]).map(item => ({
              name: item.regime || item.nome,
              value: item.quantidade,
              color: item.regime?.includes('SIMPLES') ? '#10b981' : item.regime?.includes('PRESUMIDO') ? '#3b82f6' : '#f59e0b'
            }))}
            title="Empresas por Regime Tributário"
            description={regimeTributarioData && regimeTributarioData.length > 0 ? "Distribuição das empresas por regime fiscal" : "Distribuição das empresas (dados estimados)"}
            height={350}
            showLabel={true}
          />
        )}
        
        {isLoadingRamo ? (
          <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <BarChart
            data={(dadosRamo as any[]).map(item => ({
              name: item.ramo || item.nome,
              valor: item.quantidade
            }))}
            bars={[
              { dataKey: 'valor', fill: '#3b82f6', name: 'Quantidade' }
            ]}
            title="Empresas por Ramo de Atividade"
            description={ramoAtividadeData && ramoAtividadeData.length > 0 ? "Distribuição das empresas por ramo de atividade" : "Distribuição das empresas (dados estimados)"}
            height={350}
            horizontal={true}
          />
        )}
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
            data={dadosFiltrados as any}
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
        data={aniversariosData || []}
      />
      
      <SociosAniversariantesModal
        isOpen={showSociosAniversariantes}
        onClose={() => setShowSociosAniversariantes(false)}
        data={sociosData || []}
      />
    </div>
  );
}
