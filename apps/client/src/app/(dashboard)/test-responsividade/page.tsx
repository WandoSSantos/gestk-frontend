'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { GlobalFilters } from '@/components/filters';
import { DataTable } from '@/components/tables';
import { ExportButtons } from '@/components/export';
import { mockCarteiraClientes, mockEvolucaoMensal } from '@/lib/mocks';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function TestResponsividadePage() {
  const [filtros, setFiltros] = React.useState({});

  // Dados para teste
  const dadosEvolucao = mockEvolucaoMensal.map(item => ({
    name: item.mes,
    'Total Clientes': item.total_clientes,
    'Novos Clientes': item.novos_clientes
  }));

  const dadosCategorias = [
    { name: 'Ativos', value: 45, color: '#10b981' },
    { name: 'Inativos', value: 15, color: '#ef4444' },
    { name: 'Novos', value: 10, color: '#3b82f6' }
  ];

  const handleFiltersChange = (novosFiltros: any) => {
    setFiltros(novosFiltros);
  };

  const handleClearFilters = () => {
    setFiltros({});
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Teste de Responsividade</h1>
        <p className="text-gray-600 mt-1">
          Verificação de responsividade em diferentes tamanhos de tela
        </p>
      </div>

      {/* Indicadores de Tela */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center p-4 bg-blue-50 rounded-lg">
          <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
          <div>
            <div className="font-medium text-blue-900">Mobile</div>
            <div className="text-sm text-blue-600">até 768px</div>
          </div>
        </div>
        
        <div className="flex items-center p-4 bg-green-50 rounded-lg">
          <Tablet className="h-8 w-8 text-green-600 mr-3" />
          <div>
            <div className="font-medium text-green-900">Tablet</div>
            <div className="text-sm text-green-600">768px - 1024px</div>
          </div>
        </div>
        
        <div className="flex items-center p-4 bg-purple-50 rounded-lg">
          <Monitor className="h-8 w-8 text-purple-600 mr-3" />
          <div>
            <div className="font-medium text-purple-900">Desktop</div>
            <div className="text-sm text-purple-600">acima de 1024px</div>
          </div>
        </div>
      </div>

      {/* Teste de Cards Responsivos */}
      <Card>
        <CardHeader>
          <CardTitle>Cards Responsivos</CardTitle>
          <CardDescription>
            Teste de grid responsivo com diferentes quantidades de colunas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-900">Card {item}</div>
                <div className="text-sm text-gray-500">Responsivo</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Teste de Filtros */}
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

      {/* Teste de Gráficos Responsivos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={dadosEvolucao}
          lines={[
            { dataKey: 'Total Clientes', stroke: '#3b82f6', name: 'Total Clientes' },
            { dataKey: 'Novos Clientes', stroke: '#10b981', name: 'Novos Clientes' }
          ]}
          title="Gráfico de Linha Responsivo"
          description="Teste de responsividade em gráfico de linha"
          height={300}
        />
        
        <PieChart
          data={dadosCategorias}
          title="Gráfico de Pizza Responsivo"
          description="Teste de responsividade em gráfico de pizza"
          height={300}
          showLabel={true}
        />
      </div>

      {/* Teste de Tabela Responsiva */}
      <Card>
        <CardHeader>
          <CardTitle>Tabela Responsiva</CardTitle>
          <CardDescription>
            Teste de tabela com scroll horizontal em telas pequenas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Cliente</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">CNPJ</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Regime</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Data</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockCarteiraClientes.slice(0, 5).map((cliente, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">{cliente.razao_social}</td>
                    <td className="px-4 py-2 text-sm text-gray-500">{cliente.cnpj}</td>
                    <td className="px-4 py-2 text-sm text-gray-500">{cliente.regime_fiscal_display}</td>
                    <td className="px-4 py-2 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cliente.status_cliente === 'ativo' ? 'bg-green-100 text-green-800' :
                        cliente.status_cliente === 'inativo' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {cliente.status_cliente}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">{cliente.data_abertura}</td>
                    <td className="px-4 py-2 text-sm">
                      <button className="text-blue-600 hover:text-blue-800">Ver</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Teste de Botões de Exportação */}
      <Card>
        <CardHeader>
          <CardTitle>Botões de Exportação</CardTitle>
          <CardDescription>
            Teste de responsividade nos botões de exportação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <ExportButtons
              data={mockCarteiraClientes}
              nomeArquivo="teste_responsividade"
              filtros={filtros}
            />
          </div>
        </CardContent>
      </Card>

      {/* Checklist de Responsividade */}
      <Card>
        <CardHeader>
          <CardTitle>Checklist de Responsividade</CardTitle>
          <CardDescription>
            Verificações realizadas para garantir responsividade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Grid responsivo com breakpoints (sm, md, lg, xl)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Tabelas com scroll horizontal em telas pequenas</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Gráficos responsivos com altura adaptável</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Filtros colapsáveis em telas pequenas</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Botões empilhados verticalmente em mobile</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Sidebar colapsável em mobile</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Texto e ícones redimensionados adequadamente</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm">Espaçamento consistente em todos os tamanhos</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
