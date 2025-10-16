import { useState, useCallback } from 'react';
import { ClientesService } from '../lib/services/clientes.service';
import { useApi } from '@gestk/shared';
import type { ClienteDetalhado, ClienteFilters, DjangoApiResponse, SimulacaoCustoPayload } from '@gestk/shared';

export function useClientes(filtros?: ClienteFilters) {
  const [filtrosAtuais, setFiltrosAtuais] = useState<ClienteFilters>(filtros || {});
  
  const { data, loading, error, refetch } = useApi<DjangoApiResponse<ClienteDetalhado>>(
    '/api/gestao/clientes/lista/',
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

  const getCliente = useCallback(async (id: string) => {
    return ClientesService.getCliente(id);
  }, []);

  const getCustoOperacional = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string; cliente_id?: string }) => {
    return ClientesService.getCustoOperacional(filtros);
  }, []);

  const getRentabilidade = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string; cliente_id?: string }) => {
    return ClientesService.getRentabilidade(filtros);
  }, []);

  const simularCusto = useCallback(async (data: SimulacaoCustoPayload) => {
    return ClientesService.simularCusto(data);
  }, []);

  const getValorHora = useCallback(async () => {
    return ClientesService.getValorHora();
  }, []);

  const updateValorHora = useCallback(async (valor: number) => {
    return ClientesService.updateValorHora(valor);
  }, []);

  const getComposicaoSocietaria = useCallback(async (clienteId: string) => {
    return ClientesService.getComposicaoSocietaria(clienteId);
  }, []);

  const getHistoricoAtividades = useCallback(async (clienteId: string, filtros?: { data_inicio?: string; data_fim?: string }) => {
    return ClientesService.getHistoricoAtividades(clienteId, filtros);
  }, []);

  return {
    clientes: data,
    loading,
    error,
    refetch,
    aplicarFiltros,
    limparFiltros,
    getCliente,
    getCustoOperacional,
    getRentabilidade,
    simularCusto,
    getValorHora,
    updateValorHora,
    getComposicaoSocietaria,
    getHistoricoAtividades
  };
}








