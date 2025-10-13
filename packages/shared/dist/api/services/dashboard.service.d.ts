import type { DashboardDemografico, DashboardFiscal, DashboardContabil, DashboardIndicadores, DashboardDRE, FiltrosDashboard } from '../types/client.types';
export declare const dashboardService: {
    demografico: {
        dados: (filtros: FiltrosDashboard) => Promise<DashboardDemografico>;
        indicadores: (filtros: FiltrosDashboard) => Promise<any>;
        colaboradores: (filtros: FiltrosDashboard) => Promise<any>;
        distribuicoes: (filtros: FiltrosDashboard) => Promise<any>;
        exportar: (filtros: FiltrosDashboard, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    fiscal: {
        dados: (filtros: FiltrosDashboard) => Promise<DashboardFiscal>;
        faturamento: (filtros: FiltrosDashboard) => Promise<any>;
        produtos: (filtros: FiltrosDashboard) => Promise<any>;
        clientes: (filtros: FiltrosDashboard) => Promise<any>;
        impostos: (filtros: FiltrosDashboard) => Promise<any>;
        exportar: (filtros: FiltrosDashboard, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    contabil: {
        dados: (filtros: FiltrosDashboard) => Promise<DashboardContabil>;
        indicadores: (filtros: FiltrosDashboard) => Promise<any>;
        grupos: (filtros: FiltrosDashboard) => Promise<any>;
        contas: (filtros: FiltrosDashboard) => Promise<any>;
        exportar: (filtros: FiltrosDashboard, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    indicadores: {
        dados: (filtros: FiltrosDashboard) => Promise<DashboardIndicadores>;
        financeiros: (filtros: FiltrosDashboard) => Promise<any>;
        operacionais: (filtros: FiltrosDashboard) => Promise<any>;
        patrimoniais: (filtros: FiltrosDashboard) => Promise<any>;
        tendencias: (filtros: FiltrosDashboard) => Promise<any>;
        exportar: (filtros: FiltrosDashboard, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
    dre: {
        dados: (filtros: FiltrosDashboard) => Promise<DashboardDRE>;
        composicao: (filtros: FiltrosDashboard) => Promise<any>;
        evolucao: (filtros: FiltrosDashboard) => Promise<any>;
        analise_vertical: (filtros: FiltrosDashboard) => Promise<any>;
        analise_horizontal: (filtros: FiltrosDashboard) => Promise<any>;
        exportar: (filtros: FiltrosDashboard, formato: "pdf" | "excel" | "csv") => Promise<any>;
    };
};
//# sourceMappingURL=dashboard.service.d.ts.map