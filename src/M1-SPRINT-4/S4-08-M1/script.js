//1

function verticalText(string) {
  let i = 0;
  while (i < string.length) {
    console.log(string[i]);
    i++;
  }
}
verticalText("Frontend");

//2

function incrementText(string) {
  let i = 0;
  let word = "";
  while (i < string.length) {
    word += string[i];
    console.log(word);
    i++;
  }
}
incrementText("Backend");

//3

function incrementTextBackwards(string) {
  let i = string.length - 1;
  let backwardsWord = "";
  while (i >= 0) {
    backwardsWord = string[i] + backwardsWord;
    console.log(backwardsWord);
    i--;
  }
}
incrementTextBackwards("Fullstack");

//4

function padEnd(word, number, repetitionString) {
  let string = "";
  let i = 0;
  while (i < number) {
    string += repetitionString;
    i++;
  }
  return word + string;
}
let padKenzie = padEnd("Kenzie", 5, "foo");
let padKata = padEnd("Kata", 8, "*");
console.log(padKenzie, padKata);

//5

function subString(word, iniPosition, endPosition) {
  let i = iniPosition + 1;
  let string = "";
  while (i < endPosition) {
    string += word[i];
    i++;
  }
  return string;
}
let mozillaString = subString("Mozilla", 0, 4);
let chromeString = subString("Chrome", 3, 5);
console.log(mozillaString, chromeString);

//6

function stringRepeater(word, repetition) {
  let i = 0;
  let string = "";
  while (i < repetition) {
    string += word;
    i++;
  }
  return string;
}
let happyString = stringRepeater("Because I'm happy. ", 3);
console.log(happyString);

//7

function stringCentralizer(word, repetition, element) {
  let i = 0;
  let string = "";
  while (i < repetition) {
    string += element;
    i++;
  }
  return `${string} ${word} ${string}`;
}
let equalString = stringCentralizer("JavaScript", 8, "=");
console.log(equalString);
