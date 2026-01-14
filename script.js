// Interatividade básica
document.addEventListener('DOMContentLoaded', function() {
    console.log('Netflix da Laisla carregado!');

    // Smooth scroll para navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botão principal
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            alert('Bem-vindo ao Netflix da Laisla! 🎬');
        });
    }

    // Botão secundário
    const btnSecondary = document.querySelector('.btn-secondary');
    if (btnSecondary) {
        btnSecondary.addEventListener('click', function() {
            alert('Em breve você poderá entrar em contato! 📧');
        });
    }

    // Animação nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Você selecionou: ${title}`);
        });
    });
});
