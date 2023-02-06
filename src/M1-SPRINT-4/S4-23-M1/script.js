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

//1

function countingVehicles(carList) {
  return carList.length;
}
let countedVehicles = countingVehicles(cars);
console.log(`Total de veículos: ${countedVehicles}`);

//2

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

//3

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

//4

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

//5

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

//6

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

//7

function removingCar(carList, index) {
  if (carList.length > 0 && index >= 0 && index <= carList.length - 1) {
    carList.splice(index, 1);
    return carList;
  }
  return carList;
}
let carRemoved = removingCar(cars, 0);
console.log(carRemoved);

//8

function lessThanTen(carList) {
  let currentYear = 2022;
  let carsUnderTen = [];
  let aux = 0;
  let yearDiff = 0;
  for (let index = 0; index < carList.length; index++) {
    aux = parseInt(carList[index].ano);
    yearDiff = currentYear - aux;
    if (yearDiff < 10) {
      carsUnderTen.push(carList[index]);
    }
  }
  return carsUnderTen;
}
let newCars2 = lessThanTen(cars);
console.log(newCars2);

//9

const person = {
  name: "Zoesharzol",
};

function owner(carList, index, object) {
  for (let i = 0; i < carList.length; i++) {
    carList[i].dono = "";
  }
  carList[index].dono = object.name;
  return carList;
}
let owners = owner(cars, 0, person);
console.log(owners);
