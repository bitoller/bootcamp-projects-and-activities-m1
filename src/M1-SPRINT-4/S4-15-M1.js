/*1- Escreva uma função que consiga inserir novos elementos em uma lista.
A lista pode armazenar no máximo 10 elementos.
Elementos do tipo string com mais de 7 caracteres não são permitidos.
Em caso de sucesso, retorne: "Elemento inserido com sucesso, a lista agora é: x"
sendo x lista atualizada.
Em caso de falha, retorne: "Não foi possível inserir este valor"*/

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

/*2- Escreva uma função que recebe uma lista A como parâmetro.
A lista A deve ter exatamente 15 elementos inteiros.
Criar uma lista B de mesmo tipo, observando a seguinte lei de formação:
"Todo elemento da matriz B deve ser o quadrado do elemento da matriz A correspondente".
Retorne a lista B resultante.*/

let listA = [1, 5, 7, 9, 3, 5, 5, 3, 6, 3, 2, 3, 2, 9, 2];
function double(list) {
  let listB = [];
  if (list.length == 15) {
    //todo elemento b deve ser quadrado de a
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
