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
import { X, User, Calendar, Phone, Mail, Building, Clock, Gift } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { SocioAniversariante } from '@/lib/mocks/aniversarios.mock';

interface SociosAniversariantesModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SocioAniversariante[];
}

export function SociosAniversariantesModal({ isOpen, onClose, data }: SociosAniversariantesModalProps) {
  const getDiasParaAniversario = (dias: number) => {
    if (dias === 0) return 'Hoje!';
    if (dias === 1) return 'Amanhã';
    if (dias <= 7) return `Em ${dias} dias`;
    return `Em ${dias} dias`;
  };

  const getDiasColor = (dias: number) => {
    if (dias === 0) return 'text-red-600 bg-red-100';
    if (dias <= 3) return 'text-orange-600 bg-orange-100';
    if (dias <= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-blue-600 bg-blue-100';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Sócios Aniversariantes
          </DialogTitle>
          <DialogDescription>
            Lista de sócios com aniversário no período selecionado
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total de Sócios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{data.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Aniversários Hoje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {data.filter(item => item.dias_para_aniversario === 0).length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Esta Semana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {data.filter(item => item.dias_para_aniversario <= 7).length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Idade Média
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(data.reduce((acc, item) => acc + item.idade, 0) / data.length)} anos
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Sócios */}
          <div className="space-y-3">
            {data.map((socio) => (
              <Card key={socio.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <User className="h-5 w-5 text-gray-500" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {socio.nome}
                        </h3>
                        <Badge className={getDiasColor(socio.dias_para_aniversario)}>
                          {getDiasParaAniversario(socio.dias_para_aniversario)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">CPF:</span>
                          <p className="font-mono">{socio.cpf}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Data de Nascimento:</span>
                          <p>{format(new Date(socio.data_nascimento), 'dd/MM/yyyy', { locale: ptBR })}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Idade:</span>
                          <p className="font-semibold text-blue-600">{socio.idade} anos</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Empresa:</span>
                          <p className="font-medium">{socio.empresa}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">CNPJ:</span>
                          <p className="font-mono">{socio.cnpj}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Cargo:</span>
                          <p>{socio.cargo}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Telefone:</span>
                          <p className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {socio.telefone}
                          </p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Email:</span>
                          <p className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {socio.email}
                          </p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-600">Data do Aniversário:</span>
                          <p className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {format(new Date(socio.data_aniversario), 'dd/MM/yyyy', { locale: ptBR })}
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

