# Módulo Dashboards - GESTK Client

## 📋 Visão Geral

O **Módulo Dashboards** é um dos dois módulos principais da aplicação Client do GESTK, focado na análise e visualização de dados através de dashboards interativos. Este módulo oferece insights profundos sobre diferentes aspectos do negócio contábil.

## 🏗️ Estrutura do Módulo

```
apps/client/src/app/(dashboard)/dashboards/
├── demografico/         # Dashboard demográfico de colaboradores
├── fiscal/              # Dashboard fiscal e de faturamento
├── contabil/            # Dashboard contábil e indicadores
├── indicadores/         # Dashboard de KPIs e métricas
└── dre/                 # Dashboard DRE e resultados
```

## 📊 Submódulos Implementados

### 1. Dashboard Demográfico (`/dashboards/demografico`)

**Funcionalidade**: Análise demográfica de colaboradores, turnover e distribuições.

#### Componentes Principais
- **Cards de Indicadores**: Turnover, total de colaboradores, admissões/demissões
- **Gráfico de Evolução**: Linha temporal de crescimento da equipe
- **Distribuições**: Faixa etária, escolaridade, cargo, gênero
- **Tabela de Colaboradores**: Lista detalhada com filtros
- **Filtros por Empresa**: Análise por entidade contábil

#### Dados Exibidos
```typescript
interface DashboardDemografico {
  indicadores: {
    total_colaboradores: number;
    turnover: number;
    admissoes_mes: number;
    demissoes_mes: number;
    variacao_percentual: number;
  };
  evolucao_mensal: EvolucaoColaboradores[];
  distribuicoes: {
    faixa_etaria: DistribuicaoFaixaEtaria[];
    escolaridade: DistribuicaoEscolaridade[];
    cargo: DistribuicaoCargo[];
    genero: DistribuicaoGenero[];
  };
  colaboradores: ColaboradorDetalhado[];
}
```

#### Funcionalidades
- ✅ **Indicadores de Turnover**: Cálculo automático de rotatividade
- ✅ **Evolução Temporal**: Gráfico de crescimento da equipe
- ✅ **Distribuições Demográficas**: Análise por idade, escolaridade, cargo
- ✅ **Filtros por Empresa**: Análise por entidade contábil
- ✅ **Exportação**: Relatórios demográficos completos

### 2. Dashboard Fiscal (`/dashboards/fiscal`)

**Funcionalidade**: Análise de faturamento, impostos e geolocalização.

#### Componentes Principais
- **Visão Geral**: Faturamento total e variação
- **Top Produtos/Serviços**: Mais relevantes em faturamento
- **Top Clientes/Fornecedores**: Principais parceiros
- **Mapa de Geolocalização**: Distribuição por UF
- **Gráfico de Impostos**: Evolução de impostos devidos
- **Análise Temporal**: Imposto vs Saldo a recuperar

#### Dados Exibidos
```typescript
interface DashboardFiscal {
  faturamento_total: number;
  variacao_faturamento: number;
  top_produtos: ProdutoFaturamento[];
  top_clientes: ClienteFaturamento[];
  top_fornecedores: FornecedorFaturamento[];
  geolocalizacao: GeolocalizacaoFaturamento[];
  evolucao_impostos: EvolucaoImpostos[];
  impostos_devidos: ImpostoDevido[];
  saldo_recuperar: number;
}
```

#### Funcionalidades
- ✅ **Análise de Faturamento**: Total e evolução temporal
- ✅ **Rankings**: Top produtos, clientes e fornecedores
- ✅ **Geolocalização**: Mapa de distribuição por UF
- ✅ **Análise de Impostos**: Devolução e saldo a recuperar
- ✅ **Filtros Avançados**: Por período, regime fiscal, UF
- ✅ **Exportação**: Relatórios fiscais detalhados

### 3. Dashboard Contábil (`/dashboards/contabil`)

**Funcionalidade**: Indicadores contábeis e evolução financeira.

#### Componentes Principais
- **Indicadores Financeiros**: Receita, despesas, lucro
- **Gráfico de Evolução**: Linha temporal de indicadores
- **Filtros Globais**: Período e empresa
- **Tabela de Contas**: Valor por grupo e conta
- **Top 5 Contas**: Por valor e relevância

#### Dados Exibidos
```typescript
interface DashboardContabil {
  indicadores: {
    receita_total: number;
    despesas_total: number;
    lucro_liquido: number;
    margem_percentual: number;
    variacao_receita: number;
    variacao_despesas: number;
  };
  evolucao_mensal: EvolucaoContabil[];
  contas_principais: ContaContabil[];
  grupos_contabeis: GrupoContabil[];
  top_contas: TopConta[];
}
```

#### Funcionalidades
- ✅ **Indicadores Principais**: Receita, despesas, lucro
- ✅ **Evolução Temporal**: Gráfico de crescimento
- ✅ **Análise de Contas**: Por grupo e conta individual
- ✅ **Top Contas**: Ranking por valor
- ✅ **Filtros Temporais**: Análise por período
- ✅ **Exportação**: Relatórios contábeis

### 4. Dashboard Indicadores (`/dashboards/indicadores`)

**Funcionalidade**: KPIs financeiros, operacionais e patrimoniais.

#### Componentes Principais
- **Indicadores Financeiros**: Liquidez, rentabilidade, endividamento
- **Indicadores Operacionais**: Produtividade, eficiência, qualidade
- **Indicadores Patrimoniais**: Patrimônio líquido, ativos, passivos
- **Gráficos Comparativos**: KPIs vs Metas
- **Análise de Tendências**: Crescimento e evolução

#### Dados Exibidos
```typescript
interface DashboardIndicadores {
  financeiros: IndicadorFinanceiro[];
  operacionais: IndicadorOperacional[];
  patrimoniais: IndicadorPatrimonial[];
  metas: MetaIndicador[];
  tendencias: TendenciaIndicador[];
  alertas: AlertaIndicador[];
}
```

#### Funcionalidades
- ✅ **KPIs Financeiros**: Liquidez, rentabilidade, endividamento
- ✅ **KPIs Operacionais**: Produtividade, eficiência, qualidade
- ✅ **KPIs Patrimoniais**: Patrimônio líquido, ativos, passivos
- ✅ **Comparativo com Metas**: Análise de atingimento
- ✅ **Análise de Tendências**: Crescimento e evolução
- ✅ **Sistema de Alertas**: Indicadores críticos

### 5. Dashboard DRE (`/dashboards/dre`)

**Funcionalidade**: Demonstração de resultados e análises financeiras.

#### Componentes Principais
- **Composição da DRE**: Receita bruta, líquida, lucro bruto/líquido
- **Gráfico de Evolução**: Linha temporal da DRE
- **Tabela Detalhada**: Análise vertical e horizontal
- **Análise de Margens**: Bruta, operacional, líquida
- **Comparativo Anual**: Ano atual vs anterior

#### Dados Exibidos
```typescript
interface DashboardDRE {
  composicao: {
    receita_bruta: number;
    receita_liquida: number;
    lucro_bruto: number;
    lucro_operacional: number;
    lucro_liquido: number;
  };
  evolucao: EvolucaoDRE[];
  margens: {
    margem_bruta: number;
    margem_operacional: number;
    margem_liquida: number;
  };
  analise_vertical: AnaliseVertical[];
  analise_horizontal: AnaliseHorizontal[];
}
```

#### Funcionalidades
- ✅ **Composição da DRE**: Estrutura completa de resultados
- ✅ **Evolução Temporal**: Gráfico de crescimento
- ✅ **Análise Vertical**: Proporção de cada item
- ✅ **Análise Horizontal**: Crescimento ano a ano
- ✅ **Cálculo de Margens**: Bruta, operacional, líquida
- ✅ **Exportação**: DRE completa em PDF/Excel

## 🎨 Componentes de Visualização

### Gráficos Implementados

#### LineChart (Gráfico de Linha)
```typescript
// Uso para evolução temporal
<LineChart
  data={dadosEvolucao}
  lines={[
    { dataKey: 'Receita', stroke: '#3b82f6', name: 'Receita' },
    { dataKey: 'Despesas', stroke: '#ef4444', name: 'Despesas' }
  ]}
  title="Evolução Financeira"
  height={350}
/>
```

#### BarChart (Gráfico de Barras)
```typescript
// Uso para comparações e rankings
<BarChart
  data={dadosRanking}
  bars={[
    { dataKey: 'valor', fill: '#10b981', name: 'Faturamento' }
  ]}
  title="Top 5 Clientes"
  height={300}
/>
```

#### PieChart (Gráfico de Pizza)
```typescript
// Uso para distribuições
<PieChart
  data={dadosDistribuicao}
  pies={[
    { dataKey: 'valor', nameKey: 'categoria' }
  ]}
  title="Distribuição por Categoria"
  height={300}
/>
```

#### AreaChart (Gráfico de Área)
```typescript
// Uso para volumes e acumulados
<AreaChart
  data={dadosVolume}
  areas={[
    { dataKey: 'volume', fill: '#8b5cf6', name: 'Volume' }
  ]}
  title="Volume de Atividades"
  height={300}
/>
```

### Filtros Globais

#### GlobalFilters
```typescript
// Filtros aplicáveis a todos os dashboards
<GlobalFilters
  filters={filtros}
  onFiltersChange={handleFiltersChange}
  onClearFilters={handleClearFilters}
  options={{
    periodo: true,
    empresa: true,
    regime_fiscal: true,
    departamento: true
  }}
/>
```

#### DateRangePicker
```typescript
// Seletor de período
<DateRangePicker
  date={filtros.periodo}
  setDate={handlePeriodoChange}
  align="start"
  placeholder="Selecionar período"
/>
```

## 📊 Dados Mock Implementados

### Dashboard Demográfico
```typescript
export const mockDashboardDemografico: DashboardDemografico = {
  indicadores: {
    total_colaboradores: 45,
    turnover: 8.5,
    admissoes_mes: 3,
    demissoes_mes: 1,
    variacao_percentual: 4.4
  },
  evolucao_mensal: [
    { mes: '2024-01', total: 42, admissões: 2, demissões: 0 },
    { mes: '2024-02', total: 44, admissões: 3, demissões: 1 },
    // ... mais dados
  ],
  distribuicoes: {
    faixa_etaria: [
      { faixa: '18-25', quantidade: 8, percentual: 17.8 },
      { faixa: '26-35', quantidade: 20, percentual: 44.4 },
      // ... mais dados
    ],
    // ... outras distribuições
  }
};
```

### Dashboard Fiscal
```typescript
export const mockDashboardFiscal: DashboardFiscal = {
  faturamento_total: 1250000,
  variacao_faturamento: 12.5,
  top_produtos: [
    { nome: 'Contabilidade Mensal', valor: 450000, percentual: 36.0 },
    { nome: 'Folha de Pagamento', valor: 320000, percentual: 25.6 },
    // ... mais dados
  ],
  geolocalizacao: [
    { uf: 'SP', valor: 650000, quantidade: 25 },
    { uf: 'RJ', valor: 280000, quantidade: 12 },
    // ... mais dados
  ],
  evolucao_impostos: [
    { mes: '2024-01', imposto_devido: 45000, saldo_recuperar: 12000 },
    { mes: '2024-02', imposto_devido: 52000, saldo_recuperar: 15000 },
    // ... mais dados
  ]
};
```

## 🔌 Integração com API

### Endpoints de Dashboards
```typescript
export const dashboardService = {
  demografico: {
    obter: (filtros) => apiClient.get('/dashboards/demografico', { params: filtros }),
    colaboradores: (filtros) => apiClient.get('/dashboards/demografico/colaboradores', { params: filtros }),
  },
  fiscal: {
    obter: (filtros) => apiClient.get('/dashboards/fiscal', { params: filtros }),
    produtos: (filtros) => apiClient.get('/dashboards/fiscal/produtos', { params: filtros }),
    geolocalizacao: (filtros) => apiClient.get('/dashboards/fiscal/geolocalizacao', { params: filtros }),
  },
  contabil: {
    obter: (filtros) => apiClient.get('/dashboards/contabil', { params: filtros }),
    indicadores: (filtros) => apiClient.get('/dashboards/contabil/indicadores', { params: filtros }),
  },
  indicadores: {
    obter: (filtros) => apiClient.get('/dashboards/indicadores', { params: filtros }),
    metas: (filtros) => apiClient.get('/dashboards/indicadores/metas', { params: filtros }),
  },
  dre: {
    obter: (filtros) => apiClient.get('/dashboards/dre', { params: filtros }),
    composicao: (filtros) => apiClient.get('/dashboards/dre/composicao', { params: filtros }),
  }
};
```

## 🎯 Funcionalidades Implementadas

### ✅ Dashboard Demográfico
- [x] Indicadores de turnover e colaboradores
- [x] Gráfico de evolução temporal
- [x] Distribuições demográficas
- [x] Filtros por empresa
- [x] Exportação de relatórios

### ✅ Dashboard Fiscal
- [x] Análise de faturamento
- [x] Rankings de produtos/clientes
- [x] Mapa de geolocalização
- [x] Análise de impostos
- [x] Filtros avançados

### ✅ Dashboard Contábil
- [x] Indicadores financeiros
- [x] Evolução temporal
- [x] Análise de contas
- [x] Top contas por valor
- [x] Filtros temporais

### ✅ Dashboard Indicadores
- [x] KPIs financeiros, operacionais e patrimoniais
- [x] Comparativo com metas
- [x] Análise de tendências
- [x] Sistema de alertas
- [x] Exportação de relatórios

### ✅ Dashboard DRE
- [x] Composição completa da DRE
- [x] Evolução temporal
- [x] Análise vertical e horizontal
- [x] Cálculo de margens
- [x] Comparativo anual

## 🚀 Próximas Funcionalidades

### Planejadas
- [ ] **Drill-down**: Navegação detalhada nos dados
- [ ] **Comparativo de Períodos**: Análise ano a ano
- [ ] **Previsões**: Projeções e forecasting
- [ ] **Alertas Inteligentes**: Notificações baseadas em regras
- [ ] **Dashboards Personalizados**: Criação customizada
- [ ] **Integração BI**: Conexão com ferramentas de BI

### Melhorias
- [ ] **Performance**: Otimização de consultas
- [ ] **Interatividade**: Mais interações nos gráficos
- [ ] **Responsividade**: Melhor adaptação mobile
- [ ] **Acessibilidade**: Melhorias de a11y
- [ ] **Testes**: Cobertura completa

## 📱 Responsividade

### Adaptações por Dispositivo
- **Mobile**: Gráficos empilhados, tabelas com scroll
- **Tablet**: Layout em duas colunas
- **Desktop**: Layout completo com múltiplas colunas

### Otimizações Mobile
- **Gráficos**: Redimensionamento automático
- **Tabelas**: Scroll horizontal
- **Filtros**: Modal em mobile
- **Cards**: Layout em coluna única

## 🔧 Configuração

### Filtros Padrão
```typescript
export const defaultDashboardFilters = {
  periodo_inicio: '2024-01-01',
  periodo_fim: '2024-12-31',
  empresa: '',
  regime_fiscal: '',
  departamento: ''
};
```

### Configuração de Gráficos
```typescript
export const chartConfig = {
  colors: {
    primary: '#3b82f6',
    secondary: '#10b981',
    accent: '#f59e0b',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#06b6d4'
  },
  animations: {
    duration: 300,
    easing: 'ease-in-out'
  }
};
```

---

**Módulo Dashboards** - Atualizado em 2024-12-15

