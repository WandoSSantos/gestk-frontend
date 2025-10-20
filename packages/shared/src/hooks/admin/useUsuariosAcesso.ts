/**
 * Hooks React Query para Usuários de Acesso
 * 
 * Gerencia estado e cache de usuários com:
 * - Queries para listagem, detalhes e resumo
 * - Mutations para CRUD e ações (ativar, desativar, estender vigência)
 * - Invalidação automática de cache
 * - Toast notifications integradas
 * - TypeScript com tipos completos
 * 
 * @module hooks/admin/useUsuariosAcesso
 */

import { useQuery, useMutation, useQueryClient, type UseQueryOptions, type UseMutationOptions } from '@tanstack/react-query'
import { toast } from 'sonner'
import { usuariosAcessoApi } from '../../api/admin/usuarios-acesso.api'
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
 * Query keys para cache do React Query
 */
export const usuariosAcessoKeys = {
  all: ['usuarios-acesso'] as const,
  lists: () => [...usuariosAcessoKeys.all, 'list'] as const,
  list: (filters?: UsuarioAcessoFilters) => [...usuariosAcessoKeys.lists(), filters] as const,
  details: () => [...usuariosAcessoKeys.all, 'detail'] as const,
  detail: (id: string) => [...usuariosAcessoKeys.details(), id] as const,
  summary: () => [...usuariosAcessoKeys.all, 'summary'] as const,
}

/**
 * Hook para listar usuários de acesso com filtros
 * 
 * @param filters - Filtros de busca (tipo_usuario, is_active, search, etc)
 * @param options - Opções adicionais do React Query
 * @returns Query com lista paginada de usuários
 * 
 * @example
 * ```typescript
 * const { data, isLoading, error } = useUsuariosAcesso({
 *   tipo_usuario: 'contador',
 *   is_active: true,
 *   page: 1,
 *   page_size: 20
 * })
 * 
 * if (isLoading) return <Loading />
 * if (error) return <Error message={error.message} />
 * 
 * return (
 *   <Table>
 *     {data.results.map(usuario => (
 *       <UsuarioRow key={usuario.id} usuario={usuario} />
 *     ))}
 *   </Table>
 * )
 * ```
 */
export function useUsuariosAcesso(
  filters?: UsuarioAcessoFilters,
  options?: Omit<UseQueryOptions<UsuariosAcessoPaginatedResponse>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: usuariosAcessoKeys.list(filters),
    queryFn: () => usuariosAcessoApi.list(filters),
    staleTime: 1000 * 60 * 5, // 5 minutos
    ...options,
  })
}

/**
 * Hook para obter detalhes de um usuário específico
 * 
 * @param id - ID do usuário
 * @param options - Opções adicionais do React Query
 * @returns Query com dados completos do usuário
 * 
 * @example
 * ```typescript
 * const { data: usuario, isLoading } = useUsuarioAcesso('user-123')
 * 
 * if (isLoading) return <Loading />
 * 
 * return (
 *   <div>
 *     <h1>{usuario.username}</h1>
 *     <p>Email: {usuario.email}</p>
 *     <p>Tipo: {usuario.tipo_usuario}</p>
 *     <p>Contabilidades: {usuario.contabilidades.length}</p>
 *   </div>
 * )
 * ```
 */
export function useUsuarioAcesso(
  id: string,
  options?: Omit<UseQueryOptions<UsuarioAcesso>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: usuariosAcessoKeys.detail(id),
    queryFn: () => usuariosAcessoApi.get(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutos
    ...options,
  })
}

/**
 * Hook para obter resumo estatístico dos usuários
 * 
 * @param options - Opções adicionais do React Query
 * @returns Query com estatísticas (total, ativos, por tipo, etc)
 * 
 * @example
 * ```typescript
 * const { data: resumo } = useUsuariosAcessoSummary()
 * 
 * return (
 *   <div className="grid grid-cols-4 gap-4">
 *     <StatsCard title="Total" value={resumo.total} />
 *     <StatsCard title="Ativos" value={resumo.ativos} />
 *     <StatsCard title="Inativos" value={resumo.inativos} />
 *     <StatsCard title="Contadores" value={resumo.por_tipo.contador} />
 *   </div>
 * )
 * ```
 */
export function useUsuariosAcessoSummary(
  options?: Omit<UseQueryOptions<UsuarioAcessoSummary>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: usuariosAcessoKeys.summary(),
    queryFn: () => usuariosAcessoApi.summary(),
    staleTime: 1000 * 60 * 2, // 2 minutos
    ...options,
  })
}

/**
 * Hook para criar novo usuário de acesso
 * 
 * @param options - Opções adicionais do React Query
 * @returns Mutation para criar usuário
 * 
 * @example
 * ```typescript
 * const createUsuario = useCreateUsuarioAcesso()
 * 
 * const handleSubmit = async (data) => {
 *   try {
 *     const usuario = await createUsuario.mutateAsync({
 *       username: data.username,
 *       email: data.email,
 *       password: data.password,
 *       first_name: data.firstName,
 *       last_name: data.lastName,
 *       tipo_usuario: 'contador',
 *       contabilidades: selectedContabilidades,
 *       data_inicio: new Date().toISOString(),
 *       modulos_acessiveis: selectedModulos
 *     })
 *     router.push(`/admin/usuarios/${usuario.id}`)
 *   } catch (error) {
 *     console.error('Erro ao criar usuário:', error)
 *   }
 * }
 * ```
 */
export function useCreateUsuarioAcesso(
  options?: UseMutationOptions<UsuarioAcesso, Error, UsuarioAcessoCreateData>
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UsuarioAcessoCreateData) => usuariosAcessoApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.summary() })
      toast.success('Usuário criado com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao criar usuário: ${error.message}`)
    },
    ...options,
  })
}

/**
 * Hook para atualizar usuário existente
 * 
 * @param options - Opções adicionais do React Query
 * @returns Mutation para atualizar usuário
 * 
 * @example
 * ```typescript
 * const updateUsuario = useUpdateUsuarioAcesso()
 * 
 * const handleUpdate = async (id: string, data: UsuarioAcessoUpdateData) => {
 *   await updateUsuario.mutateAsync({ id, data })
 * }
 * ```
 */
export function useUpdateUsuarioAcesso(
  options?: UseMutationOptions<
    UsuarioAcesso,
    Error,
    { id: string; data: UsuarioAcessoUpdateData }
  >
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UsuarioAcessoUpdateData }) =>
      usuariosAcessoApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.detail(variables.id) })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.summary() })
      toast.success('Usuário atualizado com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao atualizar usuário: ${error.message}`)
    },
    ...options,
  })
}

/**
 * Hook para deletar usuário
 * 
 * @param options - Opções adicionais do React Query
 * @returns Mutation para deletar usuário
 * 
 * @example
 * ```typescript
 * const deleteUsuario = useDeleteUsuarioAcesso()
 * 
 * const handleDelete = async (id: string) => {
 *   if (confirm('Tem certeza que deseja deletar este usuário?')) {
 *     await deleteUsuario.mutateAsync(id)
 *     router.push('/admin/usuarios')
 *   }
 * }
 * ```
 */
export function useDeleteUsuarioAcesso(
  options?: UseMutationOptions<void, Error, string>
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => usuariosAcessoApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.summary() })
      toast.success('Usuário deletado com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao deletar usuário: ${error.message}`)
    },
    ...options,
  })
}

/**
 * Hook para ações de usuário (ativar, desativar, estender vigência)
 * 
 * @returns Objeto com mutations para cada ação
 * 
 * @example
 * ```typescript
 * const { activate, deactivate, extendVigencia } = useUsuarioAcessoActions()
 * 
 * const handleActivate = async (id: string) => {
 *   await activate.mutateAsync(id)
 * }
 * 
 * const handleDeactivate = async (id: string) => {
 *   await deactivate.mutateAsync(id)
 * }
 * 
 * const handleExtend = async (id: string) => {
 *   await extendVigencia.mutateAsync({
 *     id,
 *     data: { data_fim: '2025-12-31' }
 *   })
 * }
 * ```
 */
export function useUsuarioAcessoActions() {
  const queryClient = useQueryClient()

  const activate = useMutation({
    mutationFn: (id: string) => usuariosAcessoApi.activate(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.summary() })
      toast.success('Usuário ativado com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao ativar usuário: ${error.message}`)
    },
  })

  const deactivate = useMutation({
    mutationFn: (id: string) => usuariosAcessoApi.deactivate(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.summary() })
      toast.success('Usuário desativado com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao desativar usuário: ${error.message}`)
    },
  })

  const extendVigencia = useMutation({
    mutationFn: ({ id, data }: { id: string; data: EstenderVigenciaData }) =>
      usuariosAcessoApi.extendVigencia(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: usuariosAcessoKeys.summary() })
      toast.success('Vigência estendida com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao estender vigência: ${error.message}`)
    },
  })

  return {
    activate,
    deactivate,
    extendVigencia,
  }
}
