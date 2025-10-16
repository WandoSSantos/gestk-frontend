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
import { useMemo } from 'react'

interface IRPFResult {
  rendaMensal: number
  deducoes: number
  baseCalculo: number
  aliquota: number
  valorImposto: number
  faixa: string
  tipoSegurado: string
  modalidade: string

}

export default function SimuladorIRPFPage() {
  const [rendaMensal, setRendaMensal] = useState('')
  const [dependentes, setDependentes] = useState('0')
  const [outrasDeducoes, setOutrasDeducoes] = useState('0')
  const [resultado, setResultado] = useState<IRPFResult | null>(null)
  const [calculando, setCalculando] = useState(false)
  const [tipoSegurado, setTipoSegurado] = useState('')
  const [modalidade, setModalidade] = useState('')

  const seguradoSemModalidades = ["empregado", "empregado doméstico", "trabalhador avulso", ""]

  const modalidadesPorSegurado: Record<string, { value: string; label: string }[]> = {
    "contribuinte individual": [
      { value: "plano simplificado", label: "Plano Simplificado" },
      { value: "plano normal", label: "Plano Normal" },
    ],

    "segurado facultativo": [
      { value: "baixa renda", label: "Baixa Renda" },
      { value: "plano simplificado", label: "Plano Simplificado" },
      { value: "plano normal", label: "Plano Normal" },
    ],

    "segurado especial": [
      { value: "contribuição obrigatória", label: "Contribuição Obrigatória" },
      { value: "contribuição optativa", label: "Contribuição Optativa" },
    ],

    "autônomo cooperativo": [
      { value: "plano simplificado", label: "Plano Simplificado" },
      { value: "plano normal", label: "Plano Normal" }
    ],

    "mei": [
      { value: "baixa renda", label: "Baixa Renda" },
      { value: "contribuição complementar", label: "Contribuição Complementar" }
    ]
  }

  const modalidadesDisponiveis = modalidadesPorSegurado[tipoSegurado] || [
    { value: "baixa renda", label: "Baixa Renda" },
    { value: "plano simplificado", label: "Plano Simplificado" },
    { value: "plano normal", label: "Plano Normal" },
  ]

  const calcularBase = (tipoSegurado: string, modalidade: string, rendaMensal: number, dependentes: number, outrasDeducoes: number): IRPFResult => {
    
    // Segurado referentes a tabela progressiva
    const seguradoTabelaProgressiva = ["empregado", "empregado doméstico", "trabalhador avulso"]

    // Segurado referentes aos planos do INSS e outrasd taxas
    const seguradoPlanos = ["contribuinte individual", "segurado facultativo", "segurado especial", "autônomo cooperativo", "mei"]

    // Dedução por dependente (2025)
    const deducaoDependentes = dependentes * 189.59 // R$ 189,59 por dependente
    
    // Desconto simplificado
    const descontoSimplificado = 607.20 // R$ 607,20

    let deducoes = 0
    let baseCalculo = 0
    let aliquota = 0
    let valorINSS = 0

    if (seguradoTabelaProgressiva.includes(tipoSegurado)) {

      if (rendaMensal < 1518.00) {
        aliquota = 7.5
        valorINSS = rendaMensal * 0.075
      }

      else if (rendaMensal > 1518.00 && rendaMensal <= 2793.88) {
        aliquota = 9.0
        valorINSS = rendaMensal * 0.09 - 22.77 // R$ 22,77
      }

      else if (rendaMensal > 2793.88 && rendaMensal <= 4190.83) {
        aliquota = 12
        valorINSS = rendaMensal * 0.12 - 106.59 // R$ 106,59
      }

      else if (rendaMensal > 4190.83 && rendaMensal <= 8157.41) {
        aliquota = 14
        valorINSS = rendaMensal * 0.14 - 190.40 // R$ 190,40
      }
    }

    else if (seguradoPlanos.includes(tipoSegurado)) {
      switch(modalidade) {
        case "baixa renda":
          aliquota = 5
          valorINSS = 1518.00 * 0.05
          break

        case "plano simplificado":
          aliquota = 11
          valorINSS = 1518.00 * 0.11
          break

        case "plano normal":
          aliquota = 20
          valorINSS = rendaMensal >= 8157.41 ? 1631.48 : rendaMensal * 0.20
          break

        case "contribuição obrigatória":
          aliquota = 1.3
          valorINSS = rendaMensal >= 8157.41 ? 1631.48 : rendaMensal * 0.013
          break

        case "contribuição optativa":
          aliquota = 20
          valorINSS = rendaMensal >= 8157.41 ? 1631.48 : rendaMensal * 0.20
          break

        case "contribuição complementar":
          aliquota = 20
          valorINSS = rendaMensal >= 8157.41 ? 1631.48 : rendaMensal * 0.20
      }
    }

    console.log(valorINSS)

    // Deduções totais
    const deducoesTotais = deducaoDependentes + outrasDeducoes + valorINSS

    // Bases de cálculo (optando pela mais vantajosa)
    const baseDeducoesTotais = rendaMensal - deducoesTotais
    const baseDeducaoSimplificada = rendaMensal - descontoSimplificado

    if (baseDeducaoSimplificada < baseDeducoesTotais) {
      baseCalculo = baseDeducaoSimplificada
      deducoes = descontoSimplificado
    }

    else {
      baseCalculo = baseDeducoesTotais
      deducoes = deducoesTotais
    }

    return {
      baseCalculo,
      rendaMensal,
      tipoSegurado,
      modalidade,
      deducoes
    }
  }

  const calcularIRPF = (baseCalculo: number, rendaMensal: number, tipoSegurado: string, modalidade: string, deducoes: number): IRPFResult => {

    let aliquota = 0
    let faixa = ''
    let valorImposto = 0

    // Tabela IRPF 2025 (valores mensais)
    if (baseCalculo <= 2428.80) { // R$ 2.428,80
      aliquota = 0
      faixa = 'Isento'
      valorImposto = 0
    } else if (baseCalculo <= 2826.65) { // R$ 2.826,65
      aliquota = 7.5
      faixa = 'De R$ 2.428,80 até R$ 2.826,65'
      valorImposto = (baseCalculo * 0.075) - 182.16 // R$ 182,16
    } else if (baseCalculo <= 3751.05) { // R$ 3.751,05
      aliquota = 15
      faixa = 'De R$ 2.826,66 até R$ 3.751,05'
      valorImposto = (baseCalculo * 0.15) - 394.16 // R$ 394,16
    } else if (baseCalculo <= 4664.68) { // R$ 4.664,68
      aliquota = 22.5
      faixa = 'De R$ 3.751,06 até R$ 4.664,68'
      valorImposto = (baseCalculo * 0.225) - 675.49 // R$ 675,49
    } else {
      aliquota = 27.5
      faixa = 'Acima de R$ 4.664,68'
      valorImposto = (baseCalculo * 0.275) - 908.73 // R$ 908,73
    }

    return {
      baseCalculo,
      rendaMensal,
      aliquota,
      valorImposto,
      faixa,
      tipoSegurado,
      modalidade,
      deducoes
    }
  }

  const handleCalcular = async () => {
    if (!rendaMensal || parseFloat(rendaMensal) <= 0) return

    setCalculando(true)

    // Simular delay de cálculo
    await new Promise(resolve => setTimeout(resolve, 1000))

    const rendaMensalNum = parseFloat(rendaMensal)
    const dependentesNum = parseInt(dependentes) || 0
    const outrasDeducoesNum = parseFloat(outrasDeducoes) || 0
    const tipoSeguradoStr = String(tipoSegurado) || ""
    const modalidadeStr = String(modalidade) || ""

    const baseResult = calcularBase(tipoSeguradoStr, modalidadeStr, rendaMensalNum, dependentesNum, outrasDeducoesNum)
    const resultadoCalculo = calcularIRPF(
      baseResult.baseCalculo,
      baseResult.rendaMensal,
      baseResult.tipoSegurado,
      baseResult.modalidade,
      baseResult.deducoes
    )

    setResultado(resultadoCalculo)
    setCalculando(false)
  }

  const limparFormulario = () => {
    setRendaMensal('')
    setDependentes('0')
    setOutrasDeducoes('0')
    setResultado(null)
    setTipoSegurado('')
    setModalidade('')
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
                <Label htmlFor="rendaMensal">Renda Mensal Bruta (R$)</Label>
                <Input
                  id="rendaMensal"
                  type="number"
                  placeholder="0,00"
                  value={rendaMensal}
                  onChange={(e) => setRendaMensal(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-gray-500">
                  Digite sua renda mensal bruta
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
                  R$ 189,59 por dependente (2024)
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

              {/* <div className="space-y-2">
                <Label htmlFor="impostoRetido">Imposto Retido na Fonte (R$)</Label>
                <Input
                  id="impostoRetido"
                  type="number"
                  placeholder="0,00"
                  value={impostoRetido}
                  onChange={(e) => setImpostoRetido(e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  Imposto já retido durante o mês
                </p>
              </div> */}

              <div className='space-y-2'>
                <Label htmlFor="tipoSegurado">Segurado</Label>
                <Select
                  value={tipoSegurado}
                  onValueChange={(value: string) => {
                    setTipoSegurado(value)
                    setModalidade("") // reseta modalidade quando muda o tipo
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o Segurado"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='empregado'>Empregado</SelectItem>
                    <SelectItem value='trabalhador avulso'>Trabalhador Avulso</SelectItem>
                    <SelectItem value='empregado doméstico'>Empregado Doméstico</SelectItem>
                    <SelectItem value='contribuinte individual'>Contribuinte Individual</SelectItem>
                    <SelectItem value='segurado facultativo'>Segurado Facultativo</SelectItem>
                    <SelectItem value='segurado especial'>Segurado Especial</SelectItem>
                    <SelectItem value='autônomo cooperativo'>Autônomo Cooperativo</SelectItem>
                    <SelectItem value='mei'>MEI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='modalidade'>Modalidade</Label>
                <Select
                  value={modalidade}
                  onValueChange={(value: string) => setModalidade(value)}
                  disabled={seguradoSemModalidades.includes(tipoSegurado)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a Modalidade" />
                  </SelectTrigger>    
                  <SelectContent>
                    {modalidadesDisponiveis.map((mod) => (
                      <SelectItem key={mod.value} value={mod.value}>
                        {mod.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleCalcular}
                  disabled={calculando || !rendaMensal}
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
                        <span className="text-sm font-medium text-gray-600">Renda Mensal</span>
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-green-900">
                        R$ {resultado.rendaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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

                  {/* 
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
                  )} */}

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Faixa da Base de Calculo:</span>
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
                    <div className='flex justify-between items-cener py-2 border-b border-gray-200'>
                      <span className='text-sm text-gray-600'>Tipo de Segurado:</span>
                      <span className='text-sm font-medium'>
                        {resultado.tipoSegurado}
                      </span>
                    </div>
                    <div className='flex justify-between items-cener py-2 border-b border-gray-200'>
                      <span className='text-sm text-gray-600'>Tipo de Modalidade:</span>
                      <span className='text-sm font-medium'>
                        {resultado.modalidade}
                      </span>
                    </div>
                    {/* <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Renda Mensal:</span>
                      <span className="text-sm font-medium text-green-600">
                        R$ {resultado.rendaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div> */}
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

        {/* Informações Adicionais - Tabela de Aliquotas IRPF (2025) */}
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
                    <span>Até R$ 2.428,80:</span>
                    <span className="font-medium text-green-600">Isento</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 2.428,81 até R$ 2.826,65:</span>
                    <span className="font-medium">7,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 2.826,66 até R$ 3.751,05:</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>De R$ 3.751,06 até R$ 4.664,68:</span>
                    <span className="font-medium">22,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Acima de R$ 4.664,68:</span>
                    <span className="font-medium">27,5%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deduções Permitidas</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• R$ 189,59 por dependente (2025)</li>
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

        {/* Informações Adicionais - Tabela de Aliquotas Progressivas do INSS (2025) */}
        <Card className='shadow-lg border-0'>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Info className='h-5 w-5 mr-2 text-green-600' />
              Tabela de Alíquotas INSS 2025
            </CardTitle>
            <CardDescription>
              Dados atualizados conforme a tabela oficial da Receita Federal 2025
            </CardDescription>
            <CardDescription>
              Tabela referente aos seguintes tipos de segurado (empregado, empregado doméstico e trabalhador avulso)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Faixas de Contribuição 2025</h4>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Até R$ 1.518,00:</span>
                    <span className='font-medium'> 7,5%</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>De R$ 1.518,01 até R$ 2.793,88:</span>
                    <span className='font-medium'>9%</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>De R$ 2.793,89 até R$ 4.190,83:</span>
                    <span className='font-medium'>12%</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>De R$ 4.190,84 até R$ 8.157,41:</span>
                    <span className='font-medium'>14%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deduções por Faixa</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dedução Isenta para a faixa de 7,5%</li>
                  <li>• Dedução de R$ 22,77 para a faixa de 9%</li>
                  <li>• Dedução de R$ 106,59 para a faixa de 12%</li>
                  <li>• Dedução de R$ 190,40 para a faixa de 14%</li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Informações Adicionais - Tabela de Planos do INSS */}
        <Card className='shadow-lg border-0'>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Info className='h-5 w-5 mr-2 text-green-600' />
              Tabela de Planos INSS 2025
            </CardTitle>
            <CardDescription>
              Dados atualizados conforme a tabela oficial da Receita Federal 2025
            </CardDescription>
            <CardDescription>
              Tabela referente aos seguintes tipos de segurado (contribuinte individual, segurado facultativo, segurado especial, mei e autônomo cooperativo)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Planos de Contribuição</h4>
                <div className='space-y-2 text-sm'>
                  <div className=''>
                    <span className='font-medium'>Baixa Renda:</span>
                  </div>
                  <div className=''>
                    <span className='font-medium'>Plano Simplificado:</span>
                  </div>
                  <div className=''>
                    <span className='font-medium'>Plano Normal:</span>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>R$ 1.518,00</span>
                    <span className='font-medium'>5%</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>R$ 1.518,00</span>
                    <span className='font-medium'>11%</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>R$ 1.518,00 até R$ 8.157,41</span>
                    <span className='font-medium'>20%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Direitos por Plano</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Aposentadoria por idade e auxílios</li>
                  <li>• Aposentadoria por idade e auxílios</li>
                  <li>• Aposentadoria por tempo de contribuição e auxílios</li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
