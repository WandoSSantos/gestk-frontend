import { Cliente, ClientePayload, ClienteFilters, DashboardData, DashboardFilters, ChartData, PaginatedResponse } from '../types';
export declare class ClientService {
    getCarteiraClientes(filters?: ClienteFilters): Promise<PaginatedResponse<Cliente>>;
    getCarteiraCliente(id: string): Promise<Cliente>;
    updateCarteiraCliente(id: string, data: Partial<ClientePayload>): Promise<Cliente>;
    getCarteiraResumo(): Promise<{
        total_clientes: number;
        clientes_ativos: number;
        clientes_inativos: number;
        receita_total: number;
        crescimento: number;
    }>;
    getClientes(filters?: ClienteFilters): Promise<PaginatedResponse<Cliente>>;
    getCliente(id: string): Promise<Cliente>;
    updateCliente(id: string, data: Partial<ClientePayload>): Promise<Cliente>;
    getClientesResumo(): Promise<{
        total: number;
        ativos: number;
        inativos: number;
        por_tipo: Record<string, number>;
        por_cidade: Record<string, number>;
        por_estado: Record<string, number>;
    }>;
    getUsuarios(filters?: any): Promise<PaginatedResponse<any>>;
    getUsuario(id: string): Promise<any>;
    updateUsuario(id: string, data: any): Promise<any>;
    getUsuariosResumo(): Promise<{
        total: number;
        ativos: number;
        inativos: number;
        por_role: Record<string, number>;
        por_contabilidade: Record<string, number>;
    }>;
    getEscritorio(): Promise<{
        id: string;
        nome: string;
        cnpj: string;
        endereco: string;
        telefone: string;
        email: string;
        created_at: string;
        updated_at: string;
    }>;
    updateEscritorio(data: {
        nome?: string;
        endereco?: string;
        telefone?: string;
        email?: string;
    }): Promise<any>;
    getEscritorioResumo(): Promise<{
        total_clientes: number;
        total_usuarios: number;
        receita_mensal: number;
        crescimento: number;
        indicadores: Record<string, number>;
    }>;
    getDashboardDemografico(filters?: DashboardFilters): Promise<DashboardData>;
    getDashboardDemograficoCharts(filters?: DashboardFilters): Promise<ChartData>;
    exportDashboardDemografico(filters?: DashboardFilters): Promise<Blob>;
    getDashboardFiscal(filters?: DashboardFilters): Promise<DashboardData>;
    getDashboardFiscalCharts(filters?: DashboardFilters): Promise<ChartData>;
    exportDashboardFiscal(filters?: DashboardFilters): Promise<Blob>;
    getDashboardContabil(filters?: DashboardFilters): Promise<DashboardData>;
    getDashboardContabilCharts(filters?: DashboardFilters): Promise<ChartData>;
    exportDashboardContabil(filters?: DashboardFilters): Promise<Blob>;
    getDashboardIndicadores(filters?: DashboardFilters): Promise<DashboardData>;
    getDashboardIndicadoresCharts(filters?: DashboardFilters): Promise<ChartData>;
    exportDashboardIndicadores(filters?: DashboardFilters): Promise<Blob>;
    getDashboardDRE(filters?: DashboardFilters): Promise<DashboardData>;
    getDashboardDRECharts(filters?: DashboardFilters): Promise<ChartData>;
    exportDashboardDRE(filters?: DashboardFilters): Promise<Blob>;
    downloadFile(url: string, filename?: string): Promise<void>;
    uploadFile(file: File, onProgress?: (progress: number) => void): Promise<any>;
    getDashboardOverview(): Promise<{
        total_clientes: number;
        total_usuarios: number;
        receita_total: number;
        crescimento: number;
        indicadores_principais: Record<string, number>;
        graficos_principais: ChartData[];
    }>;
}
export declare const clientService: ClientService;
//# sourceMappingURL=client.service.d.ts.map