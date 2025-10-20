export * from '../types'

// Types específicos de autenticação podem ser adicionados aqui no futuro
// Por exemplo: ResetPasswordRequest, ChangePasswordRequest, etc.

export interface ResetPasswordRequest {
  email: string
}

export interface ChangePasswordRequest {
  old_password: string
  new_password: string
  confirm_password: string
}

export interface VerifyTokenRequest {
  token: string
}
