# 📡 Endpoints da Carteira de Clientes - Guia Completo

**Data**: 2024-2025  
**Base URL**: `http://127.0.0.1:8000`

---

## 📋 Todos os Endpoints Usados na Página

### 1️⃣ **Listar Clientes da Carteira** (Principal)

**Endpoint**: `GET /api/gestao/carteira/clientes/`

**Parâmetros Query** (opcionais):
```
?page=1
&page_size=10
&status=ATIVO
&regime_fiscal=SIMPLES_NACIONAL
&search=razao_social
```

**Retorno Esperado** (200 OK):
```json
{
  "count": 2186,
  "next": "http://127.0.0.1:8000/api/gestao/carteira/clientes/?page=2",
  "previous": null,
  "results": [
    {
      "id": "uuid-1",
      "razao_social": "Empresa A LTDA",
      "cnpj": "12.345.678/0001-90",
      "status": "ATIVO",
      "regime_fiscal": "SIMPLES_NACIONAL",
      "data_inicio": "2020-01-15",
      "inadimplente": false
    },
    ...mais clientes
  ],
  "summary": {
    "total_clientes": 2186,
    "clientes_ativos": 1550,
    "clientes_inativos": 636,
    "clientes_novos": 6,
    "clientes_sem_movimentacao": 0,
    "percentual_ativo": 70.91
  }
}
```

**Status**: ✅ Funcionando (os gráficos aparecem)  
**Problema**: Os cards ainda mostram "0"

---

### 2️⃣ **Resumo/Estatísticas da Carteira** ⭐ CRÍTICO

**Endpoint**: `GET /api/gestao/carteira/resumo/`

**Parâmetros**: Nenhum

**Retorno Esperado** (200 OK):
```json
{
  "summary": {
    "total_clientes": 2186,
    "clientes_ativos": 1550,
    "clientes_inativos": 636,
    "clientes_novos": 6,
    "clientes_sem_movimentacao": 0,
    "percentual_ativo": 70.91
  }
}
```

**Status**: ❓ **VERIFICA ISTO NO POSTMAN**  
**Problema**: Se este endpoint não retornar dados corretos, os cards não vão aparecer

---

### 3️⃣ **Categorias de Clientes**

**Endpoint**: `GET /api/gestao/carteira/categorias/`

**Parâmetros** (opcionais):
```
?status=ATIVO
&regime_fiscal=SIMPLES_NACIONAL
```

**Retorno Esperado** (200 OK):
```json
[
  {
    "id": "uuid-1",
    "nome": "Ativos",
    "status": "ativo",
    "quantidade": 1550
  },
  {
    "id": "uuid-2",
    "nome": "Inativos",
    "status": "inativo",
    "quantidade": 636
  },
  ...
]
```

**Status**: ❓ Não usado atualmente (pode ficar sem dados)

---

### 4️⃣ **Evolução Mensal da Carteira** ⭐ FUNCIONANDO

**Endpoint**: `GET /api/gestao/carteira/evolucao/`

**Parâmetros** (opcionais):
```
?meses=12
&data_inicio=2024-01-01
&data_fim=2025-01-01
```

**Retorno Esperado** (200 OK):
```json
[
  {
    "mes": "jan. de 24",
    "mês": "2024-01",
    "total_clientes": 100,
    "total_clientes_mes": 100,
    "novos_clientes": 5,
    "novos_clientes_mes": 5,
    "clientes_inativos": 2,
    "clientes_inativos_mes": 2
  },
  {
    "mes": "fev. de 24",
    "mês": "2024-02",
    "total_clientes": 120,
    "novos_clientes": 20,
    "clientes_inativos": 3
  },
  ...12 meses
]
```

**Status**: ✅ **FUNCIONANDO** (gráfico aparece)

---

### 5️⃣ **Aniversários de Parceria** (Próximos 12 Meses)

**Endpoint**: `GET /api/gestao/carteira/aniversarios-parceria/`

**Parâmetros**:
```
?meses=12
```

**Retorno Esperado** (200 OK):
```json
[
  {
    "id": "uuid-1",
    "razao_social": "Empresa A LTDA",
    "cnpj": "12.345.678/0001-90",
    "data_aniversario": "2025-01-15",
    "dias_faltando": 86,
    "mes_aniversario": "janeiro"
  },
  {
    "id": "uuid-2",
    "razao_social": "Empresa B LTDA",
    "cnpj": "98.765.432/0001-10",
    "data_aniversario": "2025-02-20",
    "dias_faltando": 122,
    "mes_aniversario": "fevereiro"
  },
  ...
]
```

**Status**: ❓ **Verificar no Postman**  
**Uso**: Card "Aniversário de Parceria" e Modal

---

### 6️⃣ **Sócios Aniversariantes** (Próximos 12 Meses)

**Endpoint**: `GET /api/gestao/carteira/socios-aniversariantes/`

**Parâmetros**:
```
?meses=12
```

**Retorno Esperado** (200 OK):
```json
[
  {
    "id": "uuid-1",
    "nome_socio": "João Silva",
    "empresa_razao_social": "Empresa A LTDA",
    "empresa_cnpj": "12.345.678/0001-90",
    "data_nascimento": "1980-03-15",
    "dias_faltando": 45,
    "mes_aniversario": "março"
  },
  ...
]
```

**Status**: ❓ **Verificar no Postman**  
**Uso**: Card "Sócios Aniversariantes" e Modal

---

### 7️⃣ **Regime Tributário - Distribuição**

**Endpoint**: `GET /api/gestao/carteira/regime-tributario/`

**Parâmetros**: Nenhum

**Retorno Esperado** (200 OK):
```json
[
  {
    "regime": "SIMPLES_NACIONAL",
    "nome": "Simples Nacional",
    "quantidade": 1100,
    "percentual": 50.32
  },
  {
    "regime": "LUCRO_PRESUMIDO",
    "nome": "Lucro Presumido",
    "quantidade": 700,
    "percentual": 32.05
  },
  {
    "regime": "LUCRO_REAL",
    "nome": "Lucro Real",
    "quantidade": 300,
    "percentual": 13.73
  },
  {
    "regime": "MEI",
    "nome": "MEI",
    "quantidade": 86,
    "percentual": 3.94
  }
]
```

**Status**: ❓ **Verificar no Postman**  
**Uso**: Gráfico "Empresas por Regime Tributário" (PieChart)

---

### 8️⃣ **Ramo de Atividade - Distribuição**

**Endpoint**: `GET /api/gestao/carteira/ramo-atividade/`

**Parâmetros**: Nenhum

**Retorno Esperado** (200 OK):
```json
[
  {
    "ramo": "Consultoria",
    "nome": "Consultoria",
    "quantidade": 450,
    "percentual": 20.59
  },
  {
    "ramo": "Tecnologia",
    "nome": "Tecnologia",
    "quantidade": 600,
    "percentual": 27.46
  },
  {
    "ramo": "Comércio",
    "nome": "Comércio",
    "quantidade": 400,
    "percentual": 18.31
  },
  {
    "ramo": "Serviços",
    "nome": "Serviços",
    "quantidade": 550,
    "percentual": 25.17
  },
  {
    "ramo": "Indústria",
    "nome": "Indústria",
    "quantidade": 186,
    "percentual": 8.51
  }
]
```

**Status**: ❓ **Verificar no Postman**  
**Uso**: Gráfico "Empresas por Ramo de Atividade" (BarChart)

---

## 🔍 Como Testar no Postman

### Passo 1: Testar Resumo (CRÍTICO PARA OS CARDS)

1. Abrir Postman
2. Criar nova requisição GET
3. URL: `http://127.0.0.1:8000/api/gestao/carteira/resumo/`
4. Headers:
   ```
   Authorization: Bearer SEU_TOKEN_AQUI
   Content-Type: application/json
   ```
5. Clicar "Send"

**Esperado**: Retorno 200 com dados do summary

---

### Passo 2: Testar Lista de Clientes

1. URL: `http://127.0.0.1:8000/api/gestao/carteira/clientes/`
2. Headers: (mesmos de cima)
3. Clicar "Send"

**Esperado**: Retorno 200 com count e results

---

### Passo 3: Testar Evolução (JÁ FUNCIONA)

1. URL: `http://127.0.0.1:8000/api/gestao/carteira/evolucao/?meses=12`
2. Headers: (mesmos de cima)
3. Clicar "Send"

**Esperado**: Retorno 200 com array de 12 meses

---

## 📊 Mapa de Qual Endpoint Alimenta Cada Componente

| Componente | Endpoint | Hook | Status |
|-----------|----------|------|--------|
| Card Ativos | `/resumo/` | `useCarteiraResumo()` | ❌ Zerando |
| Card Inativos | `/resumo/` | `useCarteiraResumo()` | ❌ Zerando |
| Card Novos | `/resumo/` | `useCarteiraResumo()` | ❌ Zerando |
| Card Inadimplentes | `/resumo/` | `useCarteiraResumo()` | ❌ Zerando |
| Gráfico Evolução | `/evolucao/` | `useCarteiraEvolucao()` | ✅ Funcionando |
| Gráfico Status | `/clientes/` | Dados derivados | ⚠️ Precisa ajuste |
| Card Aniversários | `/aniversarios-parceria/` | `useAniversariosParceria()` | ❓ |
| Card Sócios | `/socios-aniversariantes/` | `useSociosAniversariantes()` | ❓ |
| Gráfico Regime | `/regime-tributario/` | `useRegimeTributario()` | ❓ |
| Gráfico Ramo | `/ramo-atividade/` | `useRamoAtividade()` | ❓ |

---

## 🚨 Diagnóstico do Problema

### O problema é provavelmente um destes:

#### ❌ Problema 1: Token/Autenticação
Se todos os endpoints retornarem **401 Unauthorized**:
- Falta token no header
- Token expirou
- Endpoint não está autenticado

#### ❌ Problema 2: Estrutura de Resposta Diferente
Se `/resumo/` retornar:
```json
{
  "total_clientes": 2186,  // ← SEM "summary"
  "clientes_ativos": 1550
}
```

Então precisamos ajustar o hook

#### ❌ Problema 3: Endpoint Não Existe
Se retornar **404 Not Found**:
- Endpoint não implementado no backend
- URL está errada
- Caminho incorreto

#### ❌ Problema 4: CORS
Se no console aparecer "CORS error":
- Backend não permite requisições do frontend
- Configuração CORS incorreta

---

## ✅ Checklist - O Que Fazer Agora

- [ ] Abrir Postman
- [ ] Testar cada endpoint acima
- [ ] Anotar os retornos exatos
- [ ] Compartilhar comigo os retornos que NÃO correspondem ao esperado
- [ ] Especialmente o `/resumo/` e `/regime-tributario/` e `/ramo-atividade/`

---

## 💾 Collection Pronta para Postman

Se quiser, posso gerar uma collection com todos esses requests prontos para importar no Postman. Basta me confirmar!

---

**Próximo Passo**: Teste os endpoints no Postman e me compartilhe os retornos, especialmente:
1. `/api/gestao/carteira/resumo/` ← **CRÍTICO**
2. `/api/gestao/carteira/regime-tributario/` 
3. `/api/gestao/carteira/ramo-atividade/`

Assim conseguirei identificar exatamente o que está faltando! 🎯
