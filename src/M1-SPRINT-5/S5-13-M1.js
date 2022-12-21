/*1- Pessoa - Modele um objeto para representar uma pessoa,
com os seguintes atributos:
nome
anoDeNascimento
cidade
Em seguida, crie as seguintes funções:
Função criarPessoa.
Esta função será responsável por criar um objeto do tipo pessoa
a partir dos parâmetros recebidos. A função irá receber três parâmetros:
nome - um valor do tipo string
anoDeNascimento - um valor do tipo number
cidade - um valor do tipo string
Retorne o objeto pessoa modelado com as informações passadas.
Função apresentar.
Esta função será responsável por retornar todos os dados de
uma pessoa em string, com a seguinte mensagem:
"{nome da pessoa} possui {idade da pessoa} anos de idade e atualmente
está morando em {cidade da pessoa}."*/

let person = {
  name: "Elizabeth Trumbull",
  yearOfBirth: 1991,
  city: "Atlanta",
};
console.log(person);

function createPerson(name, yearOfBirth, city) {
  return {
    name: name,
    yearOfBirth: yearOfBirth,
    city: city,
  };
}
console.log(createPerson(person.name, person.yearOfBirth, person.city));

function present(object) {
  let date = new Date();
  return `${object.name}possui ${
    date.getFullYear() - object.yearOfBirth
  } anos de idade e atualmente está morando em ${object.city}.`;
}
console.log(present(person));

/*2- Elevador - Modele um objeto Elevador para armazenar as
informações de um elevador dentro de um prédio.
Um Elevador deve ter os seguintes atributos:
andarAtual - Andar atual, onde o térreo será o andar de número 0.
totalDeAndares - Total de andares no prédio (desconsiderando o térreo).
capacidadeDoElevador - Capacidade do elevador, em quantidade de pessoas.
ocupacaoAtual - Total de pessoas presentes nele.
É uma propriedade do tipo number, será sempre um inteiro.
Em seguida, crie as seguintes funções:
Função entrar.
Esta função tem como objetivo aumentar o número de ocupantes dentro do elevador.
Ela recebe um objeto do tipo elevador como parâmetro.
Acesse a propriedade ocupacaoAtual do objeto elevador.
Incremente a propriedade sempre em mais 1.
Verifique se ao incrementar o elevador não atingiu sua capacidade máxima.
Se sim, retorne: "Elevador lotado".
Se não, retorne: "Ocupação atual em: {ocupacaoAtual}".
Função sair.
Esta função tem como objetivo diminuir o número de ocupantes dentro do elevador.
Ela recebe um objeto do tipo elevador como parâmetro.
Acesse a propriedade ocupacaoAtual do objeto elevador.
Decremente a propriedade sempre em menos 1.
Retorne: "Ocupação atual em: {ocupacaoAtual}"
Função subir.
Esta função tem como objetivo alterar o andar em uma unidade.
Ela recebe como parâmetro um objeto do tipo elevador.
Acesse a propriedade andarAtual do objeto elevador.
Incremente a propriedade sempre em mais 1.
Verifique se ao incremetar, o elevador não atingiu o limite.
Se sim, retorne: "O elevador já se encontra no último andar".
Se não, retorne: "Estamos no andar: {andarAtual}".
Função descer.
Esta função tem como objetivo alterar o andar em uma unidade.
Ela recebe como parâmetro um objeto do tipo elevador.
Acesse a propriedade andarAtual do objeto elevador.
Decremente a propriedade sempre em menos 1.
Verifique se ao decrementar, o elevador não atingiu o térreo.
Se sim, retorne: "O elevador já se encontra no térreo".
Se não, retorne: "Estamos no andar: {andarAtual}"*/

let elevator = {
  currentFloor: 1,
  totalFloors: 3,
  elevatorCapacity: 5,
  currentOcupation: 2,
};

function comeIn(object) {
  object.currentOcupation += 1;
  if (object.currentOcupation > object.elevatorCapacity) {
    return "Elevador lotado";
  } else {
    return `Ocupação atual em: ${object.currentOcupation}`;
  }
}
console.log(comeIn(elevator));

function comeOut(object) {
  object.currentOcupation -= 1;
  return `Ocupação atual em: ${object.currentOcupation}`;
}
console.log(comeOut(elevator));

function goUp(object) {
  if (object.currentFloor == object.totalFloors) {
    return "O elevador já se encontra no último andar";
  } else {
    object.currentFloor += 1;
    return `Estamos no andar: ${object.currentFloor}`;
  }
}
console.log(goUp(elevator));

function goDown(object) {
  if (object.currentFloor == 0) {
    return "O elevador já se encontra no térreo";
  } else {
    object.currentFloor -= 1;
    return `Estamos no andar: ${object.currentFloor}`;
  }
}
console.log(goDown(elevator));

/*3- Televisão - Modele um objeto Televisão.
Este objeto terá os seguintes atributos:
canalAtual - Uma propriedade do tipo number.
volume - Uma propriedade do tipo number.
Em seguida, crie as seguintes funções:
Desenvolva uma função chamada aumentarVolume.
Esta função recebe como parâmetro um objeto do tipo televisão.
Sempre que esta função for chamada ela deve conseguir atualizar o
volume do objeto televisão recebido.
Acesse a propriedade valume do objeto televisão.
Incremente o volume em 1.
O volume máximo é 10.
Se o volume já estiver no máximo ou chegar ao máximo,
retorne: "Volume no máximo".
Se não, retone: "Volume esta em: {volume}".
Desenvolva uma função chamada diminuirVolume.
Esta função recebe como parâmetro um objeto do tipo televisão.
Sempre que esta função for chamada ela deve conseguir atualizar
o volume do objeto televisão recebido.
Acesse a propriedade valume do objeto televisão.
Incremente o volume em 1.
O volume mínimo é 0.
Se o volume já estiver no mínimo ou chegar ao mínimo,
retorne: "Volume no mínimo".
Se não, retone: "Volume esta em: {volume}".
Desenvolva uma função chamada mudarCanalParaCima.
Esta função recebe como parâmetro um objeto do tipo televisão.
Sempre que esta função for chamada ela deve conseguir atualizar
o canal do objeto televisão recebido.
Acesse a propriedade canal do objeto televisão.
Incremente o canal em 1.
O canal máximo é o 100.
Se o canal já estiver no máximo ou chegar ao máximo,
retorne: "Este já é o último canal".
Se não, retone: "O canal atual é: {canal}".
Desenvolva uma função chamada mudarCanalParaBaixo.
Esta função recebe como parâmetro um objeto do tipo televisão.
Sempre que esta função for chamada ela deve conseguir atualizar o
canal do objeto televisão recebido.
Acesse a propriedade canal do objeto televisão.
Decremente o canal em 1.
O canal mínimo é o 0.
Se o canal já estiver no mínimo ou chegar ao mínimo,
retorne: "Este é o primeiro canal".
Se não, retone: "O canal atual é: {canal}".
Desenvolva uma função chamada consultarCanal.
Esta função recebe como parâmetro um objeto do tipo televisão.
Retorne a propriedade canal.
Desenvolva uma função chamada consultarVolume.
Esta função recebe como parâmetro um objeto do tipo televisão.
Retorne a propriedade volume.*/

let tv = {
  currentChannel: 45,
  volume: 0,
};

function raiseVolume(object) {
  if (object.volume == 10) {
    return "Volume no máximo, SEU SURDO";
  } else {
    object.volume += 1;
    return `Volume esta em: ${object.volume}`;
  }
}
console.log(raiseVolume(tv));

function lowerVolume(object) {
  if (object.volume == 0) {
    return "Volume no mínimo";
  } else {
    object.volume -= 1;
    return `Volume esta em: ${object.volume}`;
  }
}
console.log(lowerVolume(tv));

function changeChannelUp(object) {
  if (object.currentChannel == 100) {
    return "Este já é o último canal";
  } else {
    object.currentChannel += 1;
    return `O canal atual é: ${object.currentChannel}`;
  }
}
console.log(changeChannelUp(tv));

function changeChannelDown(object) {
  if (object.currentChannel == 0) {
    return "Este é o primeiro canal";
  } else {
    object.currentChannel -= 1;
    return `O canal atual é: ${object.currentChannel}`;
  }
}
console.log(changeChannelDown(tv));

function consultChannel(object) {
  return object.currentChannel;
}
console.log(consultChannel(tv));

function consultVolume(object) {
  return object.volume;
}
console.log(consultVolume(tv));
