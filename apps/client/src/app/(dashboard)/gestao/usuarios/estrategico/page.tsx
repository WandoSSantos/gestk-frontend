'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { 
  EficienciaVsProdutividadeChart,
  TendenciaEvolucaoChart,
  ComparativoPeriodoChart,
  TopUsuariosChart,
  HeatmapProdutividade,
  IndicadoresKPIs,
  AlertasPerformance
} from '@/components/charts';
import { 
  mockAtividadesUsuarios,
  mockDadosEstrategicos,
  type AtividadeUsuario
} from '@/lib/mocks';
import { format, parseISO, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function EstrategicoPage() {
  const [dataInicio, setDataInicio] = useState('2025-01-01');
  const [dataFim, setDataFim] = useState('2025-09-30');
  const [filtroUsuario, setFiltroUsuario] = useState('');

  // Filtrar dados por período
  const dadosFiltrados = useMemo(() => {
    const inicio = parseISO(dataInicio);
    const fim = parseISO(dataFim);

    return mockAtividadesUsuarios.filter(ativ => {
      const competencia = parseISO(ativ.competencia + '-01');
      return competencia >= inicio && competencia <= fim;
    });
  }, [dataInicio, dataFim]);

  // Dados para análise estratégica
  const dadosEstrategicos = useMemo(() => {
    // Agrupar por usuário
    const agrupado = dadosFiltrados.reduce((acc, ativ) => {
      if (!acc[ativ.usuario]) {
        acc[ativ.usuario] = {
          usuario: ativ.usuario,
          total_horas: 0,
          total_lancamentos: 0,
          eficiencia_media: 0,
          produtividade_media: 0,
          competencias: []
        };
      }
      
      const [hours, minutes, seconds] = ativ.horas_trabalhadas.split(':').map(Number);
      const totalHoras = hours + (minutes / 60) + (seconds / 3600);
      
      acc[ativ.usuario].total_horas += totalHoras;
      acc[ativ.usuario].total_lancamentos += ativ.lancamentos;
      acc[ativ.usuario].competencias.push(ativ);
      
      return acc;
    }, {} as Record<string, any>);

    // Calcular médias
    Object.values(agrupado).forEach((usuario: any) => {
      usuario.eficiencia_media = usuario.competencias.reduce((acc: number, c: AtividadeUsuario) => acc + c.eficiencia, 0) / usuario.competencias.length;
      usuario.produtividade_media = usuario.competencias.reduce((acc: number, c: AtividadeUsuario) => acc + c.produtividade, 0) / usuario.competencias.length;
    });

    return Object.values(agrupado);
  }, [dadosFiltrados]);

  // Dados para gráfico de eficiência vs produtividade
  const dadosEficienciaProdutividade = useMemo(() => {
    return dadosEstrategicos
      .filter(usuario => 
        !filtroUsuario || usuario.usuario.toLowerCase().includes(filtroUsuario.toLowerCase())
      )
      .map(usuario => ({
        usuario: usuario.usuario,
        eficiencia: usuario.eficiencia_media,
        produtividade: usuario.produtividade_media,
        horas: usuario.total_horas
      }));
  }, [dadosEstrategicos, filtroUsuario]);

  // Dados para evolução de tendências
  const dadosTendencias = useMemo(() => {
    const agrupado = dadosFiltrados.reduce((acc, ativ) => {
      const mes = format(parseISO(ativ.competencia + '-01'), 'MMM/yyyy', { locale: ptBR });
      if (!acc[mes]) {
        acc[mes] = {
          mes,
          atividades: 0,
          eficiencia_media: 0,
          produtividade_media: 0,
          usuarios: []
        };
      }
      
      acc[mes].atividades += ativ.lancamentos;
      acc[mes].usuarios.push(ativ);
      
      return acc;
    }, {} as Record<string, any>);

    // Calcular médias por mês
    Object.values(agrupado).forEach((mes: any) => {
      mes.eficiencia_media = mes.usuarios.reduce((acc: number, u: AtividadeUsuario) => acc + u.eficiencia, 0) / mes.usuarios.length;
      mes.produtividade_media = mes.usuarios.reduce((acc: number, u: AtividadeUsuario) => acc + u.produtividade, 0) / mes.usuarios.length;
    });

    return Object.values(agrupado)
      .sort((a, b) => parseISO(a.mes.split('/')[1] + '-' + a.mes.split('/')[0]) - parseISO(b.mes.split('/')[1] + '-' + b.mes.split('/')[0]));
  }, [dadosFiltrados]);

  // Dados para comparativo com período anterior
  const dadosComparativo = useMemo(() => {
    const periodoAtual = dadosFiltrados;
    const inicioAnterior = subMonths(parseISO(dataInicio), 9);
    const fimAnterior = subMonths(parseISO(dataFim), 9);
    
    const periodoAnterior = mockAtividadesUsuarios.filter(ativ => {
      const competencia = parseISO(ativ.competencia + '-01');
      return competencia >= inicioAnterior && competencia <= fimAnterior;
    });

    const calcularMetricas = (dados: AtividadeUsuario[]) => {
      const totalAtividades = dados.reduce((acc, ativ) => acc + ativ.lancamentos, 0);
      const totalHoras = dados.reduce((acc, ativ) => {
        const [hours, minutes, seconds] = ativ.horas_trabalhadas.split(':').map(Number);
        return acc + hours + (minutes / 60) + (seconds / 3600);
      }, 0);
      const eficienciaMedia = dados.reduce((acc, ativ) => acc + ativ.eficiencia, 0) / dados.length;
      const produtividadeMedia = dados.reduce((acc, ativ) => acc + ativ.produtividade, 0) / dados.length;

      return { totalAtividades, totalHoras, eficienciaMedia, produtividadeMedia };
    };

    const atual = calcularMetricas(periodoAtual);
    const anterior = calcularMetricas(periodoAnterior);

    return [
      {
        categoria: 'Atividades',
        atual: atual.totalAtividades,
        anterior: anterior.totalAtividades,
        variacao: ((atual.totalAtividades - anterior.totalAtividades) / anterior.totalAtividades) * 100
      },
      {
        categoria: 'Horas',
        atual: atual.totalHoras,
        anterior: anterior.totalHoras,
        variacao: ((atual.totalHoras - anterior.totalHoras) / anterior.totalHoras) * 100
      },
      {
        categoria: 'Eficiência',
        atual: atual.eficienciaMedia,
        anterior: anterior.eficienciaMedia,
        variacao: ((atual.eficienciaMedia - anterior.eficienciaMedia) / anterior.eficienciaMedia) * 100
      },
      {
        categoria: 'Produtividade',
        atual: atual.produtividadeMedia,
        anterior: anterior.produtividadeMedia,
        variacao: ((atual.produtividadeMedia - anterior.produtividadeMedia) / anterior.produtividadeMedia) * 100
      }
    ];
  }, [dadosFiltrados, dataInicio, dataFim]);

  // Top usuários mais produtivos
  const topUsuarios = useMemo(() => {
    return dadosEstrategicos
      .sort((a, b) => b.total_lancamentos - a.total_lancamentos)
      .slice(0, 5)
      .map(usuario => ({
        usuario: usuario.usuario,
        lancamentos: usuario.total_lancamentos,
        produtividade: usuario.produtividade_media
      }));
  }, [dadosEstrategicos]);

  // KPIs gerais
  const kpis = useMemo(() => {
    const totalUsuarios = dadosEstrategicos.length;
    const eficienciaMedia = dadosEstrategicos.reduce((acc, u) => acc + u.eficiencia_media, 0) / totalUsuarios;
    const produtividadeMedia = dadosEstrategicos.reduce((acc, u) => acc + u.produtividade_media, 0) / totalUsuarios;
    const horasTotais = dadosEstrategicos.reduce((acc, u) => acc + u.total_horas, 0);

    return { totalUsuarios, eficienciaMedia, produtividadeMedia, horasTotais };
  }, [dadosEstrategicos]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Estratégico de Usuários</h1>
          <p className="text-gray-600 mt-1">
            Análise avançada para tomada de decisões estratégicas
          </p>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Análise</CardTitle>
          <CardDescription>
            Configure o período e usuários para análise estratégica
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Data Início</label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Data Fim</label>
              <Input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Filtrar Usuário</label>
              <Input
                placeholder="Nome do usuário"
                value={filtroUsuario}
                onChange={(e) => setFiltroUsuario(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <IndicadoresKPIs
        totalUsuarios={kpis.totalUsuarios}
        eficienciaMedia={kpis.eficienciaMedia}
        produtividadeMedia={kpis.produtividadeMedia}
        horasTotais={kpis.horasTotais}
      />

      {/* Alertas */}
      <AlertasPerformance data={dadosEficienciaProdutividade} />

      {/* Gráficos Estratégicos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EficienciaVsProdutividadeChart data={dadosEficienciaProdutividade} />
        <TendenciaEvolucaoChart data={dadosTendencias} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComparativoPeriodoChart data={dadosComparativo} />
        <TopUsuariosChart data={topUsuarios} />
      </div>

      {/* Heatmap */}
      <HeatmapProdutividade data={dadosEficienciaProdutividade} />

      {/* Análise Detalhada */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Detalhada por Usuário</CardTitle>
          <CardDescription>
            Métricas individuais para análise de performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuário
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Horas
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Lançamentos
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Eficiência Média
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produtividade Média
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dadosEstrategicos
                  .filter(usuario => 
                    !filtroUsuario || usuario.usuario.toLowerCase().includes(filtroUsuario.toLowerCase())
                  )
                  .map((usuario) => {
                    const status = usuario.eficiencia_media >= 85 ? 'Excelente' : 
                                 usuario.eficiencia_media >= 75 ? 'Bom' : 
                                 usuario.eficiencia_media >= 65 ? 'Regular' : 'Atenção';
                    
                    const statusColor = usuario.eficiencia_media >= 85 ? 'text-green-600' : 
                                      usuario.eficiencia_media >= 75 ? 'text-blue-600' : 
                                      usuario.eficiencia_media >= 65 ? 'text-yellow-600' : 'text-red-600';

                    return (
                      <tr key={usuario.usuario} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {usuario.usuario}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {usuario.total_horas.toFixed(1)}h
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {usuario.total_lancamentos.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {usuario.eficiencia_media.toFixed(1)}%
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {usuario.produtividade_media.toFixed(1)}
                        </td>
                        <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${statusColor}`}>
                          {status}
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
}

