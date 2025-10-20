# 🚀 Quick Start - GESTK Frontend

## ⚡ Iniciar Rapidamente

### Windows (Opção 1 - Mais Fácil)
```batch
REM Duplo clique no arquivo:
START_DEV.bat
```

### Windows (Opção 2 - PowerShell)
```powershell
# Abra PowerShell e execute:
.\START_DEV.ps1
```

### macOS / Linux / Qualquer Terminal
```bash
npm run dev
```

## 📍 URLs de Desenvolvimento

Uma vez iniciado, acesse:

| Aplicação | URL | Porta |
|-----------|-----|-------|
| **Admin** | http://localhost:3000 | 3000 |
| **Client** | http://localhost:3001 | 3001 |
| **Landing** | http://localhost:3002 | 3002 |

## 🛠️ Comandos Disponíveis

```bash
# Todas as aplicações simultaneamente (recomendado)
npm run dev

# Aplicações individuais
npm run dev:admin       # Apenas admin
npm run dev:client      # Apenas client
npm run dev:landing     # Apenas landing

# Build para produção
npm run build

# Linter
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Testes
npm run test
npm run test:watch
npm run test:coverage
```

## 📦 Instalação

```bash
# 1. Clonar o repositório
git clone <seu-repo>

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
# Copie .env.example para .env.local e configure

# 4. Rodar o projeto
npm run dev
```

## 🏗️ Estrutura do Projeto

```
gestk-frontend/
├── apps/
│   ├── admin/          # Painel administrativo (porto 3000)
│   ├── client/         # Aplicação do cliente (porto 3001)
│   └── landing/        # Página institucional (porto 3002)
├── packages/
│   ├── shared/         # Código compartilhado (types, API, hooks)
│   └── ui/             # Design system e componentes
├── START_DEV.bat       # Script para Windows (batch)
├── START_DEV.ps1       # Script para Windows (PowerShell)
├── package.json        # Workspace root
└── turbo.json          # Configuração Turborepo
```

## ⚙️ Tecnologias

- **Next.js 15.5** - Framework React
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 3.4** - Styling
- **React Query v5** - Data fetching
- **Shadcn/UI** - Design system
- **Turborepo** - Monorepo management

## 🐛 Troubleshooting

### Porta já em uso
Se uma porta estiver ocupada:

```bash
# Windows - Matar processo na porta (ex: 3000)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Limpar cache
```bash
npm run clean
npm install
npm run dev
```

### Problemas com lockfiles
Se houver aviso sobre múltiplos lockfiles:
```bash
# Remova lockfiles desnecessários
rm package-lock.json  # Mantém apenas o root
```

## 📚 Documentação

- [Guia de Desenvolvimento](./docs/DEVELOPMENT_GUIDE.md)
- [Arquitetura](./docs/ARQUITETURA_COMPARTILHADA.md)
- [API Endpoints](./docs/ENDPOINTS_MAPPING.md)

## 🤝 Contribuindo

1. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
2. Commit suas mudanças: `git commit -m 'Adiciona minha feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.
