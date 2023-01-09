//1

function nmbrInt() {
  let numberInt = parseInt(prompt("digite um número"));
  alert(numberInt);
}
nmbrInt();

//2

function nmbrsAdd() {
  let numberInt1 = parseInt(prompt("digite um número"));
  let numberInt2 = parseInt(prompt("digite um número"));
  let numberInt3 = parseInt(prompt("digite um número"));
  let numberIntAdd = numberInt1 + numberInt2 + numberInt3;
  alert(`A soma dos números é ${numberIntAdd}`);
}
nmbrsAdd();

//3

function semGrades() {
  let semesterGrades1 = parseInt(prompt("digite a nota semestral"));
  let semesterGrades2 = parseInt(prompt("digite a nota semestral"));
  let yearAverageGrades = (semesterGrades1 + semesterGrades2) / 12;
  alert(`A média anual é ${yearAverageGrades.toFixed(2)}`);
}
semGrades();

//4

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

//5

function nmbrSquare() {
  let numberInt5 = parseInt(prompt("digite um número"));
  let numberIntSqrd = numberInt5 * numberInt5;
  alert(`O quadrado de ${numberInt5} é ${numberIntSqrd}`);
}
nmbrSquare();

//6

function weightedMean() {
  let grade1 = parseFloat(prompt("Qual é a sua nota?"));
  let grade2 = parseFloat(prompt("Qual é a sua nota?"));
  let grade3 = parseFloat(prompt("Qual é a sua nota?"));
  let grade4 = parseFloat(prompt("Qual é a sua nota?"));
  let weightedMean1 = (grade1 * 1 + grade2 * 2 + grade3 * 3 + grade4 * 4) / 10;
  alert(`O valor da média ponderada é ${weightedMean1}`);
}
weightedMean();

//7

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

//8

function readjustment() {
  let appBalance = parseFloat(prompt("Qual é o valor do saldo"));
  let appBalanceReadjustment = appBalance + appBalance * 0.03;
  alert(`O novo salário é de R$${appBalanceReadjustment.toFixed(2)}`);
}
readjustment();

//9

function triangleArea() {
  let triangleBase = parseFloat(prompt("Qual é o valor da Base do triângulo"));
  let triangleHeight = parseFloat(
    prompt("Qual é o valor da Altura do triângulo")
  );
  let triangleArea1 = (triangleBase * triangleHeight) / 2;
  alert(`A área do triângulo é: ${triangleArea1}`);
}
triangleArea();
