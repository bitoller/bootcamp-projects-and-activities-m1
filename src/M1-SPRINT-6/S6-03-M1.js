let ganhador = {
  nome: "Adamastor",
  nascimento: "16/09/1986",
  cpf: "123.321.789-98",
  estadoCivil: "Casado",
};

//1

function mayHaveWon(name, id) {
  if (
    name.charAt(0).toUpperCase() + name.slice(1) == ganhador.nome &&
    id == ganhador.cpf
  ) {
    return "É ganhador!";
  }
  return "Não é ganhador!";
}
console.log(mayHaveWon("Fay", "000.000.000-00"));

//2

let people = {
  name: "Fay",
  cpf: "000.000.000-00",
};

function losersList(object) {
  let losers = [];
  let loserCount = "";
  losers.push(object);
  for (let i = 0; i < losers.length; i++) {
    loserCount = `${losers.length}`;
  }
  return loserCount;
}
console.log(losersList(people));
