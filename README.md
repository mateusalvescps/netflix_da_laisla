# 🎬 Netflix da Laisla

Clone simplificado do Netflix com sistema de perfis personalizados.

## 🚀 Como Funciona

### Fluxo do Aplicativo

1. **Login** → Tela de entrada (qualquer email/senha)
2. **Vídeo Intro** → Roda um vídeo de introdução (pode ser pulado)
3. **Seleção de Perfis** → 4 perfis disponíveis (Laisla, Mateus, Kids, Convidado)
4. **Catálogo** → Vídeo principal + categorias de filmes/séries

### 📁 Estrutura de Pastas

```
assets/
├── images/
│   ├── laisla/
│   │   ├── favoritos/    → Imagens para "Favoritos da Laisla"
│   │   ├── series/       → Imagens para "Séries em Alta"
│   │   └── filmes/       → Imagens para "Filmes Recomendados"
│   ├── mateus/
│   │   ├── favoritos/
│   │   ├── acao/
│   │   └── documentarios/
│   ├── kids/
│   │   ├── desenhos/
│   │   └── filmes/
│   └── guest/
│       ├── populares/
│       └── lancamentos/
├── videos/
│   ├── laisla/
│   │   └── main.mp4      → Vídeo principal do perfil Laisla
│   ├── mateus/
│   │   └── main.mp4
│   ├── kids/
│   │   └── main.mp4
│   └── guest/
│       └── main.mp4
└── profiles/
    ├── laisla.png        → Foto do perfil Laisla
    ├── mateus.png
    ├── kids.png
    └── guest.png
```

## ✨ Como Adicionar Conteúdo

### Adicionar Imagens de Filmes/Séries

1. Coloque as imagens (JPG ou PNG) nas pastas correspondentes
2. Nomeie como: `img1.jpg`, `img2.jpg`, `img3.jpg`, etc.
3. Cada imagem adicionada aparecerá automaticamente na categoria

**Exemplo:**
```bash
# Para adicionar favoritos da Laisla
assets/images/laisla/favoritos/img1.jpg
assets/images/laisla/favoritos/img2.jpg
assets/images/laisla/favoritos/img3.jpg
```

### Adicionar Vídeo Principal de um Perfil

1. Coloque o vídeo MP4 na pasta do perfil
2. Nomeie como `main.mp4`

**Exemplo:**
```bash
# Vídeo principal da Laisla
assets/videos/laisla/main.mp4
```

### Adicionar Foto de Perfil

1. Coloque a imagem na pasta `assets/profiles/`
2. Use PNG para melhor qualidade

**Exemplo:**
```bash
assets/profiles/laisla.png
```

### Adicionar Vídeo de Intro (Opcional)

Coloque um vídeo MP4 chamado `intro.mp4` em:
```bash
assets/intro.mp4
```

## 🎨 Personalização

### Adicionar Nova Categoria

Edite o arquivo `script.js` e adicione na seção `profilesData`:

```javascript
{
    title: 'Nome da Nova Categoria',
    folder: 'assets/images/perfil/nova-pasta'
}
```

### Mudar Cores

Edite o arquivo `styles.css` e procure por:
- `#e50914` → Cor vermelha principal
- `#141414` → Cor de fundo
- `#fff` → Cor branca

## 🌐 Deploy no Netlify

1. Faça commit e push no GitHub
2. O Netlify detecta automaticamente e faz deploy
3. Acesse seu site em: `https://seu-site.netlify.app`

## 📝 Notas

- Se não houver imagens nas pastas, usa placeholders automáticos
- Se não houver vídeos, usa imagens de fundo
- Totalmente responsivo (funciona em celular e tablet)
- Sem necessidade de backend ou banco de dados

## 🎯 Próximos Passos

1. Adicione suas imagens favoritas nas pastas
2. Adicione vídeos principais para cada perfil
3. Personalize as fotos de perfil
4. Faça commit e veja online!

---

Desenvolvido com ❤️ para a família
