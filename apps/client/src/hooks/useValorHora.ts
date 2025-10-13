'use client';

import { useState, useEffect, useMemo } from 'react';
import type { CustoOperacional } from '@/lib/mocks/custo-operacional.mock';

interface UseValorHoraProps {
  dadosOriginais: CustoOperacional[];
}

export function useValorHora({ dadosOriginais }: UseValorHoraProps) {
  const [valorHora, setValorHora] = useState(24.90);

  // Recalcular dados com novo valor hora
  const dadosRecalculados = useMemo(() => {
    return dadosOriginais.map(cliente => {
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
  }, [dadosOriginais, valorHora]);

  // Calcular métricas agregadas
  const metricasAgregadas = useMemo(() => {
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

    return {
      totalCusto,
      totalRentabilidade,
      totalFaturamento,
      totalTempoHoras,
      totalEmpresas: dadosRecalculados.length
    };
  }, [dadosRecalculados]);

  // Dados para gráficos
  const dadosEvolucao = useMemo(() => {
    const dadosAgregados = dadosRecalculados.flatMap(cliente => 
      cliente.competencias.map(comp => ({
        name: comp.competencia,
        empresa: cliente.empresa,
        custo: comp.custo_operacional,
        rentabilidade: comp.rentabilidade_operacional,
        faturamento: comp.faturamento_empresa
      }))
    );

    // Agrupar por competência
    const dadosAgrupados = dadosAgregados.reduce((acc, item) => {
      const existing = acc.find(x => x.name === item.name);
      if (existing) {
        existing.custo += item.custo;
        existing.rentabilidade += item.rentabilidade;
        existing.faturamento += item.faturamento;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, [] as any[]);

    return dadosAgrupados;
  }, [dadosRecalculados]);

  const dadosResumo = useMemo(() => {
    return dadosRecalculados.map(cliente => ({
      empresa: cliente.empresa,
      total_custo: cliente.total_custo_operacional,
      total_rentabilidade: cliente.total_rentabilidade,
      total_faturamento: cliente.total_faturamento,
      tempo_sistema: cliente.total_tempo_sistema
    }));
  }, [dadosRecalculados]);

  return {
    valorHora,
    setValorHora,
    dadosRecalculados,
    metricasAgregadas,
    dadosEvolucao,
    dadosResumo
  };
}

