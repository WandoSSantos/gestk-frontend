'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { EditableValue } from '@/components/editable/EditableValue';
import { Calculator, TrendingUp, TrendingDown, RotateCcw } from 'lucide-react';

interface SimulacaoCustoProps {
  valorHora: number;
  onValorHoraChange: (valor: number) => void;
  metricas: {
    totalCusto: number;
    totalRentabilidade: number;
    totalFaturamento: number;
    totalTempoHoras: number;
    totalEmpresas: number;
  };
  onReset: () => void;
}

export function SimulacaoCusto({
  valorHora,
  onValorHoraChange,
  metricas,
  onReset
}: SimulacaoCustoProps) {
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

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Calculator className="h-5 w-5" />
          Simulação de Custo Operacional
        </CardTitle>
        <CardDescription className="text-blue-600">
          Ajuste o valor hora para simular diferentes cenários de custo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Controle do Valor Hora */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Valor Hora do Escritório
              </label>
              <p className="text-xs text-gray-500">
                Clique no valor para editar e recalcular automaticamente
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

          {/* Métricas de Simulação */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
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
                <Calculator className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Tempo Total</span>
              </div>
              <div className="text-xl font-bold text-blue-600">
                {formatHours(metricas.totalTempoHoras)}
              </div>
              <div className="text-xs text-gray-500">
                {metricas.totalEmpresas} empresas
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Faturamento</span>
              </div>
              <div className="text-xl font-bold text-purple-600">
                {formatCurrency(metricas.totalFaturamento)}
              </div>
              <div className="text-xs text-gray-500">
                Total das empresas
              </div>
            </div>
          </div>

          {/* Análise de Impacto */}
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-3">Análise de Impacto</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Margem de Rentabilidade:</span>
                <div className={`font-semibold ${
                  metricas.totalFaturamento > 0 
                    ? (metricas.totalRentabilidade / metricas.totalFaturamento) >= 0.1 
                      ? 'text-green-600' 
                      : 'text-yellow-600'
                    : 'text-gray-500'
                }`}>
                  {metricas.totalFaturamento > 0 
                    ? `${((metricas.totalRentabilidade / metricas.totalFaturamento) * 100).toFixed(1)}%`
                    : 'N/A'
                  }
                </div>
              </div>
              <div>
                <span className="text-gray-600">Custo por Empresa:</span>
                <div className="font-semibold text-gray-900">
                  {formatCurrency(metricas.totalCusto / metricas.totalEmpresas)}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Eficiência Operacional:</span>
                <div className={`font-semibold ${
                  custoPorHora <= valorHora * 0.8 ? 'text-green-600' : 
                  custoPorHora <= valorHora * 1.2 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {custoPorHora <= valorHora * 0.8 ? 'Alta' : 
                   custoPorHora <= valorHora * 1.2 ? 'Média' : 'Baixa'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

