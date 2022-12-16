/*Contexto
Seu chefe precisa de dados da concessionária e de algumas alterações
cadastrais de seus veículos.
Dada a lista de veículos:*/

const cars = [
  {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ["Vidro Elétrico"],
    preco: "R$ 6.799,33",
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ["Trava"],
    preco: "R$ 12.199,13",
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: "R$ 11.099,11",
  },
  {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: "R$ 14.578,25",
  },
  {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: "R$ 28.399,13",
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: "R$ 14.350,45",
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: "R$ 22.109,21",
  },
  {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: "R$ 15.999,13",
  },
  {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: "R$ 17.251,36",
  },
];

/*1- Quantos veículos temos no estoque ?
Crie uma função que recebe a lista de carros como parâmetro e retorna a
quantidade total de veículos.*/

function countingVehicles(carList) {
  return carList.length;
}
let countedVehicles = countingVehicles(cars);
console.log(`Total de veículos: ${countedVehicles}`);

/*2- Quanto vale todo meu estoque de veículos?
Crie uma função que recebe a lista de carros como parâmetro e retorna a soma
do preço dos veículos.
Observe que o preço é do tipo string, terá que fazer o tratamento da informação.
Retorne uma string com o seguinte formato: 'A soma do preço de todos veículos
é R$ 00000000,00'*/

function totalPriceSum(carList) {
  let aux = 0;
  let formattedPrice = "";
  for (let index = 0; index < carList.length; index++) {
    aux += parseFloat(
      carList[index].preco.slice(3).replace(".", "").replace(",", ".")
    );
  }
  formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(aux.toFixed(2));
  return formattedPrice;
}
let totalPrice = totalPriceSum(cars);
console.log(`A soma do preço de todos veículos é ${totalPrice}`);

/*3- Procurando um veículo por marca
Crie uma função que recebe a lista de carros e a marca procurada como parâmetro,
filtre e retorne todos veículos da marca.*/

function filterBrand(carList, brand) {
  let brands = [];
  for (let index = 0; index < carList.length; index++) {
    if (carList[index].marca.toLowerCase() == brand.toLowerCase()) {
      brands.push(carList[index]);
    }
  }
  return brands;
}
let brandVehicles = filterBrand(cars, "VW");
console.log(brandVehicles);

/*4- Procurando um veículo por acessório
Crie uma função que recebe a lista de carros e o acessório procurado como parâmetro,
filtre e retorne todos veículos que tenham o acessório.*/

function filterAccessory(carList, accessory) {
  let accessories = [];
  for (let index = 0; index < carList.length; index++) {
    for (let j = 0; j < carList[index].acessorios.length; j++) {
      if (
        carList[index].acessorios[j].toLowerCase() == accessory.toLowerCase()
      ) {
        accessories.push(carList[index]);
      }
    }
  }
  return accessories;
}
let accesoriesVehicles = filterAccessory(cars, "trava");
console.log(accesoriesVehicles);

/*5- Encontrando veículos completos
Crie uma função que recebe a lista de carros como parâmetro,
filtre e retorne todos veículos que sejam completos.*/

function carAllFeatures(carList) {
  let features = [];
  for (let index = 0; index < carList.length; index++) {
    if (carList[index].completo == true) {
      features.push(carList[index]);
    }
  }
  return features;
}
let allFeatures = carAllFeatures(cars);
console.log(allFeatures);

/*6- Adicionando mais um carro a concessionária
Crie uma função para adicionar novos carros a lista. Retorne a lista de carros atualizada.*/

const myCar = {
  modelo: "Tucson",
  marca: "Hyundai",
  ano: "2016",
  cor: "Branco",
  completo: false,
  acessorios: [],
  preco: "R$ 120.999,13",
};

function addCar(carList, newCar) {
  carList.push(newCar);
  return carList;
}
let newCars = addCar(cars, myCar);
console.log(newCars);

/*7- Removendo um carro da lista de carros da concessionária
Crie uma função que recebe como parâmetro a lista de carros e a posição (índice) de um veículo.
Remova o elemento da posição e retorne a lista atualizada.
Lembre-se de tratar quando a posição for inválida.*/

function removingCar(carList, index) {
  if (carList.length > 0 && index >= 0 && index <= carList.length - 1) {
    carList.splice(index, 1);
    return carList;
  }
  return carList;
}
let carRemoved = removingCar(cars, 0);
console.log(carRemoved);

/*8- Procurando todos carros novos
Crie uma função que recebe a lista de carros como parâmetro.
Retorne a quantidade de carros com menos de 10 anos.*/

/*9- Quem são os donos ?
Seu chefe percebeu que deixou de incluir um campo importante nos objetos,
que é o campo de: 'donos'.
Todos os carros da concessionária são de segunda mão.
Com isso, desenvolva uma função que recebe como parâmetro a lista de carros,
uma posição da lista (índice) e um objeto pessoa.
Sabemos que não existe esta propriedade, então a propriedade donos deverá ser criada.
Retorne a lista atualizada.*/
