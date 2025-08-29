let maxPista = document.getElementById('qtd-pista').textContent = 100;
let maxSuperior = document.getElementById('qtd-superior').textContent = 200;
let maxInferior = document.getElementById('qtd-inferior').textContent = 400;

function comprar(){

    //pegar parametros
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    //validar qtd > 0
    if (quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    //diminuir do total
    switch (ingresso){
        case "pista":
            maxPista = checarAssentos(quantidade,maxPista);
            break;
        case "superior":
            maxSuperior = checarAssentos(quantidade,maxSuperior);
            break;
        case "inferior": 
            maxInferior = checarAssentos(quantidade,maxInferior);
            break;
    }

    //display diminuido do total
    let campoPista = document.getElementById('qtd-pista');
    let campoSuperior = document.getElementById('qtd-superior');
    let campoInferior = document.getElementById('qtd-inferior');

    campoPista.textContent = maxPista;
    campoSuperior.textContent = maxSuperior;
    campoInferior.textContent = maxInferior;

    //resetar qtd cadeiras
    document.getElementById('qtd').value = '';
}

function checarAssentos (quantidade, max){
    if (quantidade > max){
        alert('Nao e possivel comprar mais assentos do que os disponiveis.'); 
    } else {
        max = max - quantidade;
    }
    return max;
}
