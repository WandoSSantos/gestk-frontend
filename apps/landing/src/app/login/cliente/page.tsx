'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@gestk/ui'

export default function ClienteLoginRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirecionar para o cliente após 2 segundos
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3001/login'
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleRedirect = () => {
    window.location.href = 'http://localhost:3001/login'
  }

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo variant="default" size="lg" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Redirecionando para Cliente
          </h1>
          <p className="text-gray-600 mb-8">
            Você será direcionado para a área do cliente do GESTK.
          </p>

          {/* Loading */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Loader2 className="w-5 h-5 animate-spin text-success-600" />
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
              Ir para Cliente
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
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>URL:</strong> http://localhost:3001/login
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

