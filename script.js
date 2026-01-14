// Configuração dos perfis e seus conteúdos
const profilesData = {
    laisla: {
        name: 'Laisla',
        mainVideo: 'assets/videos/laisla/main.mp4',
        categories: [
            {
                title: 'Favoritos da Laisla',
                folder: 'assets/images/laisla/favoritos'
            },
            {
                title: 'Séries em Alta',
                folder: 'assets/images/laisla/series'
            },
            {
                title: 'Filmes Recomendados',
                folder: 'assets/images/laisla/filmes'
            }
        ]
    },
    mateus: {
        name: 'Mateus',
        mainVideo: 'assets/videos/mateus/main.mp4',
        categories: [
            {
                title: 'Favoritos do Mateus',
                folder: 'assets/images/mateus/favoritos'
            },
            {
                title: 'Ação e Aventura',
                folder: 'assets/images/mateus/acao'
            },
            {
                title: 'Documentários',
                folder: 'assets/images/mateus/documentarios'
            }
        ]
    },
    kids: {
        name: 'Kids',
        mainVideo: 'assets/videos/kids/main.mp4',
        categories: [
            {
                title: 'Desenhos Animados',
                folder: 'assets/images/kids/desenhos'
            },
            {
                title: 'Filmes Infantis',
                folder: 'assets/images/kids/filmes'
            }
        ]
    },
    guest: {
        name: 'Convidado',
        mainVideo: 'assets/videos/guest/main.mp4',
        categories: [
            {
                title: 'Populares',
                folder: 'assets/images/guest/populares'
            },
            {
                title: 'Lançamentos',
                folder: 'assets/images/guest/lancamentos'
            }
        ]
    }
};

// Imagens de exemplo para cada categoria (caso as pastas estejam vazias)
const exampleImages = [
    'https://via.placeholder.com/250x140/e50914/FFFFFF?text=Filme+1',
    'https://via.placeholder.com/250x140/831010/FFFFFF?text=Filme+2',
    'https://via.placeholder.com/250x140/b20710/FFFFFF?text=Filme+3',
    'https://via.placeholder.com/250x140/dc0813/FFFFFF?text=Filme+4',
    'https://via.placeholder.com/250x140/ff0a16/FFFFFF?text=Filme+5',
    'https://via.placeholder.com/250x140/a8070f/FFFFFF?text=Filme+6'
];

let currentProfile = null;

// Função para mudar de tela
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Seleção de Perfis
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
        const profileName = profile.getAttribute('data-profile');
        currentProfile = profileName;
        loadProfileContent(profileName);
        switchScreen('main-screen');
    });
});

// Voltar para perfis
document.getElementById('back-to-profiles').addEventListener('click', () => {
    switchScreen('profiles-screen');
});

// Carregar conteúdo do perfil
function loadProfileContent(profileName) {
    const profile = profilesData[profileName];
    
    // Carregar vídeo principal
    const mainVideo = document.getElementById('main-video');
    mainVideo.src = profile.mainVideo;
    
    // Fallback se não houver vídeo
    mainVideo.addEventListener('error', () => {
        // Usa uma imagem de fundo como fallback
        document.querySelector('.hero-video').style.background = 
            'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920) center/cover';
        mainVideo.style.display = 'none';
    });
    
    // Atualizar título
    document.getElementById('video-title').textContent = `Netflix de ${profile.name}`;
    
    // Carregar categorias
    loadCategories(profile.categories);
}

// Carregar categorias e imagens
function loadCategories(categories) {
    const container = document.getElementById('content-container');
    container.innerHTML = '';
    
    categories.forEach(category => {
        const row = document.createElement('div');
        row.className = 'content-row';
        
        const title = document.createElement('h3');
        title.textContent = category.title;
        
        const slider = document.createElement('div');
        slider.className = 'content-slider';
        
        // Usa imagens de exemplo
        exampleImages.forEach((imgSrc, index) => {
            const card = document.createElement('div');
            card.className = 'content-card';
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Conteúdo ${index + 1}`;
            
            // Tenta carregar da pasta real, se falhar usa placeholder
            const realPath = `${category.folder}/img${index + 1}.jpg`;
            const testImg = new Image();
            testImg.onload = () => { img.src = realPath; };
            testImg.src = realPath;
            
            card.appendChild(img);
            slider.appendChild(card);
        });
        
        row.appendChild(title);
        row.appendChild(slider);
        container.appendChild(row);
    });
}

// Navbar com scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Botões de ação
document.querySelector('.btn-play')?.addEventListener('click', () => {
    alert('▶ Reproduzindo conteúdo...');
});

document.querySelector('.btn-info')?.addEventListener('click', () => {
    alert('ℹ Mais informações sobre este título');
});

// Inicialização
console.log('Netflix da Laisla carregado! 🎬');
