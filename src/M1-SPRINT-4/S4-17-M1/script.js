//1

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

//2

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

//3

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
