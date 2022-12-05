/*1- O litro da gasolina está custando R$ 6,80. 
Solicite ao usuário que entre com quanto em dinheiro ele deseja comprar de gasolina.
Alerte em tela a quantidade em litros abastecido pelo cliente.*/

let literPrice = 6.8;
let purchaseValue = parseFloat(
  prompt("Quanto em dinheiro deseja comprar de gasolina?")
);
let liters = purchaseValue / literPrice;
alert(`O cliente abasteceu ${liters}l`);

/*2- Escreva um programa que leia uma temperatura em graus Celsius
e alerte o valor convertido em graus Fahrenheit.*/

let celsius = parseFloat(prompt("Qual é a temperatura em graus Celsius?"));
let fahrenheit = (9 * celsius + 160) / 5;
alert(`O valor ${celsius}ºC em Fahrenheit é ${fahrenheit}`);

/*3- Escreva um programa que leia uma temperatura em graus Fahrenheit
e alerte o valor convertido em graus Celsius.*/

let fahrenheit2 = parseFloat(
  prompt("Qual é a temperatura em graus Fahrenheit?")
);
let celsius2 = ((fahrenheit2 - 32) * 5) / 9;
alert(`O valor ${fahrenheit2}ºF em Celsius é ${celsius2}`);

/*4- Escreva um programa que leia o comprimento,
a largura e a altura de uma caixa retangular em metros.
Calcule e alerte o valor do volume desta caixa.*/

let lenght = parseFloat(prompt("Qual é o comprimento da caixa em metros?"));
let width = parseFloat(prompt("Qual é a largura da caixa em metros?"));
let height = parseFloat(prompt("Qual é a altura da caixa em metros?"));
let volume = lenght * width * height;
alert(`O volume da caixa é de: ${volume}m³`);

/*5- Escreva um programa que faça a leitura de um valor numérico
inteiro e alerte o valor lido elevado ao quadrado.*/

let numericValue = parseInt(prompt("Digite um valor para elevar ao quadrado"));
let squareValue = numericValue * numericValue;
alert(`O valor ${numericValue} ao quadrado é ${squareValue}`);

/*6- Escreva um programa que leia 5 números. Atribua cada nota a uma variável,
realize a soma de todas e tire a média. Alerte a soma e a média.*/

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

/*7- Escreva um programa que leia 2 valores inteiros positivos
e alerte o resto da divisão do primeiro pelo segundo.*/

let numberValue1 = parseInt(prompt("Digite um valor positivo para a divisão"));
let numberValue2 = parseInt(
  prompt("Digite outro valor positivo para a divisão")
);
let remainder = numberValue1 % numberValue2;
alert(
  `O resto da divisão de ${numberValue1} por ${numberValue2} é ${remainder}`
);

/*8- Escreva um programa que leia uma frase ou uma palavra,
e alerte o comprimento desta string.*/

let word = prompt("Digite uma palavra ou frase para a contagem de caracteres");
let wordSize = word.length;
alert(`Esse texto tem ${wordSize} caracteres`);

/*9- Escreva um programa que leia uma palavra ou frase e alerte qual a primeira
e a última letra de uma string, a primeira deve ser alertada em caixa alta(Maiúscula)
e a segunda em caixa baixa(Minúscula).*/

let word2 = prompt(
  "Digite uma palavra ou frase para a definir qual é a primeira e última letra"
);
let firstLetter = word2.charAt(0).toUpperCase();
let lastLetter = word2.charAt(word2.length - 1).toLowerCase();
alert(
  `A primeira letra deste texto é ${firstLetter} e a última é ${lastLetter}`
);

/*10- Escreva um programa que leia o nome, sobrenome e a idade e setor de uma pessoa.
Estas informações são as informações do crachá de um funcionário.
O nome e o sobrenome devem estar em maiúsculo.
Alerte os dados do funcionário em tela, para que ele confirme as informações.*/

let nameValue = prompt("Digite seu primeiro nome");
let surnameValue = prompt("Digite seu sobrenome");
let age = parseInt(prompt("Digite sua idade"));
let sector = prompt("Digite seu setor");
alert(
  `Nome: ${nameValue.toUpperCase()} ${surnameValue.toUpperCase()} - Idade: ${age} - Setor: ${sector}`
);
