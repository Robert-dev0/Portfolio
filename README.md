# 🚀 Portfólio Pessoal

Um portfólio moderno e responsivo construído com Next.js 16, React 19 e Tailwind CSS 4, apresentando minhas habilidades, projetos e experiência profissional como desenvolvedor Full-Stack.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com animações suaves
- **Totalmente Responsivo**: Otimizado para todos os dispositivos (mobile, tablet, desktop)
- **Modo Escuro/Claro**: Suporte a temas com `next-themes`
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **SEO Friendly**: Otimizado para mecanismos de busca
- **Animações de Scroll**: Revelação de elementos ao rolar a página
- **Componentes Reutilizáveis**: Arquitetura modular e escalável

## 🎯 Seções

1. **Hero**: Apresentação inicial com call-to-action
2. **Sobre**: Informações pessoais, estatísticas e áreas de expertise
3. **Quick Info**: Informações rápidas sobre habilidades e interesses
4. **Skills & Expertise**: Tecnologias e competências técnicas
5. **Projetos**: Portfólio de projetos realizados
6. **Experiência**: Histórico profissional e educacional
7. **Vamos Conectar**: Formulário de contato e redes sociais
8. **Footer**: Informações adicionais e links

## 🛠️ Tecnologias

### Core
- **[Next.js 16](https://nextjs.org/)**: Framework React para produção
- **[React 19](https://react.dev/)**: Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado do JavaScript

### Estilização
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS utility-first
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)**: Animações com Tailwind
- **[class-variance-authority](https://cva.style/)**: Gerenciamento de variantes de componentes

### UI Components
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis e sem estilo
  - Accordion, Alert Dialog, Avatar, Dialog, Dropdown Menu
  - Navigation Menu, Popover, Progress, Scroll Area
  - Select, Separator, Slider, Switch, Tabs, Toast, Tooltip
  - E muitos outros...
- **[Lucide React](https://lucide.dev/)**: Ícones modernos e customizáveis
- **[Sonner](https://sonner.emilkowal.ski/)**: Notificações toast elegantes

### Formulários & Validação
- **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários
- **[Zod](https://zod.dev/)**: Validação de schemas TypeScript-first
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)**: Integração Zod + React Hook Form

### Outras Bibliotecas
- **[next-themes](https://github.com/pacocoursey/next-themes)**: Gerenciamento de temas
- **[Recharts](https://recharts.org/)**: Gráficos e visualizações
- **[date-fns](https://date-fns.org/)**: Manipulação de datas
- **[embla-carousel-react](https://www.embla-carousel.com/)**: Carrosséis responsivos
- **[@vercel/analytics](https://vercel.com/analytics)**: Analytics da Vercel

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- pnpm (recomendado) ou npm

### Passos

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd "New Portfólio"
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia o servidor de desenvolvimento

# Build
pnpm build        # Cria a versão de produção

# Produção
pnpm start        # Inicia o servidor de produção

# Linting
pnpm lint         # Executa o ESLint

# Pós-instalação
pnpm postinstall  # Copia o worker do PDF (executado automaticamente)
```

## 📁 Estrutura do Projeto

```
New Portfólio/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raiz
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── navbar.tsx        # Barra de navegação
│   ├── hero.tsx          # Seção hero
│   ├── about.tsx         # Seção sobre
│   ├── projects.tsx      # Seção de projetos
│   ├── experience.tsx    # Seção de experiência
│   └── ...               # Outros componentes
├── hooks/                # Custom React Hooks
├── lib/                  # Utilitários e helpers
├── public/               # Arquivos estáticos
│   ├── images/          # Imagens
│   └── resume.pdf       # Currículo
├── scripts/             # Scripts de build
├── components.json      # Configuração shadcn/ui
├── tsconfig.json        # Configuração TypeScript
├── tailwind.config.js   # Configuração Tailwind
└── next.config.mjs      # Configuração Next.js
```

## 🎨 Personalização

### Cores e Temas

As cores do tema podem ser personalizadas no arquivo `app/globals.css` através das variáveis CSS:

```css
:root {
  --background: ...;
  --foreground: ...;
  --accent: ...;
  /* etc */
}
```

### Conteúdo

Edite os componentes em `components/` para personalizar o conteúdo:
- **Hero**: Título, subtítulo e call-to-action
- **About**: Biografia, estatísticas e expertise
- **Projects**: Adicione seus projetos
- **Experience**: Histórico profissional

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub/GitLab/Bitbucket
2. Importe o projeto na [Vercel](https://vercel.com)
3. A Vercel detectará automaticamente Next.js e configurará o build
4. Deploy automático a cada push!

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- **Netlify**
- **Railway**
- **AWS Amplify**
- **Google Cloud Run**

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para se inspirar, mas por favor, não copie diretamente.

## 📧 Contato

Para mais informações, entre em contato através do formulário no site ou pelas redes sociais.

---

**Desenvolvido com ❤️ usando Next.js e React**
