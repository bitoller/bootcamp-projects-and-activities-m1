/*Você foi contratado para desenvolver uma solução,
para as consultas referente aos dados dos alunos.
Com base nos dados de um aluno, você deverá desenvolver
a lógica para consultar o curso, matérias, situação da matrícula
e gerar a carteirinha de estudante.
Dado o objeto:
Desenvolva um algorítimo que recebe recebe via prompt o
tipo de consulta que sistema deve realizar.
A entrada deverá ser o número da opção, conforme a ordem a seguir:
1 - Curso
2 - Matéria
3 - Situação de Matrícula
4 - Gerar Carteira
O valor de entrada deve ser obrigatoriamente um número de 1 a 4.
Estruturando as funcionalidades
Curso - Desenvolva uma função chamada getTheCurse.
Esta função recebe como parâmetro um objeto do tipo aluno,
deve acessar a propriedade curso e retornar por meio de um alert
em qual curso o aluno está matriculado.
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 1:
Chame a Função getTheCurse passando o objeto alunoCurso.
Ao receber um objeto do tipo aluno como parâmetro acesse a
propriedade curso e retorne seu valor em um alert
Matéria - Desenvolva uma função chamada getTheSubjects .
Esta função recebe como parâmetro um objeto do tipo aluno,
deve acessar a propriedade materias e retornar por meio de um alert
a lista de materias do aluno.
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 2:
Chame a função getTheSubjects passando como parâmetro um objeto do tipo aluno.
Ao receber o objeto do tipo aluno como parâmetro,
acesse a propriedade materias e retorne seu valor em um alert.
Situação de Matrícula - Desenvolva uma função chamada resgistrationStatus.
Esta função recebe como parâmetro um objeto do tipo aluno.
Deve acessar a propriedade situacaoMatricula, tratar o valor contido,
sendo true = Ativo e false = inativo. Retorna o valor tratado em um alert.
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 3:
Chame a função resgistrationStatus passando como parâmetro um
objeto do tipo aluno.
Acesse a propriedade situacaoMatricula.
Se o valor de situacaoMatricula for igual a true.
Retorne em um alert "Ativo"
Se a propriedade situacaoMatricula for igual a false.
Retorne em um alert "Inativo"
Gerar Carteira - Desenvolva uma função chamada generateStudentCard.
Esta função recebe como parâmetro um objeto do tipo aluno.
A função deve retornar uma string, contendo as propriedades:
nome, idade, curso e instituição.
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 4:
Chame a função generateStudentCard passando como parâmetro um
objeto do tipo aluno.
Crie uma variável cardInformation
Armazene nesta variável uma string com o seguinte formato:
name: "Joe", idade: "31", curso: "FullStack", instituição: "Kenzie Br"
Lembre-se de substituir os valores fixados pelas propriedades do objeto,
para quando o objeto diferir, sua função ainda continue funcionando.
Retorne a variável cardInformation dentro de um alert*/

const alunoCurso = {
  nome: "João",
  idade: 31,
  curso: "FullStack",
  instituicao: "Kenzie Br",
  materias: ["Html", "Css", "JavaScript", "Python"],
  situacaoMatricula: true,
};

//1

function getTheCourse(object) {
  return `You're enrolled in the ${object.curso} course`;
}

//2***

function getTheSubjects(object) {
  let subjects = [];
  for (let i = 0; i < object.materias.length; i++) {
    subjects.push(object.materias[i]);
  }
  return `These are your ${object.curso} course subjects: ${subjects}`;
}

//3

function enrollmentStatus(object) {
  if (object.situacaoMatricula == true) {
    return "Your enrollment is active";
  }
  return "Your enrollment is inactive";
}

//4

function generateStudentCard(object) {
  let cardInformation = `Name: ${object.nome}, Age: ${object.idade}, Course: ${object.curso}, Institution: ${object.instituicao}`;
  return cardInformation;
}

//Prompts & Results

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
