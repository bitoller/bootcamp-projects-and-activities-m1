//1

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

//2

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

//3

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
