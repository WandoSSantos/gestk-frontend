'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Cookie, 
  X, 
  Settings,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('gestk-cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    localStorage.setItem('gestk-cookie-consent', JSON.stringify(allAccepted))
    setIsVisible(false)
    // Aqui você pode adicionar scripts de analytics, etc.
  }

  const acceptSelected = () => {
    localStorage.setItem('gestk-cookie-consent', JSON.stringify(preferences))
    setIsVisible(false)
    // Aqui você pode adicionar scripts baseados nas preferências
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    localStorage.setItem('gestk-cookie-consent', JSON.stringify(onlyNecessary))
    setIsVisible(false)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return // Necessário sempre ativo
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-md dark:bg-gray-900/95">
        <CardContent className="p-6">
          {!showSettings ? (
            // Banner principal
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Usamos cookies para melhorar sua experiência
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Utilizamos cookies essenciais e opcionais para personalizar conteúdo, 
                    analisar tráfego e melhorar nossos serviços. Você pode escolher quais aceitar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="flex items-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Personalizar</span>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectAll}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Rejeitar Todos
                </Button>
                
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={acceptAll}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Aceitar Todos</span>
                </Button>
              </div>
            </div>
          ) : (
            // Configurações detalhadas
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Configurações de Cookies
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Cookies Necessários */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Cookies Necessários
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Essenciais para o funcionamento básico do site. Não podem ser desativados.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Sempre ativo</span>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Cookies de Analytics
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Nos ajudam a entender como você usa o site para melhorar a experiência.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Cookies de Marketing
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Usados para personalizar anúncios e medir a eficácia das campanhas.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                {/* Funcionais */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Cookies Funcionais
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Permitem funcionalidades avançadas como chat e personalização.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('functional')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      preferences.functional ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="flex-1"
                >
                  Rejeitar Todos
                </Button>
                
                <Button
                  variant="gradient"
                  onClick={acceptSelected}
                  className="flex-1"
                >
                  Salvar Preferências
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Para mais informações, consulte nossa{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                    Política de Privacidade
                  </a>
                  {' '}e{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                    Termos de Uso
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
