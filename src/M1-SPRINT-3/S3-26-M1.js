/*Você foi contratado para desenvolver um algoritmo que consiga
identificar se um aluno foi ou não aprovado.
Para o aluno ser aprovado, a média da nota total deve estar acima de 8
e a presença deve estar acima de 6.
Desenvolva um algoritmo que leia:
matéria, nome, nota e a presença de um aluno.
As notas de cada matéria varia de 0 a 10. Armazene cada informação em uma variável,
nome e presença serão solicitados somente uma vez.
Nota e matéria serão solicitados ao usuário mais de uma vez,
então você deverá receber estes valores em variáveis diferentes, ou seja,
uma variável para cada matéria e uma variável para cada nota.
Some todas notas e atribua a uma variável somaNota.
Tire a média das notas e atribua a variável uma mediaNota.
Verifique se a média está acima ou abaixo de 8.
Nota e presença não podem ser 0
Nome deve ter no mínimo 5 carácteres*/

let nameValue = prompt("Digite nome do aluno");
let schoolAttendance = parseInt(prompt("Digite a presença do aluno"));
let math = "Matemática";
let gradeMath = parseInt(prompt(`Digite a nota de ${math}:`));
let portuguese = "Português";
let gradePortuguese = parseInt(prompt(`Digite a nota de ${portuguese}:`));
let computing = "Informática";
let gradeComputing = parseInt(prompt(`Digite a nota de ${computing}:`));
let geography = "Geografia";
let gradeGeography = parseInt(prompt(`Digite a nota de ${geography}:`));
let english = "Inglês";
let gradeEnglish = parseInt(prompt(`Digite a nota de ${english}:`));
let history = "História";
let gradeHistory = parseInt(prompt(`Digite a nota de ${history}:`));
let philosophy = "Filosofia";
let gradePhilosophy = parseInt(prompt(`Digite a nota de ${philosophy}:`));
let sociology = "Sociologia";
let gradeSociology = parseInt(prompt(`Digite a nota de ${sociology}:`));
let literature = "Literatura";
let gradeLiterature = parseInt(prompt(`Digite a nota de ${literature}:`));
let physicalEducation = "Educação Física";
let gradePhysicalEducation = parseInt(
  prompt(`Digite a nota de ${physicalEducation}:`)
);
let gradesAddition = 0;
let gradeAverage = 0;

if (nameValue.length <= 5) {
  alert("nome é inválido");
} else {
  if (
    schoolAttendance > 10 ||
    schoolAttendance < 0 ||
    gradeMath > 10 ||
    gradeMath < 0 ||
    gradePortuguese > 10 ||
    gradePortuguese < 0 ||
    gradeComputing > 10 ||
    gradeComputing < 0 ||
    gradeGeography > 10 ||
    gradeGeography < 0 ||
    gradeEnglish > 10 ||
    gradeEnglish < 0 ||
    gradeHistory > 10 ||
    gradeHistory < 0 ||
    gradePhilosophy > 10 ||
    gradePhilosophy < 0 ||
    gradeSociology > 10 ||
    gradeSociology < 0 ||
    gradeLiterature > 10 ||
    gradeLiterature < 0 ||
    gradePhysicalEducation > 10 ||
    gradePhysicalEducation < 0
  ) {
    alert("O valor é inválido");
  } else {
    gradesAddition =
      gradeMath +
      gradePortuguese +
      gradeComputing +
      gradeGeography +
      gradeEnglish +
      gradeHistory +
      gradePhilosophy +
      gradeSociology +
      gradeLiterature +
      gradePhysicalEducation;
    gradeAverage = gradesAddition / 10;
    if (gradeAverage >= 8 && schoolAttendance >= 6) {
      alert(
        `A nota do aluno ${nameValue} é de ${gradeAverage} e sua presença de ${schoolAttendance}: Aluno aprovado!`
      );
    } else {
      alert(
        `A nota do aluno ${nameValue} é de ${gradeAverage} e sua presença de ${schoolAttendance}: Aluno reprovado!`
      );
    }
  }
}
