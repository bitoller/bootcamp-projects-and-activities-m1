/*1- Desenvolva uma função chamada vowelsCount que recebe um parâmetro:
1. lista, um array de strings.
Sua função deve retornar um novo array substituindo as
posições das strings por um número representando a contagem de
vogais daquelas palavras.*/

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

/*2- Desenvolva uma função chamada stringTripletGroup que recebe um parâmetro:
1. string, uma string representando uma frase.
Sua função deve retornar um novo array com esta frase fatiada
em 3 em 3 caracteres posicionados ao longo do array.
Caso a quantidade de letras da última posição seja menor que 3,
deverá ser completado com espaços vazios.*/

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

/*3- Desenvolva uma função chamada dominantPet que recebe um parâmetro:
1. lista, um array de strings contendo as palavras "dog" ou "cat"
escritas sem um padrão definido.
Sua função deve retornar uma string com o tipo de pet que aparece
mais vezes no array, ou seja, o dominante em maiúsculo
e com uma exclamação ("CAT!" ou "DOG!"). Caso a quantidade dos dois seja igual,
deverá retornar a string "DRAW!".*/

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

/*4- Desenvolva uma função chamada divisibleList que recebe dois parâmetros:
1. lista, um array de números.
2. numero, um número divisor.
Sua função deve percorrer o array recebido por parâmetro,
e retornar um novo array somente com os números divisíveis
pelo parâmetro divisor.*/

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

/*5- Desenvolva uma função chamada trustMeOrNot que recebe dois parâmetros:
1. bool, um valor booleando true ou false
1. numero, um número inteiro positivo.
Sua função deve retornar um array com a quantidade de posições
passadas por parâmetro e cada uma destas casas preenchido com o
valor booleano escolhido pelo parâmetro.*/

function trustMeOrNot(bool, number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(bool);
  }
  return array;
}
console.log(trustMeOrNot(true, 8));

/*6- Desenvolva uma função chamada changeLampStatus que recebe um parâmetro:
1. lista, um array com somente valores booleanos representando o
estado da lâmpada (ligado/desligado)
Sua função deve retornar um novo array com os valores booleanos
de cada posição invertido.*/

function changeLampStatus(list) {
  let array = [];
  for (let i = 0; i < list.length; i++) {
    array.push(!list[i]);
  }
  return array;
}
console.log(changeLampStatus([false, false, true, false, true, true, true]));

/*7- Desenvolva uma função chamada averageGrade que recebe um parâmetro:
1. lista, um array com números que representam as notas de atividades de um aluno (0.0 até 10.0)
Sua função deve retornar uma string dizendo qual a média destas notas.
O valor da média deve se limitar a duas casas decimais.*/

function averageGrade(list) {
  let grades = 0;
  for (let i = 0; i < list.length; i++) {
    grades += list[i];
  }
  return `A média das notas é: ${(grades / list.length).toFixed(2)}`;
}
console.log(averageGrade([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]));

/*8- Desenvolva uma função chamada canvasDeliveriesPercentage que
recebe um parâmetro:
1. lista, um array com vários números inteiros/float representando
as notas de um aluno (0.0 até 10.0).
Sua função deve retornar uma string dizendo qual a porcentagem
de entregas que o aluno atingiu.
Consideraremos que cada entrega possui o valor de 10.0 pontos,
sendo este o máximo.
O valor da porcentagem deve se limitar a duas casas decimais.*/

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
