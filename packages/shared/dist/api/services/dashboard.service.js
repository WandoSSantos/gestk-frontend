import { apiClient } from '../client';
export const dashboardService = {
    // Dashboard Demográfico
    demografico: {
        dados: (filtros) => apiClient.get('/dashboards/demografico/', {
            params: filtros
        }),
        indicadores: (filtros) => apiClient.get('/dashboards/demografico/indicadores/', {
            params: filtros
        }),
        colaboradores: (filtros) => apiClient.get('/dashboards/demografico/colaboradores/', {
            params: filtros
        }),
        distribuicoes: (filtros) => apiClient.get('/dashboards/demografico/distribuicoes/', {
            params: filtros
        }),
        exportar: (filtros, formato) => apiClient.post('/dashboards/demografico/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Dashboard Fiscal
    fiscal: {
        dados: (filtros) => apiClient.get('/dashboards/fiscal/', {
            params: filtros
        }),
        faturamento: (filtros) => apiClient.get('/dashboards/fiscal/faturamento/', {
            params: filtros
        }),
        produtos: (filtros) => apiClient.get('/dashboards/fiscal/produtos/', {
            params: filtros
        }),
        clientes: (filtros) => apiClient.get('/dashboards/fiscal/clientes/', {
            params: filtros
        }),
        impostos: (filtros) => apiClient.get('/dashboards/fiscal/impostos/', {
            params: filtros
        }),
        exportar: (filtros, formato) => apiClient.post('/dashboards/fiscal/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Dashboard Contábil
    contabil: {
        dados: (filtros) => apiClient.get('/dashboards/contabil/', {
            params: filtros
        }),
        indicadores: (filtros) => apiClient.get('/dashboards/contabil/indicadores/', {
            params: filtros
        }),
        grupos: (filtros) => apiClient.get('/dashboards/contabil/grupos/', {
            params: filtros
        }),
        contas: (filtros) => apiClient.get('/dashboards/contabil/contas/', {
            params: filtros
        }),
        exportar: (filtros, formato) => apiClient.post('/dashboards/contabil/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Dashboard Indicadores
    indicadores: {
        dados: (filtros) => apiClient.get('/dashboards/indicadores/', {
            params: filtros
        }),
        financeiros: (filtros) => apiClient.get('/dashboards/indicadores/financeiros/', {
            params: filtros
        }),
        operacionais: (filtros) => apiClient.get('/dashboards/indicadores/operacionais/', {
            params: filtros
        }),
        patrimoniais: (filtros) => apiClient.get('/dashboards/indicadores/patrimoniais/', {
            params: filtros
        }),
        tendencias: (filtros) => apiClient.get('/dashboards/indicadores/tendencias/', {
            params: filtros
        }),
        exportar: (filtros, formato) => apiClient.post('/dashboards/indicadores/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Dashboard DRE
    dre: {
        dados: (filtros) => apiClient.get('/dashboards/dre/', {
            params: filtros
        }),
        composicao: (filtros) => apiClient.get('/dashboards/dre/composicao/', {
            params: filtros
        }),
        evolucao: (filtros) => apiClient.get('/dashboards/dre/evolucao/', {
            params: filtros
        }),
        analise_vertical: (filtros) => apiClient.get('/dashboards/dre/analise-vertical/', {
            params: filtros
        }),
        analise_horizontal: (filtros) => apiClient.get('/dashboards/dre/analise-horizontal/', {
            params: filtros
        }),
        exportar: (filtros, formato) => apiClient.post('/dashboards/dre/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    }
};
//# sourceMappingURL=dashboard.service.js.map