const numeroSecreto = parseInt (Math.random()  * 1000) +1;
console.log(numeroSecreto);
let nome = prompt('Qual o seu nome?');
let tentativas = 1;
let tentativasRestantes = 10;
alert(`Fique calmo, estamos gerando um novo número para você!`)


for (let contador = 0; tentativas < 10; tentativas++) {

    let palpite = nome + prompt(`${nome}, adivinhe um número de 1 a 1000:`);

    if (palpite == numeroSecreto) {
        alert(`Parabéns você acertou! O número secreto é ${numeroSecreto}`);
        break;
    } else if (palpite >= numeroSecreto) {
        alert(`${nome}, o número secreto é menor do que ${palpite}!`);
    } else if (palpite <= numeroSecreto) {
        alert(`${nome}, o número secreto é maior do que ${palpite}!`);
    }

    tentativasRestantes--

    const palavraTentativas = tentativas > 1?"tentativas":"tentativa";
    alert(`Você já teve ${tentativas} ${palavraTentativas}, restam apenas ${tentativasRestantes}.` )

}

alert(`Que pena ${nome} seu número de tentativas acabaram, o numero secreto era ${numeroSecreto}! Recarregue a página e tente novamente.`);



