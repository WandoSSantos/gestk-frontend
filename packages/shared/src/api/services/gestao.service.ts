import { apiClient } from '../client';
import type {
  CarteiraCliente,
  CategoriaCliente,
  EvolucaoMensal,
  ClienteDetalhado,
  UsuarioAtividade,
  AtividadeUsuario,
  ProdutividadeUsuario,
  KPIEscritorio,
  ResultadoFinanceiro,
  FiltrosCarteira,
  FiltrosClientes,
  FiltrosUsuarios,
  PaginationParams,
  PaginatedResponse
} from '../types/client.types';

export const gestaoService = {
  // Serviços para Carteira
  carteira: {
    listar: (filtros: FiltrosCarteira & PaginationParams) =>
      apiClient.get<PaginatedResponse<CarteiraCliente>>('/gestao/carteira/clientes/', {
        params: filtros
      }),

    categorias: (filtros?: FiltrosCarteira) =>
      apiClient.get<CategoriaCliente[]>('/gestao/carteira/categorias/', {
        params: filtros
      }),

    evolucao: (periodo: { data_inicio: string; data_fim: string }) =>
      apiClient.get<EvolucaoMensal[]>('/gestao/carteira/evolucao/', {
        params: periodo
      }),

    exportar: (filtros: FiltrosCarteira, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/gestao/carteira/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Serviços para Clientes
  clientes: {
    listar: (filtros: FiltrosClientes & PaginationParams) =>
      apiClient.get<PaginatedResponse<ClienteDetalhado>>('/gestao/clientes/lista/', {
        params: filtros
      }),

    detalhes: (id: string) =>
      apiClient.get<ClienteDetalhado>(`/gestao/clientes/detalhes/${id}/`),

    socios: (clienteId: string) =>
      apiClient.get(`/gestao/clientes/${clienteId}/socios/`),

    atividades: (clienteId: string, filtros?: { data_inicio?: string; data_fim?: string }) =>
      apiClient.get<AtividadeUsuario[]>(`/gestao/clientes/${clienteId}/atividades/`, {
        params: filtros
      }),

    exportar: (filtros: FiltrosClientes, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/gestao/clientes/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Serviços para Usuários
  usuarios: {
    listar: (filtros: FiltrosUsuarios & PaginationParams) =>
      apiClient.get<PaginatedResponse<UsuarioAtividade>>('/gestao/usuarios/lista/', {
        params: filtros
      }),

    atividades: (usuarioId: string, filtros?: { data_inicio?: string; data_fim?: string }) =>
      apiClient.get<AtividadeUsuario[]>(`/gestao/usuarios/${usuarioId}/atividades/`, {
        params: filtros
      }),

    produtividade: (filtros: { data_inicio: string; data_fim: string; usuario_id?: string }) =>
      apiClient.get<ProdutividadeUsuario[]>('/gestao/usuarios/produtividade/', {
        params: filtros
      }),

    relatorio: (filtros: FiltrosUsuarios, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/gestao/usuarios/relatorio/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Serviços para Análise do Escritório
  escritorio: {
    kpis: (periodo: { data_inicio: string; data_fim: string }) =>
      apiClient.get<KPIEscritorio[]>('/gestao/escritorio/kpis/', {
        params: periodo
      }),

    resultados: (periodo: { data_inicio: string; data_fim: string }) =>
      apiClient.get<ResultadoFinanceiro>('/gestao/escritorio/resultados/', {
        params: periodo
      }),

    comparativo: (periodos: {
      atual: { data_inicio: string; data_fim: string };
      anterior: { data_inicio: string; data_fim: string };
    }) =>
      apiClient.get('/gestao/escritorio/comparativo/', {
        params: periodos
      }),

    exportar: (periodo: { data_inicio: string; data_fim: string }, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/gestao/escritorio/exportar/', {
        periodo,
        formato
      }, {
        responseType: 'blob'
      })
  }
};

