let totalGeral = 0;
//carrinho comeca vazio
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){

    //ler produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1];
    
    //ler quantidade
    let quantidade = document.getElementById('quantidade').value; 

    //calcular preco do produto, subtotal
    let preco = precoProduto * quantidade;
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span> </section>`;
    
    //calcular preco total do carrinho
    totalGeral = totalGeral + preco;

    //display campos do carrinho
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;

    //resetar campo de 'quantidade' ao lado do botao adicionar
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}