/*1- Faça um programa que peça um valor entre zero e dez.
Mostre uma mensagem caso o valor seja inválido e continue pedindo
até que o usuário informe um valor válido.*/

let value = parseInt(prompt("Digite um valor de 0 a 10"));

while (value < 0 || value > 10) {
  alert("Valor inválido");
  value = parseInt(prompt("Digite outro valor"));
}
alert("Valor válido");

/*2- Faça um programa que leia um nome de usuário e a sua senha e
não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro
e voltando a pedir as informações.*/

let userName = prompt("Digite seu nome de usuário");
let password = prompt("Digite sua senha");

while (password == userName) {
  alert("Erro: Senha inválida");
  password = prompt("Digite outra senha");
}
alert("Senha aceita"); 

/*3- ****Faça um programa que enquanto a entrada for números inteiros positivos,
menores que 10, continue somando. Quando um valor negativo ou maior que 10 for
informado, pare a execução, alerte a soma e a média.*/

let number = parseInt(prompt("Digite um número inteiro positivo"));
let numberSum = 0;
let numberAverage = 0;
let aux = 0;

while (number > 0 && number < 10) {
  numberSum += number;
  aux++;
  number = parseInt(prompt("Digite outro número inteiro positivo"));
}
if (number < 0 || number > 10) {
  numberAverage = numberSum / aux;
}
alert(`Soma: ${numberSum}. Média: ${numberAverage}.`); 

/*4- Faça um programa que registre votos. Em uma eleição para o grêmio estudantil
existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.
Solicite ao usuário que entre com a letra correspondente a um candidato e
incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com
um valor que não seja correspondente a um candidato,
alerte: "Candidato não encontrado".
Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".
Para encerrar a votação é necessário que entre com uma flag (variável de controle)
de parada: use o x para isso.
Quando o valor x for inserido alerte o número de votos que cada candidato teve.*/

let vote = prompt("Vote para o candidato a, b ou c").toLowerCase();
let a = 0;
let b = 0;
let c = 0;
while (vote != "x") {
  if (vote == "a") {
    a++;
    alert("Voto registrado com sucesso");
  } else if (vote == "b") {
    b++;
    alert("Voto registrado com sucesso");
  } else if (vote == "c") {
    c++;
    alert("Voto registrado com sucesso");
  } else {
    alert("Candidato não encontrado");
  }
  vote = prompt("Vote para o candidato a, b ou c");
}
alert(
  `O candidato A teve ${a} votos. O candidato B teve ${b} votos. O candidato C teve ${c} votos.`
);
