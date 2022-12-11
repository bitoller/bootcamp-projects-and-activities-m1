/*1- Escreva uma função que apresente como resultado os quadrados dos
números inteiros existentes na faixa de valores de 15 a 200.*/

function toSquare() {
  for (let i = 15; i <= 200; i++) {
    console.log(i * i);
  }
}
toSquare();

/*2- Escreva uma função que apresente a soma dos cem primeiros números naturais.
(1+2+3+...+98+99+100).*/

function toAdd() {
  let sumOfAdd = 0;
  for (let i = 1; i <= 100; i++) {
    sumOfAdd += i;
  }
  console.log(sumOfAdd);
}
toAdd();

/*3- Escreva uma função que apresente todos os valores numéricos menores
que 200 que são divisíveis por 4.*/

function numValueLessthan200DivBy4() {
  for (let i = 0; i < 200; i++) {
    if (i % 4 == 0) {
      console.log(i);
    }
  }
}
numValueLessthan200DivBy4();

/*4- Escreva uma função que calcule o resultado da soma e
da média aritmética dos valores pares situados na faixa numérica de 50 até 70.*/

function sumOfAddAndArithmeticAvg() {
  let sum = 0;
  let even = 0;
  let arithmeticAverage = 0;
  for (let i = 50; i <= 70; i++) {
    if (i % 2 == 0) {
      sum += i;
      even++;
    }
  }
  arithmeticAverage = sum / even;
  console.log(`A soma é ${sum} e a média é ${arithmeticAverage}`);
}
sumOfAddAndArithmeticAvg();

/*5- Elabore uma função que apresente os valores de conversão de graus Celsius
em graus Fahrenheit a cada dez graus, iniciando a contagem em dez graus
Celsius e finalizando em cem graus Celsius.
O programa deve apresentar os valores das duas temperaturas.*/

function celsiusConversion() {
  let celsius = 0;
  let fahrenheit = 0;
  for (let i = 10; i <= 100; i += 10) {
    celsius = i;
    fahrenheit = (9 * celsius + 160) / 5;
    console.log(`${celsius}C = ${fahrenheit}F`);
  }
}
celsiusConversion();
