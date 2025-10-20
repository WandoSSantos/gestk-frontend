# Sistema de Relatórios Automatizados - GESTK Client

## 📋 Visão Geral

O **Sistema de Relatórios Automatizados** é uma funcionalidade avançada do GESTK Client que permite criar, agendar e executar relatórios de forma automatizada. O sistema oferece templates pré-definidos, agendamento flexível e exportação em múltiplos formatos.

## 🏗️ Arquitetura do Sistema

```
apps/client/src/app/(dashboard)/relatorios/
├── page.tsx                    # Página principal de relatórios
└── components/
    └── CriarRelatorioModal.tsx # Modal de criação de relatórios

packages/shared/src/api/services/
└── relatorios.service.ts       # Serviços de API para relatórios
```

## 🎯 Funcionalidades Principais

### 1. Dashboard de Relatórios

**Funcionalidade**: Visão geral do sistema de relatórios com métricas e status.

#### Componentes
- **Cards de Resumo**: Total de relatórios, próxima execução, status
- **Lista de Relatórios Agendados**: Tabela com todos os relatórios
- **Histórico de Execuções**: Últimas execuções e downloads
- **Ações Rápidas**: Criar, executar, pausar relatórios

#### Dados Exibidos
```typescript
interface RelatorioDashboard {
  total_relatorios: number;
  proxima_execucao: string;
  relatorios_ativos: number;
  relatorios_com_erro: number;
  relatorios_agendados: RelatorioAgendado[];
  historico_execucoes: ExecucaoRelatorio[];
}
```

### 2. Criação de Relatórios

**Funcionalidade**: Interface multi-step para criação de relatórios automatizados.

#### Etapas do Processo

##### Etapa 1: Informações Básicas
- **Nome do Relatório**: Identificação única
- **Tipo**: Gestão, Dashboard, Fiscal, Contábil, Personalizado
- **Descrição**: Descrição opcional
- **Templates**: Seleção de templates pré-definidos

##### Etapa 2: Agendamento
- **Frequência**: Diário, Semanal, Mensal, Trimestral, Anual
- **Horário**: Hora de execução
- **Configurações**: Dias da semana, dias do mês

##### Etapa 3: Destinatários e Formato
- **Destinatários**: Lista de e-mails
- **Formato**: PDF, Excel, CSV
- **Configurações**: Opções específicas por formato

##### Etapa 4: Filtros
- **Período**: Data início e fim
- **Regime Fiscal**: Filtro por regime
- **Status do Cliente**: Ativo, Inativo, Novo, etc.
- **Departamento**: Filtro por departamento

#### Interface Multi-Step
```typescript
// Componente de criação de relatórios
<CriarRelatorioModal
  isOpen={showCriarRelatorio}
  onClose={() => setShowCriarRelatorio(false)}
  onSave={handleCriarRelatorio}
/>
```

### 3. Gestão de Relatórios

**Funcionalidade**: Controle completo dos relatórios agendados.

#### Ações Disponíveis
- **Executar**: Execução manual imediata
- **Pausar**: Pausar agendamento
- **Reativar**: Reativar relatório pausado
- **Editar**: Modificar configurações
- **Excluir**: Remover relatório
- **Duplicar**: Criar cópia do relatório

#### Status dos Relatórios
```typescript
type StatusRelatorio = 'ativo' | 'pausado' | 'erro' | 'executando';

interface RelatorioAgendado {
  id: string;
  nome: string;
  tipo: TipoRelatorio;
  frequencia: FrequenciaRelatorio;
  proxima_execucao: string;
  status: StatusRelatorio;
  formato: FormatoRelatorio;
  destinatarios: string[];
  filtros: FiltrosRelatorio;
  template_id?: string;
  criado_em: string;
  atualizado_em: string;
}
```

### 4. Templates de Relatórios

**Funcionalidade**: Modelos pré-definidos para criação rápida de relatórios.

#### Templates Disponíveis
- **Relatório Mensal de Clientes**: Visão geral da carteira
- **Dashboard Fiscal Detalhado**: Análise fiscal completa
- **Produtividade da Equipe**: Métricas de usuários
- **Relatório Contábil**: Indicadores contábeis
- **DRE Executivo**: Demonstração de resultados

#### Estrutura de Template
```typescript
interface RelatorioTemplate {
  id: string;
  nome: string;
  descricao: string;
  tipo: TipoRelatorio;
  campos: RelatorioCampo[];
  configuracoes: RelatorioConfiguracao;
  filtros_padrao: FiltrosRelatorio;
  formato_padrao: FormatoRelatorio;
}
```

### 5. Histórico e Execuções

**Funcionalidade**: Controle de execuções e histórico de relatórios.

#### Dados do Histórico
```typescript
interface ExecucaoRelatorio {
  id: string;
  relatorio_id: string;
  nome_relatorio: string;
  data_execucao: string;
  status: 'sucesso' | 'falha' | 'processando';
  formato: FormatoRelatorio;
  tamanho_arquivo?: number;
  destinatarios: string[];
  erro?: string;
  duracao_segundos?: number;
}
```

#### Funcionalidades
- **Download**: Baixar relatórios executados
- **Visualização**: Preview do relatório
- **Logs**: Detalhes da execução
- **Reexecução**: Executar novamente
- **Exclusão**: Remover do histórico

## 🔌 Integração com API

### Serviços de Relatórios
```typescript
export const relatoriosService = {
  // Listagem e gestão
  listar: (filtros?: RelatorioFiltros) => 
    apiClient.get<RelatorioAgendado[]>('/relatorios', { params: filtros }),
  
  criar: (relatorio: CriarRelatorio) => 
    apiClient.post<RelatorioAgendado>('/relatorios', relatorio),
  
  atualizar: (id: string, relatorio: AtualizarRelatorio) => 
    apiClient.patch<RelatorioAgendado>(`/relatorios/${id}`, relatorio),
  
  excluir: (id: string) => 
    apiClient.delete(`/relatorios/${id}`),
  
  // Execução
  executar: (id: string) => 
    apiClient.post(`/relatorios/${id}/executar`),
  
  pausar: (id: string) => 
    apiClient.post(`/relatorios/${id}/pausar`),
  
  reativar: (id: string) => 
    apiClient.post(`/relatorios/${id}/reativar`),
  
  // Templates
  templates: {
    listar: () => 
      apiClient.get<RelatorioTemplate[]>('/relatorios/templates'),
    
    obter: (id: string) => 
      apiClient.get<RelatorioTemplate>(`/relatorios/templates/${id}`),
  },
  
  // Histórico
  historico: {
    listar: (relatorioId: string) => 
      apiClient.get(`/relatorios/${relatorioId}/historico`),
    
    download: (execucaoId: string) => 
      apiClient.get(`/relatorios/historico/${execucaoId}/download`, { 
        responseType: 'blob' 
      }),
  }
};
```

## 📊 Tipos de Relatórios

### 1. Relatórios de Gestão
- **Carteira de Clientes**: Lista completa com filtros
- **Detalhes de Clientes**: Informações por competência
- **Produtividade de Usuários**: Métricas de performance
- **Análise do Escritório**: KPIs e indicadores

### 2. Relatórios de Dashboard
- **Dashboard Demográfico**: Análise de colaboradores
- **Dashboard Fiscal**: Faturamento e impostos
- **Dashboard Contábil**: Indicadores contábeis
- **Dashboard Indicadores**: KPIs operacionais
- **Dashboard DRE**: Demonstração de resultados

### 3. Relatórios Personalizados
- **Relatórios Customizados**: Criação livre de relatórios
- **Combinação de Módulos**: Dados de múltiplos módulos
- **Filtros Avançados**: Configuração personalizada

## 🎨 Interface do Usuário

### Modal de Criação
```typescript
// Estrutura do modal multi-step
<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Criar Novo Relatório - Etapa {step}/4</DialogTitle>
      <DialogDescription>
        Configure os detalhes do seu relatório, agendamento e destinatários.
      </DialogDescription>
    </DialogHeader>
    
    <div className="py-4">
      {renderStepContent()}
    </div>
    
    <DialogFooter className="flex justify-between">
      {step > 1 && (
        <Button variant="outline" onClick={handleBack}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Voltar
        </Button>
      )}
      
      {step < 4 && (
        <Button onClick={handleNext}>
          Próximo <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      )}
      
      {step === 4 && (
        <Button onClick={handleSave}>
          Criar Relatório <PlusCircle className="ml-2 h-4 w-4" />
        </Button>
      )}
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Lista de Relatórios
```typescript
// Tabela de relatórios agendados
{relatorios.map(relatorio => (
  <div key={relatorio.id} className="flex items-center justify-between p-4 border rounded-lg">
    <div className="flex items-center space-x-3">
      {getStatusIcon(relatorio.status)}
      <div>
        <p className="font-medium">{relatorio.nome}</p>
        <p className="text-sm text-gray-600">
          Tipo: {relatorio.tipo} | Frequência: {relatorio.frequencia} | 
          Próxima: {relatorio.proximaExecucao}
        </p>
      </div>
    </div>
    
    <div className="flex space-x-2">
      <Button variant="outline" size="sm" onClick={() => executarRelatorio(relatorio.id)}>
        <Play className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" onClick={() => pausarRelatorio(relatorio.id)}>
        <Pause className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" onClick={() => editarRelatorio(relatorio.id)}>
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="destructive" size="sm" onClick={() => excluirRelatorio(relatorio.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  </div>
))}
```

## 📋 Configurações de Agendamento

### Frequências Disponíveis
```typescript
type FrequenciaRelatorio = 
  | 'diario'      // Todos os dias
  | 'semanal'     // Semanal (dias específicos)
  | 'mensal'      // Mensal (dias específicos)
  | 'trimestral'  // Trimestral
  | 'anual';      // Anual

interface ConfiguracaoAgendamento {
  frequencia: FrequenciaRelatorio;
  horario: string; // HH:MM
  dias_semana?: number[]; // 0-6 (domingo-sábado)
  dias_mes?: number[]; // 1-31
  meses?: number[]; // 1-12
  timezone: string;
}
```

### Validação de Agendamento
```typescript
const validateAgendamento = (config: ConfiguracaoAgendamento) => {
  const errors: string[] = [];
  
  if (!config.horario) {
    errors.push('Horário é obrigatório');
  }
  
  if (config.frequencia === 'semanal' && !config.dias_semana?.length) {
    errors.push('Selecione pelo menos um dia da semana');
  }
  
  if (config.frequencia === 'mensal' && !config.dias_mes?.length) {
    errors.push('Selecione pelo menos um dia do mês');
  }
  
  return errors;
};
```

## 📤 Exportação de Relatórios

### Formatos Suportados
- **PDF**: Relatórios formatados para impressão
- **Excel**: Planilhas com dados e gráficos
- **CSV**: Dados estruturados para importação

### Configurações por Formato
```typescript
interface ConfiguracaoExportacao {
  formato: FormatoRelatorio;
  pdf?: {
    orientacao: 'portrait' | 'landscape';
    margens: { top: number; right: number; bottom: number; left: number };
    cabecalho: boolean;
    rodape: boolean;
  };
  excel?: {
    incluir_graficos: boolean;
    formatacao: boolean;
    filtros: boolean;
  };
  csv?: {
    separador: ',' | ';' | '\t';
    encoding: 'utf-8' | 'latin1';
    incluir_cabecalho: boolean;
  };
}
```

## 🔔 Sistema de Notificações

### Tipos de Notificação
- **Execução Bem-sucedida**: Relatório gerado com sucesso
- **Erro na Execução**: Falha na geração do relatório
- **Falha de Envio**: Erro no envio por e-mail
- **Relatório Pausado**: Notificação de pausa
- **Relatório Reativado**: Notificação de reativação

### Configuração de Notificações
```typescript
interface ConfiguracaoNotificacao {
  email_ativo: boolean;
  push_ativo: boolean;
  relatorios_automaticos: boolean;
  alertas_sistema: boolean;
  email_destino_alertas: string;
  notificacoes_erro: boolean;
  notificacoes_sucesso: boolean;
}
```

## 🚀 Próximas Funcionalidades

### Planejadas
- [ ] **Relatórios em Tempo Real**: Dados atualizados em tempo real
- [ ] **Agendamento Avançado**: Cron expressions para agendamento complexo
- [ ] **Relatórios Interativos**: Dashboards interativos em PDF
- [ ] **Templates Personalizados**: Criação de templates customizados
- [ ] **Integração com BI**: Conexão com ferramentas de Business Intelligence
- [ ] **Relatórios Compartilhados**: Compartilhamento público de relatórios

### Melhorias
- [ ] **Performance**: Otimização de geração de relatórios
- [ ] **Cache**: Sistema de cache para relatórios frequentes
- [ ] **Compressão**: Compressão de arquivos grandes
- [ ] **Preview**: Visualização prévia dos relatórios
- [ ] **Versionamento**: Controle de versões dos relatórios

## 📱 Responsividade

### Adaptações Mobile
- **Modal**: Fullscreen em dispositivos móveis
- **Tabelas**: Scroll horizontal para listas
- **Formulários**: Campos empilhados verticalmente
- **Botões**: Tamanho adequado para touch

### Otimizações
- **Lazy Loading**: Carregamento sob demanda
- **Virtualização**: Para listas grandes
- **Debounce**: Para campos de busca
- **Memoização**: Para componentes pesados

## 🔧 Configuração

### Variáveis de Ambiente
```bash
# Configuração de relatórios
NEXT_PUBLIC_RELATORIOS_ENABLED=true
NEXT_PUBLIC_MAX_RELATORIOS=100
NEXT_PUBLIC_MAX_DESTINATARIOS=50

# Configuração de exportação
NEXT_PUBLIC_EXPORT_PDF_ENABLED=true
NEXT_PUBLIC_EXPORT_EXCEL_ENABLED=true
NEXT_PUBLIC_EXPORT_CSV_ENABLED=true

# Configuração de agendamento
NEXT_PUBLIC_AGENDAMENTO_ENABLED=true
NEXT_PUBLIC_TIMEZONE=America/Sao_Paulo
```

### Configuração de Templates
```typescript
export const relatorioTemplates = [
  {
    id: '1',
    name: 'Relatório Mensal de Clientes',
    type: 'gestao',
    description: 'Visão geral da carteira de clientes.',
    campos: ['nome', 'cnpj', 'categoria', 'regime_fiscal'],
    filtros_padrao: {
      periodo: 'ultimo_mes',
      status: 'ativo'
    }
  },
  // ... mais templates
];
```

---

**Sistema de Relatórios** - Atualizado em 2024-12-15

