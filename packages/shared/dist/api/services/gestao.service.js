import { apiClient } from '../client';
export const gestaoService = {
    // Serviços para Carteira
    carteira: {
        listar: (filtros) => apiClient.get('/gestao/carteira/clientes/', {
            params: filtros
        }),
        categorias: (filtros) => apiClient.get('/gestao/carteira/categorias/', {
            params: filtros
        }),
        evolucao: (periodo) => apiClient.get('/gestao/carteira/evolucao/', {
            params: periodo
        }),
        exportar: (filtros, formato) => apiClient.post('/gestao/carteira/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Serviços para Clientes
    clientes: {
        listar: (filtros) => apiClient.get('/gestao/clientes/lista/', {
            params: filtros
        }),
        detalhes: (id) => apiClient.get(`/gestao/clientes/detalhes/${id}/`),
        socios: (clienteId) => apiClient.get(`/gestao/clientes/${clienteId}/socios/`),
        atividades: (clienteId, filtros) => apiClient.get(`/gestao/clientes/${clienteId}/atividades/`, {
            params: filtros
        }),
        exportar: (filtros, formato) => apiClient.post('/gestao/clientes/exportar/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Serviços para Usuários
    usuarios: {
        listar: (filtros) => apiClient.get('/gestao/usuarios/lista/', {
            params: filtros
        }),
        atividades: (usuarioId, filtros) => apiClient.get(`/gestao/usuarios/${usuarioId}/atividades/`, {
            params: filtros
        }),
        produtividade: (filtros) => apiClient.get('/gestao/usuarios/produtividade/', {
            params: filtros
        }),
        relatorio: (filtros, formato) => apiClient.post('/gestao/usuarios/relatorio/', {
            filtros,
            formato
        }, {
            responseType: 'blob'
        })
    },
    // Serviços para Análise do Escritório
    escritorio: {
        kpis: (periodo) => apiClient.get('/gestao/escritorio/kpis/', {
            params: periodo
        }),
        resultados: (periodo) => apiClient.get('/gestao/escritorio/resultados/', {
            params: periodo
        }),
        comparativo: (periodos) => apiClient.get('/gestao/escritorio/comparativo/', {
            params: periodos
        }),
        exportar: (periodo, formato) => apiClient.post('/gestao/escritorio/exportar/', {
            periodo,
            formato
        }, {
            responseType: 'blob'
        })
    }
};
//# sourceMappingURL=gestao.service.js.map