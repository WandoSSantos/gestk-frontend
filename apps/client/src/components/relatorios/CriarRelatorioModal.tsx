'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { 
  X, 
  FileText, 
  Calendar,
  Clock,
  Users,
  Settings,
  Save,
  Send
} from 'lucide-react';

interface CriarRelatorioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (relatorio: any) => void;
}

export default function CriarRelatorioModal({ isOpen, onClose, onSave }: CriarRelatorioModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: 'gestao',
    frequencia: 'mensal',
    formato: 'pdf',
    destinatarios: '',
    horario: '08:00',
    descricao: '',
    filtros: {
      periodo_inicio: '',
      periodo_fim: '',
      regime_fiscal: '',
      ramo_atividade: '',
      status_cliente: ''
    }
  });

  const [etapa, setEtapa] = useState(1);

  const tiposRelatorio = [
    { value: 'gestao', label: 'Gestão', descricao: 'Relatórios de gestão de clientes e usuários' },
    { value: 'dashboard', label: 'Dashboard', descricao: 'Dashboards e indicadores' },
    { value: 'fiscal', label: 'Fiscal', descricao: 'Relatórios fiscais e tributários' },
    { value: 'contabil', label: 'Contábil', descricao: 'Demonstrações contábeis' },
    { value: 'personalizado', label: 'Personalizado', descricao: 'Relatório customizado' }
  ];

  const frequencias = [
    { value: 'diario', label: 'Diário', descricao: 'Todos os dias' },
    { value: 'semanal', label: 'Semanal', descricao: 'Toda segunda-feira' },
    { value: 'mensal', label: 'Mensal', descricao: 'Todo dia 1º do mês' },
    { value: 'trimestral', label: 'Trimestral', descricao: 'A cada 3 meses' },
    { value: 'anual', label: 'Anual', descricao: 'Uma vez por ano' }
  ];

  const formatos = [
    { value: 'pdf', label: 'PDF', descricao: 'Documento portável' },
    { value: 'excel', label: 'Excel', descricao: 'Planilha editável' },
    { value: 'csv', label: 'CSV', descricao: 'Dados separados por vírgula' }
  ];

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    const relatorio = {
      id: Date.now().toString(),
      ...formData,
      destinatarios: formData.destinatarios.split(',').map(email => email.trim()),
      proximaExecucao: calcularProximaExecucao(formData.frequencia),
      status: 'ativo',
      criadoEm: new Date().toISOString().split('T')[0]
    };
    
    onSave(relatorio);
    onClose();
    setFormData({
      nome: '',
      tipo: 'gestao',
      frequencia: 'mensal',
      formato: 'pdf',
      destinatarios: '',
      horario: '08:00',
      descricao: '',
      filtros: {
        periodo_inicio: '',
        periodo_fim: '',
        regime_fiscal: '',
        ramo_atividade: '',
        status_cliente: ''
      }
    });
    setEtapa(1);
  };

  const calcularProximaExecucao = (frequencia: string) => {
    const hoje = new Date();
    switch (frequencia) {
      case 'diario':
        return hoje.toISOString().split('T')[0];
      case 'semanal':
        const proximaSegunda = new Date(hoje);
        proximaSegunda.setDate(hoje.getDate() + (1 + 7 - hoje.getDay()) % 7);
        return proximaSegunda.toISOString().split('T')[0];
      case 'mensal':
        const proximoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 1);
        return proximoMes.toISOString().split('T')[0];
      case 'trimestral':
        const proximoTrimestre = new Date(hoje.getFullYear(), hoje.getMonth() + 3, 1);
        return proximoTrimestre.toISOString().split('T')[0];
      case 'anual':
        const proximoAno = new Date(hoje.getFullYear() + 1, 0, 1);
        return proximoAno.toISOString().split('T')[0];
      default:
        return hoje.toISOString().split('T')[0];
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Criar Relatório Automatizado</h2>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    etapa >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      etapa > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Etapa 1: Informações Básicas */}
          {etapa === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Informações Básicas</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome do Relatório *
                  </label>
                  <Input
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Ex: Relatório Mensal de Carteira"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Relatório *
                  </label>
                  <select
                    value={formData.tipo}
                    onChange={(e) => handleInputChange('tipo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {tiposRelatorio.map((tipo) => (
                      <option key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição
                </label>
                <textarea
                  value={formData.descricao}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
                  placeholder="Descreva o propósito e conteúdo do relatório..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Etapa 2: Agendamento */}
          {etapa === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Agendamento</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frequência *
                  </label>
                  <div className="space-y-2">
                    {frequencias.map((freq) => (
                      <label key={freq.value} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="frequencia"
                          value={freq.value}
                          checked={formData.frequencia === freq.value}
                          onChange={(e) => handleInputChange('frequencia', e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{freq.label}</div>
                          <div className="text-sm text-gray-500">{freq.descricao}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horário de Execução
                  </label>
                  <Input
                    type="time"
                    value={formData.horario}
                    onChange={(e) => handleInputChange('horario', e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    O relatório será executado automaticamente neste horário
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Etapa 3: Destinatários e Formato */}
          {etapa === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Destinatários e Formato</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mails dos Destinatários *
                </label>
                <Input
                  value={formData.destinatarios}
                  onChange={(e) => handleInputChange('destinatarios', e.target.value)}
                  placeholder="admin@gestk.com, gerencia@gestk.com"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Separe múltiplos e-mails por vírgula
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Formato do Relatório *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formatos.map((formato) => (
                    <label key={formato.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="formato"
                        value={formato.value}
                        checked={formData.formato === formato.value}
                        onChange={(e) => handleInputChange('formato', e.target.value)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{formato.label}</div>
                        <div className="text-sm text-gray-500">{formato.descricao}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Etapa 4: Filtros */}
          {etapa === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Filtros do Relatório</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Período Início
                  </label>
                  <Input
                    type="date"
                    value={formData.filtros.periodo_inicio}
                    onChange={(e) => handleInputChange('filtros.periodo_inicio', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Período Fim
                  </label>
                  <Input
                    type="date"
                    value={formData.filtros.periodo_fim}
                    onChange={(e) => handleInputChange('filtros.periodo_fim', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Regime Fiscal
                  </label>
                  <select
                    value={formData.filtros.regime_fiscal}
                    onChange={(e) => handleInputChange('filtros.regime_fiscal', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Todos</option>
                    <option value="simples_nacional">Simples Nacional</option>
                    <option value="lucro_presumido">Lucro Presumido</option>
                    <option value="lucro_real">Lucro Real</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status do Cliente
                  </label>
                  <select
                    value={formData.filtros.status_cliente}
                    onChange={(e) => handleInputChange('filtros.status_cliente', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Todos</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                    <option value="novo">Novo</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Botões de Navegação */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setEtapa(Math.max(1, etapa - 1))}
              disabled={etapa === 1}
              className="button-outline-elegant"
            >
              Anterior
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="button-outline-elegant"
              >
                Cancelar
              </Button>
              
              {etapa < 4 ? (
                <Button
                  onClick={() => setEtapa(etapa + 1)}
                  className="button-elegant"
                >
                  Próximo
                </Button>
              ) : (
                <Button
                  onClick={handleSave}
                  className="button-elegant"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Criar Relatório
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

