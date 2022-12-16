//1 ª Parte: Modelagem
/*1- Modelando Pessoa.
Dado as propriedades:
Nome
Ano de nascimento
Cpf
Cidade
Estado
Logradouro
Crie o objeto Pessoa que tenha todas propriedades citadas.*/

let personList = {
  name: "Elizabeth Trumbull",
  yearOfBirth: 1991,
  cpf: 51692345434,
  city: "Atlanta",
  state: "GA",
  address: "611 Elk Creek Road",
};
console.log(personList);

/*2- Modelando Escola.
Dado as propriedades:
Nome
Cnpj
Área de atuação
Cidade
Estado
Logradouro
Curso
Crie o objeto Escola que tenha todas propriedades citadas.*/

let schoolList = {
  name: "Kenzie Academy",
  cnpj: 51692345434,
  fieldArea: "T.I.",
  city: "Curitiba",
  state: "Paraná",
  address: "Rua Ildo Olinski",
  course: "Fullstack",
};
console.log(schoolList);

/*3- Modelando Curso.
Dado as propriedades:
Nome
Duração em anos
Turma
Módulos
Crie o objeto Curso que tenha todas propriedades citadas.*/

let courseList = {
  name: "Programação Fullstack",
  durationInYears: 1,
  class: "T16",
  modules: 6,
};
console.log(courseList);

/*4- Modelando Endereço.
Dado as propriedades:
Cidade
Estado
Logradouro
Cep
Crie o objeto Endereço que tenha todas propriedades citadas.*/

let addressList = {
  city: "Curitiba",
  state: "Paraná",
  address: "Rua Francisco Moro",
  zipCode: 81070340,
};
console.log(addressList);

//2 ª Parte: Manipulação
/*Dado o objeto:
const figure = {  
        name: "Carl",   
        classes: ["Warrior"],  
        leader_trend: true,
        power: 6, 
        allied: true  
    }*/
/*1- Escreva uma função chamada returnName. A função, quando chamada,
deve retornar o nome do objeto.*/

function returnName() {
  const figure = {
    name: "Carl",
    classes: ["Warrior"],
    leader_trend: true,
    power: 6,
    allied: true,
  };
  return figure.name;
}
let figureName = returnName();
console.log(figureName);

/*2- Escreva uma função chamada verifyClasses. A função quando chamada,
deve retornar de qual classe é o objeto figure.
Perceba que a propriedade é uma lista - quando a lista tiver apenas um elemento,
retorne somente o valor do elemento, e quando a lista tiver mais que um elemento,
retorne toda a lista.*/

function verifyClasses() {
  const figure = {
    name: "Carl",
    classes: ["Warrior"],
    leader_trend: true,
    power: 6,
    allied: true,
  };
  if (figure.classes.length == 1) {
    return figure.classes[0];
  } else {
    return figure.classes;
  }
}
let classes = verifyClasses();
console.log(classes);

/*3- Escreva uma função chamada realPower. A função quando chamada deve retornar
a força real (power) do objeto figure.
Caso o objeto tenha a propriedade leader_trend definida como true,
o valor da propriedade power é elevada ao quadrado.
Retorne o valor da força do objeto.*/

function realPower() {
  const figure = {
    name: "Carl",
    classes: ["Warrior"],
    leader_trend: true,
    power: 6,
    allied: true,
  };
  if (figure.leader_trend == true) {
    return figure.power * figure.power;
  } else {
    return figure.power;
  }
}
let power = realPower();
console.log(power);

/*4- Escreva uma função chamada inserNewClass. A função deve receber uma string como parâmetro.
A função realiza a inserção de mais uma classe na lista de classes do objeto.
Cada objeto pode obter somente 3 classes.
Antes de inserir uma classe, verifique se o tamanho da lista de classes é maior que 3.
Caso seja maior, retorne: ⁠"Este personagem não pode estar em mais classes".
Caso seja menor, a função deverá verificar se o valor recebido é semelhante a algum valor
permitido. As classes permitidas são:⁠ ⁠"Warrior", "Barbarious", "Arch", "Hunter", "Survivor".
⁠Se o valor for permitido, a função deve verificar se o valor é semelhante à algum valor
que já está contido no objeto.
Se sim, retorne: "O personagem já pertence a classe x"
Caso seja diferente, retorne: ⁠"Classe x inserida com sucesso"
Onde x é o valor da classe.*/

function insertNewClass(string) {
  const figure = {
    name: "Carl",
    classes: ["Warrior"],
    leader_trend: true,
    power: 6,
    allied: true,
  };
  if (figure.classes.length > 2) {
    return "Este personagem não pode estar em mais classes";
  } else {
    for (let i = 0; i < figure.classes.length; i++) {
      if (
        string == "Warrior" ||
        string == "Barbarian" ||
        string == "Archer" ||
        string == "Hunter" ||
        string == "Survivor"
      ) {
        if (string == figure.classes[i]) {
          return `O personagem já pertence a classe ${string}`;
        } else {
          figure.classes.push(string);
          console.log(figure.classes);
          return `Classe ${string} inserida com sucesso`;
        }
      }
    }
  }
}
let newClass = insertNewClass("Hunter");
console.log(newClass);

/*5- Escreva uma função chamada noMoreBarbarious. A função deve conseguir verificar se
o objeto é um aliado.
Todos que possuírem a classe "Barbarious" em sua lista serão considerado um inimigo.
Verifique se a propriedade allied está como verdadeira; se sim, verifique se a classe
"Barbarious" pertence à lista de classes do personagem; caso pertença,
troque a propriedade allied de verdadeira para falsa e retorne:
⁠"O x agora é um inimigo".
Onde x é o nome do objeto.*/

function noMoreBarbarians() {
  const figure = {
    name: "Carl",
    classes: ["Warrior"],
    leader_trend: true,
    power: 6,
    allied: true,
  };
  if (figure.allied == true) {
    for (let i = 0; i < figure.classes.length; i++) {
      if (figure.classes[i] == "Barbarian") {
        figure.allied = false;
      }
    }
    if (figure.allied == true) {
      return `O ${figure.name} continua sendo um amigo.`;
    } else {
      return `O ${figure.name} agora é um inimigo`;
    }
  } else {
    return `O ${figure.name} é um inimigo`;
  }
}
let isAllied = noMoreBarbarians();
console.log(isAllied);
