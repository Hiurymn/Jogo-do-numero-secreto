let listaDeNumerosSorteados = []; //Lista com os númeors que já foram sorteados, para n haver repetições
let numeroLimite = 100; //criar uma variavel para n ficar repetindo a quant de elementos da lista  
let numeroSecreto = gerarNumeroAleatorio(); //Variavel para guardar o numero Aleatorio 
//Variavel recebeu uma função 
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número Secreto';
let tentativas = 1
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 0 e 100: ';

//***Melhorando o codigo com função***
function exibirTextoNaTela(tag, texto) { //Passou o valor de h1 na função h1 e P
    let campo = document.querySelector(tag); //exibe algo ** tipo de função 
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})//Ler o texto do site audio, n é JS vem do link html ***rate = velocidade da voz***
}

//Chamando a função exibirTextoNaTela e passsando os parâmetros 
//exibirTextoNaTela('h1','Jogo do número secreto: ');
//exibirTextoNaTela('p', 'Escolha um número entre 0 e 100');
//*** Codigo acima repetindo, vamos melhorar  */
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto: ');
    exibirTextoNaTela('p', 'Escolha um número entre 0 e 100');
}
exibirMensagemInicial();

function verificarChute(){ //Interação com o botão 
    let chute = document.querySelector('input').value; //Pegando o Valor que o usuario digita usa o .value
    //console.log(chute == numeroSecreto); //Não exibe msg nem amarzena, só verifica ** tipo de função 
    //console returna um boolea falso ou verdadeiro 
    let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Você Errou!');
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('h1', 'Você Errou!');
            exibirTextoNaTela('p', 'O número secreto é Maior');
        }
    }
    tentativas++;
    limparCampo() //***Chamando a função***
    
} 
//***Criar a funcão fora***
function gerarNumeroAleatorio() { //gerar némero aleatorio inteiro 
    //return parseInt(Math.random() * 100 + 1); //retorna algo ** tipo de função 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //transformou os numeros sorteados em variavel
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //Verificando o tam da lista 
    if (quantidadeDeElementosNaLista == numeroLimite){ //Se os num sorteados atingir o max, criar uma nova lista com 0 elementos 
        listaDeNumerosSorteados = []; 
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ //Verificando os númeors sorteados
        return gerarNumeroAleatorio();// Se ele sortear um numero que já saiu, gerar outro número.. 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); //add elementos na lista 
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() { //Não retorna valor, apenas limpa p campo de digitação 
    chute = document.querySelector('input'); //Pega a apenas o campo
    chute.value = ''; //pega o valor do chute, e deixa vazio 
}
function reiniciarJogo(){ //Funcão para um novo jogo, não retorna valor, novo jogo após o **clique no botão**
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); //Reiniciar o jogo apenas quando ele acertar o número 
}


