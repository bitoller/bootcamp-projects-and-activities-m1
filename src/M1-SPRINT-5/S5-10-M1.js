/*O objetivo desta entrega é reutilzar funções dentro de outras funções.
Usaremos a palavra-chave return para obter o resultado dentro do escopo
da função.
Os exercícios seguem uma ordem cronológica,
portanto você precisará reutilizar as funções anteriores nas funções seguintes.
A partir da segunda função (multiply) não será possível utilizar
os seguintes operadores matemáticos:
Adição(+)
Subtração(-)
Divisão(/)
Multiplicação(*)
Ou as seguintes funções aritméticas incorporadas:
Math min
Math max*/

/*SOMA
Escreva uma função chamada add que recebe dois argumentos
e retorna a soma deles.
Você pode usar operadores incorporados para finalizar a definição.
Por exemplo, chamar add(2, 4) deve retornar um resultado 6.*/

function add(number1, number2) {
  return number1 + number2;
}
let result1 = add(2, 4);
console.log(result1);

/*MULTIPLICAÇÃO
Escreva uma função chamada multiply que recebe dois argumentos
e retorna o seu produto.
Ao invés de usar operadores mátematicos ou funções aritimeticas incorporadas,
você precisará de um loop for que chama a função add criada anteriormente.
Por exemplo, chamar multiply(6, 8) deve retornar um resultado 48.*/

function multiply(number1, number2) {
  let multiplyResult = 0;
  for (let i = 0; i < number2; i++) {
    multiplyResult = add(multiplyResult, number1);
  }
  return multiplyResult;
}
let result2 = multiply(6, 8);
console.log(result2);

/*POTÊNCIA
Escreva uma função chamada power que recebe dois argumentos (x e n)
e retorna o resultado de x elevado à potência n.
Ao invés de usar operadores mátematicos ou funções aritimeticas incorporadas,
use outras funções que você escreveu em katas anteriores.
Outra palavra usada para potência é "exponenciação".
Por exemplo, se nós chamarmos power(2, 8), retornaremos 256 ao multiplicar 2
por ele mesmo 8 vezes.*/

function power(x, n) {
  let powerResult = 1;
  for (let i = 0; i < n; i++) {
    powerResult = multiply(powerResult, x);
  }
  return powerResult;
}
let result3 = power(2, 8);
console.log(result3);

/*FATORIAL
Escreva uma função chamada factorial que recebe um único argumento
e retorna o fatorial dele.
Ao invés de usar operadores mátematicos ou funções aritimeticas incorporadas,
use outras funções que você escreveu em katas anteriores.
Por exemplo, chamar factorial(4) deve retornar um resultado 24.*/

function factorial(number) {
  let factorialResult = 1;
  for (let i = number; i > 1; i--) {
    factorialResult = multiply(factorialResult, i);
  }
  return factorialResult;
}
let result4 = factorial(4);
console.log(result4);
