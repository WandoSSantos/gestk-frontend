# Funcionalidade de Simulação de Custo - GESTK Client

## 📋 Visão Geral

A funcionalidade de **Simulação de Custo** permite editar o valor hora do escritório em tempo real e recalcular automaticamente todos os custos operacionais, proporcionando uma ferramenta poderosa para análise de cenários e tomada de decisão.

## 🎯 Funcionalidades Implementadas

### 1. **Valor Hora Editável**
- ✅ **Edição Inline**: Clique no valor para editar diretamente
- ✅ **Validação**: Aceita apenas valores numéricos positivos
- ✅ **Formatação**: Exibição em formato de moeda brasileira
- ✅ **Teclas de Atalho**: Enter para salvar, Escape para cancelar
- ✅ **Botão Reset**: Volta ao valor padrão (R$ 24,90)

### 2. **Recálculo Automático**
- ✅ **Custo Operacional**: Recalculado baseado no tempo gasto × novo valor hora
- ✅ **Rentabilidade**: Recalculada como faturamento - novo custo
- ✅ **Totais Agregados**: Somas atualizadas automaticamente
- ✅ **Gráficos**: Atualizados em tempo real
- ✅ **Tabelas**: Dados recalculados instantaneamente

### 3. **Análise de Impacto**
- ✅ **Margem de Rentabilidade**: Percentual de lucro sobre faturamento
- ✅ **Custo por Empresa**: Média de custo por empresa
- ✅ **Eficiência Operacional**: Indicador de performance baseado no valor hora
- ✅ **Métricas por Hora**: Custo e rentabilidade por hora trabalhada

### 4. **Interface de Simulação**
- ✅ **Card Dedicado**: Área específica para simulações
- ✅ **Métricas Visuais**: Cards com indicadores coloridos
- ✅ **Análise Comparativa**: Comparação entre cenários
- ✅ **Design Intuitivo**: Interface clara e fácil de usar

## 🔧 Implementação Técnica

### Componentes Criados

#### **EditableValue.tsx**
```typescript
interface EditableValueProps {
  value: number;
  onValueChange: (newValue: number) => void;
  format?: 'currency' | 'number' | 'percentage';
  prefix?: string;
  suffix?: string;
  className?: string;
  disabled?: boolean;
}
```

**Funcionalidades:**
- Edição inline com validação
- Formatação automática (moeda, percentual, número)
- Teclas de atalho (Enter/Escape)
- Estados visuais (editando, salvo, erro)

#### **useValorHora.ts**
```typescript
interface UseValorHoraProps {
  dadosOriginais: CustoOperacional[];
}

// Retorna:
// - valorHora: valor atual
// - setValorHora: função para alterar
// - dadosRecalculados: dados com novos cálculos
// - metricasAgregadas: métricas consolidadas
// - dadosEvolucao: dados para gráficos
// - dadosResumo: dados para tabelas
```

**Funcionalidades:**
- Recalcula custos baseado no tempo gasto
- Atualiza rentabilidade automaticamente
- Gera métricas agregadas
- Prepara dados para gráficos e tabelas

#### **SimulacaoCusto.tsx**
```typescript
interface SimulacaoCustoProps {
  valorHora: number;
  onValorHoraChange: (valor: number) => void;
  metricas: MetricasAgregadas;
  onReset: () => void;
}
```

**Funcionalidades:**
- Interface de controle do valor hora
- Exibição de métricas de simulação
- Análise de impacto detalhada
- Botão de reset para valor padrão

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

#### **Métricas Agregadas**
```typescript
const metricas = {
  totalCusto: dadosRecalculados.reduce((acc, c) => acc + c.total_custo_operacional, 0),
  totalRentabilidade: dadosRecalculados.reduce((acc, c) => acc + c.total_rentabilidade, 0),
  totalFaturamento: dadosRecalculados.reduce((acc, c) => acc + c.total_faturamento, 0),
  totalTempoHoras: // cálculo do tempo total em horas
};
```

## 📊 Métricas de Análise

### **Indicadores Principais**
- **Custo Total**: Soma de todos os custos operacionais
- **Rentabilidade Total**: Lucro/prejuízo consolidado
- **Tempo Total**: Horas trabalhadas no sistema
- **Faturamento Total**: Receita total das empresas

### **Indicadores por Hora**
- **Custo por Hora**: Custo total ÷ tempo total
- **Rentabilidade por Hora**: Rentabilidade total ÷ tempo total
- **Eficiência Operacional**: Comparação com valor hora ideal

### **Análise de Impacto**
- **Margem de Rentabilidade**: (Rentabilidade ÷ Faturamento) × 100
- **Custo por Empresa**: Custo total ÷ número de empresas
- **Eficiência Operacional**: 
  - Alta: Custo/hora ≤ 80% do valor hora
  - Média: Custo/hora entre 80% e 120% do valor hora
  - Baixa: Custo/hora > 120% do valor hora

## 🎨 Design e Interface

### **Card de Simulação**
- **Cor de Destaque**: Azul (#3b82f6) para indicar funcionalidade especial
- **Layout Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Ícones Intuitivos**: Calculator, TrendingUp, TrendingDown, RotateCcw
- **Cores Condicionais**: Verde (lucro), Vermelho (prejuízo), Azul (neutro)

### **Componente EditableValue**
- **Estados Visuais**: Normal, editando, erro
- **Validação em Tempo Real**: Feedback imediato
- **Teclas de Atalho**: Enter (salvar), Escape (cancelar)
- **Formatação Automática**: Moeda, percentual, número

### **Métricas Visuais**
- **Cards Informativos**: Layout limpo e organizado
- **Cores Semânticas**: Verde (positivo), Vermelho (negativo)
- **Tipografia Hierárquica**: Títulos, valores, descrições
- **Ícones Contextuais**: Facilitam a compreensão

## 🚀 Benefícios para o Negócio

### **Para Análise de Cenários**
- **Simulação Rápida**: Teste diferentes valores hora instantaneamente
- **Comparação Visual**: Veja o impacto imediatamente nos gráficos
- **Análise de Sensibilidade**: Entenda como mudanças afetam a rentabilidade
- **Tomada de Decisão**: Dados concretos para precificação

### **Para Planejamento Financeiro**
- **Projeções Realistas**: Baseadas em dados históricos reais
- **Otimização de Custos**: Identifique o valor hora ideal
- **Análise de Rentabilidade**: Entenda a viabilidade de cada cliente
- **Planejamento Estratégico**: Dados para decisões de longo prazo

### **Para Gestão Operacional**
- **Monitoramento em Tempo Real**: Acompanhe mudanças instantaneamente
- **Identificação de Oportunidades**: Clientes com alta rentabilidade
- **Alertas de Risco**: Clientes com baixa rentabilidade
- **Otimização de Processos**: Dados para melhorar eficiência

## 📱 Como Usar

### **Editar Valor Hora**
1. Na página de clientes, localize o card "Simulação de Custo Operacional"
2. Clique no valor hora (ex: R$ 24,90)
3. Digite o novo valor
4. Pressione Enter para salvar ou Escape para cancelar
5. Observe os recálculos automáticos

### **Analisar Impacto**
1. Após alterar o valor hora, observe os cards de métricas
2. Verifique a "Análise de Impacto" na parte inferior
3. Analise os gráficos atualizados
4. Compare com o cenário anterior

### **Resetar Valores**
1. Clique no botão "Resetar" no card de simulação
2. O valor volta para R$ 24,90
3. Todos os cálculos são restaurados

### **Interpretar Métricas**
- **Margem de Rentabilidade**: >10% é considerada boa
- **Eficiência Operacional**: "Alta" indica boa performance
- **Custo por Empresa**: Compare com o valor hora para eficiência

## 🔮 Próximas Melhorias

### **Funcionalidades Planejadas**
- [ ] **Histórico de Simulações**: Salvar diferentes cenários
- [ ] **Comparação de Cenários**: Side-by-side de diferentes valores
- [ ] **Exportação de Simulações**: Relatórios com cenários testados
- [ ] **Validação Avançada**: Limites mínimos/máximos para valor hora
- [ ] **Simulação por Cliente**: Valores diferentes por empresa

### **Melhorias de UX**
- [ ] **Animações**: Transições suaves nos recálculos
- [ ] **Undo/Redo**: Desfazer/refazer alterações
- [ ] **Presets**: Valores predefinidos (R$ 20, R$ 25, R$ 30)
- [ ] **Gráfico de Sensibilidade**: Mostrar impacto de diferentes valores
- [ ] **Alertas Inteligentes**: Notificações para cenários críticos

---

**Funcionalidade de Simulação de Custo** - Implementada em 2024-12-15

Esta funcionalidade transforma a análise de custo operacional em uma ferramenta interativa e poderosa, permitindo simulações em tempo real e tomada de decisão baseada em dados concretos.

