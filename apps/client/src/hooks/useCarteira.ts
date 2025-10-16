import { useState, useCallback } from 'react';
import { CarteiraService } from '../lib/services/carteira.service';
import { useApi } from '@gestk/shared';
import type { CarteiraCliente, ClienteFilters, DjangoApiResponse } from '@gestk/shared';

export function useCarteira(filtros?: ClienteFilters) {
  const [filtrosAtuais, setFiltrosAtuais] = useState<ClienteFilters>(filtros || {});
  
  const { data, loading, error, refetch } = useApi<DjangoApiResponse<CarteiraCliente>>(
    '/api/gestao/carteira/',
    {
      params: filtrosAtuais,
      immediate: true
    }
  );

  const aplicarFiltros = useCallback((novosFiltros: ClienteFilters) => {
    setFiltrosAtuais(prev => ({ ...prev, ...novosFiltros }));
  }, []);

  const limparFiltros = useCallback(() => {
    setFiltrosAtuais({});
  }, []);

  const getAniversariosParceria = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return CarteiraService.getAniversariosParceria(filtros);
  }, []);

  const getSociosAniversariantes = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return CarteiraService.getSociosAniversariantes(filtros);
  }, []);

  const getComposicaoSocietaria = useCallback(async (id: string) => {
    return CarteiraService.getComposicaoSocietaria(id);
  }, []);

  const getDistribuicaoRegime = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return CarteiraService.getDistribuicaoRegime(filtros);
  }, []);

  const getDistribuicaoRamo = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return CarteiraService.getDistribuicaoRamo(filtros);
  }, []);

  const getEvolucao = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return CarteiraService.getEvolucao(filtros);
  }, []);

  const getEstatisticas = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return CarteiraService.getEstatisticas(filtros);
  }, []);

  return {
    carteira: data,
    loading,
    error,
    refetch,
    aplicarFiltros,
    limparFiltros,
    getAniversariosParceria,
    getSociosAniversariantes,
    getComposicaoSocietaria,
    getDistribuicaoRegime,
    getDistribuicaoRamo,
    getEvolucao,
    getEstatisticas
  };
}








