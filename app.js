const numeroSecreto = parseInt(Math.random() * 1000) + 1;
let nome = prompt('Qual o seu nome?');
let tentativas = 1;
let tentativasRestantes = 10;
alert(`Fique calmo, estamos gerando um novo número para você!`)


for (tentativas; tentativas <= 10; tentativas++) {

    let palpite = prompt(`${nome}, adivinhe um número de 1 a 1000:`);

    if (palpite == numeroSecreto) {

        alert(`Parabéns ${nome}, você acertou! O número secreto é ${numeroSecreto}!`);
        break
        
    }else {

        if (palpite < numeroSecreto) {

            alert (`${nome}, o número secreto é maior do que ${palpite}!`);
            tentativasRestantes--

        } else{

            alert (`${nome}, o número secreto é menor do que ${palpite}!`);
            tentativasRestantes--

        }

        alert(`Que pena ${nome} seu número de tentativas acabaram, o numero secreto era ${numeroSecreto}! Recarregue a página e tente novamente.`);
    }

    const palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Você já teve ${tentativas} ${palavraTentativas}, restam apenas ${tentativasRestantes}.`);

}


