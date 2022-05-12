// Simples - if
var idade = 19;

if (idade >= 18) {
    console.log('pode tirar a carteira de motorista!');

}

// composta - if/else

var nota = 8;

if (nota >= 5) {
    console.log('Aprovado');
} else if (nota == 4) {
    console.log('Aluno foi para Recuperação!');
} else {
    console.log('Reprovado!');
}

// Encadeada
var nota = 9;

if (nota >= 5) {
    console.log('Aprovado!');
    if (nota >= 8.5) {
        console.log('Parabens voce conseguiu uma bolsa de 50%');
    }

} else {
    console.log('reprovado!');
}
// Substituir Caso ... -Switch Case
var num1 = 5;
var num2 = 3;
var operacao = prompt('Digite uma operação');

switch (operacao) {
    case 'Soma':
        console.log(num1 + num2);
        break;


    case 'Subtracao':
        console.log(num1 - num2);
        break;


    case 'Multiplicacao':
        console.log(num1 * num2);
        break;



    case 'Divisao':
        console.log(num1 / num2);
        break;

    default:
        console.log('Operacao Inválida!')
}