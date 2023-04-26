<h1>JavaScript : Caixa Eletrônico</h1>

Nesta atividade vamos desenvolver as funcionalidades de um caixa eletrônico, a partir das informações de um cliente.

Nós sabemos que um caixa eletrônico, possui algumas responsabilidades, como: saque, saldo, depósito, entre outros... Agora, vamos manipular informações de um objeto para realizar algumas destas ações.

Quais funcionalidades vamos desenvolver  
1 - Saque  
2 - Saldo  
3 - Depósito

<h4>Estruturando as funcionalidades</h4>
<h3>Saque - Desenvolva uma função chamada makeWithDrawal. O objetivo principal da função é possibilitar ao cliente que ele faça retiradas, saques em sua conta.</h3>

Ele pode escolher, sacar da poupança ou do limite de crédito que o banco disponibilizou. Além disso, a função não deve permitir a entrada de valores negativos e não se pode realizar saques abaixo de R$ 5,00.

O caixa não realiza saques de valores com casa flutuante.

Caso o valor solicitado para saque não esteja disponível na conta, retorne "Saldo insuficiente".

<h4>Exemplificando</h4>

Valide a entrada de dados para determinar o valor recebido. Se for 1:

Crie uma variável chamada responseWithDraw que armazena a resposta de um prompt que solicita ao cliente que digite 1 para poupança ou 2 para crédito.
Crie uma variável chamada withdrawalAmount que armazena o valor que o usuário deseja sacar por meio de um prompt

- O valor de saque não pode ser do tipo string.  
- O valor de saque tem que ser um inteiro positivo.  
- O valor de saque deve ser maior que 5 e menor que 500  
- Se os requisitos da variável não for atendido retorne: "This value is not allowed"

Chame a função makeWithDrawal , passando um objeto do tipo user, o valor a ser sacado e o tipo da conta como parâmetro.

Teste se o valor pretendido de saque é menor ou igual ao saldo disponível para perfil de conta informado.

- Se o usuário tiver saldo disponível  
- Decremente o valor do saldo com valor de saque passado.  
- Retornar dentro de um alert: "Withdrawal carried out."  
- Caso contrário retorne dentro de uma alert: " Balance unavailable"  

<h3>Saldo - Desenvolva uma função chamada getBalance. Esta função irá receber como parâmetro o tipo da conta e o usuário. A função deverá retornar o saldo disponível.</h3>

<h4>Exemplificando</h4>

Valide a entrada de dados para determinar o valor recebido. Se for 2:

Crie uma variável chamada responseBalance que armazena a resposta de um prompt que solicita ao cliente que digite 1 para poupança ou 2 para crédito.  
Chame a função getBalance, passando o user e o tipo da conta.

Crie uma variável chamada balance que armazena o valor da propriedade de saldo referente ao tipo de conta informada.  
Retorne a variável balance em um alert.

<h3>Depósito - Desenvolva uma função chamada makeDeposit. Esta função deve receber como parâmetro o usuário e o valor a ser depositado.</h3>

Os depósitos são incrementados no saldo de poupança.

<h4>Exemplificando</h4>

Valide a entrada de dados para determinar o valor recebido. Se for 3:

Crie uma variável chamada valueForDeposit que armazena o valor que o usuário deseja depositar por meio de um prompt

- O valor de depósito não pode ser do tipo string.  
- O valor de depósito tem que ser um inteiro positivo.  
- O valor de depósito deve ser maior que 5 e menor que 500  
- Se os requisitos da variável não for atendido retorne: "This value is not allowed"

Chame a função makeDeposit, passando o user e o valor a ser depositado.  
Acesse a propriedade savingsBalance e a incremente com o valor passado para depósito.  
Retorne dentro de um alert "Deposit made successfully"
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
