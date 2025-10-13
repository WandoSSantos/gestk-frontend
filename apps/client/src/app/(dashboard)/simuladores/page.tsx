'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui'
import { Button } from '@gestk/ui'
import { 
  Calculator, 
  FileText, 
  TrendingUp,
  Calendar,
  Activity,
  ArrowRight,
  Shield,
  Percent
} from 'lucide-react'
import Link from 'next/link'

export default function SimuladoresPage() {
  const simuladores = [
    {
      id: 'inss',
      name: 'Simulador de INSS',
      description: 'Calcule contribuições e benefícios do INSS',
      icon: Shield,
      href: '/simuladores/inss',
      color: 'blue',
      features: [
        'Cálculo de contribuições',
        'Simulação de aposentadoria',
        'Auxílio-doença',
        'Salário-maternidade'
      ]
    },
    {
      id: 'irpf',
      name: 'Simulador de IRPF',
      description: 'Calcule impostos e planejamento fiscal',
      icon: Percent,
      href: '/simuladores/irpf',
      color: 'green',
      features: [
        'Cálculo de imposto de renda',
        'Deduções permitidas',
        'Planejamento fiscal',
        'Restituição de IR'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Simuladores
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Fiscais</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ferramentas para cálculos e simulações fiscais
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-4 space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Atualizado em: {new Date().toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span>Sistema online</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-5"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Simuladores Disponíveis
              </CardTitle>
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <Calculator className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                2
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Ferramentas ativas
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-5"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Cálculos Realizados
              </CardTitle>
              <div className="p-2 rounded-lg bg-green-100 text-green-600">
                <TrendingUp className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                1,247
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Este mês
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-5"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Precisão dos Cálculos
              </CardTitle>
              <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                <FileText className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                99.8%
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Taxa de precisão
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Simuladores Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {simuladores.map((simulador) => (
            <Card key={simulador.id} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${
                simulador.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-green-500 to-green-600'
              } opacity-5`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    simulador.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <simulador.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {simulador.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">
                      {simulador.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Funcionalidades:</h4>
                  <ul className="space-y-1">
                    {simulador.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          simulador.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link href={simulador.href}>
                    <Button 
                      className={`w-full ${
                        simulador.color === 'blue' 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white font-medium py-3 rounded-xl transition-all duration-200 group-hover:shadow-lg`}
                    >
                      Acessar Simulador
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações Adicionais */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Sobre os Simuladores
            </CardTitle>
            <CardDescription>
              Informações importantes sobre o uso das ferramentas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Precisão dos Cálculos</h4>
                <p className="text-sm text-gray-600">
                  Nossos simuladores utilizam as tabelas oficiais mais atualizadas do governo federal, 
                  garantindo cálculos precisos e confiáveis para suas simulações fiscais.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Atualizações Automáticas</h4>
                <p className="text-sm text-gray-600">
                  As ferramentas são atualizadas automaticamente sempre que há mudanças na legislação, 
                  mantendo você sempre em conformidade com as regras vigentes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
