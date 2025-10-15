'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Check, 
  Star, 
  ArrowRight,
  Calculator,
  Users,
  Building2,
  Mail,
  Phone,
  FileText,
  Send,
  Loader2
} from 'lucide-react'
import { toast } from 'sonner'

const quoteSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  empresa: z.string().min(2, 'Nome da empresa é obrigatório'),
  cnpj: z.string().min(14, 'CNPJ deve ter 14 dígitos').max(18, 'CNPJ inválido'),
  modulos: z.array(z.string()).min(1, 'Selecione pelo menos um módulo'),
  observacoes: z.string().optional()
})

type QuoteFormData = z.infer<typeof quoteSchema>

export function Pricing() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedModules, setSelectedModules] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      modulos: []
    }
  })

  const modules = [
    { id: 'gestao', name: 'Módulo de Gestão', description: 'Controle completo de clientes e contratos' },
    { id: 'dashboards', name: 'Dashboards', description: 'Relatórios e métricas em tempo real' },
    { id: 'simuladores', name: 'Simuladores', description: 'Simulação de cenários contábeis' }
  ]

  const features = [
    'Módulos sob medida',
    'Suporte prioritário 24/7',
    'Integração com sistemas existentes',
    'Relatórios personalizados',
    'Usuários ilimitados',
    'Treinamento completo',
    'Backup automático',
    'Conformidade LGPD'
  ]

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Solicitação enviada com sucesso! Entraremos em contato em breve.')
      reset()
      setSelectedModules([])
    } catch (error) {
      toast.error('Erro ao enviar solicitação. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Encontre o plano{' '}
            <span className="gradient-text">perfeito</span> para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entendemos que cada negócio é único. Por isso, criamos um plano sob medida para suas necessidades, baseado nos módulos escolhidos e no número de usuários. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-primary-50 to-indigo-50">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Orçamento Personalizado
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Solução completa adaptada às suas necessidades específicas
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                      Nome completo *
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="nome"
                        {...register('nome')}
                        className="pl-10"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    {errors.nome && (
                      <p className="text-sm text-red-600">{errors.nome.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="pl-10"
                        placeholder="seu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                      Telefone *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="telefone"
                        {...register('telefone')}
                        className="pl-10"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    {errors.telefone && (
                      <p className="text-sm text-red-600">{errors.telefone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                      Empresa *
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="empresa"
                        {...register('empresa')}
                        className="pl-10"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    {errors.empresa && (
                      <p className="text-sm text-red-600">{errors.empresa.message}</p>
                    )}
                  </div>
                </div>

                {/* Business Info */}
                <div className="space-y-2">
                  <Label htmlFor="cnpj" className="text-sm font-medium text-gray-700">
                    CNPJ da empresa *
                  </Label>
                  <Input
                    id="cnpj"
                    {...register('cnpj')}
                    placeholder="00.000.000/0000-00"
                  />
                  {errors.cnpj && (
                    <p className="text-sm text-red-600">{errors.cnpj.message}</p>
                  )}
                </div>

                {/* Modules Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-900">
                    Módulos de interesse *
                  </Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {modules.map((module) => (
                      <div
                        key={module.id}
                        onClick={() => toggleModule(module.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedModules.includes(module.id)
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                            selectedModules.includes(module.id)
                              ? 'border-primary-500 bg-primary-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedModules.includes(module.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{module.name}</h4>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.modulos && (
                    <p className="text-sm text-red-600">{errors.modulos.message}</p>
                  )}
                </div>

                {/* Observations */}
                <div className="space-y-2">
                  <Label htmlFor="observacoes" className="text-sm font-medium text-gray-700">
                    Observações adicionais
                  </Label>
                  <textarea
                    id="observacoes"
                    {...register('observacoes')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Conte-nos mais sobre suas necessidades específicas..."
                  />
                </div>

                {/* Features Included */}
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Todos os planos incluem:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-success-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="px-12 py-4 text-lg btn-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Solicitar Orçamento Gratuito
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
