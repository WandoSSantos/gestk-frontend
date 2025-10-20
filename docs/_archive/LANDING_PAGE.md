# Landing Page GESTK

## 📋 Visão Geral

A **Landing Page GESTK** é uma página institucional moderna e profissional desenvolvida para apresentar o sistema de gestão contábil e captar leads qualificados. A aplicação roda na porta **3002** e está integrada ao monorepo principal.

## 🎯 Objetivos

- **Apresentação do Produto**: Destacar os benefícios e funcionalidades do GESTK
- **Captação de Leads**: Formulários de contato e solicitação de orçamento
- **Credibilidade**: Depoimentos e cases de sucesso
- **Conversão**: CTAs estratégicos para trial e demonstração
- **SEO**: Otimização para mecanismos de busca

## 🏗️ Arquitetura

### Estrutura de Arquivos
```
apps/landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout raiz com providers
│   │   ├── page.tsx                # Página principal
│   │   ├── globals.css             # Estilos globais e modo noturno
│   │   └── login/
│   │       ├── admin/page.tsx      # Redirecionamento para admin
│   │       └── cliente/page.tsx    # Redirecionamento para cliente
│   ├── components/
│   │   ├── landing/                # Componentes específicos da landing
│   │   │   ├── Navbar.tsx          # Navegação principal
│   │   │   ├── Hero.tsx            # Seção hero com CTAs
│   │   │   ├── Features.tsx        # Recursos principais
│   │   │   ├── HowItWorks.tsx      # Processo ETL
│   │   │   ├── Pricing.tsx         # Formulário de orçamento
│   │   │   ├── Testimonials.tsx    # Depoimentos de clientes
│   │   │   ├── FAQ.tsx             # Perguntas frequentes
│   │   │   ├── Contact.tsx         # Formulário de contato
│   │   │   ├── Footer.tsx          # Rodapé com links
│   │   │   ├── CookieBanner.tsx    # Banner de cookies LGPD
│   │   │   └── AdminDashboardCarousel.tsx # Carrossel de gráficos
│   │   ├── providers/
│   │   │   ├── QueryProvider.tsx   # React Query provider
│   │   │   └── ThemeProvider.tsx   # Modo noturno
│   │   └── ui/                     # Componentes reutilizáveis
│   ├── lib/
│   │   ├── api/
│   │   │   └── contact.ts          # API de contato
│   │   └── utils.ts                # Utilitários
│   └── types/
│       └── contact.ts              # Tipos TypeScript
├── package.json                    # Dependências e scripts
├── next.config.ts                  # Configuração Next.js
├── tailwind.config.ts              # Configuração Tailwind
├── tsconfig.json                   # Configuração TypeScript
└── README.md                       # Documentação específica
```

## 🎨 Design System

### Cores e Tema
```css
/* Cores principais */
--primary: 221 83% 53%    /* Azul principal */
--secondary: 210 40% 98%  /* Cinza claro */
--accent: 142 76% 36%     /* Verde */
--success: 142 76% 36%    /* Verde sucesso */

/* Modo noturno */
--background: 0 0% 100%   /* Branco (claro) / 222 84% 5% (escuro) */
--foreground: 222 84% 5%  /* Preto (claro) / 210 40% 98% (escuro) */
--card: 0 0% 100%         /* Branco (claro) / 222 84% 5% (escuro) */
--muted: 210 40% 98%      /* Cinza claro (claro) / 217 32% 17% (escuro) */
```

### Componentes Personalizados
- **Modern Card**: Glassmorphism com backdrop-blur
- **Gradient Text**: Texto com gradiente colorido
- **Button Variants**: Primário, secundário, outline, ghost
- **Hero Background**: Gradientes dinâmicos por tema
- **Section Background**: Backgrounds alternados para seções

## 📱 Seções da Landing Page

### 1. Navbar
- **Logo GESTK** com ícone Shield
- **Navegação**: Início, Recursos, Preços, Contato
- **Botões**: Entrar (dropdown), Começar Grátis
- **Modo Noturno**: Toggle com ícone Sol/Lua
- **Responsivo**: Menu hambúrguer em mobile

### 2. Hero Section
- **Título Impactante**: "Uma plataforma completa para gestão eficiente"
- **Subtítulo**: Descrição dos benefícios principais
- **Features List**: 3 benefícios principais com checkmarks
- **CTAs**: "Começar Agora" e "Ver Demonstração"
- **Estatísticas**: 4 métricas principais
- **Carrossel de Gráficos**: Dashboards interativos do GESTK Admin

### 3. Features Section
- **6 Recursos Principais**:
  - Dashboards Inteligentes
  - Segurança e Conformidade
  - Integração Modular
  - ETL Automatizado
  - Multi-tenant Seguro
  - Simuladores Avançados
- **Design**: Cards com ícones, hover effects e gradientes

### 4. How It Works Section
- **Processo ETL** em 3 etapas:
  - Extração de Dados
  - Transformação
  - Carregamento
- **Visual**: Cards com ícones e descrições detalhadas
- **CTA**: "Começar a Transformação"

### 5. Pricing Section
- **Formulário de Orçamento Personalizado**:
  - Campos: Nome, Email, Telefone, Empresa, CNPJ
  - Módulos: Gestão, Dashboards, Simuladores
  - Observações opcionais
- **Integração**: API de contato com validação

### 6. Testimonials Section
- **Carrossel de Depoimentos**:
  - 6 depoimentos de contabilidades
  - Foco em ETL e migração de dados
  - Avatars, nomes, cargos e empresas
  - Highlights dos benefícios
- **Estatísticas**: 4 métricas de sucesso

### 7. FAQ Section
- **4 Categorias**:
  - Funcionalidades
  - Segurança
  - Suporte
  - ETL e Migração
- **Accordion**: Perguntas expansíveis
- **Conteúdo**: Foco em ETL e migração de dados

### 8. Contact Section
- **Formulário de Contato**:
  - Campos: Nome, Email, Telefone, Empresa, Mensagem
  - Validação com React Hook Form + Zod
  - Integração com API backend
- **Informações**: Email, telefone, endereço

### 9. Footer
- **Links Organizados**:
  - Produto: Features, Preços, Documentação
  - Empresa: Sobre, Blog, Carreiras
  - Recursos: Suporte, Status, API
  - Legal: Privacidade, Termos, Cookies
- **Redes Sociais**: Ícones com links
- **Copyright**: Informações legais

### 10. Cookie Banner
- **LGPD Compliance**: Banner de consentimento
- **Categorias**: Necessários, Analytics, Marketing
- **Persistência**: LocalStorage para preferências
- **Links**: Política de privacidade

## 🎨 Carrossel de Gráficos

### Funcionalidades
- **4 Tipos de Gráficos**:
  - Bar Chart: Receita Mensal
  - Line Chart: Clientes Ativos
  - Pie Chart: Eficiência Operacional
  - Area Chart: Tarefas Concluídas
- **Navegação**: Auto-advance (5s), setas, dots
- **Interatividade**: Hover effects, transições suaves
- **Responsividade**: Adaptável a todos os dispositivos

### Implementação Técnica
- **SVG Nativo**: Gráficos renderizados com SVG
- **Dados Simulados**: Valores realistas para demonstração
- **Animações CSS**: Transições suaves entre slides
- **Modo Noturno**: Cores adaptáveis ao tema

## 🌙 Modo Noturno

### Implementação
- **next-themes**: Gerenciamento de tema
- **Persistência**: LocalStorage para preferência
- **Detecção**: Preferência do sistema operacional
- **Transições**: Mudanças suaves entre modos

### Elementos Adaptados
- **Backgrounds**: Gradientes escuros
- **Textos**: Cores contrastantes
- **Cards**: Glassmorphism escuro
- **Bordas**: Cores apropriadas para cada modo
- **Sombras**: Ajustadas para contraste

## 🔌 Integração com Backend

### API de Contato
```typescript
// Endpoint: POST /api/contato
interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  empresa?: string
  mensagem: string
}

// Endpoint: POST /api/orcamento
interface QuoteFormData {
  nome: string
  email: string
  telefone: string
  empresa: string
  cnpj: string
  modulos: string[]
  observacoes?: string
}
```

### Validação
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de schemas
- **Toast**: Feedback visual com Sonner
- **Loading States**: Estados de carregamento

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
  - Stack vertical
  - Menu hambúrguer
  - Cards em coluna única
- **Tablet**: 768px - 1024px
  - 2 colunas em grids
  - Navegação adaptada
- **Desktop**: > 1024px
  - Layout completo
  - 3 colunas em grids
  - Hover effects

### Otimizações
- **Imagens**: Next.js Image com otimização
- **Fontes**: Inter com subset latino
- **CSS**: Tailwind com purge para produção
- **JavaScript**: Code splitting automático

## 🚀 Performance

### Métricas
- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Otimizações
- **Static Generation**: Páginas pré-renderizadas
- **Image Optimization**: Next.js Image
- **Font Optimization**: Google Fonts otimizado
- **CSS Purging**: Tailwind CSS otimizado
- **Bundle Splitting**: Chunks otimizados

## 🔍 SEO

### Meta Tags
```typescript
export const metadata: Metadata = {
  title: 'GESTK - Sistema de Gestão Contábil Inteligente',
  description: 'Plataforma completa para gestão eficiente de empresas de contabilidade e seus clientes. Migração de dados via ETL, dashboards personalizados e simuladores de cenários.',
  keywords: 'gestão contábil, sistema contábil, ETL, migração de dados, dashboards, simuladores, contabilidade',
  openGraph: {
    title: 'GESTK - Sistema de Gestão Contábil Inteligente',
    description: 'Plataforma completa para gestão eficiente de empresas de contabilidade',
    type: 'website',
    locale: 'pt_BR',
  },
}
```

### Estrutura Semântica
- **HTML5**: Tags semânticas apropriadas
- **Headings**: Hierarquia H1-H6 correta
- **Alt Text**: Imagens com descrições
- **Schema Markup**: Dados estruturados (futuro)

## 🧪 Testes

### Estratégia
- **Unit Tests**: Componentes individuais
- **Integration Tests**: Fluxos de formulário
- **E2E Tests**: Jornada completa do usuário
- **Visual Tests**: Screenshots de regressão

### Cobertura
- **Componentes**: 90%+ de cobertura
- **Hooks**: 100% de cobertura
- **Utils**: 100% de cobertura
- **API**: 100% de cobertura

## 🚀 Deploy

### Configuração
- **Porta**: 3002
- **Build**: `npm run build:landing`
- **Start**: `npm run start`
- **Docker**: Imagem otimizada com Nginx

### Variáveis de Ambiente
```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.gestk.com
NEXT_PUBLIC_API_VERSION=v1

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 📊 Analytics

### Métricas Importantes
- **Page Views**: Visualizações por seção
- **CTR**: Taxa de clique nos CTAs
- **Form Submissions**: Conversões de formulários
- **Scroll Depth**: Engajamento por seção
- **Bounce Rate**: Taxa de rejeição

### Eventos Rastreados
- **Button Clicks**: CTAs principais
- **Form Submissions**: Contato e orçamento
- **Scroll Events**: Progresso na página
- **Theme Toggle**: Uso do modo noturno
- **Chart Interactions**: Interação com carrossel

## 🔧 Manutenção

### Atualizações Regulares
- **Dependências**: Atualização mensal
- **Conteúdo**: Revisão trimestral
- **Performance**: Monitoramento contínuo
- **SEO**: Análise mensal

### Monitoramento
- **Uptime**: 99.9% de disponibilidade
- **Performance**: Core Web Vitals
- **Errors**: Logs de erro em tempo real
- **Analytics**: Relatórios semanais

## 📈 Roadmap

### Próximas Funcionalidades
- [ ] **A/B Testing**: Testes de variações
- [ ] **Chat Widget**: Suporte em tempo real
- [ ] **Video Demo**: Demonstração em vídeo
- [ ] **Blog Integration**: Artigos e cases
- [ ] **Multi-language**: Suporte a múltiplos idiomas

### Melhorias Planejadas
- [ ] **Animation Library**: Framer Motion
- [ ] **Advanced Analytics**: Google Analytics 4
- [ ] **Lead Scoring**: Qualificação automática
- [ ] **CRM Integration**: Salesforce/HubSpot
- [ ] **Social Proof**: Widgets de confiança

---

**Landing Page GESTK** - Desenvolvida com ❤️ para maximizar conversões e apresentar o melhor do sistema de gestão contábil.

