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

// Função para abrir o menu
function abrirMenu() {
    document.getElementById("menuLateral").style.left = "0"; // Move o menu para a tela
}

// Função para fechar o menu
function fecharMenu() {
    document.getElementById("menuLateral").style.left = "-450px"; // Move o menu para fora da tela
}


