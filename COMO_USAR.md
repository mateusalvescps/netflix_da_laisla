# 🎬 Japaflix - Guia Completo de Uso

## ✨ O que foi criado?

Um site **totalmente novo**, criado **do zero**, inspirado na Netflix com:

### ✅ Funcionalidades
- 🎭 Tela de seleção de perfil ("Quem está assistindo?")
- 🎬 Vídeo em destaque (Hero) no topo
- 📸 Galerias de fotos organizadas em rows (fileiras horizontais)
- 🎨 Design escuro igual Netflix (#141414)
- 📱 Totalmente responsivo
- ⚡ Efeitos hover e transições suaves

---

## 📂 Estrutura de Pastas

```
japaflix/
├── public/assets/          ← SUAS FOTOS E VÍDEOS AQUI!
│   ├── amor/
│   │   ├── video/
│   │   │   └── destaque.mp4
│   │   ├── momentos-especiais/
│   │   │   ├── foto1.jpg
│   │   │   ├── foto2.jpg
│   │   │   └── foto3.jpg
│   │   ├── viagens/
│   │   └── sorrisos/
│   ├── teamo/
│   ├── meubem/
│   └── minhavida/
└── src/
    ├── components/         ← Componentes Hero e Row
    ├── pages/             ← ProfileSelect e Browse
    └── data/
        └── config.js      ← PERSONALIZE AQUI!
```

---

## 🚀 Como Começar (Passo a Passo)

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Adicionar Seus Vídeos e Fotos

#### Vídeo Principal:
1. Vá para: `public/assets/amor/video/`
2. Adicione seu vídeo com o nome: `destaque.mp4`
3. Formatos aceitos: MP4, WebM, MOV

#### Fotos das Galerias:
1. Vá para: `public/assets/amor/momentos-especiais/`
2. Adicione fotos nomeadas: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.
3. Formatos aceitos: JPG, PNG, WebP

### 3️⃣ Personalizar Nomes (Opcional)

Edite `src/data/config.js`:

```javascript
export const profiles = [
  {
    id: 1,
    name: "Amor",           // ← Mude o nome aqui
    folder: "amor",
    avatar: "❤️"            // ← Mude o emoji
  },
  // ...
]

export const galleries = {
  amor: [
    { 
      id: 1, 
      title: "Momentos Especiais",      // ← Título da galeria
      folder: "momentos-especiais"       // ← Nome da pasta
    },
    // Adicione mais galerias aqui!
  ]
}
```

### 4️⃣ Rodar Localmente
```bash
npm run dev
```

Abra: http://localhost:5173

### 5️⃣ Fazer Build
```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

---

## 🌐 Publicar Online (Netlify)

### Opção 1: Via GitHub (Automático)
1. Já está conectado ao repositório!
2. Entre no Netlify: https://netlify.com
3. Clique em "Add new site" → "Import from Git"
4. Selecione o repositório: `netflix_da_laisla`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Opção 2: Arrastar e Soltar
1. Execute `npm run build`
2. Arraste a pasta `dist/` para o Netlify

---

## 🎯 Exemplos Práticos

### Adicionar Galeria de Viagem:

1. **Criar pasta:**
   ```bash
   mkdir -p public/assets/amor/viagem-paris
   ```

2. **Adicionar fotos:**
   - `foto1.jpg` → Torre Eiffel
   - `foto2.jpg` → Louvre
   - `foto3.jpg` → Notre Dame

3. **Configurar em `config.js`:**
   ```javascript
   amor: [
     // ... galerias existentes
     { id: 4, title: "Paris 2024", folder: "viagem-paris" }
   ]
   ```

### Adicionar Novo Perfil:

1. **Criar pastas:**
   ```bash
   mkdir -p public/assets/meu-perfil/{video,galeria1}
   ```

2. **Adicionar em `config.js`:**
   ```javascript
   // No array profiles:
   { id: 5, name: "Meu Perfil", folder: "meu-perfil", avatar: "😊" }

   // No objeto galleries:
   "meu-perfil": [
     { id: 1, title: "Minha Galeria", folder: "galeria1" }
   ]
   ```

---

## 💡 Dicas Importantes

### Otimização de Arquivos:
- **Vídeos:** Use HandBrake, máximo 1080p, 5-8 Mbps
- **Fotos:** Comprima em TinyPNG.com, largura 800-1200px

### Nomenclatura:
- ✅ `foto1.jpg`, `foto2.jpg` (sem espaços!)
- ❌ `foto 1.jpg`, `minhaFoto.jpg`

### Organização:
- Crie uma pasta para cada categoria
- Máximo 20 fotos por galeria para melhor performance

---

## 🐛 Problemas Comuns

**Vídeo não aparece?**
- ✅ Nome correto: `destaque.mp4`
- ✅ Pasta correta: `/public/assets/{perfil}/video/`
- ✅ Formato: MP4 de preferência

**Fotos não aparecem?**
- ✅ Numeração sequencial: `foto1.jpg`, `foto2.jpg`
- ✅ Pasta configurada no `config.js`
- ✅ Formato: JPG, PNG ou WebP

**Galeria não aparece?**
- ✅ Confira o `config.js`
- ✅ Nome da pasta está correto?
- ✅ Tem pelo menos 1 foto?

---

## 🎨 Tecnologias Usadas

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Estilização
- **Vite** - Build tool ultra-rápido
- **100% Código Novo** - Criado do zero!

---

## ❤️ Personalização Avançada

### Mudar Cores:
Edite `tailwind.config.js`:
```javascript
colors: {
  netflix: {
    black: '#141414',
    red: '#E50914',      // ← Sua cor aqui
  }
}
```

### Adicionar mais perfis:
Adicione quantos perfis quiser em `config.js`!

---

## 📞 Precisa de Ajuda?

1. Leia o `GUIA_ORGANIZACAO.md`
2. Verifique os arquivos de exemplo em `/public/assets/`
3. Confira o `README.md`

---

**Feito com 💕 para um projeto especial de namoro!**
