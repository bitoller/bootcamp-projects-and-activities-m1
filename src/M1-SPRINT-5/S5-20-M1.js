const alunoCurso = {
  nome: "João",
  idade: 31,
  curso: "FullStack",
  instituicao: "Kenzie Br",
  materias: ["Html", "Css", "JavaScript", "Python"],
  situacaoMatricula: true,
};

function getTheCourse(object) {
  return `You're enrolled in the ${object.curso} course`;
}

function getTheSubjects(object) {
  let subjects = "";
  for (let i = 0; i < object.materias.length; i++) {
    subjects += object.materias[i] + " ";
  }
  return `These are your ${object.curso} course subjects: ${subjects}`;
}

function enrollmentStatus(object) {
  if (object.situacaoMatricula == true) {
    return "Your enrollment is active";
  }
  return "Your enrollment is inactive";
}

function generateStudentCard(object) {
  let cardInformation = `Name: ${object.nome}, Age: ${object.idade}, Course: ${object.curso}, Institution: ${object.instituicao}`;
  return cardInformation;
}

let functions = parseInt(
  prompt(
    "Type 1 for Course, 2 for Subject, 3 for Enrollment Status and 4 for Generate Student Card"
  )
);

let promptAlert = "";

if (functions == 1) {
  promptAlert = getTheCourse(alunoCurso);
} else if (functions == 2) {
  promptAlert = getTheSubjects(alunoCurso);
} else if (functions == 3) {
  promptAlert = enrollmentStatus(alunoCurso);
} else if (functions == 4) {
  promptAlert = generateStudentCard(alunoCurso);
} else {
  promptAlert = "Error";
}
alert(promptAlert);
console.log(promptAlert);
