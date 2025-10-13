# Mapeamento de Endpoints - GESTK Monorepo

## 📋 Visão Geral

Este documento mapeia todos os endpoints disponíveis no backend GESTK e como eles são utilizados nas aplicações Admin e Client do monorepo.

## 🔐 Autenticação

### Endpoints Base

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/auth/token/` | POST | Login | ✅ | ✅ |
| `/api/auth/token/refresh/` | POST | Refresh token | ✅ | ✅ |
| `/api/auth/logout/` | POST | Logout | ✅ | ✅ |
| `/api/auth/select-contabilidade/` | POST | Selecionar contabilidade | ✅ | ✅ |

### Payloads

#### Login Request
```typescript
interface LoginRequest {
  username: string
  password: string
  app_context?: 'admin' | 'client'
}
```

#### Login Response
```typescript
interface LoginResponse {
  access: string
  refresh: string
  user: User
  vinculos: Array<{
    contabilidade_id: string
    role: string
  }>
}
```

## 🏢 Administração

### Contratos GESTK

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/administracao/contratos-gestk/` | GET | Listar contratos | ✅ | ❌ |
| `/api/administracao/contratos-gestk/` | POST | Criar contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/{id}/` | GET | Obter contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/{id}/` | PUT | Atualizar contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/{id}/` | DELETE | Deletar contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/{id}/suspender/` | POST | Suspender contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/{id}/cancelar/` | POST | Cancelar contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/{id}/ativar/` | POST | Ativar contrato | ✅ | ❌ |
| `/api/administracao/contratos-gestk/resumo/` | GET | Resumo de contratos | ✅ | ❌ |

### Usuários de Acesso

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/administracao/usuarios-acesso/` | GET | Listar usuários | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/` | POST | Criar usuário | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/{id}/` | GET | Obter usuário | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/{id}/` | PUT | Atualizar usuário | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/{id}/` | DELETE | Deletar usuário | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/{id}/ativar/` | POST | Ativar usuário | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/{id}/desativar/` | POST | Desativar usuário | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/{id}/estender-vigencia/` | POST | Estender vigência | ✅ | ❌ |
| `/api/administracao/usuarios-acesso/resumo/` | GET | Resumo de usuários | ✅ | ❌ |

### Contabilidades Admin

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/administracao/contabilidades-admin/` | GET | Listar contabilidades | ✅ | ❌ |
| `/api/administracao/contabilidades-admin/{id}/` | GET | Obter contabilidade | ✅ | ❌ |
| `/api/administracao/contabilidades-admin/{id}/` | PUT | Atualizar contabilidade | ✅ | ❌ |
| `/api/administracao/contabilidades-admin/{id}/suspender-por-inadimplencia/` | POST | Suspender por inadimplência | ✅ | ❌ |
| `/api/administracao/contabilidades-admin/{id}/reativar/` | POST | Reativar contabilidade | ✅ | ❌ |
| `/api/administracao/contabilidades-admin/resumo/` | GET | Resumo de contabilidades | ✅ | ❌ |

## 💰 Billing

### Planos

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/billing/planos/` | GET | Listar planos | ✅ | ❌ |
| `/api/billing/planos/` | POST | Criar plano | ✅ | ❌ |
| `/api/billing/planos/{id}/` | GET | Obter plano | ✅ | ❌ |
| `/api/billing/planos/{id}/` | PUT | Atualizar plano | ✅ | ❌ |
| `/api/billing/planos/{id}/` | DELETE | Deletar plano | ✅ | ❌ |
| `/api/billing/planos/ativos/` | GET | Planos ativos | ✅ | ❌ |
| `/api/billing/planos/resumo/` | GET | Resumo de planos | ✅ | ❌ |

### Assinaturas

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/billing/assinaturas/` | GET | Listar assinaturas | ✅ | ❌ |
| `/api/billing/assinaturas/` | POST | Criar assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/{id}/` | GET | Obter assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/{id}/` | PUT | Atualizar assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/{id}/` | DELETE | Deletar assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/{id}/suspender/` | POST | Suspender assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/{id}/cancelar/` | POST | Cancelar assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/{id}/ativar/` | POST | Ativar assinatura | ✅ | ❌ |
| `/api/billing/assinaturas/resumo/` | GET | Resumo de assinaturas | ✅ | ❌ |

### Faturas

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/billing/faturas/` | GET | Listar faturas | ✅ | ❌ |
| `/api/billing/faturas/` | POST | Criar fatura | ✅ | ❌ |
| `/api/billing/faturas/{id}/` | GET | Obter fatura | ✅ | ❌ |
| `/api/billing/faturas/{id}/` | PUT | Atualizar fatura | ✅ | ❌ |
| `/api/billing/faturas/{id}/` | DELETE | Deletar fatura | ✅ | ❌ |
| `/api/billing/faturas/{id}/marcar-como-paga/` | POST | Marcar como paga | ✅ | ❌ |
| `/api/billing/faturas/{id}/cancelar/` | POST | Cancelar fatura | ✅ | ❌ |
| `/api/billing/faturas/resumo/` | GET | Resumo de faturas | ✅ | ❌ |

### Pagamentos

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/billing/pagamentos/` | GET | Listar pagamentos | ✅ | ❌ |
| `/api/billing/pagamentos/` | POST | Criar pagamento | ✅ | ❌ |
| `/api/billing/pagamentos/{id}/` | GET | Obter pagamento | ✅ | ❌ |
| `/api/billing/pagamentos/{id}/confirmar/` | POST | Confirmar pagamento | ✅ | ❌ |
| `/api/billing/pagamentos/{id}/estornar/` | POST | Estornar pagamento | ✅ | ❌ |
| `/api/billing/pagamentos/resumo/` | GET | Resumo de pagamentos | ✅ | ❌ |

## 📊 Gestão (Client)

### Carteira de Clientes

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/gestao/carteira/clientes/` | GET | Listar clientes da carteira | ❌ | ✅ |
| `/api/gestao/carteira/clientes/{id}/` | GET | Obter cliente da carteira | ❌ | ✅ |
| `/api/gestao/carteira/clientes/{id}/` | PUT | Atualizar cliente da carteira | ❌ | ✅ |
| `/api/gestao/carteira/clientes/resumo/` | GET | Resumo da carteira | ❌ | ✅ |
| `/api/gestao/carteira/aniversarios-parceria/` | GET | Aniversários de parceria | ❌ | ✅ |
| `/api/gestao/carteira/socios-aniversariantes/` | GET | Sócios aniversariantes | ❌ | ✅ |
| `/api/gestao/carteira/composicao-societaria/{id}/` | GET | Composição societária | ❌ | ✅ |
| `/api/gestao/carteira/regime-tributario/` | GET | Distribuição por regime | ❌ | ✅ |
| `/api/gestao/carteira/ramo-atividade/` | GET | Distribuição por ramo | ❌ | ✅ |
| `/api/gestao/carteira/evolucao/` | GET | Evolução da carteira | ❌ | ✅ |
| `/api/gestao/carteira/exportar/` | GET | Exportar dados | ❌ | ✅ |
| `/api/gestao/carteira/estatisticas/` | GET | Estatísticas gerais | ❌ | ✅ |

### Clientes

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/gestao/clientes/lista/` | GET | Listar clientes | ❌ | ✅ |
| `/api/gestao/clientes/lista/{id}/` | GET | Obter cliente | ❌ | ✅ |
| `/api/gestao/clientes/lista/{id}/` | PUT | Atualizar cliente | ❌ | ✅ |
| `/api/gestao/clientes/lista/resumo/` | GET | Resumo de clientes | ❌ | ✅ |
| `/api/gestao/clientes/custo-operacional/` | GET | Custo por competência | ❌ | ✅ |
| `/api/gestao/clientes/rentabilidade/` | GET | Análise de rentabilidade | ❌ | ✅ |
| `/api/gestao/clientes/simulacao-custo/` | POST | Simulação de custo | ❌ | ✅ |
| `/api/gestao/clientes/valor-hora/` | GET/PUT | Configuração valor hora | ❌ | ✅ |
| `/api/gestao/clientes/composicao-societaria/{id}/` | GET | Composição detalhada | ❌ | ✅ |
| `/api/gestao/clientes/relacionamentos/{id}/` | GET | Relacionamentos | ❌ | ✅ |
| `/api/gestao/clientes/exportar/` | GET | Exportar análise | ❌ | ✅ |
| `/api/gestao/clientes/graficos/` | GET | Dados para gráficos | ❌ | ✅ |

### Usuários

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/gestao/usuarios/lista/` | GET | Listar usuários | ❌ | ✅ |
| `/api/gestao/usuarios/lista/{id}/` | GET | Obter usuário | ❌ | ✅ |
| `/api/gestao/usuarios/lista/{id}/` | PUT | Atualizar usuário | ❌ | ✅ |
| `/api/gestao/usuarios/lista/resumo/` | GET | Resumo de usuários | ❌ | ✅ |
| `/api/gestao/usuarios/performance/` | GET | Performance por usuário | ❌ | ✅ |
| `/api/gestao/usuarios/atividades-competencia/` | GET | Atividades por competência | ❌ | ✅ |
| `/api/gestao/usuarios/atividades-cliente/` | GET | Atividades por cliente | ❌ | ✅ |
| `/api/gestao/usuarios/produtividade/` | GET | Dados de produtividade | ❌ | ✅ |
| `/api/gestao/usuarios/eficiencia/` | GET | Análise de eficiência | ❌ | ✅ |
| `/api/gestao/usuarios/atividades-modulo/` | GET | Atividades por módulo | ❌ | ✅ |
| `/api/gestao/usuarios/evolucao-modulos/` | GET | Evolução dos módulos | ❌ | ✅ |
| `/api/gestao/usuarios/comparativo-modulos/` | GET | Comparativo entre módulos | ❌ | ✅ |
| `/api/gestao/usuarios/exportar/` | GET | Exportar análise | ❌ | ✅ |
| `/api/gestao/usuarios/graficos/` | GET | Dados para gráficos | ❌ | ✅ |

### Análise do Escritório

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/gestao/escritorio/` | GET | Dados do escritório | ❌ | ✅ |
| `/api/gestao/escritorio/` | PUT | Atualizar escritório | ❌ | ✅ |
| `/api/gestao/escritorio/resumo/` | GET | Resumo do escritório | ❌ | ✅ |
| `/api/gestao/escritorio/analise-mensal/` | GET | Análise mensal detalhada | ❌ | ✅ |
| `/api/gestao/escritorio/kpis/` | GET | KPIs do escritório | ❌ | ✅ |
| `/api/gestao/escritorio/rentabilidade/` | GET | Análise de rentabilidade | ❌ | ✅ |
| `/api/gestao/escritorio/faturamento/` | GET | Análise de faturamento | ❌ | ✅ |
| `/api/gestao/escritorio/custos/` | GET | Análise de custos | ❌ | ✅ |
| `/api/gestao/escritorio/tendencias/` | GET | Análise de tendências | ❌ | ✅ |
| `/api/gestao/escritorio/insights/` | GET | Insights estratégicos | ❌ | ✅ |
| `/api/gestao/escritorio/projecoes/` | GET | Projeções futuras | ❌ | ✅ |
| `/api/gestao/escritorio/exportar/` | GET | Exportar análise | ❌ | ✅ |
| `/api/gestao/escritorio/graficos/` | GET | Dados para gráficos | ❌ | ✅ |

## 📈 Dashboards (Client)

### Dashboard Demográfico

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/dashboards/demografico/` | GET | Dados demográficos | ❌ | ✅ |
| `/api/dashboards/demografico/graficos/` | GET | Gráficos demográficos | ❌ | ✅ |
| `/api/dashboards/demografico/exportar/` | GET | Exportar dados demográficos | ❌ | ✅ |

### Dashboard Fiscal

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/dashboards/fiscal/` | GET | Dados fiscais | ❌ | ✅ |
| `/api/dashboards/fiscal/graficos/` | GET | Gráficos fiscais | ❌ | ✅ |
| `/api/dashboards/fiscal/exportar/` | GET | Exportar dados fiscais | ❌ | ✅ |

### Dashboard Contábil

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/dashboards/contabil/` | GET | Dados contábeis | ❌ | ✅ |
| `/api/dashboards/contabil/graficos/` | GET | Gráficos contábeis | ❌ | ✅ |
| `/api/dashboards/contabil/exportar/` | GET | Exportar dados contábeis | ❌ | ✅ |

### Dashboard de Indicadores

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/dashboards/indicadores/` | GET | Indicadores gerais | ❌ | ✅ |
| `/api/dashboards/indicadores/graficos/` | GET | Gráficos de indicadores | ❌ | ✅ |
| `/api/dashboards/indicadores/exportar/` | GET | Exportar indicadores | ❌ | ✅ |

### Dashboard DRE

| Endpoint | Método | Descrição | Admin | Client |
|----------|--------|-----------|-------|--------|
| `/api/dashboards/dre/` | GET | Dados DRE | ❌ | ✅ |
| `/api/dashboards/dre/graficos/` | GET | Gráficos DRE | ❌ | ✅ |
| `/api/dashboards/dre/exportar/` | GET | Exportar DRE | ❌ | ✅ |

## 🔧 Implementação nos Serviços

### Admin Services

```typescript
// packages/shared/api/services/admin.service.ts
export const adminService = {
  // Contratos
  contratos: {
    list: (filters: ContractFilters) => 
      apiClient.get('/administracao/contratos-gestk/', { params: filters }),
    create: (data: ContratoPayload) => 
      apiClient.post('/administracao/contratos-gestk/', data),
    get: (id: string) => 
      apiClient.get(`/administracao/contratos-gestk/${id}/`),
    update: (id: string, data: Partial<ContratoPayload>) => 
      apiClient.put(`/administracao/contratos-gestk/${id}/`, data),
    delete: (id: string) => 
      apiClient.delete(`/administracao/contratos-gestk/${id}/`),
    suspend: (id: string) => 
      apiClient.post(`/administracao/contratos-gestk/${id}/suspender/`),
    cancel: (id: string) => 
      apiClient.post(`/administracao/contratos-gestk/${id}/cancelar/`),
    activate: (id: string) => 
      apiClient.post(`/administracao/contratos-gestk/${id}/ativar/`),
    summary: () => 
      apiClient.get('/administracao/contratos-gestk/resumo/')
  },
  
  // Usuários
  usuarios: {
    list: (filters: UserFilters) => 
      apiClient.get('/administracao/usuarios-acesso/', { params: filters }),
    create: (data: UsuarioPayload) => 
      apiClient.post('/administracao/usuarios-acesso/', data),
    get: (id: string) => 
      apiClient.get(`/administracao/usuarios-acesso/${id}/`),
    update: (id: string, data: Partial<UsuarioPayload>) => 
      apiClient.put(`/administracao/usuarios-acesso/${id}/`, data),
    delete: (id: string) => 
      apiClient.delete(`/administracao/usuarios-acesso/${id}/`),
    activate: (id: string) => 
      apiClient.post(`/administracao/usuarios-acesso/${id}/ativar/`),
    deactivate: (id: string) => 
      apiClient.post(`/administracao/usuarios-acesso/${id}/desativar/`),
    extend: (id: string, data: { data_fim: string }) => 
      apiClient.post(`/administracao/usuarios-acesso/${id}/estender-vigencia/`, data),
    summary: () => 
      apiClient.get('/administracao/usuarios-acesso/resumo/')
  },
  
  // Contabilidades
  contabilidades: {
    list: (filters: ContabilidadeFilters) => 
      apiClient.get('/administracao/contabilidades-admin/', { params: filters }),
    get: (id: string) => 
      apiClient.get(`/administracao/contabilidades-admin/${id}/`),
    update: (id: string, data: Partial<ContabilidadePayload>) => 
      apiClient.put(`/administracao/contabilidades-admin/${id}/`, data),
    suspend: (id: string) => 
      apiClient.post(`/administracao/contabilidades-admin/${id}/suspender-por-inadimplencia/`),
    reactivate: (id: string) => 
      apiClient.post(`/administracao/contabilidades-admin/${id}/reativar/`),
    summary: () => 
      apiClient.get('/administracao/contabilidades-admin/resumo/')
  }
}
```

### Client Services

```typescript
// packages/shared/api/services/client.service.ts
export const clientService = {
  // Gestão
  gestao: {
    carteira: {
      clientes: {
        list: (filters: ClienteFilters) => 
          apiClient.get('/gestao/carteira/clientes/', { params: filters }),
        get: (id: string) => 
          apiClient.get(`/gestao/carteira/clientes/${id}/`),
        update: (id: string, data: Partial<ClientePayload>) => 
          apiClient.put(`/gestao/carteira/clientes/${id}/`, data),
        summary: () => 
          apiClient.get('/gestao/carteira/clientes/resumo/')
      },
      aniversarios: {
        parceria: (filters: DateFilters) => 
          apiClient.get('/gestao/carteira/aniversarios-parceria/', { params: filters }),
        socios: (filters: DateFilters) => 
          apiClient.get('/gestao/carteira/socios-aniversariantes/', { params: filters })
      },
      composicao: {
        societaria: (id: string) => 
          apiClient.get(`/gestao/carteira/composicao-societaria/${id}/`)
      },
      distribuicoes: {
        regimeTributario: (filters: DateFilters) => 
          apiClient.get('/gestao/carteira/regime-tributario/', { params: filters }),
        ramoAtividade: (filters: DateFilters) => 
          apiClient.get('/gestao/carteira/ramo-atividade/', { params: filters })
      },
      evolucao: (filters: DateFilters) => 
        apiClient.get('/gestao/carteira/evolucao/', { params: filters }),
      exportar: (filters: DateFilters) => 
        apiClient.get('/gestao/carteira/exportar/', { params: filters }),
      estatisticas: (filters: DateFilters) => 
        apiClient.get('/gestao/carteira/estatisticas/', { params: filters })
    },
    clientes: {
      list: (filters: ClienteFilters) => 
        apiClient.get('/gestao/clientes/lista/', { params: filters }),
      get: (id: string) => 
        apiClient.get(`/gestao/clientes/lista/${id}/`),
      update: (id: string, data: Partial<ClientePayload>) => 
        apiClient.put(`/gestao/clientes/lista/${id}/`, data),
      summary: () => 
        apiClient.get('/gestao/clientes/lista/resumo/'),
      custoOperacional: (filters: ClienteFilters) => 
        apiClient.get('/gestao/clientes/custo-operacional/', { params: filters }),
      rentabilidade: (filters: ClienteFilters) => 
        apiClient.get('/gestao/clientes/rentabilidade/', { params: filters }),
      simulacaoCusto: (data: SimulacaoCustoPayload) => 
        apiClient.post('/gestao/clientes/simulacao-custo/', data),
      valorHora: {
        get: () => 
          apiClient.get('/gestao/clientes/valor-hora/'),
        update: (data: { valor_hora: number }) => 
          apiClient.put('/gestao/clientes/valor-hora/', data)
      },
      composicao: {
        societaria: (id: string) => 
          apiClient.get(`/gestao/clientes/composicao-societaria/${id}/`),
        relacionamentos: (id: string) => 
          apiClient.get(`/gestao/clientes/relacionamentos/${id}/`)
      },
      exportar: (filters: ClienteFilters) => 
        apiClient.get('/gestao/clientes/exportar/', { params: filters }),
      graficos: (filters: ClienteFilters) => 
        apiClient.get('/gestao/clientes/graficos/', { params: filters })
    },
    usuarios: {
      list: (filters: UsuarioFilters) => 
        apiClient.get('/gestao/usuarios/lista/', { params: filters }),
      get: (id: string) => 
        apiClient.get(`/gestao/usuarios/lista/${id}/`),
      update: (id: string, data: Partial<UsuarioPayload>) => 
        apiClient.put(`/gestao/usuarios/lista/${id}/`, data),
      summary: () => 
        apiClient.get('/gestao/usuarios/lista/resumo/'),
      performance: (filters: UsuarioFilters) => 
        apiClient.get('/gestao/usuarios/performance/', { params: filters }),
      atividades: {
        competencia: (filters: UsuarioFilters) => 
          apiClient.get('/gestao/usuarios/atividades-competencia/', { params: filters }),
        cliente: (filters: UsuarioFilters) => 
          apiClient.get('/gestao/usuarios/atividades-cliente/', { params: filters }),
        modulo: (filters: UsuarioFilters) => 
          apiClient.get('/gestao/usuarios/atividades-modulo/', { params: filters })
      },
      produtividade: (filters: UsuarioFilters) => 
        apiClient.get('/gestao/usuarios/produtividade/', { params: filters }),
      eficiencia: (filters: UsuarioFilters) => 
        apiClient.get('/gestao/usuarios/eficiencia/', { params: filters }),
      evolucao: {
        modulos: (filters: UsuarioFilters) => 
          apiClient.get('/gestao/usuarios/evolucao-modulos/', { params: filters }),
        comparativo: (filters: UsuarioFilters) => 
          apiClient.get('/gestao/usuarios/comparativo-modulos/', { params: filters })
      },
      exportar: (filters: UsuarioFilters) => 
        apiClient.get('/gestao/usuarios/exportar/', { params: filters }),
      graficos: (filters: UsuarioFilters) => 
        apiClient.get('/gestao/usuarios/graficos/', { params: filters })
    },
    escritorio: {
      get: () => 
        apiClient.get('/gestao/escritorio/'),
      update: (data: EscritorioPayload) => 
        apiClient.put('/gestao/escritorio/', data),
      summary: () => 
        apiClient.get('/gestao/escritorio/resumo/'),
      analiseMensal: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/analise-mensal/', { params: filters }),
      kpis: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/kpis/', { params: filters }),
      rentabilidade: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/rentabilidade/', { params: filters }),
      faturamento: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/faturamento/', { params: filters }),
      custos: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/custos/', { params: filters }),
      tendencias: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/tendencias/', { params: filters }),
      insights: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/insights/', { params: filters }),
      projecoes: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/projecoes/', { params: filters }),
      exportar: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/exportar/', { params: filters }),
      graficos: (filters: DateFilters) => 
        apiClient.get('/gestao/escritorio/graficos/', { params: filters })
    }
  },
  
  // Dashboards
  dashboards: {
    demografico: {
      get: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/demografico/', { params: filters }),
      charts: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/demografico/graficos/', { params: filters }),
      export: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/demografico/exportar/', { params: filters })
    },
    fiscal: {
      get: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/fiscal/', { params: filters }),
      charts: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/fiscal/graficos/', { params: filters }),
      export: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/fiscal/exportar/', { params: filters })
    },
    contabil: {
      get: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/contabil/', { params: filters }),
      charts: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/contabil/graficos/', { params: filters }),
      export: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/contabil/exportar/', { params: filters })
    },
    indicadores: {
      get: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/indicadores/', { params: filters }),
      charts: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/indicadores/graficos/', { params: filters }),
      export: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/indicadores/exportar/', { params: filters })
    },
    dre: {
      get: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/dre/', { params: filters }),
      charts: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/dre/graficos/', { params: filters }),
      export: (filters: DashboardFilters) => 
        apiClient.get('/dashboards/dre/exportar/', { params: filters })
    }
  }
}
```

## 🔒 Headers de Autenticação

### Headers Obrigatórios

```typescript
// Headers enviados em todas as requisições
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'X-Contabilidade-ID': contabilidadeId,
  'Content-Type': 'application/json'
}
```

### Headers por Contexto

```typescript
// Admin
const adminHeaders = {
  ...headers,
  'X-App-Context': 'admin'
}

// Client
const clientHeaders = {
  ...headers,
  'X-App-Context': 'client'
}
```

## 📊 Filtros e Parâmetros

### Filtros Comuns

```typescript
interface BaseFilters {
  page?: number
  page_size?: number
  search?: string
  ordering?: string
}

interface ContractFilters extends BaseFilters {
  status?: 'ativo' | 'suspenso' | 'cancelado' | 'vencido'
  data_inicio?: string
  data_fim?: string
}

interface UserFilters extends BaseFilters {
  role?: string
  ativo?: boolean
  contabilidade?: string
}

interface DashboardFilters extends BaseFilters {
  periodo_inicio?: string
  periodo_fim?: string
  contabilidade?: string
  tipo_grafico?: string
}

interface DateFilters extends BaseFilters {
  data_inicio?: string
  data_fim?: string
  competencia?: string
  contabilidade_id?: string
}

interface ClienteFilters extends DateFilters {
  regime_tributario?: string
  ramo_atividade?: string
  escritorio_id?: string
  cliente_id?: string
}

interface UsuarioFilters extends DateFilters {
  usuario_id?: string
  modulo?: string
  tipo_atividade?: string
}

interface SimulacaoCustoPayload {
  cliente_id: string
  valor_hora: number
  periodo_inicio: string
  periodo_fim: string
}
```

## 🚀 Próximos Passos

1. **Implementar** serviços compartilhados
2. **Configurar** interceptors de API
3. **Implementar** cache de dados
4. **Configurar** tratamento de erros
5. **Implementar** retry automático

---

**Documento criado em**: 07/10/2025  
**Versão**: 2.0  
**Última atualização**: 17/01/2025  
**Próxima revisão**: 24/01/2025
