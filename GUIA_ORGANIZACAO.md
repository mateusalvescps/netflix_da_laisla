# Japaflix - Guia de Organização de Arquivos

## 📂 Estrutura Completa

```
japaflix/
├── public/
│   └── assets/
│       ├── amor/
│       │   ├── video/
│       │   │   └── destaque.mp4
│       │   ├── momentos-especiais/
│       │   │   ├── foto1.jpg
│       │   │   ├── foto2.jpg
│       │   │   ├── foto3.jpg
│       │   │   └── ...
│       │   ├── viagens/
│       │   │   ├── foto1.jpg
│       │   │   └── ...
│       │   └── sorrisos/
│       │       └── ...
│       ├── teamo/
│       │   ├── video/
│       │   ├── nosso-amor/
│       │   └── aventuras/
│       ├── meubem/
│       │   ├── video/
│       │   └── memorias/
│       └── minhavida/
│           ├── video/
│           └── historia/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   │   └── config.js          ← Configurações dos perfis
│   ├── App.jsx
│   └── index.css
└── package.json
```

## ✅ Checklist de Adição de Conteúdo

### Para adicionar VÍDEO:

1. ✅ Coloque o vídeo em `/public/assets/{perfil}/video/`
2. ✅ Nome do arquivo: `destaque.mp4`
3. ✅ Formatos aceitos: MP4, WebM, MOV

### Para adicionar FOTOS:

1. ✅ Crie ou use uma pasta de galeria em `/public/assets/{perfil}/{categoria}/`
2. ✅ Nomeie as fotos: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.
3. ✅ Formatos aceitos: JPG, JPEG, PNG, WebP
4. ✅ Configure a galeria no arquivo `src/data/config.js`

### Para adicionar NOVO PERFIL:

1. ✅ Crie a pasta em `/public/assets/{nome-do-perfil}/`
2. ✅ Adicione no `src/data/config.js`:

```javascript
// No array profiles:
{
  id: 5,
  name: "Novo Perfil",
  folder: "novo-perfil",
  avatar: "😍"
}

// No objeto galleries:
"novo-perfil": [
  { id: 1, title: "Minha Galeria", folder: "minha-galeria" }
]
```

## 🎯 Exemplo Prático

### Adicionando fotos de uma viagem:

1. Crie a pasta: `/public/assets/amor/viagem-paris/`
2. Adicione as fotos: `foto1.jpg`, `foto2.jpg`, etc.
3. Configure em `src/data/config.js`:

```javascript
export const galleries = {
  amor: [
    // ... outras galerias
    { id: 4, title: "Viagem a Paris", folder: "viagem-paris" }
  ]
}
```

## ⚡ Otimização de Arquivos

### Vídeos:
- Comprima usando HandBrake ou similar
- Recomendado: 1080p, 30fps
- Bitrate: 5-8 Mbps

### Imagens:
- Use TinyPNG.com para comprimir
- Largura recomendada: 800-1200px
- Qualidade: 80-85%

## 🐛 Solução de Problemas

**Vídeo não aparece?**
- Verifique se o nome é exatamente `destaque.mp4`
- Confirme que está na pasta `/public/assets/{perfil}/video/`

**Fotos não aparecem?**
- Verifique a numeração: `foto1.jpg`, `foto2.jpg` (sem espaços)
- Confirme que o nome da pasta no `config.js` está correto

**Nova galeria não aparece?**
- Confira se adicionou no `config.js` no perfil correto
- Verifique se há fotos na pasta
