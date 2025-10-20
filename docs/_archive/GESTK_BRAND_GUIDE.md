# GestK - Guia de Identidade Visual

## 🎨 Paleta de Cores

### Cores Principais

```css
/* Azul Principal - Escudo */
--gestk-primary: #1F3A52;

/* Cinza Secundário - Seta */
--gestk-secondary: #8B9BA8;

/* Azul Claro - Accent */
--gestk-accent: #4A90E2;

/* Azul Escuro */
--gestk-dark: #0F2234;

/* Cinza Claro - Backgrounds */
--gestk-light: #E8EDF2;
```

### Uso das Cores

- **Primary (#1F3A52):** Cabeçalhos, botões principais, elementos de destaque
- **Secondary (#8B9BA8):** Textos secundários, ícones, bordas
- **Accent (#4A90E2):** Links, hover states, elementos interativos
- **Dark (#0F2234):** Textos principais, fundos escuros
- **Light (#E8EDF2):** Backgrounds, cards, áreas de conteúdo

## 📐 Logo

### Variantes

1. **Default:** Logo completo (escudo + texto)
2. **Icon Only:** Apenas o escudo com seta
3. **White:** Versão para fundos escuros
4. **Dark:** Versão para fundos claros

### Tamanhos

- **xs:** 24px (h-6)
- **sm:** 32px (h-8)
- **md:** 40px (h-10) - Padrão
- **lg:** 56px (h-14)
- **xl:** 80px (h-20)

### Uso do Componente

```tsx
import { Logo } from '@gestk/ui';

// Logo padrão
<Logo />

// Logo grande
<Logo size="lg" />

// Apenas ícone
<Logo variant="icon-only" size="sm" />

// Logo branca para navbar escuro
<Logo variant="white" size="md" />
```

## 🎯 Aplicação no Projeto

### Locais onde a logo foi aplicada:

1. **Favicon:** `/apps/admin/public/favicon.ico` e `/apps/client/public/favicon.ico`
2. **Logo SVG:** `/public/logo-gestk.svg`
3. **Componente:** `@gestk/ui/logo`

### Próximos passos para aplicação completa:

- [ ] Atualizar página de login (admin)
- [ ] Atualizar página de login (client)
- [ ] Adicionar logo no header/navbar
- [ ] Adicionar logo na sidebar
- [ ] Configurar loading screen com logo
- [ ] Adicionar marca d'água em relatórios

## 💡 Conceito da Marca

O logo da GestK transmite:

- **Escudo:** Segurança, proteção, confiança
- **Seta crescente:** Crescimento, progresso, evolução
- **Cores profissionais:** Seriedade, credibilidade
- **Design moderno:** Inovação, tecnologia

---

**Data de criação:** 20 de Outubro de 2025
