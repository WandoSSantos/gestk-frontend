import { useState, useCallback } from 'react';
import { UsuariosService } from '../lib/services/usuarios.service';
import { useApi } from '@gestk/shared';
import type { User, UsuarioFilters, DjangoApiResponse } from '@gestk/shared';

export function useUsuarios(filtros?: UsuarioFilters) {
  const [filtrosAtuais, setFiltrosAtuais] = useState<UsuarioFilters>(filtros || {});
  
  const { data, loading, error, refetch } = useApi<DjangoApiResponse<User>>(
    '/api/gestao/usuarios/lista/',
    {
      params: filtrosAtuais,
      immediate: true
    }
  );

  const aplicarFiltros = useCallback((novosFiltros: UsuarioFilters) => {
    setFiltrosAtuais(prev => ({ ...prev, ...novosFiltros }));
  }, []);

  const limparFiltros = useCallback(() => {
    setFiltrosAtuais({});
  }, []);

  const getPerformance = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getPerformance(filtros);
  }, []);

  const getAtividadesCompetencia = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getAtividadesCompetencia(filtros);
  }, []);

  const getAtividadesCliente = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getAtividadesCliente(filtros);
  }, []);

  const getProdutividade = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getProdutividade(filtros);
  }, []);

  const getEficiencia = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getEficiencia(filtros);
  }, []);

  const getAtividadesModulo = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getAtividadesModulo(filtros);
  }, []);

  const getEvolucaoModulos = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getEvolucaoModulos(filtros);
  }, []);

  const getEstatisticas = useCallback(async (filtros?: { data_inicio?: string; data_fim?: string }) => {
    return UsuariosService.getEstatisticas(filtros);
  }, []);

  return {
    usuarios: data,
    loading,
    error,
    refetch,
    aplicarFiltros,
    limparFiltros,
    getPerformance,
    getAtividadesCompetencia,
    getAtividadesCliente,
    getProdutividade,
    getEficiencia,
    getAtividadesModulo,
    getEvolucaoModulos,
    getEstatisticas
  };
}




