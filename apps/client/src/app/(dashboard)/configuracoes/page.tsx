'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { Label } from '@gestk/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@gestk/ui';
import { Switch } from '@gestk/ui';
import { 
  Settings, 
  Bell, 
  Palette,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState('geral');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  // Estados dos formulários
  const [configGeral, setConfigGeral] = useState({
    nomeEmpresa: 'GESTK Contabilidade',
    cnpj: '12.345.678/0001-90',
    endereco: 'Rua das Flores, 123 - Centro',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '01234-567',
    telefone: '(11) 99999-9999',
    email: 'contato@gestk.com',
    site: 'https://www.gestk.com'
  });

  const [configAparencia, setConfigAparencia] = useState({
    tema: 'light',
    densidade: 'comfortable',
    tamanhoFonte: 'medium'
  });

  const tabs = [
    { id: 'geral', label: 'Geral', icon: Settings },
    { id: 'notificacoes', label: 'Notificações', icon: Bell },
    { id: 'aparencia', label: 'Aparência', icon: Palette }
  ];

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('saving');
    
    try {
      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  const renderGeralTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações da Empresa</CardTitle>
          <CardDescription>
            Configure as informações básicas da sua empresa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nomeEmpresa">Nome da Empresa</Label>
              <Input
                id="nomeEmpresa"
                value={configGeral.nomeEmpresa}
                onChange={(e) => setConfigGeral(prev => ({ ...prev, nomeEmpresa: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                value={configGeral.cnpj}
                onChange={(e) => setConfigGeral(prev => ({ ...prev, cnpj: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="endereco">Endereço</Label>
            <Input
              id="endereco"
              value={configGeral.endereco}
              onChange={(e) => setConfigGeral(prev => ({ ...prev, endereco: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                value={configGeral.cidade}
                onChange={(e) => setConfigGeral(prev => ({ ...prev, cidade: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="uf">UF</Label>
              <Select value={configGeral.uf} onValueChange={(value) => setConfigGeral(prev => ({ ...prev, uf: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SP">SP</SelectItem>
                  <SelectItem value="RJ">RJ</SelectItem>
                  <SelectItem value="MG">MG</SelectItem>
                  <SelectItem value="RS">RS</SelectItem>
                  <SelectItem value="PR">PR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                value={configGeral.cep}
                onChange={(e) => setConfigGeral(prev => ({ ...prev, cep: e.target.value }))}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={configGeral.telefone}
                onChange={(e) => setConfigGeral(prev => ({ ...prev, telefone: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={configGeral.email}
                onChange={(e) => setConfigGeral(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="site">Site</Label>
            <Input
              id="site"
              value={configGeral.site}
              onChange={(e) => setConfigGeral(prev => ({ ...prev, site: e.target.value }))}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );


  const renderNotificacoesTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configurações de Notificações</CardTitle>
          <CardDescription>
            Configure como e quando receber notificações
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email</Label>
                <p className="text-sm text-gray-500">Receber notificações por email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Push</Label>
                <p className="text-sm text-gray-500">Receber notificações push no navegador</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Relatórios Automáticos</Label>
                <p className="text-sm text-gray-500">Notificar sobre execução de relatórios</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Alertas de Sistema</Label>
                <p className="text-sm text-gray-500">Notificar sobre problemas do sistema</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAparenciaTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configurações de Aparência</CardTitle>
          <CardDescription>
            Personalize a aparência do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="tema">Tema</Label>
            <Select value={configAparencia.tema} onValueChange={(value) => setConfigAparencia(prev => ({ ...prev, tema: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Claro</SelectItem>
                <SelectItem value="dark">Escuro</SelectItem>
                <SelectItem value="auto">Automático</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Densidade da Interface</Label>
              <Select value={configAparencia.densidade} onValueChange={(value) => setConfigAparencia(prev => ({ ...prev, densidade: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compacta</SelectItem>
                  <SelectItem value="comfortable">Confortável</SelectItem>
                  <SelectItem value="spacious">Espaçosa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Tamanho da Fonte</Label>
              <Select value={configAparencia.tamanhoFonte} onValueChange={(value) => setConfigAparencia(prev => ({ ...prev, tamanhoFonte: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Pequena</SelectItem>
                  <SelectItem value="medium">Média</SelectItem>
                  <SelectItem value="large">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'geral':
        return renderGeralTab();
      case 'notificacoes':
        return renderNotificacoesTab();
      case 'aparencia':
        return renderAparenciaTab();
      default:
        return renderGeralTab();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600 mt-1">
            Gerencie as configurações do sistema e preferências
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {saveStatus === 'saving' && (
            <div className="flex items-center text-blue-600">
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Salvando...
            </div>
          )}
          {saveStatus === 'success' && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              Salvo com sucesso!
            </div>
          )}
          {saveStatus === 'error' && (
            <div className="flex items-center text-red-600">
              <AlertCircle className="h-4 w-4 mr-2" />
              Erro ao salvar
            </div>
          )}
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="button-elegant"
          >
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
}

