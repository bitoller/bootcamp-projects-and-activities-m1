/*1- Desenvolva uma função chamada cubo10, que não recebe parâmetros
e deve retornar o cubo dos números de 1 a 10.*/

function cube10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
  }
}
cube10();

/*2- Desenvolva uma função chamada divisiveisPor, que receberá dois parâmetros:
  1. limite, do tipo Number
  2. divisor, do tipo Number
  Sua função deve percorrer de 1 até o parâmetro limite e retornar
  apenas os números divisíveis por divisor com resto zero.*/

function divBy(limit, divisor) {
  for (let i = 1; i <= limit; i++) {
    if (i % divisor == 0) {
      console.log(i);
    }
  }
}
divBy(100, 10);

/*3- Desenvolva uma função chamada posicaoLetra, que receberá dois parâmetros:
  1. palavra, do tipo String
  2. numero, do tipo Number
  Sua função deve retornar a letra que está na posição
  representada pelo parâmetro numero.*/

function letterPosition(word, number) {
  //let wordSize = word.charAt(number);
  let wordSize = "";
  for (let i = 0; i < word.length; i++) {
    wordSize = word.charAt(number);
  }
  console.log(wordSize);
}
letterPosition("algorítmos", 7);

/*4- Desenvolva uma função chamada palavraRecortada, que receberá dois parâmetros:
  1. palavra, do tipo String
  2. numero, do tipo Number
  Sua função deve retornar uma nova string com o recorte de palavra,
  sendo ele do início até a posição indicada pelo parâmetro numero.*/

function clippedWord(word, number) {
  //let newWord = word2.slice(0, number2);
  let newWord = "";
  for (let i = 0; i < number; i++) {
    newWord += word[i];
  }
  console.log(newWord);
}
clippedWord("Algoritmos", 4);

/*5- Desenvolva uma função chamada palavraResto, que receberá dois parâmetros:​
  1. palavra, do tipo String
  2. numero, do tipo Number
  Sua função deve retornar uma nova string contendo as letras que
  se encontram a partir da posição inicial indicada através do parâmetro numero.*/

function wordRemainder(word, number) {
  //let newWord2 = word3.slice(number3);
  let newWord = "";
  for (let i = number; i < word.length; i++) {
    newWord += word[i];
  }
  console.log(newWord);
}
wordRemainder("Algoritmos", 2);

/*6- Desenvolva uma função chamada contaVogais, que receberá um parâmetro:
  1. palavra, do tipo String
  Sua função deve retornar a quantidade de vogais presentes
  na palavra recebida por parâmetro.*/

function vowelCount(word) {
  //let vwelCount = word4.match(/[aeiou]/gi).length;
  let vwelCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      vwelCount++;
    }
  }
  console.log(vwelCount);
}
vowelCount("abacaxi");

/*7- Desenvolva uma função chamada textoDeTrasParaFrente, que receberá um parâmetro:
  1. texto, do tipo String
  Sua função deve percorrer o texto e retorná-lo de trás para frente.*/

function backwardsWord(word) {
  let backwards = "";
  for (let i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  console.log(backwards);
}
backwardsWord("abacaxi");

/*8- Desenvolva uma função chamada removeEspacos, que receberá um parâmetro:
  1. texto, do tipo String
  Sua função deve retornar a frase sem os espaços em branco.*/

function removeSpaces(word) {
  let noSpace = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] != " ") {
      noSpace += word[i];
    }
  }
  console.log(noSpace);
}
removeSpaces("Não restará   espaços em branco");

/*9- Desenvolva uma função chamada textoCriptografado, que receberá um parâmetro:
  1. texto, do tipo String
  Sua função deve retornar a frase criptografada, trocando as seguintes letras
  - "A" por "X"
  - "E" por "Y"
  - "I" por "W"
  - "O" por "K"
  - "U" por "Z"*/

function encryptedText(word) {
  let encrypted = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "A") {
      encrypted += "X";
    } else if (word[i] == "a") {
      encrypted += "x";
    } else if (word[i] == "E") {
      encrypted += "Y";
    } else if (word[i] == "e") {
      encrypted += "y";
    } else if (word[i] == "I") {
      encrypted += "W";
    } else if (word[i] == "i") {
      encrypted += "w";
    } else if (word[i] == "O") {
      encrypted += "K";
    } else if (word[i] == "o") {
      encrypted += "k";
    } else if (word[i] == "U") {
      encrypted += "Z";
    } else if (word[i] == "u") {
      encrypted += "z";
    } else {
      encrypted += word[i];
    }
  }
  console.log(encrypted);
}
encryptedText("Uma frase ultra secreta que precisa ser criptografada.");
