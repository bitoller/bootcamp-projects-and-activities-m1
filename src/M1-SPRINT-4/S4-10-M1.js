//1

function cube10() {
  let cube = "";
  for (let i = 1; i <= 10; i++) {
    cube += `${i * i * i}, `;
  }
  return cube;
}
console.log(cube10());

//2

function divBy(limit, divisor) {
  let divBy = "";
  for (let i = 1; i <= limit; i++) {
    if (i % divisor == 0) {
      divBy += `${i},`;
    }
  }
  return divBy;
}
console.log(divBy(100, 10));

//3

function letterPosition(word, number) {
  let wordSize = "";
  for (let i = 0; i < word.length; i++) {
    wordSize = word.charAt(number);
  }
  return wordSize;
}
console.log(letterPosition("algorítmos", 7));

//4

function clippedWord(word, number) {
  let newWord = "";
  for (let i = 0; i < number; i++) {
    newWord += word[i];
  }
  return newWord;
}
console.log(clippedWord("Algoritmos", 4));

//5

function wordRemainder(word, number) {
  let newWord = "";
  for (let i = number; i < word.length; i++) {
    newWord += word[i];
  }
  return newWord;
}
console.log(wordRemainder("Algoritmos", 2));

//6

function vowelCount(word) {
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
  return vwelCount;
}
console.log(vowelCount("abacaxi"));

//7

function backwardsWord(word) {
  let backwards = "";
  for (let i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards;
}
console.log(backwardsWord("abacaxi"));

//8

function removeSpaces(word) {
  let noSpace = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] != " ") {
      noSpace += word[i];
    }
  }
  return noSpace;
}
console.log(removeSpaces("Não restará   espaços em branco"));

//9

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
  return encrypted;
}
console.log(
  encryptedText("Uma frase ultra secreta que precisa ser criptografada.")
);
