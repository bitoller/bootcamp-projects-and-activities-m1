//1

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite outro número"));
let numberDiff = number1 - number2;

if (number1 > number2) {
  alert(
    `O maior número é ${number1} e a diferença entre os dois é ${numberDiff}`
  );
} else {
  alert(
    `O maior número é ${number2} e a diferença entre os dois é ${numberDiff}`
  );
}

//2

let nmbr1 = parseFloat(prompt("Digite um número"));
let nmbr2 = parseFloat(prompt("Digite outro número"));

if (nmbr1 == nmbr2) {
  alert("Os números são iguais");
} else if (nmbr1 > nmbr2) {
  alert(`O número ${nmbr1} é maior que o número ${nmbr2}`);
} else {
  alert(`O número ${nmbr2} é maior que o número ${nmbr1}`);
}

//3

let wage1 = parseFloat(prompt("Digite o seu salário"));
let installment1 = parseFloat(
  prompt("Digite o valor da prestação do empréstimo")
);
let loan1 = 0.3 * wage1;

if (installment1 > loan1) {
  alert("Empréstimo não concedido");
} else {
  alert("Empréstimo concedido");
}

//4

let number3 = parseInt(prompt("Digite um número"));

if (number3 % 3 == 0 && number3 % 5 == 0) {
  alert("Valor inválido");
} else if (number3 % 3 == 0) {
  alert("Valor divisível por 3");
} else if (number3 % 5 == 0) {
  alert("Valor divisível por 5");
} else if (number3 % 2 == 0) {
  alert("O valor é par");
} else {
  alert("O valor é ímpar");
}

//5

let number4 = parseInt(prompt("Digite um número de 1 a 7"));

if (number4 == 1) {
  alert("Domingo");
} else if (number4 == 2) {
  alert("Segunda-feira");
} else if (number4 == 3) {
  alert("Terça-feira");
} else if (number4 == 4) {
  alert("Quarta-feira");
} else if (number4 == 5) {
  alert("Quinta-feira");
} else if (number4 == 6) {
  alert("Sexta-feira");
} else if (number4 == 7) {
  alert("Sábado");
} else {
  alert("Erro: número inválido");
}

//6

let wage2 = parseFloat(prompt("Digite o seu salário mensal"));
let adjustment = parseFloat(prompt("Digite o porcentual de reajuste"));
let newWage = wage2 + (wage2 * adjustment) / 100;

if (adjustment <= 5) {
  alert(`O salário do funcionário corrigido é de: ${newWage.toFixed(2)}`);
} else {
  alert("Insira um reajuste menor que 5%");
}

//7

let dollar = parseFloat(prompt("Digite o valor em dólar"));
let exchangeRate = parseFloat(prompt("Digite a cotação atual do dólar"));
let real = dollar * exchangeRate;

alert(
  `$${dollar.toFixed(2)} é equivalente a R$${real.toFixed(
    2
  )} tendo ${exchangeRate} como cotação`
);

//8

let pestType = parseInt(prompt("Digite o tipo de praga de 1 a 4"));
let acres = parseFloat(prompt("Digite o tamanho da área em acres"));
let price = 0;
let finalPrice = 0;

if (pestType == 1) {
  price = acres * 50;
} else if (pestType == 2) {
  price = acres * 100;
} else if (pestType == 3) {
  price = acres * 150;
} else if (pestType == 4) {
  price = acres * 250;
}
if (acres >= 1000) {
  let areaDiscount = price * 0.05;
  finalPrice = price - areaDiscount;
  alert(`O valor a ser pago é de: R$${finalPrice.toFixed(2)}`);
} else if (price >= 750) {
  let surplusValue = price - 750;
  let priceDiscount = surplusValue * 0.1;
  finalPrice = price - priceDiscount;
  alert(`O valor a ser pago é de: R$${finalPrice.toFixed(2)}`);
} else {
  alert(`O valor a ser pago é de: R$${price.toFixed(2)}`);
}

//9

let time = parseFloat(prompt("Digite o tempo gasto"));
let speed = parseInt(prompt("Digite a velocidade"));
let distance = time * speed;
let gasUsed = distance / 12;

alert(
  `Seu veículo percorreu ${distance}km a ${speed} km/h em ${time}h de viagem e consumiu ${gasUsed.toFixed(
    2
  )}l de gasolina`
);

//10

let price2 = parseFloat(prompt("Digite o valor da prestação"));
let rate = parseFloat(prompt("Digite a taxa da prestação"));
let time2 = parseInt(prompt("Digite o tempo de atraso da prestação"));
let finalPrice2 = price2 + price2 * (rate / 100) * time2;

if (time2 == 0 || time2 % 1 != 0) {
  alert("Valor inválido: o tempo de atraso deve ser em dias");
} else {
  alert(`Valor da prestação: R$${finalPrice2.toFixed(2)}`);
}
