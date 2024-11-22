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
const products = [
    
  { id: 1, name: 'Abobrinha com Creamcheese', type: 'Pizza Salgada', description: "Uma combinação leve e saborosa de abobrinha, palmito, cebola roxa e muçarela vegana. Cada fatia oferece uma experiência fresca e cheia de sabor, ideal para quem busca uma opção vegana deliciosa.", image: 'pizza_abobrinha_creamcheese.webp', price: 39.90 },
  { id: 2, name: 'Atum com Muçarela', type: 'Pizza Salgada', description: 'Atum, cebola e muçarela. Uma explosão de sabores do mar, com o atum suculento e a cebola caramelizada, tudo envolto na muçarela derretida que realça cada mordida com um toque de riqueza.', image: 'pizza_atum_muçarela.webp', price: 42.90 },
  { id: 3, name: 'Atum Paulistano', type: 'Pizza Salgada', description: 'Atum e cebola. Para os amantes do atum, essa opção destaca a essência do peixe e a doçura da cebola, criando uma combinação simples e deliciosa sem a muçarela.', image: 'pizza_atum_paulistano.webp', price: 36.90 },
  { id: 4, name: 'Bacon com Catupiry', type: 'Pizza Salgada', description: 'Catupiry e bacon crocante. A crocância do bacon combinada com a suavidade do catupiry cria uma experiência rica e perfeita para quem busca uma pizza cheia de sabor e textura.', image: 'pizza_bacon_catupiry.webp', price: 38.90 },
  { id: 5, name: 'Baiana com Muçarela', type: 'Pizza Salgada', description: 'Uma deliciosa combinação de bananas fatiadas caramelizadas e cobertas com chocolate branco. Cada mordida traz a doçura da fruta e a cremosidade do chocolate em perfeita harmonia.', image: 'pizza_banana_caramelizada.webp', price: 34.90 },
  { id: 6, name: 'Banana Caramelizada', type: 'Pizza Doce', description: 'Muçarela, calabresa moída, ovos, pimenta calabresa, cebola e parmesão. Uma explosão de sabores baianos com a muçarela derretida, a calabresa picante e os ovos, realçados pela pimenta calabresa e a cebola, e finalizados com o parmesão para uma experiência rica e apimentada.', image: 'pizza_banana_caramelizada.webp', price: 36.90 },
  { id: 7, name: 'Banoffee Havanna', type: 'Pizza Doce', description: 'Uma mistura rica de bananas, doce de leite Havanna, cream cheese e um toque de canela. Finalizada com caramelo e flor de sal, oferece uma explosão de sabores e texturas a cada pedaço.', image: 'pizza_banoffee_havanna.webp', price: 41.90 },
  { id: 8, name: 'Bauru', type: 'Pizza Salgada', description: 'Muçarela, calabresa moída, ovos, pimenta calabresa, cebola e parmesão. Uma explosão de sabores baianos com a muçarela derretida, a calabresa picante e os ovos, realçados pela pimenta calabresa e a cebola, e finalizados com o parmesão para uma experiência rica e apimentada.', image: 'pizza_banana_caramelizada.webp', price: 37.90 },
  { id: 9, name: 'Bombueno', type: 'Pizza Doce', description: 'Uma combinação deliciosa de creme de avelã com wafer crocante, creme de leite ninho e morangos frescos, finalizada com cacau em pó. Cada fatia é uma experiência de sabores e texturas.', image: 'pizza_bombueno.webp', price: 44.90 },
  {
    id: 10,
    name: 'Brigadeiro Vegano',
    type: 'Pizza Doce',
    description: 'Delicioso brigadeiro vegano sobre uma base macia, ideal para os amantes de sobremesas sem origem animal.',
    image: 'pizza_brigadeiro_vegano.webp',
    price: 39.90
  },
  {
    id: 11,
    name: 'Brócolis com Catupiry',
    type: 'Pizza Salgada',
    description: 'Brócolis frescos e catupiry cremoso sobre uma base de muçarela, uma combinação irresistível.',
    image: 'pizza_brocolis_catupiry.webp',
    price: 38.90
  },
  {
    id: 12,
    name: 'Brócolis Especial',
    type: 'Pizza Salgada',
    description: 'Brócolis salteados com alho, muçarela e um toque especial de tempero caseiro.',
    image: 'pizza_brocolis_especiale.webp',
    price: 36.90
  },
  {
    id: 13,
    name: 'Bufalá',
    type: 'Pizza Salgada',
    description: 'Uma pizza clássica com muçarela de búfala, manjericão fresco e azeite de oliva.',
    image: 'pizza_bufala.webp',
    price: 40.90
  },
  {
    id: 14,
    name: 'Calabresa com Bacon',
    type: 'Pizza Salgada',
    description: 'Fatias de calabresa e bacon crocante com cebola e muçarela derretida.',
    image: 'pizza_calabreza_bacon.webp',
    price: 41.90
  },
  {
    id: 15,
    name: 'Calabresa com Muçarela',
    type: 'Pizza Salgada',
    description: 'A clássica pizza de calabresa com cebola e uma generosa camada de muçarela.',
    image: 'pizza_calabreza_muçarela.webp',
    price: 35.90
  },
  {
    id: 16,
    name: 'Camarão Gratinado com Catupiry',
    type: 'Pizza Salgada',
    description: 'Camarões frescos gratinados com catupiry e muçarela, criando uma experiência única.',
    image: 'pizza_camarão_gratinado_catupiry.webp',
    price: 49.90
  },
  {
    id: 17,
    name: 'Carbonara',
    type: 'Pizza Salgada',
    description: 'Inspirada na clássica receita italiana, com bacon, parmesão, creme e um toque de pimenta.',
    image: 'pizza_carbonara.webp',
    price: 43.90
  },
  {
    id: 18,
    name: 'Chocomaltine',
    type: 'Pizza Doce',
    description: 'Uma explosão de chocolate com maltine em uma massa leve e crocante.',
    image: 'pizza_chocomaltine.webp',
    price: 39.90
  },
  {
    id: 19,
    name: 'Cinco Queijos',
    type: 'Pizza Salgada',
    description: 'Uma combinação de cinco queijos especiais: muçarela, parmesão, gorgonzola, provolone e catupiry.',
    image: 'pizza_cinco_queijos.webp',
    price: 45.90
  },
  {
    id: 20,
    name: 'Cookie Cream',
    type: 'Pizza Doce',
    description: 'Creme de baunilha com pedaços crocantes de cookie, perfeita para os amantes de doces.',
    image: 'pizza_cookie_cream.webp',
    price: 42.90
  },
  {
    id: 21,
    name: 'Del Pizzaiolo',
    type: 'Pizza Salgada',
    description: 'A pizza especial do pizzaiolo, com ingredientes frescos e secretos.',
    image: 'pizza_del_pizzaiolo.webp',
    price: 47.90
  },
  {
    id: 22,
    name: 'Frango com Catupiry',
    type: 'Pizza Salgada',
    description: 'Frango desfiado temperado com catupiry, muçarela e um toque especial.',
    image: 'pizza_frango_catupiry.webp',
    price: 39.90
  },
  {
    id: 23,
    name: 'Jaca Louca',
    type: 'Pizza Vegana',
    description: 'Jaca desfiada bem temperada com ervas e especiarias em uma base de muçarela vegana.',
    image: 'pizza_jaca_louca.webp',
    price: 41.90
  },
  {
    id: 24,
    name: 'Lombinho com Catupiry',
    type: 'Pizza Salgada',
    description: 'Lombinho suculento e catupiry cremoso em uma base de muçarela.',
    image: 'pizza_lombinho_catupiry.webp',
    price: 43.90
  },
  {
    id: 25,
    name: 'Marguerita',
    type: 'Pizza Salgada',
    description: 'Muçarela, tomate fresco, manjericão e azeite de oliva, uma verdadeira pizza italiana.',
    image: 'pizza_marguerita.webp',
    price: 34.90
  }
];



const grid = document.querySelector('.products-grid');
products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  
  // Conteúdo do card com preço
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-name">${product.name}</div>
    <button class="price-button">R$ ${product.price}</button>
  `;
  
  // Evento de clique no card para abrir o modal
  card.addEventListener('click', () => openModal(product));
  grid.appendChild(card);
});

// Modal
function openModal(product) {
  document.getElementById('pizzaImage').src = product.image;
  document.getElementById('pizzaType').textContent = product.type;
  document.getElementById('pizzaName').textContent = product.name;
  document.getElementById('pizzaDescription').textContent = product.description;

  document.getElementById('pizzaModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('pizzaModal').style.display = 'none';
}