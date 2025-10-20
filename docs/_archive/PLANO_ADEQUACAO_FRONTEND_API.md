# Planejamento de Adequação da API Frontend

**Data:** 13 de Outubro de 2025
**Autor:** GitHub Copilot
**Baseado em:** `AUDITORIA_API_ENDPOINTS.md`

---

## 1. Objetivo

Este documento detalha o plano estratégico para alinhar o consumo de APIs no projeto `gestk-frontend` com as descobertas da auditoria da API do backend. O objetivo é corrigir inconsistências, centralizar a lógica de comunicação e preparar o frontend para futuras expansões, garantindo um código mais limpo, manutenível e escalável.

---

## 2. Análise das Recomendações da Auditoria

A auditoria da API backend apontou três problemas principais que impactam o frontend:

1.  **Duplicação de Endpoints:** O endpoint para gerenciar "Contratos Gestk" está duplicado em `/api/gestao/superuser/contratos-gestk/` e `/api/administracao/contratos-gestk/`. Isso pode levar a inconsistências no frontend se ambos forem utilizados.
2.  **Documentação Incompleta:**
    *   Os endpoints customizados de `Auth` (`/login`, `/me`, `/logout`) não estão bem documentados.
    *   Novos módulos de `Gestão` (`/carteira`, `/clientes`, `/usuarios`, `/escritorio`) estão implementados no backend, mas ainda não foram mapeados e consumidos pelo frontend.
3.  **Módulo `Export` Não Implementado:** A funcionalidade de exportação de dados (PDF, Excel) está planejada no backend, mas ainda não foi implementada. O frontend precisa se preparar para consumir esses futuros endpoints.

---

## 3. Estratégia de Adequação do Frontend

Para resolver os pontos levantados, a adequação do frontend será dividida em três fases:

### Fase 1: Correção e Centralização (Curto Prazo)

O foco desta fase é resolver as inconsistências atuais e garantir que o frontend utilize uma base de comunicação com a API sólida e centralizada.

*   **Ação 1.1: Centralizar a Lógica de API:** Garantir que todas as chamadas de API passem por um cliente Axios centralizado, localizado em `packages/shared/src/api/client.ts`. Isso padroniza a injeção de tokens, o tratamento de erros e a configuração de base URL.
*   **Ação 1.2: Consolidar Endpoints Duplicados:** Padronizar o uso dos endpoints no frontend.
    *   **Decisão:** O frontend passará a utilizar **exclusivamente** a rota `/api/gestao/superuser/contratos-gestk/`.
    *   **Tarefa:** Auditar o código do `admin-app` para encontrar e substituir qualquer uso de `/api/administracao/` pelo endpoint consolidado.
*   **Ação 1.3: Mapear e Implementar Endpoints de `Auth`:** Criar ou ajustar o serviço `auth.service.ts` em `packages/shared/src/api/services/` para refletir corretamente os endpoints customizados de autenticação (`login`, `logout`, `me`).

### Fase 2: Expansão de Funcionalidades (Médio Prazo)

Com a base corrigida, o foco se volta para a implementação das novas funcionalidades que o backend já oferece.

*   **Ação 2.1: Criar Novos Serviços de API:** Desenvolver os serviços para os módulos de gestão que ainda não foram mapeados no frontend.
    *   `carteira.service.ts`
    *   `clientes.service.ts`
    *   `escritorio.service.ts`
    *   `usuarios.service.ts` (para o perfil `client`)
*   **Ação 2.2: Integrar os Novos Serviços:** Conectar os novos serviços aos componentes e hooks correspondentes nas aplicações `admin` e `client`, habilitando as funcionalidades nas interfaces.

### Fase 3: Preparação para o Futuro (Longo Prazo)

Esta fase visa preparar o terreno para funcionalidades futuras e melhorar a robustez do código.

*   **Ação 3.1: Estruturar o Módulo `Export`:** Criar o arquivo de serviço `export.service.ts` em `packages/shared/src/api/services/`. Embora a API ainda não esteja pronta, a estrutura no frontend já pode ser criada para facilitar a implementação futura.
*   **Ação 3.2: Tipagem Completa:** Garantir que todos os `payloads` de requisição e resposta da API estejam devidamente tipados no diretório `packages/shared/src/types/`, melhorando a segurança e a previsibilidade do código.

---

## 4. Plano de Execução Proposto

Um plano de execução técnico, com o passo a passo da implementação, será criado em um documento separado (`PLANO_EXECUCAO_API.md`) para guiar o desenvolvimento.

**Conclusão:** Ao seguir este planejamento, o `gestk-frontend` estará totalmente alinhado com a API do backend, corrigindo dívidas técnicas e estabelecendo uma base sólida para o crescimento futuro do projeto.
