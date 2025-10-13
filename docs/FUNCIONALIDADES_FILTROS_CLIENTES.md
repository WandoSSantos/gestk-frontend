# Funcionalidades de Filtros e Simulação Individual - GESTK Client

## 📋 Visão Geral

O sistema de **Filtros Avançados e Simulação Individual** permite ao escritório de contabilidade realizar análises granulares por cliente, com simulação de custos em tempo real e ferramentas para justificar aumentos de preço.

## 🎯 Funcionalidades Implementadas

### 1. **Sistema de Filtros Avançado**

#### **Filtros Principais**
- ✅ **Busca Inteligente**: Por nome da empresa ou CNPJ
- ✅ **Filtro por Escritório**: Agrupamento por escritório de contabilidade
- ✅ **Seleção de Empresa**: Dropdown com lista de empresas disponíveis
- ✅ **Filtros Avançados**: Regime fiscal, ramo de atividade, período

#### **Interface de Filtros**
- ✅ **Posicionamento no Topo**: Filtros sempre visíveis
- ✅ **Card de Empresa Selecionada**: Informações detalhadas da empresa
- ✅ **Filtros Expansíveis**: Seção avançada colapsável
- ✅ **Design Responsivo**: Adapta-se a diferentes tamanhos de tela

### 2. **Simulação Individual por Cliente**

#### **Valor Hora Editável**
- ✅ **Edição Inline**: Clique no valor para editar diretamente
- ✅ **Validação Inteligente**: Aceita apenas valores numéricos positivos
- ✅ **Formatação Automática**: Exibição em formato de moeda brasileira
- ✅ **Teclas de Atalho**: Enter para salvar, Escape para cancelar
- ✅ **Botão Reset**: Volta ao valor padrão (R$ 24,90)

#### **Recálculo Automático**
- ✅ **Custo Operacional**: Recalculado baseado no tempo gasto × novo valor hora
- ✅ **Rentabilidade**: Recalculada como faturamento - novo custo
- ✅ **Totais Agregados**: Somas atualizadas automaticamente
- ✅ **Gráficos**: Atualizados em tempo real
- ✅ **Tabelas**: Dados recalculados instantaneamente

### 3. **Análise de Impacto Detalhada**

#### **Métricas Principais**
- ✅ **Custo Total**: Soma de todos os custos operacionais da empresa
- ✅ **Rentabilidade**: Lucro/prejuízo específico do cliente
- ✅ **Tempo Total**: Horas trabalhadas para o cliente
- ✅ **Competências**: Número de períodos analisados

#### **Análise de Tendências**
- ✅ **Custo**: Crescimento/Declínio/Estável nos últimos 3 meses
- ✅ **Rentabilidade**: Tendência de lucratividade
- ✅ **Faturamento**: Evolução da receita do cliente

#### **Eficiência Operacional**
- 🟢 **Alta**: Custo/hora ≤ 80% do valor hora
- 🟡 **Média**: Custo/hora entre 80% e 120% do valor hora
- 🔴 **Baixa**: Custo/hora > 120% do valor hora

### 4. **Gráficos Específicos por Cliente**

#### **Evolução de Custo e Rentabilidade**
- ✅ **Linha Temporal**: Por competência (mês/ano)
- ✅ **Dados Filtrados**: Apenas dados da empresa selecionada
- ✅ **Títulos Dinâmicos**: Nome da empresa no título
- ✅ **Cores Semânticas**: Vermelho (custo), Verde (rentabilidade)

#### **Lançamentos por Competência**
- ✅ **Análise de Produtividade**: Quantidade de lançamentos
- ✅ **Percentual Manual**: Lançamentos manuais vs automáticos
- ✅ **Comparação Temporal**: Evolução ao longo do tempo

### 5. **Ferramentas de Justificativa**

#### **Recomendações Inteligentes**
- ✅ **Margem Baixa**: Alerta quando margem < 10%
- ✅ **Eficiência Baixa**: Cliente consome mais tempo que esperado
- ✅ **Tendência de Crescimento**: Custos aumentando
- ✅ **Prejuízo Operacional**: Aumento urgente necessário
- ✅ **Cliente Rentável**: Manter valor atual

#### **Análise de Impacto**
- ✅ **Margem de Rentabilidade**: (Rentabilidade ÷ Faturamento) × 100
- ✅ **Custo por Competência**: Média de custo por período
- ✅ **Rentabilidade Média**: Média de rentabilidade por período
- ✅ **Custo por Hora**: Custo total ÷ tempo total

## 🔧 Implementação Técnica

### Componentes Criados

#### **CompanyFilter.tsx**
```typescript
interface CompanyFilterProps {
  empresas: Empresa[];
  empresaSelecionada: string | null;
  onEmpresaChange: (empresaId: string | null) => void;
  escritorioSelecionado: string | null;
  onEscritorioChange: (escritorioId: string | null) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onClearFilters: () => void;
}
```

**Funcionalidades:**
- Filtros principais (busca, escritório, empresa)
- Filtros avançados expansíveis
- Card com empresa selecionada
- Design responsivo

#### **useSimulacaoIndividual.ts**
```typescript
interface UseSimulacaoIndividualProps {
  dadosOriginais: CustoOperacional[];
  empresaSelecionada: string | null;
}

// Retorna:
// - valorHora: valor atual
// - setValorHora: função para alterar
// - dadosRecalculados: dados com novos cálculos
// - metricasEmpresa: métricas específicas da empresa
// - dadosEvolucaoEmpresa: dados para gráficos
// - analiseTendencias: análise de tendências
// - resetValorHora: função para resetar
```

**Funcionalidades:**
- Recalcula custos baseado no tempo gasto
- Atualiza rentabilidade automaticamente
- Gera métricas específicas por empresa
- Analisa tendências dos últimos 3 meses

#### **SimulacaoIndividual.tsx**
```typescript
interface SimulacaoIndividualProps {
  valorHora: number;
  onValorHoraChange: (valor: number) => void;
  metricas: MetricasEmpresa;
  analiseTendencias: AnaliseTendencias;
  onReset: () => void;
  empresaSelecionada: string | null;
  nomeEmpresa: string;
}
```

**Funcionalidades:**
- Interface de controle do valor hora
- Exibição de métricas de simulação
- Análise de impacto detalhada
- Recomendações para justificativa

### Lógica de Cálculo

#### **Recálculo de Custo Operacional**
```typescript
// Para cada competência:
const [hours, minutes, seconds] = comp.tempo_gasto_sistema.split(':').map(Number);
const totalHours = hours + minutes / 60 + seconds / 3600;
const novoCustoOperacional = totalHours * valorHora;
```

#### **Recálculo de Rentabilidade**
```typescript
// Para cada competência:
const novaRentabilidade = comp.faturamento_escritorio - novoCustoOperacional;
```

#### **Análise de Tendências**
```typescript
// Comparar últimos 3 meses com anteriores
const calcularTendencia = (dados: any[], campo: string) => {
  const mediaAtual = dados.reduce((acc, item) => acc + item[campo], 0) / dados.length;
  const mediaAnterior = anteriores3.reduce((acc, item) => acc + item[campo], 0) / anteriores3.length;
  const variacao = ((mediaAtual - mediaAnterior) / mediaAnterior) * 100;
  
  if (variacao > 10) return 'Crescimento';
  if (variacao < -10) return 'Declínio';
  return 'Estável';
};
```

## 📊 Dados Disponíveis

### Empresas de Exemplo

1. **2WV CONSTRUCOES E REFORMAS LTDA**
   - CNPJ: 30.599.448/0001-34
   - Regime: Simples Nacional
   - Ramo: Construção Civil
   - Escritório: ContabilPro

2. **3D INDUSTRIA E COMERCIO DE CONFECCOES LT**
   - CNPJ: 12.434.748/0001-81
   - Regime: Lucro Real
   - Ramo: Indústria Têxtil
   - Escritório: ContabilPro

3. **TECH SOLUTIONS LTDA**
   - CNPJ: 12.345.678/0001-90
   - Regime: Lucro Presumido
   - Ramo: Tecnologia
   - Escritório: ContabilTech

4. **COMERCIAL ABC LTDA**
   - CNPJ: 98.765.432/0001-10
   - Regime: Simples Nacional
   - Ramo: Comércio
   - Escritório: FiscalMaster

### Métricas por Empresa

Cada empresa possui:
- **Competências**: Dados mensais (Jan/2025, Fev/2025, etc.)
- **Faturamento**: Receita da empresa e do escritório
- **Tempo Gasto**: Horas trabalhadas no sistema
- **Lançamentos**: Quantidade total e percentual manual
- **Custo Operacional**: Calculado baseado no tempo × valor hora
- **Rentabilidade**: Faturamento - custo operacional

## 🎨 Design e Interface

### Filtros no Topo
- **Posicionamento**: Filtros principais sempre visíveis
- **Hierarquia Visual**: Busca → Escritório → Empresa
- **Feedback Visual**: Card destacado com empresa selecionada
- **Filtros Avançados**: Expansíveis para não poluir a interface

### Simulação Individual
- **Card Dedicado**: Área específica para simulação
- **Valor Hora Editável**: Interface intuitiva para edição
- **Métricas Visuais**: Cards coloridos com indicadores
- **Recomendações**: Seção destacada com sugestões

### Cores e Estados
- **Azul**: Funcionalidades especiais e seleções
- **Verde**: Valores positivos e rentabilidade
- **Vermelho**: Custos e valores negativos
- **Amarelo**: Alertas e valores médios
- **Cinza**: Estados neutros e placeholders

## 🚀 Benefícios para o Negócio

### Para Análise de Cenários
- **Simulação Rápida**: Teste diferentes valores hora instantaneamente
- **Comparação Visual**: Veja o impacto imediatamente nos gráficos
- **Análise de Sensibilidade**: Entenda como mudanças afetam a rentabilidade
- **Tomada de Decisão**: Dados concretos para precificação

### Para Planejamento Financeiro
- **Projeções Realistas**: Baseadas em dados históricos reais
- **Otimização de Custos**: Identifique o valor hora ideal
- **Análise de Rentabilidade**: Entenda a viabilidade de cada cliente
- **Planejamento Estratégico**: Dados para decisões de longo prazo

### Para Gestão de Clientes
- **Filtro por Escritório**: Organize por escritório de contabilidade
- **Busca Rápida**: Encontre clientes por nome ou CNPJ
- **Análise Comparativa**: Compare diferentes clientes
- **Histórico Detalhado**: Acompanhe evolução ao longo do tempo

## 📱 Como Usar

### Selecionar Empresa
1. Use a busca para encontrar a empresa por nome ou CNPJ
2. Filtre por escritório de contabilidade se necessário
3. Selecione a empresa desejada no dropdown
4. Visualize as informações da empresa no card destacado

### Simular Custo
1. Ajuste o valor hora clicando no valor atual
2. Digite o novo valor e pressione Enter
3. Observe os recálculos automáticos
4. Analise as métricas e recomendações

### Analisar Tendências
1. Verifique a seção "Análise de Tendências"
2. Observe os indicadores de eficiência operacional
3. Leia as recomendações para justificativa de aumento
4. Use os gráficos para visualizar a evolução

### Interpretar Recomendações
- **Margem de Rentabilidade**: >10% é considerada boa
- **Eficiência Operacional**: "Alta" indica boa performance
- **Custo por Competência**: Compare com o valor hora para eficiência
- **Tendências**: Crescimento pode indicar necessidade de ajuste

## 🔮 Próximas Melhorias

### Funcionalidades Planejadas
- [ ] **Histórico de Simulações**: Salvar diferentes cenários
- [ ] **Comparação de Cenários**: Side-by-side de diferentes valores
- [ ] **Exportação de Simulações**: Relatórios com cenários testados
- [ ] **Validação Avançada**: Limites mínimos/máximos para valor hora
- [ ] **Simulação por Competência**: Valores diferentes por período

### Melhorias de UX
- [ ] **Animações**: Transições suaves nos recálculos
- [ ] **Undo/Redo**: Desfazer/refazer alterações
- [ ] **Presets**: Valores predefinidos (R$ 20, R$ 25, R$ 30)
- [ ] **Gráfico de Sensibilidade**: Mostrar impacto de diferentes valores
- [ ] **Alertas Inteligentes**: Notificações para cenários críticos

### Integração com Backend
- [ ] **API Real**: Conectar com dados reais do sistema
- [ ] **Sincronização**: Atualizações automáticas de dados
- [ ] **Cache Inteligente**: Otimização de performance
- [ ] **Backup de Simulações**: Salvar no servidor

---

**Funcionalidades de Filtros e Simulação Individual** - Implementadas em 2024-12-15

Esta funcionalidade transforma a análise de custo operacional em uma ferramenta interativa e poderosa, permitindo simulações em tempo real e tomada de decisão baseada em dados concretos para cada cliente individual.

