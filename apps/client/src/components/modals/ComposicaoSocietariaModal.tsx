'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Badge } from '@gestk/ui';
import { X, Building, User, Users, TrendingUp, Calendar, Percent } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { ComposicaoSocietaria } from '@/lib/mocks/custo-operacional.mock';

interface ComposicaoSocietariaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ComposicaoSocietaria | null;
}

export function ComposicaoSocietariaModal({ isOpen, onClose, data }: ComposicaoSocietariaModalProps) {
  if (!data) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativa': return 'bg-green-100 text-green-800';
      case 'inativa': return 'bg-red-100 text-red-800';
      case 'suspensa': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ativa': return 'Ativa';
      case 'inativa': return 'Inativa';
      case 'suspensa': return 'Suspensa';
      default: return 'Desconhecido';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Composição Societária
          </DialogTitle>
          <DialogDescription>
            Análise completa da estrutura societária e empresas relacionadas
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Empresa Principal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Empresa Principal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {data.empresa_principal.razao_social}
                  </h3>
                  <p className="text-sm text-gray-600 font-mono">
                    CNPJ: {data.empresa_principal.cnpj}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800">
                    Empresa Principal
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sócios */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Sócios ({data.socios.length})
            </h2>
            
            {data.socios.map((socio, index) => (
              <Card key={socio.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      {socio.nome}
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {socio.participacao_percentual}%
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    CPF: {socio.cpf} • {socio.cargo}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Outras Empresas do Sócio */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        Outras Empresas ({socio.outras_empresas.length})
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {socio.outras_empresas.map((empresa) => (
                          <Card key={empresa.id} className="border-l-4 border-l-green-500">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-medium text-gray-900 text-sm">
                                  {empresa.razao_social}
                                </h5>
                                <Badge className={getStatusColor(empresa.status)}>
                                  {getStatusLabel(empresa.status)}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 font-mono mb-2">
                                CNPJ: {empresa.cnpj}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Percent className="h-3 w-3" />
                                  {empresa.participacao_percentual}%
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {format(new Date(empresa.data_inicio), 'MM/yyyy', { locale: ptBR })}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">
                                {empresa.cargo}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resumo Estatístico */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Resumo da Estrutura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {data.socios.length}
                  </div>
                  <div className="text-sm text-gray-600">Sócios</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {data.socios.reduce((acc, socio) => acc + socio.outras_empresas.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Empresas Relacionadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {data.socios.reduce((acc, socio) => 
                      acc + socio.outras_empresas.filter(e => e.status === 'ativa').length, 0
                    )}
                  </div>
                  <div className="text-sm text-gray-600">Empresas Ativas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {Math.round(data.socios.reduce((acc, socio) => 
                      acc + socio.outras_empresas.reduce((empAcc, emp) => empAcc + emp.participacao_percentual, 0), 0
                    ) / data.socios.reduce((acc, socio) => acc + socio.outras_empresas.length, 0))}%
                  </div>
                  <div className="text-sm text-gray-600">Participação Média</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Análise de Faturamento Teto */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Análise de Faturamento Teto - Simples Nacional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">
                      Importante para Planejamento Empresarial
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Esta análise é crucial para verificar se o faturamento conjunto de todas as empresas 
                      dos sócios não ultrapassa o teto do Simples Nacional (R$ 4,8 milhões em 2024). 
                      Considere a participação percentual de cada sócio nas empresas para calcular o 
                      faturamento proporcional e planejar a estrutura societária adequadamente.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            <X className="h-4 w-4 mr-2" />
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

