//1

let personList = {
  name: "Elizabeth Trumbull",
  yearOfBirth: 1991,
  cpf: 51692345434,
  city: "Atlanta",
  state: "GA",
  address: "611 Elk Creek Road",
};
console.log(personList);

//2

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

//3

let courseList = {
  name: "Programação Fullstack",
  durationInYears: 1,
  class: "T16",
  modules: 6,
};
console.log(courseList);

//4

let addressList = {
  city: "Curitiba",
  state: "Paraná",
  address: "Rua Francisco Moro",
  zipCode: 81070340,
};
console.log(addressList);

//1

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

//2

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

//3

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

//4

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

//5

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
