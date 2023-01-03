let pessoa = {
  nome: "clara",
  anoNascimento: 1996,
  nomeDeUsuario: "CLARA_GOMES",
  temCarro: true,
  valeCombustivel: "R$ 0,00",
  distanciaDoTrabalho: "120km",
  endereco: [],
};

/*1- Desenvolva uma função que recebe como parâmetro o objeto pessoa
e atualiza as propriedades nome e nomeDeUsuario da seguinte forma:
nome : deve ter apenas a primeira letra em maiúsculo.
nomeDeUsuario : deve estar todo em letra minúscula.
Retorne o objeto pessoa atualizado.*/

function att(object) {
  object.nome = object.nome.charAt(0).toUpperCase() + object.nome.slice(1);
  object.nomeDeUsuario = object.nomeDeUsuario.toLowerCase();
  return object;
}
console.log(att(pessoa));

/*2- Desenvolva uma função que recebe como parâmetro o objeto pessoa.
Essa função irá armazenar o objeto pessoa em uma lista de usuários.
Não é permitido que os usuários da lista sejam menores de idade,
então verifique primeiro a idade da pessoa
(como não estaremos tratando o dia e o mês de nascimento, use apenas o
ano atual e o ano de nascimento como base para calcular).
Caso a pessoa seja maior de idade, insira o objeto na lista de
usuários e retorne a lista.*/

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

/*3- Desenvolva uma função que recebe como parâmetro o objeto pessoa.
Esta função deverá primeiro verificar se a propriedade temCarro é
true ou false; caso seja verdadeiro a pessoa deverá ter a propriedade
valeCombustivel alterada.
Para realizar o cálculo do vale use a seguinte fórmula:
valeCombustivel = ( distanciaDoTrabalho * valorDoLitro ) * 0,7
Caso a pessoa more a mais de 100km de distância do trabalho,
adicione R$15 reais ao vale transporte.
Você deverá tratar a propriedade distanciaDoTrabalho,
pois ela é uma string - use apenas o valor numérico.
Considere o valor do litro como R$6,99.
Retorne o valor do vale combustível em reais (string no formato R$ 0,00).*/

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

/*4- Desenvolva uma função que recebe como parâmetro um tipo de endereço
(casa ou apartamento) e o Estado correspondente à cidade já presente no objeto.
Insira o tipo na propriedade tipo e crie uma nova propriedade
estado para armazenar o Estado recebido.
Retorne o objeto endereco atualizado.*/

function attAddress(type, state) {
  endereco.tipo.push(type);
  endereco.estado = state;
  return endereco;
}
console.log(attAddress("casa", "Paraná"));

/*5- Desenvolva uma função que recebe como parâmetro o objeto
pessoa e o objeto endereco. A função deve inserir o objeto
endereco na propriedade endereco do objeto pessoa.
Retorne o objeto pessoa atualizado.*/

function addAddressPerson(object, address) {
  object.endereco.push(address);
  return object;
}
console.log(addAddressPerson(pessoa, endereco));
