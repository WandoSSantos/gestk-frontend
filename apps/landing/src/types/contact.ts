export interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  empresa?: string
  mensagem: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

