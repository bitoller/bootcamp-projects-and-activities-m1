//1

function toSquare() {
  for (let i = 15; i <= 200; i++) {
    console.log(i * i);
  }
}
toSquare();

//2

function toAdd() {
  let sumOfAdd = 0;
  for (let i = 1; i <= 100; i++) {
    sumOfAdd += i;
  }
  console.log(sumOfAdd);
}
toAdd();

//3

function numValueLessthan200DivBy4() {
  for (let i = 0; i < 200; i++) {
    if (i % 4 == 0) {
      console.log(i);
    }
  }
}
numValueLessthan200DivBy4();

//4

function sumOfAddAndArithmeticAvg() {
  let sum = 0;
  let even = 0;
  let arithmeticAverage = 0;
  for (let i = 50; i <= 70; i++) {
    if (i % 2 == 0) {
      sum += i;
      even++;
    }
  }
  arithmeticAverage = sum / even;
  console.log(`A soma é ${sum} e a média é ${arithmeticAverage}`);
}
sumOfAddAndArithmeticAvg();

//5

function celsiusConversion() {
  let celsius = 0;
  let fahrenheit = 0;
  for (let i = 10; i <= 100; i += 10) {
    celsius = i;
    fahrenheit = (9 * celsius + 160) / 5;
    console.log(`${celsius}C = ${fahrenheit}F`);
  }
}
celsiusConversion();
