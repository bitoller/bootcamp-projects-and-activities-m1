//1

let literPrice = 6.8;
let purchaseValue = parseFloat(
  prompt("Quanto em dinheiro deseja comprar de gasolina?")
);
let liters = purchaseValue / literPrice;
alert(`O cliente abasteceu ${liters}l`);

//2

let celsius = parseFloat(prompt("Qual é a temperatura em graus Celsius?"));
let fahrenheit = (9 * celsius + 160) / 5;
alert(`O valor ${celsius}ºC em Fahrenheit é ${fahrenheit}`);

//3

let fahrenheit2 = parseFloat(
  prompt("Qual é a temperatura em graus Fahrenheit?")
);
let celsius2 = ((fahrenheit2 - 32) * 5) / 9;
alert(`O valor ${fahrenheit2}ºF em Celsius é ${celsius2}`);

//4

let length = parseFloat(prompt("Qual é o comprimento da caixa em metros?"));
let width = parseFloat(prompt("Qual é a largura da caixa em metros?"));
let height = parseFloat(prompt("Qual é a altura da caixa em metros?"));
let volume = length * width * height;
alert(`O volume da caixa é de: ${volume}m³`);

//5

let numericValue = parseInt(prompt("Digite um valor para elevar ao quadrado"));
let squareValue = numericValue * numericValue;
alert(`O valor ${numericValue} ao quadrado é ${squareValue}`);

//6

let grade1 = parseFloat(prompt("Qual é a sua nota em Matemática?"));
let grade2 = parseFloat(prompt("Qual é a sua nota em Física?"));
let grade3 = parseFloat(prompt("Qual é a sua nota em Geografia?"));
let grade4 = parseFloat(prompt("Qual é a sua nota em Inglês?"));
let grade5 = parseFloat(prompt("Qual é a sua nota em Português?"));
let gradeTotal = grade1 + grade2 + grade3 + grade4 + grade5;
let averageValue = gradeTotal / 5;
alert(
  `A soma das notas informadas é ${gradeTotal} e a média das notas é ${averageValue}`
);

//7

let numberValue1 = parseInt(prompt("Digite um valor positivo para a divisão"));
let numberValue2 = parseInt(
  prompt("Digite outro valor positivo para a divisão")
);
let remainder = numberValue1 % numberValue2;
alert(
  `O resto da divisão de ${numberValue1} por ${numberValue2} é ${remainder}`
);

//8

let word = prompt("Digite uma palavra ou frase para a contagem de caracteres");
let wordSize = word.length;
alert(`Esse texto tem ${wordSize} caracteres`);

//9

let word2 = prompt(
  "Digite uma palavra ou frase para definir qual é a primeira e última letra"
);
let firstLetter = word2.charAt(0).toUpperCase();
let lastLetter = word2.charAt(word2.length - 1).toLowerCase();
alert(
  `A primeira letra deste texto é ${firstLetter} e a última é ${lastLetter}`
);

//10

let nameValue = prompt("Digite seu primeiro nome");
let surnameValue = prompt("Digite seu sobrenome");
let age = parseInt(prompt("Digite sua idade"));
let sector = prompt("Digite seu setor");
alert(
  `Nome: ${nameValue.toUpperCase()} ${surnameValue.toUpperCase()} - Idade: ${age} - Setor: ${sector}`
);
