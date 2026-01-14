// Configuração dos perfis
export const profiles = [
  {
    id: 1,
    name: "Amor",
    folder: "amor",
    avatar: "❤️"
  },
  {
    id: 2,
    name: "Te amo",
    folder: "teamo",
    avatar: "💕"
  },
  {
    id: 3,
    name: "Meu bem",
    folder: "meubem",
    avatar: "💖"
  },
  {
    id: 4,
    name: "Minha vida",
    folder: "minhavida",
    avatar: "💗"
  }
];

// Configuração das galerias (categorias) para cada perfil
export const galleries = {
  amor: [
    { id: 1, title: "Momentos Especiais", folder: "momentos-especiais" },
    { id: 2, title: "Nossas Viagens", folder: "viagens" },
    { id: 3, title: "Nossos Sorrisos", folder: "sorrisos" },
  ],
  teamo: [
    { id: 1, title: "Nosso Amor", folder: "nosso-amor" },
    { id: 2, title: "Aventuras Juntos", folder: "aventuras" },
  ],
  meubem: [
    { id: 1, title: "Memórias", folder: "memorias" },
  ],
  minhavida: [
    { id: 1, title: "Nossa História", folder: "historia" },
  ]
};
