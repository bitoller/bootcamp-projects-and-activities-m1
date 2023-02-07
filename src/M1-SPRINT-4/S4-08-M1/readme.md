<h1>Atividade | JavaScript - Desenvolvendo a manipulação de loops</h1>

<h3>Introdução</h3>

<h3>Exercício 1 - Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log.</h3>

<h4>Exemplo:</h4>

verticalText("Frontend");  
⁠// F  
⁠// r  
⁠// o  
⁠// n  
⁠// t  
⁠// e  
⁠// n  
⁠// d  

<h3>Exercício 2 - Desenvolva uma função chamada incrementText, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando, começando somente pela primeira letra, depois a primeira e a segunda e assim sucessivamente conforme exemplo.</h3>

<h4>Exemplo:</h4>

incrementText("Backend");  
⁠// B  
⁠// Ba  
⁠// Bac  
⁠// Back  
⁠// Backe  
⁠// Backen  
⁠// Backend  

<h3>Exercício 3 - Desenvolva uma função chamada incrementTextBackwards, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando ao contrário, começando somente pela última letra, depois a última e a penúltimo e assim sucessivamente conforme exemplo.</h3>

incrementTextBackwards("Fullstack");  
⁠// k  
⁠// ck  
⁠// ack  
⁠// tack  
⁠// stack  
⁠// lstack  
⁠// llstack  
⁠// ullstack  
⁠// Fullstack  

<h3>Exercício 4 - Desenvolva uma função chamada padEnd, que receberá três parâmetros: uma palavra (string), a quantidade de repetição do caractere (number) e o caractere de repetição (string).</h3>

Sua função deverá retornar a string preenchida com o caractere de acordo com o comprimento passado por parâmetro.

padEnd("Kenzie", 5, "foo");  
⁠// Retorna "Kenziefoofoofoofoofoo"

padEnd("Kata", 8, "*");  
⁠// Retorna "Kata********"

<h3>Exercício 5 - Desenvolva uma função chamada subString, que receberá três parâmetros: uma palavra (string), a posição inicial (number) e a posição final (number). Sua função deverá retornar a parte da string ** entre ** o início e o fim dos índices passados por parâmetro (não incluindo os caracteres dos próprios índices).</h3>

padEnd("Mozilla", 0, 4);  
⁠// Retorna "ozi"

padEnd("Chrome", 3, 5);  
⁠// Retorna "m"

<h3>Exercício 6 - Desenvolva uma função chamada stringRepeater, que receberá dois parâmetros: uma palavra ou frase (string) e a quantidade de repetição (number). Sua função deverá retornar uma nova string que contem o número especificado de cópias concatenadas da palavra passada por parâmetro.</h3>

stringRepeater("Because I'm happy. ", 3);  
⁠// Retorna "Because I'm happy. Because I'm happy. Because I'm happy. "

<h3>Exercício 7 - Desenvolva uma função chamada stringCentralizer, que receberá três parâmetros:​ uma palavra (string), a quantidade de repetição do elemento (number) e o elemento de repetição (string).</h3>

Sua função deverá retornar uma nova string que contem a palavra passada por parâmetro centralizada entre os elementos de repetição com um espaço em branco nas laterais e a quantidade exata passada por parâmetro.

stringCentralizer("JavaScript", 8, "=");  
⁠// Retorna "======== JavaScript ========"
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
