import { useCallback } from 'react';
import { DashboardService } from '../lib/services/dashboard.service';
import type { DateFilters } from '@gestk/shared';

export function useDashboards() {
  // Dashboard Demográfico
  const getDemograficoIndicadores = useCallback(async () => {
    return DashboardService.getDemograficoIndicadores();
  }, []);

  const getDemograficoColaboradores = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getDemograficoColaboradores(filtros);
  }, []);

  const getDemograficoDistribuicoes = useCallback(async () => {
    return DashboardService.getDemograficoDistribuicoes();
  }, []);

  // Dashboard Fiscal
  const getFiscalFaturamento = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getFiscalFaturamento(filtros);
  }, []);

  const getFiscalProdutos = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getFiscalProdutos(filtros);
  }, []);

  const getFiscalClientes = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getFiscalClientes(filtros);
  }, []);

  const getFiscalGeolocalizacao = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getFiscalGeolocalizacao(filtros);
  }, []);

  const getFiscalImpostos = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getFiscalImpostos(filtros);
  }, []);

  // Dashboard Contábil
  const getContabilIndicadores = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getContabilIndicadores(filtros);
  }, []);

  const getContabilEvolucao = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getContabilEvolucao(filtros);
  }, []);

  const getContabilGrupos = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getContabilGrupos(filtros);
  }, []);

  const getContabilTopContas = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getContabilTopContas(filtros);
  }, []);

  // Dashboard Indicadores
  const getIndicadoresFinanceiros = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getIndicadoresFinanceiros(filtros);
  }, []);

  const getIndicadoresOperacionais = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getIndicadoresOperacionais(filtros);
  }, []);

  const getIndicadoresPatrimoniais = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getIndicadoresPatrimoniais(filtros);
  }, []);

  // Dashboard DRE
  const getDREComposicao = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getDREComposicao(filtros);
  }, []);

  const getDREEvolucao = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getDREEvolucao(filtros);
  }, []);

  const getDREAnaliseVertical = useCallback(async (filtros?: DateFilters) => {
    return DashboardService.getDREAnaliseVertical(filtros);
  }, []);

  return {
    demografico: {
      getIndicadores: getDemograficoIndicadores,
      getColaboradores: getDemograficoColaboradores,
      getDistribuicoes: getDemograficoDistribuicoes
    },
    fiscal: {
      getFaturamento: getFiscalFaturamento,
      getProdutos: getFiscalProdutos,
      getClientes: getFiscalClientes,
      getGeolocalizacao: getFiscalGeolocalizacao,
      getImpostos: getFiscalImpostos
    },
    contabil: {
      getIndicadores: getContabilIndicadores,
      getEvolucao: getContabilEvolucao,
      getGrupos: getContabilGrupos,
      getTopContas: getContabilTopContas
    },
    indicadores: {
      getFinanceiros: getIndicadoresFinanceiros,
      getOperacionais: getIndicadoresOperacionais,
      getPatrimoniais: getIndicadoresPatrimoniais
    },
    dre: {
      getComposicao: getDREComposicao,
      getEvolucao: getDREEvolucao,
      getAnaliseVertical: getDREAnaliseVertical
    }
  };
}







