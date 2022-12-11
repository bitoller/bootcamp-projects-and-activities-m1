/*1- Escreva uma função chamada renderUpToTwenty.
Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.*/

function renderUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
}
renderUpToTwenty();

/*2- Escreva uma função chamada tenInTenToAHundred().
Quando a função for chamada, os números de 10 a 100, contando de 10 em 10,
devem ser impressos no console.*/

function tenInTenToAHundred() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
}
tenInTenToAHundred();

/*3- Escreva uma função chamada oddUpToTwenty().
Quando a função for chamada, apresente no console os valores entre 0 e 20
que forem ímpares.*/

function oddUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
oddUpToTwenty();

/*4- Escreva uma função chamada evenUpToTwenty().
Quando a função for chamada, apresente no console os valores entre 0 e 20
que forem pares.*/

function evenUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenUpToTwenty();

/*5- Escreva uma função chamada fromNegativeToPositive().
Quando a função for chamada, apresente os valores de -10 a 0.*/

function fromNegativeToPositive() {
  for (let i = -10; i <= 0; i++) {
    console.log(i);
  }
}
fromNegativeToPositive();

/*6- Escreva uma função chamada inDescendingDirection.
Quando a função for chamada, apresente valores de 10 a 0 no console.*/

function inDescendingDirection() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
inDescendingDirection();

/*7- Escreva uma função chamada toSquare().
Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.*/

function toSquare() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}
toSquare();
