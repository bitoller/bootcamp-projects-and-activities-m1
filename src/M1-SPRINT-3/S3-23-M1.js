//1

let number = parseInt(prompt("Digite um número"));
alert(`Seu número é ${number}`);

//2

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite um número"));
let number3 = parseInt(prompt("Digite um número"));
let numberTotal = number1 + number2 + number3;
alert(`A soma dos números é ${numberTotal}`);

//3

let grade1 = parseInt(
  prompt("Qual é a sua nota em Matemática no primeiro semestre?")
);
let grade2 = parseInt(
  prompt("Qual é a sua nota em Matemática no segundo semestre?")
);
let gradeTotal = grade1 + grade2;
let averageGrades = gradeTotal / 2;
alert(`A média das notas é ${averageGrades}`);

//4

let number4 = parseInt(prompt("Digite um número"));
let remainder1 = number4 % 2;
alert(`O resto da divisão de ${number4} por 2 é ${remainder1}`);

//5

let number5 = parseInt(prompt("Digite um número"));
let squareValue = number5 * number5;
alert(`O valor ${number5} ao quadrado é ${squareValue}`);

//6

let grade3 = parseFloat(prompt("Qual é a sua nota?"));
let grade4 = parseFloat(prompt("Qual é a sua nota?"));
let grade5 = parseFloat(prompt("Qual é a sua nota?"));
let grade6 = parseFloat(prompt("Qual é a sua nota?"));
let weightedMean1 = (grade3 * 1 + grade4 * 2 + grade5 * 3 + grade6 * 4) / 10;
alert(`O valor da média ponderada é ${weightedMean1}`);

//7

let grade7 = parseFloat(prompt("Qual é a sua nota em Matemática?"));
let grade8 = parseFloat(prompt("Qual é a sua nota em Português?"));
let grade9 = parseFloat(prompt("Qual é a sua nota em Conhecimentos Gerais?"));
let grade10 = parseFloat(prompt("Qual é a sua nota em Informática?"));
let weightedMean2 = (grade7 * 2 + grade8 * 1 + grade9 * 1 + grade10 * 1) / 5;
alert(`O valor da média ponderada é ${weightedMean2}`);

//8

let dividend = parseInt(prompt("Digite o dividendo"));
let divisor = parseInt(prompt("Digite o divisor"));
let answer = dividend / divisor;
let remainder2 = dividend % divisor;
alert(
  `${dividend} dividido por ${divisor} é = ${answer.toFixed(
    0
  )} com o resto de ${remainder2}`
);

//9

let value = parseFloat(prompt("Digite o saldo"));
let newValue = value + value * 0.01;
alert(`O valor do novo saldo é ${newValue}`);

//10

let diagonal1 = parseFloat(prompt("Digite o valor da diagonal 1"));
let diagonal2 = parseFloat(prompt("Digite o valor da diagonal 2"));
let rhombusArea = (diagonal1 * diagonal2) / 2;
alert(`O valor da área do losango é ${rhombusArea}`);
