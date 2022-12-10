/*1- Escreva um programa que, receba dois números inteiros.
Alerte em tela o maior número, e a diferença entre os números
em formato de string(texto). Os valores recebidos devem ser
convertidos para inteiro.*/

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite outro número"));
let numberDiff = number1 - number2;

if (number1 > number2) {
  alert(
    `O maior número é ${number1} e a diferença entre os dois é ${numberDiff}`
  );
} else {
  alert(
    `O maior número é ${number2} e a diferença entre os dois é ${numberDiff}`
  );
}

/*2- Escreva um programa que, receba dois números.
⁠Alerte em tela qual o maior valor recebido.
Caso os valores recebidos sejam iguais,
alerte a seguinte mensagem: "Números iguais".
Não sendo iguais, alerte: "O número x é maior que número y".*/

let nmbr1 = parseFloat(prompt("Digite um número"));
let nmbr2 = parseFloat(prompt("Digite outro número"));

if (nmbr1 == nmbr2) {
  alert("Os números são iguais");
} else if (nmbr1 > nmbr2) {
  alert(`O número ${nmbr1} é maior que o número ${nmbr2}`);
} else {
  alert(`O número ${nmbr2} é maior que o número ${nmbr1}`);
}

/*3- Escreva um programa que, leia o salário de um trabalhador
e o valor da prestação de um empréstimo.
Se a prestação for maior que 30% do salário imprima: "Empréstimo não concedido",
caso contrario imprima: "Empréstimo concedido".
⁠Dica: Avalie quanto é 30% do salário e depois verifique
se o valor do empréstimo é maior ou menor.*/

let wage1 = parseFloat(prompt("Digite o seu salário"));
let installment1 = parseFloat(
  prompt("Digite o valor da prestação do empréstimo")
);
let loan1 = 0.3 * wage1;

if (installment1 > loan1) {
  alert("Empréstimo não concedido");
} else {
  alert("Empréstimo concedido");
}

/*4- Escreva um programa que verifique se um número é divisível por 3 ou 5,
mas atenção, caso o valor recebido seja divisível por 3 e 5,
alerte: "Valor inválido".
Se o número for divisível por 3, alerte: "Valor divisível por 3".
Se o número for divisível por 5, alerte: "Valor divisível por 5".
Se o número informado não for inválido e nem divisível por 3 ou 5,
verifique se o valor é par ou ímpar e alerte em tela.*/

let number3 = parseInt(prompt("Digite um número"));

if (number3 % 3 == 0 && number3 % 5 == 0) {
  alert("Valor inválido");
} else if (number3 % 3 == 0) {
  alert("Valor divisível por 3");
} else if (number3 % 5 == 0) {
  alert("Valor divisível por 5");
} else if (number3 % 2 == 0) {
  alert("O valor é par");
} else {
  alert("O valor é ímpar");
}

/*5- Escreva um programa que leia um número inteiro de 1 a 7 e informe o dia da semana
correspondente, sendo domingo, o dia de número 1.
Se o número não corresponder a um dia da semana, alerte uma mensagem de erro.*/

let number4 = parseInt(prompt("Digite um número de 1 a 7"));

if (number4 == 1) {
  alert("Domingo");
} else if (number4 == 2) {
  alert("Segunda-feira");
} else if (number4 == 3) {
  alert("Terça-feira");
} else if (number4 == 4) {
  alert("Quarta-feira");
} else if (number4 == 5) {
  alert("Quinta-feira");
} else if (number4 == 6) {
  alert("Sexta-feira");
} else if (number4 == 7) {
  alert("Sábado");
} else {
  alert("Erro: número inválido");
}

/*6- Escreva um programa que calcule o novo salário dos funcionários com base
no percentual de reajuste.
O programa deve ler, o salário mensal do funcionário e o percentual
de reajuste a ser atribuído.
Alertar o valor do novo salário.
O reajuste é de até 5%.
É permitida a entrada de valor percentual com casos decimais.
O alerte a seguinte frase: "O salário do funcionário corrigido é de: x"*/

let wage2 = parseFloat(prompt("Digite o seu salário mensal"));
let adjustment = parseFloat(prompt("Digite o porcentual de reajuste"));
let newWage = wage2 + (wage2 * adjustment) / 100;

if (adjustment <= 5) {
  alert(`O salário do funcionário corrigido é de: ${newWage.toFixed(2)}`);
} else {
  alert("Insira um reajuste menor que 5%");
}

/*7- Escreva um programa que realiza a conversão de dólar($) para real(R$).
Leia o valor em dólar e a cotação atual.
Realiza a conversão do valor, multiplicando a valor em dólar pelo valor da cotação,
alerte quanto em real equivale o valor em dólar informado.
Alerte o valor total da conversão em real, da seguinte maneira: 
"$x,xx é equivalente a R$y,yy, tendo xy como cotação."*/

let dollar = parseFloat(prompt("Digite o valor em dólar"));
let exchangeRate = parseFloat(prompt("Digite a cotação atual do dólar"));
let real = dollar * exchangeRate;

alert(
  `$${dollar.toFixed(2)} é equivalente a R$${real.toFixed(
    2
  )} tendo ${exchangeRate} como cotação`
);

/*8- Uma Cia de pulverização utiliza avião para pulverizar lavouras.
Os custos de pulverização dependem do tipo de praga e da área a ser contratada
conforme a tabela:
Tipo 1 – ervas daninhas R$ 50,00 por acre;
Tipo 2 – gafanhotos R$ 100,00 por acre;
Tipo 3 – broca R$ 150,00 por acre;
Tipo 4 – todos acima R$ 250,00 por acre.
Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto
de 5%.
Acrescendo mais um desconto, qualquer fazendeiro cujo custo for maior que R$ 750,00
tem um desconto de 10% sobre o valor que ultrapassar os R$ 750,00.
Caso ambos os descontos se aplicam, o da área é calculado antes.
Escreva um algoritmo que leia: o tipo de pulverização (1 a 4) e área a ser pulverizada;
e alerte o valor a ser pago.
Desta forma: "O valor ser pago é de: R$ x"*/

let pestType = parseInt(prompt("Digite o tipo de praga de 1 a 4"));
let acres = parseFloat(prompt("Digite o tamanho da área em acres"));
let price = 0;
let finalPrice = 0;

if (pestType == 1) {
  price = acres * 50;
} else if (pestType == 2) {
  price = acres * 100;
} else if (pestType == 3) {
  price = acres * 150;
} else if (pestType == 4) {
  price = acres * 250;
}
if (acres >= 1000) {
  let areaDiscount = price * 0.05;
  finalPrice = price - areaDiscount;
  alert(`O valor a ser pago é de: R$${finalPrice.toFixed(2)}`);
} else if (price >= 750) {
  let surplusValue = price - 750;
  let priceDiscount = surplusValue * 0.1;
  finalPrice = price - priceDiscount;
  alert(`O valor a ser pago é de: R$${finalPrice.toFixed(2)}`);
} else {
  alert(`O valor a ser pago é de: R$${price.toFixed(2)}`);
}

/*9- Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem,
utilizando um automóvel que faz 12 quilômetros por litro.
Para obter o cálculo, o usuário deve fornecer o tempo gasto (variável TEMPO)
e a velocidade (variável VELOCIDADE) durante a viagem.
Desta forma, será possível obter a distância percorrida com a fórmula.
DISTÂNCIA = TEMPO * VELOCIDADE.
A partir do valor da distância, basta calcular a quantidade de litros
de combustível utilizada na viagem com a fórmula.
⁠LITROS_USADOS = DISTÂNCIA / 12. 
O programa deve alertar os valores da: velocidade, tempo gasto na viagem,
a distância percorrida e a quantidade de litros utilizada na viagem.*/

let time = parseFloat(prompt("Digite o tempo gasto"));
let speed = parseInt(prompt("Digite a velocidade"));
let distance = time * speed;
let gasUsed = distance / 12;

alert(
  `Seu veículo percorreu ${distance}km a ${speed} km/h em ${time}h de viagem e consumiu ${gasUsed.toFixed(
    2
  )}l de gasolina`
);

/*10- Escreva um programa que leia o valor(variável), a taxa(variável) e o tempo(variável) de atraso
de uma prestação e efetue o cálculo referente ao atraso da fatura, para obter o valor corrigido.
Utilizando a fórmula.
⁠PRESTAÇÃO = VALOR + (VALOR* (TAXA/100) * TEMPO).
Alerte o valor da prestação. 
Caso o usuário entre com o tempo 0 ou com casa decimal.
Alerte: "Valor inválido o tempo de atraso deve ser em dias."*/

let price2 = parseFloat(prompt("Digite o valor da prestação"));
let rate = parseFloat(prompt("Digite a taxa da prestação"));
let time2 = parseInt(prompt("Digite o tempo de atraso da prestação"));
let finalPrice2 = price2 + price2 * (rate / 100) * time2;

if (time2 == 0 || time2 % 1 != 0) {
  alert("Valor inválido: o tempo de atraso deve ser em dias");
} else {
  alert(`Valor da prestação: R$${finalPrice2.toFixed(2)}`);
}
