# Módulo Gestão - GESTK Client

## 📋 Visão Geral

O **Módulo Gestão** é um dos dois módulos principais da aplicação Client do GESTK, focado na gestão operacional do escritório contábil. Este módulo oferece ferramentas completas para administrar clientes, usuários e analisar o desempenho do escritório.

## 🏗️ Estrutura do Módulo

```
apps/client/src/app/(dashboard)/gestao/
├── carteira/              # Gestão da carteira de clientes
├── clientes/              # Detalhes e gestão de clientes
├── usuarios/              # Gestão de usuários e produtividade
└── escritorio/            # Análise do escritório e KPIs
```

## 📊 Submódulos Implementados

### 1. Carteira de Clientes (`/gestao/carteira`)

**Funcionalidade**: Gestão completa da carteira de clientes com categorização e análise de evolução.

#### Componentes Principais
- **Cards de Resumo**: Categorias de clientes (Ativos, Inativos, Novos, Sem Movimentação)
- **Gráfico de Evolução**: Linha temporal mostrando crescimento da carteira
- **Gráfico de Distribuição**: Pizza chart com proporção por categoria
- **Tabela de Clientes**: Lista completa com filtros e busca
- **Sistema de Filtros**: Regime fiscal, ramo de atividade, período

#### Dados Exibidos
```typescript
interface CarteiraCliente {
  id: string;
  nome: string;
  cnpj: string;
  categoria: 'Ativos' | 'Inativos' | 'Novos' | 'Sem Movimentação';
  regime_fiscal: 'Simples Nacional' | 'Lucro Presumido' | 'Lucro Real';
  ramo_atividade: string;
  data_abertura: string;
  valor_contrato: number;
  status: 'Ativo' | 'Inativo' | 'Pendente';
  ultima_atividade: string;
}
```

#### Funcionalidades
- ✅ **Categorização Automática**: Clientes categorizados por status
- ✅ **Evolução Temporal**: Gráfico de crescimento mensal
- ✅ **Filtros Avançados**: Por regime fiscal, ramo, período
- ✅ **Exportação**: PDF, Excel, CSV
- ✅ **Busca**: Por nome, CNPJ, razão social

### 2. Detalhes de Clientes (`/gestao/clientes`)

**Funcionalidade**: Visualização detalhada e gestão individual de clientes por competência.

#### Componentes Principais
- **Tabela Detalhada**: Informações completas por competência
- **Modal de Detalhes**: Visualização expandida do cliente
- **Informações de Contrato**: Dados do contrato e valores
- **Sócio Majoritário**: Informações do responsável
- **Histórico de Atividades**: Timeline de interações

#### Dados Exibidos
```typescript
interface ClienteDetalhado {
  id: string;
  nome: string;
  cnpj: string;
  data_abertura: string;
  contrato: {
    numero: string;
    data_inicio: string;
    data_fim: string;
    valor_mensal: number;
    status: string;
  };
  socio_majoritario: {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
  };
  competencias: CompetenciaCliente[];
  ultima_atividade: string;
  proxima_entrega: string;
}
```

#### Funcionalidades
- ✅ **Visualização por Competência**: Dados organizados por período
- ✅ **Modal de Detalhes**: Informações completas do cliente
- ✅ **Histórico**: Timeline de atividades e entregas
- ✅ **Filtros**: Por nome, CNPJ, regime, status
- ✅ **Exportação**: Relatórios personalizados

### 3. Gestão de Usuários (`/gestao/usuarios`)

**Funcionalidade**: Controle de usuários, atividades e análise de produtividade.

#### Componentes Principais
- **Gráfico de Produtividade**: Barras mostrando horas trabalhadas e atividades
- **Tabela de Usuários**: Lista com informações de atividade
- **Métricas de Performance**: KPIs de produtividade
- **Filtros por Período**: Análise temporal de atividades

#### Dados Exibidos
```typescript
interface UsuarioAtividade {
  id: string;
  nome: string;
  email: string;
  funcao: string;
  departamento: string;
  status: 'Ativo' | 'Inativo';
  ultimo_acesso: string;
  horas_mes: number;
  atividades_realizadas: number;
  eficiencia: number;
  periodo: string;
}
```

#### Funcionalidades
- ✅ **Análise de Produtividade**: Gráficos de horas e atividades
- ✅ **Métricas de Eficiência**: Cálculo de performance
- ✅ **Filtros Temporais**: Análise por período
- ✅ **Exportação**: Relatórios de produtividade
- ✅ **Busca**: Por nome, função, departamento

### 4. Análise do Escritório (`/gestao/escritorio`)

**Funcionalidade**: KPIs e indicadores de performance do escritório.

#### Componentes Principais
- **Cards de KPIs**: Indicadores principais de performance
- **Gráficos Comparativos**: KPIs vs Metas
- **Resultados Financeiros**: Análise de receita e despesas
- **Tendências**: Análise de crescimento e evolução

#### Dados Exibidos
```typescript
interface KPIEscritorio {
  nome: string;
  valor: number;
  unidade: string;
  variacao_percentual: number;
  meta?: number;
  status: 'positivo' | 'negativo' | 'neutro';
  periodo: string;
}

interface ResultadoFinanceiro {
  receita_total: number;
  despesas_total: number;
  lucro_liquido: number;
  margem_percentual: number;
  periodo: string;
}
```

#### Funcionalidades
- ✅ **KPIs Principais**: Total de clientes, receita, produtividade
- ✅ **Comparativo com Metas**: Análise de atingimento de objetivos
- ✅ **Resultados Financeiros**: Receita, despesas e lucro
- ✅ **Análise de Tendências**: Crescimento e evolução
- ✅ **Exportação**: Relatórios executivos

## 🎨 Componentes Reutilizáveis

### Gráficos
- **LineChart**: Evolução temporal (carteira, produtividade)
- **BarChart**: Comparações e produtividade
- **PieChart**: Distribuições e categorias

### Filtros
- **GlobalFilters**: Filtros globais por período
- **DateRangePicker**: Seletor de período
- **MultiSelect**: Seleção múltipla de opções

### Tabelas
- **DataTable**: Tabelas com paginação e busca
- **ExportButtons**: Botões de exportação

## 📊 Dados Mock Implementados

### Carteira de Clientes
```typescript
// apps/client/src/lib/mocks/gestao.mock.ts
export const mockCarteiraClientes: CarteiraCliente[] = [
  {
    id: '1',
    nome: 'Empresa ABC Ltda',
    cnpj: '12.345.678/0001-90',
    categoria: 'Ativos',
    regime_fiscal: 'Simples Nacional',
    ramo_atividade: 'Comércio',
    data_abertura: '2020-01-15',
    valor_contrato: 1500,
    status: 'Ativo',
    ultima_atividade: '2024-12-15'
  },
  // ... mais dados
];
```

### Evolução Mensal
```typescript
export const mockEvolucaoMensal: EvolucaoMensal[] = [
  { mes: '2024-01', total_clientes: 65, novos_clientes: 5, clientes_inativos: 2 },
  { mes: '2024-02', total_clientes: 68, novos_clientes: 4, clientes_inativos: 1 },
  // ... mais dados
];
```

### Produtividade de Usuários
```typescript
export const mockProdutividadeUsuario: ProdutividadeUsuario[] = [
  {
    usuario_id: '1',
    nome: 'João Silva',
    total_horas: 160,
    atividades_realizadas: 45,
    eficiencia: 85.5,
    periodo: '2024-12'
  },
  // ... mais dados
];
```

## 🔌 Integração com API

### Endpoints Utilizados
```typescript
// Serviços de gestão
export const gestaoService = {
  carteira: {
    listar: (filtros) => apiClient.get('/gestao/carteira/clientes', { params: filtros }),
    categorias: () => apiClient.get('/gestao/carteira/categorias'),
    evolucao: (periodo) => apiClient.get('/gestao/carteira/evolucao', { params: periodo }),
  },
  clientes: {
    listar: (filtros) => apiClient.get('/gestao/clientes', { params: filtros }),
    detalhes: (id) => apiClient.get(`/gestao/clientes/${id}`),
  },
  usuarios: {
    listar: (filtros) => apiClient.get('/gestao/usuarios', { params: filtros }),
    produtividade: (periodo) => apiClient.get('/gestao/usuarios/produtividade', { params: periodo }),
  },
  escritorio: {
    kpis: () => apiClient.get('/gestao/escritorio/kpis'),
    resultados: (periodo) => apiClient.get('/gestao/escritorio/resultados', { params: periodo }),
  }
};
```

## 🎯 Funcionalidades Implementadas

### ✅ Gestão de Carteira
- [x] Categorização de clientes
- [x] Gráfico de evolução temporal
- [x] Distribuição por categoria
- [x] Filtros por regime fiscal e ramo
- [x] Exportação em múltiplos formatos
- [x] Busca e paginação

### ✅ Detalhes de Clientes
- [x] Visualização por competência
- [x] Modal com informações completas
- [x] Dados do contrato e sócio
- [x] Histórico de atividades
- [x] Filtros avançados

### ✅ Gestão de Usuários
- [x] Análise de produtividade
- [x] Gráficos de horas e atividades
- [x] Métricas de eficiência
- [x] Filtros temporais
- [x] Exportação de relatórios

### ✅ Análise do Escritório
- [x] KPIs principais
- [x] Comparativo com metas
- [x] Resultados financeiros
- [x] Análise de tendências
- [x] Relatórios executivos

## 🚀 Próximas Funcionalidades

### Planejadas
- [ ] **Edição de Clientes**: Formulários de edição inline
- [ ] **Gestão de Contratos**: CRUD completo de contratos
- [ ] **Notificações**: Alertas de vencimentos e prazos
- [ ] **Dashboard Executivo**: Visão consolidada para gestores
- [ ] **Relatórios Personalizados**: Criação de relatórios customizados
- [ ] **Integração CRM**: Sincronização com sistemas externos

### Melhorias
- [ ] **Performance**: Otimização de consultas e cache
- [ ] **Acessibilidade**: Melhorias de a11y
- [ ] **Mobile**: Otimização para dispositivos móveis
- [ ] **Testes**: Cobertura completa de testes
- [ ] **Documentação**: Guias de usuário

## 📱 Responsividade

### Breakpoints Suportados
- **Mobile** (320px - 768px): Layout em coluna única
- **Tablet** (768px - 1024px): Layout em duas colunas
- **Desktop** (1024px+): Layout completo com sidebar

### Adaptações Mobile
- **Sidebar**: Colapsável em mobile
- **Tabelas**: Scroll horizontal
- **Gráficos**: Redimensionamento automático
- **Modais**: Fullscreen em mobile

## 🔧 Configuração

### Variáveis de Ambiente
```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.gestk.com
NEXT_PUBLIC_API_VERSION=v1

# Features Flags
NEXT_PUBLIC_ENABLE_EXPORT=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Configuração de Filtros
```typescript
// Configuração padrão de filtros
export const defaultFilters = {
  periodo_inicio: '2024-01-01',
  periodo_fim: '2024-12-31',
  regime_fiscal: '',
  ramo_atividade: '',
  status: 'ativo'
};
```

---

**Módulo Gestão** - Atualizado em 2024-12-15
