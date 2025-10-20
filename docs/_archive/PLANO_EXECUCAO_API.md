# Plano de Execução: Adequação da API Frontend

**Data:** 13 de Outubro de 2025
**Autor:** GitHub Copilot
**Status:** Tarefas a serem executadas

---

## Objetivo

Este documento fornece um guia técnico detalhado para a execução do `PLANO_ADEQUACAO_FRONTEND_API.md`. As tarefas estão organizadas por fase e prioridade.

---

## Fase 1: Correção e Centralização (Curto Prazo)

### Tarefa 1.1: Centralizar e Padronizar o Cliente API

**Objetivo:** Garantir que todas as chamadas à API usem uma única instância configurada do Axios.

1.  **Verificar `packages/shared/src/api/client.ts`:**
    *   Confirmar que o `baseURL` está sendo injetado a partir de variáveis de ambiente (`process.env.NEXT_PUBLIC_API_URL`).
    *   Implementar um interceptor para adicionar o token de autenticação (`Authorization: Bearer ...`) em todas as requisições, exceto nas de `Auth`.
    *   Implementar um interceptor de resposta para tratar erros comuns (ex: 401 Unauthorized, 403 Forbidden) de forma global, redirecionando para o login se necessário.

2.  **Refatorar Serviços Existentes:**
    *   Auditar todos os arquivos em `packages/shared/src/api/services/`.
    *   Garantir que cada serviço importe e utilize a instância do `api` de `client.ts` em vez de criar sua própria instância do Axios.

### Tarefa 1.2: Consolidar Endpoints de Contratos GESTK

**Objetivo:** Eliminar o uso do endpoint duplicado `/api/administracao/contratos-gestk/`.

1.  **Localizar o Serviço Responsável:**
    *   Identificar o serviço que faz chamadas para os endpoints de Contratos GESTK. Provavelmente em `packages/shared/src/api/services/admin.service.ts` ou similar.

2.  **Auditar e Substituir as URLs:**
    *   Buscar em todo o projeto por ocorrências de `/api/administracao/`.
    *   Substituir todas as chamadas para que apontem exclusivamente para `/api/gestao/superuser/contratos-gestk/`.

3.  **Verificar e Ajustar Tipagens:**
    *   Garantir que os tipos de dados (request/response) em `packages/shared/src/types/` correspondam ao endpoint consolidado.

### Tarefa 1.3: Mapear e Implementar Endpoints de `Auth`

**Objetivo:** Alinhar o `auth.service.ts` com os endpoints customizados da API.

1.  **Analisar `packages/shared/src/api/services/auth.service.ts`:**
    *   Verificar se os seguintes métodos estão implementados e corretamente tipados:
        *   `login(credentials: LoginCredentials): Promise<TokenResponse>`
        *   `logout(): Promise<void>`
        *   `getMe(): Promise<User>`
        *   `refreshToken(token: string): Promise<TokenResponse>`
    *   Assegurar que as chamadas correspondam exatamente aos endpoints:
        *   `POST /api/auth/login/`
        *   `POST /api/auth/logout/`
        *   `GET /api/auth/me/`
        *   `POST /api/auth/token/refresh/`

---

## Fase 2: Expansão de Funcionalidades (Médio Prazo)

### Tarefa 2.1: Criar Novos Serviços de API para Gestão

**Objetivo:** Implementar os serviços para os novos módulos de gestão.

1.  **Criar os Arquivos de Serviço:**
    *   Em `packages/shared/src/api/services/`, criar os seguintes arquivos:
        *   `carteira.service.ts`
        *   `clientes.service.ts`
        *   `escritorio.service.ts`
        *   `usuarios.service.ts` (se já não existir, ou ajustar para o perfil `client`)

2.  **Implementar os Métodos CRUD:**
    *   Para cada serviço, implementar os métodos básicos (listar, obter, criar, atualizar, deletar) conforme a estrutura da API do backend.
    *   Criar as tipagens correspondentes em `packages/shared/src/types/`.

### Tarefa 2.2: Integrar Novos Serviços no Frontend

**Objetivo:** Conectar os novos serviços às interfaces das aplicações.

1.  **Criar Hooks Customizados:**
    *   No diretório `apps/client/src/hooks/`, criar hooks para consumir os novos serviços (ex: `useCarteira.ts`, `useClientes.ts`).
    *   Utilizar `react-query` ou `swr` dentro dos hooks para gerenciar o estado da API (caching, revalidação, etc.).

2.  **Integrar nas Páginas:**
    *   Nas páginas correspondentes em `apps/client/src/app/(dashboard)/gestao/`, utilizar os novos hooks para buscar e exibir os dados.
    *   Implementar as ações de criar, editar e deletar, conectando-as aos formulários e botões da UI.

---

## Fase 3: Preparação para o Futuro (Longo Prazo)

### Tarefa 3.1: Estruturar o Módulo `Export`

**Objetivo:** Deixar a estrutura do frontend pronta para a futura implementação do módulo de exportação.

1.  **Criar o Serviço `export.service.ts`:**
    *   Em `packages/shared/src/api/services/`, criar o arquivo `export.service.ts`.
    *   Adicionar funções `placeholder` para as futuras funcionalidades:
        *   `exportRelatorioPDF(params: ExportParams): Promise<Blob>`
        *   `exportDadosExcel(params: ExportParams): Promise<Blob>`

2.  **Criar Tipagens Iniciais:**
    *   Em `packages/shared/src/types/`, criar o arquivo `export.types.ts` com as interfaces básicas para os parâmetros de exportação.

### Tarefa 3.2: Auditoria e Reforço da Tipagem

**Objetivo:** Garantir 100% de cobertura de tipos para a comunicação com a API.

1.  **Revisar Todos os Serviços:**
    *   Auditar cada método em cada serviço de `packages/shared/src/api/services/`.
    *   Garantir que todos os parâmetros e retornos de função estejam explicitamente tipados.
    *   Evitar o uso de `any` ou `unknown` sempre que possível.

2.  **Validar com a Documentação:**
    *   Comparar as tipagens do frontend com a documentação da API (`AUDITORIA_API_ENDPOINTS.md`) para garantir consistência.

---

## Checklist de Execução

- [ ] **Fase 1.1:** Cliente API centralizado e com interceptors.
- [ ] **Fase 1.2:** Endpoints de Contratos GESTK consolidados.
- [ ] **Fase 1.3:** Serviço de `Auth` totalmente alinhado com a API.
- [ ] **Fase 2.1:** Novos serviços de Gestão (`carteira`, `clientes`, `escritorio`, `usuarios`) criados.
- [ ] **Fase 2.2:** Novos serviços integrados nas páginas e hooks do `client-app`.
- [ ] **Fase 3.1:** Estrutura inicial para o serviço de `Export` criada.
- [ ] **Fase 3.2:** Auditoria de tipagem completa.
