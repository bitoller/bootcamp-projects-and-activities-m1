//1

let minimalWage = parseFloat(prompt("Digite o salário mínimo"));
let kiloWatts = parseFloat(
  prompt("Digite os quilowatts gastos por residência")
);
let real = ((minimalWage / 7) * 1) / 100;
let price = real * kiloWatts;
let newPrice = price - price * 0.1;
alert(
  `O valor em reais é R$${real.toFixed(
    2
  )}, o valor a ser pago é de R$${price.toFixed(
    2
  )}, com desconto R$${newPrice.toFixed(2)}`
);

//2

let productValue = parseFloat(prompt("Digite o valor do produto"));
let newValue = productValue - productValue * 0.09;
alert(`Novo valor: ${newValue}`);

//3

let text1 = prompt("Digite um texto");
let text2 = prompt("Digite um texto");
let swap = "";
swap = text1;
text1 = text2;
text2 = swap;
alert(
  `Os valores originais do primeiro texto e segundo texto: ${swap}, ${text1}. Após a troca são: ${text1}, ${swap}`
);

//4

let vhs = parseInt(prompt("Digite quantas fitas"));
let vhsPrice = parseFloat(prompt("Digite o valor do aluguel da fita"));
let vhsRentedMonthly = vhs / 3;
let vhsRentedYearly = (vhs / 3) * 12;
let annualInvoice = vhsPrice * vhsRentedYearly;
let vhsRentedDelayMonthly =
  (vhsRentedMonthly / 10) * (vhsPrice * 0.1) + vhsPrice;
let vhsAtTheEnd = vhs - vhs * 0.02 + vhs / 10;
alert(
  `Faturamento anual: R$${annualInvoice.toFixed(
    2
  )}. Valor ganho com multas por mês: R$${vhsRentedDelayMonthly.toFixed(
    2
  )}. Quantidade de fitas que a locadora terá no final do ano: ${vhsAtTheEnd}.`
);

//5

let number5 = parseInt(prompt("Digite um número com 3 casas"));
let hundreds = parseInt((number5 / 100) % 10);
let tens = parseInt((number5 / 10) % 10);
let units = parseInt(number5 % 10);
alert(`Centenas: ${hundreds}. Dezenas: ${tens}. Unidades: ${units}.`);

//6

let number6 = parseInt(prompt("Digite um número com 3 casas"));
let hundreds1 = parseInt((number6 / 100) % 10);
let tens1 = parseInt((number6 / 10) % 10);
let units1 = parseInt(number6 % 10);
let invertedN = units * 100 + tens * 10 + hundreds;
//let invertedN = parseInt(`${units1}${tens1}${hundreds1}`);
alert(invertedN);

//7

let bankAcc = parseInt(
  prompt("Digite o número da sua conta corrente de 3 dígitos")
);
let bankAccHundreds = parseInt((bankAcc / 100) % 10);
let bankAccTens = parseInt((bankAcc / 10) % 10);
let bankAccUnits = parseInt(bankAcc % 10);
let reversedBankAcc = bankAccUnits * 100 + bankAccTens * 10 + bankAccHundreds;
let bankAccAdd = bankAcc + reversedBankAcc;

let checkDigitHundred = parseInt((bankAccAdd / 100) % 10);
let checkDigitTens = parseInt((bankAccAdd / 10) % 10);
let checkDigitUnits = parseInt(bankAccAdd % 10);
let checkDigitMultiplication =
  checkDigitHundred * 1 + checkDigitTens * 2 + checkDigitUnits * 3;

let checkDigit = parseInt(checkDigitMultiplication % 10);
alert(checkDigit);
