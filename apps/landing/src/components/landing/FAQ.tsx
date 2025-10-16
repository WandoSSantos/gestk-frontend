'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Shield,
  Zap,
  Users,
  FileText,
  DollarSign
} from 'lucide-react'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: 'Funcionalidades',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      questions: [
        {
          question: 'Como funciona o multi-tenant no GESTK?',
          answer: 'O multi-tenant permite que você gerencie múltiplas contabilidades de forma completamente isolada. Cada cliente tem seu próprio ambiente seguro, com dados separados e configurações independentes. Isso garante total privacidade e organização.'
        },
        {
          question: 'Quais tipos de relatórios posso gerar?',
          answer: 'O GESTK oferece mais de 50 tipos de relatórios, incluindo DRE, Balanço Patrimonial, Fluxo de Caixa, Relatórios Fiscais, Relatórios Gerenciais e muito mais. Todos podem ser personalizados e agendados para envio automático.'
        },
        {
          question: 'Posso integrar com outros sistemas?',
          answer: 'Sim! Oferecemos API REST completa e integrações nativas com os principais ERPs, sistemas bancários, SPED e outras ferramentas contábeis. Nossa equipe também pode desenvolver integrações customizadas.'
        }
      ]
    },
    {
      title: 'Segurança',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      questions: [
        {
          question: 'Como é feita a segurança dos dados?',
          answer: 'Utilizamos criptografia de ponta a ponta, backup redundante em múltiplas localizações, monitoramento 24/7 e certificações de segurança. Todos os dados são armazenados em servidores seguros com acesso restrito e auditoria completa.'
        },
        {
          question: 'Meus dados estão seguros na nuvem?',
          answer: 'Sim! Utilizamos infraestrutura de nuvem de nível empresarial com certificações ISO 27001 e SOC 2. Os dados são criptografados em trânsito e em repouso, com backup automático e recuperação de desastres.'
        },
        {
          question: 'Quem tem acesso aos meus dados?',
          answer: 'Apenas usuários autorizados por você têm acesso aos dados. Implementamos controle de acesso granular, auditoria completa de atividades e princípio do menor privilégio. Nossa equipe técnica não acessa dados sem autorização expressa.'
        }
      ]
    },
    {
      title: 'Suporte',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      questions: [
        {
          question: 'Qual o SLA de suporte?',
          answer: 'Oferecemos suporte prioritário com resposta em até 2 horas para planos Profissional e Enterprise. Para o plano Básico, o prazo é de 24 horas. Suporte 24/7 está disponível para clientes Enterprise.'
        },
        {
          question: 'Como funciona o treinamento?',
          answer: 'Fornecemos treinamento completo para sua equipe, incluindo vídeos tutoriais, documentação detalhada, webinars ao vivo e suporte dedicado durante a implementação. Também oferecemos consultoria para otimizar seus processos.'
        },
        {
          question: 'Como funciona o processo de migração de dados (ETL)?',
          answer: 'Nosso processo ETL é totalmente automatizado e seguro. Primeiro, extraímos os dados do seu sistema atual através de backup. Depois, transformamos e padronizamos os dados para o formato GESTK. Por fim, carregamos tudo no sistema com validação completa. Todo o processo é monitorado e você recebe relatórios detalhados de cada etapa.'
        }
      ]
    },
    {
      title: 'ETL e Migração',
      icon: FileText,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      questions: [
        {
          question: 'Quanto tempo leva para migrar os dados?',
          answer: 'O tempo varia conforme o volume de dados e complexidade do sistema atual. Em média: até 50 clientes (1-2 dias), até 200 clientes (3-5 dias), mais de 200 clientes (1-2 semanas). Nossa equipe trabalha 24/7 para acelerar o processo sem comprometer a qualidade.'
        },
        {
          question: 'Meus dados ficam seguros durante a migração?',
          answer: 'Sim! Utilizamos criptografia de ponta a ponta durante todo o processo. Os dados são transferidos através de conexões seguras e ficam armazenados temporariamente em servidores isolados e criptografados. Após a migração, todos os dados temporários são permanentemente deletados.'
        },
        {
          question: 'Posso migrar de qualquer sistema contábil?',
          answer: 'Sim! Nossa tecnologia ETL é compatível com os principais sistemas do mercado: Conta Azul, Senior, TOTVS, Microsiga, Datasul, e muitos outros. Se seu sistema não estiver na lista, nossa equipe desenvolve conectores personalizados sem custo adicional.'
        }
      ]
    },
    {
      title: 'Preços',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      questions: [
        {
          question: 'Posso cancelar a qualquer momento?',
          answer: 'Sim! Não há fidelidade ou multa por cancelamento. Você pode cancelar sua assinatura a qualquer momento através do painel administrativo ou entrando em contato com nosso suporte.'
        },
        {
          question: 'Há taxa de setup ou instalação?',
          answer: 'Não! Não cobramos taxa de setup, instalação ou migração de dados. O valor mensal inclui tudo: software, suporte, atualizações e treinamento básico.'
        },
        {
          question: 'Posso testar antes de contratar?',
          answer: 'Claro! Oferecemos teste grátis de 14 dias sem compromisso. Você terá acesso completo a todas as funcionalidades do plano escolhido para avaliar se atende suas necessidades.'
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o GESTK.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 3 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar. Entre em contato e 
              tire todas as suas dúvidas sobre o GESTK.
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contato')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-hover"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
