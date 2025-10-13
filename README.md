# GESTK Frontend - Sistema de Gestão Contábil

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-1.10.12-EF4444)](https://turbo.build/)

## 📋 Visão Geral

O **GESTK Frontend** é um sistema completo de gestão contábil desenvolvido em **Next.js 15** com arquitetura **monorepo**. O sistema oferece duas aplicações principais:

- **Admin**: Painel administrativo para gestão de contratos, usuários e configurações
- **Client**: Interface do cliente com módulos de gestão e dashboards analíticos

## 🚀 Funcionalidades Implementadas

### 🏢 Aplicação Admin (`apps/admin`)
- ✅ **Gestão de Contratos**: CRUD completo de contratos
- ✅ **Gestão de Usuários**: Administração de usuários e permissões
- ✅ **Gestão de Contabilidades**: Configuração de entidades contábeis
- ✅ **Billing**: Sistema de cobrança e faturamento
- ✅ **API Testing**: Interface para testes de conectividade
- ✅ **Design System**: Interface moderna e responsiva

### 👥 Aplicação Client (`apps/client`)

#### 📊 Módulo Gestão
- ✅ **Carteira de Clientes**: Gestão completa da carteira com categorização
- ✅ **Detalhes de Clientes**: Visualização detalhada por competência
- ✅ **Filtros Avançados**: Busca por empresa, CNPJ e escritório de contabilidade
- ✅ **Simulação Individual**: Análise de custo por cliente com valor hora editável
- ✅ **Análise de Impacto**: Métricas e recomendações para justificar aumentos
- ✅ **Gestão de Usuários**: Controle de atividades e produtividade
- ✅ **Análise do Escritório**: KPIs e indicadores de performance

#### 📈 Módulo Dashboards
- ✅ **Dashboard Demográfico**: Análise de colaboradores e turnover
- ✅ **Dashboard Fiscal**: Faturamento, impostos e geolocalização
- ✅ **Dashboard Contábil**: Indicadores contábeis e evolução financeira
- ✅ **Dashboard Indicadores**: KPIs financeiros e operacionais
- ✅ **Dashboard DRE**: Demonstração de resultados e análises

#### 🔧 Funcionalidades Gerais
- ✅ **Relatórios Automatizados**: Sistema de agendamento e exportação
- ✅ **Configurações**: Painel completo de configurações do sistema
- ✅ **Exportação**: PDF, Excel e CSV para todos os módulos
- ✅ **Filtros Avançados**: Sistema de filtros globais e específicos
- ✅ **Simulação de Custos**: Valor hora editável com recálculo automático
- ✅ **Análise de Tendências**: Crescimento/declínio dos últimos 3 meses
- ✅ **Recomendações Inteligentes**: Sugestões para justificar aumentos
- ✅ **Gráficos Interativos**: Visualizações com Recharts
- ✅ **Tabelas Dinâmicas**: Componentes reutilizáveis com paginação

## 🏗️ Arquitetura

### Monorepo Structure
```
gestk-frontend/
├── apps/
│   ├── admin/          # Aplicação administrativa
│   └── client/         # Aplicação do cliente
├── packages/
│   ├── shared/         # Utilitários e serviços compartilhados
│   └── ui/             # Design system e componentes
├── docs/               # Documentação do projeto
└── turbo.json          # Configuração do Turborepo
```

### Stack Tecnológica

#### Frontend
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de interface
- **Recharts** - Biblioteca de gráficos
- **React Hook Form + Zod** - Formulários e validação
- **TanStack Table** - Tabelas avançadas

#### Monorepo
- **Turborepo** - Build system e cache
- **npm workspaces** - Gerenciamento de dependências
- **ESLint + Prettier** - Linting e formatação

#### Design System
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones
- **CSS Variables** - Sistema de cores customizável

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- npm 9+

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/gestk/gestk-frontend.git
cd gestk-frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Copie os arquivos de exemplo
cp apps/admin/.env.example apps/admin/.env.local
cp apps/client/.env.example apps/client/.env.local

# Configure as variáveis necessárias
```

4. **Execute o projeto**
```bash
# Desenvolvimento (todas as aplicações)
npm run dev

# Apenas admin
npm run dev:admin

# Apenas client
npm run dev:client
```

### URLs de Desenvolvimento
- **Admin**: http://localhost:3000
- **Client**: http://localhost:3001

## 📚 Documentação

### Documentação Técnica
- [Arquitetura Compartilhada](./docs/ARQUITETURA_COMPARTILHADA.md)
- [Guia de Desenvolvimento](./docs/DEVELOPMENT_GUIDE.md)
- [Mapeamento de Endpoints](./docs/ENDPOINTS_MAPPING.md)
- [Plano de Implementação](./docs/PLANO_IMPLEMENTACAO_MONOREPO.md)

### Documentação de Integração
- [Integração com Backend](./docs/INTEGRACAO_BACKEND.md)
- [Guia de Deploy](./docs/DEPLOYMENT_GUIDE.md)
- [Configuração de Produção](./docs/PRODUCAO_CONFIG.md)

### Documentação de Módulos
- [Módulo Gestão](./docs/MODULO_GESTAO.md)
- [Módulo Dashboards](./docs/MODULO_DASHBOARDS.md)
- [Sistema de Relatórios](./docs/SISTEMA_RELATORIOS.md)

## 🔧 Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev              # Executa todas as aplicações
npm run dev:admin        # Apenas aplicação admin
npm run dev:client       # Apenas aplicação client
```

### Build
```bash
npm run build            # Build de todas as aplicações
npm run build:admin      # Build apenas admin
npm run build:client     # Build apenas client
```

### Linting e Formatação
```bash
npm run lint             # Executa ESLint
npm run lint:fix         # Corrige problemas de linting
npm run format           # Formata código com Prettier
```

### Testes
```bash
npm run test             # Executa todos os testes
npm run test:watch       # Modo watch
npm run test:coverage    # Com cobertura
```

## 🎨 Design System

### Componentes Disponíveis
- **Layout**: Card, Dialog, Sheet, Tabs
- **Formulários**: Button, Input, Select, Switch, Label
- **Dados**: Table, Badge, Avatar
- **Feedback**: Alert, Toast, Loading
- **Navegação**: Breadcrumb, Pagination

### Tema e Cores
```css
/* Cores principais */
--primary: 221 83% 53%    /* Azul principal */
--secondary: 210 40% 98%  /* Cinza claro */
--accent: 142 76% 36%     /* Verde */
--destructive: 0 84% 60%  /* Vermelho */
```

## 📊 Módulos Implementados

### Gestão de Clientes
- **Carteira**: Categorização e evolução mensal
- **Detalhes**: Informações completas por competência
- **Filtros**: Regime fiscal, ramo de atividade, status
- **Exportação**: PDF, Excel, CSV

### Dashboards Analíticos
- **Demográfico**: Análise de colaboradores
- **Fiscal**: Faturamento e impostos
- **Contábil**: Indicadores financeiros
- **Indicadores**: KPIs operacionais
- **DRE**: Demonstração de resultados

### Sistema de Relatórios
- **Agendamento**: Relatórios automáticos
- **Templates**: Modelos pré-definidos
- **Exportação**: Múltiplos formatos
- **Histórico**: Controle de execuções

## 🔌 Integração com Backend

### Endpoints Implementados
- **Autenticação**: Login, logout, refresh token
- **Gestão**: Clientes, usuários, contratos
- **Dashboards**: Dados analíticos
- **Relatórios**: Geração e agendamento
- **Exportação**: PDF, Excel, CSV

### Configuração de API
```typescript
// Configuração base
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = 'v1'

// Headers padrão
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
}
```

## 🚀 Deploy e Produção

### Variáveis de Ambiente
```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.gestk.com
NEXT_PUBLIC_API_VERSION=v1

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://app.gestk.com

# Database (se aplicável)
DATABASE_URL=postgresql://...
```

### Docker
```bash
# Build da imagem
docker build -t gestk-frontend .

# Executar container
docker run -p 3000:3000 gestk-frontend
```

## 🤝 Contribuição

### Fluxo de Desenvolvimento
1. Fork do repositório
2. Criação de branch feature
3. Implementação e testes
4. Pull request para main

### Padrões de Código
- **TypeScript**: Tipagem obrigatória
- **ESLint**: Configuração padrão
- **Prettier**: Formatação automática
- **Conventional Commits**: Padrão de commits

## 📈 Roadmap

### Próximas Funcionalidades
- [ ] **Integração Real**: Conexão com backend GESTK
- [ ] **Autenticação Avançada**: 2FA, SSO
- [ ] **Notificações**: Sistema de alertas em tempo real
- [ ] **Mobile App**: Aplicativo nativo
- [ ] **Analytics**: Métricas de uso e performance
- [ ] **Internacionalização**: Suporte a múltiplos idiomas

### Melhorias Planejadas
- [ ] **Performance**: Otimizações de carregamento
- [ ] **Acessibilidade**: Melhorias de a11y
- [ ] **Testes**: Cobertura completa
- [ ] **Documentação**: Guias de usuário

## 📞 Suporte

### Contato
- **Email**: suporte@gestk.com
- **Documentação**: [docs.gestk.com](https://docs.gestk.com)
- **Issues**: [GitHub Issues](https://github.com/gestk/gestk-frontend/issues)

### Recursos
- [Changelog](./CHANGELOG.md)
- [FAQ](./docs/FAQ.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)

## 📄 Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

---

**GESTK Frontend** - Desenvolvido com ❤️ para revolucionar a gestão contábil