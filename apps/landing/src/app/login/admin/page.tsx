'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, ArrowLeft, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminLoginRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirecionar para o admin após 2 segundos
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3000/login'
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleRedirect = () => {
    window.location.href = 'http://localhost:3000/login'
  }

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Redirecionando para Administração
          </h1>
          <p className="text-gray-600 mb-8">
            Você será direcionado para a área administrativa do GESTK.
          </p>

          {/* Loading */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Loader2 className="w-5 h-5 animate-spin text-primary-600" />
            <span className="text-gray-600">Aguarde...</span>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleRedirect}
              variant="gradient"
              size="lg"
              className="w-full"
            >
              Ir para Administração
            </Button>
            
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>URL:</strong> http://localhost:3000/login
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
