'use client';

import { useState, useEffect, useMemo } from 'react';
import type { CustoOperacional } from '@/lib/mocks/custo-operacional.mock';

interface UseSimulacaoIndividualProps {
  dadosOriginais: CustoOperacional[];
  empresaSelecionada: string | null;
}

export function useSimulacaoIndividual({ 
  dadosOriginais, 
  empresaSelecionada 
}: UseSimulacaoIndividualProps) {
  const [valorHora, setValorHora] = useState(24.90);

  // Filtrar dados da empresa selecionada
  const dadosEmpresa = useMemo(() => {
    if (!empresaSelecionada) {
      return dadosOriginais;
    }
    return dadosOriginais.filter(cliente => cliente.id === empresaSelecionada);
  }, [dadosOriginais, empresaSelecionada]);

  // Recalcular dados com novo valor hora para a empresa selecionada
  const dadosRecalculados = useMemo(() => {
    return dadosEmpresa.map(cliente => {
      const competenciasRecalculadas = cliente.competencias.map(comp => {
        // Calcular novo custo baseado no tempo gasto e novo valor hora
        const [hours, minutes, seconds] = comp.tempo_gasto_sistema.split(':').map(Number);
        const totalHours = hours + minutes / 60 + seconds / 3600;
        const novoCustoOperacional = totalHours * valorHora;
        
        // Recalcular rentabilidade (faturamento do escritório - novo custo)
        const novaRentabilidade = comp.faturamento_escritorio - novoCustoOperacional;

        return {
          ...comp,
          custo_operacional: novoCustoOperacional,
          rentabilidade_operacional: novaRentabilidade
        };
      });

      // Recalcular totais
      const totalCustoOperacional = competenciasRecalculadas.reduce((acc, comp) => acc + comp.custo_operacional, 0);
      const totalRentabilidade = competenciasRecalculadas.reduce((acc, comp) => acc + comp.rentabilidade_operacional, 0);

      return {
        ...cliente,
        valor_hora: valorHora,
        competencias: competenciasRecalculadas,
        total_custo_operacional: totalCustoOperacional,
        total_rentabilidade: totalRentabilidade
      };
    });
  }, [dadosEmpresa, valorHora]);

  // Calcular métricas agregadas para a empresa selecionada
  const metricasEmpresa = useMemo(() => {
    if (dadosRecalculados.length === 0) {
      return {
        totalCusto: 0,
        totalRentabilidade: 0,
        totalFaturamento: 0,
        totalTempoHoras: 0,
        totalCompetencias: 0,
        custoMedioPorCompetencia: 0,
        rentabilidadeMediaPorCompetencia: 0,
        margemRentabilidade: 0,
        eficienciaOperacional: 'N/A'
      };
    }

    const totalCusto = dadosRecalculados.reduce((acc, cliente) => acc + cliente.total_custo_operacional, 0);
    const totalRentabilidade = dadosRecalculados.reduce((acc, cliente) => acc + cliente.total_rentabilidade, 0);
    const totalFaturamento = dadosRecalculados.reduce((acc, cliente) => acc + cliente.total_faturamento, 0);
    
    // Calcular tempo total em horas
    const totalTempoHoras = dadosRecalculados.reduce((acc, cliente) => {
      return acc + cliente.competencias.reduce((compAcc, comp) => {
        const [hours, minutes, seconds] = comp.tempo_gasto_sistema.split(':').map(Number);
        return compAcc + hours + minutes / 60 + seconds / 3600;
      }, 0);
    }, 0);

    const totalCompetencias = dadosRecalculados.reduce((acc, cliente) => acc + cliente.competencias.length, 0);
    const custoMedioPorCompetencia = totalCompetencias > 0 ? totalCusto / totalCompetencias : 0;
    const rentabilidadeMediaPorCompetencia = totalCompetencias > 0 ? totalRentabilidade / totalCompetencias : 0;
    const margemRentabilidade = totalFaturamento > 0 ? (totalRentabilidade / totalFaturamento) * 100 : 0;
    
    // Calcular eficiência operacional
    const custoPorHora = totalTempoHoras > 0 ? totalCusto / totalTempoHoras : 0;
    let eficienciaOperacional = 'N/A';
    if (custoPorHora > 0) {
      if (custoPorHora <= valorHora * 0.8) {
        eficienciaOperacional = 'Alta';
      } else if (custoPorHora <= valorHora * 1.2) {
        eficienciaOperacional = 'Média';
      } else {
        eficienciaOperacional = 'Baixa';
      }
    }

    return {
      totalCusto,
      totalRentabilidade,
      totalFaturamento,
      totalTempoHoras,
      totalCompetencias,
      custoMedioPorCompetencia,
      rentabilidadeMediaPorCompetencia,
      margemRentabilidade,
      eficienciaOperacional
    };
  }, [dadosRecalculados, valorHora]);

  // Dados para gráficos específicos da empresa
  const dadosEvolucaoEmpresa = useMemo(() => {
    const dadosAgregados = dadosRecalculados.flatMap(cliente => 
      cliente.competencias.map(comp => ({
        name: comp.competencia,
        custo: comp.custo_operacional,
        rentabilidade: comp.rentabilidade_operacional,
        faturamento: comp.faturamento_empresa,
        tempo: comp.tempo_gasto_sistema,
        lancamentos: comp.lancamentos,
        lancamentos_manuais: comp.lancamentos_manuais
      }))
    );

    // Agrupar por competência
    const dadosAgrupados = dadosAgregados.reduce((acc, item) => {
      const existing = acc.find(x => x.name === item.name);
      if (existing) {
        existing.custo += item.custo;
        existing.rentabilidade += item.rentabilidade;
        existing.faturamento += item.faturamento;
        existing.lancamentos += item.lancamentos;
        existing.lancamentos_manuais += item.lancamentos_manuais;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, [] as any[]);

    return dadosAgrupados.sort((a, b) => {
      const [mesA, anoA] = a.name.split('/');
      const [mesB, anoB] = b.name.split('/');
      return new Date(anoA, mesA - 1).getTime() - new Date(anoB, mesB - 1).getTime();
    });
  }, [dadosRecalculados]);

  // Dados para análise de produtividade
  const dadosProdutividade = useMemo(() => {
    return dadosRecalculados.flatMap(cliente => 
      cliente.competencias.map(comp => ({
        competencia: comp.competencia,
        lancamentos_por_hora: comp.tempo_gasto_sistema ? 
          comp.lancamentos / (comp.tempo_gasto_sistema.split(':').map(Number).reduce((acc, val, i) => acc + val * Math.pow(60, 2-i), 0) / 3600) : 0,
        custo_por_lancamento: comp.lancamentos > 0 ? comp.custo_operacional / comp.lancamentos : 0,
        rentabilidade_por_hora: comp.tempo_gasto_sistema ? 
          comp.rentabilidade_operacional / (comp.tempo_gasto_sistema.split(':').map(Number).reduce((acc, val, i) => acc + val * Math.pow(60, 2-i), 0) / 3600) : 0
      }))
    );
  }, [dadosRecalculados]);

  // Análise de tendências
  const analiseTendencias = useMemo(() => {
    if (dadosEvolucaoEmpresa.length < 2) {
      return {
        tendenciaCusto: 'Estável',
        tendenciaRentabilidade: 'Estável',
        tendenciaFaturamento: 'Estável'
      };
    }

    const ultimos3 = dadosEvolucaoEmpresa.slice(-3);
    const anteriores3 = dadosEvolucaoEmpresa.slice(-6, -3);

    const calcularTendencia = (dados: any[], campo: string) => {
      if (dados.length < 2) return 'Estável';
      
      const mediaAtual = dados.reduce((acc, item) => acc + item[campo], 0) / dados.length;
      const mediaAnterior = anteriores3.length > 0 ? 
        anteriores3.reduce((acc, item) => acc + item[campo], 0) / anteriores3.length : mediaAtual;
      
      const variacao = ((mediaAtual - mediaAnterior) / mediaAnterior) * 100;
      
      if (variacao > 10) return 'Crescimento';
      if (variacao < -10) return 'Declínio';
      return 'Estável';
    };

    return {
      tendenciaCusto: calcularTendencia(ultimos3, 'custo'),
      tendenciaRentabilidade: calcularTendencia(ultimos3, 'rentabilidade'),
      tendenciaFaturamento: calcularTendencia(ultimos3, 'faturamento')
    };
  }, [dadosEvolucaoEmpresa]);

  const resetValorHora = () => {
    setValorHora(24.90);
  };

  return {
    valorHora,
    setValorHora,
    dadosRecalculados,
    metricasEmpresa,
    dadosEvolucaoEmpresa,
    dadosProdutividade,
    analiseTendencias,
    resetValorHora,
    empresaSelecionada,
    temEmpresaSelecionada: !!empresaSelecionada
  };
}

