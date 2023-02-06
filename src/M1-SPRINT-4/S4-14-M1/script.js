let elementsList = [1, 5, 7, 9, 3, "10", "11", "15"];

//1

function returnAllElements() {
  alert(elementsList);
}
returnAllElements();

//2

function returnSpecificValue(number) {
  return `O valor contido nesta posição é: ${elementsList[number]}`;
}
let callFunction2 = returnSpecificValue(6);
console.log(callFunction2);

//3

function returnElementType(number) {
  if (typeof elementsList[number] === "string") {
    alert(`O elemento ${elementsList[number]} é um elemento do tipo texto`);
  } else {
    alert(`O elemento ${elementsList[number]} é um elemento do tipo número`);
  }
}
returnElementType(7);

//4

function removeLastElementString() {
  if (typeof elementsList[elementsList.length - 1] === "string") {
    elementsList.pop();
    console.log(elementsList);
    return "Elemento deletado com sucesso";
  } else {
    return "Falha ao remover o elemento da lista";
  }
}
let callFunction4 = removeLastElementString();
console.log(callFunction4);

//5

function consultPosition(value) {
  let position = 0;
  for (let i = 0; i < elementsList.length; i++) {
    if (value == elementsList[i]) {
      position = i;
      return `O valor procurado está na posição: ${position}`;
    }
  }
  return "Valor não encontrado";
}
let callFunction5 = consultPosition(9);
console.log(callFunction5);

//6

function removeSpecificElement(element) {
  let position = elementsList.indexOf(element, 0);
  if (elementsList.indexOf(element, 0) != -1) {
    elementsList.splice(position, 1);
    return `Elemento ${element} deletado com sucesso`;
  }
  return "Elemento não encontrado";
}
let callFunction6 = removeSpecificElement(9);
console.log(callFunction6);

//7

function insertInRightPosition(value) {
  if (typeof value !== "string") {
    elementsList.unshift(value);
  } else {
    elementsList.push(value);
  }
  return "Lista atualizada com sucesso";
}
let callFunction7 = insertInRightPosition(9);
console.log(callFunction7);
console.log(elementsList);
