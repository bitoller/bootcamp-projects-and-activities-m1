//1

function stringValue(word) {
  let myArray = [word];
  return myArray;
}
let toShow = stringValue("Bianca");
console.log(toShow);

//2

function numberValue(number) {
  let myArray = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
  if (number >= 0 && number <= 3) {
    return myArray[number];
  } else {
    alert("Valor não encontrado");
  }
}
let toShow2 = numberValue(4);
console.log(toShow2);

//3

let wholeNumber = parseInt(prompt("Digite um número inteiro"));
function numberValue2(number) {
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(number);
  if (numbersArray[number] % 2 == 0) {
    return "O valor encontrado nesta posição é par";
  } else {
    return "O valor encontrado nesta posição é ímpar";
  }
}
let toShow3 = numberValue2(wholeNumber);
console.log(toShow3);

//4

function list(nameList) {
  let wordSize = nameList[0].length;
  let biggerName = nameList[0];
  for (let i = 0; i < nameList.length; i++) {
    if (wordSize < nameList[i].length) {
      biggerName = nameList[i];
    }
    wordSize = nameList[i].length;
  }
  return biggerName;
}
let nameList = ["Pedro", "Rafael", "José"];
let bigName = list(nameList);
console.log(`O nome ${bigName} é o maior da lista`);

//5

function numberList(numbers) {
  let sum = 0;
  if (numbers.length >= 2) {
    sum = numbers[numbers.length - 1] + numbers[numbers.length - 2];
  }
  if (sum % 2 == 0) {
    return "A soma é um múltiplo de 2";
  } else {
    return "A soma não é um múltiplo de 2";
  }
}
let numberArray = [1, 4, 6, 9, 11, 8];
let multiple = numberList(numberArray);
console.log(multiple);

//6

function list(nameList, name, index) {
  let namePosition = nameList[index];
  if (name.toLowerCase() == namePosition.toLowerCase()) {
    return "Acertei";
  } else {
    return "Não é quem eu pensava";
  }
}
let names = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];
let isCorrectName = list(names, "Guilherme", 3);
console.log(isCorrectName);

//7

function arrayComparison(numberList, moreNumberList) {
  if (numberList.length > moreNumberList.length) {
    return numberList[numberList.length - 1];
  } else {
    return moreNumberList[moreNumberList.length - 1];
  }
}
let numbers = [1, 2, 3, 4, 5, 6, 10];
let moreNumbers = [5, 7, 9, 4, 2, 3, 9, 6];
let lastElement = arrayComparison(numbers, moreNumbers);
console.log(`A maior lista é a lista cujo último número é: ${lastElement}`);
