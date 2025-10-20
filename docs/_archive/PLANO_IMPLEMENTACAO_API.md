# Plano de Implementação da API - Frontend

## 📋 Visão Geral

Este documento define o plano de implementação dos endpoints da API no frontend, dividido em **blocos funcionais** que permitem desenvolvimento incremental, testes contínuos e entrega progressiva de valor.

**Status Atual**: Preparação inicial
**Data de Início**: 20/10/2025
**Endpoints Totais**: 91 endpoints (83% da API implementada no backend)

---

## 🎯 Estratégia de Implementação

### Princípios
1. **Blocos Independentes**: Cada bloco pode ser desenvolvido e testado isoladamente
2. **Valor Incremental**: Priorizar funcionalidades de alto valor
3. **Testabilidade**: Cada bloco deve ter testes antes de prosseguir
4. **Documentação**: Atualizar docs a cada bloco concluído
5. **Feedback Rápido**: Validar com usuários após cada bloco

### Arquitetura de Integração
```
Frontend (Next.js)
    ↓
API Client (Axios)
    ↓
Interceptors (Auth, Error Handling)
    ↓
Backend API (Django REST)
    ↓
Database (PostgreSQL)
```

---

## 🏗️ Estrutura de Diretórios

```
packages/
  shared/
    src/
      api/
        client.ts              # Cliente Axios configurado
        types.ts               # Types compartilhados
        auth/
          auth.api.ts          # Endpoints de autenticação
          auth.types.ts        # Types de auth
        gestao/
          carteira.api.ts      # Endpoints de carteira
          clientes.api.ts      # Endpoints de clientes
          usuarios.api.ts      # Endpoints de usuários
          escritorio.api.ts    # Endpoints de escritório
        dashboards/
          demografico.api.ts   # Dashboard demográfico
          fiscal.api.ts        # Dashboard fiscal
          contabil.api.ts      # Dashboard contábil
          organizacional.api.ts # Dashboard organizacional
          pessoal.api.ts       # Dashboard pessoal
        billing/
          planos.api.ts        # Endpoints de planos
          assinaturas.api.ts   # Endpoints de assinaturas
          faturas.api.ts       # Endpoints de faturas
          pagamentos.api.ts    # Endpoints de pagamentos
        administracao/
          usuarios.api.ts      # Gestão de usuários
          contratos.api.ts     # Gestão de contratos
        export/
          export.api.ts        # Endpoints de exportação
      hooks/
        useAuth.ts             # Hook de autenticação
        useCarteira.ts         # Hook de carteira
        useDashboard.ts        # Hook de dashboards
```

---

## 📦 BLOCO 1: Autenticação e Sessão (Foundational)

**Prioridade**: 🔴 CRÍTICA
**Dependências**: Nenhuma
**Duração Estimada**: 2-3 dias
**Status**: 🟡 Planejado

### Objetivos
- Implementar login/logout
- Gerenciar tokens JWT
- Renovação automática de tokens
- Persistência de sessão
- Proteção de rotas

### Endpoints (5)
```
✅ POST   /api/auth/token/                # Login
✅ POST   /api/auth/token/refresh/        # Renovar token
✅ POST   /api/auth/login/                # Login customizado
✅ GET    /api/auth/me/                   # Dados do usuário
✅ POST   /api/auth/logout/               # Logout
```

### Arquivos a Criar
1. `packages/shared/src/api/client.ts` - Cliente Axios base
2. `packages/shared/src/api/auth/auth.api.ts` - Endpoints de auth
3. `packages/shared/src/api/auth/auth.types.ts` - Types de auth
4. `packages/shared/src/hooks/useAuth.ts` - Hook de autenticação
5. `apps/admin/src/middleware.ts` - Proteção de rotas admin
6. `apps/client/src/middleware.ts` - Proteção de rotas client

### Critérios de Aceitação
- [ ] Login funcional em admin e client
- [ ] Tokens armazenados no localStorage
- [ ] Renovação automática antes da expiração
- [ ] Logout limpa tokens e redireciona
- [ ] Rotas protegidas redirecionam para login
- [ ] Dados do usuário disponíveis globalmente

### Testes
- [ ] Login com credenciais válidas
- [ ] Login com credenciais inválidas
- [ ] Renovação automática de token
- [ ] Logout e limpeza de sessão
- [ ] Acesso a rota protegida sem auth
- [ ] Persistência de sessão após refresh

---

## 📦 BLOCO 2: Gestão - Carteira de Clientes (High Value)

**Prioridade**: 🔴 ALTA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 3-4 dias
**Status**: 🟡 Planejado

### Objetivos
- Visualizar carteira de clientes
- Filtrar por regime fiscal, status, período
- Ver evolução mensal
- Categorizar clientes

### Endpoints (3)
```
✅ GET /api/gestao/carteira/clientes/     # Lista de clientes
✅ GET /api/gestao/carteira/categorias/   # Categorias por regime
✅ GET /api/gestao/carteira/evolucao/     # Evolução mensal
```

### Arquivos a Criar
1. `packages/shared/src/api/gestao/carteira.api.ts` - API de carteira
2. `packages/shared/src/api/gestao/carteira.types.ts` - Types de carteira
3. `packages/shared/src/hooks/useCarteira.ts` - Hook de carteira
4. `apps/client/src/app/(dashboard)/gestao/carteira/page.tsx` - Página de carteira
5. `apps/client/src/components/gestao/CarteiraTable.tsx` - Tabela de clientes
6. `apps/client/src/components/gestao/CarteiraFilters.tsx` - Filtros

### Critérios de Aceitação
- [ ] Lista de clientes carrega corretamente
- [ ] Filtros funcionam (regime, status, data)
- [ ] Paginação implementada
- [ ] Ordenação por colunas
- [ ] Categorias exibem contadores
- [ ] Evolução mensal em gráfico
- [ ] Loading states adequados
- [ ] Error handling implementado

### Testes
- [ ] Carregar lista completa de clientes
- [ ] Filtrar por regime fiscal
- [ ] Filtrar por status
- [ ] Navegar entre páginas
- [ ] Ordenar por diferentes colunas
- [ ] Visualizar evolução mensal

---

## 📦 BLOCO 3: Gestão - Detalhes do Cliente (Medium Value)

**Prioridade**: 🟡 MÉDIA
**Dependências**: Bloco 2 (Carteira)
**Duração Estimada**: 2-3 dias
**Status**: 🟡 Planejado

### Objetivos
- Ver detalhes completos do cliente
- Listar sócios majoritários
- Histórico de contratos
- Faturamento por cliente

### Endpoints (3)
```
✅ GET /api/gestao/clientes/lista/        # Lista de clientes
✅ GET /api/gestao/clientes/detalhes/     # Detalhes do cliente
✅ GET /api/gestao/clientes/socios/       # Sócios majoritários
```

### Arquivos a Criar
1. `packages/shared/src/api/gestao/clientes.api.ts` - API de clientes
2. `packages/shared/src/api/gestao/clientes.types.ts` - Types de clientes
3. `apps/client/src/app/(dashboard)/gestao/clientes/[id]/page.tsx` - Detalhes
4. `apps/client/src/components/gestao/ClienteInfo.tsx` - Info do cliente
5. `apps/client/src/components/gestao/SociosList.tsx` - Lista de sócios

### Critérios de Aceitação
- [ ] Detalhes do cliente carregam
- [ ] Sócios listados corretamente
- [ ] Contratos exibidos
- [ ] Informações formatadas (CNPJ, CEP, etc.)
- [ ] Botões de ação funcionais

### Testes
- [ ] Carregar detalhes de cliente PJ
- [ ] Carregar detalhes de cliente PF
- [ ] Listar sócios majoritários
- [ ] Visualizar histórico de contratos

---

## 📦 BLOCO 4: Dashboard Demográfico (High Impact)

**Prioridade**: 🔴 ALTA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 4-5 dias
**Status**: 🟡 Planejado

### Objetivos
- Exibir indicadores demográficos
- Gráficos de distribuição
- Evolução de colaboradores
- Análise por idade, gênero, escolaridade

### Endpoints (7)
```
✅ GET /api/dashboards/demografico/indicadores/
✅ GET /api/dashboards/demografico/evolucao-mensal/
✅ GET /api/dashboards/demografico/distribuicao-etaria/
✅ GET /api/dashboards/demografico/distribuicao-genero/
✅ GET /api/dashboards/demografico/distribuicao-escolaridade/
✅ GET /api/dashboards/demografico/distribuicao-cargo/
✅ GET /api/dashboards/demografico/colaboradores/
```

### Arquivos a Criar
1. `packages/shared/src/api/dashboards/demografico.api.ts` - API demográfico
2. `packages/shared/src/api/dashboards/demografico.types.ts` - Types
3. `packages/shared/src/hooks/useDemografico.ts` - Hook
4. `apps/client/src/app/(dashboard)/dashboards/demografico/page.tsx` - Página
5. `apps/client/src/components/dashboard/IndicadoresCards.tsx` - Cards
6. `apps/client/src/components/dashboard/DistribuicaoCharts.tsx` - Gráficos
7. `apps/client/src/components/dashboard/EvolucaoChart.tsx` - Evolução

### Critérios de Aceitação
- [ ] Indicadores carregam corretamente
- [ ] Gráficos renderizam com dados reais
- [ ] Filtros de período funcionam
- [ ] Cores seguem identidade visual
- [ ] Tooltips informativos
- [ ] Responsivo em mobile

### Testes
- [ ] Carregar indicadores demográficos
- [ ] Visualizar distribuição etária
- [ ] Visualizar distribuição por gênero
- [ ] Filtrar por período
- [ ] Exportar gráficos (futuro)

---

## 📦 BLOCO 5: Dashboard Fiscal (High Impact)

**Prioridade**: 🔴 ALTA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 3-4 dias
**Status**: 🟡 Planejado

### Objetivos
- Indicadores fiscais gerais
- Resumo por tipo de nota
- Top clientes por faturamento
- Análise de impostos

### Endpoints (3)
```
✅ GET /api/dashboards/fiscal/indicadores/
✅ GET /api/dashboards/fiscal/resumo-por-tipo/
✅ GET /api/dashboards/fiscal/top-clientes/
```

### Arquivos a Criar
1. `packages/shared/src/api/dashboards/fiscal.api.ts` - API fiscal
2. `packages/shared/src/api/dashboards/fiscal.types.ts` - Types
3. `packages/shared/src/hooks/useFiscal.ts` - Hook
4. `apps/client/src/app/(dashboard)/dashboards/fiscal/page.tsx` - Página
5. `apps/client/src/components/dashboard/fiscal/IndicadoresFiscais.tsx` - Cards
6. `apps/client/src/components/dashboard/fiscal/TopClientes.tsx` - Ranking

### Critérios de Aceitação
- [ ] Indicadores fiscais exibidos
- [ ] Gráfico de resumo por tipo
- [ ] Ranking de top clientes
- [ ] Valores formatados corretamente
- [ ] Percentuais calculados

### Testes
- [ ] Carregar indicadores fiscais
- [ ] Visualizar resumo por tipo
- [ ] Ver top clientes
- [ ] Filtrar por período

---

## 📦 BLOCO 6: Dashboard Contábil (Medium Impact)

**Prioridade**: 🟡 MÉDIA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 3-4 dias
**Status**: 🟡 Planejado

### Objetivos
- Indicadores contábeis
- Balancete
- Evolução mensal

### Endpoints (2)
```
✅ GET /api/dashboards/contabil/indicadores/
✅ GET /api/dashboards/contabil/balancete/
```

### Arquivos a Criar
1. `packages/shared/src/api/dashboards/contabil.api.ts` - API contábil
2. `packages/shared/src/api/dashboards/contabil.types.ts` - Types
3. `packages/shared/src/hooks/useContabil.ts` - Hook
4. `apps/client/src/app/(dashboard)/dashboards/contabil/page.tsx` - Página
5. `apps/client/src/components/dashboard/contabil/Balancete.tsx` - Balancete

### Critérios de Aceitação
- [ ] Indicadores contábeis exibidos
- [ ] Balancete formatado
- [ ] Evolução mensal em gráfico
- [ ] Drill-down por conta

### Testes
- [ ] Carregar indicadores
- [ ] Visualizar balancete
- [ ] Filtrar por período

---

## 📦 BLOCO 7: Gestão de Usuários (Medium Value)

**Prioridade**: 🟡 MÉDIA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 3-4 dias
**Status**: 🟡 Planejado

### Objetivos
- Listar usuários
- Ver atividades por usuário
- Produtividade
- Controle de acesso

### Endpoints (3)
```
✅ GET /api/gestao/usuarios/lista/
✅ GET /api/gestao/usuarios/atividades/
✅ GET /api/gestao/usuarios/produtividade/
```

### Arquivos a Criar
1. `packages/shared/src/api/gestao/usuarios.api.ts` - API usuários
2. `packages/shared/src/api/gestao/usuarios.types.ts` - Types
3. `apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx` - Página
4. `apps/client/src/components/gestao/usuarios/UsuariosTable.tsx` - Tabela
5. `apps/client/src/components/gestao/usuarios/AtividadesChart.tsx` - Atividades

### Critérios de Aceitação
- [ ] Lista de usuários carrega
- [ ] Atividades por usuário
- [ ] Gráfico de produtividade
- [ ] Filtros funcionais

### Testes
- [ ] Listar todos os usuários
- [ ] Ver atividades de um usuário
- [ ] Visualizar produtividade

---

## 📦 BLOCO 8: Dashboards Organizacional e Pessoal (Low Impact)

**Prioridade**: 🟢 BAIXA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 3-4 dias
**Status**: 🟡 Planejado

### Objetivos
- Dashboard organizacional
- Dashboard pessoal
- Estrutura hierárquica

### Endpoints (4)
```
✅ GET /api/dashboards/organizacional/cargos/
✅ GET /api/dashboards/organizacional/departamentos/
✅ GET /api/dashboards/organizacional/hierarquia/
✅ GET /api/dashboards/pessoal/indicadores/
```

### Arquivos a Criar
1. `packages/shared/src/api/dashboards/organizacional.api.ts`
2. `packages/shared/src/api/dashboards/pessoal.api.ts`
3. `apps/client/src/app/(dashboard)/dashboards/organizacional/page.tsx`
4. `apps/client/src/app/(dashboard)/dashboards/pessoal/page.tsx`

### Critérios de Aceitação
- [ ] Estrutura organizacional exibida
- [ ] Hierarquia visualizada
- [ ] Indicadores pessoais corretos

---

## 📦 BLOCO 9: Análise do Escritório (Medium Value)

**Prioridade**: 🟡 MÉDIA
**Dependências**: Blocos 2, 3, 7
**Duração Estimada**: 2-3 dias
**Status**: 🟡 Planejado

### Objetivos
- Visão geral do escritório
- Performance
- Capacidade e limites

### Endpoints (1)
```
✅ GET /api/gestao/escritorio/visao_geral/
```

### Arquivos a Criar
1. `packages/shared/src/api/gestao/escritorio.api.ts`
2. `apps/client/src/app/(dashboard)/gestao/escritorio/page.tsx`
3. `apps/client/src/components/gestao/escritorio/VisaoGeral.tsx`

### Critérios de Aceitação
- [ ] Visão geral completa
- [ ] Métricas de performance
- [ ] Indicadores de capacidade

---

## 📦 BLOCO 10: Exportação de Dados (Medium Value)

**Prioridade**: 🟡 MÉDIA
**Dependências**: Blocos 2, 3
**Duração Estimada**: 2-3 dias
**Status**: 🟡 Planejado

### Objetivos
- Exportar carteira (PDF/Excel)
- Exportar clientes (PDF/Excel)
- Relatório geral

### Endpoints (4)
```
✅ POST /api/export/carteira_pdf/
✅ POST /api/export/carteira_excel/
✅ POST /api/export/clientes_pdf/
✅ POST /api/export/clientes_excel/
```

### Arquivos a Criar
1. `packages/shared/src/api/export/export.api.ts`
2. `packages/shared/src/hooks/useExport.ts`
3. `apps/client/src/components/export/ExportButton.tsx`

### Critérios de Aceitação
- [ ] Exportação PDF funcional
- [ ] Exportação Excel funcional
- [ ] Download automático
- [ ] Loading durante geração

---

## 📦 BLOCO 11: Administração - Gestão de Contratos GESTK (Admin Only)

**Prioridade**: 🟡 MÉDIA
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 4-5 dias
**Status**: 🟡 Planejado

### Objetivos
- Listar contratos GESTK
- Criar/editar contratos
- Renovar/suspender/cancelar
- Estatísticas de contratos

### Endpoints (7)
```
✅ GET    /api/gestao/superuser/contratos-gestk/
✅ POST   /api/gestao/superuser/contratos-gestk/
✅ PUT    /api/gestao/superuser/contratos-gestk/{id}/
✅ POST   /api/gestao/superuser/contratos-gestk/{id}/renovar/
✅ POST   /api/gestao/superuser/contratos-gestk/{id}/suspender/
✅ POST   /api/gestao/superuser/contratos-gestk/{id}/cancelar/
✅ GET    /api/gestao/superuser/contratos-gestk/estatisticas/
```

### Arquivos a Criar
1. `packages/shared/src/api/administracao/contratos.api.ts`
2. `packages/shared/src/api/administracao/contratos.types.ts`
3. `apps/admin/src/app/(dashboard)/contratos/page.tsx`
4. `apps/admin/src/components/contratos/ContratosTable.tsx`
5. `apps/admin/src/components/contratos/ContratoForm.tsx`

### Critérios de Aceitação
- [ ] Lista de contratos carrega
- [ ] Criar novo contrato
- [ ] Editar contrato existente
- [ ] Renovar contrato
- [ ] Suspender contrato
- [ ] Cancelar contrato
- [ ] Estatísticas exibidas

---

## 📦 BLOCO 12: Billing - Gestão Financeira (Admin Only)

**Prioridade**: 🔴 ALTA (Admin)
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 5-6 dias
**Status**: 🟡 Planejado

### Objetivos
- Gestão de planos
- Gestão de assinaturas
- Gestão de faturas
- Gestão de pagamentos

### Endpoints (44 no total, separados em sub-blocos)

#### Sub-bloco 12.1: Planos (3 endpoints)
```
✅ GET /api/billing/planos/
✅ GET /api/billing/planos/ativos/
✅ GET /api/billing/planos/resumo/
```

#### Sub-bloco 12.2: Assinaturas (3 endpoints)
```
✅ GET  /api/billing/assinaturas/
✅ POST /api/billing/assinaturas/criar_assinatura/
✅ GET  /api/billing/assinaturas/resumo/
```

#### Sub-bloco 12.3: Faturas (3 endpoints)
```
✅ GET  /api/billing/faturas/
✅ POST /api/billing/faturas/gerar_faturas/
✅ GET  /api/billing/faturas/resumo/
```

#### Sub-bloco 12.4: Pagamentos (2 endpoints)
```
✅ GET /api/billing/pagamentos/
✅ GET /api/billing/pagamentos/resumo/
```

### Arquivos a Criar
1. `packages/shared/src/api/billing/planos.api.ts`
2. `packages/shared/src/api/billing/assinaturas.api.ts`
3. `packages/shared/src/api/billing/faturas.api.ts`
4. `packages/shared/src/api/billing/pagamentos.api.ts`
5. `apps/admin/src/app/(dashboard)/billing/planos/page.tsx`
6. `apps/admin/src/app/(dashboard)/billing/assinaturas/page.tsx`
7. `apps/admin/src/app/(dashboard)/billing/faturas/page.tsx`
8. `apps/admin/src/app/(dashboard)/billing/pagamentos/page.tsx`

### Critérios de Aceitação
- [ ] CRUD de planos funcional
- [ ] Gestão de assinaturas completa
- [ ] Geração de faturas automática
- [ ] Controle de pagamentos
- [ ] Relatórios de billing

---

## 📦 BLOCO 13: Administração - Gestão de Usuários e Acessos (Admin Only)

**Prioridade**: 🟡 MÉDIA (Admin)
**Dependências**: Bloco 1 (Auth)
**Duração Estimada**: 3-4 dias
**Status**: 🟡 Planejado

### Objetivos
- Listar usuários com acessos
- Listar contabilidades
- Gestão de permissões

### Endpoints (2)
```
✅ GET /api/administracao/usuarios-acesso/
✅ GET /api/administracao/contabilidades-admin/
```

### Arquivos a Criar
1. `packages/shared/src/api/administracao/usuarios.api.ts`
2. `apps/admin/src/app/(dashboard)/usuarios/page.tsx`
3. `apps/admin/src/components/usuarios/UsuariosAcessoTable.tsx`

### Critérios de Aceitação
- [ ] Lista de usuários com acessos
- [ ] Gestão de permissões
- [ ] Filtros por contabilidade

---

## 🚀 Ordem de Implementação Recomendada

### Fase 1: Foundation (Semana 1)
1. ✅ **Bloco 1**: Autenticação e Sessão (CRÍTICO)

### Fase 2: Core Features (Semanas 2-3)
2. ✅ **Bloco 2**: Carteira de Clientes (Alto Valor)
3. ✅ **Bloco 3**: Detalhes do Cliente (Complementar)
4. ✅ **Bloco 4**: Dashboard Demográfico (Alto Impacto)
5. ✅ **Bloco 5**: Dashboard Fiscal (Alto Impacto)

### Fase 3: Extended Features (Semanas 4-5)
6. ✅ **Bloco 6**: Dashboard Contábil
7. ✅ **Bloco 7**: Gestão de Usuários
8. ✅ **Bloco 9**: Análise do Escritório
9. ✅ **Bloco 10**: Exportação de Dados

### Fase 4: Advanced Features (Semana 6)
10. ✅ **Bloco 8**: Dashboards Organizacional/Pessoal

### Fase 5: Admin Features (Semanas 7-8)
11. ✅ **Bloco 11**: Contratos GESTK
12. ✅ **Bloco 12**: Billing
13. ✅ **Bloco 13**: Gestão de Usuários Admin

---

## 📊 Métricas de Progresso

### Por Bloco
- [ ] Bloco 1: 0% (0/5 endpoints)
- [ ] Bloco 2: 0% (0/3 endpoints)
- [ ] Bloco 3: 0% (0/3 endpoints)
- [ ] Bloco 4: 0% (0/7 endpoints)
- [ ] Bloco 5: 0% (0/3 endpoints)
- [ ] Bloco 6: 0% (0/2 endpoints)
- [ ] Bloco 7: 0% (0/3 endpoints)
- [ ] Bloco 8: 0% (0/4 endpoints)
- [ ] Bloco 9: 0% (0/1 endpoint)
- [ ] Bloco 10: 0% (0/4 endpoints)
- [ ] Bloco 11: 0% (0/7 endpoints)
- [ ] Bloco 12: 0% (0/11 endpoints base)
- [ ] Bloco 13: 0% (0/2 endpoints)

### Geral
- **Total de Endpoints**: 91
- **Endpoints Implementados**: 0
- **Progresso Geral**: 0%

---

## 🧪 Estratégia de Testes

### Por Bloco
1. **Testes Unitários**: Para cada função de API
2. **Testes de Integração**: Para fluxos completos
3. **Testes E2E**: Para casos de uso principais

### Ferramentas
- **Jest**: Testes unitários
- **React Testing Library**: Testes de componentes
- **MSW (Mock Service Worker)**: Mock de API
- **Playwright**: Testes E2E (futuro)

### Cobertura Mínima
- **API Clients**: 80%
- **Hooks**: 70%
- **Componentes**: 60%

---

## 📝 Checklist de Conclusão de Bloco

Para considerar um bloco concluído:

- [ ] Todos os endpoints implementados
- [ ] Types TypeScript definidos
- [ ] Hooks criados e testados
- [ ] Componentes UI implementados
- [ ] Testes unitários passando
- [ ] Testes de integração passando
- [ ] Documentação atualizada
- [ ] Code review realizado
- [ ] Deploy em ambiente de staging
- [ ] Validação com stakeholders

---

## 🔄 Processo de Desenvolvimento por Bloco

### 1. Planejamento
- Revisar endpoints do bloco
- Definir estrutura de dados
- Criar mocks para desenvolvimento

### 2. Implementação
- Criar API client
- Definir types TypeScript
- Implementar hooks
- Criar componentes UI
- Adicionar loading/error states

### 3. Testes
- Escrever testes unitários
- Implementar testes de integração
- Validar com dados reais

### 4. Review
- Code review
- Teste manual
- Ajustes de UX

### 5. Deploy
- Merge para development
- Deploy em staging
- Validação final

---

## 🎯 Notas Importantes

### Configuração Inicial Necessária
1. **Variáveis de Ambiente**:
   ```env
   NEXT_PUBLIC_API_URL=https://api.gestk.com.br/api
   NEXT_PUBLIC_APP_URL=https://app.gestk.com.br
   ```

2. **Cliente Axios Base**:
   - Configurar baseURL
   - Adicionar interceptors de auth
   - Implementar retry logic
   - Error handling global

3. **State Management**:
   - Avaliar uso de React Query ou SWR
   - Cache de dados
   - Invalidação automática

### Padrões de Código
- **Nomenclatura**: camelCase para variáveis, PascalCase para componentes
- **Tipos**: Sempre usar TypeScript strict mode
- **Errors**: Sempre fazer error handling
- **Loading**: Sempre ter loading states
- **Comments**: Comentar lógica complexa

### Performance
- **Lazy Loading**: Componentes pesados
- **Memoization**: Cálculos complexos
- **Debounce**: Inputs de busca
- **Pagination**: Listas grandes
- **Cache**: Dados estáticos

---

## 📅 Timeline Estimado

| Fase | Blocos | Duração | Data Início | Data Fim |
|------|--------|---------|-------------|----------|
| Fase 1 | Bloco 1 | 1 semana | 21/10/2025 | 25/10/2025 |
| Fase 2 | Blocos 2-5 | 2 semanas | 28/10/2025 | 08/11/2025 |
| Fase 3 | Blocos 6,7,9,10 | 2 semanas | 11/11/2025 | 22/11/2025 |
| Fase 4 | Bloco 8 | 1 semana | 25/11/2025 | 29/11/2025 |
| Fase 5 | Blocos 11-13 | 2 semanas | 02/12/2025 | 13/12/2025 |

**Total Estimado**: 8 semanas (2 meses)

---

## ✅ Próximos Passos

1. **Imediato**:
   - [ ] Configurar variáveis de ambiente
   - [ ] Criar cliente Axios base
   - [ ] Implementar Bloco 1 (Auth)

2. **Curto Prazo** (1 semana):
   - [ ] Validar autenticação funcionando
   - [ ] Iniciar Bloco 2 (Carteira)

3. **Médio Prazo** (1 mês):
   - [ ] Completar Fase 2 (Core Features)
   - [ ] Ter dashboards funcionais

4. **Longo Prazo** (2 meses):
   - [ ] Todas as features implementadas
   - [ ] Aplicação pronta para produção

---

**Última Atualização**: 20/10/2025
**Responsável**: Equipe de Desenvolvimento GESTK
**Status**: 🟡 Planejamento Inicial Completo
