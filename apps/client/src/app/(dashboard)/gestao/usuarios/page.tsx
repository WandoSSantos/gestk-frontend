'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { 
  mockAtividadesUsuarios, 
  mockAtividadesClientes, 
  mockResumoAtividades,
  mockDadosEstrategicos,
  mockComparativoModulos,
  mockEvolucaoModulos,
  type AtividadeUsuario,
  type AtividadeCliente
} from '@/lib/mocks';
import { format, parseISO, startOfMonth, endOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

type ViewType = 'analise' | 'usuarios' | 'modulo' | 'cliente';

export default function UsuariosPage() {
  const [viewType, setViewType] = useState<ViewType>('analise');
  const [dataInicio, setDataInicio] = useState('2025-01-01');
  const [dataFim, setDataFim] = useState('2025-09-30');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar dados por período
  const dadosFiltrados = useMemo(() => {
    const inicio = parseISO(dataInicio);
    const fim = parseISO(dataFim);

    return {
      usuarios: mockAtividadesUsuarios.filter(ativ => {
        const competencia = parseISO(ativ.competencia + '-01');
        return competencia >= inicio && competencia <= fim;
      }),
      clientes: mockAtividadesClientes.filter(ativ => {
        const competencia = parseISO(ativ.competencia + '-01');
        return competencia >= inicio && competencia <= fim;
      })
    };
  }, [dataInicio, dataFim]);

  // Calcular resumo dos dados filtrados
  const resumoFiltrado = useMemo(() => {
    const { usuarios } = dadosFiltrados;
    
    const totalAtividades = usuarios.reduce((acc, ativ) => acc + ativ.lancamentos, 0);
    const totalImportacoes = usuarios.reduce((acc, ativ) => acc + ativ.importacoes, 0);
    const totalLancamentos = usuarios.reduce((acc, ativ) => acc + ativ.lancamentos, 0);
    const totalLancamentosManuais = usuarios.reduce((acc, ativ) => acc + ativ.lancamentos_manuais, 0);
    
    // Calcular total de horas
    const totalHoras = usuarios.reduce((acc, ativ) => {
      const [hours, minutes, seconds] = ativ.horas_trabalhadas.split(':').map(Number);
      return acc + hours + (minutes / 60) + (seconds / 3600);
    }, 0);

    return {
      total_atividades: totalAtividades,
      total_importacoes: totalImportacoes,
      total_lancamentos: totalLancamentos,
      total_lancamentos_manuais: totalLancamentosManuais,
      total_horas_ativas: Math.round(totalHoras)
    };
  }, [dadosFiltrados]);

  // Agrupar dados por usuário para análise
  const dadosPorUsuario = useMemo(() => {
    const agrupado = dadosFiltrados.usuarios.reduce((acc, ativ) => {
      if (!acc[ativ.usuario]) {
        acc[ativ.usuario] = {
          usuario: ativ.usuario,
          total_horas: 0,
          total_importacoes: 0,
          total_lancamentos: 0,
          total_lancamentos_manuais: 0,
          eficiencia_media: 0,
          produtividade_media: 0,
          competencias: []
        };
      }
      
      const [hours, minutes, seconds] = ativ.horas_trabalhadas.split(':').map(Number);
      const totalHoras = hours + (minutes / 60) + (seconds / 3600);
      
      acc[ativ.usuario].total_horas += totalHoras;
      acc[ativ.usuario].total_importacoes += ativ.importacoes;
      acc[ativ.usuario].total_lancamentos += ativ.lancamentos;
      acc[ativ.usuario].total_lancamentos_manuais += ativ.lancamentos_manuais;
      acc[ativ.usuario].competencias.push(ativ);
      
      return acc;
    }, {} as Record<string, any>);

    // Calcular médias
    Object.values(agrupado).forEach((usuario: any) => {
      usuario.eficiencia_media = usuario.competencias.reduce((acc: number, c: AtividadeUsuario) => acc + c.eficiencia, 0) / usuario.competencias.length;
      usuario.produtividade_media = usuario.competencias.reduce((acc: number, c: AtividadeUsuario) => acc + c.produtividade, 0) / usuario.competencias.length;
    });

    return Object.values(agrupado);
  }, [dadosFiltrados.usuarios]);

  // Dados para gráfico de evolução mensal
  const dadosEvolucao = useMemo(() => {
    const agrupado = dadosFiltrados.usuarios.reduce((acc, ativ) => {
      const mes = format(parseISO(ativ.competencia + '-01'), 'MMM/yyyy', { locale: ptBR });
      if (!acc[mes]) {
        acc[mes] = 0;
      }
      acc[mes] += ativ.lancamentos;
      return acc;
    }, {} as Record<string, number>);

    const dados = Object.entries(agrupado)
      .sort((a, b) => {
        const [mesA, anoA] = a[0].split('/');
        const [mesB, anoB] = b[0].split('/');
        const dataA = parseISO(`${anoA}-${mesA === 'Jan' ? '01' : mesA === 'Fev' ? '02' : mesA === 'Mar' ? '03' : mesA === 'Abr' ? '04' : mesA === 'Mai' ? '05' : mesA === 'Jun' ? '06' : mesA === 'Jul' ? '07' : mesA === 'Ago' ? '08' : mesA === 'Set' ? '09' : mesA === 'Out' ? '10' : mesA === 'Nov' ? '11' : '12'}-01`);
        const dataB = parseISO(`${anoB}-${mesB === 'Jan' ? '01' : mesB === 'Fev' ? '02' : mesB === 'Mar' ? '03' : mesB === 'Abr' ? '04' : mesB === 'Mai' ? '05' : mesB === 'Jun' ? '06' : mesB === 'Jul' ? '07' : mesB === 'Ago' ? '08' : mesB === 'Set' ? '09' : mesB === 'Out' ? '10' : mesB === 'Nov' ? '11' : '12'}-01`);
        return dataA.getTime() - dataB.getTime();
      })
      .map(([mes, atividades]) => ({ mes, atividades }));

    // Se não há dados, retornar dados de exemplo
    if (dados.length === 0) {
      return [
        { mes: 'Jan/2025', atividades: 3319 },
        { mes: 'Fev/2025', atividades: 3200 },
        { mes: 'Mar/2025', atividades: 2698 },
        { mes: 'Abr/2025', atividades: 3404 },
        { mes: 'Mai/2025', atividades: 3183 },
        { mes: 'Jun/2025', atividades: 2911 },
        { mes: 'Jul/2025', atividades: 3300 },
        { mes: 'Ago/2025', atividades: 2753 },
        { mes: 'Set/2025', atividades: 3161 }
      ];
    }

    return dados;
  }, [dadosFiltrados.usuarios]);

  // Dados para gráfico de produtividade
  const dadosProdutividade = useMemo(() => {
    const dados = dadosPorUsuario
      .sort((a, b) => b.produtividade_media - a.produtividade_media)
      .slice(0, 8)
      .map(usuario => ({
        usuario: usuario.usuario,
        produtividade: Math.min(Math.round(usuario.produtividade_media * 10) / 10, 50) // Limitar a 50 para melhor visualização
      }));

    // Se não há dados, retornar dados de exemplo
    if (dados.length === 0) {
      return [
        { usuario: 'GERENTE', produtividade: 15.3 },
        { usuario: 'SAMYLE', produtividade: 16.2 },
        { usuario: 'ALISSON', produtividade: 12.5 },
        { usuario: 'FABIO1', produtividade: 9.7 },
        { usuario: 'MARIA', produtividade: 14.1 },
        { usuario: 'JOÃO', produtividade: 11.4 }
      ];
    }

    return dados;
  }, [dadosPorUsuario]);

  // Dados para gráfico de eficiência
  const dadosEficiencia = useMemo(() => {
    const distribuicao = {
      '90-100%': 0,
      '80-89%': 0,
      '70-79%': 0,
      '60-69%': 0,
      '50-59%': 0
    };

    dadosPorUsuario.forEach(usuario => {
      const eficiencia = usuario.eficiencia_media;
      if (eficiencia >= 90) distribuicao['90-100%']++;
      else if (eficiencia >= 80) distribuicao['80-89%']++;
      else if (eficiencia >= 70) distribuicao['70-79%']++;
      else if (eficiencia >= 60) distribuicao['60-69%']++;
      else distribuicao['50-59%']++;
    });

    const dados = Object.entries(distribuicao)
      .filter(([_, count]) => count > 0)
      .map(([faixa, count]) => ({ faixa, usuarios: count }));

    // Se não há dados, retornar dados de exemplo
    if (dados.length === 0) {
      return [
        { faixa: '90-100%', usuarios: 2 },
        { faixa: '80-89%', usuarios: 3 },
        { faixa: '70-79%', usuarios: 1 },
        { faixa: '60-69%', usuarios: 0 },
        { faixa: '50-59%', usuarios: 0 }
      ];
    }

    return dados;
  }, [dadosPorUsuario]);

  const formatarHoras = (horas: number) => {
    const horasInt = Math.floor(horas);
    const minutos = Math.round((horas - horasInt) * 60);
    return `${horasInt}:${minutos.toString().padStart(2, '0')}:00`;
  };

  const renderAnaliseGeral = () => (
    <div className="space-y-6">
      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Período</CardTitle>
          <CardDescription>
            Selecione o período para análise das atividades dos usuários
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium">Data Início</label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">Data Fim</label>
              <Input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                className="mt-1"
              />
            </div>
            <Button className="bg-gray-800 hover:bg-gray-900">
              Pesquisar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Atividades Realizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFiltrado.total_atividades.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Importações Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFiltrado.total_importacoes.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Lançamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFiltrado.total_lancamentos.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Lançamentos Manuais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFiltrado.total_lancamentos_manuais.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Horas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFiltrado.total_horas_ativas.toLocaleString()}h</div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Evolução */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades por Mês</CardTitle>
          <CardDescription>
            Evolução das atividades realizadas pelos usuários ao longo do período
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart
            data={dadosEvolucao}
            xKey="mes"
            yKey="atividades"
            height={300}
            color="#3b82f6"
          />
        </CardContent>
      </Card>

      {/* Gráficos Estratégicos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Produtividade dos Usuários</CardTitle>
            <CardDescription>
              Lançamentos por hora dos usuários mais produtivos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={dadosProdutividade}
              xKey="usuario"
              yKey="produtividade"
              height={250}
              color="#10b981"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Eficiência</CardTitle>
            <CardDescription>
              Percentual de usuários por faixa de eficiência
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              data={dadosEficiencia}
              nameKey="faixa"
              valueKey="usuarios"
              height={250}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAtividadesUsuarios = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Atividades por Usuário</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Buscar Usuário"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <ExportButtons 
            data={dadosPorUsuario}
            nomeArquivo="atividades_por_usuario"
            colunas={['usuario', 'total_horas', 'total_importacoes', 'total_lancamentos', 'total_lancamentos_manuais', 'eficiencia_media', 'produtividade_media']}
          />
        </div>
      </div>

      {/* Resumo Estatístico */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Usuários</p>
                <p className="text-2xl font-bold text-gray-900">{dadosPorUsuario.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Horas Totais</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(dadosPorUsuario.reduce((acc, u) => acc + u.total_horas, 0))}h
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lançamentos Totais</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dadosPorUsuario.reduce((acc, u) => acc + u.total_lancamentos, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Eficiência Média</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(dadosPorUsuario.reduce((acc, u) => acc + u.eficiencia_media, 0) / dadosPorUsuario.length)}%
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    <div className="flex items-center space-x-1">
                      <span>Usuários</span>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-700">JAN/2025</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">Horas</div>
                        <div className="text-center">Import.</div>
                        <div className="text-center">Lanç.</div>
                        <div className="text-center">L. Man.</div>
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-700">FEV/2025</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">Horas</div>
                        <div className="text-center">Import.</div>
                        <div className="text-center">Lanç.</div>
                        <div className="text-center">L. Man.</div>
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-700">MAR/2025</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">Horas</div>
                        <div className="text-center">Import.</div>
                        <div className="text-center">Lanç.</div>
                        <div className="text-center">L. Man.</div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dadosPorUsuario
                  .filter(usuario => 
                    usuario.usuario.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((usuario, index) => {
                    const jan = usuario.competencias.find(c => c.competencia === '2025-01');
                    const fev = usuario.competencias.find(c => c.competencia === '2025-02');
                    const mar = usuario.competencias.find(c => c.competencia === '2025-03');
                    
                    return (
                      <tr key={usuario.usuario} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r border-gray-200">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-blue-600">
                                {usuario.usuario.charAt(0)}
                              </span>
                            </div>
                            <span>{usuario.usuario}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {jan?.horas_trabalhadas || '00:00:00'}
                            </div>
                            <div className="text-center font-semibold text-blue-600">
                              {jan?.importacoes || 0}
                            </div>
                            <div className="text-center font-semibold text-green-600">
                              {jan?.lancamentos || 0}
                            </div>
                            <div className="text-center font-semibold text-orange-600">
                              {jan?.lancamentos_manuais || 0}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {fev?.horas_trabalhadas || '00:00:00'}
                            </div>
                            <div className="text-center font-semibold text-blue-600">
                              {fev?.importacoes || 0}
                            </div>
                            <div className="text-center font-semibold text-green-600">
                              {fev?.lancamentos || 0}
                            </div>
                            <div className="text-center font-semibold text-orange-600">
                              {fev?.lancamentos_manuais || 0}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {mar?.horas_trabalhadas || '00:00:00'}
                            </div>
                            <div className="text-center font-semibold text-blue-600">
                              {mar?.importacoes || 0}
                            </div>
                            <div className="text-center font-semibold text-green-600">
                              {mar?.lancamentos || 0}
                            </div>
                            <div className="text-center font-semibold text-orange-600">
                              {mar?.lancamentos_manuais || 0}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAtividadesClientes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Atividades por Cliente</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Buscar Empresa"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <ExportButtons 
            data={dadosFiltrados.clientes}
            nomeArquivo="atividades_por_cliente"
            colunas={['id', 'razao_social', 'competencia', 'horas_trabalhadas', 'importacoes', 'lancamentos', 'lancamentos_manuais', 'valor_hora', 'custo_total', 'rentabilidade']}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    <div className="flex items-center space-x-1">
                      <span>ID</span>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Razão Social
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-700">JAN/2025</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">Horas</div>
                        <div className="text-center">Import.</div>
                        <div className="text-center">Lanç.</div>
                        <div className="text-center">L. Man.</div>
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-700">FEV/2025</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">Horas</div>
                        <div className="text-center">Import.</div>
                        <div className="text-center">Lanç.</div>
                        <div className="text-center">L. Man.</div>
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-700">MAR/2025</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">Horas</div>
                        <div className="text-center">Import.</div>
                        <div className="text-center">Lanç.</div>
                        <div className="text-center">L. Man.</div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dadosFiltrados.clientes
                  .filter(cliente => 
                    cliente.razao_social.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .reduce((acc, cliente) => {
                    const existing = acc.find(c => c.id === cliente.id);
                    if (existing) {
                      existing.competencias.push(cliente);
                    } else {
                      acc.push({
                        id: cliente.id,
                        razao_social: cliente.razao_social,
                        competencias: [cliente]
                      });
                    }
                    return acc;
                  }, [] as Array<{id: number, razao_social: string, competencias: AtividadeCliente[]}>)
                  .map((cliente, index) => {
                    const jan = cliente.competencias.find(c => c.competencia === '2025-01');
                    const fev = cliente.competencias.find(c => c.competencia === '2025-02');
                    const mar = cliente.competencias.find(c => c.competencia === '2025-03');
                    
                    return (
                      <tr key={cliente.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r border-gray-200">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-green-600">
                              {cliente.id}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs border-r border-gray-200">
                          <div className="font-medium truncate" title={cliente.razao_social}>
                            {cliente.razao_social}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {jan?.horas_trabalhadas || '00:00:00'}
                            </div>
                            <div className="text-center font-semibold text-blue-600">
                              {jan?.importacoes || 0}
                            </div>
                            <div className="text-center font-semibold text-green-600">
                              {jan?.lancamentos || 0}
                            </div>
                            <div className="text-center font-semibold text-orange-600">
                              {jan?.lancamentos_manuais || 0}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {fev?.horas_trabalhadas || '00:00:00'}
                            </div>
                            <div className="text-center font-semibold text-blue-600">
                              {fev?.importacoes || 0}
                            </div>
                            <div className="text-center font-semibold text-green-600">
                              {fev?.lancamentos || 0}
                            </div>
                            <div className="text-center font-semibold text-orange-600">
                              {fev?.lancamentos_manuais || 0}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {mar?.horas_trabalhadas || '00:00:00'}
                            </div>
                            <div className="text-center font-semibold text-blue-600">
                              {mar?.importacoes || 0}
                            </div>
                            <div className="text-center font-semibold text-green-600">
                              {mar?.lancamentos || 0}
                            </div>
                            <div className="text-center font-semibold text-orange-600">
                              {mar?.lancamentos_manuais || 0}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Análise de Usuários</h1>
          <p className="text-gray-600 mt-1">
            Desempenho e atividades dos usuários por competência
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/gestao/usuarios/estrategico">
            <Button variant="outline">
              Dashboard Estratégico
            </Button>
          </Link>
          <ExportButtons 
            data={dadosFiltrados.usuarios}
            nomeArquivo="atividades_usuarios"
            colunas={['usuario', 'competencia', 'horas_trabalhadas', 'importacoes', 'lancamentos', 'lancamentos_manuais']}
          />
        </div>
      </div>

      {/* Navegação */}
      <div className="flex gap-2">
        <Button
          variant={viewType === 'analise' ? 'default' : 'outline'}
          onClick={() => setViewType('analise')}
        >
          Análise Geral
        </Button>
        <Button
          variant={viewType === 'usuarios' ? 'default' : 'outline'}
          onClick={() => setViewType('usuarios')}
        >
          Atividade por Usuário
        </Button>
        <Button
          variant={viewType === 'modulo' ? 'default' : 'outline'}
          onClick={() => setViewType('modulo')}
        >
          Atividade por Módulo
        </Button>
        <Button
          variant={viewType === 'cliente' ? 'default' : 'outline'}
          onClick={() => setViewType('cliente')}
        >
          Atividade por Cliente
        </Button>
      </div>

      {/* Conteúdo */}
      {viewType === 'analise' && renderAnaliseGeral()}
      {viewType === 'usuarios' && renderAtividadesUsuarios()}
      {viewType === 'modulo' && renderAtividadesModulos()}
      {viewType === 'cliente' && renderAtividadesClientes()}
    </div>
  );

  // Função para renderizar atividades por módulo
  function renderAtividadesModulos() {
    return (
      <div className="space-y-6">

        {/* Gráfico Comparativo de Módulos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Comparativo de Módulos
            </CardTitle>
            <CardDescription>
              Distribuição de horas trabalhadas por módulo no período selecionado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <BarChart
                data={[
                  { name: 'Escrita Fiscal', value: 9644 },
                  { name: 'Folha de Pagamento', value: 9099 },
                  { name: 'Contabil', value: 8754 },
                  { name: 'Honorários', value: 443 },
                  { name: 'Patrimônio', value: 70 },
                  { name: 'Lalur', value: 33 },
                  { name: 'Atualizar', value: 2 },
                  { name: 'Protocolos', value: 2 }
                ]}
                xKey="name"
                yKey="value"
                color="#3B82F6"
                title="Horas por Módulo"
                description="Total de horas trabalhadas em cada módulo"
              />
            </div>
          </CardContent>
        </Card>

        {/* Evolução Mensal dos Módulos Principais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Evolução Mensal dos Módulos
            </CardTitle>
            <CardDescription>
              Comparação da evolução temporal de todos os módulos do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <LineChart
                data={[
                  { mes: 'Jan/2025', 'Escrita Fiscal': 1145, 'Folha de Pagamento': 1175, 'Contabil': 945 },
                  { mes: 'Fev/2025', 'Escrita Fiscal': 1051, 'Folha de Pagamento': 1171, 'Contabil': 994 },
                  { mes: 'Mar/2025', 'Escrita Fiscal': 974, 'Folha de Pagamento': 876, 'Contabil': 798 },
                  { mes: 'Abr/2025', 'Escrita Fiscal': 1185, 'Folha de Pagamento': 1071, 'Contabil': 1092 },
                  { mes: 'Mai/2025', 'Escrita Fiscal': 1077, 'Folha de Pagamento': 999, 'Contabil': 1053 },
                  { mes: 'Jun/2025', 'Escrita Fiscal': 991, 'Folha de Pagamento': 932, 'Contabil': 961 },
                  { mes: 'Jul/2025', 'Escrita Fiscal': 1164, 'Folha de Pagamento': 1000, 'Contabil': 1073 },
                  { mes: 'Ago/2025', 'Escrita Fiscal': 966, 'Folha de Pagamento': 885, 'Contabil': 847 },
                  { mes: 'Set/2025', 'Escrita Fiscal': 1092, 'Folha de Pagamento': 990, 'Contabil': 990 }
                ]}
                xKey="mes"
                yKey="Escrita Fiscal"
                color="#3B82F6"
                title="Evolução de Todos os Módulos"
                description="Horas trabalhadas por mês em todos os módulos do sistema"
                multiLine={[
                  { key: 'Escrita Fiscal', color: '#3B82F6', name: 'Escrita Fiscal' },
                  { key: 'Folha de Pagamento', color: '#10B981', name: 'Folha de Pagamento' },
                  { key: 'Contabil', color: '#F59E0B', name: 'Contabil' }
                ]}
              />
            </div>
          </CardContent>
        </Card>

        {/* Tabela Detalhada de Módulos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Detalhamento por Módulo
            </CardTitle>
            <CardDescription>
              Visão detalhada das horas trabalhadas em cada módulo por mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Módulo</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Jan/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Fev/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Mar/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Abr/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Mai/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Jun/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Jul/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Ago/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Set/2025</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700 bg-gray-50">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockComparativoModulos.map((modulo, index) => (
                    <tr key={modulo.modulo} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="py-3 px-4 font-medium text-gray-900">{modulo.modulo}</td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '1.145h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '1.175h' :
                         modulo.modulo === 'Contabil' ? '945h' :
                         modulo.modulo === 'Honorários' ? '61h' :
                         modulo.modulo === 'Patrimônio' ? '9h' :
                         modulo.modulo === 'Lalur' ? '8h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '1.051h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '1.171h' :
                         modulo.modulo === 'Contabil' ? '994h' :
                         modulo.modulo === 'Honorários' ? '45h' :
                         modulo.modulo === 'Patrimônio' ? '10h' :
                         modulo.modulo === 'Lalur' ? '1h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '974h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '876h' :
                         modulo.modulo === 'Contabil' ? '798h' :
                         modulo.modulo === 'Honorários' ? '40h' :
                         modulo.modulo === 'Patrimônio' ? '4h' :
                         modulo.modulo === 'Lalur' ? '6h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '1.185h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '1.071h' :
                         modulo.modulo === 'Contabil' ? '1.092h' :
                         modulo.modulo === 'Honorários' ? '40h' :
                         modulo.modulo === 'Patrimônio' ? '11h' :
                         modulo.modulo === 'Lalur' ? '6h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '1.077h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '999h' :
                         modulo.modulo === 'Contabil' ? '1.053h' :
                         modulo.modulo === 'Honorários' ? '40h' :
                         modulo.modulo === 'Patrimônio' ? '11h' :
                         modulo.modulo === 'Lalur' ? '3h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '991h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '932h' :
                         modulo.modulo === 'Contabil' ? '961h' :
                         modulo.modulo === 'Honorários' ? '43h' :
                         modulo.modulo === 'Patrimônio' ? '7h' :
                         modulo.modulo === 'Lalur' ? '0h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '1.164h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '1.000h' :
                         modulo.modulo === 'Contabil' ? '1.073h' :
                         modulo.modulo === 'Honorários' ? '48h' :
                         modulo.modulo === 'Patrimônio' ? '4h' :
                         modulo.modulo === 'Lalur' ? '8h' :
                         modulo.modulo === 'Atualizar' ? '2h' :
                         modulo.modulo === 'Protocolos' ? '1h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '966h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '885h' :
                         modulo.modulo === 'Contabil' ? '847h' :
                         modulo.modulo === 'Honorários' ? '50h' :
                         modulo.modulo === 'Patrimônio' ? '4h' :
                         modulo.modulo === 'Lalur' ? '1h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono">
                        {modulo.modulo === 'Escrita Fiscal' ? '1.092h' : 
                         modulo.modulo === 'Folha de Pagamento' ? '990h' :
                         modulo.modulo === 'Contabil' ? '990h' :
                         modulo.modulo === 'Honorários' ? '77h' :
                         modulo.modulo === 'Patrimônio' ? '11h' :
                         modulo.modulo === 'Lalur' ? '1h' :
                         modulo.modulo === 'Atualizar' ? '0h' :
                         modulo.modulo === 'Protocolos' ? '0h' : '0h'}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-600 font-mono font-bold bg-gray-100">
                        {modulo.total_hours.toLocaleString()}h
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}