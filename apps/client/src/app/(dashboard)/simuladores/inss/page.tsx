'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui'
import { Button } from '@gestk/ui'
import { Input } from '@gestk/ui'
import { Label } from '@gestk/ui'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@gestk/ui'
import { 
  Calculator, 
  Shield, 
  ArrowLeft,
  Info,
  TrendingUp,
  Calendar,
  DollarSign,
  Percent
} from 'lucide-react'
import Link from 'next/link'

interface INSSResult {
  salario: number
  aliquota: number
  valorContribuicao: number
  faixa: string
  teto: number
}

export default function SimuladorINSSPage() {
  const [salario, setSalario] = useState('')
  const [tipoCalculo, setTipoCalculo] = useState('contribuicao')
  const [resultado, setResultado] = useState<INSSResult | null>(null)
  const [calculando, setCalculando] = useState(false)

  const calcularINSS = (salarioBruto: number): INSSResult => {
    const salario = Math.min(salarioBruto, 8157.41) // Teto do INSS 2025
    
    let valorContribuicao = 0
    let faixa = ''
    let aliquotaEfetiva = 0
    
    // Cálculo progressivo conforme tabela 2025
    if (salario <= 1518.00) {
      valorContribuicao = salario * 0.075
      faixa = 'Até R$ 1.518,00'
      aliquotaEfetiva = 7.5
    } else if (salario <= 2793.88) {
      valorContribuicao = (1518.00 * 0.075) + ((salario - 1518.00) * 0.09)
      faixa = 'De R$ 1.518,01 até R$ 2.793,88'
      aliquotaEfetiva = (valorContribuicao / salario) * 100
    } else if (salario <= 4190.83) {
      valorContribuicao = (1518.00 * 0.075) + ((2793.88 - 1518.00) * 0.09) + ((salario - 2793.88) * 0.12)
      faixa = 'De R$ 2.793,89 até R$ 4.190,83'
      aliquotaEfetiva = (valorContribuicao / salario) * 100
    } else {
      valorContribuicao = (1518.00 * 0.075) + ((2793.88 - 1518.00) * 0.09) + ((4190.83 - 2793.88) * 0.12) + ((salario - 4190.83) * 0.14)
      faixa = 'De R$ 4.190,84 até R$ 8.157,41'
      aliquotaEfetiva = (valorContribuicao / salario) * 100
    }

    return {
      salario: salarioBruto,
      aliquota: aliquotaEfetiva,
      valorContribuicao,
      faixa,
      teto: 8157.41
    }
  }

  const handleCalcular = async () => {
    if (!salario || parseFloat(salario) <= 0) return

    setCalculando(true)
    
    // Simular delay de cálculo
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const salarioNum = parseFloat(salario)
    const resultadoCalculo = calcularINSS(salarioNum)
    setResultado(resultadoCalculo)
    setCalculando(false)
  }

  const limparFormulario = () => {
    setSalario('')
    setResultado(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              <Shield className="h-10 w-10 mr-3 text-blue-600" />
              Simulador de INSS
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Calcule contribuições e benefícios do INSS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                Dados para Cálculo
              </CardTitle>
              <CardDescription>
                Informe os dados necessários para o cálculo do INSS
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="salario">Salário Bruto (R$)</Label>
                <Input
                  id="salario"
                  type="number"
                  placeholder="0,00"
                  value={salario}
                  onChange={(e) => setSalario(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-gray-500">
                  Digite o valor do salário bruto para cálculo
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Cálculo</Label>
                <Select value={tipoCalculo} onValueChange={setTipoCalculo}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contribuicao">Contribuição Mensal</SelectItem>
                    <SelectItem value="aposentadoria">Simulação de Aposentadoria</SelectItem>
                    <SelectItem value="auxilio">Auxílio-Doença</SelectItem>
                    <SelectItem value="maternidade">Salário-Maternidade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleCalcular}
                  disabled={calculando || !salario}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
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
                {resultado ? 'Valores calculados com base nas tabelas oficiais' : 'Preencha os dados para ver o resultado'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {resultado ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Salário Bruto</span>
                        <DollarSign className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-blue-900">
                        R$ {resultado.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Alíquota</span>
                        <Percent className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-green-900">
                        {resultado.aliquota}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Contribuição INSS</span>
                      <Shield className="h-4 w-4 text-gray-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">
                      R$ {resultado.valorContribuicao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Faixa Salarial:</span>
                      <span className="text-sm font-medium">{resultado.faixa}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Teto INSS 2025:</span>
                      <span className="text-sm font-medium">
                        R$ {resultado.teto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Salário Líquido:</span>
                      <span className="text-sm font-medium text-green-600">
                        R$ {(resultado.salario - resultado.valorContribuicao).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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
              <Info className="h-5 w-5 mr-2 text-blue-600" />
              Informações Importantes
            </CardTitle>
            <CardDescription>
              Dados atualizados conforme tabela oficial do INSS 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tabela de Contribuição 2025</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Até R$ 1.518,00:</span>
                    <span className="font-medium">7,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 1.518,01 até R$ 2.793,88:</span>
                    <span className="font-medium">9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 2.793,89 até R$ 4.190,83:</span>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 4.190,84 até R$ 8.157,41:</span>
                    <span className="font-medium">14%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Observações</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Teto máximo de contribuição: R$ 8.157,41</li>
                  <li>• Valores atualizados em janeiro/2025</li>
                  <li>• Cálculo progressivo conforme tabela oficial</li>
                  <li>• Para casos específicos, consulte um contador</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
