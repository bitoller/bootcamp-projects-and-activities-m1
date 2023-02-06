let escola = {
  nome: "Escola Novo Estudo",
  status: true,
  nivel: "Fundamental",
  nota: 3,
};

//1

function changeStatus(object) {
  object.status = !object.status;
  return object;
}
console.log(changeStatus(escola));

//2

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

//3

function changeName(object, value) {
  if (typeof value !== "string") {
    return "Formato inválido";
  }
  object.nome = value;
  return object;
}
console.log(changeName(escola, "Escola Estudo"));

//4

function classifySchool(object, value) {
  if (typeof value == "number" && value >= 1 && value <= 5) {
    object.nota = value;
    return object;
  }
  return "Valor Inválido";
}
console.log(classifySchool(escola, 5));

//5

function verifyStatus(object) {
  return object.status ? "Escola aberta" : "Escola fechada";
}
console.log(verifyStatus(escola));

//6

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
