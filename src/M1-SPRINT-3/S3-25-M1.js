/*1- Antes do racionamento de energia ser decretado, quase ninguém falava de quilowatts;
mas agora, todos incorporaram essa palavra em seu vocabulário.
Sabendo que 100 quilowatts de energia custa um sétimo de salário mínimo,
faça um aplicativo que receba o valor do salário mínimo e a quantidade de quilowatts
gasta por uma residência. Então, calcule e imprima:
O valor em reais de cada quilowatt;
O valor em reais a ser pago;
O novo valor a ser pago por essa residência com um desconto de 10%.*/

let minimalWage = parseFloat(prompt("Digite o salário mínimo"));
let kiloWatts = parseFloat(
  prompt("Digite os quilowatts gastos por residência")
);
let real = ((minimalWage / 7) * 1) / 100;
let price = real * kiloWatts;
let newPrice = price - price * 0.1;
alert(
  `O valor em reais é R$${real.toFixed(
    2
  )}, o valor a ser pago é de R$${price.toFixed(
    2
  )}, com desconto R$${newPrice.toFixed(2)}`
);

/*2- Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconto.
Faça um aplicativo que possa receber o valor de um produto e imprima o novo valor tendo em vista
que o desconto foi de 9%.*/

let productValue = parseFloat(prompt("Digite o valor do produto"));
let newValue = productValue - productValue * 0.9;
alert(`Novo valor: ${newValue}`);

/*3- Receber dois valores do tipo texto (String) e armazenar variáveis A e B.
Efetuar a troca dos valores de forma que a variável A passe a ter o valor da variável B
e que a variável B passe a ter o valor da variável A. Apresentar os valores trocados.*/

let text1 = prompt("Digite um texto");
let text2 = prompt("Digite um texto");
let swap = "";
swap = text1;
text1 = text2;
text2 = swap;
alert(
  `Os valores originais do primeiro texto e segundo texto: ${swap}, ${text1}. Após a troca são: ${text1}, ${swap}`
);

/*4- Criar um aplicativo que leia a quantidade de fitas que
uma locadora de vídeo possui e o valor que ela cobra por cada aluguel,
mostrando as informações pedidas a seguir:
Sabendo que um terço das fitas são alugadas por mês,
exiba o faturamento anual da locadora;
Quando o cliente atrasa a entrega, é cobrada uma multa de
10% sobre o valor do aluguel.
Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso,
calcule o valor ganho com multas por mês;
Sabendo ainda que 2% das fitas se estragam ao longo do ano,
e um décimo do total é comprado para reposição, exiba a quantidade de fitas que
a locadora terá no final do ano.*/
/*
let vhs = parseInt(prompt("Digite quantas fitas"));
let vhsPrice = parseFloat(prompt("Digite o valor do aluguel da fita"));
let vhsRented = (vhs / 3) * 12;
let annualInvoice = (vhsPrice * vhsRented) / vhs;
alert(`${annualInvoice}`);
*/
/*5- Entrar com um número no formato CDU (centena, dezena e unidade)
e exibi-lo de acordo com a seguinte saída:
Centenas:
Dezenas:
Unidades:*/

let number5 = parseInt(prompt("Digite um número com 3 casas"));
let hundreds = parseInt((number5 / 100) % 10);
let tens = parseInt((number5 / 10) % 10);
let units = parseInt(number5 % 10);
alert(`Centenas: ${hundreds}. Dezenas: ${tens}. Unidades: ${units}.`);

/*6- Entrar com um número no formato CDU (centena, dezena e unidade)
e imprimi-lo invertido. Por exemplo, 123 sairá 321. O número deverá ser
armazenado em outra variável antes de ser impresso.*/

let number6 = parseInt(prompt("Digite um número com 3 casas"));
let hundreds1 = parseInt((number5 / 100) % 10);
let tens1 = parseInt((number5 / 10) % 10);
let units1 = parseInt(number5 % 10);
let invertedN = units * 100 + tens * 10 + hundreds;
//let invertedN = parseInt(`${units}${tens}${hundreds}`);
alert(invertedN);

/*quando aprender loop ou function
let htu = parseInt(prompt("numero com 3 casas"));
let uth = 0;
let digit = 0;
let result = 0;
let aux = htu;
//0 = 123 % 10 = 3
digit = htu % 10;
console.log(digit);
//0 = 0 * 10 + 3 = 3
result = result * 10 + digit;
console.log(result);

//123 = (123 / 10) | 0 = 12
aux = (aux / 10) | 0;
console.log(aux);
//3 = 12 % 10 = 2
digit = aux % 10;
console.log(digit);
//3 = 3 * 10 + 2 = 32
result = result * 10 + digit;
console.log(result);

//12 = (12 / 10) | 0 = 1
aux = (aux / 10) | 0;
console.log(aux);
//2 = 1 % 10 = 1
digit = aux % 10;
console.log(digit);
//32 = 32 * 10 + 1 = 321
result = result * 10 + digit;
console.log(result);
*/
/*7- Criar um aplicativo que, dado um número de conta corrente com três dígitos,
retorne o seu dígito verificador. Para encontrar o dígito verificador,
siga o exemplo do número 235:
Somar o número da conta com o seu inverso: 235 + 532 = 767;
Multiplicar cada dígito pela sua ordem posicional (da esquerda para a direita)
e somar estes resultados: 7*1 + 6*2 + 7*3 = 40;
O último dígito desse resultado é o dígito verificador da conta: último dígito de
40 é 0.*/

let bankAcc = parseInt(
  prompt("Digite o número da sua conta corrente de 3 dígitos")
);
let bankAccHundreds = parseInt((bankAcc / 100) % 10);
let bankAccTens = parseInt((bankAcc / 10) % 10);
let bankAccUnits = parseInt(bankAcc % 10);
let reversedBankAcc = bankAccUnits * 100 + bankAccTens * 10 + bankAccHundreds;
let bankAccAdd = bankAcc + reversedBankAcc;

let checkDigitHundred = parseInt((bankAccAdd / 100) % 10);
let checkDigitTens = parseInt((bankAccAdd / 10) % 10);
let checkDigitUnits = parseInt(bankAccAdd % 10);
let checkDigitMultiplication =
  checkDigitHundred * 1 + checkDigitTens * 2 + checkDigitUnits * 3;

let checkDigit = parseInt(checkDigitMultiplication % 10);
alert(checkDigit);
