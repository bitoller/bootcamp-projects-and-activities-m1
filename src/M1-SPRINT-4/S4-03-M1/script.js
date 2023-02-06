//1

function renderUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
}
renderUpToTwenty();

//2

function tenInTenToAHundred() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
}
tenInTenToAHundred();

//3

function oddUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
oddUpToTwenty();

//4

function evenUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenUpToTwenty();

//5

function fromNegativeToPositive() {
  for (let i = -10; i <= 0; i++) {
    console.log(i);
  }
}
fromNegativeToPositive();

//6

function inDescendingDirection() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
inDescendingDirection();

//7

function toSquare() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}
toSquare();
