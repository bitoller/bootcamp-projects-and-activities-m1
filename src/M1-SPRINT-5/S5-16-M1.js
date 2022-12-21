/*Antes de darmos incio as atividades,
modele o objeto escola da seguinte maneira:*/

let escola = {
  nome: "Escola Novo Estudo",
  status: true,
  nivel: "Fundamental",
  nota: 3,
};

/*1- Sabemos que escola tem diversas outras propriedades,
mas por hora usaremos só estas. Nota é a referente a qualidade do ensino,
o valor varia de 1 a 5.
Alterando informações de um objeto
Desenvolva uma função chamada alterarStatus que recebe o objeto
escola como parâmetro.
Esta função tem como objetivo alterar o status de funcionamento da escola.
A escola pode estar true(aberta) ou false(fechada).
A função deve ser capaz de alternar o status de true para false e de
false para true.*/

function changeStatus(object) {
  object.status = !object.status;
  return object;
}
console.log(changeStatus(escola));

/*2- Escreva uma função chamada alteraNivel que recebe como
parâmetro um objeto escola e um valor para o nível.
Nível pode adotar apenas três valores; primário, fundamental e ensino médio.
Caso o valor passado não seja nenhuma das opção retorne: "Valor inválido".
Valide a informação, testanto se ela se encaixa em alguma das três opções.
Normalize as informações para realizar uma comparação precisa.
A primeira letra da string, deve ficar sempre em maiúsculo e as
demais em minúsculo. Retorne o objeto atualizado.*/

function changeLevel(object, value) {
  object.nivel = value.toLowerCase();
  if (
    object.nivel == "primário" ||
    object.nivel == "fundamental" ||
    object.nivel == "ensino médio"
  ) {
    object.nivel = object.nivel.charAt(0).toUpperCase() + object.nivel.slice(1);
    return object;
  } else {
    return "Valor inválido";
  }
}
console.log(changeLevel(escola, "fundamental"));

/*3- Escreva uma função chamada alteraNome que recebe como parâmetro
um objeto escola e um valor para o nome.
Faça a validação do Nome, não pode ser inserido formatos diferentes de string,
caso seja um formato diferente, retorne: 'Formato inválido'.*/

function changeName(object, value) {
  if (typeof value !== "string") {
    return "Formato inválido";
  }
  object.nome = value;
  return object;
}
console.log(changeName(escola, "Escola Estudo"));

/*4- Escreva uma função chamada classificaEscola que recebe como
parâmetro um objeto escola e um valor para a nota.
Nota deve ser do tipo number e deve estar no intervalo de 1 a 5,
caso contrário retorne: 'valor inválido'.*/

function classifySchool(object, value) {
  if (typeof value == "number" && value >= 1 && value <= 5) {
    object.nota = value;
    return object;
  }
  return "Valor Inválido";
}
console.log(classifySchool(escola, 5));

/*5- Escreva uma função chamada verificaStatus que recebe como
parâmetro um objeto escola.
Sua função deve verificar se o status da escola é true ou false.
Se o status da for true, você deve retornar; 'Escola aberta',
caso contrário retorne; 'Escola fechada'.*/

function verifyStatus(object) {
  return object.status ? "Escola aberta" : "Escola fechada";
}
console.log(verifyStatus(escola));

/*6- Escreva uma função chamada verificaQualidadeEnsino que recebe
como parâmetro um objeto escola.
Sua função deve verificar qual a qualidade do ensino da escola.
Se a nota estiver entre 1 e 2, retorne: 'Esta não é uma boa escola'.
Se estiver entre 3 e 4, retorne: 'Esta é uma boa escola' .
Se a nota for 5, retorne: 'Uma escola excelente'*/

function verifyTeachingQuality(object) {
  if (object.nota >= 1 && object.nota <= 2) {
    return "Esta não é uma boa escola";
  } else if (object.nota >= 3 && object.nota <= 4) {
    return "Esta é uma boa escola";
  } else {
    return "Uma escola excelente";
  }
}
console.log(verifyTeachingQuality(escola));
