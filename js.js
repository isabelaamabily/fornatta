// Função de controle do botão de rolagem
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const button = document.getElementById("backToTopBtn");
    if (window.scrollY > 20) { // Detecta a rolagem vertical
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Função para voltar ao topo da página
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Seleciona o iframe do vídeo
const video = document.getElementById('video');

// Função que será chamada quando o vídeo entrar ou sair da tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando o vídeo entra na tela, adiciona a classe para animar
            video.classList.add('play-video');
        } else {
            // Quando o vídeo sai da tela, remove a animação
            video.classList.remove('play-video');
        }
    });
}, {
    threshold: 0.5 // Quando 50% do vídeo estiver visível na tela
});

// Começa a observar o vídeo
observer.observe(video);


// Função para abrir o menu
function abrirMenu() {
    document.getElementById("menuLateral").style.left = "0"; // Move o menu para a tela
}

// Função para fechar o menu
function fecharMenu() {
    document.getElementById("menuLateral").style.left = "-450px"; // Move o menu para fora da tela
}


