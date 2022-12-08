/*1- Antes do racionamento de energia ser decretado, quase ninguém falava de quilowatts;
mas agora, todos incorporaram essa palavra em seu vocabulário.
Sabendo que 100 quilowatts de energia custa um sétimo de salário mínimo,
faça um aplicativo que receba o valor do salário mínimo e a quantidade de quilowatts
gasta por uma residência. Então, calcule e imprima:
O valor em reais de cada quilowatt;
O valor em reais a ser pago;
O novo valor a ser pago por essa residência com um desconto de 10%.*/
/*
let minimalWage = parseFloat(prompt("Digite o salário mínimo"));
//100kw = minimalWage / 7
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
*/
/*2- Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconto.
Faça um aplicativo que possa receber o valor de um produto e imprima o novo valor tendo em vista
que o desconto foi de 9%.*/
/*
let productValue = parseFloat(prompt("Digite o valor do produto"));
let newValue = productValue - productValue * 0.9;
alert(`Novo valor: ${newValue}`);
*/
/*3- Receber dois valores do tipo texto (String) e armazenar variáveis A e B.
Efetuar a troca dos valores de forma que a variável A passe a ter o valor da variável B
e que a variável B passe a ter o valor da variável A. Apresentar os valores trocados.*/
/*
let text1 = prompt("Digite um texto");
let text2 = prompt("Digite um texto");
let swap = "";
swap = text1;
text1 = text2;
text2 = swap;
alert(
  `Os valores originais do primeiro texto e segundo texto: ${swap}, ${text1}. Após a troca são: ${text1}, ${swap}`
);
*/
/*
let vhs = parseInt(prompt("Digite quantas fitas"));
let vhsPrice = parseFloat(prompt("Digite o valor do aluguel da fita"));
let vhsRented = (vhs / 3) * 12;
let annualInvoice = (vhsPrice * vhsRented) / vhs;
console.log(annualInvoice);
*/
