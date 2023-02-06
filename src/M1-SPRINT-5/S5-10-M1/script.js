//SOMA

function add(number1, number2) {
  return number1 + number2;
}
let result1 = add(2, 4);
console.log(result1);

//MULTIPLICAÇÃO

function multiply(number1, number2) {
  let multiplyResult = 0;
  for (let i = 0; i < number2; i++) {
    multiplyResult = add(multiplyResult, number1);
  }
  return multiplyResult;
}
let result2 = multiply(6, 8);
console.log(result2);

//POTÊNCIA

function power(x, n) {
  let powerResult = 1;
  for (let i = 0; i < n; i++) {
    powerResult = multiply(powerResult, x);
  }
  return powerResult;
}
let result3 = power(2, 8);
console.log(result3);

//FATORIAL

function factorial(number) {
  let factorialResult = 1;
  for (let i = number; i > 1; i--) {
    factorialResult = multiply(factorialResult, i);
  }
  return factorialResult;
}
let result4 = factorial(4);
console.log(result4);
