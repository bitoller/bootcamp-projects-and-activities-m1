/*Nesta atividade vamos desenvolver as funcionalidades de um caixa eletrônico,
a partir das informações de um cliente.
Nós sabemos que um caixa eletrônico, possui algumas responsabilidades,
como: saque, saldo, depósito, entre outros... Agora, vamos manipular
informações de um objeto para realizar algumas destas ações.
Dado o objeto:
Quais funcionalidades vamos desenvolver
1 - Saque
2 - Saldo
3 - Depósito
Estruturando as funcionalidades
Saque - Desenvolva uma função chamada makeWithDrawal.
O objetivo principal da função é possibilitar ao cliente que ele faça retiradas,
saques em sua conta.
Ele pode escolher, sacar da poupança ou do limite de crédito que
o banco disponibilizou. Além disso, a função não deve permitir a
entrada de valores negativos e não se pode realizar saques abaixo de R$ 5,00.
O caixa não realiza saques de valores com casa flutuante.
Caso o valor solicitado para saque não esteja disponível na conta,
retorne "Saldo insuficiente".
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 1:
Crie uma variável chamada responseWithDraw que armazena a resposta
de um prompt que solicita ao cliente que digite 1 para poupança
ou 2 para crédito.
Crie uma variável chamada withdrawalAmount que armazena o valor
que o usuário deseja sacar por meio de um prompt
O valor de saque não pode ser do tipo string.
O valor de saque tem que ser um inteiro positivo.
O valor de saque deve ser maior que 5 e menor que 500
Se os requisitos da variável não for atendido
retorne: "This value is not allowed"
Chame a função makeWithDrawal , passando um objeto do tipo user,
o valor a ser sacado e o tipo da conta como parâmetro.
Teste se o valor pretendido de saque é menor ou igual ao saldo
disponível para perfil de conta informado.
Se o usuário tiver saldo disponível
Decremente o valor do saldo com valor de saque passado.
Retornar dentro de um alert: "Withdrawal carried out."
Caso contrário retorne dentro de uma alert: " Balance unavailable"
Saldo - Desenvolva uma função chamada getBalance.
Esta função irá receber como parâmetro o tipo da conta e o usuário.
A função deverá retornar o saldo disponível.
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 2:
Crie uma variável chamada responseBalance que armazena a resposta de um
prompt que solicita ao cliente que digite 1 para poupança ou 2 para crédito.
Chame a função getBalance, passando o user e o tipo da conta.
Crie uma variável chamada balance que armazena o valor da propriedade
de saldo referente ao tipo de conta informada.
Retorne a variável balance em um alert.
Depósito - Desenvolva uma função chamada makeDeposit.
Esta função deve receber como parâmetro o usuário e o valor a ser depositado.
Os depósitos são incrementados no saldo de poupança.
Exemplificando
Valide a entrada de dados para determinar o valor recebido. Se for 3:
Crie uma variável chamada valueForDeposit que armazena o valor
que o usuário deseja depositar por meio de um prompt
O valor de depósito não pode ser do tipo string.
O valor de depósito tem que ser um inteiro positivo.
O valor de depósito deve ser maior que 5 e menor que 500
Se os requisitos da variável não for atendido
retorne: "This value is not allowed"
Chame a função makeDeposit, passando o user e o valor a ser depositado.
Acesse a propriedade savingsBalance e a incremente com o
valor passado para depósito.
Retorne dentro de um alert "Deposit made successfully"*/

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

//1

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

//2

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

//3

function makeDeposit(object, money) {
  if (money <= 5 || money >= 500) {
    return "This value is not allowed";
  }
  object.savingsBalance += money;
  return "Deposit made successfully";
}

//Prompts & Results

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
