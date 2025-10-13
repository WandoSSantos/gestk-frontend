'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui'
import { Button } from '@gestk/ui'
import { Input } from '@gestk/ui'
import { Label } from '@gestk/ui'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@gestk/ui'
import { 
  Calculator, 
  Percent, 
  ArrowLeft,
  Info,
  TrendingUp,
  Calendar,
  DollarSign,
  Receipt,
  Minus,
  Plus
} from 'lucide-react'
import Link from 'next/link'

interface IRPFResult {
  rendaAnual: number
  rendaMensal: number
  deducoes: number
  baseCalculo: number
  aliquota: number
  valorImposto: number
  valorRestituicao: number
  faixa: string
}

export default function SimuladorIRPFPage() {
  const [rendaAnual, setRendaAnual] = useState('')
  const [dependentes, setDependentes] = useState('0')
  const [outrasDeducoes, setOutrasDeducoes] = useState('0')
  const [impostoRetido, setImpostoRetido] = useState('0')
  const [resultado, setResultado] = useState<IRPFResult | null>(null)
  const [calculando, setCalculando] = useState(false)

  const calcularIRPF = (rendaAnual: number, dependentes: number, outrasDeducoes: number, impostoRetido: number): IRPFResult => {
    const rendaMensal = rendaAnual / 12
    
    // Dedução por dependente (2025)
    const deducaoDependentes = dependentes * 2400
    
    // Deduções totais
    const deducoes = deducaoDependentes + outrasDeducoes
    
    // Base de cálculo
    const baseCalculo = Math.max(0, rendaAnual - deducoes)
    
    let aliquota = 0
    let faixa = ''
    let valorImposto = 0
    
    // Tabela IRPF 2025 (valores anuais)
    if (baseCalculo <= 29145.60) { // R$ 2.428,80 * 12
      aliquota = 0
      faixa = 'Isento'
      valorImposto = 0
    } else if (baseCalculo <= 33919.80) { // R$ 2.826,65 * 12
      aliquota = 7.5
      faixa = 'De R$ 29.145,61 até R$ 33.919,80'
      valorImposto = (baseCalculo * 0.075) - 2185.92 // R$ 182,16 * 12
    } else if (baseCalculo <= 45012.60) { // R$ 3.751,05 * 12
      aliquota = 15
      faixa = 'De R$ 33.919,81 até R$ 45.012,60'
      valorImposto = (baseCalculo * 0.15) - 4729.92 // R$ 394,16 * 12
    } else if (baseCalculo <= 55976.16) { // R$ 4.664,68 * 12
      aliquota = 22.5
      faixa = 'De R$ 45.012,61 até R$ 55.976,16'
      valorImposto = (baseCalculo * 0.225) - 8105.88 // R$ 675,49 * 12
    } else {
      aliquota = 27.5
      faixa = 'Acima de R$ 55.976,16'
      valorImposto = (baseCalculo * 0.275) - 10904.76 // R$ 908,73 * 12
    }
    
    const valorRestituicao = Math.max(0, impostoRetido - valorImposto)

    return {
      rendaAnual,
      rendaMensal,
      deducoes,
      baseCalculo,
      aliquota,
      valorImposto,
      valorRestituicao,
      faixa
    }
  }

  const handleCalcular = async () => {
    if (!rendaAnual || parseFloat(rendaAnual) <= 0) return

    setCalculando(true)
    
    // Simular delay de cálculo
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const rendaAnualNum = parseFloat(rendaAnual)
    const dependentesNum = parseInt(dependentes) || 0
    const outrasDeducoesNum = parseFloat(outrasDeducoes) || 0
    const impostoRetidoNum = parseFloat(impostoRetido) || 0
    
    const resultadoCalculo = calcularIRPF(rendaAnualNum, dependentesNum, outrasDeducoesNum, impostoRetidoNum)
    setResultado(resultadoCalculo)
    setCalculando(false)
  }

  const limparFormulario = () => {
    setRendaAnual('')
    setDependentes('0')
    setOutrasDeducoes('0')
    setImpostoRetido('0')
    setResultado(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/simuladores">
            <Button variant="outline" size="sm" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center">
              <Percent className="h-10 w-10 mr-3 text-green-600" />
              Simulador de IRPF
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Calcule impostos e planejamento fiscal
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-green-600" />
                Dados para Cálculo
              </CardTitle>
              <CardDescription>
                Informe os dados necessários para o cálculo do IRPF
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="rendaAnual">Renda Anual Bruta (R$)</Label>
                <Input
                  id="rendaAnual"
                  type="number"
                  placeholder="0,00"
                  value={rendaAnual}
                  onChange={(e) => setRendaAnual(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-gray-500">
                  Digite sua renda anual bruta
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dependentes">Número de Dependentes</Label>
                <Input
                  id="dependentes"
                  type="number"
                  placeholder="0"
                  value={dependentes}
                  onChange={(e) => setDependentes(e.target.value)}
                  min="0"
                />
                <p className="text-sm text-gray-500">
                  R$ 2.400,00 por dependente (2024)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="outrasDeducoes">Outras Deduções (R$)</Label>
                <Input
                  id="outrasDeducoes"
                  type="number"
                  placeholder="0,00"
                  value={outrasDeducoes}
                  onChange={(e) => setOutrasDeducoes(e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  Gastos com saúde, educação, etc.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="impostoRetido">Imposto Retido na Fonte (R$)</Label>
                <Input
                  id="impostoRetido"
                  type="number"
                  placeholder="0,00"
                  value={impostoRetido}
                  onChange={(e) => setImpostoRetido(e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  Imposto já retido durante o ano
                </p>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleCalcular}
                  disabled={calculando || !rendaAnual}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {calculando ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-4 w-4 mr-2" />
                      Calcular
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={limparFormulario}
                  className="flex-1"
                >
                  Limpar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resultado */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Resultado do Cálculo
              </CardTitle>
              <CardDescription>
                {resultado ? 'Valores calculados com base na tabela oficial 2025' : 'Preencha os dados para ver o resultado'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {resultado ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Renda Anual</span>
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-green-900">
                        R$ {resultado.rendaAnual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Alíquota</span>
                        <Percent className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-blue-900">
                        {resultado.aliquota}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Imposto Devido</span>
                      <Receipt className="h-4 w-4 text-gray-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">
                      R$ {resultado.valorImposto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  {resultado.valorRestituicao > 0 && (
                    <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-800">Restituição</span>
                        <Plus className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-green-900">
                        R$ {resultado.valorRestituicao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Faixa de Renda:</span>
                      <span className="text-sm font-medium">{resultado.faixa}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Deduções Totais:</span>
                      <span className="text-sm font-medium">
                        R$ {resultado.deducoes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Base de Cálculo:</span>
                      <span className="text-sm font-medium">
                        R$ {resultado.baseCalculo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Renda Mensal:</span>
                      <span className="text-sm font-medium text-green-600">
                        R$ {resultado.rendaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Preencha os dados para calcular</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Informações Adicionais */}
        <Card className="shadow-lg border-0">
          <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-green-600" />
                Tabela de Alíquotas IRPF 2025
              </CardTitle>
            <CardDescription>
              Dados atualizados conforme tabela oficial da Receita Federal 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Faixas de Renda 2025</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Até R$ 29.145,60:</span>
                    <span className="font-medium text-green-600">Isento</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 29.145,61 até R$ 33.919,80:</span>
                    <span className="font-medium">7,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 33.919,81 até R$ 45.012,60:</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 45.012,61 até R$ 55.976,16:</span>
                    <span className="font-medium">22,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Acima de R$ 55.976,16:</span>
                    <span className="font-medium">27,5%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deduções Permitidas</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• R$ 2.400,00 por dependente (2025)</li>
                  <li>• Gastos com saúde (sem limite)</li>
                  <li>• Gastos com educação (até R$ 3.561,50)</li>
                  <li>• Previdência privada (até 12% da renda)</li>
                  <li>• Pensão alimentícia</li>
                  <li>• Nova faixa de isenção: R$ 2.428,80/mês</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
