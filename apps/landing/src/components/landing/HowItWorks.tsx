'use client'

import { 
  UserPlus, 
  Settings, 
  RefreshCw, 
  CheckCircle,
  Database,
  Shield,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: UserPlus,
      title: 'Cadastro Simples',
      description: 'Crie sua conta em menos de 2 minutos e comece seu teste gratuito imediatamente.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      number: '2',
      icon: Settings,
      title: 'Configuração Guiada',
      description: 'Nossa equipe te ajuda a configurar a plataforma de acordo com suas necessidades.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      number: '3',
      icon: RefreshCw,
      title: 'Migração de Dados',
      description: 'Importamos seus dados existentes de forma segura e sem interrupções.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      number: '4',
      icon: CheckCircle,
      title: 'Resultados Imediatos',
      description: 'Comece a ver melhorias na gestão e produtividade desde o primeiro dia.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ]

  const processDetails = [
    {
      icon: Database,
      title: 'Extração de Dados',
      description: 'Conectamos com seu sistema atual e extraímos todos os dados contábeis de forma segura.',
      features: ['Backup automático', 'Validação de integridade', 'Criptografia end-to-end'],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Transformação',
      description: 'Processamos e padronizamos os dados para o formato ideal do GESTK.',
      features: ['Limpeza de dados', 'Padronização de formatos', 'Validação de regras contábeis'],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Carregamento',
      description: 'Dados são carregados no GESTK e ficam disponíveis imediatamente para análise.',
      features: ['Dashboards automáticos', 'Relatórios instantâneos', 'Simuladores ativos'],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como{' '}
            <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em apenas 4 passos simples, sua empresa estará operando com máxima eficiência
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Details */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Processo de Migração de Dados
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa tecnologia ETL (Extract, Transform, Load) garante uma migração segura e eficiente dos seus dados contábeis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processDetails.map((process, index) => (
              <div key={process.title} className="text-center group">
                <div className={`w-20 h-20 ${process.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <process.icon className={`w-10 h-10 ${process.iconColor}`} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {process.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {process.description}
                </p>

                <ul className="space-y-2 text-left">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Pronto para migrar seus dados?
              </h4>
              <p className="text-gray-600 mb-6">
                Nossa equipe especializada está pronta para ajudar você a migrar seus dados de forma segura e eficiente.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contato')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Solicitar Migração
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
