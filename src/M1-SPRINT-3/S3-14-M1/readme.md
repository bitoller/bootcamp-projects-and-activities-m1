Entrega: Praticando com variáveis

Exercício resolvido.
Para te ajudar a começar a desenvolver suas resoluções, temos um exercício resolvido.

Claro, a lógica usada na construção dos demais exercícios, dependerá do enunciado.

A padaria de Rafael vende pães a 0,75 centavos a unidade.

Rafael sempre imprime o cupom fiscal para seus clientes, com algumas informações sobre a compra, como; nome, valor da compra, produto, quantidade do produto e a data da compra.

Escreva um programa que leia o nome do cliente e a quantidade de pães que ele deseja comprar.

Alerte o valor da compra.

"Imprima" no cupom fiscal a data e hora da compra.

Alerte em tela o cupom fiscal da seguinte forma.

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

1- O litro da gasolina está custando R$ 6,80. Solicite ao usuário que entre com quanto em dinheiro ele deseja comprar de gasolina.

Alerte em tela a quantidade em litros abastecido pelo cliente.

Desta forma: "O Cliente abasteceu 0l".

Use a fórmula:

⁠litros = valorDaCompra / valorLitro

Exemplo:
Entrada: 13.60
Saída: "O Cliente abasteceu 2l".

2- Escreva um programa que leia uma temperatura em graus Celsius e alerte o valor convertido em graus Fahrenheit.

Desta forma: "O valor xºc em Fahrenheit é 0".
 
A fórmula de conversão é:

⁠F = (9 * C + 160) / 5 

sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

⁠Exemplo:
Entrada: 22
Saída: "O valor 22ºc em Fahrenheit é 71.6"⁠

3- Escreva um programa que leia uma temperatura em graus Fahrenheit e alerte o valor convertido em graus Celsius. 

Desta forma: "O valor xºf em Celsius é 0".

A fórmula de conversão é:

C = ((F - 32) * 5) / 9

⁠sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

⁠Exemplo:
Entrada:71.6
Saída: "O valor 71.6ºf em Celsius é 21.99998".

4- Escreva um programa que leia o comprimento, a largura e a altura de uma caixa retangular em metros.

Calcule e alerte o valor do volume desta caixa.

Desta forma: "O volume é de: 000m3⁠".

utilizando a fórmula: 

VOLUME = COMPRIMENTO* LARGURA* ALTURA.

Exemplo:
Entrada: 12(Comprimento), 12(Largura) * 6(Altura)
Saída: "O volume é de: 864m³⁠".

5- Escreva um programa que faça a leitura de um valor numérico inteiro e alerte o valor lido elevado ao quadrado.

Desta forma: "O valor x ao quadrado é xx"

⁠⁠Exemplo:
Entrada: 12
Saída: "O valor 12 ao quadrado é 144"

6- Escreva um programa que leia 5 números.

Atribua cada nota a uma variável, realize a soma de todas e tire a média. Alerte a soma e a média.

Desta forma: "A soma dos valores informados é: x e a média das notas é: x".

Fórmula para o cálculo da média:

Ma = (x + x + x .... xn) / n

Os valores entre parenteses representam os valores lidos pelo programa. n representa a quantidade de números usados no cálculo.

Exemplo:
Entrada: 5,2,4,9,10
Saída: "A soma dos valores informados é: 30 e a média das notas é: 6"

7- Escreva um programa que leia 2 valores inteiros positivos e alerte o resto da divisão do primeiro pelo segundo.

Desta forma: "O resto da divisão de x por y é: xy "

⁠Exemplo:
Entrada: 11 e 2
Saída: "O resto da divisão de 11 por 2 é: 1 "

8- Escreva um programa que leia uma frase ou uma palavra, e alerte o comprimento desta string.

Desta forma: "Este texto tem x caracteres".

Exemplo:
Entrada:'pneumoultramicroscopicossilicovulcanoconiótico'
Saída: "Este texto tem 46 caracteres".

9- Escreva um programa que leia uma palavra ou frase e alerte qual a primeira e a última letra de uma string, a primeira deve ser alertada em caixa alta(Maiúscula) e a segunda em caixa baixa(Minúscula).

Desta forma: "A primeira letra deste texto é A e última é a".

⁠Exemplo:
Entrada:'pneumoultramicroscopicossilicovulcanoconiótico'
Saída: "A primeira letra deste texto é P e última é o".

10- Escreva um programa que leia o nome, sobrenome e a idade e setor de uma pessoa. Estas informações são as informações do crachá de um funcionário.

O nome e o sobrenome devem estar em maiúsculo.

Alerte os dados do funcionário em tela, para que ele confirme as informações.

Desta forma: "nome: GERALDO LUIZ - idade: 32 - Setor: Produção"

Exemplo:
Entrada:geraldo(nome), luiz(sobrenome), 32(idade), Produção(setor)
Saída: "nome: GERALDO LUIZ - idade: 32 - Setor: Produção"

Crie um aquivo html, incorpore um aquivo javascript a ele. Todos os exercícios deverão ser realizadas no mesmo arquivo javascript.
Para que um algoritmo não atrapalhe o outro, basta comentar o anterior.