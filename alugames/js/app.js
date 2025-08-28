let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) { // muda status do jogo
    let gameClicado = document.getElementById(`game-${id}`); // pega o jogo pelo ID (1,2,3)
    let imagem = gameClicado.querySelector('.dashboard__item__img'); // usa o id do jogo e pega a IMAGEM dele
    let button = gameClicado.querySelector('.dashboard__item__button'); // usa o id do jogo e pega o BOTAO dele
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); // usa o id do jogo e pega o NOME dele

    //IMAGEM E BOTAO:
    if (imagem.classList.contains('dashboard__item__img--rented')) { //se o jogo estiver alugado (imagem escura)
        if (confirm(`Tem certeza que quer devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
            jogosAlugados--;
        } else return;
        
    } else { //se o jogo estiver disponivel
        alert (`Voce alugou o jogo ${nomeJogo.textContent}`);
        imagem.classList.add('dashboard__item__img--rented'); 
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();});