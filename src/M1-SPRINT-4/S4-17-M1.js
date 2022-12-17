/*1- Escreva uma função que receba uma lista A de dimensão 30
composta apenas por números inteiros.
A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.
Exemplos de saída:
A lista recebida possui x elementos pares e y elementos ímpares.*/

let listA = [
  1, 5, 7, 9, 3, 5, 5, 3, 6, 3, 2, 3, 2, 9, 2, 1, 5, 7, 9, 3, 5, 5, 3, 6, 3, 2,
  3, 2, 9, 2,
];
function evenOrOdd(list) {
  let even = 0;
  let odd = 0;
  for (let index = 0; index < list.length; index++) {
    if (list[index] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return `A lista recebida possui ${even} elementos pares e ${odd} elementos ímpares`;
}
let callFunction = evenOrOdd(listA);
console.log(callFunction);

/*2- Escreva uma função que recebe uma lista A de tamanho 10, composta por números inteiros.
Retorne o total de elementos ímpares existentes na matriz e também o percentual
do valor total de números ímpares em relação à quantidade total de elementos
armazenados na matriz.
Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista"*/

let listA2 = [1, 5, 8, 9, 3, 4, 5, 2, 6, 3];
function oddPercent(list) {
  let odd = 0;
  let percentage = 0;
  for (let index = 0; index < list.length; index++) {
    if (list[index] % 2 != 0) {
      odd++;
    }
  }
  percentage = (100 * odd) / list.length;
  return `O total de valores ímpares é ${odd} e corresponde a ${percentage}% da lista`;
}
let callFunction2 = oddPercent(listA2);
console.log(callFunction2);

/*3- Escreva uma função que receba como parâmetro duas listas A e B, cada uma com dez elementos.
A função deve realizar a validação do tamanho da lista. Caso sejam maiores ou menores que 10,
retorne: "Lista fora dos padrões necessários".
A lista A deve ser composta por valores divisíveis por 2 e 3,
enquanto a lista B deve ser composta apenar por valores múltiplos de 5.
A composição das listas deve ser validada pela função. Caso a composição não esteja correta,
retorne: "Valores não permitidos encontrados".
Construir uma lista C que seja o resultado da junção das listas A e B,
de modo que contenha 20 elementos.
Retorne a lista C resultante.*/

let listA3 = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
let listB = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
function validation(list, list2) {
  let listC = [];
  if (list.length == 10 && list2.length == 10) {
    for (let index = 0; index < list.length; index++) {
      if (
        list[index] % 2 == 0 &&
        list[index] % 3 == 0 &&
        list2[index] % 5 == 0
      ) {
        listC = list.concat(list2);
      } else {
        return "Valores não permitidos encontrados";
      }
    }
    return listC;
  }
  return "Lista fora dos padrões necessários";
}
let callFunction3 = validation(listA3, listB);
console.log(callFunction3);
