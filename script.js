

// Carrinho de compras: produtos armazenados em um array
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para atualizar o carrinho na página
function atualizarCarrinho() {
  const carrinhoElement = document.getElementById('produtosCarrinho');
  const carrinhoCount = document.querySelector('.carrinho-count');
  const totalElement = document.getElementById('total'); // Referência para o elemento do total
  carrinhoElement.innerHTML = ''; // Limpar produtos do carrinho

  if (carrinho.length === 0) {
    carrinhoElement.innerHTML = '<p>Seu carrinho está vazio.</p>';
    carrinhoCount.textContent = '0';
    totalElement.textContent = 'R$ 0,00'; // Mostrar total 0 quando o carrinho estiver vazio
  } else {
    let total = 0;
    carrinho.forEach((produto, index) => {
      const produtoDiv = document.createElement('div');
      produtoDiv.classList.add('produto');
      produtoDiv.innerHTML = `
        <p>${produto.nome}</p>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="removerDoCarrinho(${index})">Remover</button>
      `;
      carrinhoElement.appendChild(produtoDiv);
      total += produto.preco; // Calcula o total da compra
    });

    carrinhoCount.textContent = carrinho.length;
    totalElement.textContent = `R$ ${total.toFixed(2)}`; // Exibe o total na página
  }
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  const produto = { nome, preco };
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Salvar no localStorage
  atualizarCarrinho();
}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
  carrinho.splice(index, 1); // Remove o item pelo índice
  localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualizar no localStorage
  atualizarCarrinho();
}

// Função para finalizar a compra
document.getElementById('finalizarCompra').addEventListener('click', function() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  // Simula a finalização da compra (remover os itens do carrinho)
  alert('Compra finalizada com sucesso!');
  carrinho = []; // Limpar o carrinho
  localStorage.removeItem('carrinho'); // Limpar o carrinho do localStorage
  atualizarCarrinho(); // Atualiza a página
});

// Inicializa o carrinho ao carregar a página
atualizarCarrinho();




