Entrega - Lista de JavaScript : Primeiros Passos

Introdução

Exercício resolvido.
Para te ajudar a começar a desenvolver suas resoluções, temos um exercício resolvido.

Claro, a lógica usada na construção dos demais exercícios, dependerá do enunciado.


A padaria de Rafael vende pães a 0,75 centavos a unidade.

Rafael sempre imprime o cupom fiscal para seus clientes, com algumas informações sobre a compra, como; nome, valor da compra, produto, quantidade do produto e a data da compra.

Escreva um programa que leia o nome do cliente e a quantidade de pães que ele deseja comprar.

alerte o valor da compra.

"Imprima" no cupom fiscal a data e hora da compra.

alerte em tela o cupom fiscal da seguinte forma.
⁠"Rafael - Valor da compra: 4.5 - Produto: Pães - Quantidade: 6 - Data: Thu, 06 Oct 2022 18:07:03 GMT ".

Resolução

<!-- let nomeCliente = prompt("Digite o nome do cliente");
let qtdPaes = parseInt(prompt("Quantas unidades de pães ?"));

let valorCompra = parseFloat(qtdPaes * 0.75);

alert(`Valor da compra é: ${valorCompra.toFixed(2)}`);

let data = Date.now();
let hoje = new Date(data).toUTCString();

alert(
  `${nomeCliente} - Valor da compra: ${valorCompra} - Produto: Pães - Quantidade: ${qtdPaes} - Data: ${hoje} `
); -->

Não se preocupe, com alguns trechos do código, algumas funcionalidades do javascript ainda não foram abordadas. Mas caso tenha curiosidade, pode aprender mais na documentação.

Sua vez!

1- Escreva um programa que, receba dois números inteiros.

Alerte em tela o maior número, e a diferença entre os números em formato de string(texto). Os valores recebidos devem ser convertidos para inteiro.

Exemplo
Entrada: 5 e 2
Saída: "O maior número é 5 e a diferença é 3"

2- Escreva um programa que, receba dois números. ⁠Alerte em tela qual o maior valor recebido.

Caso os valores recebidos sejam iguais, alerte a seguinte mensagem: "Números iguais".

Não sendo iguais, alerte: "O número x é maior que número y".

⁠⁠Exemplo
Entrada: 5.1 e 5.0
Saída: "O número 5.1 é maior que número 5.0".

Exemplo
Entrada: 5 e 5
Saída: "Números iguais".

3- Escreva um programa que, leia o salário de um trabalhador e o valor da prestação de um empréstimo.

Se a prestação for maior que 30% do salário imprima: "Empréstimo não concedido", caso contrario imprima: "Empréstimo concedido".

⁠Dica: Avalie quanto é 30% do salário e depois verifique se o valor do empréstimo é maior ou menor.

Exemplo
Entrada: 1000 e 350
Saída: "Empréstimo não concedido".

4- Escreva um programa que verifique se um número é divisível por 3 ou 5, mas atenção, caso o valor recebido seja divisível por 3 e 5, alerte: "Valor inválido".

Se o número for divisível por 3, alerte: "Valor divisível por 3".

Se o número for divisível por 5, alerte: "Valor divisível por 5".

Se o número informado não for inválido e nem divisível por 3 ou 5, verifique se o valor é par ou ímpar e alerte em tela.

Exemplo
Entrada: 15.
Saída: "Valor inválido".

Exemplo:
Entrada: 3
Saída: "Valor divisível por 3".

Exemplo
Entrada: 5.
Saída: "Valor divisível por 5".

⁠Exemplo
Entrada: 2.
Saída: "É par".

5- Escreva um programa que leia um número inteiro de 1 a 7 e informe o dia da semana
correspondente, sendo domingo, o dia de número 1.

Se o número não corresponder a um dia da semana, alerte uma mensagem de erro.


⁠⁠Exemplo
Entrada: 2.
Saída: "Segunda-Feira".

6- Escreva um programa que calcule o novo salário dos funcionários com base no percentual de reajuste.

O programa deve ler, o salário mensal do funcionário e o percentual de reajuste a ser atribuído.

Alertar o valor do novo salário.
O reajuste é de até 5%.

É permitida a entrada de valor percentual com casos decimais.

O alerte a seguinte frase: "O salário do funcionário corrigido é de: x"
Exemplo:
Entrada: 1100.00 e 2.5
Saída: "O salário do funcionário corrigido é de: R$1127.50"

7- Escreva um programa que realiza a conversão de dólar $ para real R$.
Leia o valor em dólar e a cotação atual.

Realiza a conversão do valor, multiplicando a valor em dólar pelo valor da cotação, alerte quanto em real equivale o valor em dólar informado.

Alerte o valor total da conversão em real, da seguinte maneira: "$x,xx é equivalente a R$y,yy, tendo xy como cotação."

Exemplo:
Entrada: 200 e 5.40
Saída: "$200,00 é equivalente a R$1080,00 tendo 5,40 como cotação."

8- Uma Cia de pulverização utiliza avião para pulverizar lavouras.
Os custos de pulverização dependem do tipo de praga e da área a ser contratada conforme a tabela:


Tipo 1 – ervas daninhas R$ 50,00 por acre;
Tipo 2 – gafanhotos R$ 100,00 por acre;
Tipo 3 – broca R$ 150,00 por acre;
Tipo 4 – todos acima R$ 250,00 por acre.

Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto de 5%.

Acrescendo mais um desconto, qualquer fazendeiro cujo custo for maior que R$ 750,00 tem um desconto de 10% sobre o valor que ultrapassar os R$ 750,00.

Caso ambos os descontos se aplicam, o da área é calculado antes.

Escreva um algoritmo que leia: o tipo de pulverização (1 a 4) e área a ser pulverizada; e alerte o valor a ser pago.

Desta forma: "O valor ser pago é de: R$ x"

Exemplo:
Entrada: 1 e 100
Saída: "O valor ser pago é de: R$4575,00".

9- Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 quilômetros por litro.

Para obter o cálculo, o usuário deve fornecer o tempo gasto (variável TEMPO) e a velocidade (variável VELOCIDADE) durante a viagem.
Desta forma, será possível obter a distância percorrida com a fórmula.

<!-- DISTÂNCIA = TEMPO * VELOCIDADE. -->

A partir do valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula.

<!-- ⁠LITROS_USADOS = DISTÂNCIA / 12.  -->

O programa deve alertar os valores da: velocidade, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.

Exemplo:
Entrada: 5, 80
Saída: "Seu veículo percorreu 400 km a 80 km/h em 5h de viagem e consumiu 33,33l de gasolina "
Utilize o método toFixed(), passando como parâmetro o valor 2 para ter somente duas casas decimais após a vírgula na resposta.

10- Escreva um programa que leia o valor(variável), a taxa(variável) e o tempo(variável) de atraso de uma prestação e efetue o cálculo referente ao atraso da fatura, para obter o valor corrigido.

Utilizando a fórmula.

<!-- ⁠PRESTAÇÃO = VALOR + (VALOR* (TAXA/100) * TEMPO). -->

Alerte o valor da prestação. Caso o usuário entre com o tempo 0 ou com casa decimal. Alerte: "Valor inválido o tempo de atraso deve ser em dias."

Exemplo:
⁠Entrada: 220, 8 e 8
Saída: "R$ 360,8"

Exemplo:
Entrada: 220, 3 e 0.5
Saída: "Valor inválido o tempo de atraso deve ser em dias."

Crie um aquivo html, incorpore um aquivo javascript a ele. Todos os exercícios deverão ser realizadas no mesmo arquivo javascript.
Para que um algoritmo não atrapalhe o outro, basta comentar o anterior.