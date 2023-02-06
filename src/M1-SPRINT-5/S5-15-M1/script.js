const user = {
  name: "Jhon Doyle Fox",
  savingsBalance: 500,
  cardsInformation: [
    {
      number: "5160 4196 4843 3388",
      creditBalance: 1000,
      ensign: "American Express",
    },
  ],
};

function makeWithdrawal(object, money, accountType) {
  if (money <= 5 || money >= 500) {
    return "This value is not allowed";
  }
  if (accountType == 1) {
    if (money <= object.savingsBalance) {
      object.savingsBalance -= money;
      return "Withdrawal carried out";
    } else {
      return "Balance unavailable";
    }
  }
  if (accountType == 2) {
    if (money <= object.cardsInformation[0].creditBalance) {
      object.cardsInformation[0].creditBalance -= money;
      return "Withdrawal carried out";
    } else {
      return "Balance unavailable";
    }
  }
  return "Error";
}

function getBalance(object, accountType) {
  let balance = 0;
  if (accountType == 1) {
    balance = object.savingsBalance;
    return `Account balance: $${balance}`;
  }
  if (accountType == 2) {
    balance = object.cardsInformation[0].creditBalance;
    return `Account balance: $${balance}`;
  }
  return "Error";
}

function makeDeposit(object, money) {
  if (money <= 5 || money >= 500) {
    return "This value is not allowed";
  }
  object.savingsBalance += money;
  return "Deposit made successfully";
}

let functions = parseInt(
  prompt("Type 1 for Withdraw, 2 for Account Balance or 3 for Deposit")
);
let responseWithdraw = 0;

let valueForDeposit = 0;
let withdrawalAmount = 0;

let promptAlert = "";
let promptBalance = "";
if (functions == 1) {
  responseWithdraw = parseInt(
    prompt("Type 1 for Savings or 2 for Credit Balance")
  );
  withdrawalAmount = parseInt(prompt("Type the withdrawal amount"));
  promptAlert = makeWithdrawal(user, withdrawalAmount, responseWithdraw);
  promptBalance = getBalance(user, responseWithdraw);
} else if (functions == 2) {
  responseWithdraw = parseInt(
    prompt("Type 1 for Savings or 2 for Credit Balance")
  );
  promptAlert = getBalance(user, responseWithdraw);
} else if (functions == 3) {
  valueForDeposit = parseInt(prompt("Type the deposit amount"));
  promptAlert = makeDeposit(user, valueForDeposit);
  promptBalance = getBalance(user, 1);
} else {
  promptAlert = "Error";
}
alert(promptAlert);
console.log(promptAlert);
alert(promptBalance);
console.log(promptBalance);
