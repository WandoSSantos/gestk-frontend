# Funcionalidades de Custo Operacional - GESTK Client

## 📋 Visão Geral

O módulo de **Custo Operacional** foi implementado para fornecer uma análise detalhada e essencial do custo de cada cliente para a contabilidade, permitindo uma visão completa da rentabilidade e eficiência operacional.

## 🎯 Funcionalidades Implementadas

### 1. **Filtro por Data Avançado**
- ✅ **Seletor de Período**: Campos de data início e fim específicos
- ✅ **Filtro Dinâmico**: Dados são filtrados automaticamente por competência
- ✅ **Valor Hora**: Exibição do valor hora atual (R$ 24,90)
- ✅ **Integração com Filtros Globais**: Sistema unificado de filtros

### 2. **Tabela de Custo Operacional por Competência**
- ✅ **Dados Mensais**: Análise mês a mês (Jan/2025 a Set/2025)
- ✅ **Métricas Essenciais**:
  - **Faturamento da Empresa**: Receita mensal
  - **Variação de Faturamento**: Percentual de crescimento/declínio
  - **Tempo Gasto no Sistema**: Duração em HH:MM:SS
  - **Lançamentos**: Quantidade de lançamentos contábeis
  - **% Lançamentos Manuais**: Percentual de automação
  - **Vínculos de Folha Ativos**: Funcionários ativos
  - **Total NF-e Emitidas**: Notas fiscais emitidas
  - **Total NF-e Movimentadas**: Notas fiscais processadas
  - **Faturamento do Escritório**: Receita do escritório
  - **Custo Operacional**: Custo real do cliente
  - **Rentabilidade Operacional**: Lucro/prejuízo do cliente

### 3. **Gráficos de Evolução do Custo**
- ✅ **Gráfico de Linha**: Evolução do custo e rentabilidade ao longo do tempo
- ✅ **Gráfico de Barras**: Comparação entre custo e rentabilidade por empresa
- ✅ **Dados Agregados**: Análise consolidada de todas as empresas
- ✅ **Cores Intuitivas**: Vermelho para custo, verde para rentabilidade

### 4. **Modal de Composição Societária**
- ✅ **Análise Completa**: Estrutura societária detalhada
- ✅ **Sócios e Participações**: Percentual de participação de cada sócio
- ✅ **Empresas Relacionadas**: Outras empresas dos sócios
- ✅ **Status das Empresas**: Ativa, Inativa, Suspensa
- ✅ **Análise de Faturamento Teto**: Alerta para Simples Nacional
- ✅ **Planejamento Empresarial**: Informações para tomada de decisão

### 5. **Cards de Resumo**
- ✅ **Total de Empresas**: Quantidade de empresas analisadas
- ✅ **Custo Total**: Soma de todos os custos operacionais
- ✅ **Rentabilidade Total**: Lucro/prejuízo consolidado
- ✅ **Tempo Total**: Horas trabalhadas no sistema

## 📊 Dados Mock Implementados

### Empresa 1: 2WV CONSTRUCOES E REFORMAS LTDA
- **CNPJ**: 30.599.448/0001-34
- **Status**: SEM RESPONSÁVEL
- **Período**: Jan/2025 a Set/2025
- **Custo Total**: R$ 67,35
- **Rentabilidade**: -R$ 67,35 (Prejuízo)
- **Características**: Empresa sem faturamento, apenas custos operacionais

### Empresa 2: 3D INDUSTRIA E COMERCIO DE CONFECCOES LT
- **CNPJ**: 12.434.748/0001-81
- **Sócio**: DILENA MARQUES COLARES
- **Período**: Jan/2025 a Set/2025
- **Custo Total**: R$ 1.082,45
- **Rentabilidade**: R$ 1.586,62 (Lucro)
- **Faturamento Total**: R$ 2.669.066,27
- **Características**: Empresa com alto faturamento e boa rentabilidade

### Composição Societária - 3D INDUSTRIA
- **Sócio 1**: ANTONIO EUDES ETELVINO COLARES (60%)
  - DEBORAH (100%)
  - COMERCIO VAREJISTA DAFNE AVIAMENTOS LTDA (75%)
  - DMC (50%)
- **Sócio 2**: DILENA MARQUES COLARES (40%)
  - ED (100%)
  - COMERCIO VAREJISTA MARQUES AVIAMENTOS (100%)

## 🎨 Design e Interface

### Layout Responsivo
- **Desktop**: Tabelas completas com todas as colunas
- **Tablet**: Tabelas com scroll horizontal
- **Mobile**: Cards empilhados com informações essenciais

### Componentes Modernos
- **Tabelas Interativas**: Hover effects e cores condicionais
- **Modais Elegantes**: Design limpo com informações organizadas
- **Gráficos Interativos**: Recharts com tooltips e legendas
- **Filtros Intuitivos**: Interface clara e funcional

### Cores e Indicadores
- **Custo Operacional**: Vermelho (#ef4444)
- **Rentabilidade Positiva**: Verde (#10b981)
- **Rentabilidade Negativa**: Vermelho (#ef4444)
- **Variação Positiva**: Verde
- **Variação Negativa**: Vermelho
- **Neutro**: Cinza (#6b7280)

## 🔧 Implementação Técnica

### Componentes Criados
- `CustoOperacionalTable.tsx`: Tabela detalhada por competência
- `ComposicaoSocietariaModal.tsx`: Modal de análise societária
- `custo-operacional.mock.ts`: Dados mock estruturados

### Funcionalidades Avançadas
- **Filtro Dinâmico**: Dados filtrados por período selecionado
- **Cálculos Automáticos**: Totais e percentuais calculados dinamicamente
- **Formatação Inteligente**: Moeda, percentual e tempo formatados
- **Cores Condicionais**: Indicadores visuais baseados em valores

### Integração com Sistema
- **Filtros Globais**: Integrado com sistema existente
- **Exportação**: Funcionando com dados de custo operacional
- **Navegação**: Modal acessível via clique no sócio responsável

## 📈 Análise de Dados

### Métricas de Performance
- **Tempo Médio por Competência**: Calculado automaticamente
- **Eficiência de Lançamentos**: Percentual de automação
- **Rentabilidade por Cliente**: Análise individual e comparativa
- **Crescimento de Faturamento**: Variação percentual mensal

### Indicadores de Alerta
- **Rentabilidade Negativa**: Clientes com prejuízo
- **Alto Custo Operacional**: Clientes com custo elevado
- **Baixa Automação**: Percentual alto de lançamentos manuais
- **Tempo Excessivo**: Muitas horas gastas no sistema

## 🚀 Benefícios para o Negócio

### Para a Contabilidade
- **Visão Clara do Custo**: Entendimento real do custo de cada cliente
- **Análise de Rentabilidade**: Identificação de clientes lucrativos
- **Otimização de Processos**: Dados para melhorar eficiência
- **Planejamento Financeiro**: Base para precificação e orçamentos

### Para o Planejamento
- **Análise Societária**: Estrutura completa para planejamento
- **Faturamento Teto**: Controle para Simples Nacional
- **Relacionamentos**: Mapeamento de empresas relacionadas
- **Tomada de Decisão**: Dados para estratégias empresariais

## 📱 Como Usar

### Acessar Custo Operacional
1. Navegue para `Gestão > Clientes`
2. Use os filtros de data para selecionar o período
3. Visualize as tabelas de custo por competência
4. Analise os gráficos de evolução

### Ver Composição Societária
1. Na tabela de custo, clique no nome do sócio responsável
2. Visualize a estrutura societária completa
3. Analise as empresas relacionadas
4. Use as informações para planejamento

### Filtrar por Período
1. Use os campos de data início e fim
2. Os dados são filtrados automaticamente
3. Gráficos e totais são atualizados em tempo real

### Exportar Dados
1. Use o botão de exportação no cabeçalho
2. Escolha o formato (PDF, Excel, CSV)
3. Dados incluem todas as métricas de custo

## 🔮 Próximas Melhorias

### Funcionalidades Planejadas
- [ ] **Alertas Automáticos**: Notificações para indicadores críticos
- [ ] **Comparativo Anual**: Análise ano a ano
- [ ] **Projeções**: Estimativas baseadas em tendências
- [ ] **Relatórios Personalizados**: Templates customizáveis
- [ ] **Integração CRM**: Sincronização com sistemas externos

### Melhorias de UX
- [ ] **Filtros Avançados**: Por tipo de custo, rentabilidade
- [ ] **Ordenação**: Por qualquer coluna da tabela
- [ ] **Busca**: Filtro por nome de empresa ou CNPJ
- [ ] **Favoritos**: Marcar empresas importantes
- [ ] **Dashboard**: Visão consolidada de todos os clientes

---

**Funcionalidades de Custo Operacional** - Implementadas em 2024-12-15

Todas as funcionalidades foram implementadas com foco na análise essencial do custo do cliente para a contabilidade, proporcionando insights valiosos para tomada de decisão e planejamento empresarial.
