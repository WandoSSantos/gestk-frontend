import { apiClient } from '../client';
import type {
  DashboardDemografico,
  DashboardFiscal,
  DashboardContabil,
  DashboardIndicadores,
  DashboardDRE,
  FiltrosDashboard
} from '../types/client.types';

export const dashboardService = {
  // Dashboard Demográfico
  demografico: {
    dados: (filtros: FiltrosDashboard) =>
      apiClient.get<DashboardDemografico>('/dashboards/demografico/', {
        params: filtros
      }),

    indicadores: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/demografico/indicadores/', {
        params: filtros
      }),

    colaboradores: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/demografico/colaboradores/', {
        params: filtros
      }),

    distribuicoes: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/demografico/distribuicoes/', {
        params: filtros
      }),

    exportar: (filtros: FiltrosDashboard, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/dashboards/demografico/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Dashboard Fiscal
  fiscal: {
    dados: (filtros: FiltrosDashboard) =>
      apiClient.get<DashboardFiscal>('/dashboards/fiscal/', {
        params: filtros
      }),

    faturamento: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/fiscal/faturamento/', {
        params: filtros
      }),

    produtos: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/fiscal/produtos/', {
        params: filtros
      }),

    clientes: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/fiscal/clientes/', {
        params: filtros
      }),

    impostos: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/fiscal/impostos/', {
        params: filtros
      }),

    exportar: (filtros: FiltrosDashboard, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/dashboards/fiscal/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Dashboard Contábil
  contabil: {
    dados: (filtros: FiltrosDashboard) =>
      apiClient.get<DashboardContabil>('/dashboards/contabil/', {
        params: filtros
      }),

    indicadores: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/contabil/indicadores/', {
        params: filtros
      }),

    grupos: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/contabil/grupos/', {
        params: filtros
      }),

    contas: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/contabil/contas/', {
        params: filtros
      }),

    exportar: (filtros: FiltrosDashboard, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/dashboards/contabil/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Dashboard Indicadores
  indicadores: {
    dados: (filtros: FiltrosDashboard) =>
      apiClient.get<DashboardIndicadores>('/dashboards/indicadores/', {
        params: filtros
      }),

    financeiros: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/indicadores/financeiros/', {
        params: filtros
      }),

    operacionais: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/indicadores/operacionais/', {
        params: filtros
      }),

    patrimoniais: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/indicadores/patrimoniais/', {
        params: filtros
      }),

    tendencias: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/indicadores/tendencias/', {
        params: filtros
      }),

    exportar: (filtros: FiltrosDashboard, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/dashboards/indicadores/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  },

  // Dashboard DRE
  dre: {
    dados: (filtros: FiltrosDashboard) =>
      apiClient.get<DashboardDRE>('/dashboards/dre/', {
        params: filtros
      }),

    composicao: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/dre/composicao/', {
        params: filtros
      }),

    evolucao: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/dre/evolucao/', {
        params: filtros
      }),

    analise_vertical: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/dre/analise-vertical/', {
        params: filtros
      }),

    analise_horizontal: (filtros: FiltrosDashboard) =>
      apiClient.get('/dashboards/dre/analise-horizontal/', {
        params: filtros
      }),

    exportar: (filtros: FiltrosDashboard, formato: 'pdf' | 'excel' | 'csv') =>
      apiClient.post('/dashboards/dre/exportar/', {
        filtros,
        formato
      }, {
        responseType: 'blob'
      })
  }
};

