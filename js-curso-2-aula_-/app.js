let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){

    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e 10');
    responsiveVoice.speak(texto, 'Brasilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial()

function verificarChute(){

    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio){
        
        exibirNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(chute > numeroAleatorio){
            exibirNaTela('p', 'O número secreto é menor!');
            
        }else{
            exibirNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparTela();
    }
   
}

function gerarNumeroAleatorio(){

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaNumeroSorteado.length;

    if( quantidadeDeNumerosNaLista == numeroLimite){
        listaNumeroSorteado = [];
    }
    if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{

        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial()
}
