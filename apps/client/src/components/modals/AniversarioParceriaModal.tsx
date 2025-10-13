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
import { X, Building, Calendar, Clock, DollarSign, FileText, User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { AniversarioParceria } from '@/lib/mocks/aniversarios.mock';

interface AniversarioParceriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AniversarioParceria[];
}

export function AniversarioParceriaModal({ isOpen, onClose, data }: AniversarioParceriaModalProps) {
  const statusColors = {
    ativo: 'bg-green-100 text-green-800',
    inativo: 'bg-red-100 text-red-800',
    pendente: 'bg-yellow-100 text-yellow-800'
  };

  const statusLabels = {
    ativo: 'Ativo',
    inativo: 'Inativo',
    pendente: 'Pendente'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Aniversário de Parceria
          </DialogTitle>
          <DialogDescription>
            Lista de empresas com aniversário de parceria no período selecionado
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total de Empresas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{data.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Parcerias Ativas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {data.filter(item => item.status === 'ativo').length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Tempo Médio de Parceria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(data.reduce((acc, item) => acc + item.anos_parceria, 0) / data.length)} anos
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Empresas */}
          <div className="space-y-3">
            {data.map((empresa) => (
              <Card key={empresa.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="h-5 w-5 text-gray-500" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {empresa.empresa}
                        </h3>
                        <Badge className={statusColors[empresa.status]}>
                          {statusLabels[empresa.status]}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">CNPJ:</span>
                          <p className="font-mono">{empresa.cnpj}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Data de Cadastro:</span>
                          <p>{format(new Date(empresa.data_cadastro), 'dd/MM/yyyy', { locale: ptBR })}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Anos de Parceria:</span>
                          <p className="font-semibold text-blue-600">{empresa.anos_parceria} anos</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Data Início Atividades:</span>
                          <p>{format(new Date(empresa.data_inicio_atividades), 'dd/MM/yyyy', { locale: ptBR })}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Anos de Atividade:</span>
                          <p className="font-semibold text-green-600">{empresa.anos_atividade} anos</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Regime Fiscal:</span>
                          <p>{empresa.regime_fiscal}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Ramo de Atividade:</span>
                          <p>{empresa.ramo_atividade}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Valor do Contrato:</span>
                          <p className="font-semibold text-green-600">
                            R$ {empresa.valor_contrato.toLocaleString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

