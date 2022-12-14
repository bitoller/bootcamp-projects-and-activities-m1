/*Esta função deve realizar um loop que inicia em 1 e vai até maxValue
para montar uma string seguindo uma sequência de condições.
Escreva uma função snapCrackle que recebe um parâmetro maxValue.
Condições:
Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
Se o número for ímpar e múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
Se o número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
Seus itens devem ser separados sempre por vírgula e espaço.
Esta função deve retornar a string obtida*/

function snapCrackle(maxValue) {
    let string = "";
    for (let i = 1; i <= maxValue; i++) {
      if (i % 2 != 0 && i % 5 == 0) {
        string += "SnapCrackle, ";
      } else if (i % 2 != 0) {
        string += "Snap, ";
      } else if (i % 5 == 0) {
        string += "Crackle, ";
      } else {
        string += `${i}, `;
      }
    }
    return string;
  }
  console.log(snapCrackle(12));
  