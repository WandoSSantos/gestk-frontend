'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { ExportButtons } from '@/components/export';
import CriarRelatorioModal from '@/components/relatorios/CriarRelatorioModal';
import { 
  FileText, 
  Clock, 
  Calendar,
  Settings,
  Play,
  Pause,
  Edit,
  Trash2,
  Download,
  Send,
  Bell,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

interface RelatorioAgendado {
  id: string;
  nome: string;
  tipo: 'gestao' | 'dashboard' | 'fiscal' | 'contabil' | 'personalizado';
  frequencia: 'diario' | 'semanal' | 'mensal' | 'trimestral' | 'anual';
  proximaExecucao: string;
  status: 'ativo' | 'pausado' | 'erro';
  destinatarios: string[];
  formato: 'pdf' | 'excel' | 'csv';
  ultimaExecucao?: string;
  criadoEm: string;
}

export default function RelatoriosPage() {
  const [relatorios, setRelatorios] = useState<RelatorioAgendado[]>([
    {
      id: '1',
      nome: 'Relatório Mensal de Carteira',
      tipo: 'gestao',
      frequencia: 'mensal',
      proximaExecucao: '2024-02-01',
      status: 'ativo',
      destinatarios: ['admin@gestk.com', 'gerencia@gestk.com'],
      formato: 'pdf',
      ultimaExecucao: '2024-01-01',
      criadoEm: '2024-01-01'
    },
    {
      id: '2',
      nome: 'Dashboard Fiscal Semanal',
      tipo: 'fiscal',
      frequencia: 'semanal',
      proximaExecucao: '2024-01-29',
      status: 'ativo',
      destinatarios: ['fiscal@gestk.com'],
      formato: 'excel',
      ultimaExecucao: '2024-01-22',
      criadoEm: '2024-01-15'
    },
    {
      id: '3',
      nome: 'Indicadores de Performance',
      tipo: 'dashboard',
      frequencia: 'diario',
      proximaExecucao: '2024-01-28',
      status: 'pausado',
      destinatarios: ['diretor@gestk.com'],
      formato: 'pdf',
      ultimaExecucao: '2024-01-26',
      criadoEm: '2024-01-10'
    },
    {
      id: '4',
      nome: 'Relatório Contábil Trimestral',
      tipo: 'contabil',
      frequencia: 'trimestral',
      proximaExecucao: '2024-04-01',
      status: 'ativo',
      destinatarios: ['contabil@gestk.com', 'auditoria@gestk.com'],
      formato: 'pdf',
      ultimaExecucao: '2024-01-01',
      criadoEm: '2023-12-01'
    }
  ]);

  const [showCriarRelatorio, setShowCriarRelatorio] = useState(false);

  const handleCriarRelatorio = (novoRelatorio: any) => {
    setRelatorios(prev => [...prev, novoRelatorio]);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ativo':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pausado':
        return <Pause className="h-4 w-4 text-yellow-600" />;
      case 'erro':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-800';
      case 'pausado':
        return 'bg-yellow-100 text-yellow-800';
      case 'erro':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'gestao':
        return 'Gestão';
      case 'dashboard':
        return 'Dashboard';
      case 'fiscal':
        return 'Fiscal';
      case 'contabil':
        return 'Contábil';
      case 'personalizado':
        return 'Personalizado';
      default:
        return tipo;
    }
  };

  const getFrequenciaLabel = (frequencia: string) => {
    switch (frequencia) {
      case 'diario':
        return 'Diário';
      case 'semanal':
        return 'Semanal';
      case 'mensal':
        return 'Mensal';
      case 'trimestral':
        return 'Trimestral';
      case 'anual':
        return 'Anual';
      default:
        return frequencia;
    }
  };

  const toggleStatus = (id: string) => {
    setRelatorios(prev => prev.map(rel => 
      rel.id === id 
        ? { ...rel, status: rel.status === 'ativo' ? 'pausado' : 'ativo' }
        : rel
    ));
  };

  const executarAgora = (id: string) => {
    // Simular execução
    console.log(`Executando relatório ${id} agora...`);
  };

  const editarRelatorio = (id: string) => {
    console.log(`Editando relatório ${id}...`);
  };

  const excluirRelatorio = (id: string) => {
    setRelatorios(prev => prev.filter(rel => rel.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relatórios Automatizados</h1>
          <p className="text-gray-600 mt-1">
            Gerencie relatórios agendados e automatizados
          </p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={() => setShowCriarRelatorio(true)}
            className="button-elegant"
          >
            <FileText className="h-4 w-4 mr-2" />
            Criar Relatório
          </Button>
          <ExportButtons
            data={relatorios}
            nomeArquivo="relatorios_agendados"
            filtros={{}}
          />
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Total de Relatórios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{relatorios.length}</div>
            <div className="text-sm text-gray-500">Relatórios configurados</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Play className="h-4 w-4 mr-2" />
              Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {relatorios.filter(r => r.status === 'ativo').length}
            </div>
            <div className="text-sm text-gray-500">Em execução</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Pause className="h-4 w-4 mr-2" />
              Pausados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {relatorios.filter(r => r.status === 'pausado').length}
            </div>
            <div className="text-sm text-gray-500">Temporariamente pausados</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Próximos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {relatorios.filter(r => r.status === 'ativo').length}
            </div>
            <div className="text-sm text-gray-500">Execuções pendentes</div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Agendados</CardTitle>
          <CardDescription>
            Gerencie todos os relatórios automatizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {relatorios.map((relatorio) => (
              <div key={relatorio.id} className="p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{relatorio.nome}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(relatorio.status)}`}>
                        {getStatusIcon(relatorio.status)}
                        <span className="ml-1 capitalize">{relatorio.status}</span>
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Tipo:</span> {getTipoLabel(relatorio.tipo)}
                      </div>
                      <div>
                        <span className="font-medium">Frequência:</span> {getFrequenciaLabel(relatorio.frequencia)}
                      </div>
                      <div>
                        <span className="font-medium">Próxima execução:</span> {relatorio.proximaExecucao}
                      </div>
                      <div>
                        <span className="font-medium">Formato:</span> {relatorio.formato.toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Destinatários:</span> {relatorio.destinatarios.join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => executarAgora(relatorio.id)}
                      className="button-outline-elegant"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Executar
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleStatus(relatorio.id)}
                      className="button-outline-elegant"
                    >
                      {relatorio.status === 'ativo' ? (
                        <Pause className="h-4 w-4 mr-1" />
                      ) : (
                        <Play className="h-4 w-4 mr-1" />
                      )}
                      {relatorio.status === 'ativo' ? 'Pausar' : 'Ativar'}
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => editarRelatorio(relatorio.id)}
                      className="button-outline-elegant"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => excluirRelatorio(relatorio.id)}
                      className="button-outline-elegant text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Templates de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Templates Disponíveis
          </CardTitle>
          <CardDescription>
            Modelos pré-configurados para criação rápida de relatórios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { nome: 'Relatório de Carteira', tipo: 'gestao', descricao: 'Análise completa da carteira de clientes' },
              { nome: 'Dashboard Fiscal', tipo: 'fiscal', descricao: 'Indicadores fiscais e impostos' },
              { nome: 'Relatório Contábil', tipo: 'contabil', descricao: 'Demonstrações contábeis' },
              { nome: 'Indicadores de Performance', tipo: 'dashboard', descricao: 'KPIs e métricas operacionais' },
              { nome: 'Relatório de Usuários', tipo: 'gestao', descricao: 'Atividades e produtividade dos usuários' },
              { nome: 'Análise Demográfica', tipo: 'dashboard', descricao: 'Perfil demográfico dos colaboradores' }
            ].map((template, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{template.nome}</h4>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {getTipoLabel(template.tipo)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{template.descricao}</p>
                <Button size="sm" className="button-elegant w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Usar Template
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Execuções */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Histórico de Execuções
          </CardTitle>
          <CardDescription>
            Últimas execuções dos relatórios automatizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { relatorio: 'Relatório Mensal de Carteira', data: '2024-01-01 08:00', status: 'sucesso', destinatarios: 2 },
              { relatorio: 'Dashboard Fiscal Semanal', data: '2024-01-22 09:15', status: 'sucesso', destinatarios: 1 },
              { relatorio: 'Indicadores de Performance', data: '2024-01-26 10:30', status: 'erro', destinatarios: 0 },
              { relatorio: 'Relatório Contábil Trimestral', data: '2024-01-01 07:45', status: 'sucesso', destinatarios: 2 }
            ].map((execucao, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{execucao.relatorio}</div>
                  <div className="text-sm text-gray-500">{execucao.data}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    {execucao.destinatarios} destinatário(s)
                  </div>
                  <div className={`flex items-center gap-1 ${
                    execucao.status === 'sucesso' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {execucao.status === 'sucesso' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    <span className="text-sm capitalize">{execucao.status}</span>
                  </div>
                  <Button size="sm" variant="outline" className="button-outline-elegant">
                    <Download className="h-4 w-4 mr-1" />
                    Baixar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal de Criação */}
      <CriarRelatorioModal
        isOpen={showCriarRelatorio}
        onClose={() => setShowCriarRelatorio(false)}
        onSave={handleCriarRelatorio}
      />
    </div>
  );
}
