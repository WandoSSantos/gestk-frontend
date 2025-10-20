export * from "./utils"
export * from "./api"
export * from "./api/admin"
export * from "./api/client"
export * from "./hooks/useApi"
export * from "./hooks/useAuth"
export * from "./hooks/admin"
export * from "./hooks/client"
export * from "./api/auth/auth.api"
export * from "./api/auth/auth.types"
export * from "./schemas/admin"
export * from "./types/client"
// Admin types with specific re-exports to avoid conflicts
export type {
  ContratoGestk,
  ContratoGestkCreateData,
  ContratoGestkUpdateData,
  ContratoGestkFilters,
  ContratoGestkResumo,
  ContratoGestkApiResponse,
} from "./types/admin/contratos-gestk.types"
export {
  PlanoServico,
  StatusContrato,
  Modulo,
} from "./types/admin/contratos-gestk.types"
export * from "./types/client"
