//1

function fibonacciNumbers() {
  let currentTerm = 1;
  let previousTerm = 0;
  let nextTerm = 0;
  for (let i = 1; i < 15; i++) {
    nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
    console.log(previousTerm);
  }
}
fibonacciNumbers();

//2

function chessWheat() {
  let wheat = 1;
  let wheatTotal = 1;
  for (let i = 1; i < 64; i++) {
    wheat = wheat * 2;
    wheatTotal += wheat;
  }
  console.log(wheatTotal);
}
chessWheat();
