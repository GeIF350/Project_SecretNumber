let tentativas=0;
let nome = prompt("Primeiro, como devo te chamar?");
let limite = prompt("Devo sortear um número entre 0 e quanto?")
let numero;
let numeroSorteado = parseInt(Math.random()*limite);
// console.log(numeroSorteado);

alert(`O número está entre 0 e ${limite}`);

while(numero != numeroSorteado){
    tentativas++
    numero = prompt("Digite uma tentativa: ");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(numero == numeroSorteado) {
        alert(`Parabéns, ${nome}! Você acertou o número ${numeroSorteado} com ${tentativas} ${palavraTentativa}.`)
        break;
    } else {
        if(numero < numeroSorteado){
            alert(`O número secreto é maior que ${numero}`)
        } else {
            alert(`O número secreto é menor que ${numero}`)
        }
    }
}