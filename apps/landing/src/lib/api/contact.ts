import axios from 'axios'
import { ContactFormData, ContactResponse } from '@/types/contact'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    const response = await apiClient.post('/api/contato', data)
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    }
  } catch (error) {
    console.error('Erro ao enviar formulário de contato:', error)
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
    }
  }
}
