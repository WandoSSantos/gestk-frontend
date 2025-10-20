/**
 * API de Usuários de Acesso
 * 
 * Gerencia usuários do sistema com controle de:
 * - CRUD completo de usuários
 * - Vínculo com múltiplas contabilidades
 * - Controle de vigência (data_inicio e data_fim)
 * - Ativação/Desativação
 * - Módulos e permissões por usuário
 * 
 * @module api/admin/usuarios-acesso
 */

import { apiClient } from '../client'
import type {
  UsuarioAcesso,
  UsuarioAcessoCreateData,
  UsuarioAcessoUpdateData,
  UsuarioAcessoFilters,
  UsuarioAcessoSummary,
  UsuariosAcessoPaginatedResponse,
  EstenderVigenciaData
} from '../../types/admin/usuarios-acesso.types'

/**
 * API de Usuários de Acesso
 * 
 * Endpoints disponíveis:
 * - GET    /administracao/usuarios-acesso/          - Listar usuários
 * - POST   /administracao/usuarios-acesso/          - Criar usuário
 * - GET    /administracao/usuarios-acesso/{id}/     - Obter usuário
 * - PUT    /administracao/usuarios-acesso/{id}/     - Atualizar usuário
 * - DELETE /administracao/usuarios-acesso/{id}/     - Deletar usuário
 * - POST   /administracao/usuarios-acesso/{id}/ativar/ - Ativar usuário
 * - POST   /administracao/usuarios-acesso/{id}/desativar/ - Desativar usuário
 * - POST   /administracao/usuarios-acesso/{id}/estender-vigencia/ - Estender vigência
 * - GET    /administracao/usuarios-acesso/resumo/   - Resumo de usuários
 */
export const usuariosAcessoApi = {
  /**
   * Lista todos os usuários de acesso com filtros opcionais
   * 
   * @param filters - Filtros de busca (tipo_usuario, is_active, contabilidade_id, search, etc)
   * @returns Lista paginada de usuários
   * 
   * @example
   * ```typescript
   * const usuarios = await usuariosAcessoApi.list({
   *   tipo_usuario: 'contador',
   *   is_active: true,
   *   search: 'João',
   *   page: 1,
   *   page_size: 20
   * })
   * ```
   */
  async list(filters?: UsuarioAcessoFilters): Promise<UsuariosAcessoPaginatedResponse> {
    return await apiClient.get<UsuariosAcessoPaginatedResponse>(
      '/api/administracao/usuarios-acesso/',
      { params: filters }
    )
  },

  /**
   * Cria um novo usuário de acesso
   * 
   * @param data - Dados do novo usuário (username, email, password, tipo_usuario, contabilidades, etc)
   * @returns Usuário criado
   * 
   * @example
   * ```typescript
   * const novoUsuario = await usuariosAcessoApi.create({
   *   username: 'joao.silva',
   *   email: 'joao@example.com',
   *   password: 'senha123',
   *   first_name: 'João',
   *   last_name: 'Silva',
   *   tipo_usuario: 'contador',
   *   contabilidades: ['contab-123', 'contab-456'],
   *   data_inicio: '2025-01-01',
   *   modulos_acessiveis: ['dashboard', 'carteira', 'clientes']
   * })
   * ```
   */
  async create(data: UsuarioAcessoCreateData): Promise<UsuarioAcesso> {
    return await apiClient.post<UsuarioAcesso>(
      '/api/administracao/usuarios-acesso/',
      data
    )
  },

  /**
   * Obtém detalhes de um usuário específico
   * 
   * @param id - ID do usuário
   * @returns Dados completos do usuário
   * 
   * @example
   * ```typescript
   * const usuario = await usuariosAcessoApi.get('user-123')
   * console.log(usuario.username, usuario.contabilidades)
   * ```
   */
  async get(id: string): Promise<UsuarioAcesso> {
    return await apiClient.get<UsuarioAcesso>(
      `/administracao/usuarios-acesso/${id}/`
    )
  },

  /**
   * Atualiza dados de um usuário existente
   * 
   * @param id - ID do usuário
   * @param data - Dados parciais a atualizar
   * @returns Usuário atualizado
   * 
   * @example
   * ```typescript
   * const usuarioAtualizado = await usuariosAcessoApi.update('user-123', {
   *   email: 'novo-email@example.com',
   *   contabilidades: ['contab-123', 'contab-789'],
   *   modulos_acessiveis: ['dashboard', 'carteira', 'clientes', 'usuarios']
   * })
   * ```
   */
  async update(id: string, data: UsuarioAcessoUpdateData): Promise<UsuarioAcesso> {
    return await apiClient.put<UsuarioAcesso>(
      `/administracao/usuarios-acesso/${id}/`,
      data
    )
  },

  /**
   * Deleta um usuário de acesso
   * 
   * @param id - ID do usuário
   * 
   * @example
   * ```typescript
   * await usuariosAcessoApi.delete('user-123')
   * ```
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/administracao/usuarios-acesso/${id}/`)
  },

  /**
   * Ativa um usuário desativado
   * 
   * @param id - ID do usuário
   * @returns Usuário ativado
   * 
   * @example
   * ```typescript
   * const usuario = await usuariosAcessoApi.activate('user-123')
   * console.log(usuario.is_active) // true
   * ```
   */
  async activate(id: string): Promise<UsuarioAcesso> {
    return await apiClient.post<UsuarioAcesso>(
      `/administracao/usuarios-acesso/${id}/ativar/`
    )
  },

  /**
   * Desativa um usuário ativo
   * 
   * @param id - ID do usuário
   * @returns Usuário desativado
   * 
   * @example
   * ```typescript
   * const usuario = await usuariosAcessoApi.deactivate('user-123')
   * console.log(usuario.is_active) // false
   * ```
   */
  async deactivate(id: string): Promise<UsuarioAcesso> {
    return await apiClient.post<UsuarioAcesso>(
      `/administracao/usuarios-acesso/${id}/desativar/`
    )
  },

  /**
   * Estende a vigência de um usuário (atualiza data_fim)
   * 
   * @param id - ID do usuário
   * @param data - Nova data de fim da vigência
   * @returns Usuário com vigência estendida
   * 
   * @example
   * ```typescript
   * const usuario = await usuariosAcessoApi.extendVigencia('user-123', {
   *   data_fim: '2025-12-31'
   * })
   * ```
   */
  async extendVigencia(id: string, data: EstenderVigenciaData): Promise<UsuarioAcesso> {
    return await apiClient.post<UsuarioAcesso>(
      `/administracao/usuarios-acesso/${id}/estender-vigencia/`,
      data
    )
  },

  /**
   * Obtém resumo estatístico dos usuários
   * 
   * @returns Estatísticas (total, ativos, inativos, por tipo, próximos vencimentos)
   * 
   * @example
   * ```typescript
   * const resumo = await usuariosAcessoApi.summary()
   * console.log('Total:', resumo.total)
   * console.log('Ativos:', resumo.ativos)
   * console.log('Por tipo:', resumo.por_tipo)
   * console.log('Próximos vencimentos:', resumo.proximos_vencimentos)
   * ```
   */
  async summary(): Promise<UsuarioAcessoSummary> {
    return await apiClient.get<UsuarioAcessoSummary>(
      '/api/administracao/usuarios-acesso/resumo/'
    )
  }
}
