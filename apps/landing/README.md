# GESTK Landing Page

Landing page institucional do GESTK - Sistema de Gestão Contábil Inteligente.

## 📋 Visão Geral

A landing page do GESTK é uma aplicação Next.js moderna e responsiva que apresenta a plataforma de gestão contábil, seus recursos, preços e permite contato com a equipe comercial.

## 🚀 Funcionalidades

### Seções da Landing Page

- **Hero Section**: Apresentação principal com CTAs e estatísticas
- **Features**: 6 recursos principais com descrições detalhadas
- **Pricing**: 3 planos de assinatura com comparação de recursos
- **Testimonials**: Depoimentos de clientes com carrossel
- **FAQ**: Perguntas frequentes organizadas por categoria
- **Contact**: Formulário de contato funcional
- **Footer**: Links, redes sociais e informações legais

### Navegação

- **Navbar**: Navegação fixa com scroll suave
- **Login**: Redirecionamento para admin (porta 3000) e cliente (porta 3001)
- **Responsivo**: Menu mobile com hamburguer

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **React Hook Form + Zod** - Formulários e validação
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

## 📦 Estrutura do Projeto

```
apps/landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz com metadata SEO
│   │   ├── page.tsx            # Página principal
│   │   ├── globals.css         # Estilos globais e animações
│   │   └── login/
│   │       ├── admin/page.tsx  # Redirecionamento para admin
│   │       └── cliente/page.tsx # Redirecionamento para cliente
│   ├── components/
│   │   ├── landing/            # Componentes específicos da landing
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # Componentes UI reutilizáveis
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── badge.tsx
│   │   │   └── sonner.tsx
│   │   └── providers/
│   │       └── QueryProvider.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   └── contact.ts      # API para formulário de contato
│   │   └── utils.ts            # Utilitários
│   └── types/
│       └── contact.ts          # Tipos TypeScript
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Na raiz do monorepo
npm install

# Executar apenas a landing page
npm run dev:landing
```

### URLs de Acesso

- **Landing Page**: http://localhost:3002
- **Admin**: http://localhost:3000 (redirecionamento)
- **Cliente**: http://localhost:3001 (redirecionamento)

## 🎨 Design System

### Cores

- **Primary**: Azul (#3b82f6) - Cor principal
- **Secondary**: Gradientes (blue-to-indigo, purple-to-pink)
- **Success**: Verde (#22c55e) - Sucesso e confirmações
- **Warning**: Amarelo (#f59e0b) - Avisos
- **Danger**: Vermelho (#ef4444) - Erros

### Animações

- **fadeIn**: Entrada suave
- **fadeInUp**: Entrada de baixo para cima
- **slideInRight**: Entrada da direita
- **float**: Flutuação contínua
- **pulseGlow**: Brilho pulsante para CTAs

### Componentes

- **Button**: Múltiplas variantes (default, gradient, glass, outline)
- **Card**: Cards com hover effects
- **Input**: Campos de formulário estilizados
- **Badge**: Etiquetas coloridas

## 📱 Responsividade

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptações

- **Mobile**: Menu hamburguer, stack vertical, CTAs empilhados
- **Tablet**: 2 colunas, navegação simplificada
- **Desktop**: Layout completo, 3 colunas, hover effects

## 🔧 Configuração

### Variáveis de Ambiente

Criar `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_VERSION=v1
```

### Tailwind CSS

Configuração personalizada com:
- Cores customizadas
- Animações personalizadas
- Utilitários de glassmorphism
- Gradientes predefinidos

## 📊 SEO

### Metadata

- **Title**: "GESTK - Sistema de Gestão Contábil Inteligente"
- **Description**: Descrição completa da plataforma
- **Keywords**: Palavras-chave relevantes
- **Open Graph**: Metadados para redes sociais
- **Twitter Cards**: Metadados para Twitter

### Performance

- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Componentes carregados quando necessário
- **Bundle Analysis**: Otimização de tamanho

## 🧪 Testes

### Executar Testes

```bash
# Todos os testes
npm run test

# Modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

### Estrutura de Testes

```
tests/
├── unit/                 # Testes unitários
├── integration/          # Testes de integração
└── fixtures/             # Dados de teste
```

## 🚀 Deploy

### Build de Produção

```bash
npm run build:landing
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:landing
EXPOSE 3002
CMD ["npm", "start"]
```

### Vercel

```json
{
  "builds": [
    {
      "src": "apps/landing/package.json",
      "use": "@vercel/next"
    }
  ]
}
```

## 📈 Analytics

### Métricas Implementadas

- **Web Vitals**: Core Web Vitals do Google
- **Scroll Tracking**: Acompanhamento de scroll
- **Form Submissions**: Conversões de formulário
- **Button Clicks**: Interações com CTAs

### Ferramentas

- **Google Analytics**: Configuração básica
- **Hotjar**: Heatmaps e gravações
- **Sentry**: Monitoramento de erros

## 🔒 Segurança

### Headers de Segurança

- **X-Frame-Options**: SAMEORIGIN
- **X-Content-Type-Options**: nosniff
- **X-XSS-Protection**: 1; mode=block
- **Strict-Transport-Security**: max-age=63072000

### Validação

- **Formulários**: Validação client-side e server-side
- **Sanitização**: Limpeza de dados de entrada
- **Rate Limiting**: Proteção contra spam

## 📞 Suporte

### Contato

- **Email**: contato@gestk.com.br
- **Telefone**: (11) 99999-9999
- **Documentação**: [docs.gestk.com.br](https://docs.gestk.com.br)

### Issues

Reportar problemas no repositório do projeto ou via email de suporte.

## 📄 Licença

© 2024 GESTK. Todos os direitos reservados.

---

**Desenvolvido com ❤️ no Brasil**
