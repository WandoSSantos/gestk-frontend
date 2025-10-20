'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@gestk/ui'
import { Input } from '@gestk/ui'
import { Logo } from '@gestk/ui'
import { useAuth } from '@gestk/shared'
import { Loader2, Eye, EyeOff, User, Lock } from 'lucide-react'

const loginSchema = z.object({
  username: z.string().min(1, 'Usuario, Email ou CNPJ e obrigatorio'),
  password: z.string().min(1, 'Senha e obrigatoria'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  
  const { login, loading, error, clearError, isAuthenticated } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  // Limpar erro quando componente desmontar
  useEffect(() => {
    return () => {
      clearError()
    }
  }, [clearError])

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log('🚀 Login Cliente - Iniciando...', data)
      await login(data)
      console.log('✅ Login Cliente - Concluído com sucesso!')
      console.log('🔄 Aguardando 500ms para garantir persistência do estado...')
      // Aguardar um pouco para garantir que o estado foi persistido
      await new Promise(resolve => setTimeout(resolve, 500))
      console.log('🏠 Redirecionando para / (raiz)')
      // Redirecionar para a raiz, que vai direcionar para /dashboard
      router.push('/')
    } catch (error) {
      console.error('❌ Erro no login:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] via-white to-[#F1F3F5] p-4">
      <div className="w-full max-w-md">
        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header com Logo */}
          <div className="bg-[#1F3A52] px-8 py-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-xl p-3 shadow-lg">
                <Logo variant="default" size="lg" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Sistema de Gestão
            </h1>
            <p className="text-[#8B9BA8] text-sm">
              Acesse sua conta para continuar
            </p>
          </div>

          {/* Formulário */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                  {error}
                </div>
              )}
              
              {/* Username Field */}
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-[#1F3A52]">
                  Usuário, Email ou CNPJ
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#8B9BA8]" />
                  </div>
                  <Input
                    id="username"
                    type="text"
                    {...register('username')}
                    className="pl-10 h-11 w-full border-gray-300 focus:border-[#1F3A52] focus:ring-[#1F3A52] rounded-lg"
                    placeholder="usuario, email ou CNPJ"
                  />
                </div>
                {errors.username && (
                  <p className="text-sm text-red-600">{errors.username.message}</p>
                )}
              </div>
              
              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#1F3A52]">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[#8B9BA8]" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    className="pl-10 pr-10 h-11 w-full border-gray-300 focus:border-[#1F3A52] focus:ring-[#1F3A52] rounded-lg"
                    placeholder="Digite sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-[#8B9BA8] hover:text-[#1F3A52] transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-[#8B9BA8] hover:text-[#1F3A52] transition-colors" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-[#1F3A52] hover:text-[#8B9BA8] font-medium transition-colors"
                >
                  Esqueceu a senha?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-[#1F3A52] hover:bg-[#2D5270] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  'Entrar'
                )}
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-sm text-[#8B9BA8]">
              Precisa de ajuda?{' '}
              <button className="text-[#1F3A52] hover:underline font-medium">
                Entre em contato
              </button>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-[#8B9BA8] mt-6">
          © 2025 GESTK. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
