import { apiClient } from '@gestk/shared';
import type { 
  User, 
  UsuarioFilters, 
  DjangoApiResponse,
  DateFilters
} from '@gestk/shared';

export class UsuariosService {
  /**
   * Obter lista de usuários
   */
  static async getUsuarios(filtros?: UsuarioFilters): Promise<DjangoApiResponse<User>> {
    const params = new URLSearchParams();
    
    if (filtros?.search) params.append('search', filtros.search);
    if (filtros?.tipo_usuario) params.append('tipo_usuario', filtros.tipo_usuario);
    if (filtros?.ativo !== undefined) params.append('ativo', filtros.ativo.toString());
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);
    if (filtros?.page) params.append('page', filtros.page.toString());
    if (filtros?.page_size) params.append('page_size', filtros.page_size.toString());

    return apiClient.get<DjangoApiResponse<User>>(
      `/api/gestao/usuarios/lista/?${params.toString()}`
    );
  }

  /**
   * Obter análise de performance dos usuários
   */
  static async getPerformance(filtros?: DateFilters): Promise<Array<{
    usuario_id: string;
    nome: string;
    email: string;
    total_horas: number;
    lancamentos_realizados: number;
    lancamentos_manuais: number;
    percentual_manual: number;
    eficiencia: number;
    produtividade: number;
    ranking: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      usuario_id: string;
      nome: string;
      email: string;
      total_horas: number;
      lancamentos_realizados: number;
      lancamentos_manuais: number;
      percentual_manual: number;
      eficiencia: number;
      produtividade: number;
      ranking: number;
    }>>(`/api/gestao/usuarios/performance/?${params.toString()}`);
  }

  /**
   * Obter atividades por competência
   */
  static async getAtividadesCompetencia(filtros?: DateFilters): Promise<Array<{
    usuario_id: string;
    nome: string;
    mes: string;
    horas_trabalhadas: number;
    importacoes: number;
    lancamentos: number;
    lancamentos_manuais: number;
    eficiencia: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      usuario_id: string;
      nome: string;
      mes: string;
      horas_trabalhadas: number;
      importacoes: number;
      lancamentos: number;
      lancamentos_manuais: number;
      eficiencia: number;
    }>>(`/api/gestao/usuarios/atividades-competencia/?${params.toString()}`);
  }

  /**
   * Obter atividades por cliente
   */
  static async getAtividadesCliente(filtros?: DateFilters): Promise<Array<{
    usuario_id: string;
    nome: string;
    cliente_id: string;
    razao_social: string;
    mes: string;
    horas_quantitativas: number;
    importacoes: number;
    lancamentos: number;
    lancamentos_manuais: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      usuario_id: string;
      nome: string;
      cliente_id: string;
      razao_social: string;
      mes: string;
      horas_quantitativas: number;
      importacoes: number;
      lancamentos: number;
      lancamentos_manuais: number;
    }>>(`/api/gestao/usuarios/atividades-cliente/?${params.toString()}`);
  }

  /**
   * Obter produtividade dos usuários
   */
  static async getProdutividade(filtros?: DateFilters): Promise<Array<{
    usuario_id: string;
    nome: string;
    produtividade: number;
    horas_trabalhadas: number;
    lancamentos_por_hora: number;
    eficiencia: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      usuario_id: string;
      nome: string;
      produtividade: number;
      horas_trabalhadas: number;
      lancamentos_por_hora: number;
      eficiencia: number;
    }>>(`/api/gestao/usuarios/produtividade/?${params.toString()}`);
  }

  /**
   * Obter análise de eficiência
   */
  static async getEficiencia(filtros?: DateFilters): Promise<Array<{
    usuario_id: string;
    nome: string;
    eficiencia_geral: number;
    eficiencia_contabil: number;
    eficiencia_fiscal: number;
    eficiencia_rh: number;
    eficiencia_importacao: number;
    ranking: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      usuario_id: string;
      nome: string;
      eficiencia_geral: number;
      eficiencia_contabil: number;
      eficiencia_fiscal: number;
      eficiencia_rh: number;
      eficiencia_importacao: number;
      ranking: number;
    }>>(`/api/gestao/usuarios/eficiencia/?${params.toString()}`);
  }

  /**
   * Obter atividades por módulo
   */
  static async getAtividadesModulo(filtros?: DateFilters): Promise<Array<{
    modulo: string;
    total_horas: number;
    usuarios_ativos: number;
    lancamentos: number;
    eficiencia_media: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      modulo: string;
      total_horas: number;
      usuarios_ativos: number;
      lancamentos: number;
      eficiencia_media: number;
    }>>(`/api/gestao/usuarios/atividades-modulo/?${params.toString()}`);
  }

  /**
   * Obter evolução mensal dos módulos
   */
  static async getEvolucaoModulos(filtros?: DateFilters): Promise<Array<{
    mes: string;
    contabil: number;
    fiscal: number;
    rh: number;
    importacao: number;
    relatorios: number;
    configuracoes: number;
    dashboard: number;
    admin: number;
  }>> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<Array<{
      mes: string;
      contabil: number;
      fiscal: number;
      rh: number;
      importacao: number;
      relatorios: number;
      configuracoes: number;
      dashboard: number;
      admin: number;
    }>>(`/api/gestao/usuarios/evolucao-modulos/?${params.toString()}`);
  }

  /**
   * Obter estatísticas gerais dos usuários
   */
  static async getEstatisticas(filtros?: DateFilters): Promise<{
    total_usuarios: number;
    usuarios_ativos: number;
    usuarios_inativos: number;
    total_horas_trabalhadas: number;
    media_horas_por_usuario: number;
    total_lancamentos: number;
    percentual_manual: number;
    eficiencia_media: number;
  }> {
    const params = new URLSearchParams();
    
    if (filtros?.data_inicio) params.append('data_inicio', filtros.data_inicio);
    if (filtros?.data_fim) params.append('data_fim', filtros.data_fim);

    return apiClient.get<{
      total_usuarios: number;
      usuarios_ativos: number;
      usuarios_inativos: number;
      total_horas_trabalhadas: number;
      media_horas_por_usuario: number;
      total_lancamentos: number;
      percentual_manual: number;
      eficiencia_media: number;
    }>(`/api/gestao/usuarios/estatisticas/?${params.toString()}`);
  }
}

