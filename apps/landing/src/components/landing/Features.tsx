'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BarChart3, 
  Shield, 
  FileText, 
  FileSpreadsheet, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboards Inteligentes',
      description: 'Transforme dados em insights valiosos. Acompanhe seus principais KPIs com gráficos dinâmicos e relatórios atualizados em tempo real para tomar decisões mais rápidas e estratégicas.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Segurança e Conformidade',
      description: 'Sua tranquilidade é nossa prioridade. Oferecemos autenticação robusta, criptografia de dados de ponta a ponta e total conformidade com a LGPD para proteger suas informações mais valiosas.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Integração Modular',
      description: 'Sua empresa é única. Comece com o essencial e adicione módulos de gestão (Financeiro, Estoque, Vendas) conforme suas necessidades evoluem. Pague apenas pelo que usar.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: FileSpreadsheet,
      title: 'ETL Automatizado',
      description: 'Migração inteligente de dados de qualquer sistema contábil. Processo automatizado de extração, transformação e carregamento com validação completa dos dados.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Multi-tenant Seguro',
      description: 'Cada cliente tem seu ambiente isolado e seguro. Gerencie múltiplas contabilidades com total separação de dados e controle de acesso granular.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: FileText,
      title: 'Simuladores Avançados',
      description: 'Simule cenários contábeis e projeções financeiras. Ferramentas poderosas para análise de viabilidade e planejamento estratégico dos seus clientes.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ]

  const benefits = [
    'Redução de 70% no tempo de processamento',
    'Aumento de 90% na precisão dos relatórios',
    'Economia de 60% nos custos operacionais',
    'Satisfação de 98% dos clientes'
  ]

  return (
    <section id="recursos" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recursos que fazem a{' '}
            <span className="gradient-text dark:gradient-text-dark">diferença</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tudo que você precisa para gerenciar sua contabilidade de forma eficiente, 
            segura e inteligente em uma única plataforma.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-xl transition-all duration-300 border-0 modern-card hover:bg-white dark:hover:bg-gray-800"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                {/* Learn More Link */}
                <div className="mt-4 flex items-center text-primary-600 hover:text-primary-700 transition-colors cursor-pointer group/link">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Resultados comprovados para seu negócio
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Nossos clientes experimentam melhorias significativas em produtividade, 
                precisão e satisfação após implementar o GESTK.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-2xl p-8 border border-primary-100">
                {/* Chart Placeholder */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Crescimento da Produtividade
                    </h4>
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      +70%
                    </div>
                    <p className="text-sm text-gray-600">
                      Aumento médio após 6 meses
                    </p>
                  </div>
                  
                  {/* Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Eficiência</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Precisão</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-success-500 to-success-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Satisfação</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-warning-500 to-warning-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-success-400 to-success-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
