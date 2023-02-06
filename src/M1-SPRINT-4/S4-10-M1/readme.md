Entrega - Katas de JavaScript 1

Introdução
Um kata é um exercício individual onde você pratica uma habilidade de programação repetidamente. Hoje você irá praticar o uso de loops, condicionais, e expressões JavaScript por uma série de katas.

Preencha o código que está faltando em cada função no arquivo katas1.js.

Use um loop for ou while dentro de cada função.

Objetivo
Principais conceitos trabalhados:​

- Uso de estruturas de repetição

- Funções e parâmetros

- Uso de return e console.log



Exercício 1
Desenvolva uma função chamada cubo10, que não recebe parâmetros e deve retornar o cubo dos números de 1 a 10.

Exemplo:

cubo10();
⁠// Retorna 1, 8, 27, ..., 512, 729, 1000​

Exercício 2
Desenvolva uma função chamada divisiveisPor, que receberá dois parâmetros:

1. limite, do tipo Number

2. divisor, do tipo Number

Sua função deve percorrer de 1 até o parâmetro limite e retornar apenas os números divisíveis por divisor com resto zero.

Exemplo:

divisiveisPor(100, 10);
⁠// Retorna 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 pois todos estes números tem resto zero sobre a divisão de 100 por 10.

Exercício 3
Desenvolva uma função chamada posicaoLetra, que receberá dois parâmetros:

1. palavra, do tipo String

2. numero, do tipo Number

Sua função deve retornar a letra que está na posição representada pelo parâmetro numero.

Exemplo:

posicaoLetra("algorítmos", 7);
⁠// Retorna m pois esta é a letra da posição 7.
 
Exercício 4
Desenvolva uma função chamada palavraRecortada, que receberá dois parâmetros:

1. palavra, do tipo String

2. numero, do tipo Number

Sua função deve retornar uma nova string com o recorte de palavra, sendo ele do início até a posição indicada pelo parâmetro numero.

Exemplo:

palavraRecortada("Algoritmos", 4);
⁠// Retorna Algo pois são os 4 primeiros caracteres da string representada pelo parâmetro palavra.

Exercício 5
​Desenvolva uma função chamada palavraResto, que receberá dois parâmetros:​

1. palavra, do tipo String

2. numero, do tipo Number

Sua função deve retornar uma nova string contendo as letras que se encontram a partir da posição inicial indicada através do parâmetro numero.

​Exemplo:

palavraResto("Algoritmos", 2);
⁠// Retorna goritmos pois são os caracteres a partir da posição 2 representada pelo parÂmetro numero.

Exercício 6
Desenvolva uma função chamada contaVogais, que receberá um parâmetro:

1. palavra, do tipo String

Sua função deve retornar a quantidade de vogais presentes na palavra recebida por parâmetro.

Exemplo:

contaVogais("abacaxi")
⁠// Retorna 4, pois existem 4 vogais na palavra "abacaxi".

Exercício 7
Desenvolva uma função chamada textoDeTrasParaFrente, que receberá um parâmetro:

1. texto, do tipo String

Sua função deve percorrer o texto e retorná-lo de trás para frente.

Exemplo:

textoDeTrasParaFrente("abacaxi");
⁠// Retorna "ixacaba", pois inverte as posições das letras de "abacaxi".

Exercício 8
Desenvolva uma função chamada removeEspacos, que receberá um parâmetro:

1. texto, do tipo String

Sua função deve retornar a frase sem os espaços em branco.

Exemplo:

removeEspacos("Não restará   espaços em branco");
⁠// Retorna "Nãorestaráespaçosembranco".

Exercício 9
Desenvolva uma função chamada textoCriptografado, que receberá um parâmetro:

1. texto, do tipo String

Sua função deve retornar a frase criptografada, trocando as seguintes letras

- "A" por "X"
- "E" por "Y"
- "I" por "W"
- "O" por "K"
- "U" por "Z"
Exemplo:

textoCriptografado("Uma frase ultra secreta que precisa ser criptografada");
⁠// Retorna "Zmx frxsy zltrx sycrytx qzy prycisx syr crwptkgrxfxdx".