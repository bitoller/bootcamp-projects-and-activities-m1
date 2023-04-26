<h1>Javascript: Katas de JavaScript 3</h1>

<h3>Introdução</h3>
Desenvolva as funções que estão sendo pedidas e retorne os resultados.

Suas funções devem utilizar return para retornar os resultados solicitados.

<h3>Exercício 1 - Desenvolva uma função chamada vowelsCount que recebe um parâmetro:</h3>

1. lista, um array de strings.

Sua função deve retornar um novo array substituindo as posições das strings por um número representando a contagem de vogais daquelas palavras.

Exemplo:  
vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]);  
⁠// Deve retornar:  
⁠// [3, 4, 4, 3, 2, 4]  

<h3>Exercício 2 - Desenvolva uma função chamada stringTripletGroup que recebe um parâmetro:</h3>

1. string, uma string representando uma frase.

Sua função deve retornar um novo array com esta frase fatiada em 3 em 3 caracteres posicionados ao longo do array. Caso a quantidade de letras da última posição seja menor que 3, deverá ser completado com espaços vazios.

Exemplo:  
stringTripletGroup("Os três mosqueteiros");  
⁠// Deve retornar:  
⁠// ["Os ", "trê", "s m", "osq", "uet", "eir", "os "]  

<h3>Exercício 3 - Desenvolva uma função chamada dominantPet que recebe um parâmetro:</h3>

1. lista, um array de strings contendo as palavras "dog" ou "cat" escritas sem um padrão definido.

Sua função deve retornar uma string com o tipo de pet que aparece mais vezes no array, ou seja, o dominante em maiúsculo e com uma exclamação ("CAT!" ou "DOG!"). Caso a quantidade dos dois seja igual, deverá retornar a string "DRAW!".

Exemplo:  
dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]  
⁠// Deve retornar:  
⁠// "CAT!"

dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"]  
⁠// Deve retornar:  
⁠// "DRAW!"

<h3>Exercício 4 - Desenvolva uma função chamada divisibleList que recebe dois parâmetros:</h3>

1. lista, um array de números.

2. numero, um número divisor.

Sua função deve percorrer o array recebido por parâmetro, e retornar um novo array somente com os números divisíveis pelo parâmetro divisor.

Exemplo:  
divisibleList([14, 25, 32, 50, 35, 30], 5);⁠  
⁠// Deve exibir:  
⁠// [25, 50, 35, 30]  
⁠// Pois somente esses números são divisíveis por 5.

<h3>Exercício 5 - Desenvolva uma função chamada trustMeOrNot que recebe dois parâmetros:</h3>

1. bool, um valor booleando true ou false

1. numero, um número inteiro positivo.

Sua função deve retornar um array com a quantidade de posições passadas por parâmetro e cada uma destas casas preenchido com o valor booleano escolhido pelo parâmetro.

Exemplo:  
trustMeOrNot(true, 8);  
⁠// Deve retornar:  
⁠// [true, true, true, true, true, true, true, true]

<h3>Exercício 6 - Desenvolva uma função chamada changeLampStatus que recebe um parâmetro:</h3>

1. lista, um array com somente valores booleanos representando o estado da lâmpada (ligado/desligado)

Sua função deve retornar um novo array com os valores booleanos de cada posição invertido.

Exemplo:  
changeLampStatus([false, false, true, false, true, true, true]);  
⁠// Deve retornar:  
⁠// [true, true, false, true, false, false, false]

<h3>Exercício 7 - Desenvolva uma função chamada averageGrade que recebe um parâmetro:</h3>

1. lista, um array com números que representam as notas de atividades de um aluno (0.0 até 10.0)

Sua função deve retornar uma string dizendo qual a média destas notas. O valor da média deve se limitar a duas casas decimais.

Exemplo:  
averageGrade([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]  
⁠// Deve retornar:  
⁠// "A média das notas é: 7.61"

<h3>Exercício 8 - Desenvolva uma função chamada canvasDeliveriesPercentage que recebe um parâmetro:</h3>

1. lista, um array com vários números inteiros/float representando as notas de um aluno (0.0 até 10.0).

Sua função deve retornar uma string dizendo qual a porcentagem de entregas que o aluno atingiu.

Consideraremos que cada entrega possui o valor de 10.0 pontos, sendo este o máximo.

O valor da porcentagem deve se limitar a duas casas decimais.

Exemplo:  
canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]);  
⁠// Deve retornar:  
⁠// "A porcentagem total de entregas atingida é: 71.10%"  
⁠// Pois foram distribuidos 100 pontos e o aluno conseguiu apenas 71.1 dele  
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
