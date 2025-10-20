'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@gestk/shared'

export default function HomePage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [isHydrated, setIsHydrated] = useState(false)

  // Esperar hidratação do Zustand persist
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return // Não fazer nada até hidratar
    
    console.log('🏠 HomePage - Verificando autenticação:', isAuthenticated)
    // Redirecionar baseado no estado de autenticação
    if (isAuthenticated) {
      console.log('✅ Redirecionando para /dashboard')
      router.replace('/dashboard')
    } else {
      console.log('❌ Não autenticado, redirecionando para /login')
      router.replace('/login')
    }
  }, [isAuthenticated, router, isHydrated])

  // Loading state enquanto redireciona
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Carregando...</p>
      </div>
    </div>
  )
}