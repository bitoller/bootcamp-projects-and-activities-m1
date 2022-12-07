/*1- Leia um número inteiro e imprima-o na saída.*/

let number = parseInt(prompt("Digite um número"));
alert(`Seu número é ${number}`);

/*2- Leia três números inteiros e exiba a soma destes números.*/

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite um número"));
let number3 = parseInt(prompt("Digite um número"));
let numberTotal = number1 + number2 + number3;
alert(`A soma dos números é ${numberTotal}`);

/*3- Leia duas notas semestrais inteiras e exiba a média anual.*/

let grade1 = parseInt(
  prompt("Qual é a sua nota em Matemática no primeiro semestre?")
);
let grade2 = parseInt(
  prompt("Qual é a sua nota em Matemática no segundo semestre?")
);
let gradeTotal = grade1 + grade2;
let averageValue = gradeTotal / 2;
alert(`A média das notas é ${averageValue}`);

/*4- Leia um número inteiro e exiba o resto da divisão deste número por 2.*/

let number4 = parseInt(prompt("Digite um número"));
let remainder1 = number4 % 2;
alert(`O resto da divisão de ${number4} por 2 é ${remainder1}`);

/*5- Leia um número inteiro e imprima o seu quadrado.*/

let number5 = parseInt(prompt("Digite um número"));
let squareValue = number5 * number5;
alert(`O valor ${number5} ao quadrado é ${squareValue}`);

/*6- Entrar com quatro números e imprimir a média ponderada,
sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.*/

let grade3 = parseFloat(prompt("Qual é a sua nota?"));
let grade4 = parseFloat(prompt("Qual é a sua nota?"));
let grade5 = parseFloat(prompt("Qual é a sua nota?"));
let grade6 = parseFloat(prompt("Qual é a sua nota?"));
let weightArith = (grade3 * 1 + grade4 * 2 + grade5 * 3 + grade6 * 4) / 10;
alert(`O valor da média ponderada é ${weightArith}`);

/*7- Leia as notas de quatro provas de um concurso: Matemática,
Português, Conhecimentos Gerais e Informática. 
Calcule e exiba a média ponderada, tendo Matemática com peso 2.*/

let grade7 = parseFloat(prompt("Qual é a sua nota em Matemática?"));
let grade8 = parseFloat(prompt("Qual é a sua nota em Português?"));
let grade9 = parseFloat(prompt("Qual é a sua nota em Conhecimentos Gerais?"));
let grade10 = parseFloat(prompt("Qual é a sua nota em Informática?"));
let weightArith1 = (grade7 * 2 + grade8 + grade9 + grade10) / 2;
alert(`O valor da média ponderada é ${weightArith1}`);

/*8- Leia dois números inteiros (dividendo e divisor, respectivamente)
e exiba a divisão, a divisão inteira e o resto da divisão destes números.*/

let dividend = parseInt(prompt("Digite o dividendo"));
let divisor = parseInt(prompt("Digite o divisor"));
let answer = dividend / divisor;
let remainder2 = dividend % divisor;
alert(
  `${dividend} dividido por ${divisor} é = ${answer.toFixed(
    0
  )} com o resto de ${remainder2}`
);

/*9- Fazer um algoritmo que possa entrar com o saldo de uma aplicação
e ele imprima o novo saldo, considerando o reajuste de 1%.*/

let value = parseFloat(prompt("Digite o saldo"));
let newValue = value + (value * 1) / 100;
alert(`O valor do novo saldo é ${newValue}`);

/*10- Construir um aplicativo que calcule a área de um losango.
Identificar quais serão as entradas necessárias.*/

let diagonal1 = parseFloat(prompt("Digite o valor da diagonal 1"));
let diagonal2 = parseFloat(prompt("Digite o valor da diagonal 2"));
let rhombusArea = (diagonal1 * diagonal2) / 2;
alert(`O valor da área do losango é ${rhombusArea}`);
