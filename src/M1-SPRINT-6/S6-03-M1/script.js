let ganhador = {
  nome: "Adamastor",
  nascimento: "16/09/1986",
  cpf: "123.321.789-98",
  estadoCivil: "Casado",
};

//1

function mayHaveWon(name, id) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  ganhador.nome =
    ganhador.nome.charAt(0).toUpperCase() + ganhador.nome.slice(1);
  if (name == ganhador.nome && id == ganhador.cpf) {
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
  let isLoser = mayHaveWon(object.name, object.cpf);
  if (isLoser.toLowerCase() == "não é ganhador!") {
    losers.push(object);
  }
  return losers.length.toString();
}
console.log(losersList(people));
