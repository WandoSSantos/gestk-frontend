'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { sendContactForm } from '@/lib/api/contact'
import { ContactFormData } from '@/types/contact'
import { toast } from 'sonner'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Building2,
  User,
  Phone as PhoneIcon
} from 'lucide-react'

const contactSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().optional(),
  empresa: z.string().optional(),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const result = await sendContactForm(data)
      
      if (result.success) {
        toast.success(result.message)
        reset()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@gestk.com.br',
      description: 'Respondemos em até 2 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99999-9999',
      description: 'Segunda a Sexta, 8h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'São Paulo, SP',
      description: 'Atendimento remoto nacional'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: '24/7 Online',
      description: 'Suporte técnico disponível'
    }
  ]

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em{' '}
            <span className="gradient-text">contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para revolucionar sua contabilidade? Fale conosco e descubra como o GESTK pode transformar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-primary-600" />
                Envie sua mensagem
              </CardTitle>
              <CardDescription>
                Preencha o formulário e nossa equipe entrará em contato em breve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                    Nome completo *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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

                {/* Email */}
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

                {/* Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                    Telefone
                  </Label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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

                {/* Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                    Empresa
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

                {/* Mensagem */}
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
                    Mensagem *
                  </Label>
                  <textarea
                    id="mensagem"
                    {...register('mensagem')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Conte-nos sobre suas necessidades..."
                  />
                  {errors.mensagem && (
                    <p className="text-sm text-red-600">{errors.mensagem.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  variant="gradient"
                  className="w-full btn-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                {/* Success Message */}
                <div className="text-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 inline mr-1" />
                  Seus dados estão seguros e não serão compartilhados
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Outras formas de contato
              </h3>
              <p className="text-gray-600 mb-8">
                Prefere falar diretamente? Use qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-900 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary-50 to-indigo-50 border-primary-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Pronto para começar?
                </h4>
                <p className="text-gray-600 mb-4">
                  Agende uma demonstração personalizada e veja o GESTK em ação.
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full btn-hover"
                  onClick={() => {
                    const element = document.querySelector('#contato')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Agendar Demonstração
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
