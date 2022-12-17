const elementsList = [1, 5, 7, 9, 3, "10", "11", "15"];

/*1- Escreva uma função chamada retornaTodosElementos que não recebe nenhum parâmetro.
Sempre que chamada, a função deverá alertar a lista listaDeElementos em tela.*/
/* 
function returnAllElements() {
  return alert(elementsList);
}
let callFunction = returnAllElements();
console.log(callFunction);
 */
/*2- Escreva uma função chamada retornaValorEpecifico. A função deve receber um valor
inteiro como parâmetro. Use o valor recebido para acessar a posição na lista e
retorne o valor contido na posição.
Desta forma:
⁠"O valor contido nesta posição é: x".*/
/* 
function returnSpecificValue(number) {
  for (let i = 0; i < elementsList.length; i++) {
    return `O valor contido nesta posição é: ${elementsList[number]}`;
  }
}
let callFunction2 = returnSpecificValue(6);
console.log(callFunction2);
 */
/*3- Escreva uma função chamada retornarTipoElemento.
A função deve receber um valor inteiro como parâmetro.
Use o valor recebido para acessar a posição na lista.
Alerte qual o tipo do elemento contido na posição (use o typeof para isso).
Se for do tipo texto alerte: "O elemento x é um elemento do tipo texto",
Se for número alerte: "O elemento x é um elemento do tipo número"*/
/* 
function returnElementType(number) {
  for (let i = 0; i < elementsList.length; i++) {
    if (typeof elementsList[number] === "string") {
      return alert(
        `O elemento ${elementsList[number]} é um elemento do tipo texto`
      );
    } else {
      return alert(
        `O elemento ${elementsList[number]} é um elemento do tipo número`
      );
    }
  }
}
let callFunction3 = returnElementType(7);
console.log(callFunction3);
 */
/*4- Escreva uma função removeUltimoElementoString. A função não recebe parâmetros.
Quando chamada, a função deverá remover o último elemento da lista,
mas somente se for uma string.
Caso a remoção seja realizada, retorne: "Elemento deletado com sucesso".
Caso contrário: "Falha ao remover o elemento da lista".*/
/* 
function removeLastElementString() {
  for (let i = 0; i < elementsList.length; i++) {
    if (typeof elementsList[elementsList.length - 1] === "string") {
      elementsList.pop();
      console.log(elementsList);
      return "Elemento deletado com sucesso";
    } else {
      return "Falha ao remover o elemento da lista";
    }
  }
}
let callFunction4 = removeLastElementString();
console.log(callFunction4);
 */
/*5- Escreva uma função chamada consultaPosição. A função deve receber um valor como parâmetro.
Identifique na lista qual a posição do elemento.
Caso consiga identificar o elemento na lista: "O valor procurado está na posição: x ".
⁠Caso não: "Valor não encontrado".*/

//??????????????????????????????????????????????????????????????

/* 
function consultPosition(value) {
  for (let i = 0; i < elementsList.length; i++) {
    if (value == elementsList[i]) {
      let position = elementsList.indexOf(value);
      return `O valor procurado está na posição: ${position}`;
    } else {
      return "Valor não encontrado";
    }
  }
}
let callFunction5 = consultPosition(9);
console.log(callFunction5);
 */
/*6- Escreva uma função chamada removerElementoEspecifico.
A função deve receber um valor como parâmetro.
O valor recebido representa o elemento a ser deletado.
⁠Busque a posição do elemento na lista (use o indexOf()).
Use a posição encontrada para realizar a remoção.
Caso a remoção seja realizada, retorne: "Elemento x deletado com sucesso".
Caso contrário, retorne: "Elemento não encontrado".*/
/* 
function removeSpecificElement(value) {

}
let callFunction6 = removeSpecificElement(9);
console.log(callFunction6);
 */
/*7- Escreva uma função chamada inserirNaPosicaoCorreta.
A função pode receber um valor de 0 a 10 ou uma string.
Caso o valor recebido seja do tipo número, a função deve conseguir inserir o
elemento na primeira posição da lista, caso seja um texto a inserção deve ser feita
na última posição.
Retorne: "Lista atualizada com sucesso".*/
