# Documentação GESTK Frontend

## 📚 Índice da Documentação

Esta pasta contém toda a documentação técnica e funcional do projeto GESTK Frontend. A documentação está organizada por categorias para facilitar a navegação e consulta.

## 🏗️ Documentação Técnica

### [Arquitetura Compartilhada](./ARQUITETURA_COMPARTILHADA.md)
Documentação completa da arquitetura do monorepo, estrutura de packages, componentes compartilhados e integração entre aplicações.

**Conteúdo:**
- Estrutura do monorepo
- Packages compartilhados (@gestk/shared, @gestk/ui)
- Stack tecnológica
- Integração com backend
- Componentes reutilizáveis
- Design system

### [Guia de Desenvolvimento](./DEVELOPMENT_GUIDE.md)
Guia completo para desenvolvedores, incluindo configuração do ambiente, padrões de código e melhores práticas.

**Conteúdo:**
- Configuração do ambiente
- Estrutura de pastas
- Padrões de código (TypeScript, React, Tailwind)
- Scripts de desenvolvimento
- Testes
- Fluxo de desenvolvimento
- Debugging

### [Integração com Backend](./INTEGRACAO_BACKEND.md)
Documentação detalhada sobre como integrar o frontend com o backend GESTK.

**Conteúdo:**
- Configuração de APIs
- Sistema de autenticação
- Mapeamento de endpoints
- Tratamento de dados
- Cache e otimização
- Tratamento de erros

### [Guia de Deploy](./DEPLOYMENT_GUIDE.md)
Instruções completas para deploy em diferentes ambientes, desde desenvolvimento até produção.

**Conteúdo:**
- Deploy local
- Deploy com Docker
- Deploy na Vercel
- Deploy no AWS
- Configuração de produção
- Monitoramento e logs
- Segurança

## 📊 Documentação de Módulos

### [Módulo Gestão](./MODULO_GESTAO.md)
Documentação completa do módulo de gestão da aplicação Client.

**Conteúdo:**
- Carteira de Clientes
- Detalhes de Clientes
- Gestão de Usuários
- Análise do Escritório
- Componentes reutilizáveis
- Dados mock implementados

### [Módulo Dashboards](./MODULO_DASHBOARDS.md)
Documentação completa do módulo de dashboards da aplicação Client.

**Conteúdo:**
- Dashboard Demográfico
- Dashboard Fiscal
- Dashboard Contábil
- Dashboard Indicadores
- Dashboard DRE
- Componentes de visualização

### [Sistema de Relatórios](./SISTEMA_RELATORIOS.md)
Documentação do sistema de relatórios automatizados.

**Conteúdo:**
- Dashboard de relatórios
- Criação de relatórios
- Gestão de relatórios
- Templates
- Histórico e execuções
- Sistema de notificações

## 🔧 Documentação de Configuração

### [Mapeamento de Endpoints](./ENDPOINTS_MAPPING.md)
Mapeamento completo dos endpoints da API e suas respectivas implementações no frontend.

**Conteúdo:**
- Endpoints de autenticação
- Endpoints de gestão
- Endpoints de dashboards
- Endpoints de relatórios
- Endpoints de exportação

### [Plano de Implementação](./PLANO_IMPLEMENTACAO_MONOREPO.md)
Plano detalhado de implementação do monorepo e suas funcionalidades.

**Conteúdo:**
- Fases de implementação
- Cronograma de desenvolvimento
- Recursos necessários
- Critérios de aceitação

## 🚀 Guias Rápidos

### Início Rápido
```bash
# Clone e instalação
git clone https://github.com/gestk/gestk-frontend.git
cd gestk-frontend
npm install

# Configuração
cp apps/admin/.env.example apps/admin/.env.local
cp apps/client/.env.example apps/client/.env.local

# Execução
npm run dev
```

### URLs de Desenvolvimento
- **Admin**: http://localhost:3000
- **Client**: http://localhost:3001

### Scripts Principais
```bash
npm run dev              # Desenvolvimento
npm run build            # Build de produção
npm run lint             # Linting
npm run test             # Testes
```

## 📋 Checklist de Desenvolvimento

### Antes de Começar
- [ ] Node.js 18+ instalado
- [ ] Repositório clonado
- [ ] Dependências instaladas
- [ ] Variáveis de ambiente configuradas
- [ ] VS Code com extensões recomendadas

### Durante o Desenvolvimento
- [ ] Seguir padrões de código estabelecidos
- [ ] Escrever testes para novas funcionalidades
- [ ] Documentar mudanças significativas
- [ ] Executar linting e type-check
- [ ] Testar em diferentes dispositivos

### Antes do Commit
- [ ] Testes passando
- [ ] Linting sem erros
- [ ] Type-check sem erros
- [ ] Código formatado
- [ ] Mensagem de commit descritiva

## 🔍 Resolução de Problemas

### Problemas Comuns

#### Erro de Build
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Erro de TypeScript
```bash
# Verificar tipos
npm run type-check

# Regenerar tipos
npm run build
```

#### Erro de Linting
```bash
# Corrigir automaticamente
npm run lint:fix

# Verificar manualmente
npm run lint
```

### Logs e Debug
- **Console do navegador**: Para erros de runtime
- **Terminal**: Para erros de build e desenvolvimento
- **Network Tab**: Para problemas de API
- **React DevTools**: Para debugging de componentes

## 📞 Suporte

### Recursos de Ajuda
- **GitHub Issues**: [github.com/gestk/gestk-frontend/issues](https://github.com/gestk/gestk-frontend/issues)
- **Documentação**: Esta pasta de documentação
- **Código Fonte**: Comentários inline no código
- **Exemplos**: Componentes de exemplo em `/examples`

### Contato
- **Email**: dev@gestk.com
- **Slack**: #gestk-frontend
- **Discord**: [discord.gg/gestk](https://discord.gg/gestk)

## 📈 Roadmap da Documentação

### Próximas Atualizações
- [ ] **Guia de Contribuição**: Como contribuir com o projeto
- [ ] **API Reference**: Documentação completa da API
- [ ] **Component Storybook**: Documentação interativa de componentes
- [ ] **Guia de Performance**: Otimizações e métricas
- [ ] **Guia de Acessibilidade**: Padrões de a11y
- [ ] **Guia de Testes**: Estratégias de teste completas

### Melhorias Planejadas
- [ ] **Busca na Documentação**: Sistema de busca interno
- [ ] **Exemplos Interativos**: CodePen/CodeSandbox integrados
- [ ] **Vídeos Tutoriais**: Guias em vídeo
- [ ] **Tradução**: Documentação em inglês
- [ ] **Versionamento**: Controle de versões da documentação

## 📊 Funcionalidades Específicas

### [Funcionalidades Filtros Clientes](./FUNCIONALIDADES_FILTROS_CLIENTES.md)
Documentação completa do sistema de filtros avançados e simulação individual por cliente.

**Conteúdo:**
- Sistema de filtros por empresa e escritório
- Simulação de custo individual por cliente
- Análise de impacto e tendências
- Recomendações para justificativa de aumentos
- Gráficos específicos por cliente
- Ferramentas de análise granular

---

**Documentação GESTK Frontend** - Atualizada em 2024-12-15

Para sugestões ou melhorias na documentação, abra uma issue no repositório ou entre em contato com a equipe de desenvolvimento.
