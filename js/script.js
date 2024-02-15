// Anotações para eu estudar, vou fazer o produto como um objeto que começa vazio e depois vai receber o nome e a imagem

const produtos = {};

const buttonCadastro = document.getElementById("btnCadastro");
buttonCadastro.addEventListener("click", cadastrarProduto);

const buttonExibe = document.getElementById("btnExibe");
buttonExibe.addEventListener("click", exibirProduto);

function cadastrarProduto(){
    //Declarando as variáveis/const que vou usar no código
    const produtoInput = document.getElementById("nomeProduto");
    const imagemInput = document.getElementById("imagemProduto");
    
    const nomeProduto = produtoInput.value;
    const imagemProduto = imagemInput.value;

    if (nomeProduto && imagemProduto) {
        produtos[nomeProduto] = imagemProduto;

        // Atualiza as opções do select
        const selectProdutos = document.getElementById("selectProdutos");
        const option = document.createElement("option");
        option.text = nomeProduto;
        selectProdutos.add(option);

        // Limpa os campos de entrada
        produtoInput.value = "";
        imagemInput.value = "";

    }
}

function exibirProduto() {
    
    const selectProdutos = document.getElementById("selectProdutos");
    const exibicaoProduto = document.getElementById("exibicaoProduto");

      // Limpa o conteúdo anterior
      exibicaoProduto.innerHTML = "";

    const nomeProdutoSelecionado = selectProdutos.value;
    const imagemProdutoSelecionado = produtos[nomeProdutoSelecionado];

    if (nomeProdutoSelecionado && imagemProdutoSelecionado) {
      // Exibe o nome do produto
      const nomeProdutoElement = document.createElement("p");
      nomeProdutoElement.textContent = `Nome do Produto: ${nomeProdutoSelecionado}`;
      exibicaoProduto.appendChild(nomeProdutoElement);

      // Exibe a imagem do produto
      const imagemProdutoElement = document.createElement("img");
      imagemProdutoElement.src = imagemProdutoSelecionado;
      exibicaoProduto.appendChild(imagemProdutoElement);
    }
  }