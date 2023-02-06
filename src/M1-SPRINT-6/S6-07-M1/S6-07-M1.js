let pessoa = {
  nome: "clara",
  anoNascimento: 1996,
  nomeDeUsuario: "CLARA_GOMES",
  temCarro: true,
  valeCombustivel: "R$ 0,00",
  distanciaDoTrabalho: "120km",
  endereco: [],
};

//1

function att(object) {
  object.nome = object.nome.charAt(0).toUpperCase() + object.nome.slice(1);
  object.nomeDeUsuario = object.nomeDeUsuario.toLowerCase();
  return object;
}
console.log(att(pessoa));

//2

function createUserList(object) {
  let userList = [];
  let date = new Date();
  let age = date.getFullYear() - object.anoNascimento;
  if (age >= 18) {
    userList.push(object);
  }
  return userList;
}
console.log(createUserList(pessoa));

//3

function calculate(object) {
  let literValue = 6.99;
  let auxDist = 0;
  let formattedValue = "";
  object.valeCombustivel = 0;
  if (object.temCarro == true) {
    auxDist = parseInt(object.distanciaDoTrabalho.slice(0, -2));
    object.valeCombustivel = auxDist * literValue * 0.7;
    if (auxDist >= 100) {
      object.valeCombustivel += 15;
    }
  }
  formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(object.valeCombustivel.toFixed(2));
  return formattedValue;
}
console.log(calculate(pessoa));

let endereco = {
  cidade: "Curitiba",
  logradouro: "Rua Dali",
  numero: 10,
  tipo: [],
};

//4

function attAddress(type, state) {
  endereco.tipo.push(type);
  endereco.estado = state;
  return endereco;
}
console.log(attAddress("casa", "Paraná"));

//5

function addAddressPerson(object, address) {
  object.endereco.push(address);
  return object;
}
console.log(addAddressPerson(pessoa, endereco));
