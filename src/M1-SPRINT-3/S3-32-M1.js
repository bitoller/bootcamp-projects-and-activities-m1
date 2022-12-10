/*1- Escreva uma função que leia um número inteiro e imprima-o na saída.*/

function nmbrInt() {
  let numberInt = parseInt(prompt("digite um número"));
  alert(numberInt);
}
nmbrInt();

/*2- Escreva uma função que recebe três números inteiros
e exiba a soma destes números.*/

function nmbrsAdd() {
  let numberInt1 = parseInt(prompt("digite um número"));
  let numberInt2 = parseInt(prompt("digite um número"));
  let numberInt3 = parseInt(prompt("digite um número"));
  let numberIntAdd = numberInt1 + numberInt2 + numberInt3;
  alert(`A soma dos números é ${numberIntAdd}`);
}
nmbrsAdd();

/*3- Escreva uma função recebe duas notas semestrais inteiras e exiba a média anual,
dada em 12 meses.
Realize a soma das duas notas, e a divisão por 12 para obter o resultado.
Use o método toFixed() para tratar a informação.*/

function semGrades() {
  let semesterGrades1 = parseInt(prompt("digite a nota semestral"));
  let semesterGrades2 = parseInt(prompt("digite a nota semestral"));
  let yearAverageGrades = (semesterGrades1 + semesterGrades2) / 12;
  alert(`A média anual é ${yearAverageGrades.toFixed(2)}`);
}
semGrades();

/*4- Escreva uma função que receba dois números inteiros e
exiba o resto da divisão do primeiro pelo segundo.
Caso não haja resto, alerte: "Esta é uma divisão exata".
Caso haja, alerte: "Esta é uma divisão inexata e o resto é x"*/

function nmbrsRemainder() {
  let numberInt3 = parseInt(prompt("digite um número"));
  let numberInt4 = parseInt(prompt("digite um número"));
  let numberIntRemainder = numberInt3 % numberInt4;

  if (numberIntRemainder == 0) {
    alert("Esta é uma divisão exata");
  } else {
    alert(`Esta é uma divisão inexata e o resto é ${numberIntRemainder}`);
  }
}
nmbrsRemainder();

/*5- Escreva uma função que recebe um número inteiro e alerte o seu quadrado.
Desta forma: "O quadrado de x é xx"*/

function nmbrSquare() {
  let numberInt5 = parseInt(prompt("digite um número"));
  let numberIntSqrd = numberInt5 * numberInt5;
  alert(`O quadrado de ${numberInt5} é ${numberIntSqrd}`);
}
nmbrSquare();

/*6- Escreva uma função que recebe quatro números e alerte a média ponderada,
sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.
Cálculo do peso: PESO X NOTA
Alerte a média, desta forma: "A média ponderada, é: x"*/

function weightedMean() {
  let grade1 = parseFloat(prompt("Qual é a sua nota?"));
  let grade2 = parseFloat(prompt("Qual é a sua nota?"));
  let grade3 = parseFloat(prompt("Qual é a sua nota?"));
  let grade4 = parseFloat(prompt("Qual é a sua nota?"));
  let weightedMean1 = (grade1 * 1 + grade2 * 2 + grade3 * 3 + grade4 * 4) / 10;
  alert(`O valor da média ponderada é ${weightedMean1}`);
}
weightedMean();

/*7- Escreva uma função que recebe as notas de quatro provas de um concurso:
Matemática, Português, Conhecimentos Gerais e Informática.
Calcule e exiba a média ponderada tendo Matemática como peso 2,
para as demais notas considere 1 como peso.
Alerte a média com o seguinte formato: "A média ponderada é de: x"*/

function weightedMean2() {
  let gradeMath = parseFloat(prompt("Qual é a sua nota em Matemática?"));
  let gradePortuguese = parseFloat(prompt("Qual é a sua nota em Português?"));
  let gradeGeneralKnowledge = parseFloat(
    prompt("Qual é a sua nota em Conhecimentos Gerais?")
  );
  let gradeComputing = parseFloat(prompt("Qual é a sua nota em Informática?"));
  let weightedMean2 =
    (gradeMath * 2 +
      gradePortuguese * 1 +
      gradeGeneralKnowledge * 1 +
      gradeComputing * 1) /
    5;
  alert(`O valor da média ponderada é ${weightedMean2}`);
}
weightedMean2();

/*8- Escreva uma função que recebe o saldo de uma aplicação e alerte o novo saldo,
considerando o reajuste de 3%.
Alerte o valor reajustado da seguinte forma: "O novo salário é de: x"*/

function readjustment() {
  let appBalance = parseFloat(prompt("Qual é o valor do saldo"));
  let appBalanceReadjustment = appBalance + appBalance * 0.03;
  alert(`O novo salário é de R$${appBalanceReadjustment.toFixed(2)}`);
}
readjustment();

/*9- Escreva uma função que calcule a área de um triângulo.
Data a função: A = (b . h)/2.
Onde Área é A, b é base h é a altura.
Solicite, estes dados ao usuário.
Alerte a área calculada, desta forma: "A área do triângulo é: x"*/

function triangleArea() {
  let triangleBase = parseFloat(prompt("Qual é o valor da Base do triângulo"));
  let triangleHeight = parseFloat(
    prompt("Qual é o valor da Altura do triângulo")
  );
  let triangleArea1 = (triangleBase * triangleHeight) / 2;
  alert(`A área do triângulo é: ${triangleArea1}`);
}
triangleArea();
