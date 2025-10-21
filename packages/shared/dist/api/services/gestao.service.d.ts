import type { CarteiraCliente, CategoriaCliente, EvolucaoMensal, ClienteDetalhado, UsuarioAtividade, AtividadeUsuario, ProdutividadeUsuario, KPIEscritorio, ResultadoFinanceiro, FiltrosCarteira, FiltrosClientes, FiltrosUsuarios, PaginationParams, PaginatedResponse } from '../types/client.types';
export declare const gestaoService: {
    carteira: {
        listar: (filtros: FiltrosCarteira & PaginationParams) => Promise<PaginatedResponse<CarteiraCliente>>;
        detalhes: (id: string) => Promise<ClienteDetalhado>;
        atualizar: (id: string, data: Partial<CarteiraCliente>) => Promise<ClienteDetalhado>;
        resumo: () => Promise<any>;
        categorias: (filtros?: FiltrosCarteira) => Promise<CategoriaCliente[]>;
        evolucao: (periodo?: {
            data_inicio?: string;
            data_fim?: string;
            meses?: number;
        }) => Promise<EvolucaoMensal[]>;
        aniversarios: (meses?: number) => Promise<any>;
        sociosAniversariantes: (meses?: number) => Promise<any>;
        composicaoSocietaria: (clienteId: string) => Promise<any>;
        regimeTributario: () => Promise<any>;
        ramoAtividade: () => Promise<any>;
        exportar: (filtros: FiltrosCarteira, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    clientes: {
        listar: (filtros: FiltrosClientes & PaginationParams) => Promise<PaginatedResponse<ClienteDetalhado>>;
        detalhes: (id: string) => Promise<ClienteDetalhado>;
        socios: (clienteId: string) => Promise<any>;
        atividades: (clienteId: string, filtros?: {
            data_inicio?: string;
            data_fim?: string;
        }) => Promise<AtividadeUsuario[]>;
        exportar: (filtros: FiltrosClientes, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    usuarios: {
        listar: (filtros: FiltrosUsuarios & PaginationParams) => Promise<PaginatedResponse<UsuarioAtividade>>;
        atividades: (usuarioId: string, filtros?: {
            data_inicio?: string;
            data_fim?: string;
        }) => Promise<AtividadeUsuario[]>;
        produtividade: (filtros: {
            data_inicio: string;
            data_fim: string;
            usuario_id?: string;
        }) => Promise<ProdutividadeUsuario[]>;
        relatorio: (filtros: FiltrosUsuarios, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    escritorio: {
        kpis: (periodo: {
            data_inicio: string;
            data_fim: string;
        }) => Promise<KPIEscritorio[]>;
        resultados: (periodo: {
            data_inicio: string;
            data_fim: string;
        }) => Promise<ResultadoFinanceiro>;
        comparativo: (periodos: {
            atual: {
                data_inicio: string;
                data_fim: string;
            };
            anterior: {
                data_inicio: string;
                data_fim: string;
            };
        }) => Promise<any>;
        exportar: (periodo: {
            data_inicio: string;
            data_fim: string;
        }, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
};
//# sourceMappingURL=gestao.service.d.ts.map