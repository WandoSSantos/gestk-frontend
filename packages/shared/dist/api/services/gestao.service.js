import { apiClient } from '../client';
export const gestaoService = {
    // Serviços para Carteira
    carteira: {
        // Listar clientes da carteira com filtros e paginação
        listar: (filtros) => apiClient.get('/gestao/carteira/clientes/', {
            params: filtros
        }),
        // Obter detalhes de um cliente específico
        detalhes: (id) => apiClient.get(`/gestao/carteira/clientes/${id}/`),
        // Atualizar dados do cliente
        atualizar: (id, data) => apiClient.put(`/gestao/carteira/clientes/${id}/`, data),
        // Resumo e estatísticas da carteira
        resumo: () => apiClient.get('/gestao/carteira/resumo/'),
        // Categorias de clientes
        categorias: (filtros) => apiClient.get('/gestao/carteira/categorias/', {
            params: filtros
        }),
        // Evolução mensal da carteira
        evolucao: (periodo) => apiClient.get('/gestao/carteira/evolucao/', {
            params: periodo
        }),
        // Aniversários de parceria (data de início do contrato)
        aniversarios: (meses) => apiClient.get('/gestao/carteira/aniversarios-parceria/', {
            params: meses ? { meses } : {}
        }),
        // Sócios aniversariantes
        sociosAniversariantes: (meses) => apiClient.get('/gestao/carteira/socios-aniversariantes/', {
            params: meses ? { meses } : {}
        }),
        // Composição societária de um cliente
        composicaoSocietaria: (clienteId) => apiClient.get(`/gestao/carteira/composicao-societaria/${clienteId}/`),
        // Distribuição por regime tributário
        regimeTributario: () => apiClient.get('/gestao/carteira/regime-tributario/'),
        // Distribuição por ramo de atividade
        ramoAtividade: () => apiClient.get('/gestao/carteira/ramo-atividade/'),
        // Exportar carteira em diferentes formatos
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