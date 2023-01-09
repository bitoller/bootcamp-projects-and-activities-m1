//1

function vowelsCount(list) {
  let vwelCount = 0;
  let vowelStorage = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (
        list[i][j] == "a" ||
        list[i][j] == "e" ||
        list[i][j] == "i" ||
        list[i][j] == "o" ||
        list[i][j] == "u"
      ) {
        vwelCount++;
      }
    }
    vowelStorage.push(vwelCount);
    vwelCount = 0;
  }
  return vowelStorage;
}
console.log(
  vowelsCount(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"])
);

//2

function stringTripletGroup(string) {
  let wordCut = [];
  let aux = string;
  while (aux.length > 0) {
    wordCut.push(aux.slice(0, 3));
    aux = aux.slice(3, aux.length);
  }
  while (wordCut[wordCut.length - 1].length < 3) {
    wordCut[wordCut.length - 1] += " ";
  }
  return wordCut;
}
console.log(stringTripletGroup("Os três mosqueteiros"));

//3

function dominantPet(list) {
  let dog = 0;
  let cat = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].toLowerCase().includes("dog") == true) {
      dog++;
    } else {
      cat++;
    }
  }
  if (dog > cat) {
    return "DOG!";
  } else if (cat > dog) {
    return "CAT!";
  } else {
    return "DRAW!";
  }
}
console.log(
  dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT", "dog", "dog"])
);

//4

function divisibleList(list, number) {
  let divByNumber = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % number == 0) {
      divByNumber.push(list[i]);
    }
  }
  return divByNumber;
}
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));

//5

function trustMeOrNot(bool, number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(bool);
  }
  return array;
}
console.log(trustMeOrNot(true, 8));

//6

function changeLampStatus(list) {
  let array = [];
  for (let i = 0; i < list.length; i++) {
    array.push(!list[i]);
  }
  return array;
}
console.log(changeLampStatus([false, false, true, false, true, true, true]));

//7

function averageGrade(list) {
  let grades = 0;
  for (let i = 0; i < list.length; i++) {
    grades += list[i];
  }
  return `A média das notas é: ${(grades / list.length).toFixed(2)}`;
}
console.log(averageGrade([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]));

//8

function canvasDeliveriesPercentage(list) {
  let percentage = 0;
  let grades = 0;
  for (let i = 0; i < list.length; i++) {
    grades += list[i];
  }
  percentage = (grades * (list.length * 10)) / 100;
  return `A porcentagem total de entregas atingida é: ${percentage.toFixed(
    2
  )}%`;
}
console.log(
  canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7])
);
