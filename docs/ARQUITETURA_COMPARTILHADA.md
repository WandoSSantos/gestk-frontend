# Arquitetura Compartilhada - GESTK Monorepo

## 📋 Visão Geral

O **GESTK Frontend** é um sistema completo de gestão contábil desenvolvido com **Next.js 15** e arquitetura **monorepo**, utilizando **Turborepo** para gerenciamento de builds e cache. O sistema oferece duas aplicações principais com funcionalidades específicas para diferentes tipos de usuários.

## 🏗️ Estrutura do Monorepo

```
gestk-frontend/
├── apps/
│   ├── admin/          # Aplicação administrativa (Gestão de contratos, usuários, billing)
│   └── client/         # Aplicação do cliente (Gestão e Dashboards)
├── packages/
│   ├── shared/         # Utilitários, serviços e tipos compartilhados
│   └── ui/             # Design system e componentes reutilizáveis
├── docs/               # Documentação completa do projeto
├── turbo.json          # Configuração do Turborepo
└── package.json        # Configuração do workspace
```

## 🎯 Aplicações

### Admin (`apps/admin`)
**Painel administrativo para gestão do sistema**

- **Gestão de Contratos**: CRUD completo de contratos
- **Gestão de Usuários**: Administração de usuários e permissões
- **Gestão de Contabilidades**: Configuração de entidades contábeis
- **Billing**: Sistema de cobrança e faturamento
- **API Testing**: Interface para testes de conectividade
- **Configurações**: Painel de configurações do sistema

### Client (`apps/client`)
**Interface do cliente com módulos de gestão e dashboards**

#### Módulo Gestão
- **Carteira de Clientes**: Gestão completa da carteira com categorização
- **Detalhes de Clientes**: Visualização detalhada por competência
- **Gestão de Usuários**: Controle de atividades e produtividade
- **Análise do Escritório**: KPIs e indicadores de performance

#### Módulo Dashboards
- **Dashboard Demográfico**: Análise de colaboradores e turnover
- **Dashboard Fiscal**: Faturamento, impostos e geolocalização
- **Dashboard Contábil**: Indicadores contábeis e evolução financeira
- **Dashboard Indicadores**: KPIs financeiros e operacionais
- **Dashboard DRE**: Demonstração de resultados e análises

#### Funcionalidades Gerais
- **Relatórios Automatizados**: Sistema de agendamento e exportação
- **Configurações**: Painel completo de configurações do sistema
- **Exportação**: PDF, Excel e CSV para todos os módulos
- **Filtros Avançados**: Sistema de filtros globais e específicos

## 📦 Packages Compartilhados

### @gestk/shared
**Código compartilhado principal entre as aplicações**

```
packages/shared/
├── src/
│   ├── api/                    # Cliente API e serviços
│   │   ├── client.ts          # Cliente Axios configurado
│   │   ├── services/          # Serviços específicos
│   │   │   ├── auth.service.ts
│   │   │   ├── admin.service.ts
│   │   │   ├── client.service.ts
│   │   │   ├── gestao.service.ts
│   │   │   ├── dashboard.service.ts
│   │   │   ├── export.service.ts
│   │   │   └── relatorios.service.ts
│   │   ├── types/             # Tipos TypeScript
│   │   │   ├── index.ts
│   │   │   ├── api.types.ts
│   │   │   └── client.types.ts
│   │   └── index.ts
│   ├── hooks/                 # Hooks customizados
│   │   ├── useApi.ts
│   │   ├── useAuth.ts
│   │   └── useExport.ts
│   ├── utils/                 # Utilitários e helpers
│   │   ├── date.ts
│   │   ├── format.ts
│   │   └── validation.ts
│   ├── constants/             # Constantes e configurações
│   │   ├── api.ts
│   │   ├── routes.ts
│   │   └── permissions.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

### @gestk/ui
**Design system e componentes reutilizáveis**

```
packages/ui/
├── src/
│   ├── components/            # Componentes base
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── table.tsx
│   │   └── index.ts
│   ├── styles/               # Estilos globais
│   │   ├── globals.css
│   │   └── components.css
│   ├── tokens/               # Design tokens
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   └── utils/
│       └── cn.ts             # Utilitário de classes
├── package.json
└── tsconfig.json
```

## 🔧 Stack Tecnológica

### Frontend
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de interface
- **Recharts** - Biblioteca de gráficos
- **React Hook Form + Zod** - Formulários e validação
- **TanStack Table** - Tabelas avançadas

### Monorepo
- **Turborepo** - Build system e cache
- **npm workspaces** - Gerenciamento de dependências
- **ESLint + Prettier** - Linting e formatação

### Design System
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones
- **CSS Variables** - Sistema de cores customizável

## 🔌 Integração com Backend

### Estrutura de API

```typescript
// Configuração base
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'v1';

// Endpoints principais
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  GESTAO: {
    CARTEIRA: '/gestao/carteira',
    CLIENTES: '/gestao/clientes',
    USUARIOS: '/gestao/usuarios',
    ESCRITORIO: '/gestao/escritorio',
  },
  DASHBOARDS: {
    DEMOGRAFICO: '/dashboards/demografico',
    FISCAL: '/dashboards/fiscal',
    CONTABIL: '/dashboards/contabil',
    INDICADORES: '/dashboards/indicadores',
    DRE: '/dashboards/dre',
  },
  RELATORIOS: {
    LISTAR: '/relatorios',
    CRIAR: '/relatorios',
    EXECUTAR: '/relatorios/{id}/executar',
  },
  EXPORT: {
    PDF: '/export/pdf',
    EXCEL: '/export/excel',
    CSV: '/export/csv',
  }
};
```

### Autenticação

```typescript
// Sistema de autenticação compartilhado
export const authService = {
  login: (credentials: LoginCredentials) => 
    apiClient.post('/auth/login', credentials),
  
  logout: () => 
    apiClient.post('/auth/logout'),
  
  refreshToken: () => 
    apiClient.post('/auth/refresh'),
  
  getProfile: () => 
    apiClient.get('/auth/profile'),
};
```

## 📊 Componentes de Dados

### Gráficos (Recharts)

```typescript
// Componentes de gráficos reutilizáveis
export { LineChart } from './components/charts/LineChart';
export { BarChart } from './components/charts/BarChart';
export { PieChart } from './components/charts/PieChart';
export { AreaChart } from './components/charts/AreaChart';

// Uso nos dashboards
<LineChart
  data={dadosEvolucao}
  lines={[
    { dataKey: 'Total Clientes', stroke: '#3b82f6', name: 'Total Clientes' },
    { dataKey: 'Novos Clientes', stroke: '#10b981', name: 'Novos Clientes' }
  ]}
  title="Evolução da Carteira"
  height={350}
/>
```

### Tabelas (TanStack Table)

```typescript
// Componente de tabela reutilizável
export { DataTable } from './components/tables/DataTable';

// Uso em listagens
<DataTable
  data={clientes}
  columns={colunasClientes}
  pagination={true}
  search={true}
  export={true}
/>
```

### Filtros Globais

```typescript
// Sistema de filtros compartilhado
export { GlobalFilters } from './components/filters/GlobalFilters';
export { DateRangePicker } from './components/filters/DateRangePicker';
export { MultiSelect } from './components/filters/MultiSelect';

// Uso em dashboards
<GlobalFilters
  filters={filtros}
  onFiltersChange={handleFiltersChange}
  onClearFilters={handleClearFilters}
/>
```

## 🎨 Design System

### Cores e Temas

```css
/* Sistema de cores baseado em CSS Variables */
:root {
  --primary: 221 83% 53%;        /* Azul principal */
  --secondary: 210 40% 98%;      /* Cinza claro */
  --accent: 142 76% 36%;         /* Verde */
  --destructive: 0 84% 60%;      /* Vermelho */
  --muted: 210 40% 96%;          /* Cinza muito claro */
  --border: 214 32% 91%;         /* Borda */
  --input: 214 32% 91%;          /* Input */
  --ring: 221 83% 53%;           /* Focus ring */
  --background: 0 0% 100%;       /* Fundo */
  --foreground: 222 84% 5%;      /* Texto */
}
```

### Componentes Base

```typescript
// Componentes disponíveis no @gestk/ui
export {
  Button,
  Card,
  Input,
  Label,
  Select,
  Switch,
  Badge,
  Dialog,
  Table,
  Alert,
  Toast,
  Loading
} from '@gestk/ui';
```

## 🔄 Fluxo de Dados

### Estado Global

```typescript
// Context de autenticação compartilhado
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### Cache e Otimização

```typescript
// Configuração do React Query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 10 * 60 * 1000, // 10 minutos
      retry: 3,
    },
  },
});
```

## 🚀 Build e Deploy

### Configuração do Turborepo

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Todas as aplicações
npm run dev:admin        # Apenas admin
npm run dev:client       # Apenas client

# Build
npm run build            # Build de produção
npm run build:admin      # Build apenas admin
npm run build:client     # Build apenas client

# Linting e formatação
npm run lint             # ESLint
npm run format           # Prettier
npm run type-check       # TypeScript

# Testes
npm run test             # Todos os testes
npm run test:watch       # Modo watch
```

## 📱 Responsividade

### Breakpoints

```css
/* Breakpoints do Tailwind CSS */
sm: '640px'    /* Mobile */
md: '768px'    /* Tablet */
lg: '1024px'   /* Desktop */
xl: '1280px'   /* Large Desktop */
2xl: '1536px'  /* Extra Large */
```

### Componentes Responsivos

```typescript
// Exemplo de componente responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card className="p-4">
    <CardTitle className="text-lg md:text-xl">
      Título Responsivo
    </CardTitle>
    <CardContent className="text-sm md:text-base">
      Conteúdo adaptável
    </CardContent>
  </Card>
</div>
```

## 🔒 Segurança

### Headers de Segurança

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  }
];
```

### Validação de Dados

```typescript
// Schemas de validação com Zod
export const clienteSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
});
```

## 📈 Performance

### Otimizações Implementadas

- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Análise de tamanho dos bundles
- **Caching**: React Query para cache de dados
- **Lazy Loading**: Componentes carregados sob demanda

### Métricas de Performance

```typescript
// Web Vitals
export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  if (metric.label === 'web-vital') {
    // Enviar métricas para analytics
    analytics.track('web-vital', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    });
  }
};
```

## 🧪 Testes

### Estrutura de Testes

```
tests/
├── unit/                 # Testes unitários
│   ├── components/
│   ├── hooks/
│   └── utils/
├── integration/          # Testes de integração
│   ├── api/
│   └── auth/
├── e2e/                  # Testes end-to-end
│   ├── admin/
│   └── client/
└── fixtures/             # Dados de teste
    ├── users.ts
    └── contracts.ts
```

### Configuração de Testes

```typescript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@gestk/shared$': '<rootDir>/packages/shared/src',
    '^@gestk/ui$': '<rootDir>/packages/ui/src',
  },
};
```

## 📚 Documentação

### Documentação Técnica

- [Guia de Desenvolvimento](./DEVELOPMENT_GUIDE.md)
- [Integração com Backend](./INTEGRACAO_BACKEND.md)
- [Guia de Deploy](./DEPLOYMENT_GUIDE.md)
- [Mapeamento de Endpoints](./ENDPOINTS_MAPPING.md)

### Documentação de Módulos

- [Módulo Gestão](./MODULO_GESTAO.md)
- [Módulo Dashboards](./MODULO_DASHBOARDS.md)
- [Sistema de Relatórios](./SISTEMA_RELATORIOS.md)

## 🔄 Manutenção

### Atualizações de Dependências

```bash
# Atualizar dependências
npm update

# Atualizar dependências específicas
npm update @gestk/shared @gestk/ui

# Verificar vulnerabilidades
npm audit
npm audit fix
```

### Monitoramento

- **Sentry**: Monitoramento de erros
- **Analytics**: Métricas de uso
- **Performance**: Web Vitals
- **Logs**: Estruturados com Winston

---

**Arquitetura Compartilhada** - Atualizado em 2024-12-15