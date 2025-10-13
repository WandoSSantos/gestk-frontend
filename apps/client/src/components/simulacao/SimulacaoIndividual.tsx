'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { EditableValue } from '@/components/editable/EditableValue';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  RotateCcw, 
  Building,
  Clock,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface SimulacaoIndividualProps {
  valorHora: number;
  onValorHoraChange: (valor: number) => void;
  metricas: {
    totalCusto: number;
    totalRentabilidade: number;
    totalFaturamento: number;
    totalTempoHoras: number;
    totalCompetencias: number;
    custoMedioPorCompetencia: number;
    rentabilidadeMediaPorCompetencia: number;
    margemRentabilidade: number;
    eficienciaOperacional: string;
  };
  analiseTendencias: {
    tendenciaCusto: string;
    tendenciaRentabilidade: string;
    tendenciaFaturamento: string;
  };
  onReset: () => void;
  empresaSelecionada: string | null;
  nomeEmpresa: string;
}

export function SimulacaoIndividual({
  valorHora,
  onValorHoraChange,
  metricas,
  analiseTendencias,
  onReset,
  empresaSelecionada,
  nomeEmpresa
}: SimulacaoIndividualProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatHours = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    return `${wholeHours}h ${minutes}min`;
  };

  const custoPorHora = metricas.totalTempoHoras > 0 ? metricas.totalCusto / metricas.totalTempoHoras : 0;
  const rentabilidadePorHora = metricas.totalTempoHoras > 0 ? metricas.totalRentabilidade / metricas.totalTempoHoras : 0;

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case 'Crescimento':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'Declínio':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Target className="h-4 w-4 text-blue-600" />;
    }
  };

  const getTendenciaColor = (tendencia: string) => {
    switch (tendencia) {
      case 'Crescimento':
        return 'text-green-600';
      case 'Declínio':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  const getEficienciaIcon = (eficiencia: string) => {
    switch (eficiencia) {
      case 'Alta':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Média':
        return <Target className="h-4 w-4 text-yellow-600" />;
      case 'Baixa':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getEficienciaColor = (eficiencia: string) => {
    switch (eficiencia) {
      case 'Alta':
        return 'text-green-600';
      case 'Média':
        return 'text-yellow-600';
      case 'Baixa':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  if (!empresaSelecionada) {
    return (
      <Card className="mb-6 border-gray-200 bg-gray-50">
        <CardContent className="p-8 text-center">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Selecione uma Empresa
          </h3>
          <p className="text-gray-500">
            Escolha uma empresa para visualizar a simulação de custo individual
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Calculator className="h-5 w-5" />
          Simulação Individual - {nomeEmpresa}
        </CardTitle>
        <CardDescription className="text-blue-600">
          Análise detalhada de custo operacional e rentabilidade por cliente
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Controle do Valor Hora */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Valor Hora do Escritório
              </label>
              <p className="text-xs text-gray-500">
                Ajuste o valor para simular diferentes cenários de precificação
              </p>
            </div>
            <div className="flex items-center gap-4">
              <EditableValue
                value={valorHora}
                onValueChange={onValorHoraChange}
                format="currency"
                className="text-lg font-semibold"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={onReset}
                className="text-gray-600"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Resetar
              </Button>
            </div>
          </div>

          {/* Métricas Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">Custo Total</span>
              </div>
              <div className="text-xl font-bold text-red-600">
                {formatCurrency(metricas.totalCusto)}
              </div>
              <div className="text-xs text-gray-500">
                {formatCurrency(custoPorHora)}/hora
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                {metricas.totalRentabilidade >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className="text-sm font-medium text-gray-700">Rentabilidade</span>
              </div>
              <div className={`text-xl font-bold ${
                metricas.totalRentabilidade >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatCurrency(metricas.totalRentabilidade)}
              </div>
              <div className="text-xs text-gray-500">
                {formatCurrency(rentabilidadePorHora)}/hora
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Tempo Total</span>
              </div>
              <div className="text-xl font-bold text-blue-600">
                {formatHours(metricas.totalTempoHoras)}
              </div>
              <div className="text-xs text-gray-500">
                {metricas.totalCompetencias} competências
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Margem</span>
              </div>
              <div className={`text-xl font-bold ${
                metricas.margemRentabilidade >= 10 ? 'text-green-600' : 
                metricas.margemRentabilidade >= 0 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {metricas.margemRentabilidade.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">
                de rentabilidade
              </div>
            </div>
          </div>

          {/* Análise de Tendências */}
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Análise de Tendências (Últimos 3 meses)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                {getTendenciaIcon(analiseTendencias.tendenciaCusto)}
                <span className="text-gray-600">Custo:</span>
                <span className={`font-semibold ${getTendenciaColor(analiseTendencias.tendenciaCusto)}`}>
                  {analiseTendencias.tendenciaCusto}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {getTendenciaIcon(analiseTendencias.tendenciaRentabilidade)}
                <span className="text-gray-600">Rentabilidade:</span>
                <span className={`font-semibold ${getTendenciaColor(analiseTendencias.tendenciaRentabilidade)}`}>
                  {analiseTendencias.tendenciaRentabilidade}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {getTendenciaIcon(analiseTendencias.tendenciaFaturamento)}
                <span className="text-gray-600">Faturamento:</span>
                <span className={`font-semibold ${getTendenciaColor(analiseTendencias.tendenciaFaturamento)}`}>
                  {analiseTendencias.tendenciaFaturamento}
                </span>
              </div>
            </div>
          </div>

          {/* Análise de Impacto Detalhada */}
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-3">Análise de Impacto Detalhada</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Eficiência Operacional:</span>
                <div className={`font-semibold flex items-center gap-1 ${getEficienciaColor(metricas.eficienciaOperacional)}`}>
                  {getEficienciaIcon(metricas.eficienciaOperacional)}
                  {metricas.eficienciaOperacional}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Custo Médio por Competência:</span>
                <div className="font-semibold text-gray-900">
                  {formatCurrency(metricas.custoMedioPorCompetencia)}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Rentabilidade Média:</span>
                <div className="font-semibold text-gray-900">
                  {formatCurrency(metricas.rentabilidadeMediaPorCompetencia)}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Faturamento Total:</span>
                <div className="font-semibold text-gray-900">
                  {formatCurrency(metricas.totalFaturamento)}
                </div>
              </div>
            </div>
          </div>

          {/* Recomendações */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Recomendações para Justificativa de Aumento
            </h4>
            <div className="space-y-2 text-sm text-blue-800">
              {metricas.margemRentabilidade < 10 && (
                <p>• <strong>Margem baixa:</strong> Considere aumentar o valor hora para melhorar a rentabilidade</p>
              )}
              {metricas.eficienciaOperacional === 'Baixa' && (
                <p>• <strong>Eficiência baixa:</strong> Cliente consome mais tempo que o esperado - justifique aumento</p>
              )}
              {analiseTendencias.tendenciaCusto === 'Crescimento' && (
                <p>• <strong>Tendência de crescimento:</strong> Custos aumentando - reajuste necessário</p>
              )}
              {metricas.totalRentabilidade < 0 && (
                <p>• <strong>Prejuízo operacional:</strong> Aumento urgente necessário para viabilizar o cliente</p>
              )}
              {metricas.margemRentabilidade >= 15 && metricas.eficienciaOperacional === 'Alta' && (
                <p>• <strong>Cliente rentável:</strong> Mantenha o valor atual ou considere pequenos ajustes</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

