# Guia de Desenvolvimento - GESTK Frontend

## 📋 Visão Geral

Este documento fornece um guia completo para desenvolvedores que trabalham no projeto **GESTK Frontend**, incluindo configuração do ambiente, padrões de código, e melhores práticas. O projeto é um sistema completo de gestão contábil desenvolvido com **Next.js 15** e arquitetura **monorepo**.

## 🏗️ Arquitetura do Projeto

### Estrutura do Monorepo
```
gestk-frontend/
├── apps/
│   ├── landing/        # Página institucional
│   ├── admin/          # Aplicação administrativa
│   └── client/         # Aplicação do cliente
├── packages/
│   ├── shared/         # Código compartilhado
│   └── ui/             # Design system
├── docs/               # Documentação
└── turbo.json          # Configuração Turborepo
```

### Aplicações
- **Landing**: Página institucional com apresentação e captação de leads
- **Admin**: Gestão de contratos, usuários, billing e configurações
- **Client**: Módulos de gestão e dashboards analíticos

## 🚀 Configuração do Ambiente

### Pré-requisitos
- **Node.js**: 18.0.0 ou superior
- **npm**: 9.0.0 ou superior
- **Git**: 2.30.0 ou superior
- **VS Code**: Recomendado com extensões específicas

### Extensões VS Code Recomendadas
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### Configuração Inicial

1. **Clone do repositório**
```bash
git clone https://github.com/gestk/gestk-frontend.git
cd gestk-frontend
```

2. **Instalação de dependências**
```bash
npm install
```

3. **Configuração de variáveis de ambiente**
```bash
# Copiar arquivos de exemplo
cp apps/landing/.env.example apps/landing/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp apps/client/.env.example apps/client/.env.local

# Configurar variáveis necessárias
```

4. **Execução em desenvolvimento**
```bash
# Todas as aplicações
npm run dev

# Apenas landing
npm run dev:landing

# Apenas admin
npm run dev:admin

# Apenas client
npm run dev:client
```

## 📁 Estrutura de Pastas

### Aplicação Landing (`apps/landing`)
```
apps/landing/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── login/             # Redirecionamentos de login
│   │   │   ├── admin/         # Redireciona para admin
│   │   │   └── cliente/       # Redireciona para cliente
│   │   ├── globals.css        # Estilos globais e modo noturno
│   │   ├── layout.tsx         # Layout raiz com providers
│   │   └── page.tsx           # Página principal
│   ├── components/            # Componentes específicos
│   │   ├── landing/           # Componentes da landing page
│   │   │   ├── Navbar.tsx     # Navegação principal
│   │   │   ├── Hero.tsx       # Seção hero
│   │   │   ├── Features.tsx   # Recursos principais
│   │   │   ├── HowItWorks.tsx # Processo ETL
│   │   │   ├── Pricing.tsx    # Formulário de orçamento
│   │   │   ├── Testimonials.tsx # Depoimentos
│   │   │   ├── FAQ.tsx        # Perguntas frequentes
│   │   │   ├── Contact.tsx    # Formulário de contato
│   │   │   ├── Footer.tsx     # Rodapé
│   │   │   ├── CookieBanner.tsx # Banner de cookies
│   │   │   └── AdminDashboardCarousel.tsx # Carrossel de gráficos
│   │   ├── providers/         # Providers de contexto
│   │   │   ├── QueryProvider.tsx # React Query
│   │   │   └── ThemeProvider.tsx # Modo noturno
│   │   └── ui/                # Componentes reutilizáveis
│   ├── lib/                   # Utilitários e configurações
│   │   ├── api/               # API de contato
│   │   └── utils.ts           # Utilitários gerais
│   └── types/                 # Tipos TypeScript
├── public/                    # Arquivos estáticos
└── package.json
```

### Aplicação Admin (`apps/admin`)
```
apps/admin/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── (auth)/            # Rotas de autenticação
│   │   ├── (dashboard)/       # Rotas do dashboard
│   │   ├── globals.css        # Estilos globais
│   │   └── layout.tsx         # Layout raiz
│   ├── components/            # Componentes específicos
│   │   ├── contratos/         # Componentes de contratos
│   │   ├── dashboard/         # Componentes do dashboard
│   │   ├── forms/             # Componentes de formulário
│   │   └── layout/            # Componentes de layout
│   ├── lib/                   # Utilitários e configurações
│   │   ├── api/               # Cliente API e serviços
│   │   ├── auth/              # Sistema de autenticação
│   │   └── utils.ts           # Utilitários gerais
│   ├── hooks/                 # Custom hooks
│   ├── store/                 # Estado global
│   └── types/                 # Tipos TypeScript
├── public/                    # Arquivos estáticos
├── tests/                     # Testes
└── package.json
```

### Aplicação Client (`apps/client`)
```
apps/client/
├── src/
│   ├── app/                    # App Router
│   │   ├── (dashboard)/       # Rotas do dashboard
│   │   │   ├── gestao/        # Módulo Gestão
│   │   │   ├── dashboards/    # Módulo Dashboards
│   │   │   ├── relatorios/    # Sistema de Relatórios
│   │   │   └── configuracoes/ # Configurações
│   │   ├── globals.css        # Estilos globais
│   │   └── layout.tsx         # Layout raiz
│   ├── components/            # Componentes específicos
│   │   ├── charts/            # Componentes de gráficos
│   │   ├── filters/           # Componentes de filtros
│   │   ├── tables/            # Componentes de tabelas
│   │   ├── export/            # Componentes de exportação
│   │   └── relatorios/        # Componentes de relatórios
│   ├── lib/                   # Utilitários e configurações
│   │   ├── mocks/             # Dados mock para desenvolvimento
│   │   └── utils.ts           # Utilitários gerais
│   └── types/                 # Tipos TypeScript
├── public/                    # Arquivos estáticos
└── package.json
```

### Package Shared (`packages/shared`)
```
packages/shared/
├── src/
│   ├── api/                   # Cliente API e serviços
│   │   ├── client.ts          # Cliente Axios configurado
│   │   ├── services/          # Serviços específicos
│   │   └── types/             # Tipos de API
│   ├── hooks/                 # Hooks compartilhados
│   ├── utils/                 # Utilitários compartilhados
│   ├── constants/             # Constantes
│   └── types/                 # Tipos compartilhados
└── package.json
```

### Package UI (`packages/ui`)
```
packages/ui/
├── src/
│   ├── components/            # Componentes base
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── index.ts
│   ├── styles/               # Estilos globais
│   ├── tokens/               # Design tokens
│   └── utils/                # Utilitários
└── package.json
```

## 🎨 Padrões de Código

### TypeScript

#### Configuração
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@gestk/shared": ["../../packages/shared/src"],
      "@gestk/ui": ["../../packages/ui/src"]
    }
  }
}
```

#### Convenções de Nomenclatura
```typescript
// Interfaces: PascalCase com prefixo I (opcional)
interface UserData {
  id: string;
  name: string;
  email: string;
}

// Types: PascalCase
type UserStatus = 'active' | 'inactive' | 'pending';

// Enums: PascalCase
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

// Funções: camelCase
const getUserData = (id: string): UserData => {
  // implementação
};

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.gestk.com';
const MAX_RETRY_ATTEMPTS = 3;
```

### React

#### Componentes Funcionais
```typescript
// Componente funcional com TypeScript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

#### Hooks Customizados
```typescript
// Hook customizado para API
export const useApi = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
```

### Styling com Tailwind CSS

#### Configuração
```javascript
// tailwind.config.ts
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};
```

#### Convenções de Classes
```typescript
// Componente com classes Tailwind organizadas
export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={cn(
      // Layout
      'flex flex-col',
      // Spacing
      'p-6 space-y-4',
      // Colors
      'bg-white text-gray-900',
      // Borders
      'border border-gray-200 rounded-lg',
      // Shadows
      'shadow-sm',
      // Responsive
      'md:p-8',
      // Custom classes
      className
    )}>
      {children}
    </div>
  );
};
```

## 🔧 Scripts de Desenvolvimento

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev              # Todas as aplicações
npm run dev:landing      # Apenas landing
npm run dev:admin        # Apenas admin
npm run dev:client       # Apenas client

# Build
npm run build            # Build de produção
npm run build:landing    # Build apenas landing
npm run build:admin      # Build apenas admin
npm run build:client     # Build apenas client

# Linting e formatação
npm run lint             # ESLint
npm run lint:fix         # Corrigir problemas de linting
npm run format           # Prettier
npm run type-check       # Verificação de tipos

# Testes
npm run test             # Todos os testes
npm run test:watch       # Modo watch
npm run test:coverage    # Com cobertura
```

### Scripts de Package
```bash
# Executar comando em package específico
npm run dev --filter=admin
npm run build --filter=client
npm run test --filter=shared

# Executar comando em todos os packages
npm run lint --filter=...
npm run type-check --filter=...
```

## 🧪 Testes

### Configuração do Jest
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@gestk/shared$': '<rootDir>/packages/shared/src',
    '^@gestk/ui$': '<rootDir>/packages/ui/src',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
};
```

### Testes Unitários
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant class', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });
});
```

### Testes de Integração
```typescript
// api.test.ts
import { apiClient } from '@/lib/api/client';

// Mock do fetch
global.fetch = jest.fn();

describe('API Client', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('makes GET request', async () => {
    const mockData = { id: 1, name: 'Test' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await apiClient.get('/test');
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('/api/test', expect.any(Object));
  });
});
```

## 📦 Gerenciamento de Dependências

### Adicionando Dependências
```bash
# Dependência para aplicação específica
npm install react-query --workspace=apps/admin

# Dependência para package específico
npm install axios --workspace=packages/shared

# Dependência para todas as aplicações
npm install lodash --workspace-root
```

### Atualizando Dependências
```bash
# Atualizar todas as dependências
npm update

# Atualizar dependência específica
npm update react --workspace=apps/client

# Verificar vulnerabilidades
npm audit
npm audit fix
```

## 🔄 Fluxo de Desenvolvimento

### 1. Criação de Branch
```bash
# Criar nova branch a partir da main
git checkout -b feature/nova-funcionalidade

# Ou a partir da develop
git checkout -b feature/nova-funcionalidade develop
```

### 2. Desenvolvimento
```bash
# Fazer alterações no código
# Executar testes
npm run test

# Verificar linting
npm run lint

# Verificar tipos
npm run type-check
```

### 3. Commit
```bash
# Adicionar arquivos
git add .

# Commit com mensagem descritiva
git commit -m "feat: adicionar nova funcionalidade de relatórios"

# Push da branch
git push origin feature/nova-funcionalidade
```

### 4. Pull Request
- Criar PR para a branch `main` ou `develop`
- Adicionar descrição detalhada
- Solicitar review de outros desenvolvedores
- Aguardar aprovação e merge

## 🎨 Design System

### Componentes Base
```typescript
// Usar componentes do @gestk/ui
import { Button, Card, Input, Select } from '@gestk/ui';

// Componente customizado
export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={cn('custom-button', props.className)}
    />
  );
};
```

### Tokens de Design
```typescript
// packages/ui/src/tokens/colors.ts
export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    500: '#6b7280',
    900: '#111827',
  },
} as const;
```

## 🔌 Integração com API

### Cliente API Configurado
```typescript
// packages/shared/src/api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Serviços de API
```typescript
// packages/shared/src/api/services/gestao.service.ts
export const gestaoService = {
  carteira: {
    listar: (filtros: CarteiraFiltros) => 
      apiClient.get('/gestao/carteira/clientes', { params: filtros }),
    
    detalhes: (id: string) => 
      apiClient.get(`/gestao/carteira/clientes/${id}`),
  },
  
  clientes: {
    listar: (filtros: ClienteFiltros) => 
      apiClient.get('/gestao/clientes', { params: filtros }),
    
    criar: (dados: NovoCliente) => 
      apiClient.post('/gestao/clientes', dados),
  },
};
```

## 📱 Responsividade

### Breakpoints
```typescript
// Configuração de breakpoints
const breakpoints = {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large Desktop
  '2xl': '1536px' // Extra Large
};
```

### Componentes Responsivos
```typescript
// Exemplo de componente responsivo
export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {children}
    </div>
  );
};
```

## 🚀 Deploy

### Build de Produção
```bash
# Build de todas as aplicações
npm run build

# Build de aplicação específica
npm run build --filter=admin
npm run build --filter=client
```

### Variáveis de Ambiente
```bash
# .env.production
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.gestk.com
NEXT_PUBLIC_API_VERSION=v1
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://app.gestk.com
```

## 🔍 Debugging

### Ferramentas de Debug
- **React Developer Tools**: Extensão do Chrome
- **Redux DevTools**: Para estado global
- **Network Tab**: Para requisições de API
- **Console**: Para logs e erros

### Logs Estruturados
```typescript
// Utilitário de logging
export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${message}`, data);
  },
  
  error: (message: string, error?: Error) => {
    console.error(`[ERROR] ${message}`, error);
  },
  
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${message}`, data);
  },
};
```

## 📚 Recursos Adicionais

### Documentação
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Ferramentas
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Recharts Documentation](https://recharts.org)

### Comunidade
- [GitHub Issues](https://github.com/gestk/gestk-frontend/issues)
- [Discord](https://discord.gg/gestk)
- [Documentação Interna](./README.md)

---

**Guia de Desenvolvimento** - Atualizado em 2024-12-15