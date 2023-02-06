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
