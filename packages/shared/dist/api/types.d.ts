export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}
export interface DjangoApiResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
export interface BaseFilters {
    page?: number;
    page_size?: number;
    search?: string;
    ordering?: string;
}
export interface LoginRequest {
    username: string;
    password: string;
    app_context?: 'admin' | 'client';
}
export interface LoginResponse {
    access: string;
    refresh: string;
    user: User;
    vinculos: Array<{
        contabilidade_id: string;
        role: string;
    }>;
}
export interface RefreshTokenRequest {
    refresh: string;
}
export interface RefreshTokenResponse {
    access: string;
}
export interface User {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    date_joined: string;
    last_login?: string;
}
export interface Contabilidade {
    id: string;
    nome: string;
    cnpj: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    is_active: boolean;
    is_suspended: boolean;
    data_suspensao?: string;
    motivo_suspensao?: string;
    created_at: string;
    updated_at: string;
}
export interface ContabilidadeFilters extends BaseFilters {
    is_active?: boolean;
    is_suspended?: boolean;
    cidade?: string;
    estado?: string;
}
export interface ContabilidadePayload {
    nome: string;
    cnpj: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
}
export interface Contrato {
    id: string;
    numero: string;
    cliente: string;
    contabilidade_id: string;
    contabilidade: Contabilidade;
    status: 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
    data_inicio: string;
    data_fim: string;
    valor: number;
    observacoes?: string;
    created_at: string;
    updated_at: string;
}
export interface ContratoPayload {
    numero: string;
    cliente: string;
    contabilidade_id: string;
    data_inicio: string;
    data_fim: string;
    valor: number;
    observacoes?: string;
}
export interface ContractFilters extends BaseFilters {
    status?: 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
    data_inicio?: string;
    data_fim?: string;
    cliente?: string;
    contabilidade_id?: string;
}
export interface PessoaJuridica {
    id: string;
    razao_social: string;
    nome_fantasia?: string;
    cnpj: string;
    email: string;
    telefone?: string;
    endereco?: string;
    responsavel_nome?: string;
    responsavel_email?: string;
    ativo: boolean;
    created_at: string;
    updated_at: string;
}
export interface ClienteGestk {
    tipo: 'contabilidade' | 'pessoa_juridica';
    contabilidade?: Contabilidade;
    pessoa_juridica?: PessoaJuridica;
}
export interface ContratoGestk {
    id: string;
    numero_contrato: string;
    cliente: ClienteGestk;
    contabilidade?: Contabilidade;
    pessoa_juridica?: PessoaJuridica;
    plano_servico: string;
    plano_servico_nome?: string;
    valor_mensal: number;
    data_inicio: string;
    data_termino?: string;
    status: 'ativo' | 'suspenso' | 'cancelado' | 'vencido';
    modulos_inclusos: string[];
    limites: {
        usuarios: number;
        empresas: number;
        contratos: number;
    };
    created_at: string;
    updated_at: string;
}
export interface UsuarioAcesso {
    id: string;
    user: User;
    contabilidade: Contabilidade;
    role: string;
    data_inicio: string;
    data_fim: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
export interface UsuarioAcessoPayload {
    user_id: string;
    contabilidade_id: string;
    role: string;
    data_inicio: string;
    data_fim: string;
}
export interface UsuarioAcessoFilters extends BaseFilters {
    role?: string;
    is_active?: boolean;
    contabilidade_id?: string;
    data_inicio?: string;
    data_fim?: string;
}
export interface Plano {
    id: string;
    nome: string;
    descricao: string;
    valor: number;
    periodo: 'mensal' | 'trimestral' | 'semestral' | 'anual';
    max_usuarios: number;
    max_contabilidades: number;
    recursos: string[];
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
export interface PlanoPayload {
    nome: string;
    descricao: string;
    valor: number;
    periodo: 'mensal' | 'trimestral' | 'semestral' | 'anual';
    max_usuarios: number;
    max_contabilidades: number;
    recursos: string[];
}
export interface Assinatura {
    id: string;
    contabilidade: Contabilidade;
    plano: Plano;
    status: 'ativa' | 'suspensa' | 'cancelada' | 'vencida';
    data_inicio: string;
    data_fim: string;
    valor: number;
    created_at: string;
    updated_at: string;
}
export interface AssinaturaPayload {
    contabilidade_id: string;
    plano_id: string;
    data_inicio: string;
    data_fim: string;
}
export interface Fatura {
    id: string;
    assinatura: Assinatura;
    numero: string;
    valor: number;
    data_vencimento: string;
    data_pagamento?: string;
    status: 'pendente' | 'paga' | 'cancelada' | 'vencida';
    observacoes?: string;
    created_at: string;
    updated_at: string;
}
export interface FaturaPayload {
    assinatura_id: string;
    valor: number;
    data_vencimento: string;
    observacoes?: string;
}
export interface Pagamento {
    id: string;
    fatura: Fatura;
    valor: number;
    data_pagamento: string;
    metodo: string;
    status: 'pendente' | 'confirmado' | 'estornado';
    comprovante?: string;
    observacoes?: string;
    created_at: string;
    updated_at: string;
}
export interface PagamentoPayload {
    fatura_id: string;
    valor: number;
    data_pagamento: string;
    metodo: string;
    comprovante?: string;
    observacoes?: string;
}
export interface Cliente {
    id: string;
    nome: string;
    cpf_cnpj: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    tipo: 'PF' | 'PJ';
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
export interface ClientePayload {
    nome: string;
    cpf_cnpj: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    tipo: 'PF' | 'PJ';
}
export interface ClienteFilters extends BaseFilters {
    tipo?: 'PF' | 'PJ';
    is_active?: boolean;
    cidade?: string;
    estado?: string;
}
export interface DashboardFilters extends BaseFilters {
    periodo_inicio?: string;
    periodo_fim?: string;
    contabilidade_id?: string;
    tipo_grafico?: string;
}
export interface DashboardData {
    periodo: {
        inicio: string;
        fim: string;
    };
    total_clientes: number;
    total_usuarios: number;
    receita_total: number;
    crescimento: number;
    indicadores: Record<string, number>;
}
export interface ChartData {
    labels: string[];
    datasets: Array<{
        label: string;
        data: number[];
        backgroundColor?: string | string[];
        borderColor?: string | string[];
        borderWidth?: number;
    }>;
}
export interface ResumoContratos {
    total: number;
    ativos: number;
    suspensos: number;
    cancelados: number;
    vencidos: number;
    receita_total: number;
    receita_mes: number;
}
export interface ResumoUsuarios {
    total: number;
    ativos: number;
    inativos: number;
    por_role: Record<string, number>;
    por_contabilidade: Record<string, number>;
}
export interface ResumoContabilidades {
    total: number;
    ativas: number;
    suspensas: number;
    inadimplentes: number;
    receita_total: number;
}
export interface ResumoPlanos {
    total: number;
    ativos: number;
    inativos: number;
    receita_total: number;
    por_periodo: Record<string, number>;
}
export interface ResumoAssinaturas {
    total: number;
    ativas: number;
    suspensas: number;
    canceladas: number;
    vencidas: number;
    receita_total: number;
}
export interface ResumoFaturas {
    total: number;
    pendentes: number;
    pagas: number;
    canceladas: number;
    vencidas: number;
    valor_total: number;
    valor_pago: number;
    valor_pendente: number;
}
export interface ResumoPagamentos {
    total: number;
    confirmados: number;
    pendentes: number;
    estornados: number;
    valor_total: number;
    por_metodo: Record<string, number>;
}
//# sourceMappingURL=types.d.ts.map