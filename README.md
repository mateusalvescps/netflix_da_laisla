# 🎬 JAPAFLIX

Clone completo do Netflix desenvolvido com React, Vite e Tailwind CSS.

![Japaflix](https://img.shields.io/badge/Japaflix-2026-red)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)

## 🚀 Características

- ✅ Interface moderna inspirada no Netflix
- ✅ Sistema de autenticação completo
- ✅ Navegação por categorias (Filmes, Séries, Populares)
- ✅ Busca de conteúdo
- ✅ Player de vídeo integrado
- ✅ Histórico de visualização
- ✅ Design responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Integração com TMDB API

## 📋 Pré-requisitos

- Node.js 18+ 
- NPM ou Yarn
- Conta no TMDB (The Movie Database) para obter API Key

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/mateusalvescps/netflix_da_laisla.git
cd netflix_da_laisla
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

### 4. Execute o projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 📦 Deploy no Netlify

O projeto está configurado para deploy automático no Netlify:

1. Conecte seu repositório GitHub ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Adicione as variáveis de ambiente necessárias

## 🎨 Tecnologias Utilizadas

- **React 18.3** - Biblioteca JavaScript para UI
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navegação
- **Zustand** - Gerenciamento de estado
- **Axios** - Cliente HTTP
- **Framer Motion** - Animações
- **React Hot Toast** - Notificações
- **React Player** - Player de vídeo
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── home/
│   ├── LoginPage.jsx
│   ├── SignUpPage.jsx
│   └── ...
├── store/              # Gerenciamento de estado
│   ├── auth.store.js
│   └── content.store.js
├── utils/              # Utilitários
│   └── constants.js
├── hooks/              # Custom hooks
├── App.jsx             # Componente principal
└── main.jsx            # Entry point
```

## 🎯 Funcionalidades

### Autenticação
- Cadastro de usuários
- Login/Logout
- Recuperação de senha
- Verificação de email

### Conteúdo
- Filmes populares e em alta
- Séries de TV
- Busca por título
- Detalhes do conteúdo
- Trailers e vídeos
- Conteúdo similar

### Personalização
- Histórico de busca
- Preferências do usuário
- Interface adaptável

## 🌐 Variáveis de Ambiente

```env
VITE_API_URL=sua_api_url_aqui
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Executa o linter

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto é livre para uso pessoal e educacional.

## 🎬 Preview

Acesse: [https://japaflix.netlify.app](https://seu-site.netlify.app)

---

Desenvolvido com ❤️ por [Mateus Alves](https://github.com/mateusalvescps)
