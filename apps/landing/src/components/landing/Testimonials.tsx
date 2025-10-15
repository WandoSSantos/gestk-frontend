'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Building2,
  User
} from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Diretora Financeira',
      company: 'Contabilidade Silva & Associados',
      avatar: 'MS',
      rating: 5,
      content: 'A migração de dados via ETL foi perfeita! Migramos 300+ clientes em apenas uma semana sem perder nenhum dado. O processo foi transparente e sem interrupções.',
      highlight: 'Migração de 300+ clientes em 1 semana'
    },
    {
      name: 'João Santos',
      role: 'Sócio-proprietário',
      company: 'Escritório Santos Contabilidade',
      avatar: 'JS',
      rating: 5,
      content: 'Cada cliente tem seu ambiente isolado e seguro. Os dashboards personalizados mostram exatamente o que cada um precisa ver. A conformidade com LGPD é impecável.',
      highlight: 'Ambientes isolados e seguros'
    },
    {
      name: 'Ana Costa',
      role: 'Gerente de Operações',
      company: 'Costa & Partners Contadores',
      avatar: 'AC',
      rating: 5,
      content: 'Os simuladores de cenários contábeis são fantásticos! Conseguimos apresentar projeções precisas para nossos clientes e isso aumentou muito nossa credibilidade.',
      highlight: 'Simuladores de cenários precisos'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Contador Sênior',
      company: 'Oliveira Contabilidade Ltda',
      avatar: 'CO',
      rating: 5,
      content: 'O backup automático e a migração de dados nos deram total tranquilidade. Sabemos que nossos dados estão seguros e sempre disponíveis.',
      highlight: 'Backup automático e segurança total'
    },
    {
      name: 'Patricia Lima',
      role: 'CEO',
      company: 'Lima Consultoria Contábil',
      avatar: 'PL',
      rating: 5,
      content: 'A API REST nos permite integrar com qualquer sistema contábil existente. A flexibilidade do GESTK se adapta perfeitamente às nossas necessidades.',
      highlight: 'Integração flexível com APIs'
    },
    {
      name: 'Roberto Ferreira',
      role: 'Sócio',
      company: 'Ferreira & Associados',
      avatar: 'RF',
      rating: 5,
      content: 'O processo de ETL foi incrível! Conseguimos migrar dados de 5 sistemas diferentes sem problemas. A equipe de suporte nos guiou em cada etapa.',
      highlight: 'Migração de 5 sistemas diferentes'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O que nossos{' '}
            <span className="gradient-text dark:gradient-text-dark">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mais de 500 escritórios contábeis confiam no GESTK para gerenciar seus negócios.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <Card className="max-w-4xl mx-auto modern-card border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-primary-600" />
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Highlight */}
                <div className="inline-flex items-center space-x-2 bg-success-100 dark:bg-success-900 text-success-700 dark:text-success-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <Star className="w-4 h-4" />
                  <span>{currentTestimonial.highlight}</span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {currentTestimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {currentTestimonial.role}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400 flex items-center">
                      <Building2 className="w-3 h-3 mr-1" />
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:bg-primary-50 hover:border-primary-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:bg-primary-50 hover:border-primary-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              500+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Clientes Ativos
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              98%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Satisfação
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              70%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Redução de Tempo
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Suporte
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
