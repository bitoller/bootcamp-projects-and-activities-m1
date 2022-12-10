/*1- Escrever uma função chamada fibonacciNumbers().
A função quando chamada deve apresentar os valores da sequência numérica
de Fibonacci até o décimo quinto termo.
A sequência de Fibonacci é formada por:
⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.
Obtendo-se o termo seguinte a partir da soma do termo atual com o termo anterior,
e assim sucessivamente.
Utilize para este exercício as variáveis
ATUAL -> Representa o valor atual do contador do laço.
ANTERIOR -> Representa o valor anterior do contador.
PRÓXIMO -> Representa o valor seguinte do contador.*/

function fibonacciNumbers() {
  let currentTerm = 1;
  let previousTerm = 0;
  let nextTerm = 0;
  for (i = 1; i <= 15; i++) {
    console.log(previousTerm);
    nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }
}
fibonacciNumbers();

/*2- Escrever um programa que calcule e apresente o somatório do número de
grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:
Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do
quadro anterior.
Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos
(neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos
(tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos
(tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos
adicionados é sempre o dobro da quantidade anterior.
Resultado esperado: 18.446.744.073.709.551.615 grãos no tabuleiro.*/
/*
function chessWheat() {
  for (i = 1; i <= 64; i++) {}
}
chessWheat();
*/