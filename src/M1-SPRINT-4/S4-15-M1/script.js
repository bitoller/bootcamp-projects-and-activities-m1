//1

let elementsList = [1, 5, 7, 9, 3];
function insertNewElements(value) {
  if (elementsList.length < 10) {
    if (typeof value === "string" && value.length > 7) {
      return "Não foi possível inserir este valor";
    } else {
      elementsList.push(value);
      return `Elemento inserido com sucesso, a lista agora é: ${elementsList}`;
    }
  }
  return "Não foi possível inserir este valor";
}
let callFunction = insertNewElements("ffffffffffffffffff");
console.log(callFunction);
console.log(elementsList);

//2

let listA = [1, 5, 7, 9, 3, 5, 5, 3, 6, 3, 2, 3, 2, 9, 2];
function double(list) {
  let listB = [];
  if (list.length == 15) {
    for (let index = 0; index < list.length; index++) {
      if (typeof list[index] === "number") {
        listB.push(list[index] * list[index]);
      }
    }
  }
  return listB;
}
let callFunction2 = double(listA);
console.log(callFunction2);
