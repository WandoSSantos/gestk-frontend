# 📋 PLANO DE INTEGRAÇÃO BACKEND - CARTEIRA DE CLIENTES

**Data**: 21/10/2025  
**Status**: 🚀 Em Execução  
**Objetivo**: Substituir mocks pelos endpoints reais do backend

---

## 🎯 RESUMO EXECUTIVO

Temos toda a estrutura pronta:
- ✅ Types definidos em `packages/shared`
- ✅ API Service criado (`gestaoService`)
- ✅ React Query Hooks configurados
- ✅ Componentes construídos
- ✅ Endpoints documentados

**PRÓXIMO PASSO**: Substituir os mocks pelos endpoints reais no hook `useCarteira`

---

## 📊 STATUS ATUAL

### Hooks Existentes
```
packages/shared/src/hooks/useCarteira.ts
├── useCarteiraClientes() ⚠️ Parcial (usa mock data de fallback)
├── useCarteiraCliente(id) ⚠️ Incompleto (sem endpoint individual)
├── useCarteiraResumo() ⚠️ Sem endpoint específico
├── useCarteiraEvolucao() ⚠️ Sem implementação
├── useCarteiraAniversarios() ⚠️ Sem implementação
└── useUpdateCarteiraCliente() ⚠️ Mutation não finalizada
```

### API Service
```
packages/shared/src/api/services/gestao.service.ts
├── carteira.listar() ✅ Implementado
├── carteira.categorias() ✅ Implementado
├── carteira.evolucao() ✅ Implementado
├── carteira.exportar() ✅ Implementado
└── ❌ Faltam endpoints específicos do backend
```

### Páginas (Client)
```
apps/client/src/app/(dashboard)/gestao/carteira/
├── page.tsx ✅ Existe, mas usa mocks
└── [id]/page.tsx ⚠️ Precisa criar/completar
```

---

## 🔌 ENDPOINTS A INTEGRAR

### 1. **Carteira - Listar Clientes**
```
GET /api/gestao/carteira/clientes/
Query Params: page, page_size, search, status, regime_fiscal, ramo_atividade

Response:
{
  "count": 150,
  "next": "...",
  "previous": null,
  "results": [
    {
      "id": "...",
      "razao_social": "...",
      "cnpj": "...",
      "regime_fiscal": "SIMPLES_NACIONAL",
      "ramo_atividade": "...",
      "status_cliente": "ativo",
      "data_abertura": "2020-01-15",
      "data_inicio_contrato": "2020-02-01",
      "tempo_contrato_meses": 48,
      "ultima_movimentacao": "2025-10-20"
    }
  ]
}

✅ Status: INTEGRADO em gestaoService.carteira.listar()
❌ Falta: Teste com backend real
```

### 2. **Carteira - Cliente Individual**
```
GET /api/gestao/carteira/clientes/{id}/

Response:
{
  "id": "...",
  "razao_social": "...",
  "cnpj": "...",
  ... (todos os campos de CarteiraCliente)
  "socio_majoritario": {
    "nome": "...",
    "cpf": "...",
    "participacao_percentual": 100,
    "qualificacao": "..."
  },
  "endereco": {...},
  "contatos": [...],
  "custo_cliente": {...},
  "ultimas_atividades": [...]
}

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.detalhes(id)
```

### 3. **Carteira - Resumo/Estatísticas**
```
GET /api/gestao/carteira/resumo/

Response:
{
  "total_clientes": 150,
  "clientes_ativos": 145,
  "clientes_inativos": 5,
  "novos_clientes_mes": 3,
  "clientes_cancelados_mes": 1,
  "faturamento_total": 50000.00,
  "faturamento_medio_por_cliente": 333.33,
  "inadimplentes": 2,
  "inadimplencia_percentual": 1.33
}

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.resumo()
```

### 4. **Carteira - Evolução Mensal**
```
GET /api/gestao/carteira/evolucao/
Query Params: meses=12 (padrão)

Response:
[
  {
    "mes": "2025-10",
    "total_clientes": 150,
    "novos_clientes": 3,
    "clientes_inativos": 2,
    "faturamento": 5000.00
  },
  ...
]

⚠️ Status: PARCIALMENTE IMPLEMENTADO
📌 Ação: Validar resposta real do backend
```

### 5. **Carteira - Aniversários de Parceria**
```
GET /api/gestao/carteira/aniversarios-parceria/
Query Params: meses=12 (opcional)

Response:
[
  {
    "id": "...",
    "razao_social": "...",
    "cnpj": "...",
    "data_inicio_contrato": "2020-10-15",
    "anos_contrato": 5,
    "status_cliente": "ativo"
  }
]

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.aniversarios()
```

### 6. **Carteira - Sócios Aniversariantes**
```
GET /api/gestao/carteira/socios-aniversariantes/
Query Params: meses=12 (opcional)

Response:
[
  {
    "id": "...",
    "cliente_razao_social": "...",
    "cliente_cnpj": "...",
    "socio_nome": "...",
    "socio_cpf": "...",
    "data_nascimento": "1980-10-15",
    "idade": 45,
    "participacao_percentual": 50
  }
]

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.sociosAniversariantes()
```

### 7. **Carteira - Composição Societária**
```
GET /api/gestao/carteira/composicao-societaria/{id}/

Response:
[
  {
    "nome": "...",
    "cpf": "...",
    "qualificacao": "...",
    "participacao_percentual": 50,
    "data_nascimento": "1980-10-15"
  },
  ...
]

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.composicaoSocietaria(id)
```

### 8. **Carteira - Distribuição Regime Tributário**
```
GET /api/gestao/carteira/regime-tributario/

Response:
[
  {
    "regime": "SIMPLES_NACIONAL",
    "quantidade": 80,
    "percentual": 53.33,
    "faturamento_total": 25000.00
  },
  {
    "regime": "LUCRO_PRESUMIDO",
    "quantidade": 50,
    "percentual": 33.33,
    "faturamento_total": 20000.00
  },
  {
    "regime": "LUCRO_REAL",
    "quantidade": 20,
    "percentual": 13.33,
    "faturamento_total": 5000.00
  }
]

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.regimeTributario()
```

### 9. **Carteira - Distribuição Ramo de Atividade**
```
GET /api/gestao/carteira/ramo-atividade/

Response:
[
  {
    "ramo": "Consultoria",
    "quantidade": 45,
    "percentual": 30.0,
    "faturamento_total": 15000.00
  },
  ...
]

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.ramoAtividade()
```

### 10. **Carteira - Atualizar Cliente**
```
PUT /api/gestao/carteira/clientes/{id}/

Request Body:
{
  "razao_social": "...",
  "regime_fiscal": "...",
  "ramo_atividade": "...",
  ...
}

Response: ClienteDetalhado

❌ Status: NÃO IMPLEMENTADO
📌 Ação: Criar método em gestaoService.carteira.atualizar(id, data)
```

---

## 📝 TAREFAS POR PRIORIDADE

### ⚡ PRIORIDADE 1 - LISTAGEM BASE (HOJE)

#### Tarefa 1.1: Completar API Service
**Arquivo**: `packages/shared/src/api/services/gestao.service.ts`

```typescript
// Adicionar ao objeto carteira:
detalhes: (id: string) =>
  apiClient.get<ClienteDetalhado>(`/gestao/carteira/clientes/${id}/`),

resumo: () =>
  apiClient.get('/gestao/carteira/resumo/'),

aniversarios: (meses?: number) =>
  apiClient.get('/gestao/carteira/aniversarios-parceria/', {
    params: meses ? { meses } : {}
  }),

sociosAniversariantes: (meses?: number) =>
  apiClient.get('/gestao/carteira/socios-aniversariantes/', {
    params: meses ? { meses } : {}
  }),

composicaoSocietaria: (clienteId: string) =>
  apiClient.get(`/gestao/carteira/composicao-societaria/${clienteId}/`),

regimeTributario: () =>
  apiClient.get('/gestao/carteira/regime-tributario/'),

ramoAtividade: () =>
  apiClient.get('/gestao/carteira/ramo-atividade/'),

atualizar: (id: string, data: Partial<CarteiraCliente>) =>
  apiClient.put(`/gestao/carteira/clientes/${id}/`, data),
```

#### Tarefa 1.2: Criar/Atualizar React Query Hooks
**Arquivo**: `packages/shared/src/hooks/useCarteira.ts`

- ✅ useCarteiraClientes() - Apenas validar
- ❌ useCarteiraCliente(id) - Usar novo método detalhes()
- ❌ useCarteiraResumo() - Implementar com novo endpoint
- ❌ useCarteiraEvolucao() - Validar e completar
- ❌ useCarteiraAniversarios() - Implementar novo
- ❌ useCarteiraSociosAniversariantes() - Implementar novo
- ❌ useCarteiraComposicaoSocietaria() - Implementar novo
- ❌ useCarteiraRegimeTributario() - Implementar novo
- ❌ useCarteiraRamoAtividade() - Implementar novo
- ❌ useUpdateCarteiraCliente() - Mutation novo

#### Tarefa 1.3: Atualizar Página Principal
**Arquivo**: `apps/client/src/app/(dashboard)/gestao/carteira/page.tsx`

- Remover mocks (mockAniversarioParceria, mockSociosAniversariantes, etc)
- Usar hooks reais
- Remover fallbacks de dados
- Adicionar tratamento de erros

### ⚡ PRIORIDADE 2 - DETALHES E ANÁLISE (PRÓXIMO)

#### Tarefa 2.1: Criar/Completar Página de Detalhes
**Arquivo**: `apps/client/src/app/(dashboard)/gestao/carteira/[id]/page.tsx`

- Usar `useCarteiraCliente(id)`
- Exibir composição societária
- Exibir histórico de atividades
- Formulário de edição

#### Tarefa 2.2: Componentes de Detalhes
**Criar em**: `apps/client/src/components/carteira/`

```
ClienteDetailCard.tsx
ComposicaoSocietariaTable.tsx
AtividadesHistorico.tsx
EditClienteForm.tsx
```

### ⚡ PRIORIDADE 3 - ANÁLISES AVANÇADAS (DEPOIS)

#### Tarefa 3.1: Página de Análise Detalhada
**Arquivo**: `apps/client/src/app/(dashboard)/gestao/carteira/analise/page.tsx`

- Gráficos avançados (Recharts)
- Filtros complexos
- Exportação de dados

#### Tarefa 3.2: Endpoints Complementares
- Evolução detalhada por período
- Estatísticas customizadas
- Relatórios

---

## 🚀 PLANO DE EXECUÇÃO

### FASE 1: API Service (30 min)
```
1. Abrir gestao.service.ts
2. Adicionar 8 novos métodos ao objeto carteira
3. Validar imports de tipos
4. Teste local com curl/Postman
```

### FASE 2: React Query Hooks (1 hora)
```
1. Abrir useCarteira.ts
2. Refatorar hooks existentes
3. Criar hooks novos
4. Adicionar tratamento de erros
5. Adicionar loading states
```

### FASE 3: Integração em Componentes (1 hora)
```
1. Atualizar carteira/page.tsx
2. Remover mocks
3. Conectar hooks reais
4. Testar com backend
5. Validar filtros e paginação
```

### FASE 4: Página de Detalhes (1 hora)
```
1. Criar [id]/page.tsx
2. Implementar componentes de detalhe
3. Testar navegação
4. Validar dados
```

---

## 📂 ARQUIVOS A MODIFICAR

```
packages/shared/src/
├── api/
│   ├── services/gestao.service.ts ⭐ MODIFICAR
│   └── types/client.types.ts (OK - não mexer)
└── hooks/
    └── useCarteira.ts ⭐ MODIFICAR

apps/client/src/
├── app/(dashboard)/gestao/carteira/
│   ├── page.tsx ⭐ MODIFICAR
│   ├── [id]/page.tsx ⭐ CRIAR
│   └── ...
└── components/
    └── carteira/ ⭐ CRIAR se necessário
```

---

## 🧪 TESTES POR FASE

### Teste 1: API Service
```bash
# Testar se métodos retornam as respostas esperadas
npm test -- gestao.service.ts
```

### Teste 2: React Hooks
```bash
# Testar se hooks executam queries corretamente
npm test -- useCarteira.ts
```

### Teste 3: E2E
```bash
# Testar fluxo completo na aplicação
npm run dev
# Navegar até /gestao/carteira
# Validar listagem, filtros, detalhes
```

---

## ⚠️ PONTOS DE ATENÇÃO

1. **Paginação**: Backend retorna `count`, `next`, `previous`, `results`
   - Frontend espera `PaginatedResponse` do tipo correto

2. **Filtros**: Validar nomes de query params no backend
   - `search` vs `q` vs `nome`
   - `status` vs `status_cliente`

3. **Formato de datas**: Backend retorna ISO (2025-10-21)
   - Frontend já trata com `format()` de date-fns

4. **Enums**: 
   - `regime_fiscal`: SIMPLES_NACIONAL | LUCRO_PRESUMIDO | LUCRO_REAL
   - `status_cliente`: ativo | inativo | novo | sem_movimentacao

5. **Erros**: Tratar respostas 401, 403, 404, 500

6. **Cache**: React Query cache pode estar desatualizado
   - Usar `staleTime` e `gcTime` apropriados

---

## ✅ CHECKLIST DE VALIDAÇÃO

- [ ] API Service atualizado com todos os novos métodos
- [ ] React Query Hooks refatorados
- [ ] Mocks removidos da página principal
- [ ] Listagem funciona com backend real
- [ ] Filtros funcionam corretamente
- [ ] Paginação funciona
- [ ] Página de detalhes criada
- [ ] Formulário de edição funciona
- [ ] Gráficos funcionam com dados reais
- [ ] Tratamento de erros implementado
- [ ] Loading states corretos
- [ ] Cache/refetch funcionando
- [ ] E2E testado

---

## 📌 PRÓXIMAS ETAPAS

1. **Imediatamente**: Executar FASE 1 e FASE 2
2. **Hoje**: Executar FASE 3
3. **Próximas horas**: Executar FASE 4
4. **Validação**: Testar cada fase com backend real

---

**Criado em**: 21/10/2025  
**Versão**: 1.0  
**Status**: 🚀 PRONTO PARA AÇÃO
